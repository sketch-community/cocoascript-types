declare namespace cocoascript {
  /**
   * A challenge from a server requiring authentication from the client.
   * doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge
   */
  interface NSURLAuthenticationChallenge extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1411154-initwithauthenticationchallenge
    initWithAuthenticationChallenge_sender(challenge: cocoascript.NSURLAuthenticationChallenge, sender: cocoascript.NSURLAuthenticationChallengeSender):cocoascript.NSURLAuthenticationChallenge;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1416511-initwithprotectionspace
    initWithProtectionSpace_proposedCredential_previousFailureCount_failureResponse_error_sender(space: cocoascript.NSURLProtectionSpace, credential: cocoascript.NSURLCredential, previousFailureCount: cocoascript.NSInteger, response: cocoascript.NSURLResponse, error: cocoascript.NSError, sender: cocoascript.NSURLAuthenticationChallengeSender):cocoascript.NSURLAuthenticationChallenge;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1410012-protectionspace
    protectionSpace(): cocoascript.NSURLProtectionSpace;
    setProtectionSpace(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1414978-failureresponse
    failureResponse(): cocoascript.NSURLResponse;
    setFailureResponse(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1416522-previousfailurecount
    previousFailureCount(): cocoascript.NSInteger;
    setPreviousFailureCount(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1417749-proposedcredential
    proposedCredential(): cocoascript.NSURLCredential;
    setProposedCredential(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1413033-error
    error(): cocoascript.NSError;
    setError(): void;
    // doc://com.apple.documentation/documentation/foundation/nsurlauthenticationchallenge/1407533-sender
    sender(): cocoascript.NSURLAuthenticationChallengeSender;
    setSender(): void;
    //
    alloc():cocoascript.NSURLAuthenticationChallenge;
    //
    init():cocoascript.NSURLAuthenticationChallenge;
  }
}

declare const NSURLAuthenticationChallenge: cocoascript.NSURLAuthenticationChallenge;
