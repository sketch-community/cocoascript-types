declare namespace cocoascript {
  /**
   * The properties you use to configure a palette centroid filter.
   * doc://com.apple.documentation/documentation/coreimage/cipalettecentroid
   */
  interface CIPaletteCentroid extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipalettecentroid/3228632-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipalettecentroid/3228633-paletteimage
    paletteImage(): cocoascript.CIImage;
    setPaletteImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipalettecentroid/3228634-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
