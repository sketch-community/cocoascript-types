declare namespace cocoascript {
  /**
   * A type of focus item container that supports automatic scrolling of focusable content.
   * doc://com.apple.documentation/documentation/uikit/uifocusitemscrollablecontainer
   */
  interface UIFocusItemScrollableContainer extends UIFocusItemContainer {
    // doc://com.apple.documentation/documentation/uikit/uifocusitemscrollablecontainer/2976956-contentoffset
    contentOffset(): cocoascript.CGPoint;
    setContentOffset(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusitemscrollablecontainer/2976957-contentsize
    contentSize(): cocoascript.CGSize;
    setContentSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uifocusitemscrollablecontainer/2998463-visiblesize
    visibleSize(): cocoascript.CGSize;
    setVisibleSize(): void;
  }
}
