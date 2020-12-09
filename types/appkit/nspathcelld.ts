declare namespace cocoascript {
/**
 * The user interface of a path control object.
 * doc://com.apple.documentation/documentation/appkit/nspathcell
 */
interface NSPathCell extends NSActionCell {
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1526407-mouseentered
  mouseEntered_withFrame_inView(event: cocoascript.NSEvent, frame: cocoascript.NSRect, view: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1525878-mouseexited
  mouseExited_withFrame_inView(event: cocoascript.NSEvent, frame: cocoascript.NSRect, view: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1524305-allowedtypes
  allowedTypes(): cocoascript.NSString;
  setAllowedTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1524249-pathstyle
  pathStyle(): cocoascript.NSPathStyle;
  setPathStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1529347-setobjectvalue
  setObjectValue(obj: cocoascript.NSCopying):void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1524552-placeholderattributedstring
  placeholderAttributedString(): cocoascript.NSAttributedString;
  setPlaceholderAttributedString(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1531136-placeholderstring
  placeholderString(): cocoascript.NSString;
  setPlaceholderString(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1527481-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1535369-pathcomponentcellclass
  pathComponentCellClass(): cocoascript.Class;
  setPathComponentCellClass(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1534143-rectofpathcomponentcell
  rectOfPathComponentCell_withFrame_inView(cell: cocoascript.NSPathComponentCell, frame: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1528185-pathcomponentcellatpoint
  pathComponentCellAtPoint_withFrame_inView(point: cocoascript.NSPoint, frame: cocoascript.NSRect, view: cocoascript.NSView):cocoascript.NSPathComponentCell;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1524894-clickedpathcomponentcell
  clickedPathComponentCell(): cocoascript.NSPathComponentCell;
  setClickedPathComponentCell(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1529433-pathcomponentcells
  pathComponentCells(): cocoascript.NSPathComponentCell;
  setPathComponentCells(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1532554-doubleaction
  doubleAction(): cocoascript.SEL;
  setDoubleAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1525034-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1524894-clickedpathcomponentcell
  clickedPathComponentCell(): cocoascript.NSPathComponentCell;
  setClickedPathComponentCell(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcell/1532834-delegate
  delegate(): cocoascript.NSPathCellDelegate;
  setDelegate(): void;
  // 
  alloc():cocoascript.NSPathCell;
  // 
  init():cocoascript.NSPathCell;
}
}
declare const NSPathCell: cocoascript.NSPathCell;

