declare namespace cocoascript {
  /**
   * An object that provides dynamic contextual controls in the Touch Bar of supported models of MacBook Pro.
   * doc://com.apple.documentation/documentation/appkit/nstouchbar
   */
  interface NSTouchBar extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544721-init
    init():cocoascript.NSTouchBar;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544723-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTouchBar;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544666-delegate
    delegate(): cocoascript.NSTouchBarDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2646922-templateitems
    templateItems(): cocoascript.NSTouchBarItem;
    setTemplateItems(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2646921-defaultitemidentifiers
    defaultItemIdentifiers(): cocoascript.NSTouchBarItemIdentifier;
    setDefaultItemIdentifiers(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544871-principalitemidentifier
    principalItemIdentifier(): cocoascript.NSTouchBarItemIdentifier;
    setPrincipalItemIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2787731-escapekeyreplacementitemidentifi
    escapeKeyReplacementItemIdentifier(): cocoascript.NSTouchBarItemIdentifier;
    setEscapeKeyReplacementItemIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544756-visible
    visible(): cocoascript.BOOL;
    setVisible(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544762-itemidentifiers
    itemIdentifiers(): cocoascript.NSTouchBarItemIdentifier;
    setItemIdentifiers(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544806-itemforidentifier
    itemForIdentifier(identifier: cocoascript.NSTouchBarItemIdentifier):cocoascript.NSTouchBarItem;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544730-customizationidentifier
    customizationIdentifier(): cocoascript.NSTouchBarCustomizationIdentifier;
    setCustomizationIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544796-customizationalloweditemidentifi
    customizationAllowedItemIdentifiers(): cocoascript.NSTouchBarItemIdentifier;
    setCustomizationAllowedItemIdentifiers(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/2544675-customizationrequireditemidentif
    customizationRequiredItemIdentifiers(): cocoascript.NSTouchBarItemIdentifier;
    setCustomizationRequiredItemIdentifiers(): void;
    // doc://com.apple.documentation/documentation/appkit/nstouchbar/3228044-automaticcustomizetouchbarmenuit
    automaticCustomizeTouchBarMenuItemEnabled(): cocoascript.BOOL;
    setAutomaticCustomizeTouchBarMenuItemEnabled(): void;
    //
    alloc():cocoascript.NSTouchBar;
    //
    init():cocoascript.NSTouchBar;
  }
}

declare const NSTouchBar: cocoascript.NSTouchBar;
