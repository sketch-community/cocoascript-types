declare namespace cocoascript {
  /**
   * An object representing the response from a single
   * doc://com.apple.documentation/documentation/corenfc/nfcvasresponse
   */
  interface NFCVASResponse extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasresponse/3043872-status
    status(): cocoascript.NFCVASErrorCode;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasresponse/3043873-vasdata
    vasData(): cocoascript.NSData;
    setVasData(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasresponse/3043871-mobiletoken
    mobileToken(): cocoascript.NSData;
    setMobileToken(): void;
    //
    alloc():cocoascript.NFCVASResponse;
    //
    init():cocoascript.NFCVASResponse;
  }
}

declare const NFCVASResponse: cocoascript.NFCVASResponse;
