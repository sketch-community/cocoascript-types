declare namespace cocoascript {
  /**
   * A request to change the climate settings in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent
   */
  interface INSetClimateSettingsInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/3019569-initwithenablefan
    initWithEnableFan_enableAirConditioner_enableClimateControl_enableAutoMode_airCirculationMode_fanSpeedIndex_fanSpeedPercentage_relativeFanSpeedSetting_temperature_relativeTemperatureSetting_climateZone_carName(enableFan: cocoascript.NSNumber, enableAirConditioner: cocoascript.NSNumber, enableClimateControl: cocoascript.NSNumber, enableAutoMode: cocoascript.NSNumber, airCirculationMode: cocoascript.INCarAirCirculationMode, fanSpeedIndex: cocoascript.NSNumber, fanSpeedPercentage: cocoascript.NSNumber, relativeFanSpeedSetting: cocoascript.INRelativeSetting, temperature: cocoascript.NSUnitTemperature, relativeTemperatureSetting: cocoascript.INRelativeSetting, climateZone: cocoascript.INCarSeat, carName: cocoascript.INSpeakableString):cocoascript.INSetClimateSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/2102611-initwithenablefan
    initWithEnableFan_enableAirConditioner_enableClimateControl_enableAutoMode_airCirculationMode_fanSpeedIndex_fanSpeedPercentage_relativeFanSpeedSetting_temperature_relativeTemperatureSetting_climateZone(enableFan: cocoascript.NSNumber, enableAirConditioner: cocoascript.NSNumber, enableClimateControl: cocoascript.NSNumber, enableAutoMode: cocoascript.NSNumber, airCirculationMode: cocoascript.INCarAirCirculationMode, fanSpeedIndex: cocoascript.NSNumber, fanSpeedPercentage: cocoascript.NSNumber, relativeFanSpeedSetting: cocoascript.INRelativeSetting, temperature: cocoascript.NSUnitTemperature, relativeTemperatureSetting: cocoascript.INRelativeSetting, climateZone: cocoascript.INCarSeat):cocoascript.INSetClimateSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/3019568-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649067-enableclimatecontrol
    enableClimateControl(): cocoascript.NSNumber;
    setEnableClimateControl(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649057-enableautomode
    enableAutoMode(): cocoascript.NSNumber;
    setEnableAutoMode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649051-aircirculationmode
    airCirculationMode(): cocoascript.INCarAirCirculationMode;
    setAirCirculationMode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649061-temperature
    temperature(): cocoascript.NSUnitTemperature;
    setTemperature(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649052-relativetemperaturesetting
    relativeTemperatureSetting(): cocoascript.INRelativeSetting;
    setRelativeTemperatureSetting(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/2102612-climatezone
    climateZone(): cocoascript.INCarSeat;
    setClimateZone(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649073-enablefan
    enableFan(): cocoascript.NSNumber;
    setEnableFan(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649072-fanspeedindex
    fanSpeedIndex(): cocoascript.NSNumber;
    setFanSpeedIndex(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649064-fanspeedpercentage
    fanSpeedPercentage(): cocoascript.NSNumber;
    setFanSpeedPercentage(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649063-relativefanspeedsetting
    relativeFanSpeedSetting(): cocoascript.INRelativeSetting;
    setRelativeFanSpeedSetting(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649054-enableairconditioner
    enableAirConditioner(): cocoascript.NSNumber;
    setEnableAirConditioner(): void;
    //
    alloc():cocoascript.INSetClimateSettingsInCarIntent;
    //
    init():cocoascript.INSetClimateSettingsInCarIntent;
  }
}

declare const INSetClimateSettingsInCarIntent: cocoascript.INSetClimateSettingsInCarIntent;
