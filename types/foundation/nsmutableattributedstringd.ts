declare namespace cocoascript {
/**
 * A mutable string object that also contains attributes (such as visual style, hyperlinks, or accessibility data) associated with various portions of its text content. 
 * doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring
 */
interface NSMutableAttributedString extends NSAttributedString {
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1416955-mutablestring
  mutableString(): cocoascript.NSMutableString;
  setMutableString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1418451-replacecharactersinrange
  replaceCharactersInRange_withString(range: cocoascript.NSRange, str: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1410610-deletecharactersinrange
  deleteCharactersInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1412179-setattributes
  setAttributes_range(attrs: cocoascript.NSMutableAttributedString, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1417080-addattribute
  addAttribute_value_range(name: cocoascript.NSAttributedStringKey, value: cocoascript.NSMutableAttributedString, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1414304-addattributes
  addAttributes_range(attrs: cocoascript.NSMutableAttributedString, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1409691-removeattribute
  removeAttribute_range(name: cocoascript.NSAttributedStringKey, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1532734-applyfonttraits
  applyFontTraits_range(traitMask: cocoascript.NSFontTraitMask, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1530762-setalignment
  setAlignment_range(alignment: cocoascript.NSTextAlignment, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1532923-setbasewritingdirection
  setBaseWritingDirection_range(writingDirection: cocoascript.NSWritingDirection, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1529906-subscriptrange
  subscriptRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1533592-superscriptrange
  superscriptRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1530210-unscriptrange
  unscriptRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1417879-appendattributedstring
  appendAttributedString(attrString: cocoascript.NSAttributedString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1414947-insertattributedstring
  insertAttributedString_atIndex(attrString: cocoascript.NSAttributedString, loc: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1417045-replacecharactersinrange
  replaceCharactersInRange_withAttributedString(range: cocoascript.NSRange, attrString: cocoascript.NSAttributedString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1411894-setattributedstring
  setAttributedString(attrString: cocoascript.NSAttributedString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1411853-beginediting
  beginEditing():void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1416707-endediting
  endEditing():void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1508389-updateattachmentsfrompath
  updateAttachmentsFromPath(path: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1533823-fixattributesinrange
  fixAttributesInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1526389-fixattachmentattributeinrange
  fixAttachmentAttributeInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1534303-fixfontattributeinrange
  fixFontAttributeInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1527082-fixparagraphstyleattributeinrang
  fixParagraphStyleAttributeInRange(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1535465-readfromdata
  readFromData_options_documentAttributes_error(data: cocoascript.NSData, opts: cocoascript.NSMutableAttributedString, dict: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1524892-readfromurl
  readFromURL_options_documentAttributes_error(url: cocoascript.NSURL, opts: cocoascript.NSMutableAttributedString, dict: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1525145-readfromdata
  readFromData_options_documentAttributes(data: cocoascript.NSData, options: cocoascript.NSDictionary, dict: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1530903-readfromurl
  readFromURL_options_documentAttributes(url: cocoascript.NSURL, options: cocoascript.NSDictionary, dict: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsmutableattributedstring/1620496-readfromfileurl
  readFromFileURL_options_documentAttributes_error(url: cocoascript.NSURL, opts: cocoascript.NSDictionary, dict: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSMutableAttributedString;
  // 
  init():cocoascript.NSMutableAttributedString;
}
}
declare const NSMutableAttributedString: cocoascript.NSMutableAttributedString;

