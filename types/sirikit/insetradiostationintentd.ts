declare namespace cocoascript {
/**
 * A request to change the current radio station.
 * doc://com.apple.documentation/documentation/sirikit/insetradiostationintent
 */
interface INSetRadioStationIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1778276-initwithradiotype
  initWithRadioType_frequency_stationName_channel_presetNumber(radioType: cocoascript.INRadioType, frequency: cocoascript.NSNumber, stationName: cocoascript.NSString, channel: cocoascript.NSString, presetNumber: cocoascript.NSNumber):cocoascript.INSetRadioStationIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649472-radiotype
  radioType(): cocoascript.INRadioType;
  setRadioType(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649482-frequency
  frequency(): cocoascript.NSNumber;
  setFrequency(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649478-stationname
  stationName(): cocoascript.NSString;
  setStationName(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1778274-channel
  channel(): cocoascript.NSString;
  setChannel(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649476-presetnumber
  presetNumber(): cocoascript.NSNumber;
  setPresetNumber(): void;
  // 
  alloc():cocoascript.INSetRadioStationIntent;
  // 
  init():cocoascript.INSetRadioStationIntent;
}
}
declare const INSetRadioStationIntent: cocoascript.INSetRadioStationIntent;

