declare namespace cocoascript {
/**
 * A custom cell accessory.
 * doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview
 */
interface UICellAccessoryCustomView extends UICellAccessory {
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview/3600361-initwithcustomview
  initWithCustomView_placement(customView: cocoascript.UIView, placement: cocoascript.UICellAccessoryPlacement):cocoascript.UICellAccessoryCustomView;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview/3600360-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICellAccessoryCustomView;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview/3600359-customview
  customView(): cocoascript.UIView;
  setCustomView(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview/3600363-placement
  placement(): cocoascript.UICellAccessoryPlacement;
  setPlacement(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview/3600364-position
  position(): cocoascript.UICellAccessoryPosition;
  setPosition(): void;
  // doc://com.apple.documentation/documentation/uikit/uicellaccessorycustomview/3600362-maintainsfixedsize
  maintainsFixedSize(): cocoascript.BOOL;
  setMaintainsFixedSize(): void;
  // 
  alloc():cocoascript.UICellAccessoryCustomView;
  // 
  init():cocoascript.UICellAccessoryCustomView;
}
}
declare const UICellAccessoryCustomView: cocoascript.UICellAccessoryCustomView;

