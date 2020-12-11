declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks from a VAS reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate
   */
  interface NFCVASReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3255204-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: cocoascript.NFCVASReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3043868-readersession
    readerSession_didReceiveVASResponses(session: cocoascript.NFCVASReaderSession, responses: cocoascript.NFCVASResponse):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3043867-readersession
    readerSession_didInvalidateWithError(session: cocoascript.NFCVASReaderSession, error: cocoascript.NSError):void;
  }
}
