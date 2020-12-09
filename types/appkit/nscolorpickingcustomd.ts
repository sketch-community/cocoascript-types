declare namespace cocoascript {
/**
 * A set of methods that provides a way to add color pickers—custom user interfaces for color selection—to an app’s color panel. 
 * doc://com.apple.documentation/documentation/appkit/nscolorpickingcustom
 */
interface NSColorPickingCustom extends NSColorPickingDefault {
  // doc://com.apple.documentation/documentation/appkit/nscolorpickingcustom/1526545-setcolor
  setColor(newColor: cocoascript.NSColor):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickingcustom/1524671-currentmode
  currentMode():cocoascript.NSColorPanelMode;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickingcustom/1524683-supportsmode
  supportsMode(mode: cocoascript.NSColorPanelMode):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nscolorpickingcustom/1525701-providenewview
  provideNewView(initialRequest: cocoascript.BOOL):cocoascript.NSView;
}
}

