declare namespace cocoascript {
  /**
   * The filters and display settings a font picker view controller uses to set up a font picker.
   * doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerconfiguration
   */
  interface UIFontPickerViewControllerConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerconfiguration/3327296-displayusingsystemfont
    displayUsingSystemFont(): cocoascript.BOOL;
    setDisplayUsingSystemFont(): void;
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerconfiguration/3238104-includefaces
    includeFaces(): cocoascript.BOOL;
    setIncludeFaces(): void;
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerconfiguration/3327299-filteredtraits
    filteredTraits(): cocoascript.UIFontDescriptorSymbolicTraits;
    setFilteredTraits(): void;
    // doc://com.apple.documentation/documentation/uikit/uifontpickerviewcontrollerconfiguration/3327298-filteredlanguagespredicate
    filteredLanguagesPredicate(): cocoascript.NSPredicate;
    setFilteredLanguagesPredicate(): void;
    //
    alloc():cocoascript.UIFontPickerViewControllerConfiguration;
    //
    init():cocoascript.UIFontPickerViewControllerConfiguration;
  }
}

declare const UIFontPickerViewControllerConfiguration: cocoascript.UIFontPickerViewControllerConfiguration;
