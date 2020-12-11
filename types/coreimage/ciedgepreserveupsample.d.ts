declare namespace cocoascript {
  /**
   * The properties you use to configure an edge preserve upsample filter.
   * doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample
   */
  interface CIEdgePreserveUpsample extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228237-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228238-lumasigma
    lumaSigma(): number;
    setLumaSigma(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228239-smallimage
    smallImage(): cocoascript.CIImage;
    setSmallImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/ciedgepreserveupsample/3228240-spatialsigma
    spatialSigma(): number;
    setSpatialSigma(): void;
  }
}
