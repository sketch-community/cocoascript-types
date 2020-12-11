declare namespace cocoascript {
  /**
   * The interface that determines if a text view is a drop destination.
   * doc://com.apple.documentation/documentation/uikit/uitextdroppable
   */
  interface UITextDroppable extends UITextInput {
    // doc://com.apple.documentation/documentation/uikit/uitextdroppable/2890852-textdropactive
    textDropActive(): cocoascript.BOOL;
    setTextDropActive(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdroppable/2890862-textdropinteraction
    textDropInteraction(): cocoascript.UIDropInteraction;
    setTextDropInteraction(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdroppable/2890860-textdropdelegate
    textDropDelegate(): cocoascript.UITextDropDelegate;
    setTextDropDelegate(): void;
  }
}
