declare namespace cocoascript {
  /**
   * An interface for interacting with an NFC or RFID tag.
   * doc://com.apple.documentation/documentation/corenfc/nfctag
   */
  interface NFCTag extends NSCopying {
    // doc://com.apple.documentation/documentation/corenfc/nfctag/2873690-available
    available(): cocoascript.BOOL;
    setAvailable(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/2873684-session
    session(): cocoascript.NFCReaderSession;
    setSession(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/2873692-type
    type(): cocoascript.NFCTagType;
    setType(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183041-asnfciso15693tag
    asNFCISO15693Tag():cocoascript.NFCISO15693Tag;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183042-asnfciso7816tag
    asNFCISO7816Tag():cocoascript.NFCISO7816Tag;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183040-asnfcfelicatag
    asNFCFeliCaTag():cocoascript.NFCFeliCaTag;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183043-asnfcmifaretag
    asNFCMiFareTag():cocoascript.NFCMiFareTag;
  }
}
