declare namespace cocoascript {
/**
 * An object that stores color data and sometimes opacity. 
 * doc://com.apple.documentation/documentation/uikit/uicolor
 */
interface UIColor extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621944-initwithwhite
  initWithWhite_alpha(white: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621931-initwithhue
  initWithHue_saturation_brightness_alpha(hue: cocoascript.CGFloat, saturation: cocoascript.CGFloat, brightness: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621925-initwithred
  initWithRed_green_blue_alpha(red: cocoascript.CGFloat, green: cocoascript.CGFloat, blue: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1648568-initwithdisplayp3red
  initWithDisplayP3Red_green_blue_alpha(displayP3Red: cocoascript.CGFloat, green: cocoascript.CGFloat, blue: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/3238041-initwithdynamicprovider
  initWithDynamicProvider(dynamicProvider: cocoascript.UITraitCollection):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621938-initwithcicolor
  initWithCIColor(ciColor: cocoascript.CIColor):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621921-initwithcgcolor
  initWithCGColor(cgColor: cocoascript.CGColorRef):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621922-colorwithalphacomponent
  colorWithAlphaComponent(alpha: cocoascript.CGFloat):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621933-initwithpatternimage
  initWithPatternImage(image: cocoascript.UIImage):cocoascript.UIColor;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621928-set
  set():void;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621926-setfill
  setFill():void;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621948-setstroke
  setStroke():void;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621954-cgcolor
  CGColor(): cocoascript.CGColorRef;
  setCGColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621943-cgcolor
  CGColor():cocoascript.CGColorRef;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621951-cicolor
  CIColor(): cocoascript.CIColor;
  setCIColor(): void;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621949-gethue
  getHue_saturation_brightness_alpha(hue: cocoascript.CGFloat, saturation: cocoascript.CGFloat, brightness: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621919-getred
  getRed_green_blue_alpha(red: cocoascript.CGFloat, green: cocoascript.CGFloat, blue: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uicolor/1621927-getwhite
  getWhite_alpha(white: cocoascript.CGFloat, alpha: cocoascript.CGFloat):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uicolor/3600314-accessibilityname
  accessibilityName(): cocoascript.NSString;
  setAccessibilityName(): void;
  // doc://com.apple.documentation/documentation/uikit/uicolor/3238042-resolvedcolorwithtraitcollection
  resolvedColorWithTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.UIColor;
  // 
  alloc():cocoascript.UIColor;
  // 
  init():cocoascript.UIColor;
}
}
declare const UIColor: cocoascript.UIColor;

