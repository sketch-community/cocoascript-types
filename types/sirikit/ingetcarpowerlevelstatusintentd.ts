declare namespace cocoascript {
/**
 * A request for the current power level of the user’s car.
 * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintent
 */
interface INGetCarPowerLevelStatusIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintent/2799243-initwithcarname
  initWithCarName(carName: cocoascript.INSpeakableString):cocoascript.INGetCarPowerLevelStatusIntent;
  // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintent/2799245-carname
  carName(): cocoascript.INSpeakableString;
  setCarName(): void;
  // 
  alloc():cocoascript.INGetCarPowerLevelStatusIntent;
  // 
  init():cocoascript.INGetCarPowerLevelStatusIntent;
}
}
declare const INGetCarPowerLevelStatusIntent: cocoascript.INGetCarPowerLevelStatusIntent;

