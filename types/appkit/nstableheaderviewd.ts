declare namespace cocoascript {
/**
 * An object that draws headers over a table view's columns and handles mouse events in those headers.
 * doc://com.apple.documentation/documentation/appkit/nstableheaderview
 */
interface NSTableHeaderView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nstableheaderview/1535730-tableview
  tableView(): cocoascript.NSTableView;
  setTableView(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableheaderview/1534458-draggedcolumn
  draggedColumn(): cocoascript.NSInteger;
  setDraggedColumn(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableheaderview/1527836-draggeddistance
  draggedDistance(): cocoascript.CGFloat;
  setDraggedDistance(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableheaderview/1528247-resizedcolumn
  resizedColumn(): cocoascript.NSInteger;
  setResizedColumn(): void;
  // doc://com.apple.documentation/documentation/appkit/nstableheaderview/1529216-columnatpoint
  columnAtPoint(point: cocoascript.NSPoint):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nstableheaderview/1531883-headerrectofcolumn
  headerRectOfColumn(column: cocoascript.NSInteger):cocoascript.NSRect;
  // 
  alloc():cocoascript.NSTableHeaderView;
  // 
  init():cocoascript.NSTableHeaderView;
}
}
declare const NSTableHeaderView: cocoascript.NSTableHeaderView;

