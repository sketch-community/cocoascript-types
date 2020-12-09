declare namespace cocoascript {
/**
 * The properties you use to configure a pointillize filter.
 * doc://com.apple.documentation/documentation/coreimage/cipointillize
 */
interface CIPointillize extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cipointillize/3228678-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipointillize/3228679-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipointillize/3228680-radius
  radius(): number;
  setRadius(): void;
}
}

