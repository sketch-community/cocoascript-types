declare namespace cocoascript {
  /**
   * A base implementation of the text-input tokenizer protocol.
   * doc://com.apple.documentation/documentation/uikit/uitextinputstringtokenizer
   */
  interface UITextInputStringTokenizer extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextinputstringtokenizer/1614469-initwithtextinput
    initWithTextInput(textInput: cocoascript.UITextInput):cocoascript.UITextInputStringTokenizer;
    //
    alloc():cocoascript.UITextInputStringTokenizer;
    //
    init():cocoascript.UITextInputStringTokenizer;
  }
}

declare const UITextInputStringTokenizer: cocoascript.UITextInputStringTokenizer;
