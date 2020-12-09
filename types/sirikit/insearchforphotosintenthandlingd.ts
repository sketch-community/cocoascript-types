declare namespace cocoascript {
/**
 * The handler interface for searching the user’s photos.
 * doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling
 */
interface INSearchForPhotosIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902404-resolvedatecreatedforsearchforph
  resolveDateCreatedForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902403-resolvelocationcreatedforsearchf
  resolveLocationCreatedForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902402-resolvepeopleinphotoforsearchfor
  resolvePeopleInPhotoForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INPersonResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902399-resolvealbumnameforsearchforphot
  resolveAlbumNameForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902398-resolvesearchtermsforsearchforph
  resolveSearchTermsForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1638989-confirmsearchforphotos
  confirmSearchForPhotos_completion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INSearchForPhotosIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1638466-handlesearchforphotos
  handleSearchForPhotos_completion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INSearchForPhotosIntentResponse):void;
}
}

