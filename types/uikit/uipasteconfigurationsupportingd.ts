declare namespace cocoascript {
/**
 * The interface that determines whether a responder object supports paste configuration.
 * doc://com.apple.documentation/documentation/uikit/uipasteconfigurationsupporting
 */
interface UIPasteConfigurationSupporting extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipasteconfigurationsupporting/2882040-pasteconfiguration
  pasteConfiguration(): cocoascript.UIPasteConfiguration;
  setPasteConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfigurationsupporting/2887578-canpasteitemproviders
  canPasteItemProviders(itemProviders: cocoascript.NSItemProvider):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uipasteconfigurationsupporting/2887579-pasteitemproviders
  pasteItemProviders(itemProviders: cocoascript.NSItemProvider):void;
}
}

