declare namespace cocoascript {
/**
 * The insert system accessory.
 * doc://com.apple.documentation/documentation/uikit/uicellaccessoryinsert
 */
interface UICellAccessoryInsert extends UICellAccessory {
  // doc://com.apple.documentation/documentation/uikit/uicellaccessoryinsert/3600373-actionhandler
  actionHandler(): void;
  setActionHandler(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessoryinsert/3667728-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // 
  alloc():cocoascript.UICellAccessoryInsert;
  // 
  init():cocoascript.UICellAccessoryInsert;
}
}
declare const UICellAccessoryInsert: cocoascript.UICellAccessoryInsert;

