declare namespace cocoascript {
  /**
   * The properties you use to configure a composite operation filter.
   * doc://com.apple.documentation/documentation/coreimage/cicompositeoperation
   */
  interface CICompositeOperation extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicompositeoperation/3228182-backgroundimage
    backgroundImage(): cocoascript.CIImage;
    setBackgroundImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicompositeoperation/3228183-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
