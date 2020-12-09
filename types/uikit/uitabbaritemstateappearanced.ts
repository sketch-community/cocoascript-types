declare namespace cocoascript {
/**
 * A data object containing the specific customizations for tab bar items in a particular state. 
 * doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance
 */
interface UITabBarItemStateAppearance extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198078-titletextattributes
  titleTextAttributes(): cocoascript.id;
  setTitleTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198077-titlepositionadjustment
  titlePositionAdjustment(): cocoascript.UIOffset;
  setTitlePositionAdjustment(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198076-iconcolor
  iconColor(): cocoascript.UIColor;
  setIconColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198074-badgetextattributes
  badgeTextAttributes(): cocoascript.id;
  setBadgeTextAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198072-badgebackgroundcolor
  badgeBackgroundColor(): cocoascript.UIColor;
  setBadgeBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198075-badgetitlepositionadjustment
  badgeTitlePositionAdjustment(): cocoascript.UIOffset;
  setBadgeTitlePositionAdjustment(): void;
  // doc://com.apple.documentation/documentation/uikit/uitabbaritemstateappearance/3198073-badgepositionadjustment
  badgePositionAdjustment(): cocoascript.UIOffset;
  setBadgePositionAdjustment(): void;
  // 
  alloc():cocoascript.UITabBarItemStateAppearance;
  // 
  init():cocoascript.UITabBarItemStateAppearance;
}
}
declare const UITabBarItemStateAppearance: cocoascript.UITabBarItemStateAppearance;

