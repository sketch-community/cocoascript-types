declare namespace cocoascript {
/**
 * A graphics renderer for creating Core Graphics-backed images.
 * doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer
 */
interface UIGraphicsImageRenderer extends UIGraphicsRenderer {
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer/1649229-initwithbounds
  initWithBounds_format(bounds: cocoascript.CGRect, format: cocoascript.UIGraphicsImageRendererFormat):cocoascript.UIGraphicsImageRenderer;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer/1649231-initwithsize
  initWithSize(size: cocoascript.CGSize):cocoascript.UIGraphicsImageRenderer;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer/1649236-initwithsize
  initWithSize_format(size: cocoascript.CGSize, format: cocoascript.UIGraphicsImageRendererFormat):cocoascript.UIGraphicsImageRenderer;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer/1649230-imagewithactions
  imageWithActions(actions: cocoascript.UIGraphicsImageDrawingActions):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer/1649234-jpegdatawithcompressionquality
  JPEGDataWithCompressionQuality_actions(compressionQuality: cocoascript.CGFloat, actions: cocoascript.UIGraphicsImageDrawingActions):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerenderer/1649233-pngdatawithactions
  PNGDataWithActions(actions: cocoascript.UIGraphicsImageDrawingActions):cocoascript.NSData;
  // 
  alloc():cocoascript.UIGraphicsImageRenderer;
  // 
  init():cocoascript.UIGraphicsImageRenderer;
}
}
declare const UIGraphicsImageRenderer: cocoascript.UIGraphicsImageRenderer;

