declare namespace cocoascript {
/**
 * The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.
 * doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinatordelegate
 */
interface UITextFormattingCoordinatorDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uitextformattingcoordinatordelegate/3261469-updatetextattributeswithconversi
  updateTextAttributesWithConversionHandler(conversionHandler: cocoascript.UITextAttributesConversionHandler):void;
}
}

