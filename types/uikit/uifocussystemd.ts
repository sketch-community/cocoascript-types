declare namespace cocoascript {
/**
 * Queries and reevaluates the currently focused item.
 * doc://com.apple.documentation/documentation/uikit/uifocussystem
 */
interface UIFocusSystem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uifocussystem/2866087-focuseditem
  focusedItem(): cocoascript.UIFocusItem;
  setFocusedItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocussystem/2866115-requestfocusupdatetoenvironment
  requestFocusUpdateToEnvironment(environment: cocoascript.UIFocusEnvironment):void;
  // doc://com.apple.documentation/documentation/uikit/uifocussystem/2865914-updatefocusifneeded
  updateFocusIfNeeded():void;
  // doc://com.apple.documentation/documentation/uikit/uifocusupdateanimationcoordinatorkey
  UIFocusUpdateAnimationCoordinatorKey(): cocoascript.const;
  setUIFocusUpdateAnimationCoordinatorKey(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusupdatecontextkey
  UIFocusUpdateContextKey(): cocoascript.const;
  setUIFocusUpdateContextKey(): void;
  // 
  alloc():cocoascript.UIFocusSystem;
  // 
  init():cocoascript.UIFocusSystem;
}
}
declare const UIFocusSystem: cocoascript.UIFocusSystem;

