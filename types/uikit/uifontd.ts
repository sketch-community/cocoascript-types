declare namespace cocoascript {
  /**
   * A font object.
   * doc://com.apple.documentation/documentation/uikit/uifont
   */
  interface UIFont extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uifont/1619032-fontwithsize
    fontWithSize(fontSize: cocoascript.CGFloat):cocoascript.UIFont;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619040-familynames
    familyNames(): cocoascript.NSString;
    setFamilyNames(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619033-familyname
    familyName(): cocoascript.NSString;
    setFamilyName(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619024-fontname
    fontName(): cocoascript.NSString;
    setFontName(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619031-pointsize
    pointSize(): cocoascript.CGFloat;
    setPointSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619034-ascender
    ascender(): cocoascript.CGFloat;
    setAscender(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619036-descender
    descender(): cocoascript.CGFloat;
    setDescender(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619026-leading
    leading(): cocoascript.CGFloat;
    setLeading(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619035-capheight
    capHeight(): cocoascript.CGFloat;
    setCapHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619028-xheight
    xHeight(): cocoascript.CGFloat;
    setXHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619038-lineheight
    lineHeight(): cocoascript.CGFloat;
    setLineHeight(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1623398-labelfontsize
    labelFontSize(): cocoascript.CGFloat;
    setLabelFontSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1623410-buttonfontsize
    buttonFontSize(): cocoascript.CGFloat;
    setButtonFontSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1623399-smallsystemfontsize
    smallSystemFontSize(): cocoascript.CGFloat;
    setSmallSystemFontSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1623395-systemfontsize
    systemFontSize(): cocoascript.CGFloat;
    setSystemFontSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/1619037-fontdescriptor
    fontDescriptor(): cocoascript.UIFontDescriptor;
    setFontDescriptor(): void;
    // doc://com.apple.documentation/documentation/uikit/uifont/3255206-ek_defaultoccurrencesecondarytex
    ek_defaultOccurrenceSecondaryTextFont(): cocoascript.UIFont;
    setEk_defaultOccurrenceSecondaryTextFont(): void;
    //
    alloc():cocoascript.UIFont;
    //
    init():cocoascript.UIFont;
  }
}

declare const UIFont: cocoascript.UIFont;
