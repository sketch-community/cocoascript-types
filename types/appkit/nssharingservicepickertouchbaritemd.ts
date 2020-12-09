declare namespace cocoascript {
/**
 * A bar item that, along with its delegate, provides a list of objects eligible for sharing.
 * doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritem
 */
interface NSSharingServicePickerTouchBarItem extends NSTouchBarItem {
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritem/2539408-delegate
  delegate(): cocoascript.NSSharingServicePickerTouchBarItemDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritem/2646965-buttonimage
  buttonImage(): cocoascript.NSImage;
  setButtonImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritem/2646971-buttontitle
  buttonTitle(): cocoascript.NSString;
  setButtonTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritem/2560996-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertouchbaritem/3375791-activityitemsconfiguration
  activityItemsConfiguration(): cocoascript.UIActivityItemsConfigurationReading;
  setActivityItemsConfiguration(): void;
  // 
  alloc():cocoascript.NSSharingServicePickerTouchBarItem;
  // 
  init():cocoascript.NSSharingServicePickerTouchBarItem;
}
}
declare const NSSharingServicePickerTouchBarItem: cocoascript.NSSharingServicePickerTouchBarItem;

