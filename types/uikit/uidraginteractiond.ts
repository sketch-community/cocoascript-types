declare namespace cocoascript {
  /**
   * An interaction to enable dragging of items from a view, employing a delegate to provide drag items and to respond to calls from the drag session.
   * doc://com.apple.documentation/documentation/uikit/uidraginteraction
   */
  interface UIDragInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidraginteraction/2890982-initwithdelegate
    initWithDelegate(delegate: cocoascript.UIDragInteractionDelegate):cocoascript.UIDragInteraction;
    // doc://com.apple.documentation/documentation/uikit/uidraginteraction/2919986-allowssimultaneousrecognitiondur
    allowsSimultaneousRecognitionDuringLift(): cocoascript.BOOL;
    setAllowsSimultaneousRecognitionDuringLift(): void;
    // doc://com.apple.documentation/documentation/uikit/uidraginteraction/2891021-delegate
    delegate(): cocoascript.UIDragInteractionDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uidraginteraction/2891015-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uidraginteraction/2891051-enabledbydefault
    enabledByDefault(): cocoascript.BOOL;
    setEnabledByDefault(): void;
    //
    alloc():cocoascript.UIDragInteraction;
    //
    init():cocoascript.UIDragInteraction;
  }
}

declare const UIDragInteraction: cocoascript.UIDragInteraction;
