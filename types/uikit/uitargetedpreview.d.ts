declare namespace cocoascript {
  /**
   * An object describing the view to use during preview-related animations.
   * doc://com.apple.documentation/documentation/uikit/uitargetedpreview
   */
  interface UITargetedPreview extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295969-initwithview
    initWithView_parameters_target(view: cocoascript.UIView, parameters: cocoascript.UIPreviewParameters, target: cocoascript.UIPreviewTarget):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295968-initwithview
    initWithView_parameters(view: cocoascript.UIView, parameters: cocoascript.UIPreviewParameters):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295967-initwithview
    initWithView(view: cocoascript.UIView):cocoascript.UITargetedPreview;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295974-view
    view(): cocoascript.UIView;
    setView(): void;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295973-target
    target(): cocoascript.UIPreviewTarget;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295972-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295970-parameters
    parameters(): cocoascript.UIPreviewParameters;
    setParameters(): void;
    // doc://com.apple.documentation/documentation/uikit/uitargetedpreview/3295971-retargetedpreviewwithtarget
    retargetedPreviewWithTarget(newTarget: cocoascript.UIPreviewTarget):cocoascript.UITargetedPreview;
    //
    alloc():cocoascript.UITargetedPreview;
    //
    init():cocoascript.UITargetedPreview;
  }
}

declare const UITargetedPreview: cocoascript.UITargetedPreview;
