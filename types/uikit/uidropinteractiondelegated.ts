declare namespace cocoascript {
/**
 * The interface for configuring and controlling a drop interaction.
 * doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate
 */
interface UIDropInteractionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890887-dropinteraction
  dropInteraction_canHandleSession(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890889-dropinteraction
  dropInteraction_performDrop(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890880-dropinteraction
  dropInteraction_sessionDidEnter(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890888-dropinteraction
  dropInteraction_sessionDidUpdate(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):cocoascript.UIDropProposal;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890893-dropinteraction
  dropInteraction_sessionDidExit(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890879-dropinteraction
  dropInteraction_sessionDidEnd(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890896-dropinteraction
  dropInteraction_item_willAnimateDropWithAnimator(interaction: cocoascript.UIDropInteraction, item: cocoascript.UIDragItem, animator: cocoascript.UIDragAnimating):void;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890870-dropinteraction
  dropInteraction_previewForDroppingItem_withDefault(interaction: cocoascript.UIDropInteraction, item: cocoascript.UIDragItem, defaultPreview: cocoascript.UITargetedDragPreview):cocoascript.UITargetedDragPreview;
  // doc://com.apple.documentation/documentation/uikit/uidropinteractiondelegate/2890898-dropinteraction
  dropInteraction_concludeDrop(interaction: cocoascript.UIDropInteraction, session: cocoascript.UIDropSession):void;
}
}

