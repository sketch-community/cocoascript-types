declare namespace cocoascript {
/**
 * The interface for configuring a text view’s drop behavior.
 * doc://com.apple.documentation/documentation/uikit/uitextdropdelegate
 */
interface UITextDropDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890851-textdroppableview
  textDroppableView_proposalForDrop(textDroppableView: cocoascript.UITextDroppable, drop: cocoascript.UITextDropRequest):cocoascript.UITextDropProposal;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890856-textdroppableview
  textDroppableView_willBecomeEditableForDrop(textDroppableView: cocoascript.UITextDroppable, drop: cocoascript.UITextDropRequest):cocoascript.UITextDropEditability;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890850-textdroppableview
  textDroppableView_dropSessionDidEnter(textDroppableView: cocoascript.UITextDroppable, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890854-textdroppableview
  textDroppableView_dropSessionDidExit(textDroppableView: cocoascript.UITextDroppable, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890861-textdroppableview
  textDroppableView_dropSessionDidUpdate(textDroppableView: cocoascript.UITextDroppable, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890857-textdroppableview
  textDroppableView_dropSessionDidEnd(textDroppableView: cocoascript.UITextDroppable, session: cocoascript.UIDropSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2890858-textdroppableview
  textDroppableView_willPerformDrop(textDroppableView: cocoascript.UITextDroppable, drop: cocoascript.UITextDropRequest):void;
  // doc://com.apple.documentation/documentation/uikit/uitextdropdelegate/2909033-textdroppableview
  textDroppableView_previewForDroppingAllItemsWithDefault(textDroppableView: cocoascript.UITextDroppable, defaultPreview: cocoascript.UITargetedDragPreview):cocoascript.UITargetedDragPreview;
}
}

