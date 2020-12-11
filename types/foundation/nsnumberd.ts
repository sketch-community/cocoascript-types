declare namespace cocoascript {
  /**
   * An object wrapper for primitive scalar numeric values.
   * doc://com.apple.documentation/documentation/foundation/nsnumber
   */
  interface NSNumber extends NSValue {
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1415728-initwithbool
    initWithBool(value: cocoascript.BOOL):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409777-initwithchar
    initWithChar(value: cocoascript.char):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407545-initwithdouble
    initWithDouble(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412999-initwithfloat
    initWithFloat(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407580-initwithint
    initWithInt(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409397-initwithinteger
    initWithInteger(value: cocoascript.NSInteger):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410739-initwithlong
    initWithLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1408171-initwithlonglong
    initWithLongLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1411886-initwithshort
    initWithShort(value: cocoascript.short):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1416533-initwithunsignedchar
    initWithUnsignedChar(value: cocoascript.char):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1414598-initwithunsignedint
    initWithUnsignedInt(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412531-initwithunsignedinteger
    initWithUnsignedInteger(value: cocoascript.NSUInteger):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410728-initwithunsignedlong
    initWithUnsignedLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1416550-initwithunsignedlonglong
    initWithUnsignedLongLong(value: number):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407718-initwithunsignedshort
    initWithUnsignedShort(value: cocoascript.short):cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410865-boolvalue
    boolValue(): cocoascript.BOOL;
    setBoolValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407838-charvalue
    charValue(): cocoascript.char;
    setCharValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407409-decimalvalue
    decimalValue(): cocoascript.NSDecimal;
    setDecimalValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1414104-doublevalue
    doubleValue(): number;
    setDoubleValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1418317-floatvalue
    floatValue(): number;
    setFloatValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407153-intvalue
    intValue(): number;
    setIntValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412554-integervalue
    integerValue(): cocoascript.NSInteger;
    setIntegerValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1416870-longlongvalue
    longLongValue(): number;
    setLongLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1412566-longvalue
    longValue(): number;
    setLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1407601-shortvalue
    shortValue(): cocoascript.short;
    setShortValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409016-unsignedcharvalue
    unsignedCharValue(): cocoascript.char;
    setUnsignedCharValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1413324-unsignedintegervalue
    unsignedIntegerValue(): cocoascript.NSUInteger;
    setUnsignedIntegerValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1417875-unsignedintvalue
    unsignedIntValue(): number;
    setUnsignedIntValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1414524-unsignedlonglongvalue
    unsignedLongLongValue(): number;
    setUnsignedLongLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1415252-unsignedlongvalue
    unsignedLongValue(): number;
    setUnsignedLongValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1410604-unsignedshortvalue
    unsignedShortValue(): cocoascript.short;
    setUnsignedShortValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1409984-descriptionwithlocale
    descriptionWithLocale(locale: cocoascript.NSNumber):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1415802-stringvalue
    stringValue(): cocoascript.NSString;
    setStringValue(): void;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1413562-compare
    compare(otherNumber: cocoascript.NSNumber):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1411315-isequaltonumber
    isEqualToNumber(number: cocoascript.NSNumber):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsnumber/1411476-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSNumber;
    //
    alloc():cocoascript.NSNumber;
    //
    init():cocoascript.NSNumber;
  }
}

declare const NSNumber: cocoascript.NSNumber;
