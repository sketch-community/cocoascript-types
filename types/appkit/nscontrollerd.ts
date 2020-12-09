declare namespace cocoascript {
/**
 * An abstract class that implements the 
 * doc://com.apple.documentation/documentation/appkit/nscontroller
 */
interface NSController extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1532991-objectdidbeginediting
  objectDidBeginEditing(editor: cocoascript.NSEditor):void;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1524644-objectdidendediting
  objectDidEndEditing(editor: cocoascript.NSEditor):void;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1531472-commitediting
  commitEditing():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1527876-commiteditingwithdelegate
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: cocoascript.NSController, didCommitSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1528652-discardediting
  discardEditing():void;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1527136-editing
  editing(): cocoascript.BOOL;
  setEditing(): void;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1528092-init
  init():cocoascript.NSController;
  // doc://com.apple.documentation/documentation/appkit/nscontroller/1525048-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSController;
  // 
  alloc():cocoascript.NSController;
  // 
  init():cocoascript.NSController;
}
}
declare const NSController: cocoascript.NSController;

