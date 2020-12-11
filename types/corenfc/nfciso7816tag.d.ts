declare namespace cocoascript {
  /**
   * An interface for interacting with an ISO 7816 tag.
   * doc://com.apple.documentation/documentation/corenfc/nfciso7816tag
   */
  interface NFCISO7816Tag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3043834-initialselectedaid
    initialSelectedAID(): cocoascript.NSString;
    setInitialSelectedAID(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183035-identifier
    identifier(): cocoascript.NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183034-historicalbytes
    historicalBytes(): cocoascript.NSData;
    setHistoricalBytes(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183033-applicationdata
    applicationData(): cocoascript.NSData;
    setApplicationData(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183036-proprietaryapplicationdatacoding
    proprietaryApplicationDataCoding(): cocoascript.BOOL;
    setProprietaryApplicationDataCoding(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3043835-sendcommandapdu
    sendCommandAPDU_completionHandler(apdu: cocoascript.NFCISO7816APDU, completionHandler: cocoascript.NSError):void;
  }
}
