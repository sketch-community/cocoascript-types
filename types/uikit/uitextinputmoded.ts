declare namespace cocoascript {
/**
 * The current text-input mode. 
 * doc://com.apple.documentation/documentation/uikit/uitextinputmode
 */
interface UITextInputMode extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextinputmode/1614522-activeinputmodes
  activeInputModes(): cocoascript.UITextInputMode;
  setActiveInputModes(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextinputmode/1614535-primarylanguage
  primaryLanguage(): cocoascript.NSString;
  setPrimaryLanguage(): void;
  // 
  alloc():cocoascript.UITextInputMode;
  // 
  init():cocoascript.UITextInputMode;
}
}
declare const UITextInputMode: cocoascript.UITextInputMode;

