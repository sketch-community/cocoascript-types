declare namespace cocoascript {
/**
 * An object for customizing the appearance of tab bar items. 
 * doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance
 */
interface UITabBarItemAppearance extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198062-initwithstyle
  initWithStyle(style: cocoascript.UITabBarItemAppearanceStyle):cocoascript.UITabBarItemAppearance;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198060-init
  init():cocoascript.UITabBarItemAppearance;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198061-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITabBarItemAppearance;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198057-configurewithdefaultforstyle
  configureWithDefaultForStyle(style: cocoascript.UITabBarItemAppearanceStyle):void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198064-normal
  normal(): cocoascript.UITabBarItemStateAppearance;
  setNormal(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198065-selected
  selected(): cocoascript.UITabBarItemStateAppearance;
  setSelected(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198058-disabled
  disabled(): cocoascript.UITabBarItemStateAppearance;
  setDisabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3198059-focused
  focused(): cocoascript.UITabBarItemStateAppearance;
  setFocused(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemappearance/3368163-copy
  copy():cocoascript.UITabBarItemAppearance;
  // 
  alloc():cocoascript.UITabBarItemAppearance;
  // 
  init():cocoascript.UITabBarItemAppearance;
}
}
declare const UITabBarItemAppearance: cocoascript.UITabBarItemAppearance;

