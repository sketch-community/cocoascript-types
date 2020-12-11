declare namespace cocoascript {
  /**
   * An object representing a fixed set of Unicode character values for use in search operations.
   * doc://com.apple.documentation/documentation/foundation/nscharacterset
   */
  interface NSCharacterSet extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1407466-alphanumericcharacterset
    alphanumericCharacterSet(): cocoascript.NSCharacterSet;
    setAlphanumericCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1414409-capitalizedlettercharacterset
    capitalizedLetterCharacterSet(): cocoascript.NSCharacterSet;
    setCapitalizedLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416371-controlcharacterset
    controlCharacterSet(): cocoascript.NSCharacterSet;
    setControlCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1408239-decimaldigitcharacterset
    decimalDigitCharacterSet(): cocoascript.NSCharacterSet;
    setDecimalDigitCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416868-decomposablecharacterset
    decomposableCharacterSet(): cocoascript.NSCharacterSet;
    setDecomposableCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416321-illegalcharacterset
    illegalCharacterSet(): cocoascript.NSCharacterSet;
    setIllegalCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1408569-lettercharacterset
    letterCharacterSet(): cocoascript.NSCharacterSet;
    setLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417123-lowercaselettercharacterset
    lowercaseLetterCharacterSet(): cocoascript.NSCharacterSet;
    setLowercaseLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416730-newlinecharacterset
    newlineCharacterSet(): cocoascript.NSCharacterSet;
    setNewlineCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1407836-nonbasecharacterset
    nonBaseCharacterSet(): cocoascript.NSCharacterSet;
    setNonBaseCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1411415-punctuationcharacterset
    punctuationCharacterSet(): cocoascript.NSCharacterSet;
    setPunctuationCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1410965-symbolcharacterset
    symbolCharacterSet(): cocoascript.NSCharacterSet;
    setSymbolCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417569-uppercaselettercharacterset
    uppercaseLetterCharacterSet(): cocoascript.NSCharacterSet;
    setUppercaseLetterCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1413732-whitespaceandnewlinecharacterset
    whitespaceAndNewlineCharacterSet(): cocoascript.NSCharacterSet;
    setWhitespaceAndNewlineCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416393-whitespacecharacterset
    whitespaceCharacterSet(): cocoascript.NSCharacterSet;
    setWhitespaceCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1412537-urlfragmentallowedcharacterset
    URLFragmentAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLFragmentAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416426-urlhostallowedcharacterset
    URLHostAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLHostAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417313-urlpasswordallowedcharacterset
    URLPasswordAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLPasswordAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416804-urlpathallowedcharacterset
    URLPathAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLPathAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1416698-urlqueryallowedcharacterset
    URLQueryAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLQueryAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1411851-urluserallowedcharacterset
    URLUserAllowedCharacterSet(): cocoascript.NSCharacterSet;
    setURLUserAllowedCharacterSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1408497-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCharacterSet;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1417719-bitmaprepresentation
    bitmapRepresentation(): cocoascript.NSData;
    setBitmapRepresentation(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1414025-invertedset
    invertedSet(): cocoascript.NSCharacterSet;
    setInvertedSet(): void;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1407659-characterismember
    characterIsMember(aCharacter: cocoascript.unichar):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1412406-hasmemberinplane
    hasMemberInPlane(thePlane: number):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1415606-issupersetofset
    isSupersetOfSet(theOtherSet: cocoascript.NSCharacterSet):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nscharacterset/1409757-longcharacterismember
    longCharacterIsMember(theLongChar: cocoascript.UTF32Char):cocoascript.BOOL;
    //
    alloc():cocoascript.NSCharacterSet;
    //
    init():cocoascript.NSCharacterSet;
  }
}

declare const NSCharacterSet: cocoascript.NSCharacterSet;
