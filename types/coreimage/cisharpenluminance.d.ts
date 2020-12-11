declare namespace cocoascript {
  /**
   * The properties you use to configure a sharpen luminance filter.
   * doc://com.apple.documentation/documentation/coreimage/cisharpenluminance
   */
  interface CISharpenLuminance extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cisharpenluminance/3228709-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisharpenluminance/3228710-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cisharpenluminance/3228711-sharpness
    sharpness(): number;
    setSharpness(): void;
  }
}
