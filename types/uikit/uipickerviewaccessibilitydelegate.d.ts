declare namespace cocoascript {
  /**
   * A set of methods you can implement to provide accessibility information for individual components of a picker view.
   * doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate
   */
  interface UIPickerViewAccessibilityDelegate extends UIPickerViewDelegate {
    // doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate/1621052-pickerview
    pickerView_accessibilityLabelForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate/2865955-pickerview
    pickerView_accessibilityAttributedLabelForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate/1621056-pickerview
    pickerView_accessibilityHintForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate/2866017-pickerview
    pickerView_accessibilityAttributedHintForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate/3197990-pickerview
    pickerView_accessibilityAttributedUserInputLabelsForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/uikit/uipickerviewaccessibilitydelegate/3197991-pickerview
    pickerView_accessibilityUserInputLabelsForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSString;
  }
}
