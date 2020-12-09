declare namespace cocoascript {
/**
 * A set of methods implemented by objects that support searching using the 
 * doc://com.apple.documentation/documentation/appkit/nstextfinderclient
 */
interface NSTextFinderClient extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1529462-string
  string(): cocoascript.NSString;
  setString(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1529466-stringatindex
  stringAtIndex_effectiveRange_endsWithSearchBoundary(characterIndex: cocoascript.NSUInteger, outRange: cocoascript.NSRangePointer, outFlag: cocoascript.BOOL):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1534333-stringlength
  stringLength():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1529811-shouldreplacecharactersinranges
  shouldReplaceCharactersInRanges_withStrings(ranges: cocoascript.NSValue, strings: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1527702-replacecharactersinrange
  replaceCharactersInRange_withString(range: cocoascript.NSRange, string: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1534301-didreplacecharacters
  didReplaceCharacters():void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1533766-selectable
  selectable(): cocoascript.BOOL;
  setSelectable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1530815-allowsmultipleselection
  allowsMultipleSelection(): cocoascript.BOOL;
  setAllowsMultipleSelection(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1526936-firstselectedrange
  firstSelectedRange(): cocoascript.NSRange;
  setFirstSelectedRange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1524696-selectedranges
  selectedRanges(): cocoascript.NSValue;
  setSelectedRanges(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1528515-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1524830-contentviewatindex
  contentViewAtIndex_effectiveCharacterRange(index: cocoascript.NSUInteger, outRange: cocoascript.NSRangePointer):cocoascript.NSView;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1529980-rectsforcharacterrange
  rectsForCharacterRange(range: cocoascript.NSRange):cocoascript.NSValue;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1526989-scrollrangetovisible
  scrollRangeToVisible(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1524834-visiblecharacterranges
  visibleCharacterRanges(): cocoascript.NSValue;
  setVisibleCharacterRanges(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextfinderclient/1533760-drawcharactersinrange
  drawCharactersInRange_forContentView(range: cocoascript.NSRange, view: cocoascript.NSView):void;
}
}

