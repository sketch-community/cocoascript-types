declare namespace cocoascript {
  /**
   * A stylized rectangular box with an optional title.
   * doc://com.apple.documentation/documentation/appkit/nsbox
   */
  interface NSBox extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429787-borderrect
    borderRect(): cocoascript.NSRect;
    setBorderRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429822-boxtype
    boxType(): cocoascript.NSBoxType;
    setBoxType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429802-bordertype
    borderType(): cocoascript.NSBorderType;
    setBorderType(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429821-transparent
    transparent(): cocoascript.BOOL;
    setTransparent(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429795-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429791-titlefont
    titleFont(): cocoascript.NSFont;
    setTitleFont(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429844-titleposition
    titlePosition(): cocoascript.NSTitlePosition;
    setTitlePosition(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429800-settitlewithmnemonic
    setTitleWithMnemonic(stringWithAmpersand: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429789-titlecell
    titleCell(): cocoascript.id;
    setTitleCell(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429785-titlerect
    titleRect(): cocoascript.NSRect;
    setTitleRect(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429839-bordercolor
    borderColor(): cocoascript.NSColor;
    setBorderColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429831-borderwidth
    borderWidth(): cocoascript.CGFloat;
    setBorderWidth(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429812-cornerradius
    cornerRadius(): cocoascript.CGFloat;
    setCornerRadius(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429797-fillcolor
    fillColor(): cocoascript.NSColor;
    setFillColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429818-contentview
    contentView(): cocoascript.NSView;
    setContentView(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429837-contentviewmargins
    contentViewMargins(): cocoascript.NSSize;
    setContentViewMargins(): void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429816-setframefromcontentframe
    setFrameFromContentFrame(contentFrame: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nsbox/1429826-sizetofit
    sizeToFit():void;
    //
    alloc():cocoascript.NSBox;
    //
    init():cocoascript.NSBox;
  }
}

declare const NSBox: cocoascript.NSBox;
