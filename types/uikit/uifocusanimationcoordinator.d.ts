declare namespace cocoascript {
  /**
   * A coordinator of focus-related animations during a focus update.
   * doc://com.apple.documentation/documentation/uikit/uifocusanimationcoordinator
   */
  interface UIFocusAnimationCoordinator extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifocusanimationcoordinator/2887565-addcoordinatedfocusinganimations
    addCoordinatedFocusingAnimations_completion(animations: cocoascript.UIFocusAnimationContext, completion: void):void;
    // doc://com.apple.documentation/documentation/uikit/uifocusanimationcoordinator/2887567-addcoordinatedunfocusinganimatio
    addCoordinatedUnfocusingAnimations_completion(animations: cocoascript.UIFocusAnimationContext, completion: void):void;
    // doc://com.apple.documentation/documentation/uikit/uifocusanimationcoordinator/1619045-addcoordinatedanimations
    addCoordinatedAnimations_completion(animations: void, completion: void):void;
    //
    alloc():cocoascript.UIFocusAnimationCoordinator;
    //
    init():cocoascript.UIFocusAnimationCoordinator;
  }
}

declare const UIFocusAnimationCoordinator: cocoascript.UIFocusAnimationCoordinator;
