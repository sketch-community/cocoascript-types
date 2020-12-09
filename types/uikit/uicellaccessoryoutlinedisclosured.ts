declare namespace cocoascript {
/**
 * The outline disclosure system accessory.
 * doc://com.apple.documentation/documentation/uikit/uicellaccessoryoutlinedisclosure
 */
interface UICellAccessoryOutlineDisclosure extends UICellAccessory {
  // doc://com.apple.documentation/documentation/uikit/uicellaccessoryoutlinedisclosure/3600383-actionhandler
  actionHandler(): void;
  setActionHandler(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessoryoutlinedisclosure/3600385-style
  style(): cocoascript.UICellAccessoryOutlineDisclosureStyle;
  setStyle(): void;
  // 
  alloc():cocoascript.UICellAccessoryOutlineDisclosure;
  // 
  init():cocoascript.UICellAccessoryOutlineDisclosure;
}
}
declare const UICellAccessoryOutlineDisclosure: cocoascript.UICellAccessoryOutlineDisclosure;

