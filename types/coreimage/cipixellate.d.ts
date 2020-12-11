declare namespace cocoascript {
  /**
   * The properties you use to configure a pixellate filter.
   * doc://com.apple.documentation/documentation/coreimage/cipixellate
   */
  interface CIPixellate extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipixellate/3228674-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipixellate/3228675-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipixellate/3228676-scale
    scale(): number;
    setScale(): void;
  }
}
