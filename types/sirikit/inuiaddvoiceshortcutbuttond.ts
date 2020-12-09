declare namespace cocoascript {
/**
 * A button that allows the user to add or edit a shortcut.
 * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton
 */
interface INUIAddVoiceShortcutButton extends UIButton {
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3019581-initwithstyle
  initWithStyle(style: cocoascript.INUIAddVoiceShortcutButtonStyle):cocoascript.INUIAddVoiceShortcutButton;
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3024514-shortcut
  shortcut(): cocoascript.INShortcut;
  setShortcut(): void;
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3024513-delegate
  delegate(): cocoascript.INUIAddVoiceShortcutButtonDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3089175-setstyle
  setStyle(style: cocoascript.INUIAddVoiceShortcutButtonStyle):void;
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3024515-style
  style(): cocoascript.INUIAddVoiceShortcutButtonStyle;
  setStyle(): void;
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3089174-cornerradius
  cornerRadius(): cocoascript.CGFloat;
  setCornerRadius(): void;
  // 
  alloc():cocoascript.INUIAddVoiceShortcutButton;
  // 
  init():cocoascript.INUIAddVoiceShortcutButton;
}
}
declare const INUIAddVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton;

