declare namespace cocoascript {
/**
 * The view shown for a row in a table view.
 * doc://com.apple.documentation/documentation/appkit/nstablerowview
 */
interface NSTableRowView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1526258-emphasized
  emphasized(): cocoascript.BOOL;
  setEmphasized(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1535905-interiorbackgroundstyle
  interiorBackgroundStyle(): cocoascript.NSBackgroundStyle;
  setInteriorBackgroundStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1534291-floating
  floating(): cocoascript.BOOL;
  setFloating(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1529508-selected
  selected(): cocoascript.BOOL;
  setSelected(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1531083-selectionhighlightstyle
  selectionHighlightStyle(): cocoascript.NSTableViewSelectionHighlightStyle;
  setSelectionHighlightStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1525012-draggingdestinationfeedbackstyle
  draggingDestinationFeedbackStyle(): cocoascript.NSTableViewDraggingDestinationFeedbackStyle;
  setDraggingDestinationFeedbackStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1535836-indentationfordropoperation
  indentationForDropOperation(): cocoascript.CGFloat;
  setIndentationForDropOperation(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1533914-targetfordropoperation
  targetForDropOperation(): cocoascript.BOOL;
  setTargetForDropOperation(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1530499-grouprowstyle
  groupRowStyle(): cocoascript.BOOL;
  setGroupRowStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1525610-numberofcolumns
  numberOfColumns(): cocoascript.NSInteger;
  setNumberOfColumns(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1534057-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1531936-drawbackgroundinrect
  drawBackgroundInRect(dirtyRect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1528434-drawdraggingdestinationfeedbacki
  drawDraggingDestinationFeedbackInRect(dirtyRect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1526425-drawselectioninrect
  drawSelectionInRect(dirtyRect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1525167-drawseparatorinrect
  drawSeparatorInRect(dirtyRect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1534440-viewatcolumn
  viewAtColumn(column: cocoascript.NSInteger):cocoascript.NSTableRowView;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1529083-nextrowselected
  nextRowSelected(): cocoascript.BOOL;
  setNextRowSelected(): void;
  // doc://com.apple.documentation/documentation/appkit/nstablerowview/1535313-previousrowselected
  previousRowSelected(): cocoascript.BOOL;
  setPreviousRowSelected(): void;
  // 
  alloc():cocoascript.NSTableRowView;
  // 
  init():cocoascript.NSTableRowView;
}
}
declare const NSTableRowView: cocoascript.NSTableRowView;

