declare namespace cocoascript {
  /**
   * A specifier representing an object in a collection (or container) with an index number.
   * doc://com.apple.documentation/documentation/foundation/nsindexspecifier
   */
  interface NSIndexSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nsindexspecifier/1407502-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_index(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, index: cocoascript.NSInteger):cocoascript.NSIndexSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nsindexspecifier/1408567-index
    index(): cocoascript.NSInteger;
    setIndex(): void;
    //
    alloc():cocoascript.NSIndexSpecifier;
    //
    init():cocoascript.NSIndexSpecifier;
  }
}

declare const NSIndexSpecifier: cocoascript.NSIndexSpecifier;
