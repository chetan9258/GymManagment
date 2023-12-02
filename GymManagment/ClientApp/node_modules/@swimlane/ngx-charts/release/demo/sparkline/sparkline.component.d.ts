import { ViewDimensions, BaseChartComponent, ColorHelper } from '../../src';
export declare class SparklineComponent extends BaseChartComponent {
    autoScale: boolean;
    curve: any;
    schemeType: string;
    valueDomain: number[];
    animations: boolean;
    dims: ViewDimensions;
    xSet: any;
    xDomain: any;
    yDomain: any;
    seriesDomain: any;
    yScale: any;
    xScale: any;
    colors: ColorHelper;
    scaleType: string;
    transform: string;
    margin: number[];
    update(): void;
    getXDomain(): any[];
    getYDomain(): any[];
    getSeriesDomain(): any[];
    getXScale(domain: any, width: any): any;
    getYScale(domain: any, height: any): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    trackBy(index: any, item: any): string;
    setColors(): void;
}
