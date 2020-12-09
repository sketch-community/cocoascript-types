declare namespace cocoascript {
/**
 * The delete system accessory.
 * doc://com.apple.documentation/documentation/uikit/uicellaccessorydelete
 */
interface UICellAccessoryDelete extends UICellAccessory {
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorydelete/3600366-actionhandler
  actionHandler(): void;
  setActionHandler(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorydelete/3667727-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // 
  alloc():cocoascript.UICellAccessoryDelete;
  // 
  init():cocoascript.UICellAccessoryDelete;
}
}
declare const UICellAccessoryDelete: cocoascript.UICellAccessoryDelete;

