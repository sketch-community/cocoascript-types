declare namespace cocoascript {
/**
 * An object for customizing the appearance of a navigation bar.
 * doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance
 */
interface UINavigationBarAppearance extends UIBarAppearance {
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198039-titletextattributes
  titleTextAttributes(): cocoascript.id;
  setTitleTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198035-largetitletextattributes
  largeTitleTextAttributes(): cocoascript.id;
  setLargeTitleTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198038-titlepositionadjustment
  titlePositionAdjustment(): cocoascript.UIOffset;
  setTitlePositionAdjustment(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198033-buttonappearance
  buttonAppearance(): cocoascript.UIBarButtonItemAppearance;
  setButtonAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198030-backbuttonappearance
  backButtonAppearance(): cocoascript.UIBarButtonItemAppearance;
  setBackButtonAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198031-backindicatorimage
  backIndicatorImage(): cocoascript.UIImage;
  setBackIndicatorImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198032-backindicatortransitionmaskimage
  backIndicatorTransitionMaskImage(): cocoascript.UIImage;
  setBackIndicatorTransitionMaskImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198037-setbackindicatorimage
  setBackIndicatorImage_transitionMaskImage(backIndicatorImage: cocoascript.UIImage, backIndicatorTransitionMaskImage: cocoascript.UIImage):void;
  // doc://com.apple.documentation/documentation/uikit/uinavigationbarappearance/3198034-donebuttonappearance
  doneButtonAppearance(): cocoascript.UIBarButtonItemAppearance;
  setDoneButtonAppearance(): void;
  // 
  alloc():cocoascript.UINavigationBarAppearance;
  // 
  init():cocoascript.UINavigationBarAppearance;
}
}
declare const UINavigationBarAppearance: cocoascript.UINavigationBarAppearance;

