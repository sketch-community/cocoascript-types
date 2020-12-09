declare namespace cocoascript {
/**
 * A rectangular region that interacts with pointer movements.
 * doc://com.apple.documentation/documentation/uikit/uipointerregion
 */
interface UIPointerRegion extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipointerregion/3539004-rect
  rect(): cocoascript.CGRect;
  setRect(): void;
  // doc://com.apple.documentation/documentation/uikit/uipointerregion/3539003-identifier
  identifier(): cocoascript.NSObject;
  setIdentifier(): void;
  // 
  alloc():cocoascript.UIPointerRegion;
  // 
  init():cocoascript.UIPointerRegion;
}
}
declare const UIPointerRegion: cocoascript.UIPointerRegion;

