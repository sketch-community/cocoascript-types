declare namespace cocoascript {
/**
 * An accessory in a collection view list cell.
 * doc://com.apple.documentation/documentation/uikit/uicellaccessory
 */
interface UICellAccessory extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicellaccessory/3600353-init
  init():cocoascript.UICellAccessory;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessory/3600354-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICellAccessory;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessory/3667726-hidden
  hidden(): cocoascript.BOOL;
  setHidden(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessory/3600356-tintcolor
  tintColor(): cocoascript.UIColor;
  setTintColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessory/3600352-displayedstate
  displayedState(): cocoascript.UICellAccessoryDisplayedState;
  setDisplayedState(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessory/3600355-reservedlayoutwidth
  reservedLayoutWidth(): cocoascript.CGFloat;
  setReservedLayoutWidth(): void;
  // doc://com.apple.documentation/documentation/uikit/3600394-uicellaccessorypositionafteracce
  UICellAccessoryPositionAfterAccessoryOfClass(): cocoascript.Class;
  setUICellAccessoryPositionAfterAccessoryOfClass(): void;
  // doc://com.apple.documentation/documentation/uikit/3600395-uicellaccessorypositionbeforeacc
  UICellAccessoryPositionBeforeAccessoryOfClass(): cocoascript.Class;
  setUICellAccessoryPositionBeforeAccessoryOfClass(): void;
  // 
  alloc():cocoascript.UICellAccessory;
  // 
  init():cocoascript.UICellAccessory;
}
}
declare const UICellAccessory: cocoascript.UICellAccessory;

