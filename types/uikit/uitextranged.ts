declare namespace cocoascript {
/**
 * A range of characters in a text container with a starting index and an ending index in string backing a text-entry object. 
 * doc://com.apple.documentation/documentation/uikit/uitextrange
 */
interface UITextRange extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextrange/1614459-start
  start(): cocoascript.UITextPosition;
  setStart(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextrange/1614544-end
  end(): cocoascript.UITextPosition;
  setEnd(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextrange/1614556-empty
  empty(): cocoascript.BOOL;
  setEmpty(): void;
  // 
  alloc():cocoascript.UITextRange;
  // 
  init():cocoascript.UITextRange;
}
}
declare const UITextRange: cocoascript.UITextRange;

