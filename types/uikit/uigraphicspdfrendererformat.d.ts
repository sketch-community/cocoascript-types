declare namespace cocoascript {
  /**
   * A set of drawing attributes that represents the configuration of a PDF renderer context.
   * doc://com.apple.documentation/documentation/uikit/uigraphicspdfrendererformat
   */
  interface UIGraphicsPDFRendererFormat extends UIGraphicsRendererFormat {
    // doc://com.apple.documentation/documentation/uikit/uigraphicspdfrendererformat/1649130-documentinfo
    documentInfo(): cocoascript.id;
    setDocumentInfo(): void;
    //
    alloc():cocoascript.UIGraphicsPDFRendererFormat;
    //
    init():cocoascript.UIGraphicsPDFRendererFormat;
  }
}

declare const UIGraphicsPDFRendererFormat: cocoascript.UIGraphicsPDFRendererFormat;
