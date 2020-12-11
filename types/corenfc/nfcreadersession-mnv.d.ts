declare namespace cocoascript {
  /**
   * The abstract base class that represents a reader session for detecting NFC tags.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersession-mnv
   */
  interface NFCReaderSession extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/3043845-readingavailable
    readingAvailable(): cocoascript.BOOL;
    setReadingAvailable(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874104-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874110-sessionqueue
    sessionQueue(): cocoascript.dispatch_queue_t;
    setSessionQueue(): void;
    //
    alloc():cocoascript.NFCReaderSession;
    //
    init():cocoascript.NFCReaderSession;
  }
}

declare const NFCReaderSession: cocoascript.NFCReaderSession;
