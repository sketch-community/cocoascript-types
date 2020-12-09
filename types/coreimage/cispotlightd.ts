declare namespace cocoascript {
/**
 * The properties you use to configure a spotlight filter.
 * doc://com.apple.documentation/documentation/coreimage/cispotlight
 */
interface CISpotLight extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228742-brightness
  brightness(): number;
  setBrightness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228743-color
  color(): cocoascript.CIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228744-concentration
  concentration(): number;
  setConcentration(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228745-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228746-lightpointsat
  lightPointsAt(): cocoascript.CIVector;
  setLightPointsAt(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotlight/3228747-lightposition
  lightPosition(): cocoascript.CIVector;
  setLightPosition(): void;
}
}

