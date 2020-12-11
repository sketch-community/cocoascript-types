declare namespace cocoascript {
  /**
   * An individual content area within a grid view, typically at the intersection of a row and a column.
   * doc://com.apple.documentation/documentation/appkit/nsgridcell
   */
  interface NSGridCell extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639747-column
    column(): cocoascript.NSGridColumn;
    setColumn(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639763-row
    row(): cocoascript.NSGridRow;
    setRow(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639721-contentview
    contentView(): cocoascript.NSView;
    setContentView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639681-emptycontentview
    emptyContentView(): cocoascript.NSView;
    setEmptyContentView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639717-customplacementconstraints
    customPlacementConstraints(): cocoascript.NSLayoutConstraint;
    setCustomPlacementConstraints(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1823686-rowalignment
    rowAlignment(): cocoascript.NSGridRowAlignment;
    setRowAlignment(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639710-xplacement
    xPlacement(): cocoascript.NSGridCellPlacement;
    setXPlacement(): void;
    // doc://com.apple.documentation/documentation/appkit/nsgridcell/1639737-yplacement
    yPlacement(): cocoascript.NSGridCellPlacement;
    setYPlacement(): void;
    //
    alloc():cocoascript.NSGridCell;
    //
    init():cocoascript.NSGridCell;
  }
}

declare const NSGridCell: cocoascript.NSGridCell;
