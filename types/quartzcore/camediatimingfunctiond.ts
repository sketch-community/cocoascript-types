declare namespace cocoascript {
  /**
   * A function that defines the pacing of an animation as a timing curve.
   * doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction
   */
  interface CAMediaTimingFunction extends NSObject {
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1522235-initwithcontrolpoints
    initWithControlPoints(c1x: number):cocoascript.CAMediaTimingFunction;
    // doc://com.apple.documentation/documentation/quartzcore/camediatimingfunction/1522057-getcontrolpointatindex
    getControlPointAtIndex_values(idx: cocoascript.size_t, ptr: number):void;
    //
    alloc():cocoascript.CAMediaTimingFunction;
    //
    init():cocoascript.CAMediaTimingFunction;
  }
}

declare const CAMediaTimingFunction: cocoascript.CAMediaTimingFunction;
