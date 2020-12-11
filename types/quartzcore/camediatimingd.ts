declare namespace cocoascript {
  /**
   * Methods that model a hierarchical timing system, allowing objects to map time between their parent and local time.
   * doc://com.apple.documentation/documentation/quartzcore/camediatiming
   */
  interface CAMediaTiming {
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427654-begintime
    beginTime(): cocoascript.CFTimeInterval;
    setBeginTime(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427650-timeoffset
    timeOffset(): cocoascript.CFTimeInterval;
    setTimeOffset(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427666-repeatcount
    repeatCount(): number;
    setRepeatCount(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427643-repeatduration
    repeatDuration(): cocoascript.CFTimeInterval;
    setRepeatDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427652-duration
    duration(): cocoascript.CFTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427647-speed
    speed(): number;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427645-autoreverses
    autoreverses(): cocoascript.BOOL;
    setAutoreverses(): void;
    // doc://com.apple.documentation/documentation/quartzcore/camediatiming/1427656-fillmode
    fillMode(): cocoascript.CAMediaTimingFillMode;
    setFillMode(): void;
  }
}
