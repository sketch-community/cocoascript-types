declare namespace cocoascript {
/**
 * A set of drawing attributes that represents the configuration of an image renderer context.
 * doc://com.apple.documentation/documentation/uikit/uigraphicsimagerendererformat
 */
interface UIGraphicsImageRendererFormat extends UIGraphicsRendererFormat {
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerendererformat/1649238-opaque
  opaque(): cocoascript.BOOL;
  setOpaque(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerendererformat/1649228-scale
  scale(): cocoascript.CGFloat;
  setScale(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerendererformat/2998464-preferredrange
  preferredRange(): cocoascript.UIGraphicsImageRendererFormatRange;
  setPreferredRange(): void;
  // doc://com.apple.documentation/documentation/uikit/uigraphicsimagerendererformat/1649227-prefersextendedrange
  prefersExtendedRange(): cocoascript.BOOL;
  setPrefersExtendedRange(): void;
  // 
  alloc():cocoascript.UIGraphicsImageRendererFormat;
  // 
  init():cocoascript.UIGraphicsImageRendererFormat;
}
}
declare const UIGraphicsImageRendererFormat: cocoascript.UIGraphicsImageRendererFormat;

