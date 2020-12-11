declare namespace cocoascript {
  /**
   * The interface for handling pasting and dropping of text, using item providers.
   * doc://com.apple.documentation/documentation/uikit/uitextpastedelegate
   */
  interface UITextPasteDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextpastedelegate/2887483-textpasteconfigurationsupporting
    textPasteConfigurationSupporting_transformPasteItem(textPasteConfigurationSupporting: cocoascript.UITextPasteConfigurationSupporting, item: cocoascript.UITextPasteItem):void;
    // doc://com.apple.documentation/documentation/uikit/uitextpastedelegate/2887490-textpasteconfigurationsupporting
    textPasteConfigurationSupporting_combineItemAttributedStrings_forRange(textPasteConfigurationSupporting: cocoascript.UITextPasteConfigurationSupporting, itemStrings: cocoascript.NSAttributedString, textRange: cocoascript.UITextRange):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/uikit/uitextpastedelegate/2887492-textpasteconfigurationsupporting
    textPasteConfigurationSupporting_performPasteOfAttributedString_toRange(textPasteConfigurationSupporting: cocoascript.UITextPasteConfigurationSupporting, attributedString: cocoascript.NSAttributedString, textRange: cocoascript.UITextRange):cocoascript.UITextRange;
    // doc://com.apple.documentation/documentation/uikit/uitextpastedelegate/2909062-textpasteconfigurationsupporting
    textPasteConfigurationSupporting_shouldAnimatePasteOfAttributedString_toRange(textPasteConfigurationSupporting: cocoascript.UITextPasteConfigurationSupporting, attributedString: cocoascript.NSAttributedString, textRange: cocoascript.UITextRange):cocoascript.BOOL;
  }
}
