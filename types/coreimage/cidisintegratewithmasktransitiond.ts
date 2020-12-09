declare namespace cocoascript {
/**
 * The properties you use to configure a disintegrate-with-mask transition filter.
 * doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition
 */
interface CIDisintegrateWithMaskTransition extends CITransitionFilter {
  // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228217-maskimage
  maskImage(): cocoascript.CIImage;
  setMaskImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228218-shadowdensity
  shadowDensity(): number;
  setShadowDensity(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228219-shadowoffset
  shadowOffset(): cocoascript.CGPoint;
  setShadowOffset(): void;
  // doc://com.apple.documentation/documentation/coreimage/cidisintegratewithmasktransition/3228220-shadowradius
  shadowRadius(): number;
  setShadowRadius(): void;
}
}

