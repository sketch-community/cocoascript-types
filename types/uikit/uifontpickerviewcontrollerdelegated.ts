declare namespace cocoascript {
/**
 * A set of optional methods for receiving messages about the user’s interaction with the font picker.
 * doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerdelegate
 */
interface UIFontPickerViewControllerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerdelegate/3238101-fontpickerviewcontrollerdidcance
  fontPickerViewControllerDidCancel(viewController: cocoascript.UIFontPickerViewController):void;
  // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerdelegate/3238102-fontpickerviewcontrollerdidpickf
  fontPickerViewControllerDidPickFont(viewController: cocoascript.UIFontPickerViewController):void;
}
}

