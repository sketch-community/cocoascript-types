declare namespace cocoascript {
/**
 * The paragraph or ruler attributes for an attributed string.
 * doc://com.apple.documentation/documentation/uikit/nsparagraphstyle
 */
interface NSParagraphStyle extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1532681-defaultparagraphstyle
  defaultParagraphStyle(): cocoascript.NSParagraphStyle;
  setDefaultParagraphStyle(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1532321-alignment
  alignment(): cocoascript.NSTextAlignment;
  setAlignment(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1527764-firstlineheadindent
  firstLineHeadIndent(): cocoascript.CGFloat;
  setFirstLineHeadIndent(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1530760-headindent
  headIndent(): cocoascript.CGFloat;
  setHeadIndent(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1525556-tailindent
  tailIndent(): cocoascript.CGFloat;
  setTailIndent(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1528614-lineheightmultiple
  lineHeightMultiple(): cocoascript.CGFloat;
  setLineHeightMultiple(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1533343-maximumlineheight
  maximumLineHeight(): cocoascript.CGFloat;
  setMaximumLineHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1535639-minimumlineheight
  minimumLineHeight(): cocoascript.CGFloat;
  setMinimumLineHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1524635-linespacing
  lineSpacing(): cocoascript.CGFloat;
  setLineSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1530912-paragraphspacing
  paragraphSpacing(): cocoascript.CGFloat;
  setParagraphSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1533011-paragraphspacingbefore
  paragraphSpacingBefore(): cocoascript.CGFloat;
  setParagraphSpacingBefore(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1532841-tabstops
  tabStops(): cocoascript.NSTextTab;
  setTabStops(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1535614-defaulttabinterval
  defaultTabInterval(): cocoascript.CGFloat;
  setDefaultTabInterval(): void;
  // doc://com.apple.documentation/documentation/appkit/nsparagraphstyle/1528053-textblocks
  textBlocks(): cocoascript.NSTextBlock;
  setTextBlocks(): void;
  // doc://com.apple.documentation/documentation/appkit/nsparagraphstyle/1534193-textlists
  textLists(): cocoascript.NSTextList;
  setTextLists(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1529937-linebreakmode
  lineBreakMode(): cocoascript.NSLineBreakMode;
  setLineBreakMode(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1529275-hyphenationfactor
  hyphenationFactor(): number;
  setHyphenationFactor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsparagraphstyle/1529278-tighteningfactorfortruncation
  tighteningFactorForTruncation(): number;
  setTighteningFactorForTruncation(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1528994-allowsdefaulttighteningfortrunca
  allowsDefaultTighteningForTruncation(): cocoascript.BOOL;
  setAllowsDefaultTighteningForTruncation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsparagraphstyle/1535869-headerlevel
  headerLevel(): cocoascript.NSInteger;
  setHeaderLevel(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/1527354-basewritingdirection
  baseWritingDirection(): cocoascript.NSWritingDirection;
  setBaseWritingDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/nsparagraphstyle/3667463-linebreakstrategy
  lineBreakStrategy(): cocoascript.NSLineBreakStrategy;
  setLineBreakStrategy(): void;
  // 
  alloc():cocoascript.NSParagraphStyle;
  // 
  init():cocoascript.NSParagraphStyle;
}
}
declare const NSParagraphStyle: cocoascript.NSParagraphStyle;

