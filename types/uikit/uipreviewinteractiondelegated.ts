declare namespace cocoascript {
/**
 * A set of methods for communicating the progress of a preview interaction.
 * doc://com.apple.documentation/documentation/uikit/uipreviewinteractiondelegate
 */
interface UIPreviewInteractionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteractiondelegate/1648538-previewinteractionshouldbegin
  previewInteractionShouldBegin(previewInteraction: cocoascript.UIPreviewInteraction):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteractiondelegate/1648546-previewinteraction
  previewInteraction_didUpdatePreviewTransition_ended(previewInteraction: cocoascript.UIPreviewInteraction, transitionProgress: cocoascript.CGFloat, ended: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteractiondelegate/1648540-previewinteraction
  previewInteraction_didUpdateCommitTransition_ended(previewInteraction: cocoascript.UIPreviewInteraction, transitionProgress: cocoascript.CGFloat, ended: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uipreviewinteractiondelegate/1648547-previewinteractiondidcancel
  previewInteractionDidCancel(previewInteraction: cocoascript.UIPreviewInteraction):void;
}
}

