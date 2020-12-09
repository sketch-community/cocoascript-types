declare namespace cocoascript {
/**
 * The object you use to manage data and provide cells for a table view. 
 * doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource
 */
interface UITableViewDiffableDataSource extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3182933-initwithtableview
  initWithTableView_cellProvider(tableView: cocoascript.UITableView, cellProvider: cocoascript.UITableViewDiffableDataSourceCellProvider):cocoascript.UITableViewDiffableDataSource;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3182934-itemidentifierforindexpath
  itemIdentifierForIndexPath(indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3182932-indexpathforitemidentifier
  indexPathForItemIdentifier(identifier: cocoascript.):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3182935-snapshot
  snapshot():cocoascript.NSDiffableDataSourceSnapshot;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3182930-applysnapshot
  applySnapshot_animatingDifferences(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3356326-applysnapshot
  applySnapshot_animatingDifferences_completion(snapshot: cocoascript.NSDiffableDataSourceSnapshot, animatingDifferences: cocoascript.BOOL, completion: void):void;
  // doc://com.apple.documentation/documentation/uikit/uitableviewdiffabledatasource/3182931-defaultrowanimation
  defaultRowAnimation(): cocoascript.UITableViewRowAnimation;
  setDefaultRowAnimation(): void;
  // 
  alloc():cocoascript.UITableViewDiffableDataSource;
  // 
  init():cocoascript.UITableViewDiffableDataSource;
}
}
declare const UITableViewDiffableDataSource: cocoascript.UITableViewDiffableDataSource;

