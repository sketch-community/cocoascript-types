declare namespace cocoascript {
/**
 * The properties you use to configure a Lanczos scale transform filter.
 * doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform
 */
interface CILanczosScaleTransform extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform/3228516-aspectratio
  aspectRatio(): number;
  setAspectRatio(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform/3228517-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilanczosscaletransform/3228518-scale
  scale(): number;
  setScale(): void;
}
}

