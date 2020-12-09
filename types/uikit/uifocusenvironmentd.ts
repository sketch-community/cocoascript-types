declare namespace cocoascript {
/**
 * A set of methods that define the focus behavior for a branch of the view hierarchy. 
 * doc://com.apple.documentation/documentation/uikit/uifocusenvironment
 */
interface UIFocusEnvironment extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/1616837-setneedsfocusupdate
  setNeedsFocusUpdate():void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/1616833-updatefocusifneeded
  updateFocusIfNeeded():void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/1616831-shouldupdatefocusincontext
  shouldUpdateFocusInContext(context: cocoascript.UIFocusUpdateContext):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/1616841-didupdatefocusincontext
  didUpdateFocusInContext_withAnimationCoordinator(context: cocoascript.UIFocusUpdateContext, coordinator: cocoascript.UIFocusAnimationCoordinator):void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/1648972-preferredfocusenvironments
  preferredFocusEnvironments(): cocoascript.UIFocusEnvironment;
  setPreferredFocusEnvironments(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/1616830-preferredfocusedview
  preferredFocusedView(): cocoascript.UIView;
  setPreferredFocusedView(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/2887504-soundidentifierforfocusupdateinc
  soundIdentifierForFocusUpdateInContext(context: cocoascript.UIFocusUpdateContext):cocoascript.UIFocusSoundIdentifier;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/2976950-parentfocusenvironment
  parentFocusEnvironment(): cocoascript.UIFocusEnvironment;
  setParentFocusEnvironment(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/2976949-focusitemcontainer
  focusItemContainer(): cocoascript.UIFocusItemContainer;
  setFocusItemContainer(): void;
  // doc://com.apple.documentation/documentation/uikit/uifocusenvironment/3601224-focusgroupidentifier
  focusGroupIdentifier(): cocoascript.NSString;
  setFocusGroupIdentifier(): void;
}
}

