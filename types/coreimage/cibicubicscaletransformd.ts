declare namespace cocoascript {
  /**
   * The properties you use to configure a bicubic scale transform filter.
   * doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform
   */
  interface CIBicubicScaleTransform extends CIFilter {
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228074-aspectratio
    aspectRatio(): number;
    setAspectRatio(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228075-inputimage
    inputImage(): cocoascript.CIImage;
    setInputImage(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228076-parameterb
    parameterB(): number;
    setParameterB(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228077-parameterc
    parameterC(): number;
    setParameterC(): void;
    // doc://com.apple.documentation/documentation/coreimage/cibicubicscaletransform/3228078-scale
    scale(): number;
    setScale(): void;
  }
}
