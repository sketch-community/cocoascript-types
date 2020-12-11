declare namespace cocoascript {
  /**
   * A command item in an app menu.
   * doc://com.apple.documentation/documentation/appkit/nsmenuitem
   */
  interface NSMenuItem extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514858-initwithtitle
    initWithTitle_action_keyEquivalent(string: cocoascript.NSString, selector: cocoascript.SEL, charCode: cocoascript.NSString):cocoascript.NSMenuItem;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514863-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514846-hidden
    hidden(): cocoascript.BOOL;
    setHidden(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514832-hiddenorhashiddenancestor
    hiddenOrHasHiddenAncestor(): cocoascript.BOOL;
    setHiddenOrHasHiddenAncestor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514843-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514825-action
    action(): cocoascript.SEL;
    setAction(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514805-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514860-attributedtitle
    attributedTitle(): cocoascript.NSAttributedString;
    setAttributedTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514840-tag
    tag(): cocoascript.NSInteger;
    setTag(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514804-state
    state(): cocoascript.NSControlStateValue;
    setState(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514819-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514861-onstateimage
    onStateImage(): cocoascript.NSImage;
    setOnStateImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514821-offstateimage
    offStateImage(): cocoascript.NSImage;
    setOffStateImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514827-mixedstateimage
    mixedStateImage(): cocoascript.NSImage;
    setMixedStateImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514845-submenu
    submenu(): cocoascript.NSMenu;
    setSubmenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514817-hassubmenu
    hasSubmenu(): cocoascript.BOOL;
    setHasSubmenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514813-parentitem
    parentItem(): cocoascript.NSMenuItem;
    setParentItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514837-separatoritem
    separatorItem(): cocoascript.BOOL;
    setSeparatorItem(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514830-menu
    menu(): cocoascript.NSMenu;
    setMenu(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514842-keyequivalent
    keyEquivalent(): cocoascript.NSString;
    setKeyEquivalent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514815-keyequivalentmodifiermask
    keyEquivalentModifierMask(): cocoascript.NSEventModifierFlags;
    setKeyEquivalentModifierMask(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514829-setmnemoniclocation
    setMnemonicLocation(location: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514803-mnemoniclocation
    mnemonicLocation():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514851-settitlewithmnemonic
    setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514852-mnemonic
    mnemonic():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514811-usesuserkeyequivalents
    usesUserKeyEquivalents(): cocoascript.BOOL;
    setUsesUserKeyEquivalents(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514850-userkeyequivalent
    userKeyEquivalent(): cocoascript.NSString;
    setUserKeyEquivalent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514823-alternate
    alternate(): cocoascript.BOOL;
    setAlternate(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514809-indentationlevel
    indentationLevel(): cocoascript.NSInteger;
    setIndentationLevel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514848-tooltip
    toolTip(): cocoascript.NSString;
    setToolTip(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514834-representedobject
    representedObject(): cocoascript.id;
    setRepresentedObject(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514835-view
    view(): cocoascript.NSView;
    setView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1514856-highlighted
    highlighted(): cocoascript.BOOL;
    setHighlighted(): void;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/1644728-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMenuItem;
    // doc://com.apple.documentation/documentation/appkit/nsmenuitem/2880316-allowskeyequivalentwhenhidden
    allowsKeyEquivalentWhenHidden(): cocoascript.BOOL;
    setAllowsKeyEquivalentWhenHidden(): void;
    //
    alloc():cocoascript.NSMenuItem;
    //
    init():cocoascript.NSMenuItem;
  }
}

declare const NSMenuItem: cocoascript.NSMenuItem;
