declare namespace cocoascript {
  /**
   * The properties you use to configure a bloom filter.
   * doc://com.apple.documentation/documentation/coreimage/cibloom
   */
  interface CIBloom extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibloom/3228084-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibloom/3228085-intensity
    intensity(): number;
    setIntensity(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibloom/3228086-radius
    radius(): number;
    setRadius(): void;
  }
}
