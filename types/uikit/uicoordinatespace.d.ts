declare namespace cocoascript {
  /**
   * A set of methods for converting between different frames of reference on a screen.
   * doc://com.apple.documentation/documentation/uikit/uicoordinatespace
   */
  interface UICoordinateSpace extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicoordinatespace/1622443-bounds
    bounds(): cocoascript.CGRect;
    setBounds(): void;
    // doc://com.apple.documentation/documentation/uikit/uicoordinatespace/1622609-convertpoint
    convertPoint_toCoordinateSpace(point: cocoascript.CGPoint, coordinateSpace: cocoascript.UICoordinateSpace):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uicoordinatespace/1622550-convertpoint
    convertPoint_fromCoordinateSpace(point: cocoascript.CGPoint, coordinateSpace: cocoascript.UICoordinateSpace):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uicoordinatespace/1622564-convertrect
    convertRect_toCoordinateSpace(rect: cocoascript.CGRect, coordinateSpace: cocoascript.UICoordinateSpace):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uicoordinatespace/1622661-convertrect
    convertRect_fromCoordinateSpace(rect: cocoascript.CGRect, coordinateSpace: cocoascript.UICoordinateSpace):cocoascript.CGRect;
  }
}
