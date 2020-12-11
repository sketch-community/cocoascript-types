declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nscomboboxcelldatasource
   */
  interface NSComboBoxCellDataSource extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nscomboboxcelldatasource/1410250-comboboxcell
    comboBoxCell_completedString(comboBoxCell: cocoascript.NSComboBoxCell, uncompletedString: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxcelldatasource/1410285-comboboxcell
    comboBoxCell_indexOfItemWithStringValue(comboBoxCell: cocoascript.NSComboBoxCell, string: cocoascript.NSString):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxcelldatasource/1410258-comboboxcell
    comboBoxCell_objectValueForItemAtIndex(comboBoxCell: cocoascript.NSComboBoxCell, index: cocoascript.NSInteger):cocoascript.NSComboBoxCellDataSource;
    // doc://com.apple.documentation/documentation/appkit/nscomboboxcelldatasource/1410302-numberofitemsincomboboxcell
    numberOfItemsInComboBoxCell(comboBoxCell: cocoascript.NSComboBoxCell):cocoascript.NSInteger;
  }
}
