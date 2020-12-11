declare namespace cocoascript {
  /**
   * The interface that determines if a text view is a drag source.
   * doc://com.apple.documentation/documentation/uikit/uitextdraggable
   */
  interface UITextDraggable extends UITextInput {
    // doc://com.apple.documentation/documentation/uikit/uitextdraggable/2890913-textdragactive
    textDragActive(): cocoascript.BOOL;
    setTextDragActive(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdraggable/2890911-textdraginteraction
    textDragInteraction(): cocoascript.UIDragInteraction;
    setTextDragInteraction(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdraggable/2890903-textdragdelegate
    textDragDelegate(): cocoascript.UITextDragDelegate;
    setTextDragDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdraggable/2897255-textdragoptions
    textDragOptions(): cocoascript.UITextDragOptions;
    setTextDragOptions(): void;
  }
}
