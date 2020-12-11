declare namespace cocoascript {
  /**
   * The interface for handling drops in a table view.
   * doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate
   */
  interface UITableViewDropDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2897434-tableview
    tableView_canHandleDropSession(tableView: cocoascript.UITableView, session: cocoascript.UIDropSession):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2921669-tableview
    tableView_dropPreviewParametersForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UIDragPreviewParameters;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2897427-tableview
    tableView_performDropWithCoordinator(tableView: cocoascript.UITableView, coordinator: cocoascript.UITableViewDropCoordinator):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2897302-tableview
    tableView_dropSessionDidUpdate_withDestinationIndexPath(tableView: cocoascript.UITableView, session: cocoascript.UIDropSession, destinationIndexPath: cocoascript.NSIndexPath):cocoascript.UITableViewDropProposal;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2897458-tableview
    tableView_dropSessionDidEnter(tableView: cocoascript.UITableView, session: cocoascript.UIDropSession):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2897303-tableview
    tableView_dropSessionDidExit(tableView: cocoascript.UITableView, session: cocoascript.UIDropSession):void;
    // doc://com.apple.documentation/documentation/uikit/uitableviewdropdelegate/2897342-tableview
    tableView_dropSessionDidEnd(tableView: cocoascript.UITableView, session: cocoascript.UIDropSession):void;
  }
}
