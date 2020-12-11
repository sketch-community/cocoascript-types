declare namespace cocoascript {
  /**
   * An object displaying localized text in search results related to your app.
   * doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring
   */
  interface CSLocalizedString extends NSString {
    // doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring/1616403-initwithlocalizedstrings
    initWithLocalizedStrings(localizedStrings: cocoascript.NSDictionary):cocoascript.CSLocalizedString;
    // doc://com.apple.documentation/documentation/corespotlight/cslocalizedstring/1616401-localizedstring
    localizedString():cocoascript.NSString;
    //
    alloc():cocoascript.CSLocalizedString;
    //
    init():cocoascript.CSLocalizedString;
  }
}

declare const CSLocalizedString: cocoascript.CSLocalizedString;
