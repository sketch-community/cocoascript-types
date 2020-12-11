declare namespace cocoascript {
  /**
   * A set of methods that define the orientation of text for an object.
   * doc://com.apple.documentation/documentation/uikit/nstextlayoutorientationprovider
   */
  interface NSTextLayoutOrientationProvider {
    // doc://com.apple.documentation/documentation/uikit/nstextlayoutorientationprovider/1402990-layoutorientation
    layoutOrientation(): cocoascript.NSTextLayoutOrientation;
    setLayoutOrientation(): void;
  }
}
