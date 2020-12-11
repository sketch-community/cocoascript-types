declare namespace cocoascript {
  /**
   * A restaurant for which your app can make and manage reservations.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurant
   */
  interface INRestaurant extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/2132091-initwithlocation
    initWithLocation_name_vendorIdentifier_restaurantIdentifier(location: cocoascript.CLLocation, name: cocoascript.NSString, vendorIdentifier: cocoascript.NSString, restaurantIdentifier: cocoascript.NSString):cocoascript.INRestaurant;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649980-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649979-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649977-restaurantidentifier
    restaurantIdentifier(): cocoascript.NSString;
    setRestaurantIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649978-vendoridentifier
    vendorIdentifier(): cocoascript.NSString;
    setVendorIdentifier(): void;
    //
    alloc():cocoascript.INRestaurant;
    //
    init():cocoascript.INRestaurant;
  }
}

declare const INRestaurant: cocoascript.INRestaurant;
