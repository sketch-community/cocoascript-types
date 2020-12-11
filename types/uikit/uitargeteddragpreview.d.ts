declare namespace cocoascript {
  /**
   * A drag item preview used by the system during lift, drop, or cancellation animation.
   * doc://com.apple.documentation/documentation/uikit/uitargeteddragpreview
   */
  interface UITargetedDragPreview extends UITargetedPreview {
    // doc://com.apple.documentation/documentation/uikit/uitargeteddragpreview/2890950-retargetedpreviewwithtarget
    retargetedPreviewWithTarget(newTarget: cocoascript.UIDragPreviewTarget):cocoascript.UITargetedDragPreview;
    //
    alloc():cocoascript.UITargetedDragPreview;
    //
    init():cocoascript.UITargetedDragPreview;
  }
}

declare const UITargetedDragPreview: cocoascript.UITargetedDragPreview;
