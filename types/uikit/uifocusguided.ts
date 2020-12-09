declare namespace cocoascript {
/**
 * An object that exposes nonview areas as focusable. 
 * doc://com.apple.documentation/documentation/uikit/uifocusguide
 */
interface UIFocusGuide extends UILayoutGuide {
  // doc://com.apple.documentation/documentation/uikit/uifocusguide/1616838-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusguide/1648230-preferredfocusenvironments
  preferredFocusEnvironments(): cocoascript.UIFocusEnvironment;
  setPreferredFocusEnvironments(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusguide/1616848-preferredfocusedview
  preferredFocusedView(): cocoascript.UIView;
  setPreferredFocusedView(): void;
  // 
  alloc():cocoascript.UIFocusGuide;
  // 
  init():cocoascript.UIFocusGuide;
}
}
declare const UIFocusGuide: cocoascript.UIFocusGuide;

