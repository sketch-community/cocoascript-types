declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender
   */
  interface NSURLAuthenticationChallengeSender extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1414474-cancelauthenticationchallenge
    cancelAuthenticationChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1413016-continuewithoutcredentialforauth
    continueWithoutCredentialForAuthenticationChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1411062-usecredential
    useCredential_forAuthenticationChallenge(credential: cocoascript.NSURLCredential, challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1414590-performdefaulthandlingforauthent
    performDefaultHandlingForAuthenticationChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallengesender/1417331-rejectprotectionspaceandcontinue
    rejectProtectionSpaceAndContinueWithChallenge(challenge: cocoascript.NSURLAuthenticationChallenge):void;
  }
}
