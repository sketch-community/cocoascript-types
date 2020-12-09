declare namespace cocoascript {
/**
 * An action that can be taken when the user taps a button in an alert. 
 * doc://com.apple.documentation/documentation/uikit/uialertaction
 */
interface UIAlertAction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uialertaction/1620098-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uialertaction/1620107-style
  style(): cocoascript.UIAlertActionStyle;
  setStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/uialertaction/1620109-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // 
  alloc():cocoascript.UIAlertAction;
  // 
  init():cocoascript.UIAlertAction;
}
}
declare const UIAlertAction: cocoascript.UIAlertAction;

