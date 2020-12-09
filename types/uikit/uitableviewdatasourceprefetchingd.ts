declare namespace cocoascript {
/**
 * A protocol that provides advance warning of the data requirements for a table view, allowing you to start potentially long-running data operations early.
 * doc://com.apple.documentation/documentation/uikit/uitableviewdatasourceprefetching
 */
interface UITableViewDataSourcePrefetching extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasourceprefetching/1771764-tableview
  tableView_prefetchRowsAtIndexPaths(tableView: cocoascript.UITableView, indexPaths: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasourceprefetching/1771765-tableview
  tableView_cancelPrefetchingForRowsAtIndexPaths(tableView: cocoascript.UITableView, indexPaths: cocoascript.NSIndexPath):void;
}
}

