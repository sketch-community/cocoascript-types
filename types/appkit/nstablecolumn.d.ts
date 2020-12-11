declare namespace cocoascript {
  /**
   * The display characteristics and identifier for a column in a table view.
   * doc://com.apple.documentation/documentation/appkit/nstablecolumn
   */
  interface NSTableColumn extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1526749-initwithidentifier
    initWithIdentifier(identifier: cocoascript.NSUserInterfaceItemIdentifier):cocoascript.NSTableColumn;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1535908-tableview
    tableView(): cocoascript.NSTableView;
    setTableView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1528774-width
    width(): cocoascript.CGFloat;
    setWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1525126-minwidth
    minWidth(): cocoascript.CGFloat;
    setMinWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1526342-maxwidth
    maxWidth(): cocoascript.CGFloat;
    setMaxWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1529591-resizingmask
    resizingMask(): cocoascript.NSTableColumnResizingOptions;
    setResizingMask(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1532997-sizetofit
    sizeToFit():void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1526875-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1525137-headercell
    headerCell(): cocoascript.NSTableHeaderCell;
    setHeaderCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1531113-identifier
    identifier(): cocoascript.NSUserInterfaceItemIdentifier;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1528412-editable
    editable(): cocoascript.BOOL;
    setEditable(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1534663-sortdescriptorprototype
    sortDescriptorPrototype(): cocoascript.NSSortDescriptor;
    setSortDescriptorPrototype(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1524681-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1524685-headertooltip
    headerToolTip(): cocoascript.NSString;
    setHeaderToolTip(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1579360-isresizable
    isResizable():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1579359-setresizable
    setResizable(flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1534251-datacell
    dataCell(): cocoascript.id;
    setDataCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1532459-datacellforrow
    dataCellForRow(row: cocoascript.NSInteger):cocoascript.NSTableColumn;
    // doc://com.apple.documentation/documentation/appkit/nstablecolumn/1644121-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTableColumn;
    //
    alloc():cocoascript.NSTableColumn;
    //
    init():cocoascript.NSTableColumn;
  }
}

declare const NSTableColumn: cocoascript.NSTableColumn;
