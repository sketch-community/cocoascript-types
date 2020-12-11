declare namespace cocoascript {
  /**
   * A class that represents password rules for a text input field.
   * doc://com.apple.documentation/documentation/uikit/uitextinputpasswordrules
   */
  interface UITextInputPasswordRules extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextinputpasswordrules/2980932-passwordrulesdescriptor
    passwordRulesDescriptor(): cocoascript.NSString;
    setPasswordRulesDescriptor(): void;
    //
    alloc():cocoascript.UITextInputPasswordRules;
    //
    init():cocoascript.UITextInputPasswordRules;
  }
}

declare const UITextInputPasswordRules: cocoascript.UITextInputPasswordRules;
