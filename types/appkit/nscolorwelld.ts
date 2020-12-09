declare namespace cocoascript {
/**
 * A control that displays a color value and lets the user change that color value. 
 * doc://com.apple.documentation/documentation/appkit/nscolorwell
 */
interface NSColorWell extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1534546-color
  color(): cocoascript.NSColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1524407-takecolorfrom
  takeColorFrom(sender: cocoascript.NSColorWell):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1527152-activate
  activate(exclusive: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1528698-active
  active(): cocoascript.BOOL;
  setActive(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1524493-deactivate
  deactivate():void;
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1528015-bordered
  bordered(): cocoascript.BOOL;
  setBordered(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolorwell/1530268-drawwellinside
  drawWellInside(insideRect: cocoascript.NSRect):void;
  // 
  alloc():cocoascript.NSColorWell;
  // 
  init():cocoascript.NSColorWell;
}
}
declare const NSColorWell: cocoascript.NSColorWell;

