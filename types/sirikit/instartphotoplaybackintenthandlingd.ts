declare namespace cocoascript {
/**
 * The handler interface for searching the user’s photos and the playback of the results.
 * doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling
 */
interface INStartPhotoPlaybackIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906888-resolvedatecreatedforstartphotop
  resolveDateCreatedForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906891-resolvelocationcreatedforstartph
  resolveLocationCreatedForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906887-resolvepeopleinphotoforstartphot
  resolvePeopleInPhotoForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INPersonResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906885-resolvealbumnameforstartphotopla
  resolveAlbumNameForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1638847-confirmstartphotoplayback
  confirmStartPhotoPlayback_completion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INStartPhotoPlaybackIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1638162-handlestartphotoplayback
  handleStartPhotoPlayback_completion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INStartPhotoPlaybackIntentResponse):void;
}
}

