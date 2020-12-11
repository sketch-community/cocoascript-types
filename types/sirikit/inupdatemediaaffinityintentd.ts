declare namespace cocoascript {
  /**
   * A request to update the user’s affinity for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent
   */
  interface INUpdateMediaAffinityIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074314-initwithmediaitems
    initWithMediaItems_mediaSearch_affinityType(mediaItems: cocoascript.INMediaItem, mediaSearch: cocoascript.INMediaSearch, affinityType: cocoascript.INMediaAffinityType):cocoascript.INUpdateMediaAffinityIntent;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074313-affinitytype
    affinityType(): cocoascript.INMediaAffinityType;
    setAffinityType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074315-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074316-mediasearch
    mediaSearch(): cocoascript.INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():cocoascript.INUpdateMediaAffinityIntent;
    //
    init():cocoascript.INUpdateMediaAffinityIntent;
  }
}

declare const INUpdateMediaAffinityIntent: cocoascript.INUpdateMediaAffinityIntent;
