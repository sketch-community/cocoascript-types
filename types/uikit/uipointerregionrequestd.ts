declare namespace cocoascript {
/**
 * An object to describe the pointer's location in the interaction's view.
 * doc://com.apple.documentation/documentation/uikit/uipointerregionrequest
 */
interface UIPointerRegionRequest extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipointerregionrequest/3539000-location
  location(): cocoascript.CGPoint;
  setLocation(): void;
  // doc://com.apple.documentation/documentation/uikit/uipointerregionrequest/3539001-modifiers
  modifiers(): cocoascript.UIKeyModifierFlags;
  setModifiers(): void;
  // 
  alloc():cocoascript.UIPointerRegionRequest;
  // 
  init():cocoascript.UIPointerRegionRequest;
}
}
declare const UIPointerRegionRequest: cocoascript.UIPointerRegionRequest;

