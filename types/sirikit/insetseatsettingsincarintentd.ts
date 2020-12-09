declare namespace cocoascript {
/**
 * A request to change the seat-related settings in a CarPlay-enabled vehicle.
 * doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent
 */
interface INSetSeatSettingsInCarIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/3019578-initwithenableheating
  initWithEnableHeating_enableCooling_enableMassage_seat_level_relativeLevelSetting_carName(enableHeating: cocoascript.NSNumber, enableCooling: cocoascript.NSNumber, enableMassage: cocoascript.NSNumber, seat: cocoascript.INCarSeat, level: cocoascript.NSNumber, relativeLevelSetting: cocoascript.INRelativeSetting, carName: cocoascript.INSpeakableString):cocoascript.INSetSeatSettingsInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102622-initwithenableheating
  initWithEnableHeating_enableCooling_enableMassage_seat_level_relativeLevelSetting(enableHeating: cocoascript.NSNumber, enableCooling: cocoascript.NSNumber, enableMassage: cocoascript.NSNumber, seat: cocoascript.INCarSeat, level: cocoascript.NSNumber, relativeLevelSetting: cocoascript.INRelativeSetting):cocoascript.INSetSeatSettingsInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102630-seat
  seat(): cocoascript.INCarSeat;
  setSeat(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102617-enablecooling
  enableCooling(): cocoascript.NSNumber;
  setEnableCooling(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102618-enableheating
  enableHeating(): cocoascript.NSNumber;
  setEnableHeating(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102629-enablemassage
  enableMassage(): cocoascript.NSNumber;
  setEnableMassage(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102620-level
  level(): cocoascript.NSNumber;
  setLevel(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102626-relativelevelsetting
  relativeLevelSetting(): cocoascript.INRelativeSetting;
  setRelativeLevelSetting(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/3019577-carname
  carName(): cocoascript.INSpeakableString;
  setCarName(): void;
  // 
  alloc():cocoascript.INSetSeatSettingsInCarIntent;
  // 
  init():cocoascript.INSetSeatSettingsInCarIntent;
}
}
declare const INSetSeatSettingsInCarIntent: cocoascript.INSetSeatSettingsInCarIntent;

