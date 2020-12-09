declare namespace cocoascript {
/**
 * A representation of the current device.
 * doc://com.apple.documentation/documentation/uikit/uidevice
 */
interface UIDevice extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620014-currentdevice
  currentDevice(): cocoascript.UIDevice;
  setCurrentDevice(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620036-multitaskingsupported
  multitaskingSupported(): cocoascript.BOOL;
  setMultitaskingSupported(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620015-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620054-systemname
  systemName(): cocoascript.NSString;
  setSystemName(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620043-systemversion
  systemVersion(): cocoascript.NSString;
  setSystemVersion(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620044-model
  model(): cocoascript.NSString;
  setModel(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620029-localizedmodel
  localizedModel(): cocoascript.NSString;
  setLocalizedModel(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620037-userinterfaceidiom
  userInterfaceIdiom(): cocoascript.UIUserInterfaceIdiom;
  setUserInterfaceIdiom(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620059-identifierforvendor
  identifierForVendor(): cocoascript.NSUUID;
  setIdentifierForVendor(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620053-orientation
  orientation(): cocoascript.UIDeviceOrientation;
  setOrientation(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620055-generatesdeviceorientationnotifi
  generatesDeviceOrientationNotifications(): cocoascript.BOOL;
  setGeneratesDeviceOrientationNotifications(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620041-begingeneratingdeviceorientation
  beginGeneratingDeviceOrientationNotifications():void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620033-endgeneratingdeviceorientationno
  endGeneratingDeviceOrientationNotifications():void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620042-batterylevel
  batteryLevel(): number;
  setBatteryLevel(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620045-batterymonitoringenabled
  batteryMonitoringEnabled(): cocoascript.BOOL;
  setBatteryMonitoringEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620051-batterystate
  batteryState(): cocoascript.UIDeviceBatteryState;
  setBatteryState(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620017-proximitymonitoringenabled
  proximityMonitoringEnabled(): cocoascript.BOOL;
  setProximityMonitoringEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620058-proximitystate
  proximityState(): cocoascript.BOOL;
  setProximityState(): void;
  // doc://com.apple.documentation/documentation/uikit/uidevice/1620050-playinputclick
  playInputClick():void;
  // doc://com.apple.documentation/documentation/uikit/1620016-ui_user_interface_idiom
  UI_USER_INTERFACE_IDIOM(): void;
  setUI_USER_INTERFACE_IDIOM(): void;
  // 
  alloc():cocoascript.UIDevice;
  // 
  init():cocoascript.UIDevice;
}
}
declare const UIDevice: cocoascript.UIDevice;

