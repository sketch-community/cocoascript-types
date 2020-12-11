declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nslistformatter
   */
  interface NSListFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130988-itemformatter
    itemFormatter(): cocoascript.NSFormatter;
    setItemFormatter(): void;
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130989-locale
    locale(): cocoascript.NSLocale;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130991-stringforobjectvalue
    stringForObjectValue(obj: cocoascript.NSListFormatter):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nslistformatter/3130992-stringfromitems
    stringFromItems(items: cocoascript.NSArray):cocoascript.NSString;
    //
    alloc():cocoascript.NSListFormatter;
    //
    init():cocoascript.NSListFormatter;
  }
}

declare const NSListFormatter: cocoascript.NSListFormatter;
