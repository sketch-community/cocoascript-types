declare namespace cocoascript {
/**
 * Options about how to display guest information from system interfaces.
 * doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences
 */
interface INRestaurantGuestDisplayPreferences extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2127690-namefieldshouldbedisplayed
  nameFieldShouldBeDisplayed(): cocoascript.BOOL;
  setNameFieldShouldBeDisplayed(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102609-phonenumberfieldshouldbedisplaye
  phoneNumberFieldShouldBeDisplayed(): cocoascript.BOOL;
  setPhoneNumberFieldShouldBeDisplayed(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102602-emailaddressfieldshouldbedisplay
  emailAddressFieldShouldBeDisplayed(): cocoascript.BOOL;
  setEmailAddressFieldShouldBeDisplayed(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102604-namefieldfirstnameoptional
  nameFieldFirstNameOptional(): cocoascript.BOOL;
  setNameFieldFirstNameOptional(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102606-namefieldlastnameoptional
  nameFieldLastNameOptional(): cocoascript.BOOL;
  setNameFieldLastNameOptional(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102603-nameeditable
  nameEditable(): cocoascript.BOOL;
  setNameEditable(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102608-emailaddresseditable
  emailAddressEditable(): cocoascript.BOOL;
  setEmailAddressEditable(): void;
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102607-phonenumbereditable
  phoneNumberEditable(): cocoascript.BOOL;
  setPhoneNumberEditable(): void;
  // 
  alloc():cocoascript.INRestaurantGuestDisplayPreferences;
  // 
  init():cocoascript.INRestaurantGuestDisplayPreferences;
}
}
declare const INRestaurantGuestDisplayPreferences: cocoascript.INRestaurantGuestDisplayPreferences;

