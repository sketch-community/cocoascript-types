declare namespace cocoascript {
/**
 * An object that specifies the container view to use for animations. 
 * doc://com.apple.documentation/documentation/uikit/uipreviewtarget
 */
interface UIPreviewTarget extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipreviewtarget/3295964-initwithcontainer
  initWithContainer_center_transform(container: cocoascript.UIView, center: cocoascript.CGPoint, transform: cocoascript.CGAffineTransform):cocoascript.UIPreviewTarget;
  // doc://com.apple.documentation/documentation/uikit/uipreviewtarget/3295963-initwithcontainer
  initWithContainer_center(container: cocoascript.UIView, center: cocoascript.CGPoint):cocoascript.UIPreviewTarget;
  // doc://com.apple.documentation/documentation/uikit/uipreviewtarget/3295962-container
  container(): cocoascript.UIView;
  setContainer(): void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewtarget/3295961-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewtarget/3295965-transform
  transform(): cocoascript.CGAffineTransform;
  setTransform(): void;
  // 
  alloc():cocoascript.UIPreviewTarget;
  // 
  init():cocoascript.UIPreviewTarget;
}
}
declare const UIPreviewTarget: cocoascript.UIPreviewTarget;

