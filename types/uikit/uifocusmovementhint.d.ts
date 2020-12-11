declare namespace cocoascript {
  /**
   * Provides movement hint information for the focused item.
   * doc://com.apple.documentation/documentation/uikit/uifocusmovementhint
   */
  interface UIFocusMovementHint extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifocusmovementhint/3000774-movementdirection
    movementDirection(): cocoascript.CGVector;
    setMovementDirection(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusmovementhint/3000773-interactiontransform
    interactionTransform(): cocoascript.CATransform3D;
    setInteractionTransform(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusmovementhint/2976962-perspectivetransform
    perspectiveTransform(): cocoascript.CATransform3D;
    setPerspectiveTransform(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusmovementhint/3000775-rotation
    rotation(): cocoascript.CGVector;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusmovementhint/3000776-translation
    translation(): cocoascript.CGVector;
    setTranslation(): void;
    //
    alloc():cocoascript.UIFocusMovementHint;
    //
    init():cocoascript.UIFocusMovementHint;
  }
}

declare const UIFocusMovementHint: cocoascript.UIFocusMovementHint;
