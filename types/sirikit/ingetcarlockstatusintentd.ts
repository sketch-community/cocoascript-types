declare namespace cocoascript {
/**
 * A request to get the lock status of the user’s car.
 * doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintent
 */
interface INGetCarLockStatusIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintent/2799272-initwithcarname
  initWithCarName(carName: cocoascript.INSpeakableString):cocoascript.INGetCarLockStatusIntent;
  // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintent/2799267-carname
  carName(): cocoascript.INSpeakableString;
  setCarName(): void;
  // 
  alloc():cocoascript.INGetCarLockStatusIntent;
  // 
  init():cocoascript.INGetCarLockStatusIntent;
}
}
declare const INGetCarLockStatusIntent: cocoascript.INGetCarLockStatusIntent;

