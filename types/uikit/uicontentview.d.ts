declare namespace cocoascript {
  /**
   * The requirements for a content view that you create using a configuration.
   * doc://com.apple.documentation/documentation/uikit/uicontentview
   */
  interface UIContentView extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicontentview/3600489-configuration
    configuration(): cocoascript.UIContentConfiguration;
    setConfiguration(): void;
  }
}
