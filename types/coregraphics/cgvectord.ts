declare namespace cocoascript {
  /**
   * A structure that contains a two-dimensional vector.
   * doc://com.apple.documentation/documentation/coregraphics/cgvector
   */
  interface CGVector {
    // doc://com.apple.documentation/documentation/coregraphics/cgvector/1454722-dx
    dx(): cocoascript.CGFloat;
    setDx(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgvector/1455006-dy
    dy(): cocoascript.CGFloat;
    setDy(): void;
  }
}
