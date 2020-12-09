declare namespace cocoascript {
/**
 * A request to change the defroster settings in a CarPlay-enabled vehicle.
 * doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent
 */
interface INSetDefrosterSettingsInCarIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/3019572-initwithenable
  initWithEnable_defroster_carName(enable: cocoascript.NSNumber, defroster: cocoascript.INCarDefroster, carName: cocoascript.INSpeakableString):cocoascript.INSetDefrosterSettingsInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/1649426-initwithenable
  initWithEnable_defroster(enable: cocoascript.NSNumber, defroster: cocoascript.INCarDefroster):cocoascript.INSetDefrosterSettingsInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/1649424-enable
  enable(): cocoascript.NSNumber;
  setEnable(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/1649428-defroster
  defroster(): cocoascript.INCarDefroster;
  setDefroster(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/3019571-carname
  carName(): cocoascript.INSpeakableString;
  setCarName(): void;
  // 
  alloc():cocoascript.INSetDefrosterSettingsInCarIntent;
  // 
  init():cocoascript.INSetDefrosterSettingsInCarIntent;
}
}
declare const INSetDefrosterSettingsInCarIntent: cocoascript.INSetDefrosterSettingsInCarIntent;

