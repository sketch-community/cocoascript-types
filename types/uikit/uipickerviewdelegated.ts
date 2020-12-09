declare namespace cocoascript {
/**
 * The delegate of a 
 * doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate
 */
interface UIPickerViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate/1614386-pickerview
  pickerView_rowHeightForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate/1614378-pickerview
  pickerView_widthForComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate/1614384-pickerview
  pickerView_titleForRow_forComponent(pickerView: cocoascript.UIPickerView, row: cocoascript.NSInteger, component: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate/1614375-pickerview
  pickerView_attributedTitleForRow_forComponent(pickerView: cocoascript.UIPickerView, row: cocoascript.NSInteger, component: cocoascript.NSInteger):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate/1614389-pickerview
  pickerView_viewForRow_forComponent_reusingView(pickerView: cocoascript.UIPickerView, row: cocoascript.NSInteger, component: cocoascript.NSInteger, view: cocoascript.UIView):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uipickerviewdelegate/1614371-pickerview
  pickerView_didSelectRow_inComponent(pickerView: cocoascript.UIPickerView, row: cocoascript.NSInteger, component: cocoascript.NSInteger):void;
}
}

