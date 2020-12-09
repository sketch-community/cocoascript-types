declare namespace cocoascript {
/**
 * The handler interface for saving vehicle environment settings to a user-specified profile.
 * doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling
 */
interface INSaveProfileInCarIntentHandling extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2102341-resolveprofilenumberforsaveprofi
  resolveProfileNumberForSaveProfileInCar_withCompletion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2727144-resolveprofilenameforsaveprofile
  resolveProfileNameForSaveProfileInCar_withCompletion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INStringResolutionResult):void;
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2102344-confirmsaveprofileincar
  confirmSaveProfileInCar_completion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INSaveProfileInCarIntentResponse):void;
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2102342-handlesaveprofileincar
  handleSaveProfileInCar_completion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INSaveProfileInCarIntentResponse):void;
}
}

