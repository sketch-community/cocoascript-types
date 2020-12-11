declare namespace cocoascript {
  /**
   * A string parser that scans for substrings or characters in a character set, and for numeric values from decimal, hexadecimal, and floating-point representations.
   * doc://com.apple.documentation/documentation/foundation/nsscanner
   */
  interface NSScanner extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1417131-initwithstring
    initWithString(string: cocoascript.NSString):cocoascript.NSScanner;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1418109-string
    string(): cocoascript.NSString;
    setString(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1413294-scanlocation
    scanLocation(): cocoascript.NSUInteger;
    setScanLocation(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1409488-casesensitive
    caseSensitive(): cocoascript.BOOL;
    setCaseSensitive(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1410204-characterstobeskipped
    charactersToBeSkipped(): cocoascript.NSCharacterSet;
    setCharactersToBeSkipped(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1409531-locale
    locale(): cocoascript.id;
    setLocale(): void;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1417575-scancharactersfromset
    scanCharactersFromSet_intoString(set: cocoascript.NSCharacterSet, result: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1413598-scanuptocharactersfromset
    scanUpToCharactersFromSet_intoString(set: cocoascript.NSCharacterSet, result: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1407591-scanstring
    scanString_intoString(string: cocoascript.NSString, result: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411971-scanuptostring
    scanUpToString_intoString(string: cocoascript.NSString, result: cocoascript._Nullable):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1408025-scandecimal
    scanDecimal(dcm: cocoascript.NSDecimal):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1415922-scandouble
    scanDouble(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411677-scanfloat
    scanFloat(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411780-scanhexdouble
    scanHexDouble(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411236-scanhexfloat
    scanHexFloat(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1413857-scanhexint
    scanHexInt(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1412759-scanhexlonglong
    scanHexLongLong(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1411082-scaninteger
    scanInteger(result: cocoascript.NSInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1410914-scanint
    scanInt(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1412629-scanlonglong
    scanLongLong(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1408559-scanunsignedlonglong
    scanUnsignedLongLong(result: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsscanner/1412801-atend
    atEnd(): cocoascript.BOOL;
    setAtEnd(): void;
    //
    alloc():cocoascript.NSScanner;
    //
    init():cocoascript.NSScanner;
  }
}

declare const NSScanner: cocoascript.NSScanner;
