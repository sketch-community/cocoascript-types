declare namespace cocoascript {
/**
 * A view that uses a row-and-column format to display hierarchical data like directories and files that can be expanded and collapsed.
 * doc://com.apple.documentation/documentation/appkit/nsoutlineview
 */
interface NSOutlineView extends NSTableView {
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1531054-datasource
  dataSource(): cocoascript.NSOutlineViewDataSource;
  setDataSource(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1644626-stronglyreferencesitems
  stronglyReferencesItems(): cocoascript.BOOL;
  setStronglyReferencesItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1533676-isexpandable
  isExpandable(item: cocoascript.NSOutlineView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1525355-isitemexpanded
  isItemExpanded(item: cocoascript.NSOutlineView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1535323-expanditem
  expandItem(item: cocoascript.NSOutlineView):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1532826-expanditem
  expandItem_expandChildren(item: cocoascript.NSOutlineView, expandChildren: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1532295-collapseitem
  collapseItem(item: cocoascript.NSOutlineView):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1531436-collapseitem
  collapseItem_collapseChildren(item: cocoascript.NSOutlineView, collapseChildren: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1531263-reloaditem
  reloadItem(item: cocoascript.NSOutlineView):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1531176-reloaditem
  reloadItem_reloadChildren(item: cocoascript.NSOutlineView, reloadChildren: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1534846-itematrow
  itemAtRow(row: cocoascript.NSInteger):cocoascript.NSOutlineView;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1533885-rowforitem
  rowForItem(item: cocoascript.NSOutlineView):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1533581-outlinetablecolumn
  outlineTableColumn(): cocoascript.NSTableColumn;
  setOutlineTableColumn(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1532304-autoresizesoutlinecolumn
  autoresizesOutlineColumn(): cocoascript.BOOL;
  setAutoresizesOutlineColumn(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1535891-levelforitem
  levelForItem(item: cocoascript.NSOutlineView):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1531449-levelforrow
  levelForRow(row: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1535181-indentationperlevel
  indentationPerLevel(): cocoascript.CGFloat;
  setIndentationPerLevel(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1531707-indentationmarkerfollowscell
  indentationMarkerFollowsCell(): cocoascript.BOOL;
  setIndentationMarkerFollowsCell(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1530638-autosaveexpandeditems
  autosaveExpandedItems(): cocoascript.BOOL;
  setAutosaveExpandedItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1525351-setdropitem
  setDropItem_dropChildIndex(item: cocoascript.NSOutlineView, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1535362-shouldcollapseautoexpandeditemsf
  shouldCollapseAutoExpandedItemsForDeposited(deposited: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1535031-parentforitem
  parentForItem(item: cocoascript.NSOutlineView):cocoascript.NSOutlineView;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1529954-childindexforitem
  childIndexForItem(item: cocoascript.NSOutlineView):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1527501-child
  child_ofItem(index: cocoascript.NSInteger, item: cocoascript.NSOutlineView):cocoascript.NSOutlineView;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1534304-numberofchildrenofitem
  numberOfChildrenOfItem(item: cocoascript.NSOutlineView):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1532314-frameofoutlinecellatrow
  frameOfOutlineCellAtRow(row: cocoascript.NSInteger):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1534011-delegate
  delegate(): cocoascript.NSOutlineViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1528656-insertitemsatindexes
  insertItemsAtIndexes_inParent_withAnimation(indexes: cocoascript.NSIndexSet, parent: cocoascript.NSOutlineView, animationOptions: cocoascript.NSTableViewAnimationOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1530467-moveitematindex
  moveItemAtIndex_inParent_toIndex_inParent(fromIndex: cocoascript.NSInteger, oldParent: cocoascript.NSOutlineView, toIndex: cocoascript.NSInteger, newParent: cocoascript.NSOutlineView):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1527168-removeitemsatindexes
  removeItemsAtIndexes_inParent_withAnimation(indexes: cocoascript.NSIndexSet, parent: cocoascript.NSOutlineView, animationOptions: cocoascript.NSTableViewAnimationOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineview/1524564-userinterfacelayoutdirection
  userInterfaceLayoutDirection(): cocoascript.NSUserInterfaceLayoutDirection;
  setUserInterfaceLayoutDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewcolumndidmovenotification
  NSOutlineViewColumnDidMoveNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewColumnDidMoveNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewcolumndidresizenotification
  NSOutlineViewColumnDidResizeNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewColumnDidResizeNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewitemdidcollapsenotification
  NSOutlineViewItemDidCollapseNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewItemDidCollapseNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewitemdidexpandnotification
  NSOutlineViewItemDidExpandNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewItemDidExpandNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewitemwillcollapsenotification
  NSOutlineViewItemWillCollapseNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewItemWillCollapseNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewitemwillexpandnotification
  NSOutlineViewItemWillExpandNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewItemWillExpandNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewselectiondidchangenotification
  NSOutlineViewSelectionDidChangeNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewSelectionDidChangeNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsoutlineviewselectionischangingnotification
  NSOutlineViewSelectionIsChangingNotification(): cocoascript.NSNotificationName;
  setNSOutlineViewSelectionIsChangingNotification(): void;
  // 
  alloc():cocoascript.NSOutlineView;
  // 
  init():cocoascript.NSOutlineView;
}
}
declare const NSOutlineView: cocoascript.NSOutlineView;

