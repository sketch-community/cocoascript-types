declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate
   */
  interface NFCTagReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075579-tagreadersessiondidbecomeactive
    tagReaderSessionDidBecomeActive(session: NFCTagReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075577-tagreadersession
    tagReaderSession_didDetectTags(session: NFCTagReaderSession, tags: NFCTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075578-tagreadersession
    tagReaderSession_didInvalidateWithError(session: NFCTagReaderSession, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A collection of callbacks that provide information about the status of an NFC reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate
   */
  interface NFCReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874106-readersession
    readerSession_didDetectTags(session: NFCReaderSession, tags: NFCTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874102-readersession
    readerSession_didInvalidateWithError(session: NFCReaderSession, error: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874105-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: NFCReaderSession):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an NDEF tag.
   * doc://com.apple.documentation/documentation/corenfc/nfcndeftag
   */
  interface NFCNDEFTag extends NSCopying {
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3173178-available
    available(): BOOL;
    setAvailable(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3144659-queryndefstatuswithcompletionhan
    queryNDEFStatusWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3075571-readndefwithcompletionhandler
    readNDEFWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3075574-writendef
    writeNDEF_completionHandler(ndefMessage: NFCNDEFMessage, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3075573-writelockwithcompletionhandler
    writeLockWithCompletionHandler(completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that an object implements to serve as an NDEF reader session delegate.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate
   */
  interface NFCNDEFReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/3075567-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: NFCNDEFReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/2875568-readersession
    readerSession_didDetectNDEFs(session: NFCNDEFReaderSession, messages: NFCNDEFMessage):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/3075566-readersession
    readerSession_didDetectTags(session: NFCNDEFReaderSession, tags: NFCNDEFTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/2875570-readersession
    readerSession_didInvalidateWithError(session: NFCNDEFReaderSession, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks from a VAS reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate
   */
  interface NFCVASReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3255204-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: NFCVASReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3043868-readersession
    readerSession_didReceiveVASResponses(session: NFCVASReaderSession, responses: NFCVASResponse):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3043867-readersession
    readerSession_didInvalidateWithError(session: NFCVASReaderSession, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an NFC or RFID tag.
   * doc://com.apple.documentation/documentation/corenfc/nfctag
   */
  interface NFCTag extends NSCopying {
    // doc://com.apple.documentation/documentation/corenfc/nfctag/2873690-available
    available(): BOOL;
    setAvailable(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/2873684-session
    session(): NFCReaderSession;
    setSession(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/2873692-type
    type(): NFCTagType;
    setType(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183041-asnfciso15693tag
    asNFCISO15693Tag():NFCISO15693Tag;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183042-asnfciso7816tag
    asNFCISO7816Tag():NFCISO7816Tag;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183040-asnfcfelicatag
    asNFCFeliCaTag():NFCFeliCaTag;
    // doc://com.apple.documentation/documentation/corenfc/nfctag/3183043-asnfcmifaretag
    asNFCMiFareTag():NFCMiFareTag;
  }
}
declare namespace cocoascript {
  /**
   * A general interface for interacting with a reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersession
   */
  interface NFCReaderSession extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874109-ready
    ready(): BOOL;
    setReady(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874112-beginsession
    beginSession():void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874107-invalidatesession
    invalidateSession():void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/3229946-invalidatesessionwitherrormessag
    invalidateSessionWithErrorMessage(errorMessage: string | NSString):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2919987-alertmessage
    alertMessage(): string | NSString;
    setAlertMessage(): void;
  }
}
declare namespace cocoascript {
  /**
   * A set of parameters you use to define the configuration of an NFC tag command.
   * doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration
   */
  interface NFCTagCommandConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration/2873693-maximumretries
    maximumRetries(): NSUInteger;
    setMaximumRetries(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration/2873688-retryinterval
    retryInterval(): NSTimeInterval;
    setRetryInterval(): void;
    //
    alloc():NFCTagCommandConfiguration;
    //
    init():NFCTagCommandConfiguration;
  }
}

declare const NFCTagCommandConfiguration: cocoascript.NFCTagCommandConfiguration;
declare namespace cocoascript {
  /**
   * An object representing an ISO 7816 application protocol data unit (APDU).
   * doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu
   */
  interface NFCISO7816APDU extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075555-initwithinstructionclass
    initWithInstructionClass_instructionCode_p1Parameter_p2Parameter_data_expectedResponseLength(instructionClass: number, instructionCode: number, p1Parameter: number, p2Parameter: number, data: NSData, expectedResponseLength: NSInteger):NFCISO7816APDU;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3043828-initwithdata
    initWithData(data: NSData):NFCISO7816APDU;
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
    data(): NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816apdu/3075554-expectedresponselength
    expectedResponseLength(): NSInteger;
    setExpectedResponseLength(): void;
    //
    alloc():NFCISO7816APDU;
    //
    init():NFCISO7816APDU;
  }
}

declare const NFCISO7816APDU: cocoascript.NFCISO7816APDU;
declare namespace cocoascript {
  /**
   * An object providing the configuration for a GET VAS DATA command.
   * doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration
   */
  interface NFCVASCommandConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043860-initwithvasmode
    initWithVASMode_passTypeIdentifier_url(mode: NFCVASMode, passTypeIdentifier: string | NSString, url: NSURL):NFCVASCommandConfiguration;
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043861-mode
    mode(): NFCVASMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043862-passtypeidentifier
    passTypeIdentifier(): string | NSString;
    setPassTypeIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043863-url
    url(): NSURL;
    setUrl(): void;
    //
    alloc():NFCVASCommandConfiguration;
    //
    init():NFCVASCommandConfiguration;
  }
}

declare const NFCVASCommandConfiguration: cocoascript.NFCVASCommandConfiguration;
declare namespace cocoascript {
  /**
   * An object representing the response from a single
   * doc://com.apple.documentation/documentation/corenfc/nfcvasresponse
   */
  interface NFCVASResponse extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasresponse/3043872-status
    status(): NFCVASErrorCode;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasresponse/3043873-vasdata
    vasData(): NSData;
    setVasData(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasresponse/3043871-mobiletoken
    mobileToken(): NSData;
    setMobileToken(): void;
    //
    alloc():NFCVASResponse;
    //
    init():NFCVASResponse;
  }
}

declare const NFCVASResponse: cocoascript.NFCVASResponse;
declare namespace cocoascript {
  /**
   * A payload record in an NFC NDEF message.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefpayload
   */
  interface NFCNDEFPayload extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153119-wellknowntypeuripayloadwithurl
    wellKnownTypeURIPayloadWithURL(url: NSURL):NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153118-wellknowntypeuripayloadwithstrin
    wellKnownTypeURIPayloadWithString(uri: string | NSString):NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3355755-wellknowntypetextpayloadwithstri
    wellKnownTypeTextPayloadWithString_locale(text: string | NSString, locale: NSLocale):NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3043842-initwithformat
    initWithFormat_type_identifier_payload(format: NFCTypeNameFormat, type: NSData, identifier: NSData, payload: NSData):NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3043843-initwithformat
    initWithFormat_type_identifier_payload_chunkSize(format: NFCTypeNameFormat, type: NSData, identifier: NSData, payload: NSData, chunkSize: any):NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153115-wellknowtypetextpayloadwithstrin
    wellKnowTypeTextPayloadWithString_locale(text: string | NSString, locale: NSLocale):NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875573-identifier
    identifier(): NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875556-payload
    payload(): NSData;
    setPayload(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875576-type
    type(): NSData;
    setType(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875566-typenameformat
    typeNameFormat(): NFCTypeNameFormat;
    setTypeNameFormat(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153117-wellknowntypeuripayload
    wellKnownTypeURIPayload():NSURL;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153116-wellknowntypetextpayloadwithloca
    wellKnownTypeTextPayloadWithLocale(locale: NSLocale):string | NSString;
    //
    alloc():NFCNDEFPayload;
    //
    init():NFCNDEFPayload;
  }
}

declare const NFCNDEFPayload: cocoascript.NFCNDEFPayload;
declare namespace cocoascript {
  /**
   * An NFC NDEF message consisting of an array of payload records.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefmessage
   */
  interface NFCNDEFMessage extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/3075560-initwithndefrecords
    initWithNDEFRecords(records: NFCNDEFPayload):NFCNDEFMessage;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/3183039-ndefmessagewithdata
    ndefMessageWithData(data: NSData):NFCNDEFMessage;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/2875563-records
    records(): NFCNDEFPayload;
    setRecords(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefmessage/3075561-length
    length(): NSUInteger;
    setLength(): void;
    //
    alloc():NFCNDEFMessage;
    //
    init():NFCNDEFMessage;
  }
}

declare const NFCNDEFMessage: cocoascript.NFCNDEFMessage;
declare namespace cocoascript {
  /**
   * A reader session for detecting ISO7816, ISO15693, FeliCa, and MIFARE tags.
   * doc://com.apple.documentation/documentation/corenfc/nfctagreadersession
   */
  interface NFCTagReaderSession extends NFCReaderSession {
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3043856-initwithpollingoption
    initWithPollingOption_delegate_queue(pollingOption: NFCPollingOption, delegate: NFCTagReaderSessionDelegate, queue: dispatch_queue_t):NFCTagReaderSession;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3153121-connecttotag
    connectToTag_completionHandler(tag: NFCTag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3043855-connectedtag
    connectedTag(): NFCTag;
    setConnectedTag(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersession/3043857-restartpolling
    restartPolling():void;
    //
    alloc():NFCTagReaderSession;
    //
    init():NFCTagReaderSession;
  }
}

declare const NFCTagReaderSession: cocoascript.NFCTagReaderSession;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcpollingoption
  type NFCPollingOption = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A reader session for detecting NFC Data Exchange Format (NDEF) tags.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession
   */
  interface NFCNDEFReaderSession extends NFCReaderSession {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/2882064-initwithdelegate
    initWithDelegate_queue_invalidateAfterFirstRead(delegate: NFCNDEFReaderSessionDelegate, queue: dispatch_queue_t, invalidateAfterFirstRead: BOOL):NFCNDEFReaderSession;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/3153120-connecttotag
    connectToTag_completionHandler(tag: NFCNDEFTag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/3075565-restartpolling
    restartPolling():void;
    //
    alloc():NFCNDEFReaderSession;
    //
    init():NFCNDEFReaderSession;
  }
}

declare const NFCNDEFReaderSession: cocoascript.NFCNDEFReaderSession;
declare namespace cocoascript {
  /**
   * A reader session for processing Value Added Service (VAS) tags.
   * doc://com.apple.documentation/documentation/corenfc/nfcvasreadersession
   */
  interface NFCVASReaderSession extends NFCReaderSession {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersession/3043865-initwithvascommandconfigurations
    initWithVASCommandConfigurations_delegate_queue(commandConfigurations: NFCVASCommandConfiguration, delegate: NFCVASReaderSessionDelegate, queue: dispatch_queue_t):NFCVASReaderSession;
    //
    alloc():NFCVASReaderSession;
    //
    init():NFCVASReaderSession;
  }
}

declare const NFCVASReaderSession: cocoascript.NFCVASReaderSession;
declare namespace cocoascript {
  /**
   * The abstract base class that represents a reader session for detecting NFC tags.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersession-mnv
   */
  interface NFCReaderSession extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/3043845-readingavailable
    readingAvailable(): BOOL;
    setReadingAvailable(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874104-delegate
    delegate(): id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874110-sessionqueue
    sessionQueue(): dispatch_queue_t;
    setSessionQueue(): void;
    //
    alloc():NFCReaderSession;
    //
    init():NFCReaderSession;
  }
}

declare const NFCReaderSession: cocoascript.NFCReaderSession;
declare namespace cocoascript {
  /**
   * An interface for interacting with an ISO 7816 tag.
   * doc://com.apple.documentation/documentation/corenfc/nfciso7816tag
   */
  interface NFCISO7816Tag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3043834-initialselectedaid
    initialSelectedAID(): string | NSString;
    setInitialSelectedAID(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183035-identifier
    identifier(): NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183034-historicalbytes
    historicalBytes(): NSData;
    setHistoricalBytes(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183033-applicationdata
    applicationData(): NSData;
    setApplicationData(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3183036-proprietaryapplicationdatacoding
    proprietaryApplicationDataCoding(): BOOL;
    setProprietaryApplicationDataCoding(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso7816tag/3043835-sendcommandapdu
    sendCommandAPDU_completionHandler(apdu: NFCISO7816APDU, completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with a FeliCa™ tag.
   * doc://com.apple.documentation/documentation/corenfc/nfcfelicatag
   */
  interface NFCFeliCaTag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043777-currentsystemcode
    currentSystemCode(): NSData;
    setCurrentSystemCode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043776-currentidm
    currentIDm(): NSData;
    setCurrentIDm(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043778-pollingwithsystemcode
    pollingWithSystemCode_requestCode_timeSlot_completionHandler(systemCode: NSData, requestCode: NFCFeliCaPollingRequestCode, timeSlot: NFCFeliCaPollingTimeSlot, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043782-requestservicewithnodecodelist
    requestServiceWithNodeCodeList_completionHandler(nodeCodeList: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043781-requestservicev2withnodecodelist
    requestServiceV2WithNodeCodeList_completionHandler(nodeCodeList: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043780-requestresponsewithcompletionhan
    requestResponseWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043783-requestspecificationversionwithc
    requestSpecificationVersionWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043784-requestsystemcodewithcompletionh
    requestSystemCodeWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043785-resetmodewithcompletionhandler
    resetModeWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043779-readwithoutencryptionwithservice
    readWithoutEncryptionWithServiceCodeList_blockList_completionHandler(serviceCodeList: NSData, blockList: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043787-writewithoutencryptionwithservic
    writeWithoutEncryptionWithServiceCodeList_blockList_blockData_completionHandler(serviceCodeList: NSData, blockList: NSData, blockData: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043786-sendfelicacommandpacket
    sendFeliCaCommandPacket_completionHandler(commandPacket: NSData, completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an ISO 15693 tag.
   * doc://com.apple.documentation/documentation/corenfc/nfciso15693tag
   */
  interface NFCISO15693Tag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/2882083-icmanufacturercode
    icManufacturerCode(): NSUInteger;
    setIcManufacturerCode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/2882070-icserialnumber
    icSerialNumber(): NSData;
    setIcSerialNumber(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/2882078-identifier
    identifier(): NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043805-getsysteminfowithrequestflag
    getSystemInfoWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043810-readsingleblockwithrequestflags
    readSingleBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: number, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043817-writesingleblockwithrequestflags
    writeSingleBlockWithRequestFlags_blockNumber_dataBlock_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: number, dataBlock: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043807-lockblockwithrequestflags
    lockBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: number, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043809-readmultipleblockswithrequestfla
    readMultipleBlocksWithRequestFlags_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043816-writemultipleblockswithrequestfl
    writeMultipleBlocksWithRequestFlags_blockRange_dataBlocks_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043804-getmultipleblocksecuritystatuswi
    getMultipleBlockSecurityStatusWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043814-writeafiwithrequestflag
    writeAFIWithRequestFlag_afi_completionHandler(flags: NFCISO15693RequestFlag, afi: number, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043806-lockafiwithrequestflag
    lockAFIWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043815-writedsfidwithrequestflag
    writeDSFIDWithRequestFlag_dsfid_completionHandler(flags: NFCISO15693RequestFlag, dsfid: number, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043808-lockdfsidwithrequestflag
    lockDFSIDWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043811-resettoreadywithrequestflags
    resetToReadyWithRequestFlags_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043812-selectwithrequestflags
    selectWithRequestFlags_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043813-stayquietwithcompletionhandler
    stayQuietWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043799-customcommandwithrequestflag
    customCommandWithRequestFlag_customCommandCode_customRequestParameters_completionHandler(flags: NFCISO15693RequestFlag, customCommandCode: NSInteger, customRequestParameters: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043802-extendedreadsingleblockwithreque
    extendedReadSingleBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: NSInteger, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043803-extendedwritesingleblockwithrequ
    extendedWriteSingleBlockWithRequestFlags_blockNumber_dataBlock_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: NSInteger, dataBlock: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043800-extendedlockblockwithrequestflag
    extendedLockBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: NSInteger, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043801-extendedreadmultipleblockswithre
    extendedReadMultipleBlocksWithRequestFlags_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3583264-lockdsfidwithrequestflag
    lockDSFIDWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551925-authenticatewithrequestflags
    authenticateWithRequestFlags_cryptoSuiteIdentifier_message_completionHandler(flags: NFCISO15693RequestFlag, cryptoSuiteIdentifier: NSInteger, message: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551926-challengewithrequestflags
    challengeWithRequestFlags_cryptoSuiteIdentifier_message_completionHandler(flags: NFCISO15693RequestFlag, cryptoSuiteIdentifier: NSInteger, message: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551927-extendedfastreadmultipleblockswi
    extendedFastReadMultipleBlocksWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551928-extendedgetmultipleblocksecurity
    extendedGetMultipleBlockSecurityStatusWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551929-extendedwritemultipleblockswithr
    extendedWriteMultipleBlocksWithRequestFlags_blockRange_dataBlocks_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551930-fastreadmultipleblockswithreques
    fastReadMultipleBlocksWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3578121-getsysteminfoanduidwithrequestfl
    getSystemInfoAndUIDWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551931-keyupdatewithrequestflags
    keyUpdateWithRequestFlags_keyIdentifier_message_completionHandler(flags: NFCISO15693RequestFlag, keyIdentifier: NSInteger, message: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551932-readbufferwithrequestflags
    readBufferWithRequestFlags_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551933-sendrequestwithflag
    sendRequestWithFlag_commandCode_data_completionHandler(flags: NSInteger, commandCode: NSInteger, data: NSData, completionHandler: NSError):void;
  }
}
// doc://com.apple.documentation/documentation/corenfc/nfciso15693tagresponseerrorkey
declare const NFCISO15693TagResponseErrorKey: string | NSString;
declare namespace cocoascript {
  /**
   * An interface for interacting with a MIFARE® tag.
   * doc://com.apple.documentation/documentation/corenfc/nfcmifaretag
   */
  interface NFCMiFareTag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3153113-mifarefamily
    mifareFamily(): NFCMiFareFamily;
    setMifareFamily(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3183038-identifier
    identifier(): NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3183037-historicalbytes
    historicalBytes(): NSData;
    setHistoricalBytes(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3043838-sendmifarecommand
    sendMiFareCommand_completionHandler(command: NSData, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3153114-sendmifareiso7816command
    sendMiFareISO7816Command_completionHandler(apdu: NFCISO7816APDU, completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcndefstatus
  type NFCNDEFStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfctagtype
  type NFCTagType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/vasmode
  type VASMode = cocoascript.NFCVASMode;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/vaserrorcode
  type VASErrorCode = cocoascript.NFCVASErrorCode;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfctypenameformat
  type NFCTypeNameFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcreadererror
  type NFCReaderError = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/corenfc/nfcerrordomain
declare const NFCErrorDomain: NSErrorDomain;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/pollingrequestcode
  type PollingRequestCode = cocoascript.NFCFeliCaPollingRequestCode;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/pollingtimeslot
  type PollingTimeSlot = cocoascript.NFCFeliCaPollingTimeSlot;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/encryptionid
  type EncryptionId = cocoascript.NFCFeliCaEncryptionId;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/requestflag
  type RequestFlag = cocoascript.NFCISO15693RequestFlag;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcmifarefamily
  type NFCMiFareFamily = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcvasmode
  type NFCVASMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcvaserrorcode
  type NFCVASErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcfelicaencryptionid
  type NFCFeliCaEncryptionId = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcfelicapollingrequestcode
  type NFCFeliCaPollingRequestCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfcfelicapollingtimeslot
  type NFCFeliCaPollingTimeSlot = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfciso15693requestflag
  type NFCISO15693RequestFlag = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corenfc/nfciso15693responseflag
  type NFCISO15693ResponseFlag = number;
}
