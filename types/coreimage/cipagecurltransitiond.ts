declare namespace cocoascript {
/**
 * The properties you use to configure a page curl transition filter.
 * doc://com.apple.documentation/documentation/coreimage/cipagecurltransition
 */
interface CIPageCurlTransition extends CITransitionFilter {
  // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228618-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228619-backsideimage
  backsideImage(): cocoascript.CIImage;
  setBacksideImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228620-extent
  extent(): cocoascript.CGRect;
  setExtent(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228621-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipagecurltransition/3228622-shadingimage
  shadingImage(): cocoascript.CIImage;
  setShadingImage(): void;
}
}

