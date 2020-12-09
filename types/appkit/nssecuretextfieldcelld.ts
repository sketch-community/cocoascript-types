declare namespace cocoascript {
/**
 * A text field whose value is hidden from the user.
 * doc://com.apple.documentation/documentation/appkit/nssecuretextfieldcell
 */
interface NSSecureTextFieldCell extends NSTextFieldCell {
  // doc://com.apple.documentation/documentation/appkit/nssecuretextfieldcell/1395984-echosbullets
  echosBullets(): cocoascript.BOOL;
  setEchosBullets(): void;
  // 
  alloc():cocoascript.NSSecureTextFieldCell;
  // 
  init():cocoascript.NSSecureTextFieldCell;
}
}
declare const NSSecureTextFieldCell: cocoascript.NSSecureTextFieldCell;

