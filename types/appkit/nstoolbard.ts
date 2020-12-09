declare namespace cocoascript {
/**
 * An object that manages the space immediately below a window's title bar and above your app's custom content. 
 * doc://com.apple.documentation/documentation/appkit/nstoolbar
 */
interface NSToolbar extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516975-initwithidentifier
  initWithIdentifier(identifier: cocoascript.NSToolbarIdentifier):cocoascript.NSToolbar;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/2873241-init
  init():cocoascript.NSToolbar;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516939-delegate
  delegate(): cocoascript.NSToolbarDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516953-identifier
  identifier(): cocoascript.NSToolbarIdentifier;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516937-displaymode
  displayMode(): cocoascript.NSToolbarDisplayMode;
  setDisplayMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516954-showsbaselineseparator
  showsBaselineSeparator(): cocoascript.BOOL;
  setShowsBaselineSeparator(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516962-allowsusercustomization
  allowsUserCustomization(): cocoascript.BOOL;
  setAllowsUserCustomization(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1517005-allowsextensionitems
  allowsExtensionItems(): cocoascript.BOOL;
  setAllowsExtensionItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516946-items
  items(): cocoascript.NSToolbarItem;
  setItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516993-visibleitems
  visibleItems(): cocoascript.NSToolbarItem;
  setVisibleItems(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516966-sizemode
  sizeMode(): cocoascript.NSToolbarSizeMode;
  setSizeMode(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516941-insertitemwithitemidentifier
  insertItemWithItemIdentifier_atIndex(itemIdentifier: cocoascript.NSToolbarItemIdentifier, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516980-removeitematindex
  removeItemAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516999-selecteditemidentifier
  selectedItemIdentifier(): cocoascript.NSToolbarItemIdentifier;
  setSelectedItemIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/2967178-centereditemidentifier
  centeredItemIdentifier(): cocoascript.NSToolbarItemIdentifier;
  setCenteredItemIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516935-visible
  visible(): cocoascript.BOOL;
  setVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516979-runcustomizationpalette
  runCustomizationPalette(sender: cocoascript.NSToolbar):void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516987-customizationpaletteisrunning
  customizationPaletteIsRunning(): cocoascript.BOOL;
  setCustomizationPaletteIsRunning(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516991-fullscreenaccessoryview
  fullScreenAccessoryView(): cocoascript.NSView;
  setFullScreenAccessoryView(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516989-fullscreenaccessoryviewmaxheight
  fullScreenAccessoryViewMaxHeight(): cocoascript.CGFloat;
  setFullScreenAccessoryViewMaxHeight(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516977-fullscreenaccessoryviewminheight
  fullScreenAccessoryViewMinHeight(): cocoascript.CGFloat;
  setFullScreenAccessoryViewMinHeight(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516992-autosavesconfiguration
  autosavesConfiguration(): cocoascript.BOOL;
  setAutosavesConfiguration(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516956-configurationdictionary
  configurationDictionary(): cocoascript.id;
  setConfigurationDictionary(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516951-setconfigurationfromdictionary
  setConfigurationFromDictionary(configDict: cocoascript.NSToolbar):void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbar/1516947-validatevisibleitems
  validateVisibleItems():void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbardidremoveitemnotification
  NSToolbarDidRemoveItemNotification(): cocoascript.NSNotificationName;
  setNSToolbarDidRemoveItemNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nstoolbarwilladditemnotification
  NSToolbarWillAddItemNotification(): cocoascript.NSNotificationName;
  setNSToolbarWillAddItemNotification(): void;
  // 
  alloc():cocoascript.NSToolbar;
  // 
  init():cocoascript.NSToolbar;
}
}
declare const NSToolbar: cocoascript.NSToolbar;

