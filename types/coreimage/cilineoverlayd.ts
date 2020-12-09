declare namespace cocoascript {
/**
 * The properties you use to configure a line overlay filter.
 * doc://com.apple.documentation/documentation/coreimage/cilineoverlay
 */
interface CILineOverlay extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228529-nrnoiselevel
  NRNoiseLevel(): number;
  setNRNoiseLevel(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228530-nrsharpness
  NRSharpness(): number;
  setNRSharpness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228531-contrast
  contrast(): number;
  setContrast(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228532-edgeintensity
  edgeIntensity(): number;
  setEdgeIntensity(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228533-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilineoverlay/3228534-threshold
  threshold(): number;
  setThreshold(): void;
}
}

