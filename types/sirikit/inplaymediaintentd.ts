declare namespace cocoascript {
/**
 * An intent that contains information about media playable from your app.
 * doc://com.apple.documentation/documentation/sirikit/inplaymediaintent
 */
interface INPlayMediaIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074271-initwithmediaitems
  initWithMediaItems_mediaContainer_playShuffled_playbackRepeatMode_resumePlayback_playbackQueueLocation_playbackSpeed_mediaSearch(mediaItems: cocoascript.INMediaItem, mediaContainer: cocoascript.INMediaItem, playShuffled: cocoascript.NSNumber, playbackRepeatMode: cocoascript.INPlaybackRepeatMode, resumePlayback: cocoascript.NSNumber, playbackQueueLocation: cocoascript.INPlaybackQueueLocation, playbackSpeed: cocoascript.NSNumber, mediaSearch: cocoascript.INMediaSearch):cocoascript.INPlayMediaIntent;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963013-initwithmediaitems
  initWithMediaItems_mediaContainer_playShuffled_playbackRepeatMode_resumePlayback(mediaItems: cocoascript.INMediaItem, mediaContainer: cocoascript.INMediaItem, playShuffled: cocoascript.NSNumber, playbackRepeatMode: cocoascript.INPlaybackRepeatMode, resumePlayback: cocoascript.NSNumber):cocoascript.INPlayMediaIntent;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963014-mediacontainer
  mediaContainer(): cocoascript.INMediaItem;
  setMediaContainer(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963015-mediaitems
  mediaItems(): cocoascript.INMediaItem;
  setMediaItems(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963016-playshuffled
  playShuffled(): cocoascript.NSNumber;
  setPlayShuffled(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963018-resumeplayback
  resumePlayback(): cocoascript.NSNumber;
  setResumePlayback(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963017-playbackrepeatmode
  playbackRepeatMode(): cocoascript.INPlaybackRepeatMode;
  setPlaybackRepeatMode(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074274-playbackspeed
  playbackSpeed(): cocoascript.NSNumber;
  setPlaybackSpeed(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074273-playbackqueuelocation
  playbackQueueLocation(): cocoascript.INPlaybackQueueLocation;
  setPlaybackQueueLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074272-mediasearch
  mediaSearch(): cocoascript.INMediaSearch;
  setMediaSearch(): void;
  // 
  alloc():cocoascript.INPlayMediaIntent;
  // 
  init():cocoascript.INPlayMediaIntent;
}
}
declare const INPlayMediaIntent: cocoascript.INPlayMediaIntent;

