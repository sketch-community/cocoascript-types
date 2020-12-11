declare namespace cocoascript {
  /**
   * The requirements for an object that provides the configuration for a content view.
   * doc://com.apple.documentation/documentation/uikit/uicontentconfiguration
   */
  interface UIContentConfiguration extends NSCopying {
    // doc://com.apple.documentation/documentation/uikit/uicontentconfiguration/3600486-makecontentview
    makeContentView():cocoascript.UIContentView;
    // doc://com.apple.documentation/documentation/uikit/uicontentconfiguration/3600487-updatedconfigurationforstate
    updatedConfigurationForState(state: cocoascript.UIConfigurationState):cocoascript.UIContentConfiguration;
  }
}
