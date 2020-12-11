declare namespace cocoascript {
  /**
   * A structure that contains width and height values.
   * doc://com.apple.documentation/documentation/coregraphics/cgsize
   */
  interface CGSize {
    // doc://com.apple.documentation/documentation/coregraphics/1455274-cgsizecreatedictionaryrepresenta
    CGSizeCreateDictionaryRepresentation(): cocoascript.CGSize;
    setCGSizeCreateDictionaryRepresentation(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgsize/1455076-height
    height(): cocoascript.CGFloat;
    setHeight(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgsize/1454308-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
  }
}
