declare namespace cocoascript {
/**
 * The properties you use to configure a hue-saturation-value gradient filter.
 * doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient
 */
interface CIHueSaturationValueGradient extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228502-colorspace
  colorSpace(): cocoascript.CGColorSpaceRef;
  setColorSpace(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228503-dither
  dither(): number;
  setDither(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228504-radius
  radius(): number;
  setRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228505-softness
  softness(): number;
  setSoftness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cihuesaturationvaluegradient/3228506-value
  value(): number;
  setValue(): void;
}
}

