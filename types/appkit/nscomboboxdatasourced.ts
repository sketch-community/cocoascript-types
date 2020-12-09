declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nscomboboxdatasource
 */
interface NSComboBoxDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscomboboxdatasource/1436733-combobox
  comboBox_completedString(comboBox: cocoascript.NSComboBox, string: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxdatasource/1436713-combobox
  comboBox_indexOfItemWithStringValue(comboBox: cocoascript.NSComboBox, string: cocoascript.NSString):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxdatasource/1436753-combobox
  comboBox_objectValueForItemAtIndex(comboBox: cocoascript.NSComboBox, index: cocoascript.NSInteger):cocoascript.NSComboBoxDataSource;
  // doc://com.apple.documentation/documentation/appkit/nscomboboxdatasource/1436780-numberofitemsincombobox
  numberOfItemsInComboBox(comboBox: cocoascript.NSComboBox):cocoascript.NSInteger;
}
}

