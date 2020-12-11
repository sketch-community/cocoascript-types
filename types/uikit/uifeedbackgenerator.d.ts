declare namespace cocoascript {
  /**
   * The abstract superclass for all feedback generators.
   * doc://com.apple.documentation/documentation/uikit/uifeedbackgenerator
   */
  interface UIFeedbackGenerator extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifeedbackgenerator/2369818-prepare
    prepare():void;
    //
    alloc():cocoascript.UIFeedbackGenerator;
    //
    init():cocoascript.UIFeedbackGenerator;
  }
}

declare const UIFeedbackGenerator: cocoascript.UIFeedbackGenerator;
