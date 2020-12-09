declare namespace cocoascript {
/**
 * A discrete gesture recognizer that interprets panning gestures that start near an edge of the screen.
 * doc://com.apple.documentation/documentation/uikit/uiscreenedgepangesturerecognizer
 */
interface UIScreenEdgePanGestureRecognizer extends UIPanGestureRecognizer {
  // doc://com.apple.documentation/documentation/uikit/uiscreenedgepangesturerecognizer/1614142-edges
  edges(): cocoascript.UIRectEdge;
  setEdges(): void;
  // 
  alloc():cocoascript.UIScreenEdgePanGestureRecognizer;
  // 
  init():cocoascript.UIScreenEdgePanGestureRecognizer;
}
}
declare const UIScreenEdgePanGestureRecognizer: cocoascript.UIScreenEdgePanGestureRecognizer;

