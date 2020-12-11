declare namespace cocoascript {
  /**
   * The properties you use to configure a triangle kaleidoscope filter.
   * doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope
   */
  interface CITriangleKaleidoscope extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228803-decay
    decay(): number;
    setDecay(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228804-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228805-point
    point(): cocoascript.CGPoint;
    setPoint(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228806-rotation
    rotation(): number;
    setRotation(): void;
    // doc://com.apple.documentation/documentation/coreimage/citrianglekaleidoscope/3228807-size
    size(): number;
    setSize(): void;
  }
}
