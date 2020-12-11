declare namespace cocoascript {
  /**
   * Defines the structure used to report information about event taps.
   * doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation
   */
  interface CGEventTapInformation {
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545758-eventsofinterest
    eventsOfInterest(): cocoascript.CGEventMask;
    setEventsOfInterest(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545768-options
    options(): cocoascript.CGEventTapOptions;
    setOptions(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545744-processbeingtapped
    processBeingTapped(): any;
    setProcessBeingTapped(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545759-tappoint
    tapPoint(): cocoascript.CGEventTapLocation;
    setTapPoint(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgeventtapinformation/1545766-tappingprocess
    tappingProcess(): any;
    setTappingProcess(): void;
  }
}
