declare namespace cocoascript {
  /**
   * A formatter that provides localized representations of the components of a person’s name.
   * doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter
   */
  interface NSPersonNameComponentsFormatter extends NSFormatter {
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408260-style
    style(): cocoascript.NSPersonNameComponentsFormatterStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408242-phonetic
    phonetic(): cocoascript.BOOL;
    setPhonetic(): void;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408243-stringfrompersonnamecomponents
    stringFromPersonNameComponents(components: cocoascript.NSPersonNameComponents):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408241-annotatedstringfrompersonnamecom
    annotatedStringFromPersonNameComponents(components: cocoascript.NSPersonNameComponents):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1642979-personnamecomponentsfromstring
    personNameComponentsFromString(string: cocoascript.NSString):cocoascript.NSPersonNameComponents;
    // doc://com.apple.documentation/documentation/foundation/nspersonnamecomponentsformatter/1408262-getobjectvalue
    getObjectValue_forString_errorDescription(obj: cocoascript._Nullable, string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
    //
    alloc():cocoascript.NSPersonNameComponentsFormatter;
    //
    init():cocoascript.NSPersonNameComponentsFormatter;
  }
}

declare const NSPersonNameComponentsFormatter: cocoascript.NSPersonNameComponentsFormatter;
