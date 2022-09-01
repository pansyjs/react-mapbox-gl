import { Layer, Map, Source } from '@pansy/react-mapbox-gl';

export default () => {
  const clusterLayer = {
    id: 'clusters',
    type: 'circle',
    source: 'earthquakes',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
    },
  };

  const clusterCountLayer = {
    id: 'cluster-count',
    type: 'symbol',
    source: 'earthquakes',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12,
    },
  };

  const unclusteredPointLayer = {
    id: 'unclustered-point',
    type: 'circle',
    source: 'earthquakes',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff',
    },
  };

  return (
    <div style={{ height: 500 }}>
      <Map zoom={2} center={[122.4, 37.8]} style={'mapbox://styles/mapbox/streets-v11'}>
        <Source
          id="earthquakes"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        />
        <Layer
          {...(clusterLayer as any)}
          onClick={(e) => {
            const map = e.target;

            const features = map.queryRenderedFeatures(e.point, {
              layers: ['clusters'],
            });

            // @ts-ignore
            const clusterId = features[0].properties.cluster_id;

            // @ts-ignore
            map.getSource('earthquakes').getClusterExpansionZoom(clusterId, (err, zoom) => {
              if (err) return;

              map.easeTo({
                // @ts-ignore
                center: features[0].geometry.coordinates,
                zoom: zoom,
              });
            });
          }}
          onMouseEnter={(e) => {
            e.target.getCanvas().style.cursor = 'pointer';
          }}
          onMouseLeave={(e) => {
            e.target.getCanvas().style.cursor = '';
          }}
        />
        <Layer {...(clusterCountLayer as any)} />
        <Layer {...(unclusteredPointLayer as any)} />
      </Map>
    </div>
  );
};
