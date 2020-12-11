declare namespace cocoascript {
  /**
   * The properties you use to configure a thermal filter.
   * doc://com.apple.documentation/documentation/coreimage/cithermal
   */
  interface CIThermal extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cithermal/3228790-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
