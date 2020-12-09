declare namespace cocoascript {
/**
 * A preview action, or 
 * doc://com.apple.documentation/documentation/uikit/uipreviewaction
 */
interface UIPreviewAction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipreviewaction/1621447-handler
  handler(): cocoascript.UIViewController;
  setHandler(): void;
  // 
  alloc():cocoascript.UIPreviewAction;
  // 
  init():cocoascript.UIPreviewAction;
}
}
declare const UIPreviewAction: cocoascript.UIPreviewAction;

