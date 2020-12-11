declare namespace cocoascript {
  /**
   * A protocol that an object implements to serve as an NDEF reader session delegate.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate
   */
  interface NFCNDEFReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/3075567-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: cocoascript.NFCNDEFReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/2875568-readersession
    readerSession_didDetectNDEFs(session: cocoascript.NFCNDEFReaderSession, messages: cocoascript.NFCNDEFMessage):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/3075566-readersession
    readerSession_didDetectTags(session: cocoascript.NFCNDEFReaderSession, tags: cocoascript.NFCNDEFTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/2875570-readersession
    readerSession_didInvalidateWithError(session: cocoascript.NFCNDEFReaderSession, error: cocoascript.NSError):void;
  }
}
