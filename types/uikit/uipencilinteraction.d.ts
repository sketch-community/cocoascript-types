declare namespace cocoascript {
  /**
   * An interaction that tells your app the user double-tapped their Apple Pencil.
   * doc://com.apple.documentation/documentation/uikit/uipencilinteraction
   */
  interface UIPencilInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipencilinteraction/3039591-delegate
    delegate(): cocoascript.UIPencilInteractionDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uipencilinteraction/3039592-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uipencilinteraction/3039593-preferredtapaction
    preferredTapAction(): cocoascript.UIPencilPreferredAction;
    setPreferredTapAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uipencilinteraction/3552414-preferspencilonlydrawing
    prefersPencilOnlyDrawing(): cocoascript.BOOL;
    setPrefersPencilOnlyDrawing(): void;
    //
    alloc():cocoascript.UIPencilInteraction;
    //
    init():cocoascript.UIPencilInteraction;
  }
}

declare const UIPencilInteraction: cocoascript.UIPencilInteraction;
