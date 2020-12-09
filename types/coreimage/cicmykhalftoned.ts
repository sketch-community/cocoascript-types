declare namespace cocoascript {
/**
 * The properties you use to configure a CMYK halftone filter.
 * doc://com.apple.documentation/documentation/coreimage/cicmykhalftone
 */
interface CICMYKHalftone extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228097-angle
  angle(): number;
  setAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228098-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228099-graycomponentreplacement
  grayComponentReplacement(): number;
  setGrayComponentReplacement(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228100-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228101-sharpness
  sharpness(): number;
  setSharpness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228102-undercolorremoval
  underColorRemoval(): number;
  setUnderColorRemoval(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicmykhalftone/3228103-width
  width(): number;
  setWidth(): void;
}
}

