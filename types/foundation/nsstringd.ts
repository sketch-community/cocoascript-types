declare namespace cocoascript {
/**
 * A static, plain-text Unicode string object.
 * doc://com.apple.documentation/documentation/foundation/nsstring
 */
interface NSString extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409306-init
  init():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407339-initwithbytes
  initWithBytes_length_encoding(bytes: void, len: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413830-initwithbytesnocopy
  initWithBytesNoCopy_length_encoding_freeWhenDone(bytes: void, len: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding, freeBuffer: cocoascript.BOOL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410997-initwithcharacters
  initWithCharacters_length(characters: cocoascript.unichar, length: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412121-initwithcharactersnocopy
  initWithCharactersNoCopy_length_freeWhenDone(characters: cocoascript.unichar, length: cocoascript.NSUInteger, freeBuffer: cocoascript.BOOL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411293-initwithstring
  initWithString(aString: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411950-initwithcstring
  initWithCString_encoding(nullTerminatedCString: cocoascript.char, encoding: cocoascript.NSStringEncoding):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412128-initwithutf8string
  initWithUTF8String(nullTerminatedCString: cocoascript.char):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497402-initwithformat
  initWithFormat(format: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407827-initwithformat
  initWithFormat_arguments(format: cocoascript.NSString, argList: cocoascript.va_list):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497317-initwithformat
  initWithFormat_locale(format: cocoascript.NSString, locale: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408503-initwithformat
  initWithFormat_locale_arguments(format: cocoascript.NSString, locale: cocoascript.NSString, argList: cocoascript.va_list):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416374-initwithdata
  initWithData_encoding(data: cocoascript.NSData, encoding: cocoascript.NSStringEncoding):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412610-initwithcontentsoffile
  initWithContentsOfFile_encoding_error(path: cocoascript.NSString, enc: cocoascript.NSStringEncoding, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1418227-initwithcontentsoffile
  initWithContentsOfFile_usedEncoding_error(path: cocoascript.NSString, enc: cocoascript.NSStringEncoding, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414463-initwithcontentsofurl
  initWithContentsOfURL_encoding_error(url: cocoascript.NSURL, enc: cocoascript.NSStringEncoding, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414472-initwithcontentsofurl
  initWithContentsOfURL_usedEncoding_error(url: cocoascript.NSURL, enc: cocoascript.NSStringEncoding, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414212-length
  length(): cocoascript.NSUInteger;
  setLength(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410710-lengthofbytesusingencoding
  lengthOfBytesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411611-maximumlengthofbytesusingencodin
  maximumLengthOfBytesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414645-characteratindex
  characterAtIndex(index: cocoascript.NSUInteger):cocoascript.unichar;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408720-getcharacters
  getCharacters_range(buffer: cocoascript.unichar, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413453-getbytes
  getBytes_maxLength_usedLength_encoding_options_range_remainingRange(buffer: void, maxBufferCount: cocoascript.NSUInteger, usedBufferCount: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding, options: cocoascript.NSStringEncodingConversionOptions, range: cocoascript.NSRange, leftover: cocoascript.NSRangePointer):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408489-cstringusingencoding
  cStringUsingEncoding(encoding: cocoascript.NSStringEncoding):cocoascript.char;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415702-getcstring
  getCString_maxLength_encoding(buffer: cocoascript.char, maxBufferCount: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411189-utf8string
  UTF8String(): cocoascript.char;
  setUTF8String(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414769-caseinsensitivecompare
  caseInsensitiveCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417333-localizedcaseinsensitivecompare
  localizedCaseInsensitiveCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414082-compare
  compare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416999-localizedcompare
  localizedCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410893-compare
  compare_options(string: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408732-compare
  compare_options_range(string: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToCompare: cocoascript.NSRange):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414561-compare
  compare_options_range_locale(string: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToCompare: cocoascript.NSRange, locale: cocoascript.NSString):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409742-localizedstandardcompare
  localizedStandardCompare(string: cocoascript.NSString):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410309-hasprefix
  hasPrefix(str: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416529-hassuffix
  hasSuffix(str: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407803-isequaltostring
  isEqualToString(aString: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417245-hash
  hash(): cocoascript.NSUInteger;
  setHash(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497272-stringbyappendingformat
  stringByAppendingFormat(format: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412307-stringbyappendingstring
  stringByAppendingString(aString: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416395-stringbypaddingtolength
  stringByPaddingToLength_withString_startingAtIndex(newLength: cocoascript.NSUInteger, padString: cocoascript.NSString, padIndex: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408467-lowercasestring
  lowercaseString(): cocoascript.NSString;
  setLowercaseString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414125-localizedlowercasestring
  localizedLowercaseString(): cocoascript.NSString;
  setLocalizedLowercaseString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417298-lowercasestringwithlocale
  lowercaseStringWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409855-uppercasestring
  uppercaseString(): cocoascript.NSString;
  setUppercaseString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413331-localizeduppercasestring
  localizedUppercaseString(): cocoascript.NSString;
  setLocalizedUppercaseString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413316-uppercasestringwithlocale
  uppercaseStringWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416784-capitalizedstring
  capitalizedString(): cocoascript.NSString;
  setCapitalizedString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414885-localizedcapitalizedstring
  localizedCapitalizedString(): cocoascript.NSString;
  setLocalizedCapitalizedString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414023-capitalizedstringwithlocale
  capitalizedStringWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413214-componentsseparatedbystring
  componentsSeparatedByString(separator: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410120-componentsseparatedbycharactersi
  componentsSeparatedByCharactersInSet(separator: cocoascript.NSCharacterSet):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415462-stringbytrimmingcharactersinset
  stringByTrimmingCharactersInSet(set: cocoascript.NSCharacterSet):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414368-substringfromindex
  substringFromIndex(from: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1418469-substringwithrange
  substringWithRange(range: cocoascript.NSRange):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408017-substringtoindex
  substringToIndex(to: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409474-decomposedstringwithcanonicalmap
  decomposedStringWithCanonicalMapping(): cocoascript.NSString;
  setDecomposedStringWithCanonicalMapping(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415417-decomposedstringwithcompatibilit
  decomposedStringWithCompatibilityMapping(): cocoascript.NSString;
  setDecomposedStringWithCompatibilityMapping(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412645-precomposedstringwithcanonicalma
  precomposedStringWithCanonicalMapping(): cocoascript.NSString;
  setPrecomposedStringWithCanonicalMapping(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412625-precomposedstringwithcompatibili
  precomposedStringWithCompatibilityMapping(): cocoascript.NSString;
  setPrecomposedStringWithCompatibilityMapping(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413779-stringbyfoldingwithoptions
  stringByFoldingWithOptions_locale(options: cocoascript.NSStringCompareOptions, locale: cocoascript.NSLocale):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407787-stringbyapplyingtransform
  stringByApplyingTransform_reverse(transform: cocoascript.NSStringTransform, reverse: cocoascript.BOOL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414563-containsstring
  containsString(str: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412098-localizedcaseinsensitivecontains
  localizedCaseInsensitiveContainsString(str: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416328-localizedstandardcontainsstring
  localizedStandardContainsString(str: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411930-rangeofcharacterfromset
  rangeOfCharacterFromSet(searchSet: cocoascript.NSCharacterSet):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416898-rangeofcharacterfromset
  rangeOfCharacterFromSet_options(searchSet: cocoascript.NSCharacterSet, mask: cocoascript.NSStringCompareOptions):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411461-rangeofcharacterfromset
  rangeOfCharacterFromSet_options_range(searchSet: cocoascript.NSCharacterSet, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToSearch: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410144-rangeofstring
  rangeOfString(searchString: cocoascript.NSString):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416849-rangeofstring
  rangeOfString_options(searchString: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415073-rangeofstring
  rangeOfString_options_range(searchString: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToSearch: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417348-rangeofstring
  rangeOfString_options_range_locale(searchString: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions, rangeOfReceiverToSearch: cocoascript.NSRange, locale: cocoascript.NSLocale):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413574-localizedstandardrangeofstring
  localizedStandardRangeOfString(str: cocoascript.NSString):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408459-enumeratelinesusingblock
  enumerateLinesUsingBlock(block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416774-enumeratesubstringsinrange
  enumerateSubstringsInRange_options_usingBlock(range: cocoascript.NSRange, opts: cocoascript.NSStringEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412937-stringbyreplacingoccurrencesofst
  stringByReplacingOccurrencesOfString_withString(target: cocoascript.NSString, replacement: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416484-stringbyreplacingoccurrencesofst
  stringByReplacingOccurrencesOfString_withString_options_range(target: cocoascript.NSString, replacement: cocoascript.NSString, options: cocoascript.NSStringCompareOptions, searchRange: cocoascript.NSRange):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410029-stringbyreplacingcharactersinran
  stringByReplacingCharactersInRange_withString(range: cocoascript.NSRange, replacement: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408169-commonprefixwithstring
  commonPrefixWithString_options(str: cocoascript.NSString, mask: cocoascript.NSStringCompareOptions):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412161-enumeratelinguistictagsinrange
  enumerateLinguisticTagsInRange_scheme_options_orthography_usingBlock(range: cocoascript.NSRange, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, orthography: cocoascript.NSOrthography, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416530-linguistictagsinrange
  linguisticTagsInRange_scheme_options_orthography_tokenRanges(range: cocoascript.NSRange, scheme: cocoascript.NSLinguisticTagScheme, options: cocoascript.NSLinguisticTaggerOptions, orthography: cocoascript.NSOrthography, tokenRanges: cocoascript._Nullable):cocoascript.NSLinguisticTag;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415111-getlinestart
  getLineStart_end_contentsEnd_forRange(startPtr: cocoascript.NSUInteger, lineEndPtr: cocoascript.NSUInteger, contentsEndPtr: cocoascript.NSUInteger, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407736-linerangeforrange
  lineRangeForRange(range: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416407-getparagraphstart
  getParagraphStart_end_contentsEnd_forRange(startPtr: cocoascript.NSUInteger, parEndPtr: cocoascript.NSUInteger, contentsEndPtr: cocoascript.NSUInteger, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1408548-paragraphrangeforrange
  paragraphRangeForRange(range: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416036-rangeofcomposedcharactersequence
  rangeOfComposedCharacterSequenceAtIndex(index: cocoascript.NSUInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410993-rangeofcomposedcharactersequence
  rangeOfComposedCharacterSequencesForRange(range: cocoascript.NSRange):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407654-writetofile
  writeToFile_atomically_encoding_error(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL, enc: cocoascript.NSStringEncoding, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417341-writetourl
  writeToURL_atomically_encoding_error(url: cocoascript.NSURL, useAuxiliaryFile: cocoascript.BOOL, enc: cocoascript.NSStringEncoding, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413115-propertylist
  propertyList():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407697-propertylistfromstringsfileforma
  propertyListFromStringsFileFormat():cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1533109-drawatpoint
  drawAtPoint_withAttributes(point: cocoascript.CGPoint, attrs: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1529855-drawinrect
  drawInRect_withAttributes(rect: cocoascript.CGRect, attrs: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1530195-drawwithrect
  drawWithRect_options_attributes_context(rect: cocoascript.CGRect, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString, context: cocoascript.NSStringDrawingContext):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1524729-boundingrectwithsize
  boundingRectWithSize_options_attributes_context(size: cocoascript.CGSize, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString, context: cocoascript.NSStringDrawingContext):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1531844-sizewithattributes
  sizeWithAttributes(attrs: cocoascript.NSString):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413104-variantfittingpresentationwidth
  variantFittingPresentationWidth(width: cocoascript.NSInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414031-doublevalue
  doubleValue(): number;
  setDoubleValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412321-floatvalue
  floatValue(): number;
  setFloatValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414988-intvalue
  intValue(): number;
  setIntValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410267-integervalue
  integerValue(): cocoascript.NSInteger;
  setIntegerValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417731-longlongvalue
  longLongValue(): number;
  setLongLongValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409420-boolvalue
  boolValue(): cocoascript.BOOL;
  setBoolValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417579-availablestringencodings
  availableStringEncodings(): cocoascript.NSStringEncoding;
  setAvailableStringEncodings(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410091-defaultcstringencoding
  defaultCStringEncoding(): cocoascript.NSStringEncoding;
  setDefaultCStringEncoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409496-canbeconvertedtoencoding
  canBeConvertedToEncoding(encoding: cocoascript.NSStringEncoding):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416696-datausingencoding
  dataUsingEncoding(encoding: cocoascript.NSStringEncoding):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1413692-datausingencoding
  dataUsingEncoding_allowLossyConversion(encoding: cocoascript.NSStringEncoding, lossy: cocoascript.BOOL):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410889-description
  description(): cocoascript.NSString;
  setDescription(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409567-fastestencoding
  fastestEncoding(): cocoascript.NSStringEncoding;
  setFastestEncoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1418037-smallestencoding
  smallestEncoding(): cocoascript.NSStringEncoding;
  setSmallestEncoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414489-pathcomponents
  pathComponents(): cocoascript.NSString;
  setPathComponents(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411841-completepathintostring
  completePathIntoString_caseSensitive_matchesIntoArray_filterTypes(outputName: cocoascript._Nullable, flag: cocoascript.BOOL, outputArray: cocoascript._Nullable, filterTypes: cocoascript.NSString):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1414559-filesystemrepresentation
  fileSystemRepresentation(): cocoascript.char;
  setFileSystemRepresentation(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1410269-getfilesystemrepresentation
  getFileSystemRepresentation_maxLength(cname: cocoascript.char, max: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409068-absolutepath
  absolutePath(): cocoascript.BOOL;
  setAbsolutePath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1416528-lastpathcomponent
  lastPathComponent(): cocoascript.NSString;
  setLastPathComponent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407801-pathextension
  pathExtension(): cocoascript.NSString;
  setPathExtension(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407943-stringbyabbreviatingwithtildeinp
  stringByAbbreviatingWithTildeInPath(): cocoascript.NSString;
  setStringByAbbreviatingWithTildeInPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417069-stringbyappendingpathcomponent
  stringByAppendingPathComponent(str: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1412501-stringbyappendingpathextension
  stringByAppendingPathExtension(str: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411141-stringbydeletinglastpathcomponen
  stringByDeletingLastPathComponent(): cocoascript.NSString;
  setStringByDeletingLastPathComponent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1418214-stringbydeletingpathextension
  stringByDeletingPathExtension(): cocoascript.NSString;
  setStringByDeletingPathExtension(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407716-stringbyexpandingtildeinpath
  stringByExpandingTildeInPath(): cocoascript.NSString;
  setStringByExpandingTildeInPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1417783-stringbyresolvingsymlinksinpath
  stringByResolvingSymlinksInPath(): cocoascript.NSString;
  setStringByResolvingSymlinksInPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407194-stringbystandardizingpath
  stringByStandardizingPath(): cocoascript.NSString;
  setStringByStandardizingPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415100-stringsbyappendingpaths
  stringsByAppendingPaths(paths: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1411946-stringbyaddingpercentencodingwit
  stringByAddingPercentEncodingWithAllowedCharacters(allowedCharacters: cocoascript.NSCharacterSet):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1409569-stringbyremovingpercentencoding
  stringByRemovingPercentEncoding(): cocoascript.NSString;
  setStringByRemovingPercentEncoding(): void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497394-initwithcstring
  initWithCString(bytes: cocoascript.char):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497403-initwithcstring
  initWithCString_length(bytes: cocoascript.char, length: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497281-initwithcstringnocopy
  initWithCStringNoCopy_length_freeWhenDone(bytes: cocoascript.char, length: cocoascript.NSUInteger, freeBuffer: cocoascript.BOOL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497398-initwithcontentsoffile
  initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497390-initwithcontentsofurl
  initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497362-writetofile
  writeToFile_atomically(path: cocoascript.NSString, useAuxiliaryFile: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497299-writetourl
  writeToURL_atomically(url: cocoascript.NSURL, atomically: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415132-getcharacters
  getCharacters(buffer: cocoascript.unichar):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497307-cstring
  cString():cocoascript.char;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497263-lossycstring
  lossyCString():cocoascript.char;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497303-cstringlength
  cStringLength():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497249-getcstring
  getCString(bytes: cocoascript.char):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497296-getcstring
  getCString_maxLength(bytes: cocoascript.char, maxLength: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1497298-getcstring
  getCString_maxLength_range_remainingRange(bytes: cocoascript.char, maxLength: cocoascript.NSUInteger, aRange: cocoascript.NSRange, leftoverRange: cocoascript.NSRangePointer):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1415058-stringbyaddingpercentescapesusin
  stringByAddingPercentEscapesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407783-stringbyreplacingpercentescapesu
  stringByReplacingPercentEscapesUsingEncoding(enc: cocoascript.NSStringEncoding):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619917-sizewithfont
  sizeWithFont(font: cocoascript.UIFont):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619914-sizewithfont
  sizeWithFont_forWidth_lineBreakMode(font: cocoascript.UIFont, width: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619903-sizewithfont
  sizeWithFont_minFontSize_actualFontSize_forWidth_lineBreakMode(font: cocoascript.UIFont, minFontSize: cocoascript.CGFloat, actualFontSize: cocoascript.CGFloat, width: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619910-sizewithfont
  sizeWithFont_constrainedToSize(font: cocoascript.UIFont, size: cocoascript.CGSize):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619915-sizewithfont
  sizeWithFont_constrainedToSize_lineBreakMode(font: cocoascript.UIFont, size: cocoascript.CGSize, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619898-drawatpoint
  drawAtPoint_withFont(point: cocoascript.CGPoint, font: cocoascript.UIFont):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619896-drawatpoint
  drawAtPoint_forWidth_withFont_lineBreakMode(point: cocoascript.CGPoint, width: cocoascript.CGFloat, font: cocoascript.UIFont, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619919-drawatpoint
  drawAtPoint_forWidth_withFont_fontSize_lineBreakMode_baselineAdjustment(point: cocoascript.CGPoint, width: cocoascript.CGFloat, font: cocoascript.UIFont, fontSize: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode, baselineAdjustment: cocoascript.UIBaselineAdjustment):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619894-drawatpoint
  drawAtPoint_forWidth_withFont_minFontSize_actualFontSize_lineBreakMode_baselineAdjustment(point: cocoascript.CGPoint, width: cocoascript.CGFloat, font: cocoascript.UIFont, minFontSize: cocoascript.CGFloat, actualFontSize: cocoascript.CGFloat, lineBreakMode: cocoascript.NSLineBreakMode, baselineAdjustment: cocoascript.UIBaselineAdjustment):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619909-drawinrect
  drawInRect_withFont(rect: cocoascript.CGRect, font: cocoascript.UIFont):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619908-drawinrect
  drawInRect_withFont_lineBreakMode(rect: cocoascript.CGRect, font: cocoascript.UIFont, lineBreakMode: cocoascript.NSLineBreakMode):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1619912-drawinrect
  drawInRect_withFont_lineBreakMode_alignment(rect: cocoascript.CGRect, font: cocoascript.UIFont, lineBreakMode: cocoascript.NSLineBreakMode, alignment: cocoascript.NSTextAlignment):cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1527536-drawwithrect
  drawWithRect_options_attributes(rect: cocoascript.NSRect, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1535578-boundingrectwithsize
  boundingRectWithSize_options_attributes(size: cocoascript.NSSize, options: cocoascript.NSStringDrawingOptions, attributes: cocoascript.NSString):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/foundation/nsstring/3547179-initwithbytesnocopy
  initWithBytesNoCopy_length_encoding_deallocator(bytes: void, len: cocoascript.NSUInteger, encoding: cocoascript.NSStringEncoding, deallocator: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/3547180-initwithcharactersnocopy
  initWithCharactersNoCopy_length_deallocator(chars: cocoascript.unichar, len: cocoascript.NSUInteger, deallocator: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/1407488-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/3564808-stringbyappendingpathcomponent
  stringByAppendingPathComponent_conformingToType(partialName: cocoascript.NSString, contentType: cocoascript.UTType):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsstring/3564809-stringbyappendingpathextensionfo
  stringByAppendingPathExtensionForType(contentType: cocoascript.UTType):cocoascript.NSString;
  // 
  alloc():cocoascript.NSString;
  // 
  init():cocoascript.NSString;
}
}
declare const NSString: cocoascript.NSString;

