declare namespace cocoascript {
  /**
   * An object that manages standard appearance attributes for UI elements in an app.
   * doc://com.apple.documentation/documentation/appkit/nsappearance
   */
  interface NSAppearance extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsappearance/1529131-initwithappearancenamed
    initWithAppearanceNamed_bundle(name: cocoascript.NSAppearanceName, bundle: cocoascript.NSBundle):cocoascript.NSAppearance;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/2269729-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSAppearance;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/1528677-name
    name(): cocoascript.NSAppearanceName;
    setName(): void;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/2980972-bestmatchfromappearanceswithname
    bestMatchFromAppearancesWithNames(appearances: cocoascript.NSAppearanceName):cocoascript.NSAppearanceName;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/1531945-currentappearance
    currentAppearance(): cocoascript.NSAppearance;
    setCurrentAppearance(): void;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/1524694-allowsvibrancy
    allowsVibrancy(): cocoascript.BOOL;
    setAllowsVibrancy(): void;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/3674524-currentdrawingappearance
    currentDrawingAppearance(): cocoascript.NSAppearance;
    setCurrentDrawingAppearance(): void;
    // doc://com.apple.documentation/documentation/appkit/nsappearance/3674525-performascurrentdrawingappearanc
    performAsCurrentDrawingAppearance(block: void):void;
    //
    alloc():cocoascript.NSAppearance;
    //
    init():cocoascript.NSAppearance;
  }
}

declare const NSAppearance: cocoascript.NSAppearance;
