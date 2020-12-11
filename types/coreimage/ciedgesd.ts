declare namespace cocoascript {
  /**
   * The properties you use to configure an edges filter.
   * doc://com.apple.documentation/documentation/coreimage/ciedges
   */
  interface CIEdges extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciedges/3228245-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedges/3228246-intensity
    intensity(): number;
    setIntensity(): void;
  }
}
