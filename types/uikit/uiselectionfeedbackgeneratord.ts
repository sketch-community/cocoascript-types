declare namespace cocoascript {
  /**
   * A concrete
   * doc://com.apple.documentation/documentation/uikit/uiselectionfeedbackgenerator
   */
  interface UISelectionFeedbackGenerator extends UIFeedbackGenerator {
    // doc://com.apple.documentation/documentation/uikit/uiselectionfeedbackgenerator/2374284-selectionchanged
    selectionChanged():void;
    //
    alloc():cocoascript.UISelectionFeedbackGenerator;
    //
    init():cocoascript.UISelectionFeedbackGenerator;
  }
}

declare const UISelectionFeedbackGenerator: cocoascript.UISelectionFeedbackGenerator;
