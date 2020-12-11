declare namespace cocoascript {
  /**
   * An annotation view that displays a balloon-shaped marker at the designated location.
   * doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview
   */
  interface MKMarkerAnnotationView extends MKAnnotationView {
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873822-markertintcolor
    markerTintColor(): cocoascript.UIColor;
    setMarkerTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873817-glyphtext
    glyphText(): cocoascript.NSString;
    setGlyphText(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873823-glyphimage
    glyphImage(): cocoascript.UIImage;
    setGlyphImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873824-glyphtintcolor
    glyphTintColor(): cocoascript.UIColor;
    setGlyphTintColor(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873815-selectedglyphimage
    selectedGlyphImage(): cocoascript.UIImage;
    setSelectedGlyphImage(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873816-titlevisibility
    titleVisibility(): cocoascript.MKFeatureVisibility;
    setTitleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873813-subtitlevisibility
    subtitleVisibility(): cocoascript.MKFeatureVisibility;
    setSubtitleVisibility(): void;
    // doc://com.apple.documentation/documentation/mapkit/mkmarkerannotationview/2873821-animateswhenadded
    animatesWhenAdded(): cocoascript.BOOL;
    setAnimatesWhenAdded(): void;
    //
    alloc():cocoascript.MKMarkerAnnotationView;
    //
    init():cocoascript.MKMarkerAnnotationView;
  }
}

declare const MKMarkerAnnotationView: cocoascript.MKMarkerAnnotationView;
