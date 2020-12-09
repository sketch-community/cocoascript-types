declare namespace cocoascript {
/**
 * A standard user interface for selecting color in an app.
 * doc://com.apple.documentation/documentation/appkit/nscolorpanel
 */
interface NSColorPanel extends NSPanel {
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1524482-sharedcolorpanel
  sharedColorPanel(): cocoascript.NSColorPanel;
  setSharedColorPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1525183-sharedcolorpanelexists
  sharedColorPanelExists(): cocoascript.BOOL;
  setSharedColorPanelExists(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1525410-mode
  mode(): cocoascript.NSColorPanelMode;
  setMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1526892-accessoryview
  accessoryView(): cocoascript.NSView;
  setAccessoryView(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1528265-continuous
  continuous(): cocoascript.BOOL;
  setContinuous(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1531244-setaction
  setAction(selector: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1524753-settarget
  setTarget(target: cocoascript.NSColorPanel):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1525279-showsalpha
  showsAlpha(): cocoascript.BOOL;
  setShowsAlpha(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1531970-attachcolorlist
  attachColorList(colorList: cocoascript.NSColorList):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1529357-detachcolorlist
  detachColorList(colorList: cocoascript.NSColorList):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1530835-color
  color(): cocoascript.NSColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanel/1526246-alpha
  alpha(): cocoascript.CGFloat;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1532638-changecolor
  changeColor(sender: cocoascript.NSColorPanel):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorpanelcolordidchangenotification
  NSColorPanelColorDidChangeNotification(): cocoascript.NSNotificationName;
  setNSColorPanelColorDidChangeNotification(): void;
  // 
  alloc():cocoascript.NSColorPanel;
  // 
  init():cocoascript.NSColorPanel;
}
}
declare const NSColorPanel: cocoascript.NSColorPanel;

