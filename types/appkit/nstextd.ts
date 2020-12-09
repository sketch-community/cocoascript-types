declare namespace cocoascript {
/**
 * The most general programmatic interface for objects that manage text. 
 * doc://com.apple.documentation/documentation/appkit/nstext
 */
interface NSText extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nstext/1535093-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSText;
  // doc://com.apple.documentation/documentation/appkit/nstext/1525191-initwithframe
  initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSText;
  // doc://com.apple.documentation/documentation/appkit/nstext/1528601-string
  string(): cocoascript.NSString;
  setString(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535324-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1531772-drawsbackground
  drawsBackground(): cocoascript.BOOL;
  setDrawsBackground(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1529876-editable
  editable(): cocoascript.BOOL;
  setEditable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535368-selectable
  selectable(): cocoascript.BOOL;
  setSelectable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1533080-fieldeditor
  fieldEditor(): cocoascript.BOOL;
  setFieldEditor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1531003-richtext
  richText(): cocoascript.BOOL;
  setRichText(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1531887-importsgraphics
  importsGraphics(): cocoascript.BOOL;
  setImportsGraphics(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527431-usesfontpanel
  usesFontPanel(): cocoascript.BOOL;
  setUsesFontPanel(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535773-toggleruler
  toggleRuler(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1533732-rulervisible
  rulerVisible(): cocoascript.BOOL;
  setRulerVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1526227-selectedrange
  selectedRange(): cocoascript.NSRange;
  setSelectedRange(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527249-replacecharactersinrange
  replaceCharactersInRange_withRTF(range: cocoascript.NSRange, rtfData: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1525846-replacecharactersinrange
  replaceCharactersInRange_withRTFD(range: cocoascript.NSRange, rtfdData: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1530589-replacecharactersinrange
  replaceCharactersInRange_withString(range: cocoascript.NSRange, string: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527642-selectall
  selectAll(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1525497-copy
  copy(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1524858-cut
  cut(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527209-paste
  paste(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1531255-copyfont
  copyFont(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1531099-pastefont
  pasteFont(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1533303-copyruler
  copyRuler(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1530420-pasteruler
  pasteRuler(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1524660-delete
  delete(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1531459-changefont
  changeFont(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1534646-font
  font(): cocoascript.NSFont;
  setFont(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1526283-setfont
  setFont_range(font: cocoascript.NSFont, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1534102-alignment
  alignment(): cocoascript.NSTextAlignment;
  setAlignment(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535569-aligncenter
  alignCenter(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535705-alignleft
  alignLeft(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1526477-alignright
  alignRight(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1534875-textcolor
  textColor(): cocoascript.NSColor;
  setTextColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1530110-settextcolor
  setTextColor_range(color: cocoascript.NSColor, range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1526206-basewritingdirection
  baseWritingDirection(): cocoascript.NSWritingDirection;
  setBaseWritingDirection(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1525743-superscript
  superscript(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535373-subscript
  subscript(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527542-unscript
  unscript(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1534203-underline
  underline(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1532564-readrtfdfromfile
  readRTFDFromFile(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527085-writertfdtofile
  writeRTFDToFile_atomically(path: cocoascript.NSString, flag: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nstext/1528394-rtfdfromrange
  RTFDFromRange(range: cocoascript.NSRange):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527004-rtffromrange
  RTFFromRange(range: cocoascript.NSRange):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/appkit/nstext/1534926-checkspelling
  checkSpelling(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1533456-showguesspanel
  showGuessPanel(sender: cocoascript.NSText):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535900-maxsize
  maxSize(): cocoascript.NSSize;
  setMaxSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1526222-minsize
  minSize(): cocoascript.NSSize;
  setMinSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1535082-verticallyresizable
  verticallyResizable(): cocoascript.BOOL;
  setVerticallyResizable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1527489-horizontallyresizable
  horizontallyResizable(): cocoascript.BOOL;
  setHorizontallyResizable(): void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1533991-sizetofit
  sizeToFit():void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1529884-scrollrangetovisible
  scrollRangeToVisible(range: cocoascript.NSRange):void;
  // doc://com.apple.documentation/documentation/appkit/nstext/1529480-delegate
  delegate(): cocoascript.NSTextDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextdidbegineditingnotification
  NSTextDidBeginEditingNotification(): cocoascript.NSNotificationName;
  setNSTextDidBeginEditingNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextdidchangenotification
  NSTextDidChangeNotification(): cocoascript.NSNotificationName;
  setNSTextDidChangeNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextdidendeditingnotification
  NSTextDidEndEditingNotification(): cocoascript.NSNotificationName;
  setNSTextDidEndEditingNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextmovementuserinfokey
  NSTextMovementUserInfoKey(): cocoascript.const;
  setNSTextMovementUserInfoKey(): void;
  // 
  alloc():cocoascript.NSText;
  // 
  init():cocoascript.NSText;
}
}
declare const NSText: cocoascript.NSText;

