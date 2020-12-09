declare namespace cocoascript {
/**
 * The properties you use to configure a flash transition filter.
 * doc://com.apple.documentation/documentation/coreimage/ciflashtransition
 */
interface CIFlashTransition extends CITransitionFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228436-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228437-color
  color(): cocoascript.CIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228438-extent
  extent(): cocoascript.CGRect;
  setExtent(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228439-fadethreshold
  fadeThreshold(): number;
  setFadeThreshold(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228440-maxstriationradius
  maxStriationRadius(): number;
  setMaxStriationRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228441-striationcontrast
  striationContrast(): number;
  setStriationContrast(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciflashtransition/3228442-striationstrength
  striationStrength(): number;
  setStriationStrength(): void;
}
}

