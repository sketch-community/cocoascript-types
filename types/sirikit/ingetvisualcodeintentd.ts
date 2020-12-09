declare namespace cocoascript {
/**
 * A request for a visual code to use for exchanging payment and contact information.
 * doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintent
 */
interface INGetVisualCodeIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintent/2873899-initwithvisualcodetype
  initWithVisualCodeType(visualCodeType: cocoascript.INVisualCodeType):cocoascript.INGetVisualCodeIntent;
  // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintent/2873900-visualcodetype
  visualCodeType(): cocoascript.INVisualCodeType;
  setVisualCodeType(): void;
  // 
  alloc():cocoascript.INGetVisualCodeIntent;
  // 
  init():cocoascript.INGetVisualCodeIntent;
}
}
declare const INGetVisualCodeIntent: cocoascript.INGetVisualCodeIntent;

