declare namespace cocoascript {
/**
 * Use this structure to specify the index values for a single tile. 
 * doc://com.apple.documentation/documentation/mapkit/mktileoverlaypath
 */
interface MKTileOverlayPath {
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlaypath/1452608-x
  x(): cocoascript.NSInteger;
  setX(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlaypath/1452764-y
  y(): cocoascript.NSInteger;
  setY(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlaypath/1452379-z
  z(): cocoascript.NSInteger;
  setZ(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlaypath/1452481-contentscalefactor
  contentScaleFactor(): cocoascript.CGFloat;
  setContentScaleFactor(): void;
}
}

