declare namespace cocoascript {
  /**
   * The interface for describing the attributes of a drag activity originating in a text view.
   * doc://com.apple.documentation/documentation/uikit/uitextdragrequest
   */
  interface UITextDragRequest extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextdragrequest/2890912-existingitems
    existingItems(): cocoascript.UIDragItem;
    setExistingItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdragrequest/2890900-suggesteditems
    suggestedItems(): cocoascript.UIDragItem;
    setSuggestedItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdragrequest/2890901-dragrange
    dragRange(): cocoascript.UITextRange;
    setDragRange(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdragrequest/2890906-selected
    selected(): cocoascript.BOOL;
    setSelected(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextdragrequest/2890910-dragsession
    dragSession(): cocoascript.UIDragSession;
    setDragSession(): void;
  }
}
