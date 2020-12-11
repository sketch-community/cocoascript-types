declare namespace cocoascript {
  /**
   * A specifier for an object in a collection (or container) by unique ID.
   * doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier
   */
  interface NSUniqueIDSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier/1416055-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_uniqueID(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, uniqueID: cocoascript.NSUniqueIDSpecifier):cocoascript.NSUniqueIDSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier/1415634-uniqueid
    uniqueID(): cocoascript.id;
    setUniqueID(): void;
    // doc://com.apple.documentation/documentation/foundation/nsuniqueidspecifier/1414481-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSUniqueIDSpecifier;
    //
    alloc():cocoascript.NSUniqueIDSpecifier;
    //
    init():cocoascript.NSUniqueIDSpecifier;
  }
}

declare const NSUniqueIDSpecifier: cocoascript.NSUniqueIDSpecifier;
