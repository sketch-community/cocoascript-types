declare namespace cocoascript {
  /**
   * The properties you use to configure a photo-effect filter.
   * doc://com.apple.documentation/documentation/coreimage/ciphotoeffect
   */
  interface CIPhotoEffect extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciphotoeffect/3228672-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
