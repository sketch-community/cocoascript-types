declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion
   */
  interface CIDisplacementDistortion extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion/3600127-displacementimage
    displacementImage(): cocoascript.CIImage;
    setDisplacementImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion/3600128-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cidisplacementdistortion/3600129-scale
    scale(): number;
    setScale(): void;
  }
}
