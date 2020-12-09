declare namespace cocoascript {
/**
 * A bar item that provides a system-defined color picker.
 * doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem
 */
interface NSColorPickerTouchBarItem extends NSTouchBarItem {
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2641681-colorlist
  colorList(): cocoascript.NSColorList;
  setColorList(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2881218-allowedcolorspaces
  allowedColorSpaces(): cocoascript.NSColorSpace;
  setAllowedColorSpaces(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2544828-showsalpha
  showsAlpha(): cocoascript.BOOL;
  setShowsAlpha(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2641680-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2544768-color
  color(): cocoascript.NSColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2544857-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2544673-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickertouchbaritem/2544803-customizationlabel
  customizationLabel(): cocoascript.NSString;
  setCustomizationLabel(): void;
  // 
  alloc():cocoascript.NSColorPickerTouchBarItem;
  // 
  init():cocoascript.NSColorPickerTouchBarItem;
}
}
declare const NSColorPickerTouchBarItem: cocoascript.NSColorPickerTouchBarItem;

