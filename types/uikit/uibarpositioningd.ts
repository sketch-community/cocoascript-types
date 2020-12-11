declare namespace cocoascript {
  /**
   * A set of methods for defining the positioning of bars in iOS apps.
   * doc://com.apple.documentation/documentation/uikit/uibarpositioning
   */
  interface UIBarPositioning extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uibarpositioning/1624857-barposition
    barPosition(): cocoascript.UIBarPosition;
    setBarPosition(): void;
  }
}
