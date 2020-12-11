declare namespace cocoascript {
  /**
   * A collection similar to a dictionary, but with a broader range of available memory semantics.
   * doc://com.apple.documentation/documentation/foundation/nsmaptable
   */
  interface NSMapTable extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391382-initwithkeyoptions
    initWithKeyOptions_valueOptions_capacity(keyOptions: cocoascript.NSPointerFunctionsOptions, valueOptions: cocoascript.NSPointerFunctionsOptions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSMapTable;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391429-initwithkeypointerfunctions
    initWithKeyPointerFunctions_valuePointerFunctions_capacity(keyFunctions: cocoascript.NSPointerFunctions, valueFunctions: cocoascript.NSPointerFunctions, initialCapacity: cocoascript.NSUInteger):cocoascript.NSMapTable;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391444-objectforkey
    objectForKey(aKey: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391398-keyenumerator
    keyEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391400-objectenumerator
    objectEnumerator():cocoascript.NSEnumerator;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391360-count
    count(): cocoascript.NSUInteger;
    setCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391457-setobject
    setObject(aKey: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391461-removeobjectforkey
    removeObjectForKey(aKey: cocoascript.):void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391386-removeallobjects
    removeAllObjects():void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391402-dictionaryrepresentation
    dictionaryRepresentation():cocoascript.NSDictionary;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391412-keypointerfunctions
    keyPointerFunctions(): cocoascript.NSPointerFunctions;
    setKeyPointerFunctions(): void;
    // doc://com.apple.documentation/documentation/foundation/nsmaptable/1391467-valuepointerfunctions
    valuePointerFunctions(): cocoascript.NSPointerFunctions;
    setValuePointerFunctions(): void;
    //
    alloc():cocoascript.NSMapTable;
    //
    init():cocoascript.NSMapTable;
  }
}

declare const NSMapTable: cocoascript.NSMapTable;
