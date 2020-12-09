declare namespace cocoascript {
/**
 * The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.   
 * doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer
 */
interface MKTileOverlayRenderer extends MKOverlayRenderer {
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer/1452303-initwithtileoverlay
  initWithTileOverlay(overlay: cocoascript.MKTileOverlay):cocoascript.MKTileOverlayRenderer;
  // doc://com.apple.documentation/documentation/mapkit/mktileoverlayrenderer/1452676-reloaddata
  reloadData():void;
  // 
  alloc():cocoascript.MKTileOverlayRenderer;
  // 
  init():cocoascript.MKTileOverlayRenderer;
}
}
declare const MKTileOverlayRenderer: cocoascript.MKTileOverlayRenderer;

