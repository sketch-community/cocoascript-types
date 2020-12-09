declare namespace cocoascript {
/**
 * An object that can draw gradient fill colors
 * doc://com.apple.documentation/documentation/appkit/nsgradient
 */
interface NSGradient extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1525448-initwithstartingcolor
  initWithStartingColor_endingColor(startingColor: cocoascript.NSColor, endingColor: cocoascript.NSColor):cocoascript.NSGradient;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1535315-initwithcolors
  initWithColors(colorArray: cocoascript.NSColor):cocoascript.NSGradient;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1555387-initwithcolorsandlocations
  initWithColorsAndLocations(firstColor: cocoascript.NSColor):cocoascript.NSGradient;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1524459-initwithcolors
  initWithColors_atLocations_colorSpace(colorArray: cocoascript.NSColor, locations: cocoascript.CGFloat, colorSpace: cocoascript.NSColorSpace):cocoascript.NSGradient;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1644700-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSGradient;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1532511-drawfrompoint
  drawFromPoint_toPoint_options(startingPoint: cocoascript.NSPoint, endingPoint: cocoascript.NSPoint, options: cocoascript.NSGradientDrawingOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1529086-drawinrect
  drawInRect_angle(rect: cocoascript.NSRect, angle: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1534785-drawinbezierpath
  drawInBezierPath_angle(path: cocoascript.NSBezierPath, angle: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1530677-drawfromcenter
  drawFromCenter_radius_toCenter_radius_options(startCenter: cocoascript.NSPoint, startRadius: cocoascript.CGFloat, endCenter: cocoascript.NSPoint, endRadius: cocoascript.CGFloat, options: cocoascript.NSGradientDrawingOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1533703-drawinrect
  drawInRect_relativeCenterPosition(rect: cocoascript.NSRect, relativeCenterPosition: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1530168-drawinbezierpath
  drawInBezierPath_relativeCenterPosition(path: cocoascript.NSBezierPath, relativeCenterPosition: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1531310-colorspace
  colorSpace(): cocoascript.NSColorSpace;
  setColorSpace(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1535846-numberofcolorstops
  numberOfColorStops(): cocoascript.NSInteger;
  setNumberOfColorStops(): void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1533505-getcolor
  getColor_location_atIndex(color: cocoascript._Nonnull, location: cocoascript.CGFloat, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsgradient/1526409-interpolatedcoloratlocation
  interpolatedColorAtLocation(location: cocoascript.CGFloat):cocoascript.NSColor;
  // 
  alloc():cocoascript.NSGradient;
  // 
  init():cocoascript.NSGradient;
}
}
declare const NSGradient: cocoascript.NSGradient;

