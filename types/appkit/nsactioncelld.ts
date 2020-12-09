declare namespace cocoascript {
/**
 * An active area inside a control. 
 * doc://com.apple.documentation/documentation/appkit/nsactioncell
 */
interface NSActionCell extends NSCell {
  // doc://com.apple.documentation/documentation/appkit/nsactioncell/1531427-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nsactioncell/1535837-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nsactioncell/1535314-tag
  tag(): cocoascript.NSInteger;
  setTag(): void;
  // 
  alloc():cocoascript.NSActionCell;
  // 
  init():cocoascript.NSActionCell;
}
}
declare const NSActionCell: cocoascript.NSActionCell;

