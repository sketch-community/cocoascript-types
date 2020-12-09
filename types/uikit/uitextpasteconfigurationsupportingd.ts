declare namespace cocoascript {
/**
 * The interface for text-oriented responder objects to participate in the unified paste and drop system in iOS.
 * doc://com.apple.documentation/documentation/uikit/uitextpasteconfigurationsupporting
 */
interface UITextPasteConfigurationSupporting extends UIPasteConfigurationSupporting {
  // doc://com.apple.documentation/documentation/uikit/uitextpasteconfigurationsupporting/2887494-pastedelegate
  pasteDelegate(): cocoascript.UITextPasteDelegate;
  setPasteDelegate(): void;
}
}

