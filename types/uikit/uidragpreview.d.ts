declare namespace cocoascript {
  /**
   * A graphical preview for a single drag item, used by the system after a drag has started and when no related animation is running.
   * doc://com.apple.documentation/documentation/uikit/uidragpreview
   */
  interface UIDragPreview extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uidragpreview/2890915-initwithview
    initWithView(view: cocoascript.UIView):cocoascript.UIDragPreview;
    // doc://com.apple.documentation/documentation/uikit/uidragpreview/2890918-initwithview
    initWithView_parameters(view: cocoascript.UIView, parameters: cocoascript.UIDragPreviewParameters):cocoascript.UIDragPreview;
    // doc://com.apple.documentation/documentation/uikit/uidragpreview/2890925-parameters
    parameters(): cocoascript.UIDragPreviewParameters;
    setParameters(): void;
    // doc://com.apple.documentation/documentation/uikit/uidragpreview/2890924-view
    view(): cocoascript.UIView;
    setView(): void;
    //
    alloc():cocoascript.UIDragPreview;
    //
    init():cocoascript.UIDragPreview;
  }
}

declare const UIDragPreview: cocoascript.UIDragPreview;
