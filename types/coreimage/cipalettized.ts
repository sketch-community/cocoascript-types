declare namespace cocoascript {
/**
 * The properties you use to configure a palettize filter.
 * doc://com.apple.documentation/documentation/coreimage/cipalettize
 */
interface CIPalettize extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cipalettize/3228636-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipalettize/3228637-paletteimage
  paletteImage(): cocoascript.CIImage;
  setPaletteImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cipalettize/3228638-perceptual
  perceptual(): boolean;
  setPerceptual(): void;
}
}

