declare namespace cocoascript {
  /**
   * A bindings-compatible controller that manages the display and editing of a dictionary of key-value pairs.
   * doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller
   */
  interface NSDictionaryController extends NSArrayController {
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1534070-newobject
    newObject():cocoascript.NSDictionaryControllerKeyValuePair;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1532944-localizedkeydictionary
    localizedKeyDictionary(): cocoascript.NSString;
    setLocalizedKeyDictionary(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1524332-localizedkeytable
    localizedKeyTable(): cocoascript.NSString;
    setLocalizedKeyTable(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1525172-includedkeys
    includedKeys(): cocoascript.NSString;
    setIncludedKeys(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1535356-excludedkeys
    excludedKeys(): cocoascript.NSString;
    setExcludedKeys(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1530444-initialkey
    initialKey(): cocoascript.NSString;
    setInitialKey(): void;
    // doc://com.apple.documentation/documentation/appkit/nsdictionarycontroller/1535925-initialvalue
    initialValue(): cocoascript.id;
    setInitialValue(): void;
    //
    alloc():cocoascript.NSDictionaryController;
    //
    init():cocoascript.NSDictionaryController;
  }
}

declare const NSDictionaryController: cocoascript.NSDictionaryController;
