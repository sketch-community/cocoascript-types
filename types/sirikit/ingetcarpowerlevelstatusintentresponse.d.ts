declare namespace cocoascript {
  /**
   * Your app’s response to a request for the vehicle power level.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse
   */
  interface INGetCarPowerLevelStatusIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799147-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetCarPowerLevelStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetCarPowerLevelStatusIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799150-code
    code(): cocoascript.INGetCarPowerLevelStatusIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552171-caridentifier
    carIdentifier(): cocoascript.NSString;
    setCarIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799139-chargepercentremaining
    chargePercentRemaining(): cocoascript.NSNumber;
    setChargePercentRemaining(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799138-fuelpercentremaining
    fuelPercentRemaining(): cocoascript.NSNumber;
    setFuelPercentRemaining(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674226-maximumdistance
    maximumDistance(): cocoascript.NSUnitLength;
    setMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799141-distanceremaining
    distanceRemaining(): cocoascript.NSUnitLength;
    setDistanceRemaining(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674227-maximumdistanceelectric
    maximumDistanceElectric(): cocoascript.NSUnitLength;
    setMaximumDistanceElectric(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552176-distanceremainingelectric
    distanceRemainingElectric(): cocoascript.NSUnitLength;
    setDistanceRemainingElectric(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674228-maximumdistancefuel
    maximumDistanceFuel(): cocoascript.NSUnitLength;
    setMaximumDistanceFuel(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674224-distanceremainingfuel
    distanceRemainingFuel(): cocoascript.NSUnitLength;
    setDistanceRemainingFuel(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552170-activeconnector
    activeConnector(): cocoascript.INCarChargingConnectorType;
    setActiveConnector(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3017318-charging
    charging(): cocoascript.NSNumber;
    setCharging(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3017319-minutestofull
    minutesToFull(): cocoascript.NSNumber;
    setMinutesToFull(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552175-dateoflaststateupdate
    dateOfLastStateUpdate(): cocoascript.NSDateComponents;
    setDateOfLastStateUpdate(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674229-minimumbatterycapacity
    minimumBatteryCapacity(): cocoascript.NSUnitEnergy;
    setMinimumBatteryCapacity(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674225-maximumbatterycapacity
    maximumBatteryCapacity(): cocoascript.NSUnitEnergy;
    setMaximumBatteryCapacity(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552174-currentbatterycapacity
    currentBatteryCapacity(): cocoascript.NSUnitEnergy;
    setCurrentBatteryCapacity(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552172-chargingformulaarguments
    chargingFormulaArguments(): cocoascript.id;
    setChargingFormulaArguments(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552173-consumptionformulaarguments
    consumptionFormulaArguments(): cocoascript.id;
    setConsumptionFormulaArguments(): void;
    //
    alloc():cocoascript.INGetCarPowerLevelStatusIntentResponse;
    //
    init():cocoascript.INGetCarPowerLevelStatusIntentResponse;
  }
}

declare const INGetCarPowerLevelStatusIntentResponse: cocoascript.INGetCarPowerLevelStatusIntentResponse;
