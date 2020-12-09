declare namespace cocoascript {
/**
 * A request to fulfill in your app or Intents extension.
 * doc://com.apple.documentation/documentation/sirikit/inintent
 */
interface INIntent extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inintent/1639000-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inintent/2921266-intentdescription
  intentDescription(): cocoascript.NSString;
  setIntentDescription(): void;
  // doc://com.apple.documentation/documentation/sirikit/inintent/2962960-suggestedinvocationphrase
  suggestedInvocationPhrase(): cocoascript.NSString;
  setSuggestedInvocationPhrase(): void;
  // doc://com.apple.documentation/documentation/sirikit/inintent/3552187-shortcutavailability
  shortcutAvailability(): cocoascript.INShortcutAvailabilityOptions;
  setShortcutAvailability(): void;
  // doc://com.apple.documentation/documentation/sirikit/inintent/2976222-imageforparameternamed
  imageForParameterNamed(parameterName: cocoascript.NSString):cocoascript.INImage;
  // doc://com.apple.documentation/documentation/sirikit/inintent/2976224-setimage
  setImage_forParameterNamed(image: cocoascript.INImage, parameterName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/sirikit/inintent/2976223-keyimage
  keyImage():cocoascript.INImage;
  // 
  alloc():cocoascript.INIntent;
  // 
  init():cocoascript.INIntent;
}
}
declare const INIntent: cocoascript.INIntent;

