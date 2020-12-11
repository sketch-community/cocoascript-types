declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/uikit/uipickerviewdatasource
   */
  interface UIPickerViewDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipickerviewdatasource/1614377-numberofcomponentsinpickerview
    numberOfComponentsInPickerView(pickerView: cocoascript.UIPickerView):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/uikit/uipickerviewdatasource/1614388-pickerview
    pickerView_numberOfRowsInComponent(pickerView: cocoascript.UIPickerView, component: cocoascript.NSInteger):cocoascript.NSInteger;
  }
}
