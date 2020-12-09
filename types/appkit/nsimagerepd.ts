declare namespace cocoascript {
/**
 * A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.
 * doc://com.apple.documentation/documentation/appkit/nsimagerep
 */
interface NSImageRep extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1530271-init
  init():cocoascript.NSImageRep;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1535319-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSImageRep;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1535246-imagetypes
  imageTypes(): cocoascript.NSString;
  setImageTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1534816-imageunfilteredtypes
  imageUnfilteredTypes(): cocoascript.NSString;
  setImageUnfilteredTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1524374-size
  size(): cocoascript.NSSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1533157-bitspersample
  bitsPerSample(): cocoascript.NSInteger;
  setBitsPerSample(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1535395-colorspacename
  colorSpaceName(): cocoascript.NSColorSpaceName;
  setColorSpaceName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1534506-alpha
  alpha(): cocoascript.BOOL;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1528462-opaque
  opaque(): cocoascript.BOOL;
  setOpaque(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1533989-pixelshigh
  pixelsHigh(): cocoascript.NSInteger;
  setPixelsHigh(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1526995-pixelswide
  pixelsWide(): cocoascript.NSInteger;
  setPixelsWide(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1690237-layoutdirection
  layoutDirection(): cocoascript.NSImageLayoutDirection;
  setLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1533478-cgimageforproposedrect
  CGImageForProposedRect_context_hints(proposedDestRect: cocoascript.NSRect, context: cocoascript.NSGraphicsContext, hints: cocoascript.NSImageRep):cocoascript.CGImageRef;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1526674-draw
  draw():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1525632-drawatpoint
  drawAtPoint(point: cocoascript.NSPoint):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1535066-drawinrect
  drawInRect(rect: cocoascript.NSRect):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1533982-drawinrect
  drawInRect_fromRect_operation_fraction_respectFlipped_hints(dstSpacePortionRect: cocoascript.NSRect, srcSpacePortionRect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, requestedAlpha: cocoascript.CGFloat, respectContextIsFlipped: cocoascript.BOOL, hints: cocoascript.NSImageRep):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimagerep/1525139-registeredimagerepclasses
  registeredImageRepClasses(): cocoascript.Class;
  setRegisteredImageRepClasses(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimagerepregistrydidchangenotification
  NSImageRepRegistryDidChangeNotification(): cocoascript.NSNotificationName;
  setNSImageRepRegistryDidChangeNotification(): void;
  // 
  alloc():cocoascript.NSImageRep;
  // 
  init():cocoascript.NSImageRep;
}
}
declare const NSImageRep: cocoascript.NSImageRep;

