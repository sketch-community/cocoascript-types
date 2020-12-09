declare namespace cocoascript {
/**
 * A text block that appears as a cell in a text table.
 * doc://com.apple.documentation/documentation/appkit/nstexttableblock
 */
interface NSTextTableBlock extends NSTextBlock {
  // doc://com.apple.documentation/documentation/appkit/nstexttableblock/1532894-initwithtable
  initWithTable_startingRow_rowSpan_startingColumn_columnSpan(table: cocoascript.NSTextTable, row: cocoascript.NSInteger, rowSpan: cocoascript.NSInteger, col: cocoascript.NSInteger, colSpan: cocoascript.NSInteger):cocoascript.NSTextTableBlock;
  // doc://com.apple.documentation/documentation/appkit/nstexttableblock/1525141-table
  table(): cocoascript.NSTextTable;
  setTable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttableblock/1525803-startingrow
  startingRow(): cocoascript.NSInteger;
  setStartingRow(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttableblock/1528586-rowspan
  rowSpan(): cocoascript.NSInteger;
  setRowSpan(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttableblock/1525383-startingcolumn
  startingColumn(): cocoascript.NSInteger;
  setStartingColumn(): void;
  // doc://com.apple.documentation/documentation/appkit/nstexttableblock/1528568-columnspan
  columnSpan(): cocoascript.NSInteger;
  setColumnSpan(): void;
  // 
  alloc():cocoascript.NSTextTableBlock;
  // 
  init():cocoascript.NSTextTableBlock;
}
}
declare const NSTextTableBlock: cocoascript.NSTextTableBlock;

