declare namespace cocoascript {
  /**
   * A specific electric vehicle that Maps uses during route planning and navigation.
   * doc://com.apple.documentation/documentation/sirikit/incar
   */
  interface INCar extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incar/3552129-initwithcaridentifier
    initWithCarIdentifier_displayName_year_make_model_color_headUnit_supportedChargingConnectors(carIdentifier: cocoascript.NSString, displayName: cocoascript.NSString, year: cocoascript.NSString, make: cocoascript.NSString, model: cocoascript.NSString, color: cocoascript.CGColorRef, headUnit: cocoascript.INCarHeadUnit, supportedChargingConnectors: cocoascript.INCarChargingConnectorType):cocoascript.INCar;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552125-caridentifier
    carIdentifier(): cocoascript.NSString;
    setCarIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552127-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552130-make
    make(): cocoascript.NSString;
    setMake(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552132-model
    model(): cocoascript.NSString;
    setModel(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552126-color
    color(): cocoascript.CGColorRef;
    setColor(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552135-year
    year(): cocoascript.NSString;
    setYear(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552128-headunit
    headUnit(): cocoascript.INCarHeadUnit;
    setHeadUnit(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552134-supportedchargingconnectors
    supportedChargingConnectors(): cocoascript.INCarChargingConnectorType;
    setSupportedChargingConnectors(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552131-maximumpowerforchargingconnector
    maximumPowerForChargingConnectorType(chargingConnectorType: cocoascript.INCarChargingConnectorType):cocoascript.NSUnitPower;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552133-setmaximumpower
    setMaximumPower_forChargingConnectorType(power: cocoascript.NSUnitPower, chargingConnectorType: cocoascript.INCarChargingConnectorType):void;
    //
    alloc():cocoascript.INCar;
    //
    init():cocoascript.INCar;
  }
}

declare const INCar: cocoascript.INCar;
