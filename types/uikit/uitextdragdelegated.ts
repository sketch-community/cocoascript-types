declare namespace cocoascript {
/**
 * The interface for customizing the behavior of a drag activity for a text view.
 * doc://com.apple.documentation/documentation/uikit/uitextdragdelegate
 */
interface UITextDragDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextdragdelegate/2890907-textdraggableview
  textDraggableView_dragSessionWillBegin(textDraggableView: cocoascript.UITextDraggable, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragdelegate/2890902-textdraggableview
  textDraggableView_dragSessionDidEnd_withOperation(textDraggableView: cocoascript.UITextDraggable, session: cocoascript.UIDragSession, operation: cocoascript.UIDropOperation):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragdelegate/2919989-textdraggableview
  textDraggableView_willAnimateLiftWithAnimator_session(textDraggableView: cocoascript.UITextDraggable, animator: cocoascript.UIDragAnimating, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdragdelegate/2890908-textdraggableview
  textDraggableView_itemsForDrag(textDraggableView: cocoascript.UITextDraggable, dragRequest: cocoascript.UITextDragRequest):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uitextdragdelegate/2890904-textdraggableview
  textDraggableView_dragPreviewForLiftingItem_session(textDraggableView: cocoascript.UITextDraggable, item: cocoascript.UIDragItem, session: cocoascript.UIDragSession):cocoascript.UITargetedDragPreview;
}
}

