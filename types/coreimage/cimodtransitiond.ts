declare namespace cocoascript {
  /**
   * The properties you use to configure a mod transition filter.
   * doc://com.apple.documentation/documentation/coreimage/cimodtransition
   */
  interface CIModTransition extends CITransitionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228569-angle
    angle(): number;
    setAngle(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228570-center
    center(): cocoascript.CGPoint;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228571-compression
    compression(): number;
    setCompression(): void;
    // doc://com.apple.documentation/documentation/coreimage/cimodtransition/3228572-radius
    radius(): number;
    setRadius(): void;
  }
}
