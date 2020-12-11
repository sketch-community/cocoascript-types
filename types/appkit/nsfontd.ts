declare namespace cocoascript {
  /**
   * The representation of a font in an app.
   * doc://com.apple.documentation/documentation/appkit/nsfont
   */
  interface NSFont extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsfont/1531931-systemfontsize
    systemFontSize(): cocoascript.CGFloat;
    setSystemFontSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1535612-smallsystemfontsize
    smallSystemFontSize(): cocoascript.CGFloat;
    setSmallSystemFontSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1534629-labelfontsize
    labelFontSize(): cocoascript.CGFloat;
    setLabelFontSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1531373-set
    set():void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1534538-setincontext
    setInContext(graphicsContext: cocoascript.NSGraphicsContext):void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1524511-pointsize
    pointSize(): cocoascript.CGFloat;
    setPointSize(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1535912-coveredcharacterset
    coveredCharacterSet(): cocoascript.NSCharacterSet;
    setCoveredCharacterSet(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1530476-fontdescriptor
    fontDescriptor(): cocoascript.NSFontDescriptor;
    setFontDescriptor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1529210-fixedpitch
    fixedPitch(): cocoascript.BOOL;
    setFixedPitch(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1527635-mostcompatiblestringencoding
    mostCompatibleStringEncoding(): cocoascript.NSStringEncoding;
    setMostCompatibleStringEncoding(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1533968-numberofglyphs
    numberOfGlyphs(): cocoascript.NSUInteger;
    setNumberOfGlyphs(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1531660-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1529585-familyname
    familyName(): cocoascript.NSString;
    setFamilyName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1526183-fontname
    fontName(): cocoascript.NSString;
    setFontName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1534644-vertical
    vertical(): cocoascript.BOOL;
    setVertical(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/1535152-verticalfont
    verticalFont(): cocoascript.NSFont;
    setVerticalFont(): void;
    // doc://com.apple.documentation/documentation/appkit/nsantialiasthresholdchangednotification
    NSAntialiasThresholdChangedNotification(): cocoascript.NSNotificationName;
    setNSAntialiasThresholdChangedNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfontsetchangednotification
    NSFontSetChangedNotification(): cocoascript.NSNotificationName;
    setNSFontSetChangedNotification(): void;
    // doc://com.apple.documentation/documentation/appkit/nsfont/3667454-fontwithsize
    fontWithSize(fontSize: cocoascript.CGFloat):cocoascript.NSFont;
    //
    alloc():cocoascript.NSFont;
    //
    init():cocoascript.NSFont;
  }
}

declare const NSFont: cocoascript.NSFont;
