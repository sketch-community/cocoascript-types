declare namespace cocoascript {
/**
 * The protocol that an interaction implements to access the view that owns it.
 * doc://com.apple.documentation/documentation/uikit/uiinteraction
 */
interface UIInteraction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiinteraction/2890990-view
  view(): cocoascript.UIView;
  setView(): void;
  // doc://com.apple.documentation/documentation/uikit/uiinteraction/2891009-didmovetoview
  didMoveToView(view: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiinteraction/2891039-willmovetoview
  willMoveToView(view: cocoascript.UIView):void;
}
}

