declare namespace cocoascript {
/**
 * An item in a window’s toolbar.
 * doc://com.apple.documentation/documentation/appkit/nstoolbaritem
 */
interface NSToolbarItem extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1534084-initwithitemidentifier
  initWithItemIdentifier(itemIdentifier: cocoascript.NSToolbarItemIdentifier):cocoascript.NSToolbarItem;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1524394-itemidentifier
  itemIdentifier(): cocoascript.NSToolbarItemIdentifier;
  setItemIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1532976-toolbar
  toolbar(): cocoascript.NSToolbar;
  setToolbar(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1535127-label
  label(): cocoascript.NSString;
  setLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1525421-palettelabel
  paletteLabel(): cocoascript.NSString;
  setPaletteLabel(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1524627-tooltip
  toolTip(): cocoascript.NSString;
  setToolTip(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/3237225-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1532562-menuformrepresentation
  menuFormRepresentation(): cocoascript.NSMenuItem;
  setMenuFormRepresentation(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/3375793-itemmenuformrepresentation
  itemMenuFormRepresentation(): cocoascript.UIMenuElement;
  setItemMenuFormRepresentation(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1524618-tag
  tag(): cocoascript.NSInteger;
  setTag(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1525982-target
  target(): cocoascript.id;
  setTarget(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1525723-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/3237224-bordered
  bordered(): cocoascript.BOOL;
  setBordered(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/3622481-navigational
  navigational(): cocoascript.BOOL;
  setNavigational(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1524277-enabled
  enabled(): cocoascript.BOOL;
  setEnabled(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1527749-image
  image(): cocoascript.NSImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1534039-view
  view(): cocoascript.NSView;
  setView(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1531777-minsize
  minSize(): cocoascript.NSSize;
  setMinSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1526451-maxsize
  maxSize(): cocoascript.NSSize;
  setMaxSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1527947-visibilitypriority
  visibilityPriority(): cocoascript.NSToolbarItemVisibilityPriority;
  setVisibilityPriority(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1525295-validate
  validate():void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1524463-autovalidates
  autovalidates(): cocoascript.BOOL;
  setAutovalidates(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbaritem/1530116-allowsduplicatesintoolbar
  allowsDuplicatesInToolbar(): cocoascript.BOOL;
  setAllowsDuplicatesInToolbar(): void;
  // 
  alloc():cocoascript.NSToolbarItem;
  // 
  init():cocoascript.NSToolbarItem;
}
}
declare const NSToolbarItem: cocoascript.NSToolbarItem;

