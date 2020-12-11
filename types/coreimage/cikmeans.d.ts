declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cikmeans
   */
  interface CIKMeans extends CIAreaReductionFilter {
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547130-count
    count(): cocoascript.NSInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547131-inputmeans
    inputMeans(): cocoascript.CIImage;
    setInputMeans(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547132-passes
    passes(): number;
    setPasses(): void;
    // doc://com.apple.documentation/documentation/coreimage/cikmeans/3547133-perceptual
    perceptual(): boolean;
    setPerceptual(): void;
  }
}
