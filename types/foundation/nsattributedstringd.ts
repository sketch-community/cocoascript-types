declare namespace cocoascript {
/**
 * A string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
 * doc://com.apple.documentation/documentation/foundation/nsattributedstring
 */
interface NSAttributedString extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1407481-initwithstring
  initWithString(str: cocoascript.NSString):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1408136-initwithstring
  initWithString_attributes(str: cocoascript.NSString, attrs: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1415342-initwithattributedstring
  initWithAttributedString(attrStr: cocoascript.NSAttributedString):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524613-initwithdata
  initWithData_options_documentAttributes_error(data: cocoascript.NSData, options: cocoascript.NSAttributedString, dict: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534329-initwithdocformat
  initWithDocFormat_documentAttributes(data: cocoascript.NSData, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525953-initwithhtml
  initWithHTML_documentAttributes(data: cocoascript.NSData, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524624-initwithhtml
  initWithHTML_baseURL_documentAttributes(data: cocoascript.NSData, base: cocoascript.NSURL, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535412-initwithhtml
  initWithHTML_options_documentAttributes(data: cocoascript.NSData, options: cocoascript.NSAttributedString, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1532912-initwithrtf
  initWithRTF_documentAttributes(data: cocoascript.NSData, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530987-initwithrtfd
  initWithRTFD_documentAttributes(data: cocoascript.NSData, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1533594-initwithrtfdfilewrapper
  initWithRTFDFileWrapper_documentAttributes(wrapper: cocoascript.NSFileWrapper, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530490-initwithurl
  initWithURL_options_documentAttributes_error(url: cocoascript.NSURL, options: cocoascript.NSAttributedString, dict: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412616-string
  string(): cocoascript.NSString;
  setString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1418432-length
  length(): cocoascript.NSUInteger;
  setLength(): void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1415682-attributesatindex
  attributesAtIndex_effectiveRange(location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1410494-attributesatindex
  attributesAtIndex_longestEffectiveRange_inRange(location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer, rangeLimit: cocoascript.NSRange):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1408174-attribute
  attribute_atIndex_effectiveRange(attrName: cocoascript.NSAttributedStringKey, location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412701-attribute
  attribute_atIndex_longestEffectiveRange_inRange(attrName: cocoascript.NSAttributedStringKey, location: cocoascript.NSUInteger, range: cocoascript.NSRangePointer, rangeLimit: cocoascript.NSRange):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1414808-isequaltoattributedstring
  isEqualToAttributedString(other: cocoascript.NSAttributedString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1414283-attributedsubstringfromrange
  attributedSubstringFromRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412461-enumerateattribute
  enumerateAttribute_inRange_options_usingBlock(attrName: cocoascript.NSAttributedStringKey, enumerationRange: cocoascript.NSRange, opts: cocoascript.NSAttributedStringEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1412070-enumerateattributesinrange
  enumerateAttributesInRange_options_usingBlock(enumerationRange: cocoascript.NSRange, opts: cocoascript.NSAttributedStringEnumerationOptions, block: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528371-fontattributesinrange
  fontAttributesInRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524469-rulerattributesinrange
  rulerAttributesInRange(range: cocoascript.NSRange):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534748-doubleclickatindex
  doubleClickAtIndex(location: cocoascript.NSUInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1526887-linebreakbeforeindex
  lineBreakBeforeIndex_withinRange(location: cocoascript.NSUInteger, aRange: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534114-linebreakbyhyphenatingbeforeinde
  lineBreakByHyphenatingBeforeIndex_withinRange(location: cocoascript.NSUInteger, aRange: cocoascript.NSRange):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535305-nextwordfromindex
  nextWordFromIndex_forward(location: cocoascript.NSUInteger, isForward: cocoascript.BOOL):cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1527303-itemnumberintextlist
  itemNumberInTextList_atIndex(list: cocoascript.NSTextList, location: cocoascript.NSUInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534045-rangeoftextblock
  rangeOfTextBlock_atIndex(block: cocoascript.NSTextBlock, location: cocoascript.NSUInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525314-rangeoftextlist
  rangeOfTextList_atIndex(list: cocoascript.NSTextList, location: cocoascript.NSUInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534365-rangeoftexttable
  rangeOfTextTable_atIndex(table: cocoascript.NSTextTable, location: cocoascript.NSUInteger):cocoascript.NSRange;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1534090-datafromrange
  dataFromRange_documentAttributes_error(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString, error: cocoascript._Nullable):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530461-filewrapperfromrange
  fileWrapperFromRange_documentAttributes_error(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString, error: cocoascript._Nullable):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528592-docformatfromrange
  docFormatFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535158-rtffromrange
  RTFFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1530578-rtfdfromrange
  RTFDFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1527502-rtfdfilewrapperfromrange
  RTFDFileWrapperFromRange_documentAttributes(range: cocoascript.NSRange, dict: cocoascript.NSAttributedString):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1529478-drawatpoint
  drawAtPoint(point: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1531631-drawinrect
  drawInRect(rect: cocoascript.CGRect):void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1524971-drawwithrect
  drawWithRect_options_context(rect: cocoascript.CGRect, options: cocoascript.NSStringDrawingOptions, context: cocoascript.NSStringDrawingContext):void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528362-size
  size():cocoascript.CGSize;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1529154-boundingrectwithsize
  boundingRectWithSize_options_context(size: cocoascript.CGSize, options: cocoascript.NSStringDrawingOptions, context: cocoascript.NSStringDrawingContext):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525086-containsattachmentsinrange
  containsAttachmentsInRange(range: cocoascript.NSRange):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535409-texttypes
  textTypes(): cocoascript.NSString;
  setTextTypes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1528269-textunfilteredtypes
  textUnfilteredTypes(): cocoascript.NSString;
  setTextUnfilteredTypes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525939-initwithpath
  initWithPath_documentAttributes(path: cocoascript.NSString, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1533913-initwithurl
  initWithURL_documentAttributes(url: cocoascript.NSURL, dict: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1620492-initwithfileurl
  initWithFileURL_options_documentAttributes_error(url: cocoascript.NSURL, options: cocoascript.NSDictionary, dict: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1533869-containsattachments
  containsAttachments(): cocoascript.BOOL;
  setContainsAttachments(): void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1535059-urlatindex
  URLAtIndex_effectiveRange(location: cocoascript.NSUInteger, effectiveRange: cocoascript.NSRangePointer):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1525782-drawwithrect
  drawWithRect_options(rect: cocoascript.NSRect, options: cocoascript.NSStringDrawingOptions):void;
  // doc://com.apple.documentation/documentation/foundation/nsattributedstring/1532013-boundingrectwithsize
  boundingRectWithSize_options(size: cocoascript.NSSize, options: cocoascript.NSStringDrawingOptions):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsunderlinebywordmask
  NSUnderlineByWordMask(): cocoascript.NSUInteger;
  setNSUnderlineByWordMask(): void;
  // 
  alloc():cocoascript.NSAttributedString;
  // 
  init():cocoascript.NSAttributedString;
}
}
declare const NSAttributedString: cocoascript.NSAttributedString;

