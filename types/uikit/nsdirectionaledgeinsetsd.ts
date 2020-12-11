declare namespace cocoascript {
  /**
   * Edge insets that take language direction into account.
   * doc://com.apple.documentation/documentation/uikit/nsdirectionaledgeinsets
   */
  interface NSDirectionalEdgeInsets {
    // doc://com.apple.documentation/documentation/uikit/2867596-nsdirectionaledgeinsetsmake
    NSDirectionalEdgeInsetsMake(): cocoascript.CGFloat;
    setNSDirectionalEdgeInsetsMake(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdirectionaledgeinsets/2865791-bottom
    bottom(): cocoascript.CGFloat;
    setBottom(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdirectionaledgeinsets/2866012-leading
    leading(): cocoascript.CGFloat;
    setLeading(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdirectionaledgeinsets/2865909-top
    top(): cocoascript.CGFloat;
    setTop(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdirectionaledgeinsets/2865833-trailing
    trailing(): cocoascript.CGFloat;
    setTrailing(): void;
    // doc://com.apple.documentation/documentation/uikit/2865946-nsstringfromdirectionaledgeinset
    NSStringFromDirectionalEdgeInsets(): cocoascript.NSDirectionalEdgeInsets;
    setNSStringFromDirectionalEdgeInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/2865991-nsdirectionaledgeinsetsfromstrin
    NSDirectionalEdgeInsetsFromString(): cocoascript.NSString;
    setNSDirectionalEdgeInsetsFromString(): void;
  }
}
