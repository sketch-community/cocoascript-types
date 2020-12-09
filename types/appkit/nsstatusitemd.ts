declare namespace cocoascript {
/**
 * An individual element displayed in the system menu bar.
 * doc://com.apple.documentation/documentation/appkit/nsstatusitem
 */
interface NSStatusItem extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1525951-statusbar
  statusBar(): cocoascript.NSStatusBar;
  setStatusBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1644024-behavior
  behavior(): cocoascript.NSStatusItemBehavior;
  setBehavior(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1535056-button
  button(): cocoascript.NSStatusBarButton;
  setButton(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1535918-menu
  menu(): cocoascript.NSMenu;
  setMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1644025-visible
  visible(): cocoascript.BOOL;
  setVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1529402-length
  length(): cocoascript.CGFloat;
  setLength(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1644022-autosavename
  autosaveName(): cocoascript.NSStatusItemAutosaveName;
  setAutosaveName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1527352-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1532686-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1531580-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1535555-doubleaction
  doubleAction(): cocoascript.SEL;
  setDoubleAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1535025-sendactionon
  sendActionOn(mask: cocoascript.NSEventMask):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1524256-popupstatusitemmenu
  popUpStatusItemMenu(menu: cocoascript.NSMenu):void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1534494-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1534223-attributedtitle
  attributedTitle(): cocoascript.NSAttributedString;
  setAttributedTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1524711-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1534014-alternateimage
  alternateImage(): cocoascript.NSImage;
  setAlternateImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1528609-highlightmode
  highlightMode(): cocoascript.BOOL;
  setHighlightMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1534916-tooltip
  toolTip(): cocoascript.NSString;
  setToolTip(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1531522-view
  view(): cocoascript.NSView;
  setView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsstatusitem/1532509-drawstatusbarbackgroundinrect
  drawStatusBarBackgroundInRect_withHighlight(rect: cocoascript.NSRect, highlight: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.NSStatusItem;
  // 
  init():cocoascript.NSStatusItem;
}
}
declare const NSStatusItem: cocoascript.NSStatusItem;

