declare namespace cocoascript {
  /**
   * A set of optional methods implemented by delegates of
   * doc://com.apple.documentation/documentation/appkit/nsdatepickercelldelegate
   */
  interface NSDatePickerCellDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsdatepickercelldelegate/1459631-datepickercell
    datePickerCell_validateProposedDateValue_timeInterval(datePickerCell: cocoascript.NSDatePickerCell, proposedDateValue: cocoascript._Nonnull, proposedTimeInterval: cocoascript.NSTimeInterval):void;
  }
}
