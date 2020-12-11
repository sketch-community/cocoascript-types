declare namespace cocoascript {
  /**
   * The set of conditions that define when UIKit activates the current scene.
   * doc://com.apple.documentation/documentation/uikit/uisceneactivationconditions
   */
  interface UISceneActivationConditions extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uisceneactivationconditions/3238065-init
    init():cocoascript.UISceneActivationConditions;
    // doc://com.apple.documentation/documentation/uikit/uisceneactivationconditions/3238066-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.UISceneActivationConditions;
    // doc://com.apple.documentation/documentation/uikit/uisceneactivationconditions/3238067-preferstoactivatefortargetconten
    prefersToActivateForTargetContentIdentifierPredicate(): cocoascript.NSPredicate;
    setPrefersToActivateForTargetContentIdentifierPredicate(): void;
    // doc://com.apple.documentation/documentation/uikit/uisceneactivationconditions/3238064-canactivatefortargetcontentident
    canActivateForTargetContentIdentifierPredicate(): cocoascript.NSPredicate;
    setCanActivateForTargetContentIdentifierPredicate(): void;
    //
    alloc():cocoascript.UISceneActivationConditions;
    //
    init():cocoascript.UISceneActivationConditions;
  }
}

declare const UISceneActivationConditions: cocoascript.UISceneActivationConditions;
