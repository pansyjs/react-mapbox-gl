import type Supercluster from 'supercluster';
import type { PaddingOptions } from 'mapbox-gl';

export type RenderMarkerFun = (data: any) => React.ReactNode;
export type RenderClusterMarkerFun = (count: number, clusterId: string) => React.ReactNode;

export type { Supercluster };

export interface MarkerClusterProps {
  /**
   * 聚合参数设置
   */
  cluster?: Supercluster.Options<any, any>;
  /**
   * 点击聚合点时，是否散开。
   * @default true
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
  onClick?: any;
  onClusterClick?: any;
}
