declare namespace cocoascript {
/**
 * An object that specifies the minimum and maximum sizes for resizable windows.
 * doc://com.apple.documentation/documentation/uikit/uiscenesizerestrictions
 */
interface UISceneSizeRestrictions extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscenesizerestrictions/3368161-minimumsize
  minimumSize(): cocoascript.CGSize;
  setMinimumSize(): void;
  // doc://com.apple.documentation/documentation/uikit/uiscenesizerestrictions/3368160-maximumsize
  maximumSize(): cocoascript.CGSize;
  setMaximumSize(): void;
  // 
  alloc():cocoascript.UISceneSizeRestrictions;
  // 
  init():cocoascript.UISceneSizeRestrictions;
}
}
declare const UISceneSizeRestrictions: cocoascript.UISceneSizeRestrictions;

