declare namespace cocoascript {
  /**
   * A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
   * doc://com.apple.documentation/documentation/corenfc/nfctagreadersession
   */
  interface NFCTagReaderSession extends NFCReaderSession {
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3043856-initwithpollingoption
    initWithPollingOption_delegate_queue(pollingOption: cocoascript.NFCPollingOption, delegate: cocoascript.NFCTagReaderSessionDelegate, queue: cocoascript.dispatch_queue_t):cocoascript.NFCTagReaderSession;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3153121-connecttotag
    connectToTag_completionHandler(tag: cocoascript.NFCTag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3043855-connectedtag
    connectedTag(): cocoascript.NFCTag;
    setConnectedTag(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3043857-restartpolling
    restartPolling():void;
    //
    alloc():cocoascript.NFCTagReaderSession;
    //
    init():cocoascript.NFCTagReaderSession;
  }
}

declare const NFCTagReaderSession: cocoascript.NFCTagReaderSession;
