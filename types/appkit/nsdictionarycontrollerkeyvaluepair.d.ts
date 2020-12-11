declare namespace cocoascript {
  /**
   * A set of methods implemented by arranged objects to give access to information about those objects.
   * doc://com.apple.documentation/documentation/appkit/nsdictionarycontrollerkeyvaluepair
   */
  interface NSDictionaryControllerKeyValuePair extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontrollerkeyvaluepair/1526717-explicitlyincluded
    explicitlyIncluded(): cocoascript.BOOL;
    setExplicitlyIncluded(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontrollerkeyvaluepair/1527207-key
    key(): cocoascript.NSString;
    setKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontrollerkeyvaluepair/1531961-localizedkey
    localizedKey(): cocoascript.NSString;
    setLocalizedKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontrollerkeyvaluepair/1532277-value
    value(): cocoascript.id;
    setValue(): void;
    //
    alloc():cocoascript.NSDictionaryControllerKeyValuePair;
    //
    init():cocoascript.NSDictionaryControllerKeyValuePair;
  }
}

declare const NSDictionaryControllerKeyValuePair: cocoascript.NSDictionaryControllerKeyValuePair;
