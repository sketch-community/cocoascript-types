declare namespace cocoascript {
/**
 * A reader session for detecting NFC Data Exchange Format (NDEF) tags.
 * doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession
 */
interface NFCNDEFReaderSession extends NFCReaderSession {
  // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/2882064-initwithdelegate
  initWithDelegate_queue_invalidateAfterFirstRead(delegate: cocoascript.NFCNDEFReaderSessionDelegate, queue: cocoascript.dispatch_queue_t, invalidateAfterFirstRead: cocoascript.BOOL):cocoascript.NFCNDEFReaderSession;
  // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/3153120-connecttotag
  connectToTag_completionHandler(tag: cocoascript.NFCNDEFTag, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/3075565-restartpolling
  restartPolling():void;
  // 
  alloc():cocoascript.NFCNDEFReaderSession;
  // 
  init():cocoascript.NFCNDEFReaderSession;
}
}
declare const NFCNDEFReaderSession: cocoascript.NFCNDEFReaderSession;

