declare namespace cocoascript {
  /**
   * A set of methods that provide layout support and access to layout anchors.
   * doc://com.apple.documentation/documentation/uikit/uilayoutsupport
   */
  interface UILayoutSupport extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uilayoutsupport/1622253-length
    length(): cocoascript.CGFloat;
    setLength(): void;
    // doc://com.apple.documentation/documentation/uikit/uilayoutsupport/1622239-bottomanchor
    bottomAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setBottomAnchor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilayoutsupport/1622236-heightanchor
    heightAnchor(): cocoascript.NSLayoutDimension;
    setHeightAnchor(): void;
    // doc://com.apple.documentation/documentation/uikit/uilayoutsupport/1622255-topanchor
    topAnchor(): cocoascript.NSLayoutYAxisAnchor;
    setTopAnchor(): void;
  }
}
