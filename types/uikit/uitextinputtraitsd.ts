declare namespace cocoascript {
  /**
   * A set of methods that defines features for keyboard input to a text object.
   * doc://com.apple.documentation/documentation/uikit/uitextinputtraits
   */
  interface UITextInputTraits extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624457-keyboardtype
    keyboardType(): cocoascript.UIKeyboardType;
    setKeyboardType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624434-keyboardappearance
    keyboardAppearance(): cocoascript.UIKeyboardAppearance;
    setKeyboardAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624446-returnkeytype
    returnKeyType(): cocoascript.UIReturnKeyType;
    setReturnKeyType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1649656-textcontenttype
    textContentType(): cocoascript.UITextContentType;
    setTextContentType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624427-securetextentry
    secureTextEntry(): cocoascript.BOOL;
    setSecureTextEntry(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624432-enablesreturnkeyautomatically
    enablesReturnKeyAutomatically(): cocoascript.BOOL;
    setEnablesReturnKeyAutomatically(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624447-autocapitalizationtype
    autocapitalizationType(): cocoascript.UITextAutocapitalizationType;
    setAutocapitalizationType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624453-autocorrectiontype
    autocorrectionType(): cocoascript.UITextAutocorrectionType;
    setAutocorrectionType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/1624461-spellcheckingtype
    spellCheckingType(): cocoascript.UITextSpellCheckingType;
    setSpellCheckingType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/2865931-smartquotestype
    smartQuotesType(): cocoascript.UITextSmartQuotesType;
    setSmartQuotesType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/2866013-smartdashestype
    smartDashesType(): cocoascript.UITextSmartDashesType;
    setSmartDashesType(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextinputtraits/2865828-smartinsertdeletetype
    smartInsertDeleteType(): cocoascript.UITextSmartInsertDeleteType;
    setSmartInsertDeleteType(): void;
  }
}
