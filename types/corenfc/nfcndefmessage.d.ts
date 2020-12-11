declare namespace cocoascript {
  /**
   * An NFC NDEF message consisting of an array of payload records.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefmessage
   */
  interface NFCNDEFMessage extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/3075560-initwithndefrecords
    initWithNDEFRecords(records: cocoascript.NFCNDEFPayload):cocoascript.NFCNDEFMessage;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/2875563-records
    records(): cocoascript.NFCNDEFPayload;
    setRecords(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/3075561-length
    length(): cocoascript.NSUInteger;
    setLength(): void;
    //
    alloc():cocoascript.NFCNDEFMessage;
    //
    init():cocoascript.NFCNDEFMessage;
  }
}

declare const NFCNDEFMessage: cocoascript.NFCNDEFMessage;
