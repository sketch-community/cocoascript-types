declare namespace cocoascript {
/**
 * The properties you use to configure a color clamp filter.
 * doc://com.apple.documentation/documentation/coreimage/cicolorclamp
 */
interface CIColorClamp extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolorclamp/3228120-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorclamp/3228121-maxcomponents
  maxComponents(): cocoascript.CIVector;
  setMaxComponents(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorclamp/3228122-mincomponents
  minComponents(): cocoascript.CIVector;
  setMinComponents(): void;
}
}

