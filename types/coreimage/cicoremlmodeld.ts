declare namespace cocoascript {
  /**
   * The properties you use to configure a Core ML model filter.
   * doc://com.apple.documentation/documentation/coreimage/cicoremlmodel
   */
  interface CICoreMLModel extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228195-headindex
    headIndex(): number;
    setHeadIndex(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228196-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228197-model
    model(): cocoascript.MLModel;
    setModel(): void;
    // doc://com.apple.documentation/documentation/coreimage/cicoremlmodel/3228198-softmaxnormalization
    softmaxNormalization(): boolean;
    setSoftmaxNormalization(): void;
  }
}
