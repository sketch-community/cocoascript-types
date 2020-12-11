declare namespace cocoascript {
  /**
   * A graphics renderer for creating PDFs.
   * doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderer
   */
  interface UIGraphicsPDFRenderer extends UIGraphicsRenderer {
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderer/1649127-initwithbounds
    initWithBounds_format(bounds: cocoascript.CGRect, format: cocoascript.UIGraphicsPDFRendererFormat):cocoascript.UIGraphicsPDFRenderer;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderer/1649120-pdfdatawithactions
    PDFDataWithActions(actions: cocoascript.UIGraphicsPDFDrawingActions):cocoascript.NSData;
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrenderer/1649119-writepdftourl
    writePDFToURL_withActions_error(url: cocoascript.NSURL, actions: cocoascript.UIGraphicsPDFDrawingActions, error: cocoascript._Nullable):cocoascript.BOOL;
    //
    alloc():cocoascript.UIGraphicsPDFRenderer;
    //
    init():cocoascript.UIGraphicsPDFRenderer;
  }
}

declare const UIGraphicsPDFRenderer: cocoascript.UIGraphicsPDFRenderer;
