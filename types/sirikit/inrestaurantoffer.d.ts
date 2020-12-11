declare namespace cocoascript {
  /**
   * Information about special offers made by a restaurant.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer
   */
  interface INRestaurantOffer extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer/1649398-offertitletext
    offerTitleText(): cocoascript.NSString;
    setOfferTitleText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer/1649401-offerdetailtext
    offerDetailText(): cocoascript.NSString;
    setOfferDetailText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer/1649400-offeridentifier
    offerIdentifier(): cocoascript.NSString;
    setOfferIdentifier(): void;
    //
    alloc():cocoascript.INRestaurantOffer;
    //
    init():cocoascript.INRestaurantOffer;
  }
}

declare const INRestaurantOffer: cocoascript.INRestaurantOffer;
