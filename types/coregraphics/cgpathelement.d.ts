declare namespace cocoascript {
  /**
   * A data structure that provides information about a path element.
   * doc://com.apple.documentation/documentation/coregraphics/cgpathelement
   */
  interface CGPathElement {
    // doc://com.apple.documentation/documentation/coregraphics/cgpathelement/1411198-points
    points(): cocoascript.CGPoint;
    setPoints(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpathelement/1411186-type
    type(): cocoascript.CGPathElementType;
    setType(): void;
  }
}
