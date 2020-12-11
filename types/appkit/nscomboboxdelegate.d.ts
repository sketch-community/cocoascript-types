declare namespace cocoascript {
  /**
   * A set of optional methods implemented by delegates of combo box objects.
   * doc://com.apple.documentation/documentation/appkit/nscomboboxdelegate
   */
  interface NSComboBoxDelegate extends NSTextFieldDelegate {
    // doc://com.apple.documentation/documentation/appkit/nscomboboxdelegate/1436769-comboboxselectiondidchange
    comboBoxSelectionDidChange(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxdelegate/1436715-comboboxselectionischanging
    comboBoxSelectionIsChanging(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxdelegate/1436763-comboboxwilldismiss
    comboBoxWillDismiss(notification: cocoascript.NSNotification):void;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxdelegate/1436784-comboboxwillpopup
    comboBoxWillPopUp(notification: cocoascript.NSNotification):void;
  }
}
