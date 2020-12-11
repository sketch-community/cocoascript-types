declare namespace cocoascript {
  /**
   * The container responsible for providing geometric context to focus items within a given focus environment.
   * doc://com.apple.documentation/documentation/uikit/uifocusitemcontainer
   */
  interface UIFocusItemContainer extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifocusitemcontainer/2976954-focusitemsinrect
    focusItemsInRect(rect: cocoascript.CGRect):cocoascript.UIFocusItem;
    // doc://com.apple.documentation/documentation/uikit/uifocusitemcontainer/2998462-coordinatespace
    coordinateSpace(): cocoascript.UICoordinateSpace;
    setCoordinateSpace(): void;
  }
}
