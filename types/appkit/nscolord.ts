declare namespace cocoascript {
/**
 * An object that stores color data and sometimes opacity (alpha value). 
 * doc://com.apple.documentation/documentation/appkit/nscolor
 */
interface NSColor extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nscolor/2998826-colorwithsystemeffect
  colorWithSystemEffect(systemEffect: cocoascript.NSColorSystemEffect):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1527379-colorusingcolorspace
  colorUsingColorSpace(space: cocoascript.NSColorSpace):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1524689-blendedcolorwithfraction
  blendedColorWithFraction_ofColor(fraction: cocoascript.CGFloat, color: cocoascript.NSColor):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1526906-colorwithalphacomponent
  colorWithAlphaComponent(alpha: cocoascript.CGFloat):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1533061-highlightwithlevel
  highlightWithLevel(val: cocoascript.CGFloat):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1528523-shadowwithlevel
  shadowWithLevel(val: cocoascript.CGFloat):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1534332-colorusingcolorspacename
  colorUsingColorSpaceName(name: cocoascript.NSColorSpaceName):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1529417-colorusingcolorspacename
  colorUsingColorSpaceName_device(name: cocoascript.NSColorSpaceName, deviceDescription: cocoascript.NSColor):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1533565-ignoresalpha
  ignoresAlpha(): cocoascript.BOOL;
  setIgnoresAlpha(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1532199-writetopasteboard
  writeToPasteboard(pasteBoard: cocoascript.NSPasteboard):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1531348-getcyan
  getCyan_magenta_yellow_black_alpha(cyan: cocoascript.CGFloat, magenta: cocoascript.CGFloat, yellow: cocoascript.CGFloat, black: cocoascript.CGFloat, alpha: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1534060-gethue
  getHue_saturation_brightness_alpha(hue: cocoascript.CGFloat, saturation: cocoascript.CGFloat, brightness: cocoascript.CGFloat, alpha: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1527848-getred
  getRed_green_blue_alpha(red: cocoascript.CGFloat, green: cocoascript.CGFloat, blue: cocoascript.CGFloat, alpha: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1532613-getwhite
  getWhite_alpha(white: cocoascript.CGFloat, alpha: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1531308-numberofcomponents
  numberOfComponents(): cocoascript.NSInteger;
  setNumberOfComponents(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1524600-getcomponents
  getComponents(components: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1532504-alphacomponent
  alphaComponent(): cocoascript.CGFloat;
  setAlphaComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1534051-whitecomponent
  whiteComponent(): cocoascript.CGFloat;
  setWhiteComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1530483-redcomponent
  redComponent(): cocoascript.CGFloat;
  setRedComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1525935-greencomponent
  greenComponent(): cocoascript.CGFloat;
  setGreenComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1534229-bluecomponent
  blueComponent(): cocoascript.CGFloat;
  setBlueComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1528234-cyancomponent
  cyanComponent(): cocoascript.CGFloat;
  setCyanComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1535560-magentacomponent
  magentaComponent(): cocoascript.CGFloat;
  setMagentaComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1531965-yellowcomponent
  yellowComponent(): cocoascript.CGFloat;
  setYellowComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1526883-blackcomponent
  blackComponent(): cocoascript.CGFloat;
  setBlackComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1531780-huecomponent
  hueComponent(): cocoascript.CGFloat;
  setHueComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1526326-saturationcomponent
  saturationComponent(): cocoascript.CGFloat;
  setSaturationComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1529355-brightnesscomponent
  brightnessComponent(): cocoascript.CGFloat;
  setBrightnessComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1535443-catalognamecomponent
  catalogNameComponent(): cocoascript.NSColorListName;
  setCatalogNameComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1535351-localizedcatalognamecomponent
  localizedCatalogNameComponent(): cocoascript.NSString;
  setLocalizedCatalogNameComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1528278-colornamecomponent
  colorNameComponent(): cocoascript.NSColorName;
  setColorNameComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1527286-localizedcolornamecomponent
  localizedColorNameComponent(): cocoascript.NSString;
  setLocalizedColorNameComponent(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/2880315-type
  type(): cocoascript.NSColorType;
  setType(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/2880320-colorusingtype
  colorUsingType(type: cocoascript.NSColorType):cocoascript.NSColor;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1526733-colorspace
  colorSpace(): cocoascript.NSColorSpace;
  setColorSpace(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1535228-colorspacename
  colorSpaceName(): cocoascript.NSColorSpaceName;
  setColorSpaceName(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1527738-cgcolor
  CGColor(): cocoascript.CGColorRef;
  setCGColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1531770-drawswatchinrect
  drawSwatchInRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1527089-set
  set():void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1524755-setfill
  setFill():void;
  // doc://com.apple.documentation/documentation/appkit/nscolor/1531019-setstroke
  setStroke():void;
  // doc://com.apple.documentation/documentation/appkit/nssystemcolorsdidchangenotification
  NSSystemColorsDidChangeNotification(): cocoascript.NSNotificationName;
  setNSSystemColorsDidChangeNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nscontroltintdidchangenotification
  NSControlTintDidChangeNotification(): cocoascript.NSNotificationName;
  setNSControlTintDidChangeNotification(): void;
  // 
  alloc():cocoascript.NSColor;
  // 
  init():cocoascript.NSColor;
}
}
declare const NSColor: cocoascript.NSColor;

