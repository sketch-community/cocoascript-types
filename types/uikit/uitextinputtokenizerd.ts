declare namespace cocoascript {
  /**
   * A tokenizer, which is an object that allows the text input system to evaluate text units of different granularities.
   * doc://com.apple.documentation/documentation/uikit/uitextinputtokenizer
   */
  interface UITextInputTokenizer extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextinputtokenizer/1614553-isposition
    isPosition_atBoundary_inDirection(position: cocoascript.UITextPosition, granularity: cocoascript.UITextGranularity, direction: cocoascript.UITextDirection):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtokenizer/1614491-isposition
    isPosition_withinTextUnit_inDirection(position: cocoascript.UITextPosition, granularity: cocoascript.UITextGranularity, direction: cocoascript.UITextDirection):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtokenizer/1614513-positionfromposition
    positionFromPosition_toBoundary_inDirection(position: cocoascript.UITextPosition, granularity: cocoascript.UITextGranularity, direction: cocoascript.UITextDirection):cocoascript.UITextPosition;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtokenizer/1614464-rangeenclosingposition
    rangeEnclosingPosition_withGranularity_inDirection(position: cocoascript.UITextPosition, granularity: cocoascript.UITextGranularity, direction: cocoascript.UITextDirection):cocoascript.UITextRange;
  }
}
