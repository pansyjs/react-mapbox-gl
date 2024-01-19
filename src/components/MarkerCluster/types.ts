import type Supercluster from 'supercluster';
import type { GeoJsonProperties, GeoJsonObject, Point } from 'geojson';
import type { PaddingOptions } from 'mapbox-gl';

export type AnyObject = Record<PropertyKey, any>;
export type RenderMarkerFun = (data: any) => React.ReactNode;
export type RenderClusterMarkerFun = (count: number) => React.ReactNode;

export type { Supercluster };

export interface Feature<P = GeoJsonProperties> extends GeoJsonObject {
  type: 'Feature';
  /**
   * The feature's geometry
   */
  geometry: Point;
  /**
   * A value that uniquely identifies this feature in a
   * https://tools.ietf.org/html/rfc7946#section-3.2.
   */
  id?: string | number | undefined;
  /**
   * Properties associated with this feature.
   */
  properties: P;
}

export interface MarkerClusterProps<D extends object = any> {
  data?: Feature<D>[];
  /**
   * 聚合参数设置
   */
  cluster?: Supercluster.Options<any, any>;
  /**
   * 点击聚合点时，是否散开。
   * @default false
   */
  zoomOnClick?: boolean;
  /**
   * 非聚合点渲染扩展
   */
  render: React.ReactNode | RenderMarkerFun;
  /**
   * 聚合点渲染扩展
   */
  renderCluster?: React.ReactNode | RenderClusterMarkerFun;
  /**
   * 添加到给定边界的填充量
   * @default 20
   */
  zoomOnClickPadding?: number | PaddingOptions;
  onClick?: (data: D) => void;
  onClusterClick?: (count: number, clusterId: number) => void;
}

export type RefMarkerCluster = <D extends AnyObject = AnyObject>(
  props: React.PropsWithChildren<MarkerClusterProps<D>> & React.RefAttributes<Supercluster>,
) => React.ReactElement;
