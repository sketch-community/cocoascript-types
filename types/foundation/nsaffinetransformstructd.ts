declare namespace cocoascript {
/**
 * A structure that defines the three-by-three matrix that performs an affine transform between two coordinate systems.
 * doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct
 */
interface NSAffineTransformStruct {
  // doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct/1416360-m11
  m11(): cocoascript.CGFloat;
  setM11(): void;
  // doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct/1412409-m12
  m12(): cocoascript.CGFloat;
  setM12(): void;
  // doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct/1413679-m21
  m21(): cocoascript.CGFloat;
  setM21(): void;
  // doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct/1410646-m22
  m22(): cocoascript.CGFloat;
  setM22(): void;
  // doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct/1408491-tx
  tX(): cocoascript.CGFloat;
  setTX(): void;
  // doc://com.apple.documentation/documentation/foundation/nsaffinetransformstruct/1412546-ty
  tY(): cocoascript.CGFloat;
  setTY(): void;
}
}

