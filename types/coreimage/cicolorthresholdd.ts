declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coreimage/cicolorthreshold
 */
interface CIColorThreshold extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicolorthreshold/3547107-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolorthreshold/3547108-threshold
  threshold(): number;
  setThreshold(): void;
}
}

