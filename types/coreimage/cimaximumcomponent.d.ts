declare namespace cocoascript {
  /**
   * The properties you use to configure a maximum component filter.
   * doc://com.apple.documentation/documentation/coreimage/cimaximumcomponent
   */
  interface CIMaximumComponent extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cimaximumcomponent/3228555-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
  }
}
