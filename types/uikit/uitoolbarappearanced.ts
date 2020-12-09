declare namespace cocoascript {
/**
 * An object for customizing the appearance of a toolbar.
 * doc://com.apple.documentation/documentation/uikit/uitoolbarappearance
 */
interface UIToolbarAppearance extends UIBarAppearance {
  // doc://com.apple.documentation/documentation/uikit/uitoolbarappearance/3198083-buttonappearance
  buttonAppearance(): cocoascript.UIBarButtonItemAppearance;
  setButtonAppearance(): void;
  // doc://com.apple.documentation/documentation/uikit/uitoolbarappearance/3198084-donebuttonappearance
  doneButtonAppearance(): cocoascript.UIBarButtonItemAppearance;
  setDoneButtonAppearance(): void;
  // 
  alloc():cocoascript.UIToolbarAppearance;
  // 
  init():cocoascript.UIToolbarAppearance;
}
}
declare const UIToolbarAppearance: cocoascript.UIToolbarAppearance;

