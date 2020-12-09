declare namespace cocoascript {
/**
 * The properties you use to configure a spot color filter.
 * doc://com.apple.documentation/documentation/coreimage/cispotcolor
 */
interface CISpotColor extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228728-centercolor1
  centerColor1(): cocoascript.CIColor;
  setCenterColor1(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228729-centercolor2
  centerColor2(): cocoascript.CIColor;
  setCenterColor2(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228730-centercolor3
  centerColor3(): cocoascript.CIColor;
  setCenterColor3(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228731-closeness1
  closeness1(): number;
  setCloseness1(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228732-closeness2
  closeness2(): number;
  setCloseness2(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228733-closeness3
  closeness3(): number;
  setCloseness3(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228734-contrast1
  contrast1(): number;
  setContrast1(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228735-contrast2
  contrast2(): number;
  setContrast2(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228736-contrast3
  contrast3(): number;
  setContrast3(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228737-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228738-replacementcolor1
  replacementColor1(): cocoascript.CIColor;
  setReplacementColor1(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228739-replacementcolor2
  replacementColor2(): cocoascript.CIColor;
  setReplacementColor2(): void;
  // doc://com.apple.documentation/documentation/coreimage/cispotcolor/3228740-replacementcolor3
  replacementColor3(): cocoascript.CIColor;
  setReplacementColor3(): void;
}
}

