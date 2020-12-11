declare namespace cocoascript {
  /**
   * The properties you use to configure a false color filter.
   * doc://com.apple.documentation/documentation/coreimage/cifalsecolor
   */
  interface CIFalseColor extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifalsecolor/3228256-color0
    color0(): cocoascript.CIColor;
    setColor0(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifalsecolor/3228257-color1
    color1(): cocoascript.CIColor;
    setColor1(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifalsecolor/3228258-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
