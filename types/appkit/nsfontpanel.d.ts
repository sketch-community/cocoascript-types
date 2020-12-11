declare namespace cocoascript {
  /**
   * The Font panel—a user interface object that displays a list of available fonts, letting the user preview them and change the font used to display text.
   * doc://com.apple.documentation/documentation/appkit/nsfontpanel
   */
  interface NSFontPanel extends NSPanel {
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1527046-sharedfontpanel
    sharedFontPanel(): cocoascript.NSFontPanel;
    setSharedFontPanel(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1524657-sharedfontpanelexists
    sharedFontPanelExists(): cocoascript.BOOL;
    setSharedFontPanelExists(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1526041-enabled
    enabled(): cocoascript.BOOL;
    setEnabled(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1535396-reloaddefaultfontfamilies
    reloadDefaultFontFamilies():void;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1532648-setpanelfont
    setPanelFont_isMultiple(fontObj: cocoascript.NSFont, flag: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1535338-panelconvertfont
    panelConvertFont(fontObj: cocoascript.NSFont):cocoascript.NSFont;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1529532-workswhenmodal
    worksWhenModal(): cocoascript.BOOL;
    setWorksWhenModal(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontpanel/1535927-accessoryview
    accessoryView(): cocoascript.NSView;
    setAccessoryView(): void;
    //
    alloc():cocoascript.NSFontPanel;
    //
    init():cocoascript.NSFontPanel;
  }
}

declare const NSFontPanel: cocoascript.NSFontPanel;
