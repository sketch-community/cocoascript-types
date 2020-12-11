declare namespace cocoascript {
  /**
   * A set of parameters for adjusting the appearance of a drag item preview or a targeted drag item preview.
   * doc://com.apple.documentation/documentation/uikit/uidragpreviewparameters
   */
  interface UIDragPreviewParameters extends UIPreviewParameters {
    //
    alloc():cocoascript.UIDragPreviewParameters;
    //
    init():cocoascript.UIDragPreviewParameters;
  }
}

declare const UIDragPreviewParameters: cocoascript.UIDragPreviewParameters;
