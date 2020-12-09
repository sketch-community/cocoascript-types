declare namespace cocoascript {
/**
 * An interaction that enables support for effects on a view or customizes the pointer's appearance within a region of an app.
 * doc://com.apple.documentation/documentation/uikit/uipointerinteraction
 */
interface UIPointerInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipointerinteraction/3538989-initwithdelegate
  initWithDelegate(delegate: cocoascript.UIPointerInteractionDelegate):cocoascript.UIPointerInteraction;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteraction/3538987-delegate
  delegate(): cocoascript.UIPointerInteractionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteraction/3538988-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uipointerinteraction/3538990-invalidate
  invalidate():void;
  // 
  alloc():cocoascript.UIPointerInteraction;
  // 
  init():cocoascript.UIPointerInteraction;
}
}
declare const UIPointerInteraction: cocoascript.UIPointerInteraction;

