declare namespace cocoascript {
  /**
   * The information that describes a rental car.
   * doc://com.apple.documentation/documentation/sirikit/inrentalcar
   */
  interface INRentalCar extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141812-initwithrentalcompanyname
    initWithRentalCompanyName_type_make_model_rentalCarDescription(rentalCompanyName: cocoascript.NSString, type: cocoascript.NSString, make: cocoascript.NSString, model: cocoascript.NSString, rentalCarDescription: cocoascript.NSString):cocoascript.INRentalCar;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141816-rentalcompanyname
    rentalCompanyName(): cocoascript.NSString;
    setRentalCompanyName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141817-type
    type(): cocoascript.NSString;
    setType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141813-make
    make(): cocoascript.NSString;
    setMake(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141814-model
    model(): cocoascript.NSString;
    setModel(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141815-rentalcardescription
    rentalCarDescription(): cocoascript.NSString;
    setRentalCarDescription(): void;
    //
    alloc():cocoascript.INRentalCar;
    //
    init():cocoascript.INRentalCar;
  }
}

declare const INRentalCar: cocoascript.INRentalCar;
