declare namespace cocoascript {
  /**
   * Your app’s response to a start photo playback intent.
   * doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse
   */
  interface INStartPhotoPlaybackIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse/1639204-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartPhotoPlaybackIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartPhotoPlaybackIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse/1829425-code
    code(): cocoascript.INStartPhotoPlaybackIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse/1638601-searchresultscount
    searchResultsCount(): cocoascript.NSNumber;
    setSearchResultsCount(): void;
    //
    alloc():cocoascript.INStartPhotoPlaybackIntentResponse;
    //
    init():cocoascript.INStartPhotoPlaybackIntentResponse;
  }
}

declare const INStartPhotoPlaybackIntentResponse: cocoascript.INStartPhotoPlaybackIntentResponse;
