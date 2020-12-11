declare namespace cocoascript {
  /**
   * The properties you use to configure a highlight-shadow adjust filter.
   * doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust
   */
  interface CIHighlightShadowAdjust extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228494-highlightamount
    highlightAmount(): number;
    setHighlightAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228495-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228496-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cihighlightshadowadjust/3228497-shadowamount
    shadowAmount(): number;
    setShadowAmount(): void;
  }
}
