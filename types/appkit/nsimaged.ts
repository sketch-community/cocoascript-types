declare namespace cocoascript {
/**
 * A high-level interface for manipulating image data. 
 * doc://com.apple.documentation/documentation/appkit/nsimage
 */
interface NSImage extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520025-setname
  setName(string: cocoascript.NSImageName):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519884-name
  name():cocoascript.NSImageName;
  // doc://com.apple.documentation/documentation/appkit/nsimage/3656508-imagewithsymbolconfiguration
  imageWithSymbolConfiguration(configuration: cocoascript.NSImageSymbolConfiguration):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519955-initbyreferencingfile
  initByReferencingFile(fileName: cocoascript.NSString):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519990-initbyreferencingurl
  initByReferencingURL(url: cocoascript.NSURL):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519918-initwithcontentsoffile
  initWithContentsOfFile(fileName: cocoascript.NSString):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519907-initwithcontentsofurl
  initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519941-initwithdata
  initWithData(data: cocoascript.NSData):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519915-initwithdataignoringorientation
  initWithDataIgnoringOrientation(data: cocoascript.NSData):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519939-initwithcgimage
  initWithCGImage_size(cgImage: cocoascript.CGImageRef, size: cocoascript.NSSize):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519952-initwithpasteboard
  initWithPasteboard(pasteboard: cocoascript.NSPasteboard):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/2177315-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519930-initwithiconref
  initWithIconRef(iconRef: cocoascript.IconRef):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520033-initwithsize
  initWithSize(size: cocoascript.NSSize):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519926-delegate
  delegate(): cocoascript.NSImageDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519987-size
  size(): cocoascript.NSSize;
  setSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520017-template
  template(): cocoascript.BOOL;
  setTemplate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519988-imagetypes
  imageTypes(): cocoascript.NSString;
  setImageTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519899-imageunfilteredtypes
  imageUnfilteredTypes(): cocoascript.NSString;
  setImageUnfilteredTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519911-addrepresentation
  addRepresentation(imageRep: cocoascript.NSImageRep):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519964-addrepresentations
  addRepresentations(imageReps: cocoascript.NSImageRep):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519858-representations
  representations(): cocoascript.NSImageRep;
  setRepresentations(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519995-removerepresentation
  removeRepresentation(imageRep: cocoascript.NSImageRep):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519961-bestrepresentationforrect
  bestRepresentationForRect_context_hints(rect: cocoascript.NSRect, referenceContext: cocoascript.NSGraphicsContext, hints: cocoascript.NSImage):cocoascript.NSImageRep;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520010-preferscolormatch
  prefersColorMatch(): cocoascript.BOOL;
  setPrefersColorMatch(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519868-usesepsonresolutionmismatch
  usesEPSOnResolutionMismatch(): cocoascript.BOOL;
  setUsesEPSOnResolutionMismatch(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519963-matchesonmultipleresolution
  matchesOnMultipleResolution(): cocoascript.BOOL;
  setMatchesOnMultipleResolution(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519863-drawinrect
  drawInRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519981-drawatpoint
  drawAtPoint_fromRect_operation_fraction(point: cocoascript.NSPoint, fromRect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, delta: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520067-drawinrect
  drawInRect_fromRect_operation_fraction(rect: cocoascript.NSRect, fromRect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, delta: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520043-drawinrect
  drawInRect_fromRect_operation_fraction_respectFlipped_hints(dstSpacePortionRect: cocoascript.NSRect, srcSpacePortionRect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, requestedAlpha: cocoascript.CGFloat, respectContextIsFlipped: cocoascript.BOOL, hints: cocoascript.NSImage):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519904-drawrepresentation
  drawRepresentation_inRect(imageRep: cocoascript.NSImageRep, rect: cocoascript.NSRect):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519991-valid
  valid(): cocoascript.BOOL;
  setValid(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520059-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520012-capinsets
  capInsets(): cocoascript.NSEdgeInsets;
  setCapInsets(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520060-resizingmode
  resizingMode(): cocoascript.NSImageResizingMode;
  setResizingMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519891-lockfocus
  lockFocus():void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519914-lockfocusflipped
  lockFocusFlipped(flipped: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519853-unlockfocus
  unlockFocus():void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519905-alignmentrect
  alignmentRect(): cocoascript.NSRect;
  setAlignmentRect(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519850-cachemode
  cacheMode(): cocoascript.NSImageCacheMode;
  setCacheMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519890-recache
  recache():void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519841-tiffrepresentation
  TIFFRepresentation(): cocoascript.NSData;
  setTIFFRepresentation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519949-tiffrepresentationusingcompressi
  TIFFRepresentationUsingCompression_factor(comp: cocoascript.NSTIFFCompression, factor: number):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519861-cgimageforproposedrect
  CGImageForProposedRect_context_hints(proposedDestRect: cocoascript.NSRect, referenceContext: cocoascript.NSGraphicsContext, hints: cocoascript.NSImage):cocoascript.CGImageRef;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520041-cancelincrementalload
  cancelIncrementalLoad():void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519922-hittestrect
  hitTestRect_withImageDestinationRect_context_hints_flipped(testRectDestSpace: cocoascript.NSRect, imageRectDestSpace: cocoascript.NSRect, context: cocoascript.NSGraphicsContext, hints: cocoascript.NSImage, flipped: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519943-accessibilitydescription
  accessibilityDescription(): cocoascript.NSString;
  setAccessibilityDescription(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519851-layercontentsforcontentsscale
  layerContentsForContentsScale(layerContentsScale: cocoascript.CGFloat):cocoascript.NSImage;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519878-recommendedlayercontentsscale
  recommendedLayerContentsScale(preferredContentsScale: cocoascript.CGFloat):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519848-matchesonlyonbestfittingaxis
  matchesOnlyOnBestFittingAxis(): cocoascript.BOOL;
  setMatchesOnlyOnBestFittingAxis(): void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519950-lockfocusonrepresentation
  lockFocusOnRepresentation(imageRepresentation: cocoascript.NSImageRep):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519925-bestrepresentationfordevice
  bestRepresentationForDevice(deviceDescription: cocoascript.NSDictionary):cocoascript.NSImageRep;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519867-compositetopoint
  compositeToPoint_operation(point: cocoascript.NSPoint, op: cocoascript.NSCompositingOperation):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520046-compositetopoint
  compositeToPoint_fromRect_operation(point: cocoascript.NSPoint, rect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520026-compositetopoint
  compositeToPoint_fromRect_operation_fraction(point: cocoascript.NSPoint, rect: cocoascript.NSRect, op: cocoascript.NSCompositingOperation, delta: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519932-compositetopoint
  compositeToPoint_operation_fraction(point: cocoascript.NSPoint, op: cocoascript.NSCompositingOperation, delta: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519887-dissolvetopoint
  dissolveToPoint_fraction(point: cocoascript.NSPoint, fraction: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519968-dissolvetopoint
  dissolveToPoint_fromRect_fraction(point: cocoascript.NSPoint, rect: cocoascript.NSRect, fraction: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519970-setscaleswhenresized
  setScalesWhenResized(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519929-scaleswhenresized
  scalesWhenResized():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519999-setdataretained
  setDataRetained(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520005-isdataretained
  isDataRetained():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520009-setcachedseparately
  setCachedSeparately(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520021-iscachedseparately
  isCachedSeparately():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519895-setcachedepthmatchesimagedepth
  setCacheDepthMatchesImageDepth(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519992-cachedepthmatchesimagedepth
  cacheDepthMatchesImageDepth():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1520044-setflipped
  setFlipped(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsimage/1519846-isflipped
  isFlipped():cocoascript.BOOL;
  // 
  alloc():cocoascript.NSImage;
  // 
  init():cocoascript.NSImage;
}
}
declare const NSImage: cocoascript.NSImage;

