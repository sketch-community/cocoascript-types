declare namespace cocoascript {
/**
 * An object that encapsulates a view’s state. 
 * doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate
 */
interface UIViewConfigurationState extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3601076-traitcollection
  traitCollection(): cocoascript.UITraitCollection;
  setTraitCollection(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3601074-selected
  selected(): cocoascript.BOOL;
  setSelected(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3601073-highlighted
  highlighted(): cocoascript.BOOL;
  setHighlighted(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3601072-focused
  focused(): cocoascript.BOOL;
  setFocused(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3601071-disabled
  disabled(): cocoascript.BOOL;
  setDisabled(): void;
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3600605-initwithtraitcollection
  initWithTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.UIViewConfigurationState;
  // doc://com.apple.documentation/documentation/uikit/uiviewconfigurationstate/3600604-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIViewConfigurationState;
  // 
  alloc():cocoascript.UIViewConfigurationState;
  // 
  init():cocoascript.UIViewConfigurationState;
}
}
declare const UIViewConfigurationState: cocoascript.UIViewConfigurationState;

