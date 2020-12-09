declare namespace cocoascript {
/**
 * An overlay that covers an area of the map with bitmap tiles. 
 * doc://com.apple.documentation/documentation/mapkit/mktileoverlay
 */
interface MKTileOverlay extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452705-initwithurltemplate
  initWithURLTemplate(URLTemplate: cocoascript.NSString):cocoascript.MKTileOverlay;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452108-tilesize
  tileSize(): cocoascript.CGSize;
  setTileSize(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452251-geometryflipped
  geometryFlipped(): cocoascript.BOOL;
  setGeometryFlipped(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452199-minimumz
  minimumZ(): cocoascript.NSInteger;
  setMinimumZ(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452660-maximumz
  maximumZ(): cocoascript.NSInteger;
  setMaximumZ(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452604-canreplacemapcontent
  canReplaceMapContent(): cocoascript.BOOL;
  setCanReplaceMapContent(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452256-urltemplate
  URLTemplate(): cocoascript.NSString;
  setURLTemplate(): void;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452606-urlfortilepath
  URLForTilePath(path: cocoascript.MKTileOverlayPath):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlay/1452445-loadtileatpath
  loadTileAtPath_result(path: cocoascript.MKTileOverlayPath, result: cocoascript.NSError):void;
  // 
  alloc():cocoascript.MKTileOverlay;
  // 
  init():cocoascript.MKTileOverlay;
}
}
declare const MKTileOverlay: cocoascript.MKTileOverlay;

