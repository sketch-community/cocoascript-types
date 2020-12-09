declare namespace cocoascript {
/**
 * A collection of multiple closed polygon shapes.
 * doc://com.apple.documentation/documentation/mapkit/mkmultipolygon
 */
interface MKMultiPolygon extends MKShape {
  // doc://com.apple.documentation/documentation/mapkit/mkmultipolygon/3088835-initwithpolygons
  initWithPolygons(polygons: cocoascript.MKPolygon):cocoascript.MKMultiPolygon;
  // doc://com.apple.documentation/documentation/mapkit/mkmultipolygon/3088836-polygons
  polygons(): cocoascript.MKPolygon;
  setPolygons(): void;
  // 
  alloc():cocoascript.MKMultiPolygon;
  // 
  init():cocoascript.MKMultiPolygon;
}
}
declare const MKMultiPolygon: cocoascript.MKMultiPolygon;

