declare namespace cocoascript {
  /**
   * Defines a structure that specifies an amount to offset a position.
   * doc://com.apple.documentation/documentation/uikit/uioffset
   */
  interface UIOffset {
    // doc://com.apple.documentation/documentation/uikit/uioffset/1624524-horizontal
    horizontal(): cocoascript.CGFloat;
    setHorizontal(): void;
    // doc://com.apple.documentation/documentation/uikit/uioffset/1624473-vertical
    vertical(): cocoascript.CGFloat;
    setVertical(): void;
    // doc://com.apple.documentation/documentation/uikit/1624515-uioffsetmake
    UIOffsetMake(): cocoascript.CGFloat;
    setUIOffsetMake(): void;
    // doc://com.apple.documentation/documentation/uikit/1624491-nsstringfromuioffset
    NSStringFromUIOffset(): cocoascript.UIOffset;
    setNSStringFromUIOffset(): void;
    // doc://com.apple.documentation/documentation/uikit/1624509-uioffsetfromstring
    UIOffsetFromString(): cocoascript.NSString;
    setUIOffsetFromString(): void;
  }
}
