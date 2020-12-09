declare namespace cocoascript {
/**
 * A view controller that specializes in managing a table view. 
 * doc://com.apple.documentation/documentation/uikit/uitableviewcontroller
 */
interface UITableViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uitableviewcontroller/1614754-initwithstyle
  initWithStyle(style: cocoascript.UITableViewStyle):cocoascript.UITableViewController;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcontroller/1614760-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UITableViewController;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcontroller/1614757-initwithnibname
  initWithNibName_bundle(nibNameOrNil: cocoascript.NSString, nibBundleOrNil: cocoascript.NSBundle):cocoascript.UITableViewController;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcontroller/1614753-tableview
  tableView(): cocoascript.UITableView;
  setTableView(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcontroller/1614758-clearsselectiononviewwillappear
  clearsSelectionOnViewWillAppear(): cocoascript.BOOL;
  setClearsSelectionOnViewWillAppear(): void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewcontroller/1614752-refreshcontrol
  refreshControl(): cocoascript.UIRefreshControl;
  setRefreshControl(): void;
  // 
  alloc():cocoascript.UITableViewController;
  // 
  init():cocoascript.UITableViewController;
}
}
declare const UITableViewController: cocoascript.UITableViewController;

