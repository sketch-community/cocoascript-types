declare namespace cocoascript {
/**
 * A data object containing the specific customizations for a bar button item in a particular state. 
 * doc://com.apple.documentation/documentation/uikit/uibarbuttonitemstateappearance
 */
interface UIBarButtonItemStateAppearance extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemstateappearance/3198025-titletextattributes
  titleTextAttributes(): cocoascript.id;
  setTitleTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemstateappearance/3198024-titlepositionadjustment
  titlePositionAdjustment(): cocoascript.UIOffset;
  setTitlePositionAdjustment(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemstateappearance/3198022-backgroundimage
  backgroundImage(): cocoascript.UIImage;
  setBackgroundImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uibarbuttonitemstateappearance/3198023-backgroundimagepositionadjustmen
  backgroundImagePositionAdjustment(): cocoascript.UIOffset;
  setBackgroundImagePositionAdjustment(): void;
  // 
  alloc():cocoascript.UIBarButtonItemStateAppearance;
  // 
  init():cocoascript.UIBarButtonItemStateAppearance;
}
}
declare const UIBarButtonItemStateAppearance: cocoascript.UIBarButtonItemStateAppearance;

