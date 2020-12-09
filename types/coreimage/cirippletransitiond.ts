declare namespace cocoascript {
/**
 * The properties you use to configure a ripple transition filter.
 * doc://com.apple.documentation/documentation/coreimage/cirippletransition
 */
interface CIRippleTransition extends CITransitionFilter {
  // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228692-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228693-extent
  extent(): cocoascript.CGRect;
  setExtent(): void;
  // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228694-scale
  scale(): number;
  setScale(): void;
  // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228695-shadingimage
  shadingImage(): cocoascript.CIImage;
  setShadingImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cirippletransition/3228696-width
  width(): number;
  setWidth(): void;
}
}

