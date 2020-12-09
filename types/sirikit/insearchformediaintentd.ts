declare namespace cocoascript {
/**
 * A request to search for a media item.
 * doc://com.apple.documentation/documentation/sirikit/insearchformediaintent
 */
interface INSearchForMediaIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintent/3180152-initwithmediaitems
  initWithMediaItems_mediaSearch(mediaItems: cocoascript.INMediaItem, mediaSearch: cocoascript.INMediaSearch):cocoascript.INSearchForMediaIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintent/3180153-mediaitems
  mediaItems(): cocoascript.INMediaItem;
  setMediaItems(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintent/3074295-mediasearch
  mediaSearch(): cocoascript.INMediaSearch;
  setMediaSearch(): void;
  // 
  alloc():cocoascript.INSearchForMediaIntent;
  // 
  init():cocoascript.INSearchForMediaIntent;
}
}
declare const INSearchForMediaIntent: cocoascript.INSearchForMediaIntent;

