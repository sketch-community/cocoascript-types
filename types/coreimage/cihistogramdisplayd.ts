declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay
 */
interface CIHistogramDisplay extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547125-height
  height(): number;
  setHeight(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547126-highlimit
  highLimit(): number;
  setHighLimit(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547127-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihistogramdisplay/3547128-lowlimit
  lowLimit(): number;
  setLowLimit(): void;
}
}

