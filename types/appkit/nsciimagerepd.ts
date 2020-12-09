declare namespace cocoascript {
/**
 * An object that can render an image from a Core Image object. 
 * doc://com.apple.documentation/documentation/appkit/nsciimagerep
 */
interface NSCIImageRep extends NSImageRep {
  // doc://com.apple.documentation/documentation/appkit/nsciimagerep/1528642-initwithciimage
  initWithCIImage(image: cocoascript.CIImage):cocoascript.NSCIImageRep;
  // doc://com.apple.documentation/documentation/appkit/nsciimagerep/1525696-ciimage
  CIImage(): cocoascript.CIImage;
  setCIImage(): void;
  // 
  alloc():cocoascript.NSCIImageRep;
  // 
  init():cocoascript.NSCIImageRep;
}
}
declare const NSCIImageRep: cocoascript.NSCIImageRep;

