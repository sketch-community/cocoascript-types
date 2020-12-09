declare namespace cocoascript {
/**
 * The methods adopted by the object you use to manage data and provide cells for a table view.
 * doc://com.apple.documentation/documentation/uikit/uitableviewdatasource
 */
interface UITableViewDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614931-tableview
  tableView_numberOfRowsInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614860-numberofsectionsintableview
  numberOfSectionsInTableView(tableView: cocoascript.UITableView):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614861-tableview
  tableView_cellForRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.UITableViewCell;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614850-tableview
  tableView_titleForHeaderInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614994-tableview
  tableView_titleForFooterInSection(tableView: cocoascript.UITableView, section: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614871-tableview
  tableView_commitEditingStyle_forRowAtIndexPath(tableView: cocoascript.UITableView, editingStyle: cocoascript.UITableViewCellEditingStyle, indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614900-tableview
  tableView_canEditRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614927-tableview
  tableView_canMoveRowAtIndexPath(tableView: cocoascript.UITableView, indexPath: cocoascript.NSIndexPath):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614867-tableview
  tableView_moveRowAtIndexPath_toIndexPath(tableView: cocoascript.UITableView, sourceIndexPath: cocoascript.NSIndexPath, destinationIndexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614857-sectionindextitlesfortableview
  sectionIndexTitlesForTableView(tableView: cocoascript.UITableView):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdatasource/1614933-tableview
  tableView_sectionForSectionIndexTitle_atIndex(tableView: cocoascript.UITableView, title: cocoascript.NSString, index: cocoascript.NSInteger):cocoascript.NSInteger;
}
}

