declare namespace cocoascript {
  /**
   * The properties you use to configure a page-curl-with-shadow transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition
   */
  interface CIPageCurlWithShadowTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228624-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228625-backsideimage
    backsideImage(): cocoascript.CIImage;
    setBacksideImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228626-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228627-radius
    radius(): number;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228628-shadowamount
    shadowAmount(): number;
    setShadowAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228629-shadowextent
    shadowExtent(): cocoascript.CGRect;
    setShadowExtent(): void;
    // doc://com.apple.documentation/documentation/coreimage/cipagecurlwithshadowtransition/3228630-shadowsize
    shadowSize(): number;
    setShadowSize(): void;
  }
}
