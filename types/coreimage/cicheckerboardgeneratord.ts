declare namespace cocoascript {
/**
 * The properties you use to configure a checkerboard generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator
 */
interface CICheckerboardGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228105-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228106-color0
  color0(): cocoascript.CIColor;
  setColor0(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228107-color1
  color1(): cocoascript.CIColor;
  setColor1(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228108-sharpness
  sharpness(): number;
  setSharpness(): void;
  // doc://com.apple.documentation/documentation/coreimage/cicheckerboardgenerator/3228109-width
  width(): number;
  setWidth(): void;
}
}

