declare namespace cocoascript {
/**
 * The properties you use to configure an edge-work filter.
 * doc://com.apple.documentation/documentation/coreimage/ciedgework
 */
interface CIEdgeWork extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciedgework/3228242-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciedgework/3228243-radius
  radius(): number;
  setRadius(): void;
}
}

