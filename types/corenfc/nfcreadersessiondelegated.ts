declare namespace cocoascript {
  /**
   * A collection of callbacks that provide information about the status of an NFC reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate
   */
  interface NFCReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874106-readersession
    readerSession_didDetectTags(session: cocoascript.NFCReaderSession, tags: cocoascript.NFCTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874102-readersession
    readerSession_didInvalidateWithError(session: cocoascript.NFCReaderSession, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874105-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: cocoascript.NFCReaderSession):void;
  }
}
