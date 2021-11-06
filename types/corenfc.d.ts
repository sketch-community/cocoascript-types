declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
   * https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate
   */
  interface NFCTagReaderSessionDelegate extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate/3075579-tagreadersessiondidbecomeactive
    tagReaderSessionDidBecomeActive(session: NFCTagReaderSession):void;
    // https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate/3075577-tagreadersession
    tagReaderSession_didDetectTags(session: NFCTagReaderSession, tags: NFCTag):void;
    // https://developer.apple.com/documentation/corenfc/nfctagreadersessiondelegate/3075578-tagreadersession
    tagReaderSession_didInvalidateWithError(session: NFCTagReaderSession, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A collection of callbacks that provide information about the status of an NFC reader session.
   * https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate
   */
  interface NFCReaderSessionDelegate extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate/2874106-readersession
    readerSession_didDetectTags(session: NFCReaderSession, tags: NFCTag):void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate/2874102-readersession
    readerSession_didInvalidateWithError(session: NFCReaderSession, error: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersessiondelegate/2874105-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: NFCReaderSession):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an NDEF tag.
   * https://developer.apple.com/documentation/corenfc/nfcndeftag
   */
  interface NFCNDEFTag extends NSCopying {
    // https://developer.apple.com/documentation/corenfc/nfcndeftag/3173178-available
    available(): boolean;
    setAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/corenfc/nfcndeftag/3144659-queryndefstatuswithcompletionhan
    queryNDEFStatusWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcndeftag/3075571-readndefwithcompletionhandler
    readNDEFWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcndeftag/3075574-writendef
    writeNDEF_completionHandler(ndefMessage: NFCNDEFMessage, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcndeftag/3075573-writelockwithcompletionhandler
    writeLockWithCompletionHandler(completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that an object implements to serve as an NDEF reader session delegate.
   * https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate
   */
  interface NFCNDEFReaderSessionDelegate extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/3075567-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: NFCNDEFReaderSession):void;
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/2875568-readersession
    readerSession_didDetectNDEFs(session: NFCNDEFReaderSession, messages: NFCNDEFMessage):void;
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/3075566-readersession
    readerSession_didDetectTags(session: NFCNDEFReaderSession, tags: NFCNDEFTag):void;
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersessiondelegate/2875570-readersession
    readerSession_didInvalidateWithError(session: NFCNDEFReaderSession, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks from a VAS reader session.
   * https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate
   */
  interface NFCVASReaderSessionDelegate extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate/3255204-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: NFCVASReaderSession):void;
    // https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate/3043868-readersession
    readerSession_didReceiveVASResponses(session: NFCVASReaderSession, responses: NFCVASResponse):void;
    // https://developer.apple.com/documentation/corenfc/nfcvasreadersessiondelegate/3043867-readersession
    readerSession_didInvalidateWithError(session: NFCVASReaderSession, error: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an NFC or RFID tag.
   * https://developer.apple.com/documentation/corenfc/nfctag
   */
  interface NFCTag extends NSCopying {
    // https://developer.apple.com/documentation/corenfc/nfctag/2873690-available
    available(): boolean;
    setAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/corenfc/nfctag/2873684-session
    session(): NFCReaderSession;
    setSession(value: NFCReaderSession): void;
    // https://developer.apple.com/documentation/corenfc/nfctag/2873692-type
    type(): NFCTagType;
    setType(value: NFCTagType): void;
    // https://developer.apple.com/documentation/corenfc/nfctag/3183041-asnfciso15693tag
    asNFCISO15693Tag():NFCISO15693Tag;
    // https://developer.apple.com/documentation/corenfc/nfctag/3183042-asnfciso7816tag
    asNFCISO7816Tag():NFCISO7816Tag;
    // https://developer.apple.com/documentation/corenfc/nfctag/3183040-asnfcfelicatag
    asNFCFeliCaTag():NFCFeliCaTag;
    // https://developer.apple.com/documentation/corenfc/nfctag/3183043-asnfcmifaretag
    asNFCMiFareTag():NFCMiFareTag;
  }
}
declare namespace cocoascript {
  /**
   * A general interface for interacting with a reader session.
   * https://developer.apple.com/documentation/corenfc/nfcreadersession
   */
  interface NFCReaderSession extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/2874109-ready
    ready(): boolean;
    setReady(value: boolean): void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/2874112-beginsession
    beginSession():void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/2874107-invalidatesession
    invalidateSession():void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/3229946-invalidatesessionwitherrormessag
    invalidateSessionWithErrorMessage(errorMessage: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/2919987-alertmessage
    alertMessage(): string | cocoascript.NSString;
    setAlertMessage(value: string | cocoascript.NSString): void;
  }
}
declare namespace cocoascript {
  /**
   * A set of parameters you use to define the configuration of an NFC tag command.
   * https://developer.apple.com/documentation/corenfc/nfctagcommandconfiguration
   */
  interface NFCTagCommandConfiguration extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfctagcommandconfiguration/2873693-maximumretries
    maximumRetries(): NSUInteger;
    setMaximumRetries(value: NSUInteger): void;
    // https://developer.apple.com/documentation/corenfc/nfctagcommandconfiguration/2873688-retryinterval
    retryInterval(): NSTimeInterval;
    setRetryInterval(value: NSTimeInterval): void;
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
   * https://developer.apple.com/documentation/corenfc/nfciso7816apdu
   */
  interface NFCISO7816APDU extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3075555-initwithinstructionclass
    initWithInstructionClass_instructionCode_p1Parameter_p2Parameter_data_expectedResponseLength(instructionClass: number, instructionCode: number, p1Parameter: number, p2Parameter: number, data: NSData, expectedResponseLength: NSInteger):NFCISO7816APDU;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3043828-initwithdata
    initWithData(data: NSData):NFCISO7816APDU;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3075556-instructionclass
    instructionClass(): number;
    setInstructionClass(value: number): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3075557-instructioncode
    instructionCode(): number;
    setInstructionCode(value: number): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3075558-p1parameter
    p1Parameter(): number;
    setP1Parameter(value: number): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3075559-p2parameter
    p2Parameter(): number;
    setP2Parameter(value: number): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3043826-data
    data(): NSData;
    setData(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816apdu/3075554-expectedresponselength
    expectedResponseLength(): NSInteger;
    setExpectedResponseLength(value: NSInteger): void;
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
   * https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration
   */
  interface NFCVASCommandConfiguration extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/3043860-initwithvasmode
    initWithVASMode_passTypeIdentifier_url(mode: NFCVASMode, passTypeIdentifier: string | cocoascript.NSString, url: NSURL):NFCVASCommandConfiguration;
    // https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/3043861-mode
    mode(): NFCVASMode;
    setMode(value: NFCVASMode): void;
    // https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/3043862-passtypeidentifier
    passTypeIdentifier(): string | cocoascript.NSString;
    setPassTypeIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corenfc/nfcvascommandconfiguration/3043863-url
    url(): NSURL;
    setUrl(value: NSURL): void;
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
   * https://developer.apple.com/documentation/corenfc/nfcvasresponse
   */
  interface NFCVASResponse extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcvasresponse/3043872-status
    status(): NFCVASErrorCode;
    setStatus(value: NFCVASErrorCode): void;
    // https://developer.apple.com/documentation/corenfc/nfcvasresponse/3043873-vasdata
    vasData(): NSData;
    setVasData(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcvasresponse/3043871-mobiletoken
    mobileToken(): NSData;
    setMobileToken(value: NSData): void;
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
   * https://developer.apple.com/documentation/corenfc/nfcndefpayload
   */
  interface NFCNDEFPayload extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3153119-wellknowntypeuripayloadwithurl
    wellKnownTypeURIPayloadWithURL(url: NSURL):NFCNDEFPayload;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3153118-wellknowntypeuripayloadwithstrin
    wellKnownTypeURIPayloadWithString(uri: string | cocoascript.NSString):NFCNDEFPayload;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3355755-wellknowntypetextpayloadwithstri
    wellKnownTypeTextPayloadWithString_locale(text: string | cocoascript.NSString, locale: NSLocale):NFCNDEFPayload;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3043842-initwithformat
    initWithFormat_type_identifier_payload(format: NFCTypeNameFormat, type: NSData, identifier: NSData, payload: NSData):NFCNDEFPayload;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3043843-initwithformat
    initWithFormat_type_identifier_payload_chunkSize(format: NFCTypeNameFormat, type: NSData, identifier: NSData, payload: NSData, chunkSize: any):NFCNDEFPayload;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3153115-wellknowtypetextpayloadwithstrin
    wellKnowTypeTextPayloadWithString_locale(text: string | cocoascript.NSString, locale: NSLocale):NFCNDEFPayload;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/2875573-identifier
    identifier(): NSData;
    setIdentifier(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/2875556-payload
    payload(): NSData;
    setPayload(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/2875576-type
    type(): NSData;
    setType(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/2875566-typenameformat
    typeNameFormat(): NFCTypeNameFormat;
    setTypeNameFormat(value: NFCTypeNameFormat): void;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3153117-wellknowntypeuripayload
    wellKnownTypeURIPayload():NSURL;
    // https://developer.apple.com/documentation/corenfc/nfcndefpayload/3153116-wellknowntypetextpayloadwithloca
    wellKnownTypeTextPayloadWithLocale(locale: NSLocale):NSString;
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
   * https://developer.apple.com/documentation/corenfc/nfcndefmessage
   */
  interface NFCNDEFMessage extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcndefmessage/3075560-initwithndefrecords
    initWithNDEFRecords(records: NFCNDEFPayload):NFCNDEFMessage;
    // https://developer.apple.com/documentation/corenfc/nfcndefmessage/3183039-ndefmessagewithdata
    ndefMessageWithData(data: NSData):NFCNDEFMessage;
    // https://developer.apple.com/documentation/corenfc/nfcndefmessage/2875563-records
    records(): NFCNDEFPayload;
    setRecords(value: NFCNDEFPayload): void;
    // https://developer.apple.com/documentation/corenfc/nfcndefmessage/3075561-length
    length(): NSUInteger;
    setLength(value: NSUInteger): void;
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
   * https://developer.apple.com/documentation/corenfc/nfctagreadersession
   */
  interface NFCTagReaderSession extends NFCReaderSession {
    // https://developer.apple.com/documentation/corenfc/nfctagreadersession/3043856-initwithpollingoption
    initWithPollingOption_delegate_queue(pollingOption: NFCPollingOption, delegate: NFCTagReaderSessionDelegate, queue: dispatch_queue_t):NFCTagReaderSession;
    // https://developer.apple.com/documentation/corenfc/nfctagreadersession/3153121-connecttotag
    connectToTag_completionHandler(tag: NFCTag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfctagreadersession/3043855-connectedtag
    connectedTag(): NFCTag;
    setConnectedTag(value: NFCTag): void;
    // https://developer.apple.com/documentation/corenfc/nfctagreadersession/3043857-restartpolling
    restartPolling():void;
    //
    alloc():NFCTagReaderSession;
    //
    init():NFCTagReaderSession;
  }
}

declare const NFCTagReaderSession: cocoascript.NFCTagReaderSession;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcpollingoption
  type NFCPollingOption = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A reader session for detecting NFC Data Exchange Format (NDEF) tags.
   * https://developer.apple.com/documentation/corenfc/nfcndefreadersession
   */
  interface NFCNDEFReaderSession extends NFCReaderSession {
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersession/2882064-initwithdelegate
    initWithDelegate_queue_invalidateAfterFirstRead(delegate: NFCNDEFReaderSessionDelegate, queue: dispatch_queue_t, invalidateAfterFirstRead: boolean):NFCNDEFReaderSession;
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersession/3153120-connecttotag
    connectToTag_completionHandler(tag: NFCNDEFTag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcndefreadersession/3075565-restartpolling
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
   * https://developer.apple.com/documentation/corenfc/nfcvasreadersession
   */
  interface NFCVASReaderSession extends NFCReaderSession {
    // https://developer.apple.com/documentation/corenfc/nfcvasreadersession/3043865-initwithvascommandconfigurations
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
   * https://developer.apple.com/documentation/corenfc/nfcreadersession-mnv
   */
  interface NFCReaderSession extends NSObject {
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/3043845-readingavailable
    readingAvailable(): boolean;
    setReadingAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/2874104-delegate
    delegate(): id;
    setDelegate(value: id): void;
    // https://developer.apple.com/documentation/corenfc/nfcreadersession/2874110-sessionqueue
    sessionQueue(): dispatch_queue_t;
    setSessionQueue(value: dispatch_queue_t): void;
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
   * https://developer.apple.com/documentation/corenfc/nfciso7816tag
   */
  interface NFCISO7816Tag extends NFCNDEFTag {
    // https://developer.apple.com/documentation/corenfc/nfciso7816tag/3043834-initialselectedaid
    initialSelectedAID(): string | cocoascript.NSString;
    setInitialSelectedAID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816tag/3183035-identifier
    identifier(): NSData;
    setIdentifier(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816tag/3183034-historicalbytes
    historicalBytes(): NSData;
    setHistoricalBytes(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816tag/3183033-applicationdata
    applicationData(): NSData;
    setApplicationData(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816tag/3183036-proprietaryapplicationdatacoding
    proprietaryApplicationDataCoding(): boolean;
    setProprietaryApplicationDataCoding(value: boolean): void;
    // https://developer.apple.com/documentation/corenfc/nfciso7816tag/3043835-sendcommandapdu
    sendCommandAPDU_completionHandler(apdu: NFCISO7816APDU, completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with a FeliCa™ tag.
   * https://developer.apple.com/documentation/corenfc/nfcfelicatag
   */
  interface NFCFeliCaTag extends NFCNDEFTag {
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043777-currentsystemcode
    currentSystemCode(): NSData;
    setCurrentSystemCode(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043776-currentidm
    currentIDm(): NSData;
    setCurrentIDm(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043778-pollingwithsystemcode
    pollingWithSystemCode_requestCode_timeSlot_completionHandler(systemCode: NSData, requestCode: NFCFeliCaPollingRequestCode, timeSlot: NFCFeliCaPollingTimeSlot, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043782-requestservicewithnodecodelist
    requestServiceWithNodeCodeList_completionHandler(nodeCodeList: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043781-requestservicev2withnodecodelist
    requestServiceV2WithNodeCodeList_completionHandler(nodeCodeList: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043780-requestresponsewithcompletionhan
    requestResponseWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043783-requestspecificationversionwithc
    requestSpecificationVersionWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043784-requestsystemcodewithcompletionh
    requestSystemCodeWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043785-resetmodewithcompletionhandler
    resetModeWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043779-readwithoutencryptionwithservice
    readWithoutEncryptionWithServiceCodeList_blockList_completionHandler(serviceCodeList: NSData, blockList: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043787-writewithoutencryptionwithservic
    writeWithoutEncryptionWithServiceCodeList_blockList_blockData_completionHandler(serviceCodeList: NSData, blockList: NSData, blockData: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcfelicatag/3043786-sendfelicacommandpacket
    sendFeliCaCommandPacket_completionHandler(commandPacket: NSData, completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an ISO 15693 tag.
   * https://developer.apple.com/documentation/corenfc/nfciso15693tag
   */
  interface NFCISO15693Tag extends NFCNDEFTag {
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/2882083-icmanufacturercode
    icManufacturerCode(): NSUInteger;
    setIcManufacturerCode(value: NSUInteger): void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/2882070-icserialnumber
    icSerialNumber(): NSData;
    setIcSerialNumber(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/2882078-identifier
    identifier(): NSData;
    setIdentifier(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043805-getsysteminfowithrequestflag
    getSystemInfoWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043810-readsingleblockwithrequestflags
    readSingleBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: number, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043817-writesingleblockwithrequestflags
    writeSingleBlockWithRequestFlags_blockNumber_dataBlock_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: number, dataBlock: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043807-lockblockwithrequestflags
    lockBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: number, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043809-readmultipleblockswithrequestfla
    readMultipleBlocksWithRequestFlags_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043816-writemultipleblockswithrequestfl
    writeMultipleBlocksWithRequestFlags_blockRange_dataBlocks_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043804-getmultipleblocksecuritystatuswi
    getMultipleBlockSecurityStatusWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043814-writeafiwithrequestflag
    writeAFIWithRequestFlag_afi_completionHandler(flags: NFCISO15693RequestFlag, afi: number, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043806-lockafiwithrequestflag
    lockAFIWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043815-writedsfidwithrequestflag
    writeDSFIDWithRequestFlag_dsfid_completionHandler(flags: NFCISO15693RequestFlag, dsfid: number, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043808-lockdfsidwithrequestflag
    lockDFSIDWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043811-resettoreadywithrequestflags
    resetToReadyWithRequestFlags_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043812-selectwithrequestflags
    selectWithRequestFlags_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043813-stayquietwithcompletionhandler
    stayQuietWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043799-customcommandwithrequestflag
    customCommandWithRequestFlag_customCommandCode_customRequestParameters_completionHandler(flags: NFCISO15693RequestFlag, customCommandCode: NSInteger, customRequestParameters: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043802-extendedreadsingleblockwithreque
    extendedReadSingleBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: NSInteger, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043803-extendedwritesingleblockwithrequ
    extendedWriteSingleBlockWithRequestFlags_blockNumber_dataBlock_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: NSInteger, dataBlock: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043800-extendedlockblockwithrequestflag
    extendedLockBlockWithRequestFlags_blockNumber_completionHandler(flags: NFCISO15693RequestFlag, blockNumber: NSInteger, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3043801-extendedreadmultipleblockswithre
    extendedReadMultipleBlocksWithRequestFlags_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3583264-lockdsfidwithrequestflag
    lockDSFIDWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551925-authenticatewithrequestflags
    authenticateWithRequestFlags_cryptoSuiteIdentifier_message_completionHandler(flags: NFCISO15693RequestFlag, cryptoSuiteIdentifier: NSInteger, message: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551926-challengewithrequestflags
    challengeWithRequestFlags_cryptoSuiteIdentifier_message_completionHandler(flags: NFCISO15693RequestFlag, cryptoSuiteIdentifier: NSInteger, message: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551927-extendedfastreadmultipleblockswi
    extendedFastReadMultipleBlocksWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551928-extendedgetmultipleblocksecurity
    extendedGetMultipleBlockSecurityStatusWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551929-extendedwritemultipleblockswithr
    extendedWriteMultipleBlocksWithRequestFlags_blockRange_dataBlocks_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, dataBlocks: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551930-fastreadmultipleblockswithreques
    fastReadMultipleBlocksWithRequestFlag_blockRange_completionHandler(flags: NFCISO15693RequestFlag, blockRange: NSRange, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3578121-getsysteminfoanduidwithrequestfl
    getSystemInfoAndUIDWithRequestFlag_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551931-keyupdatewithrequestflags
    keyUpdateWithRequestFlags_keyIdentifier_message_completionHandler(flags: NFCISO15693RequestFlag, keyIdentifier: NSInteger, message: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551932-readbufferwithrequestflags
    readBufferWithRequestFlags_completionHandler(flags: NFCISO15693RequestFlag, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfciso15693tag/3551933-sendrequestwithflag
    sendRequestWithFlag_commandCode_data_completionHandler(flags: NSInteger, commandCode: NSInteger, data: NSData, completionHandler: NSError):void;
  }
}
// https://developer.apple.com/documentation/corenfc/nfciso15693tagresponseerrorkey
declare const NFCISO15693TagResponseErrorKey: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An interface for interacting with a MIFARE® tag.
   * https://developer.apple.com/documentation/corenfc/nfcmifaretag
   */
  interface NFCMiFareTag extends NFCNDEFTag {
    // https://developer.apple.com/documentation/corenfc/nfcmifaretag/3153113-mifarefamily
    mifareFamily(): NFCMiFareFamily;
    setMifareFamily(value: NFCMiFareFamily): void;
    // https://developer.apple.com/documentation/corenfc/nfcmifaretag/3183038-identifier
    identifier(): NSData;
    setIdentifier(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcmifaretag/3183037-historicalbytes
    historicalBytes(): NSData;
    setHistoricalBytes(value: NSData): void;
    // https://developer.apple.com/documentation/corenfc/nfcmifaretag/3043838-sendmifarecommand
    sendMiFareCommand_completionHandler(command: NSData, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/corenfc/nfcmifaretag/3153114-sendmifareiso7816command
    sendMiFareISO7816Command_completionHandler(apdu: NFCISO7816APDU, completionHandler: NSError):void;
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcndefstatus
  type NFCNDEFStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfctagtype
  type NFCTagType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/vasmode
  type VASMode = cocoascript.NFCVASMode;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/vaserrorcode
  type VASErrorCode = cocoascript.NFCVASErrorCode;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfctypenameformat
  type NFCTypeNameFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcreadererror
  type NFCReaderError = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/corenfc/nfcerrordomain
declare const NFCErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/pollingrequestcode
  type PollingRequestCode = cocoascript.NFCFeliCaPollingRequestCode;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/pollingtimeslot
  type PollingTimeSlot = cocoascript.NFCFeliCaPollingTimeSlot;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/encryptionid
  type EncryptionId = cocoascript.NFCFeliCaEncryptionId;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/requestflag
  type RequestFlag = cocoascript.NFCISO15693RequestFlag;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcmifarefamily
  type NFCMiFareFamily = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcvasmode
  type NFCVASMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcvaserrorcode
  type NFCVASErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcfelicaencryptionid
  type NFCFeliCaEncryptionId = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcfelicapollingrequestcode
  type NFCFeliCaPollingRequestCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfcfelicapollingtimeslot
  type NFCFeliCaPollingTimeSlot = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfciso15693requestflag
  type NFCISO15693RequestFlag = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corenfc/nfciso15693responseflag
  type NFCISO15693ResponseFlag = number;
}
