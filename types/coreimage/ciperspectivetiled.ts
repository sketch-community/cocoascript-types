declare namespace cocoascript {
/**
 * The properties you use to configure a perspective tile filter.
 * doc://com.apple.documentation/documentation/coreimage/ciperspectivetile
 */
interface CIPerspectiveTile extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228653-bottomleft
  bottomLeft(): cocoascript.CGPoint;
  setBottomLeft(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228654-bottomright
  bottomRight(): cocoascript.CGPoint;
  setBottomRight(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228655-inputimage
  inputImage(): cocoascript.CIImage;
  setInputImage(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228656-topleft
  topLeft(): cocoascript.CGPoint;
  setTopLeft(): void;
  // doc://com.apple.documentation/documentation/coreimage/ciperspectivetile/3228657-topright
  topRight(): cocoascript.CGPoint;
  setTopRight(): void;
}
}

