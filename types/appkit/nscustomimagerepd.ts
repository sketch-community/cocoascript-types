declare namespace cocoascript {
/**
 * An object that uses a delegate object to render an image from a custom format. 
 * doc://com.apple.documentation/documentation/appkit/nscustomimagerep
 */
interface NSCustomImageRep extends NSImageRep {
  // doc://com.apple.documentation/documentation/appkit/nscustomimagerep/1533328-initwithdrawselector
  initWithDrawSelector_delegate(selector: cocoascript.SEL, delegate: cocoascript.NSCustomImageRep):cocoascript.NSCustomImageRep;
  // doc://com.apple.documentation/documentation/appkit/nscustomimagerep/1526521-initwithsize
  initWithSize_flipped_drawingHandler(size: cocoascript.NSSize, drawingHandlerShouldBeCalledWithFlippedContext: cocoascript.BOOL, drawingHandler: cocoascript.NSRect):cocoascript.NSCustomImageRep;
  // doc://com.apple.documentation/documentation/appkit/nscustomimagerep/1527316-drawinghandler
  drawingHandler(): cocoascript.NSRect;
  setDrawingHandler(): void;
  // doc://com.apple.documentation/documentation/appkit/nscustomimagerep/1534716-delegate
  delegate(): cocoascript.id;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nscustomimagerep/1529935-drawselector
  drawSelector(): cocoascript.SEL;
  setDrawSelector(): void;
  // 
  alloc():cocoascript.NSCustomImageRep;
  // 
  init():cocoascript.NSCustomImageRep;
}
}
declare const NSCustomImageRep: cocoascript.NSCustomImageRep;

