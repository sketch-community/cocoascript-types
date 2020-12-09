declare namespace cocoascript {
/**
 * An abstract superclass that implements the default color picking protocol.  
 * doc://com.apple.documentation/documentation/appkit/nscolorpicker
 */
interface NSColorPicker extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492397-initwithpickermask
  initWithPickerMask_colorPanel(mask: cocoascript.NSUInteger, owningColorPanel: cocoascript.NSColorPanel):cocoascript.NSColorPicker;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492396-colorpanel
  colorPanel(): cocoascript.NSColorPanel;
  setColorPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492402-insertnewbuttonimage
  insertNewButtonImage_in(newButtonImage: cocoascript.NSImage, buttonCell: cocoascript.NSButtonCell):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492393-providenewbuttonimage
  provideNewButtonImage(): cocoascript.NSImage;
  setProvideNewButtonImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492394-setmode
  setMode(mode: cocoascript.NSColorPanelMode):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492395-attachcolorlist
  attachColorList(colorList: cocoascript.NSColorList):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492388-detachcolorlist
  detachColorList(colorList: cocoascript.NSColorList):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492389-viewsizechanged
  viewSizeChanged(sender: cocoascript.NSColorPicker):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492404-buttontooltip
  buttonToolTip(): cocoascript.NSString;
  setButtonToolTip(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpicker/1492391-mincontentsize
  minContentSize(): cocoascript.NSSize;
  setMinContentSize(): void;
  // 
  alloc():cocoascript.NSColorPicker;
  // 
  init():cocoascript.NSColorPicker;
}
}
declare const NSColorPicker: cocoascript.NSColorPicker;

