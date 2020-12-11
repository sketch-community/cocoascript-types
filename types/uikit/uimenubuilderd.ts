declare namespace cocoascript {
  /**
   * An interface for adding and removing menus from a menu system.
   * doc://com.apple.documentation/documentation/uikit/uimenubuilder
   */
  interface UIMenuBuilder {
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327311-system
    system(): cocoascript.UIMenuSystem;
    setSystem(): void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327307-menuforidentifier
    menuForIdentifier(identifier: cocoascript.UIMenuIdentifier):cocoascript.UIMenu;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3335198-actionforidentifier
    actionForIdentifier(identifier: cocoascript.UIActionIdentifier):cocoascript.UIAction;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327335-commandforaction
    commandForAction_propertyList(action: cocoascript.SEL, propertyList: cocoascript.UIMenuBuilder):cocoascript.UICommand;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327304-insertchildmenu
    insertChildMenu_atStartOfMenuForIdentifier(childMenu: cocoascript.UIMenu, parentIdentifier: cocoascript.UIMenuIdentifier):void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327303-insertchildmenu
    insertChildMenu_atEndOfMenuForIdentifier(childMenu: cocoascript.UIMenu, parentIdentifier: cocoascript.UIMenuIdentifier):void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327306-insertsiblingmenu
    insertSiblingMenu_beforeMenuForIdentifier(siblingMenu: cocoascript.UIMenu, siblingIdentifier: cocoascript.UIMenuIdentifier):void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327305-insertsiblingmenu
    insertSiblingMenu_afterMenuForIdentifier(siblingMenu: cocoascript.UIMenu, siblingIdentifier: cocoascript.UIMenuIdentifier):void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327309-replacemenuforidentifier
    replaceMenuForIdentifier_withMenu(replacedIdentifier: cocoascript.UIMenuIdentifier, replacementMenu: cocoascript.UIMenu):void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327310-replacechildrenofmenuforidentifi
    replaceChildrenOfMenuForIdentifier_fromChildrenBlock(parentIdentifier: cocoascript.UIMenuIdentifier, childrenBlock: cocoascript.UIMenuElement):void;
    // doc://com.apple.documentation/documentation/uikit/uimenubuilder/3327308-removemenuforidentifier
    removeMenuForIdentifier(removedIdentifier: cocoascript.UIMenuIdentifier):void;
  }
}
