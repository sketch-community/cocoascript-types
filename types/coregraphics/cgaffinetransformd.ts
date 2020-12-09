declare namespace cocoascript {
/**
 * An affine transformation matrix for use in drawing 2D graphics.
 * doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform
 */
interface CGAffineTransform {
  // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456003-a
  a(): cocoascript.CGFloat;
  setA(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1454545-b
  b(): cocoascript.CGFloat;
  setB(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456339-c
  c(): cocoascript.CGFloat;
  setC(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1455693-d
  d(): cocoascript.CGFloat;
  setD(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456540-tx
  tx(): cocoascript.CGFloat;
  setTx(): void;
  // doc://com.apple.documentation/documentation/coregraphics/cgaffinetransform/1456442-ty
  ty(): cocoascript.CGFloat;
  setTy(): void;
}
}

