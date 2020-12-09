declare namespace cocoascript {
/**
 * The interface for initiating drags from a table view.
 * doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate
 */
interface UITableViewDragDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2897492-tableview
  tableView_itemsForBeginningDragSession_atIndexPath(tableView: cocoascript.UITableView, session: cocoascript.UIDragSession, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2897293-tableview
  tableView_itemsForAddingToDragSession_atIndexPath_point(tableView: cocoascript.UITableView, session: cocoascript.UIDragSession, indexPath: cocoascript.NSIndexPath, point: cocoascript.CGPoint):cocoascript.UIDragItem;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2897382-tableview
  tableView_dragSessionWillBegin(tableView: cocoascript.UITableView, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2897428-tableview
  tableView_dragSessionDidEnd(tableView: cocoascript.UITableView, session: cocoascript.UIDragSession):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2919982-tableview
  tableView_dragSessionIsRestrictedToDraggingApplication(tableView: cocoascript.UITableView, session: cocoascript.UIDragSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2919983-tableview
  tableView_dragSessionAllowsMoveOperation(tableView: cocoascript.UITableView, session: cocoascript.UIDragSession):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdragdelegate/2897353-tableview
  tableView_dragPreviewParametersForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragPreviewParameters;
}
}

