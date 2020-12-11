declare namespace cocoascript {
  /**
   * A printer on the network.
   * doc://com.apple.documentation/documentation/uikit/uiprinter
   */
  interface UIPrinter extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620440-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620427-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620426-displaylocation
    displayLocation(): cocoascript.NSString;
    setDisplayLocation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620438-makeandmodel
    makeAndModel(): cocoascript.NSString;
    setMakeAndModel(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620436-supportedjobtypes
    supportedJobTypes(): cocoascript.UIPrinterJobTypes;
    setSupportedJobTypes(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620429-supportscolor
    supportsColor(): cocoascript.BOOL;
    setSupportsColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620434-supportsduplex
    supportsDuplex(): cocoascript.BOOL;
    setSupportsDuplex(): void;
    // doc://com.apple.documentation/documentation/uikit/uiprinter/1620431-contactprinter
    contactPrinter(completionHandler: cocoascript.BOOL):void;
    //
    alloc():cocoascript.UIPrinter;
    //
    init():cocoascript.UIPrinter;
  }
}

declare const UIPrinter: cocoascript.UIPrinter;
