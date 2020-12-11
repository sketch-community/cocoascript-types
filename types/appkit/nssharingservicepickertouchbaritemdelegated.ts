declare namespace cocoascript {
  /**
   * A protocol that a sharing service picker item delegate uses to provide a list of items eligible for sharing.
   * doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritemdelegate
   */
  interface NSSharingServicePickerTouchBarItemDelegate extends NSSharingServicePickerDelegate {
    // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritemdelegate/2646997-itemsforsharingservicepickertouc
    itemsForSharingServicePickerTouchBarItem(pickerTouchBarItem: cocoascript.NSSharingServicePickerTouchBarItem):cocoascript.NSArray;
  }
}
