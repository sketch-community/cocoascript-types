declare namespace cocoascript {
/**
 * An object that provides information about the state of a keyboard key.
 * doc://com.apple.documentation/documentation/uikit/uikey
 */
interface UIKey extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uikey/3526132-keycode
  keyCode(): cocoascript.UIKeyboardHIDUsage;
  setKeyCode(): void;
  // doc://com.apple.documentation/documentation/uikit/uikey/3526133-modifierflags
  modifierFlags(): cocoascript.UIKeyModifierFlags;
  setModifierFlags(): void;
  // doc://com.apple.documentation/documentation/uikit/uikey/3526130-characters
  characters(): cocoascript.NSString;
  setCharacters(): void;
  // doc://com.apple.documentation/documentation/uikit/uikey/3526131-charactersignoringmodifiers
  charactersIgnoringModifiers(): cocoascript.NSString;
  setCharactersIgnoringModifiers(): void;
  // 
  alloc():cocoascript.UIKey;
  // 
  init():cocoascript.UIKey;
}
}
declare const UIKey: cocoascript.UIKey;

