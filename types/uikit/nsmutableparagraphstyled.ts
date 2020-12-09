declare namespace cocoascript {
/**
 * An object for changing the values of the subattributes in a paragraph style attribute.
 * doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle
 */
interface NSMutableParagraphStyle extends NSParagraphStyle {
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1533980-setparagraphstyle
  setParagraphStyle(obj: cocoascript.NSParagraphStyle):void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1534368-alignment
  alignment(): cocoascript.NSTextAlignment;
  setAlignment(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1528392-firstlineheadindent
  firstLineHeadIndent(): cocoascript.CGFloat;
  setFirstLineHeadIndent(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1525135-headindent
  headIndent(): cocoascript.CGFloat;
  setHeadIndent(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1531666-tailindent
  tailIndent(): cocoascript.CGFloat;
  setTailIndent(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1524596-lineheightmultiple
  lineHeightMultiple(): cocoascript.CGFloat;
  setLineHeightMultiple(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1524351-maximumlineheight
  maximumLineHeight(): cocoascript.CGFloat;
  setMaximumLineHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1531118-minimumlineheight
  minimumLineHeight(): cocoascript.CGFloat;
  setMinimumLineHeight(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1528742-linespacing
  lineSpacing(): cocoascript.CGFloat;
  setLineSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1532528-paragraphspacing
  paragraphSpacing(): cocoascript.CGFloat;
  setParagraphSpacing(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1527729-paragraphspacingbefore
  paragraphSpacingBefore(): cocoascript.CGFloat;
  setParagraphSpacingBefore(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1534601-basewritingdirection
  baseWritingDirection(): cocoascript.NSWritingDirection;
  setBaseWritingDirection(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1525051-addtabstop
  addTabStop(anObject: cocoascript.NSTextTab):void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1535084-removetabstop
  removeTabStop(anObject: cocoascript.NSTextTab):void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1531988-tabstops
  tabStops(): cocoascript.NSTextTab;
  setTabStops(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1529861-defaulttabinterval
  defaultTabInterval(): cocoascript.CGFloat;
  setDefaultTabInterval(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmutableparagraphstyle/1535855-textblocks
  textBlocks(): cocoascript.NSTextBlock;
  setTextBlocks(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmutableparagraphstyle/1524648-textlists
  textLists(): cocoascript.NSTextList;
  setTextLists(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1535126-linebreakmode
  lineBreakMode(): cocoascript.NSLineBreakMode;
  setLineBreakMode(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1535553-hyphenationfactor
  hyphenationFactor(): number;
  setHyphenationFactor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmutableparagraphstyle/1531383-tighteningfactorfortruncation
  tighteningFactorForTruncation(): number;
  setTighteningFactorForTruncation(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/1534136-allowsdefaulttighteningfortrunca
  allowsDefaultTighteningForTruncation(): cocoascript.BOOL;
  setAllowsDefaultTighteningForTruncation(): void;
  // doc://com.apple.documentation/documentation/appkit/nsmutableparagraphstyle/1533962-headerlevel
  headerLevel(): cocoascript.NSInteger;
  setHeaderLevel(): void;
  // doc://com.apple.documentation/documentation/uikit/nsmutableparagraphstyle/3667462-linebreakstrategy
  lineBreakStrategy(): cocoascript.NSLineBreakStrategy;
  setLineBreakStrategy(): void;
  // 
  alloc():cocoascript.NSMutableParagraphStyle;
  // 
  init():cocoascript.NSMutableParagraphStyle;
}
}
declare const NSMutableParagraphStyle: cocoascript.NSMutableParagraphStyle;

