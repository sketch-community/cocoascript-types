declare namespace cocoascript {
  /**
   * The properties you use to configure a temperature and tint filter.
   * doc://com.apple.documentation/documentation/coreimage/citemperatureandtint
   */
  interface CITemperatureAndTint extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/citemperatureandtint/3228781-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/citemperatureandtint/3228782-neutral
    neutral(): cocoascript.CIVector;
    setNeutral(): void;
    // doc://com.apple.documentation/documentation/coreimage/citemperatureandtint/3228783-targetneutral
    targetNeutral(): cocoascript.CIVector;
    setTargetNeutral(): void;
  }
}
