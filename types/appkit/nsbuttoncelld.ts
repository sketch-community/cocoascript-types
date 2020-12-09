declare namespace cocoascript {
/**
 * An object that defines the user interface of a button or other clickable region of a view.
 * doc://com.apple.documentation/documentation/appkit/nsbuttoncell
 */
interface NSButtonCell extends NSActionCell {
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1589270-alternatemnemonic
  alternateMnemonic():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1589282-alternatemnemoniclocation
  alternateMnemonicLocation():cocoascript.NSUInteger;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1535382-alternatetitle
  alternateTitle(): cocoascript.NSString;
  setAlternateTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1526922-attributedalternatetitle
  attributedAlternateTitle(): cocoascript.NSAttributedString;
  setAttributedAlternateTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1529303-attributedtitle
  attributedTitle(): cocoascript.NSAttributedString;
  setAttributedTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1589288-setalternatemnemoniclocation
  setAlternateMnemonicLocation(location: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1589291-setalternatetitlewithmnemonic
  setAlternateTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1589263-settitlewithmnemonic
  setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1535916-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1527064-alternateimage
  alternateImage(): cocoascript.NSImage;
  setAlternateImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1529593-imageposition
  imagePosition(): cocoascript.NSCellImagePosition;
  setImagePosition(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1535104-imagescaling
  imageScaling(): cocoascript.NSImageScaling;
  setImageScaling(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1535444-getperiodicdelay
  getPeriodicDelay_interval(delay: number, interval: number):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1525725-setperiodicdelay
  setPeriodicDelay_interval(delay: number, interval: number):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1529476-keyequivalent
  keyEquivalent(): cocoascript.NSString;
  setKeyEquivalent(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1531184-keyequivalentfont
  keyEquivalentFont(): cocoascript.NSFont;
  setKeyEquivalentFont(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1528315-keyequivalentmodifiermask
  keyEquivalentModifierMask(): cocoascript.NSEventModifierFlags;
  setKeyEquivalentModifierMask(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1530713-setkeyequivalentfont
  setKeyEquivalentFont_size(fontName: cocoascript.NSString, fontSize: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1529743-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1528696-bezelstyle
  bezelStyle(): cocoascript.NSBezelStyle;
  setBezelStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1532259-gradienttype
  gradientType(): cocoascript.NSGradientType;
  setGradientType(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1534152-imagedimswhendisabled
  imageDimsWhenDisabled(): cocoascript.BOOL;
  setImageDimsWhenDisabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1533667-opaque
  opaque(): cocoascript.BOOL;
  setOpaque(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1530887-transparent
  transparent(): cocoascript.BOOL;
  setTransparent(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1527903-showsborderonlywhilemouseinside
  showsBorderOnlyWhileMouseInside(): cocoascript.BOOL;
  setShowsBorderOnlyWhileMouseInside(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1528459-highlightsby
  highlightsBy(): cocoascript.NSCellStyleMask;
  setHighlightsBy(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1527474-setbuttontype
  setButtonType(type: cocoascript.NSButtonType):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1533225-showsstateby
  showsStateBy(): cocoascript.NSCellStyleMask;
  setShowsStateBy(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1525955-sound
  sound(): cocoascript.NSSound;
  setSound(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1524997-mouseentered
  mouseEntered(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1530776-mouseexited
  mouseExited(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1526086-performclick
  performClick(sender: cocoascript.NSButtonCell):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1524939-drawbezelwithframe
  drawBezelWithFrame_inView(frame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1531792-drawimage
  drawImage_withFrame_inView(image: cocoascript.NSImage, frame: cocoascript.NSRect, controlView: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1528861-drawtitle
  drawTitle_withFrame_inView(title: cocoascript.NSAttributedString, frame: cocoascript.NSRect, controlView: cocoascript.NSView):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1639159-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSButtonCell;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1639152-initimagecell
  initImageCell(image: cocoascript.NSImage):cocoascript.NSButtonCell;
  // doc://com.apple.documentation/documentation/appkit/nsbuttoncell/1639134-inittextcell
  initTextCell(string: cocoascript.NSString):cocoascript.NSButtonCell;
  // 
  alloc():cocoascript.NSButtonCell;
  // 
  init():cocoascript.NSButtonCell;
}
}
declare const NSButtonCell: cocoascript.NSButtonCell;

