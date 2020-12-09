declare namespace cocoascript {
/**
 * The interface for providing updates of a vehicle’s power level.
 * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponseobserver
 */
interface INGetCarPowerLevelStatusIntentResponseObserver extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponseobserver/3552169-getcarpowerlevelstatusresponsedi
  getCarPowerLevelStatusResponseDidUpdate(response: cocoascript.INGetCarPowerLevelStatusIntentResponse):void;
}
}

