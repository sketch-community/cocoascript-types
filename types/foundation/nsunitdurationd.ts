declare namespace cocoascript {
  /**
   * A unit of measure for duration of time.
   * doc://com.apple.documentation/documentation/foundation/nsunitduration
   */
  interface NSUnitDuration extends NSDimension {
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/1856005-seconds
    seconds(): cocoascript.NSUnitDuration;
    setSeconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/1856088-minutes
    minutes(): cocoascript.NSUnitDuration;
    setMinutes(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/1855994-hours
    hours(): cocoascript.NSUnitDuration;
    setHours(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172538-microseconds
    microseconds(): cocoascript.NSUnitDuration;
    setMicroseconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172539-milliseconds
    milliseconds(): cocoascript.NSUnitDuration;
    setMilliseconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172540-nanoseconds
    nanoseconds(): cocoascript.NSUnitDuration;
    setNanoseconds(): void;
    // doc://com.apple.documentation/documentation/foundation/nsunitduration/3172541-picoseconds
    picoseconds(): cocoascript.NSUnitDuration;
    setPicoseconds(): void;
    //
    alloc():cocoascript.NSUnitDuration;
    //
    init():cocoascript.NSUnitDuration;
  }
}

declare const NSUnitDuration: cocoascript.NSUnitDuration;
