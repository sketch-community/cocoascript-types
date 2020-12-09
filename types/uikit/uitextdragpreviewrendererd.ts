declare namespace cocoascript {
/**
 * Renders previews of text dragged by the user.
 * doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer
 */
interface UITextDragPreviewRenderer extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2890970-initwithlayoutmanager
  initWithLayoutManager_range(layoutManager: cocoascript.NSLayoutManager, range: cocoascript.NSRange):cocoascript.UITextDragPreviewRenderer;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2891008-initwithlayoutmanager
  initWithLayoutManager_range_unifyRects(layoutManager: cocoascript.NSLayoutManager, range: cocoascript.NSRange, unifyRects: cocoascript.BOOL):cocoascript.UITextDragPreviewRenderer;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2890974-bodyrect
  bodyRect(): cocoascript.CGRect;
  setBodyRect(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2891020-firstlinerect
  firstLineRect(): cocoascript.CGRect;
  setFirstLineRect(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2891017-lastlinerect
  lastLineRect(): cocoascript.CGRect;
  setLastLineRect(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2890984-adjustfirstlinerect
  adjustFirstLineRect_bodyRect_lastLineRect_textOrigin(firstLineRect: cocoascript.CGRect, bodyRect: cocoascript.CGRect, lastLineRect: cocoascript.CGRect, origin: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2891018-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragpreviewrenderer/2891019-layoutmanager
  layoutManager(): cocoascript.NSLayoutManager;
  setLayoutManager(): void;
  // 
  alloc():cocoascript.UITextDragPreviewRenderer;
  // 
  init():cocoascript.UITextDragPreviewRenderer;
}
}
declare const UITextDragPreviewRenderer: cocoascript.UITextDragPreviewRenderer;

