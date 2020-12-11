declare namespace cocoascript {
  /**
   * A structure that holds a version and two callback functions for drawing a custom pattern.
   * doc://com.apple.documentation/documentation/coregraphics/cgpatterncallbacks
   */
  interface CGPatternCallbacks {
    // doc://com.apple.documentation/documentation/coregraphics/cgpatterncallbacks/1454736-drawpattern
    drawPattern(): cocoascript.CGPatternDrawPatternCallback;
    setDrawPattern(): void;
    // doc://com.apple.documentation/documentation/coregraphics/cgpatterncallbacks/1455379-releaseinfo
    releaseInfo(): cocoascript.CGPatternReleaseInfoCallback;
    setReleaseInfo(): void;
  }
}
