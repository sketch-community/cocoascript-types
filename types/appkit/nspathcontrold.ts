declare namespace cocoascript {
/**
 * A display of a file system path or virtual path information.
 * doc://com.apple.documentation/documentation/appkit/nspathcontrol
 */
interface NSPathControl extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1532330-pathstyle
  pathStyle(): cocoascript.NSPathStyle;
  setPathStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1534164-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1533929-clickedpathcomponentcell
  clickedPathComponentCell():cocoascript.NSPathComponentCell;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1526652-pathcomponentcells
  pathComponentCells():cocoascript.NSPathComponentCell;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1524663-setpathcomponentcells
  setPathComponentCells(cells: cocoascript.NSPathComponentCell):void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1534088-doubleaction
  doubleAction(): cocoascript.SEL;
  setDoubleAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1527205-url
  URL(): cocoascript.NSURL;
  setURL(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1526753-delegate
  delegate(): cocoascript.NSPathControlDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1526909-setdraggingsourceoperationmask
  setDraggingSourceOperationMask_forLocal(mask: cocoascript.NSDragOperation, isLocal: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1535867-menu
  menu(): cocoascript.NSMenu;
  setMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1527415-allowedtypes
  allowedTypes(): cocoascript.NSString;
  setAllowedTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1535047-clickedpathitem
  clickedPathItem(): cocoascript.NSPathControlItem;
  setClickedPathItem(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1535833-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1528208-pathitems
  pathItems(): cocoascript.NSPathControlItem;
  setPathItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1531486-placeholderattributedstring
  placeholderAttributedString(): cocoascript.NSAttributedString;
  setPlaceholderAttributedString(): void;
  // doc://com.apple.documentation/documentation/appkit/nspathcontrol/1531787-placeholderstring
  placeholderString(): cocoascript.NSString;
  setPlaceholderString(): void;
  // 
  alloc():cocoascript.NSPathControl;
  // 
  init():cocoascript.NSPathControl;
}
}
declare const NSPathControl: cocoascript.NSPathControl;

