declare namespace cocoascript {
/**
 * Your app’s response to a search for photos intent.
 * doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse
 */
interface INSearchForPhotosIntentResponse extends INIntentResponse {
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse/1638236-initwithcode
  initWithCode_userActivity(code: cocoascript.INSearchForPhotosIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForPhotosIntentResponse;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse/1833286-code
  code(): cocoascript.INSearchForPhotosIntentResponseCode;
  setCode(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse/1639111-searchresultscount
  searchResultsCount(): cocoascript.NSNumber;
  setSearchResultsCount(): void;
  // 
  alloc():cocoascript.INSearchForPhotosIntentResponse;
  // 
  init():cocoascript.INSearchForPhotosIntentResponse;
}
}
declare const INSearchForPhotosIntentResponse: cocoascript.INSearchForPhotosIntentResponse;

