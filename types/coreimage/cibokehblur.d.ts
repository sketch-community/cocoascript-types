declare namespace cocoascript {
  /**
   * The properties you use to configure a bokeh blur filter.
   * doc://com.apple.documentation/documentation/coreimage/cibokehblur
   */
  interface CIBokehBlur extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228088-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228089-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228090-ringamount
    ringAmount(): number;
    setRingAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228091-ringsize
    ringSize(): number;
    setRingSize(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibokehblur/3228092-softness
    softness(): number;
    setSoftness(): void;
  }
}
