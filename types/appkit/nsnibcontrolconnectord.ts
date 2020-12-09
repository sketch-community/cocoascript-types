declare namespace cocoascript {
/**
 * A control connection between two Interface Builder objects.
 * doc://com.apple.documentation/documentation/appkit/nsnibcontrolconnector
 */
interface NSNibControlConnector extends NSNibConnector {
  // doc://com.apple.documentation/documentation/appkit/nsnibcontrolconnector/1575034-establishconnection
  establishConnection():void;
  // 
  alloc():cocoascript.NSNibControlConnector;
  // 
  init():cocoascript.NSNibControlConnector;
}
}
declare const NSNibControlConnector: cocoascript.NSNibControlConnector;

