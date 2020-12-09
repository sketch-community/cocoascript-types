declare namespace cocoascript {
/**
 * An immutable representation of a compiled regular expression that you apply to Unicode strings.  
 * doc://com.apple.documentation/documentation/foundation/nsregularexpression
 */
interface NSRegularExpression extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1410900-initwithpattern
  initWithPattern_options_error(pattern: cocoascript.NSString, options: cocoascript.NSRegularExpressionOptions, error: cocoascript._Nullable):cocoascript.NSRegularExpression;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1414932-pattern
  pattern(): cocoascript.NSString;
  setPattern(): void;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1408265-options
  options(): cocoascript.NSRegularExpressionOptions;
  setOptions(): void;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1415052-numberofcapturegroups
  numberOfCaptureGroups(): cocoascript.NSUInteger;
  setNumberOfCaptureGroups(): void;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1414308-numberofmatchesinstring
  numberOfMatchesInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1409687-enumeratematchesinstring
  enumerateMatchesInString_options_range_usingBlock(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1412446-matchesinstring
  matchesInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSTextCheckingResult;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1409838-firstmatchinstring
  firstMatchInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSTextCheckingResult;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1411510-rangeoffirstmatchinstring
  rangeOfFirstMatchInString_options_range(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1411139-replacematchesinstring
  replaceMatchesInString_options_range_withTemplate(string: cocoascript.NSMutableString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange, templ: cocoascript.NSString):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1413740-stringbyreplacingmatchesinstring
  stringByReplacingMatchesInString_options_range_withTemplate(string: cocoascript.NSString, options: cocoascript.NSMatchingOptions, range: cocoascript.NSRange, templ: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsregularexpression/1414859-replacementstringforresult
  replacementStringForResult_inString_offset_template(result: cocoascript.NSTextCheckingResult, string: cocoascript.NSString, offset: cocoascript.NSInteger, templ: cocoascript.NSString):cocoascript.NSString;
  // 
  alloc():cocoascript.NSRegularExpression;
  // 
  init():cocoascript.NSRegularExpression;
}
}
declare const NSRegularExpression: cocoascript.NSRegularExpression;

