declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/ciareareductionfilter
 */
interface CIAreaReductionFilter extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciareareductionfilter/3547101-extent
  extent(): cocoascript.CGRect;
  setExtent(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciareareductionfilter/3547102-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
}
}

