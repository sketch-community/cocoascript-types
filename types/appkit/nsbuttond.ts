declare namespace cocoascript {
/**
 * A control that defines an area on the screen that can be used to trigger actions. 
 * doc://com.apple.documentation/documentation/appkit/nsbutton
 */
interface NSButton extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1524983-setbuttontype
  setButtonType(type: cocoascript.NSButtonType):void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1524817-getperiodicdelay
  getPeriodicDelay_interval(delay: number, interval: number):void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1526612-setperiodicdelay
  setPeriodicDelay_interval(delay: number, interval: number):void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/3000781-contenttintcolor
  contentTintColor(): cocoascript.NSColor;
  setContentTintColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/3622469-hasdestructiveaction
  hasDestructiveAction(): cocoascript.BOOL;
  setHasDestructiveAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1529588-alternatetitle
  alternateTitle(): cocoascript.NSString;
  setAlternateTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1524640-attributedtitle
  attributedTitle(): cocoascript.NSAttributedString;
  setAttributedTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1526723-attributedalternatetitle
  attributedAlternateTitle(): cocoascript.NSAttributedString;
  setAttributedAlternateTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1524430-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1579931-settitlewithmnemonic
  setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1530910-sound
  sound(): cocoascript.NSSound;
  setSound(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1532300-springloaded
  springLoaded(): cocoascript.BOOL;
  setSpringLoaded(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1534413-maxacceleratorlevel
  maxAcceleratorLevel(): cocoascript.NSInteger;
  setMaxAcceleratorLevel(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1534221-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1533935-alternateimage
  alternateImage(): cocoascript.NSImage;
  setAlternateImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1526778-imageposition
  imagePosition(): cocoascript.NSCellImagePosition;
  setImagePosition(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1525565-bordered
  bordered(): cocoascript.BOOL;
  setBordered(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1529659-transparent
  transparent(): cocoascript.BOOL;
  setTransparent(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1527022-bezelstyle
  bezelStyle(): cocoascript.NSBezelStyle;
  setBezelStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/2561000-bezelcolor
  bezelColor(): cocoascript.NSColor;
  setBezelColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1532248-showsborderonlywhilemouseinside
  showsBorderOnlyWhileMouseInside(): cocoascript.BOOL;
  setShowsBorderOnlyWhileMouseInside(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/2092414-imagehugstitle
  imageHugsTitle(): cocoascript.BOOL;
  setImageHugsTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/2202284-imagescaling
  imageScaling(): cocoascript.NSImageScaling;
  setImageScaling(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/2952061-activecompressionoptions
  activeCompressionOptions(): cocoascript.NSUserInterfaceCompressionOptions;
  setActiveCompressionOptions(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/2952060-compresswithprioritizedcompressi
  compressWithPrioritizedCompressionOptions(prioritizedOptions: cocoascript.NSUserInterfaceCompressionOptions):void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/2952059-minimumsizewithprioritizedcompre
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: cocoascript.NSUserInterfaceCompressionOptions):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1528670-allowsmixedstate
  allowsMixedState(): cocoascript.BOOL;
  setAllowsMixedState(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1528907-state
  state(): cocoascript.NSControlStateValue;
  setState(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1530594-setnextstate
  setNextState():void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1534156-highlight
  highlight(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1525368-keyequivalent
  keyEquivalent(): cocoascript.NSString;
  setKeyEquivalent(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1532670-keyequivalentmodifiermask
  keyEquivalentModifierMask(): cocoascript.NSEventModifierFlags;
  setKeyEquivalentModifierMask(): void;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/1524423-performkeyequivalent
  performKeyEquivalent(key: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsbutton/3667453-symbolconfiguration
  symbolConfiguration(): cocoascript.NSImageSymbolConfiguration;
  setSymbolConfiguration(): void;
  // 
  alloc():cocoascript.NSButton;
  // 
  init():cocoascript.NSButton;
}
}
declare const NSButton: cocoascript.NSButton;

