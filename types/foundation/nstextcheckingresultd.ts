declare namespace cocoascript {
  /**
   * An occurrence of textual content found during the analysis of a block of text, such as when matching a regular expression.
   * doc://com.apple.documentation/documentation/foundation/nstextcheckingresult
   */
  interface NSTextCheckingResult extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415852-range
    range(): cocoascript.NSRange;
    setRange(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1407779-resulttype
    resultType(): cocoascript.NSTextCheckingType;
    setResultType(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1407475-numberofranges
    numberOfRanges(): cocoascript.NSUInteger;
    setNumberOfRanges(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1416732-rangeatindex
    rangeAtIndex(idx: cocoascript.NSUInteger):cocoascript.NSRange;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1412681-replacementstring
    replacementString(): cocoascript.NSString;
    setReplacementString(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1417393-regularexpression
    regularExpression(): cocoascript.NSRegularExpression;
    setRegularExpression(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1407367-components
    components(): cocoascript.NSString;
    setComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1417843-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1413728-addresscomponents
    addressComponents(): cocoascript.NSString;
    setAddressComponents(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415511-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1414289-date
    date(): cocoascript.NSDate;
    setDate(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415044-duration
    duration(): cocoascript.NSTimeInterval;
    setDuration(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1418476-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1414551-orthography
    orthography(): cocoascript.NSOrthography;
    setOrthography(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1408959-grammardetails
    grammarDetails(): cocoascript.id;
    setGrammarDetails(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1417597-resultbyadjustingrangeswithoffse
    resultByAdjustingRangesWithOffset(offset: cocoascript.NSInteger):cocoascript.NSTextCheckingResult;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/1415454-alternativestrings
    alternativeStrings(): cocoascript.NSString;
    setAlternativeStrings(): void;
    // doc://com.apple.documentation/documentation/foundation/nstextcheckingresult/2915200-rangewithname
    rangeWithName(name: cocoascript.NSString):cocoascript.NSRange;
    //
    alloc():cocoascript.NSTextCheckingResult;
    //
    init():cocoascript.NSTextCheckingResult;
  }
}

declare const NSTextCheckingResult: cocoascript.NSTextCheckingResult;
