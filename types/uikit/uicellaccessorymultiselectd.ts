declare namespace cocoascript {
/**
 * The multiselect system accessory.
 * doc://com.apple.documentation/documentation/uikit/uicellaccessorymultiselect
 */
interface UICellAccessoryMultiselect extends UICellAccessory {
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorymultiselect/3667729-backgroundcolor
  backgroundColor(): cocoascript.UIColor;
  setBackgroundColor(): void;
  // 
  alloc():cocoascript.UICellAccessoryMultiselect;
  // 
  init():cocoascript.UICellAccessoryMultiselect;
}
}
declare const UICellAccessoryMultiselect: cocoascript.UICellAccessoryMultiselect;

