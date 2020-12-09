declare namespace cocoascript {
/**
 * The interface for configuring and controlling a drag interaction.
 * doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate
 */
interface UIDragInteractionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891010-draginteraction
  dragInteraction_itemsForBeginningSession(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2890968-draginteraction
  dragInteraction_itemsForAddingToSession_withTouchAtPoint(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession, point: cocoascript.CGPoint):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891004-draginteraction
  dragInteraction_sessionForAddingItems_withTouchAtPoint(interaction: cocoascript.UIDragInteraction, sessions: cocoascript.UIDragSession, point: cocoascript.CGPoint):cocoascript.UIDragSession;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891005-draginteraction
  dragInteraction_willAnimateLiftWithAnimator_session(interaction: cocoascript.UIDragInteraction, animator: cocoascript.UIDragAnimating, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891027-draginteraction
  dragInteraction_item_willAnimateCancelWithAnimator(interaction: cocoascript.UIDragInteraction, item: cocoascript.UIDragItem, animator: cocoascript.UIDragAnimating):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891055-draginteraction
  dragInteraction_sessionWillBegin(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2890993-draginteraction
  dragInteraction_session_willAddItems_forInteraction(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession, items: cocoascript.UIDragItem, addingInteraction: cocoascript.UIDragInteraction):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2890988-draginteraction
  dragInteraction_sessionDidMove(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891032-draginteraction
  dragInteraction_session_willEndWithOperation(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession, operation: cocoascript.UIDropOperation):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891012-draginteraction
  dragInteraction_session_didEndWithOperation(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession, operation: cocoascript.UIDropOperation):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891014-draginteraction
  dragInteraction_sessionDidTransferItems(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891057-draginteraction
  dragInteraction_previewForLiftingItem_session(interaction: cocoascript.UIDragInteraction, item: cocoascript.UIDragItem, session: cocoascript.UIDragSession):cocoascript.UITargetedDragPreview;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2890967-draginteraction
  dragInteraction_previewForCancellingItem_withDefault(interaction: cocoascript.UIDragInteraction, item: cocoascript.UIDragItem, defaultPreview: cocoascript.UITargetedDragPreview):cocoascript.UITargetedDragPreview;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891028-draginteraction
  dragInteraction_prefersFullSizePreviewsForSession(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2891063-draginteraction
  dragInteraction_sessionIsRestrictedToDraggingApplication(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uidraginteractiondelegate/2890978-draginteraction
  dragInteraction_sessionAllowsMoveOperation(interaction: cocoascript.UIDragInteraction, session: cocoascript.UIDragSession):cocoascript.BOOL;
}
}

