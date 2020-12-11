declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nssecureunarchivefromdatatransformer
   */
  interface NSSecureUnarchiveFromDataTransformer extends NSValueTransformer {
    // doc://com.apple.documentation/documentation/foundation/nssecureunarchivefromdatatransformer/2962887-allowedtoplevelclasses
    allowedTopLevelClasses(): cocoascript.Class;
    setAllowedTopLevelClasses(): void;
    //
    alloc():cocoascript.NSSecureUnarchiveFromDataTransformer;
    //
    init():cocoascript.NSSecureUnarchiveFromDataTransformer;
  }
}

declare const NSSecureUnarchiveFromDataTransformer: cocoascript.NSSecureUnarchiveFromDataTransformer;
