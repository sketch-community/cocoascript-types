declare namespace cocoascript {
  /**
   * A reader session for processing Value Added Service (VAS) tags.
   * doc://com.apple.documentation/documentation/corenfc/nfcvasreadersession
   */
  interface NFCVASReaderSession extends NFCReaderSession {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersession/3043865-initwithvascommandconfigurations
    initWithVASCommandConfigurations_delegate_queue(commandConfigurations: cocoascript.NFCVASCommandConfiguration, delegate: cocoascript.NFCVASReaderSessionDelegate, queue: cocoascript.dispatch_queue_t):cocoascript.NFCVASReaderSession;
    //
    alloc():cocoascript.NFCVASReaderSession;
    //
    init():cocoascript.NFCVASReaderSession;
  }
}

declare const NFCVASReaderSession: cocoascript.NFCVASReaderSession;
