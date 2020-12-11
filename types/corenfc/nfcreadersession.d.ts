declare namespace cocoascript {
  /**
   * A general interface for interacting with a reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersession
   */
  interface NFCReaderSession extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874109-ready
    ready(): cocoascript.BOOL;
    setReady(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874112-beginsession
    beginSession():void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874107-invalidatesession
    invalidateSession():void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/3229946-invalidatesessionwitherrormessag
    invalidateSessionWithErrorMessage(errorMessage: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2919987-alertmessage
    alertMessage(): cocoascript.NSString;
    setAlertMessage(): void;
  }
}
