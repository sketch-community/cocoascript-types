declare namespace cocoascript {
  /**
   * A request to add a media item.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediaintent
   */
  interface INAddMediaIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074185-initwithmediaitems
    initWithMediaItems_mediaSearch_mediaDestination(mediaItems: cocoascript.INMediaItem, mediaSearch: cocoascript.INMediaSearch, mediaDestination: cocoascript.INMediaDestination):cocoascript.INAddMediaIntent;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074187-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074188-mediasearch
    mediaSearch(): cocoascript.INMediaSearch;
    setMediaSearch(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074186-mediadestination
    mediaDestination(): cocoascript.INMediaDestination;
    setMediaDestination(): void;
    //
    alloc():cocoascript.INAddMediaIntent;
    //
    init():cocoascript.INAddMediaIntent;
  }
}

declare const INAddMediaIntent: cocoascript.INAddMediaIntent;
