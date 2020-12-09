declare namespace cocoascript {
/**
 * The 
 * doc://com.apple.documentation/documentation/quartz/ikimageview
 */
interface IKImageView extends NSView {
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504032-delegate
  delegate(): cocoascript.id;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504496-zoomfactor
  zoomFactor(): cocoascript.CGFloat;
  setZoomFactor(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504691-rotationangle
  rotationAngle(): cocoascript.CGFloat;
  setRotationAngle(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503607-currenttoolmode
  currentToolMode(): cocoascript.NSString;
  setCurrentToolMode(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503709-autoresizes
  autoresizes(): cocoascript.BOOL;
  setAutoresizes(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503565-hashorizontalscroller
  hasHorizontalScroller(): cocoascript.BOOL;
  setHasHorizontalScroller(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1505256-hasverticalscroller
  hasVerticalScroller(): cocoascript.BOOL;
  setHasVerticalScroller(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503469-autohidesscrollers
  autohidesScrollers(): cocoascript.BOOL;
  setAutohidesScrollers(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504887-supportsdraganddrop
  supportsDragAndDrop(): cocoascript.BOOL;
  setSupportsDragAndDrop(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1505302-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504092-doubleclickopensimageeditpanel
  doubleClickOpensImageEditPanel(): cocoascript.BOOL;
  setDoubleClickOpensImageEditPanel(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503698-imagecorrection
  imageCorrection(): cocoascript.CIFilter;
  setImageCorrection(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503567-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504005-imagesize
  imageSize():cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503845-imageproperties
  imageProperties():cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504371-image
  image():cocoascript.CGImageRef;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503915-setimage
  setImage_imageProperties(image: cocoascript.CGImageRef, metaData: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1505314-setimagewithurl
  setImageWithURL(url: cocoascript.NSURL):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503535-setrotationangle
  setRotationAngle_centerPoint(rotationAngle: cocoascript.CGFloat, centerPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503762-setimagezoomfactor
  setImageZoomFactor_centerPoint(zoomFactor: cocoascript.CGFloat, centerPoint: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504450-zoomimagetofit
  zoomImageToFit(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504415-zoomimagetoactualsize
  zoomImageToActualSize(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504460-zoomimagetorect
  zoomImageToRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503800-zoomin
  zoomIn(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503436-zoomout
  zoomOut(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503855-crop
  crop(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1505282-flipimagehorizontal
  flipImageHorizontal(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503836-flipimagevertical
  flipImageVertical(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503769-rotateimageleft
  rotateImageLeft(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503427-rotateimageright
  rotateImageRight(sender: cocoascript.IKImageView):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504283-setoverlay
  setOverlay_forType(layer: cocoascript.CALayer, layerType: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504236-overlayfortype
  overlayForType(layerType: cocoascript.NSString):cocoascript.CALayer;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503677-scrolltopoint
  scrollToPoint(point: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504366-scrolltorect
  scrollToRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1503743-convertviewpointtoimagepoint
  convertViewPointToImagePoint(viewPoint: cocoascript.NSPoint):cocoascript.NSPoint;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504464-convertviewrecttoimagerect
  convertViewRectToImageRect(viewRect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504633-convertimagepointtoviewpoint
  convertImagePointToViewPoint(imagePoint: cocoascript.NSPoint):cocoascript.NSPoint;
  // doc://com.apple.documentation/documentation/quartz/ikimageview/1504409-convertimagerecttoviewrect
  convertImageRectToViewRect(imageRect: cocoascript.NSRect):cocoascript.NSRect;
  // 
  alloc():cocoascript.IKImageView;
  // 
  init():cocoascript.IKImageView;
}
}
declare const IKImageView: cocoascript.IKImageView;

