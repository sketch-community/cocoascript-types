declare namespace cocoascript {
/**
 * A class that registers a view to provide a custom user experience in response to 3D Touch interactions.
 * doc://com.apple.documentation/documentation/uikit/uipreviewinteraction
 */
interface UIPreviewInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteraction/1648541-initwithview
  initWithView(view: cocoascript.UIView):cocoascript.UIPreviewInteraction;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteraction/1648537-delegate
  delegate(): cocoascript.UIPreviewInteractionDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteraction/1648544-view
  view(): cocoascript.UIView;
  setView(): void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteraction/1648539-cancelinteraction
  cancelInteraction():void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteraction/1648545-locationincoordinatespace
  locationInCoordinateSpace(coordinateSpace: cocoascript.UICoordinateSpace):cocoascript.CGPoint;
  // 
  alloc():cocoascript.UIPreviewInteraction;
  // 
  init():cocoascript.UIPreviewInteraction;
}
}
declare const UIPreviewInteraction: cocoascript.UIPreviewInteraction;

