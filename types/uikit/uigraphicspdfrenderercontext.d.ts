declare namespace cocoascript {
  /**
   * The drawing environment for a PDF renderer.
   * doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext
   */
  interface UIGraphicsPDFRendererContext extends UIGraphicsRendererContext {
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext/1649124-beginpage
    beginPage():void;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext/1649126-beginpagewithbounds
    beginPageWithBounds_pageInfo(bounds: cocoascript.CGRect, pageInfo: cocoascript.UIGraphicsPDFRendererContext):void;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext/1649122-pdfcontextbounds
    pdfContextBounds(): cocoascript.CGRect;
    setPdfContextBounds(): void;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext/1649128-adddestinationwithname
    addDestinationWithName_atPoint(name: cocoascript.NSString, point: cocoascript.CGPoint):void;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext/1649118-setdestinationwithname
    setDestinationWithName_forRect(name: cocoascript.NSString, rect: cocoascript.CGRect):void;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderercontext/1649125-seturl
    setURL_forRect(url: cocoascript.NSURL, rect: cocoascript.CGRect):void;
    //
    alloc():cocoascript.UIGraphicsPDFRendererContext;
    //
    init():cocoascript.UIGraphicsPDFRendererContext;
  }
}

declare const UIGraphicsPDFRendererContext: cocoascript.UIGraphicsPDFRendererContext;
