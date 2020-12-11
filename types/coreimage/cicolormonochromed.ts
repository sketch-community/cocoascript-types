declare namespace cocoascript {
  /**
   * The properties you use to configure a color monochrome filter.
   * doc://com.apple.documentation/documentation/coreimage/cicolormonochrome
   */
  interface CIColorMonochrome extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicolormonochrome/3228167-color
    color(): cocoascript.CIColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormonochrome/3228168-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicolormonochrome/3228169-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
