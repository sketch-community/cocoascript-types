declare namespace cocoascript {
  /**
   * An object representing an ISO 7816 application protocol data unit (APDU).
   * doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu
   */
  interface NFCISO7816APDU extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075555-initwithinstructionclass
    initWithInstructionClass_instructionCode_p1Parameter_p2Parameter_data_expectedResponseLength(instructionClass: number, instructionCode: number, p1Parameter: number, p2Parameter: number, data: cocoascript.NSData, expectedResponseLength: cocoascript.NSInteger):cocoascript.NFCISO7816APDU;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3043828-initwithdata
    initWithData(data: cocoascript.NSData):cocoascript.NFCISO7816APDU;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075556-instructionclass
    instructionClass(): number;
    setInstructionClass(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075557-instructioncode
    instructionCode(): number;
    setInstructionCode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075558-p1parameter
    p1Parameter(): number;
    setP1Parameter(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075559-p2parameter
    p2Parameter(): number;
    setP2Parameter(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3043826-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075554-expectedresponselength
    expectedResponseLength(): cocoascript.NSInteger;
    setExpectedResponseLength(): void;
    //
    alloc():cocoascript.NFCISO7816APDU;
    //
    init():cocoascript.NFCISO7816APDU;
  }
}

declare const NFCISO7816APDU: cocoascript.NFCISO7816APDU;
