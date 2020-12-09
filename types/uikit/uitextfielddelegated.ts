declare namespace cocoascript {
/**
 * A set of optional methods to manage the editing and validation of text in a text field object.
 * doc://com.apple.documentation/documentation/uikit/uitextfielddelegate
 */
interface UITextFieldDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619601-textfieldshouldbeginediting
  textFieldShouldBeginEditing(textField: cocoascript.UITextField):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619590-textfielddidbeginediting
  textFieldDidBeginEditing(textField: cocoascript.UITextField):void;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619592-textfieldshouldendediting
  textFieldShouldEndEditing(textField: cocoascript.UITextField):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/2352220-textfielddidendediting
  textFieldDidEndEditing_reason(textField: cocoascript.UITextField, reason: cocoascript.UITextFieldDidEndEditingReason):void;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619591-textfielddidendediting
  textFieldDidEndEditing(textField: cocoascript.UITextField):void;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619599-textfield
  textField_shouldChangeCharactersInRange_replacementString(textField: cocoascript.UITextField, range: cocoascript.NSRange, string: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619594-textfieldshouldclear
  textFieldShouldClear(textField: cocoascript.UITextField):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/1619603-textfieldshouldreturn
  textFieldShouldReturn(textField: cocoascript.UITextField):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitextfielddelegate/3114542-textfielddidchangeselection
  textFieldDidChangeSelection(textField: cocoascript.UITextField):void;
}
}

