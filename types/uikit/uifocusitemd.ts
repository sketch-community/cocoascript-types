declare namespace cocoascript {
/**
 * An object that can become focused.
 * doc://com.apple.documentation/documentation/uikit/uifocusitem
 */
interface UIFocusItem extends UIFocusEnvironment {
  // doc://com.apple.documentation/documentation/uikit/uifocusitem/1648965-canbecomefocused
  canBecomeFocused(): cocoascript.BOOL;
  setCanBecomeFocused(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusitem/2976952-frame
  frame(): cocoascript.CGRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusitem/2976951-didhintfocusmovement
  didHintFocusMovement(hint: cocoascript.UIFocusMovementHint):void;
}
}

