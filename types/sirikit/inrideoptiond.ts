declare namespace cocoascript {
/**
 * Details about a type of ride offered by your ride-booking service.
 * doc://com.apple.documentation/documentation/sirikit/inrideoption
 */
interface INRideOption extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649958-initwithname
  initWithName_estimatedPickupDate(name: cocoascript.NSString, estimatedPickupDate: cocoascript.NSDate):cocoascript.INRideOption;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649960-initwithcoder
  initWithCoder(decoder: cocoascript.NSCoder):cocoascript.INRideOption;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649970-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649965-estimatedpickupdate
  estimatedPickupDate(): cocoascript.NSDate;
  setEstimatedPickupDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649956-disclaimermessage
  disclaimerMessage(): cocoascript.NSString;
  setDisclaimerMessage(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649961-availablepartysizeoptions
  availablePartySizeOptions(): cocoascript.INRidePartySizeOption;
  setAvailablePartySizeOptions(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649968-availablepartysizeoptionsselecti
  availablePartySizeOptionsSelectionPrompt(): cocoascript.NSString;
  setAvailablePartySizeOptionsSelectionPrompt(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649969-pricerange
  priceRange(): cocoascript.INPriceRange;
  setPriceRange(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649964-specialpricing
  specialPricing(): cocoascript.NSString;
  setSpecialPricing(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649963-specialpricingbadgeimage
  specialPricingBadgeImage(): cocoascript.INImage;
  setSpecialPricingBadgeImage(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/2132100-usesmeteredfare
  usesMeteredFare(): cocoascript.NSNumber;
  setUsesMeteredFare(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649966-farelineitems
  fareLineItems(): cocoascript.INRideFareLineItem;
  setFareLineItems(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649962-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649957-useractivityforbookinginapplicat
  userActivityForBookingInApplication(): cocoascript.NSUserActivity;
  setUserActivityForBookingInApplication(): void;
  // 
  alloc():cocoascript.INRideOption;
  // 
  init():cocoascript.INRideOption;
}
}
declare const INRideOption: cocoascript.INRideOption;

