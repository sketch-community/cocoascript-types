declare namespace cocoascript {
  /**
   * The properties you use to configure a perspective transform with extent filter.
   * doc://com.apple.documentation/documentation/coreimage/ciperspectivetransformwithextent
   */
  interface CIPerspectiveTransformWithExtent extends CIFourCoordinateGeometryFilter {
    // doc://com.apple.documentation/documentation/coreimage/ciperspectivetransformwithextent/3228667-extent
    extent(): cocoascript.CGRect;
    setExtent(): void;
  }
}
