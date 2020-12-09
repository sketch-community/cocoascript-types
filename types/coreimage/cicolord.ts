declare namespace cocoascript {
/**
 * The component values defining a color in a specific color space.
 * doc://com.apple.documentation/documentation/coreimage/cicolor
 */
interface CIColor extends NSObject {
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437821-initwithcgcolor
  initWithCGColor(c: cocoascript.CGColorRef):cocoascript.CIColor;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1528762-initwithcolor
  initWithColor(color: cocoascript.UIColor):cocoascript.CIColor;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1502102-initwithred
  initWithRed_green_blue(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat):cocoascript.CIColor;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1438084-initwithred
  initWithRed_green_blue_alpha(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat, a: cocoascript.CGFloat):cocoascript.CIColor;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643576-initwithred
  initWithRed_green_blue_colorSpace(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIColor;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643572-initwithred
  initWithRed_green_blue_alpha_colorSpace(r: cocoascript.CGFloat, g: cocoascript.CGFloat, b: cocoascript.CGFloat, a: cocoascript.CGFloat, colorSpace: cocoascript.CGColorSpaceRef):cocoascript.CIColor;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437917-colorspace
  colorSpace(): cocoascript.CGColorSpaceRef;
  setColorSpace(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437862-components
  components(): cocoascript.CGFloat;
  setComponents(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1438151-numberofcomponents
  numberOfComponents(): cocoascript.size_t;
  setNumberOfComponents(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437969-red
  red(): cocoascript.CGFloat;
  setRed(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437607-green
  green(): cocoascript.CGFloat;
  setGreen(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1438033-blue
  blue(): cocoascript.CGFloat;
  setBlue(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437981-alpha
  alpha(): cocoascript.CGFloat;
  setAlpha(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1437910-stringrepresentation
  stringRepresentation(): cocoascript.NSString;
  setStringRepresentation(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643578-blackcolor
  blackColor(): cocoascript.CIColor;
  setBlackColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643569-bluecolor
  blueColor(): cocoascript.CIColor;
  setBlueColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643577-clearcolor
  clearColor(): cocoascript.CIColor;
  setClearColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643581-cyancolor
  cyanColor(): cocoascript.CIColor;
  setCyanColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643573-graycolor
  grayColor(): cocoascript.CIColor;
  setGrayColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643580-greencolor
  greenColor(): cocoascript.CIColor;
  setGreenColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643574-magentacolor
  magentaColor(): cocoascript.CIColor;
  setMagentaColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643570-redcolor
  redColor(): cocoascript.CIColor;
  setRedColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643571-whitecolor
  whiteColor(): cocoascript.CIColor;
  setWhiteColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicolor/1643582-yellowcolor
  yellowColor(): cocoascript.CIColor;
  setYellowColor(): void;
  // 
  alloc():cocoascript.CIColor;
  // 
  init():cocoascript.CIColor;
}
}
declare const CIColor: cocoascript.CIColor;

