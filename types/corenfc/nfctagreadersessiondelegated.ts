declare namespace cocoascript {
/**
 * A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
 * doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate
 */
interface NFCTagReaderSessionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075579-tagreadersessiondidbecomeactive
  tagReaderSessionDidBecomeActive(session: cocoascript.NFCTagReaderSession):void;
  // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075577-tagreadersession
  tagReaderSession_didDetectTags(session: cocoascript.NFCTagReaderSession, tags: cocoascript.NFCTag):void;
  // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075578-tagreadersession
  tagReaderSession_didInvalidateWithError(session: cocoascript.NFCTagReaderSession, error: cocoascript.NSError):void;
}
}

