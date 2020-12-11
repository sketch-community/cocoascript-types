declare namespace cocoascript {
  /**
   * A layer that provides simple text layout and rendering of plain or attributed strings.
   * doc://com.apple.documentation/documentation/quartzcore/catextlayer
   */
  interface CATextLayer extends CALayer {
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515295-string
    string(): cocoascript.id;
    setString(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515303-font
    font(): cocoascript.CFTypeRef;
    setFont(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515290-fontsize
    fontSize(): cocoascript.CGFloat;
    setFontSize(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515305-foregroundcolor
    foregroundColor(): cocoascript.CGColorRef;
    setForegroundColor(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515300-allowsfontsubpixelquantization
    allowsFontSubpixelQuantization(): cocoascript.BOOL;
    setAllowsFontSubpixelQuantization(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515302-wrapped
    wrapped(): cocoascript.BOOL;
    setWrapped(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515301-alignmentmode
    alignmentMode(): cocoascript.CATextLayerAlignmentMode;
    setAlignmentMode(): void;
    // doc://com.apple.documentation/documentation/quartzcore/catextlayer/1515296-truncationmode
    truncationMode(): cocoascript.CATextLayerTruncationMode;
    setTruncationMode(): void;
    //
    alloc():cocoascript.CATextLayer;
    //
    init():cocoascript.CATextLayer;
  }
}

declare const CATextLayer: cocoascript.CATextLayer;
