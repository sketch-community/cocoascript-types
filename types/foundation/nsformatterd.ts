declare namespace cocoascript {
/**
 * An abstract class that declares an interface for objects that create, interpret, and validate the textual representation of values. 
 * doc://com.apple.documentation/documentation/foundation/nsformatter
 */
interface NSFormatter extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsformatter/1415993-stringforobjectvalue
  stringForObjectValue(obj: cocoascript.NSFormatter):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsformatter/1409478-attributedstringforobjectvalue
  attributedStringForObjectValue_withDefaultAttributes(obj: cocoascript.NSFormatter, attrs: cocoascript.NSFormatter):cocoascript.NSAttributedString;
  // doc://com.apple.documentation/documentation/foundation/nsformatter/1416333-editingstringforobjectvalue
  editingStringForObjectValue(obj: cocoascript.NSFormatter):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsformatter/1408927-getobjectvalue
  getObjectValue_forString_errorDescription(obj: cocoascript._Nullable, string: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsformatter/1417993-ispartialstringvalid
  isPartialStringValid_newEditingString_errorDescription(partialString: cocoascript.NSString, newString: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsformatter/1415263-ispartialstringvalid
  isPartialStringValid_proposedSelectedRange_originalString_originalSelectedRange_errorDescription(partialStringPtr: cocoascript._Nonnull, proposedSelRangePtr: cocoascript.NSRangePointer, origString: cocoascript.NSString, origSelRange: cocoascript.NSRange, error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSFormatter;
  // 
  init():cocoascript.NSFormatter;
}
}
declare const NSFormatter: cocoascript.NSFormatter;

