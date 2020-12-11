declare namespace cocoascript {
  /**
   * An intermediary between a document and the text input system.
   * doc://com.apple.documentation/documentation/uikit/uitextinputdelegate
   */
  interface UITextInputDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextinputdelegate/1614520-textwillchange
    textWillChange(textInput: cocoascript.UITextInput):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputdelegate/1614499-textdidchange
    textDidChange(textInput: cocoascript.UITextInput):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputdelegate/1614540-selectionwillchange
    selectionWillChange(textInput: cocoascript.UITextInput):void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputdelegate/1614551-selectiondidchange
    selectionDidChange(textInput: cocoascript.UITextInput):void;
  }
}
