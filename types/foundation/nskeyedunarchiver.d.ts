declare namespace cocoascript {
  /**
   * A decoder that restores data from an archive referenced by keys.
   * doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver
   */
  interface NSKeyedUnarchiver extends NSCoder {
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/2962883-initforreadingfromdata
    initForReadingFromData_error(data: cocoascript.NSData, error: cocoascript._Nullable):cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/2962882-init
    init():cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1410862-initforreadingwithdata
    initForReadingWithData(data: cocoascript.NSData):cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1410824-requiressecurecoding
    requiresSecureCoding(): cocoascript.BOOL;
    setRequiresSecureCoding(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1413564-containsvalueforkey
    containsValueForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1413260-decodeboolforkey
    decodeBoolForKey(key: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1418091-decodebytesforkey
    decodeBytesForKey_returnedLength(key: cocoascript.NSString, lengthp: cocoascript.NSUInteger):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1414963-decodedoubleforkey
    decodeDoubleForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1412252-decodefloatforkey
    decodeFloatForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1418107-decodeintforkey
    decodeIntForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1416327-decodeint32forkey
    decodeInt32ForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1413288-decodeint64forkey
    decodeInt64ForKey(key: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1409082-decodeobjectforkey
    decodeObjectForKey(key: cocoascript.NSString):cocoascript.NSKeyedUnarchiver;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1418233-finishdecoding
    finishDecoding():void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1643164-decodingfailurepolicy
    decodingFailurePolicy(): cocoascript.NSDecodingFailurePolicy;
    setDecodingFailurePolicy(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1415688-delegate
    delegate(): cocoascript.NSKeyedUnarchiverDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1414659-setclass
    setClass_forClassName(cls: cocoascript.Class, codedName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/foundation/nskeyedunarchiver/1412476-classforclassname
    classForClassName(codedName: cocoascript.NSString):cocoascript.Class;
    //
    alloc():cocoascript.NSKeyedUnarchiver;
    //
    init():cocoascript.NSKeyedUnarchiver;
  }
}

declare const NSKeyedUnarchiver: cocoascript.NSKeyedUnarchiver;
