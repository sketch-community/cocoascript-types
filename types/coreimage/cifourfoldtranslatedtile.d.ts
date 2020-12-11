declare namespace cocoascript {
  /**
   * The properties you use to configure a fourfold translated tile filter.
   * doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile
   */
  interface CIFourfoldTranslatedTile extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228455-acuteangle
    acuteAngle(): number;
    setAcuteAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228456-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228457-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228458-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cifourfoldtranslatedtile/3228459-width
    width(): number;
    setWidth(): void;
  }
}
