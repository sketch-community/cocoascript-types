declare namespace cocoascript {
/**
 * A view controller that informs your app about user interaction with the color picker.
 * doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontroller
 */
interface UIColorPickerViewController extends UIViewController {
  // doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontroller/3600465-init
  init():cocoascript.UIColorPickerViewController;
  // doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontroller/3600464-delegate
  delegate(): cocoascript.UIColorPickerViewControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontroller/3600466-selectedcolor
  selectedColor(): cocoascript.UIColor;
  setSelectedColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uicolorpickerviewcontroller/3600467-supportsalpha
  supportsAlpha(): cocoascript.BOOL;
  setSupportsAlpha(): void;
  // 
  alloc():cocoascript.UIColorPickerViewController;
  // 
  init():cocoascript.UIColorPickerViewController;
}
}
declare const UIColorPickerViewController: cocoascript.UIColorPickerViewController;

