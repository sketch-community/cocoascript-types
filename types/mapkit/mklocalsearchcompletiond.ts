declare namespace cocoascript {
  /**
   * A fully-formed string that completes a partial string.
   * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion
   */
  interface MKLocalSearchCompletion extends NSObject {
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452455-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452566-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1451935-titlehighlightranges
    titleHighlightRanges(): cocoascript.NSValue;
    setTitleHighlightRanges(): void;
    // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompletion/1452489-subtitlehighlightranges
    subtitleHighlightRanges(): cocoascript.NSValue;
    setSubtitleHighlightRanges(): void;
    //
    alloc():cocoascript.MKLocalSearchCompletion;
    //
    init():cocoascript.MKLocalSearchCompletion;
  }
}

declare const MKLocalSearchCompletion: cocoascript.MKLocalSearchCompletion;
