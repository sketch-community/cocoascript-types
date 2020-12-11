declare namespace cocoascript {
  /**
   * A structure that contains the location and dimensions of a rectangle.
   * doc://com.apple.documentation/documentation/coregraphics/cgrect
   */
  interface CGRect {
    // doc://com.apple.documentation/documentation/coregraphics/cgrect/1454354-origin
    origin(): cocoascript.CGPoint;
    setOrigin(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgrect/1455155-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/coregraphics/1455760-cgrectcreatedictionaryrepresenta
    CGRectCreateDictionaryRepresentation(): cocoascript.CGRect;
    setCGRectCreateDictionaryRepresentation(): void;
  }
}
