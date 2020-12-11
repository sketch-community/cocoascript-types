declare namespace cocoascript {
  /**
   * The terms and conditions of service when making restaurant reservations.
   * doc://com.apple.documentation/documentation/sirikit/intermsandconditions
   */
  interface INTermsAndConditions extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132095-initwithlocalizedtermsandconditi
    initWithLocalizedTermsAndConditionsText_privacyPolicyURL_termsAndConditionsURL(localizedTermsAndConditionsText: cocoascript.NSString, privacyPolicyURL: cocoascript.NSURL, termsAndConditionsURL: cocoascript.NSURL):cocoascript.INTermsAndConditions;
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132098-localizedtermsandconditionstext
    localizedTermsAndConditionsText(): cocoascript.NSString;
    setLocalizedTermsAndConditionsText(): void;
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132099-privacypolicyurl
    privacyPolicyURL(): cocoascript.NSURL;
    setPrivacyPolicyURL(): void;
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132097-termsandconditionsurl
    termsAndConditionsURL(): cocoascript.NSURL;
    setTermsAndConditionsURL(): void;
    //
    alloc():cocoascript.INTermsAndConditions;
    //
    init():cocoascript.INTermsAndConditions;
  }
}

declare const INTermsAndConditions: cocoascript.INTermsAndConditions;
