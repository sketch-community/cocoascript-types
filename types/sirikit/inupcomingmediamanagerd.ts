declare namespace cocoascript {
/**
 * The manager object you use to suggest media to the user.
 * doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager
 */
interface INUpcomingMediaManager extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager/2963079-sharedmanager
  sharedManager(): cocoascript.INUpcomingMediaManager;
  setSharedManager(): void;
  // doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager/2963078-setsuggestedmediaintents
  setSuggestedMediaIntents(intents: cocoascript.INPlayMediaIntent):void;
  // doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager/2980695-setpredictionmode
  setPredictionMode_forType(mode: cocoascript.INUpcomingMediaPredictionMode, type: cocoascript.INMediaItemType):void;
  // 
  alloc():cocoascript.INUpcomingMediaManager;
  // 
  init():cocoascript.INUpcomingMediaManager;
}
}
declare const INUpcomingMediaManager: cocoascript.INUpcomingMediaManager;

