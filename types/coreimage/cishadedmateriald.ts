declare namespace cocoascript {
  /**
   * The properties you use to configure a shaded material filter.
   * doc://com.apple.documentation/documentation/coreimage/cishadedmaterial
   */
  interface CIShadedMaterial extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cishadedmaterial/3228705-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cishadedmaterial/3228706-scale
    scale(): number;
    setScale(): void;
    // doc://com.apple.documentation/documentation/coreimage/cishadedmaterial/3228707-shadingimage
    shadingImage(): cocoascript.CIImage;
    setShadingImage(): void;
  }
}
