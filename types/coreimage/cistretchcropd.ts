declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cistretchcrop
   */
  interface CIStretchCrop extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600192-centerstretchamount
    centerStretchAmount(): number;
    setCenterStretchAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600193-cropamount
    cropAmount(): number;
    setCropAmount(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600194-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cistretchcrop/3600195-size
    size(): cocoascript.CGPoint;
    setSize(): void;
  }
}
