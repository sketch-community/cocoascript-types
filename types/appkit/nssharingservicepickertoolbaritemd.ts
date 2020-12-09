declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/appkit/nssharingservicepickertoolbaritem
 */
interface NSSharingServicePickerToolbarItem extends NSToolbarItem {
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertoolbaritem/3375790-activityitemsconfiguration
  activityItemsConfiguration(): cocoascript.UIActivityItemsConfigurationReading;
  setActivityItemsConfiguration(): void;
  // doc://com.apple.documentation/documentation/appkit/nssharingservicepickertoolbaritem/3365981-delegate
  delegate(): cocoascript.NSSharingServicePickerToolbarItemDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.NSSharingServicePickerToolbarItem;
  // 
  init():cocoascript.NSSharingServicePickerToolbarItem;
}
}
declare const NSSharingServicePickerToolbarItem: cocoascript.NSSharingServicePickerToolbarItem;

