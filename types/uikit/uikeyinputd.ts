declare namespace cocoascript {
/**
 * A set of methods a responder uses to implement simple text entry.  
 * doc://com.apple.documentation/documentation/uikit/uikeyinput
 */
interface UIKeyInput extends UITextInputTraits {
  // doc://com.apple.documentation/documentation/uikit/uikeyinput/1614543-inserttext
  insertText(text: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/uikit/uikeyinput/1614572-deletebackward
  deleteBackward():void;
  // doc://com.apple.documentation/documentation/uikit/uikeyinput/1614457-hastext
  hasText(): cocoascript.BOOL;
  setHasText(): void;
}
}

