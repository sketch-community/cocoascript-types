declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks sent from an NFC tag reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate
   */
  interface NFCTagReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075579-tagreadersessiondidbecomeactive
    tagReaderSessionDidBecomeActive(session: cocoascript.NFCTagReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075577-tagreadersession
    tagReaderSession_didDetectTags(session: cocoascript.NFCTagReaderSession, tags: cocoascript.NFCTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagreadersessiondelegate/3075578-tagreadersession
    tagReaderSession_didInvalidateWithError(session: cocoascript.NFCTagReaderSession, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A collection of callbacks that provide information about the status of an NFC reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate
   */
  interface NFCReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874106-readersession
    readerSession_didDetectTags(session: cocoascript.NFCReaderSession, tags: cocoascript.NFCTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874102-readersession
    readerSession_didInvalidateWithError(session: cocoascript.NFCReaderSession, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersessiondelegate/2874105-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: cocoascript.NFCReaderSession):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an NDEF tag.
   * doc://com.apple.documentation/documentation/corenfc/nfcndeftag
   */
  interface NFCNDEFTag extends NSCopying {
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3173178-available
    available(): cocoascript.BOOL;
    setAvailable(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3144659-queryndefstatuswithcompletionhan
    queryNDEFStatusWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3075571-readndefwithcompletionhandler
    readNDEFWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3075574-writendef
    writeNDEF_completionHandler(ndefMessage: cocoascript.NFCNDEFMessage, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndeftag/3075573-writelockwithcompletionhandler
    writeLockWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that an object implements to serve as an NDEF reader session delegate.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate
   */
  interface NFCNDEFReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/3075567-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: cocoascript.NFCNDEFReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/2875568-readersession
    readerSession_didDetectNDEFs(session: cocoascript.NFCNDEFReaderSession, messages: cocoascript.NFCNDEFMessage):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/3075566-readersession
    readerSession_didDetectTags(session: cocoascript.NFCNDEFReaderSession, tags: cocoascript.NFCNDEFTag):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersessiondelegate/2875570-readersession
    readerSession_didInvalidateWithError(session: cocoascript.NFCNDEFReaderSession, error: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * A protocol that an object implements to receive callbacks from a VAS reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate
   */
  interface NFCVASReaderSessionDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3255204-readersessiondidbecomeactive
    readerSessionDidBecomeActive(session: cocoascript.NFCVASReaderSession):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3043868-readersession
    readerSession_didReceiveVASResponses(session: cocoascript.NFCVASReaderSession, responses: cocoascript.NFCVASResponse):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvasreadersessiondelegate/3043867-readersession
    readerSession_didInvalidateWithError(session: cocoascript.NFCVASReaderSession, error: cocoascript.NSError):void;
  }
}
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
declare namespace cocoascript {
  /**
   * A general interface for interacting with a reader session.
   * doc://com.apple.documentation/documentation/corenfc/nfcreadersession
   */
  interface NFCReaderSession extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874109-ready
    ready(): cocoascript.BOOL;
    setReady(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874112-beginsession
    beginSession():void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2874107-invalidatesession
    invalidateSession():void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/3229946-invalidatesessionwitherrormessag
    invalidateSessionWithErrorMessage(errorMessage: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcreadersession/2919987-alertmessage
    alertMessage(): cocoascript.NSString;
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
    maximumRetries(): cocoascript.NSUInteger;
    setMaximumRetries(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfctagcommandconfiguration/2873688-retryinterval
    retryInterval(): cocoascript.NSTimeInterval;
    setRetryInterval(): void;
    //
    alloc():cocoascript.NFCTagCommandConfiguration;
    //
    init():cocoascript.NFCTagCommandConfiguration;
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
declare namespace cocoascript {
  /**
   * An object providing the configuration for a GET VAS DATA command.
   * doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration
   */
  interface NFCVASCommandConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043860-initwithvasmode
    initWithVASMode_passTypeIdentifier_url(mode: cocoascript.NFCVASMode, passTypeIdentifier: cocoascript.NSString, url: cocoascript.NSURL):cocoascript.NFCVASCommandConfiguration;
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043861-mode
    mode(): cocoascript.NFCVASMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043862-passtypeidentifier
    passTypeIdentifier(): cocoascript.NSString;
    setPassTypeIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcvascommandconfiguration/3043863-url
    url(): cocoascript.NSURL;
    setUrl(): void;
    //
    alloc():cocoascript.NFCVASCommandConfiguration;
    //
    init():cocoascript.NFCVASCommandConfiguration;
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
declare namespace cocoascript {
  /**
   * A payload record in an NFC NDEF message.
   * doc://com.apple.documentation/documentation/corenfc/nfcndefpayload
   */
  interface NFCNDEFPayload extends NSObject {
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3043842-initwithformat
    initWithFormat_type_identifier_payload(format: cocoascript.NFCTypeNameFormat, type: cocoascript.NSData, identifier: cocoascript.NSData, payload: cocoascript.NSData):cocoascript.NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3043843-initwithformat
    initWithFormat_type_identifier_payload_chunkSize(format: cocoascript.NFCTypeNameFormat, type: cocoascript.NSData, identifier: cocoascript.NSData, payload: cocoascript.NSData, chunkSize: cocoascript.size_t):cocoascript.NFCNDEFPayload;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875573-identifier
    identifier(): cocoascript.NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875556-payload
    payload(): cocoascript.NSData;
    setPayload(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875576-type
    type(): cocoascript.NSData;
    setType(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/2875566-typenameformat
    typeNameFormat(): cocoascript.NFCTypeNameFormat;
    setTypeNameFormat(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153117-wellknowntypeuripayload
    wellKnownTypeURIPayload():cocoascript.NSURL;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefpayload/3153116-wellknowntypetextpayloadwithloca
    wellKnownTypeTextPayloadWithLocale(locale: cocoascript.NSLocale):cocoascript.NSString;
    //
    alloc():cocoascript.NFCNDEFPayload;
    //
    init():cocoascript.NFCNDEFPayload;
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
    initWithDelegate_queue_invalidateAfterFirstRead(delegate: cocoascript.NFCNDEFReaderSessionDelegate, queue: cocoascript.dispatch_queue_t, invalidateAfterFirstRead: cocoascript.BOOL):cocoascript.NFCNDEFReaderSession;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/3153120-connecttotag
    connectToTag_completionHandler(tag: cocoascript.NFCNDEFTag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcndefreadersession/3075565-restartpolling
    restartPolling():void;
    //
    alloc():cocoascript.NFCNDEFReaderSession;
    //
    init():cocoascript.NFCNDEFReaderSession;
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
    initWithVASCommandConfigurations_delegate_queue(commandConfigurations: cocoascript.NFCVASCommandConfiguration, delegate: cocoascript.NFCVASReaderSessionDelegate, queue: cocoascript.dispatch_queue_t):cocoascript.NFCVASReaderSession;
    //
    alloc():cocoascript.NFCVASReaderSession;
    //
    init():cocoascript.NFCVASReaderSession;
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
declare namespace cocoascript {
  /**
   * An interface for interacting with a FeliCa™ tag.
   * doc://com.apple.documentation/documentation/corenfc/nfcfelicatag
   */
  interface NFCFeliCaTag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043777-currentsystemcode
    currentSystemCode(): cocoascript.NSData;
    setCurrentSystemCode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043776-currentidm
    currentIDm(): cocoascript.NSData;
    setCurrentIDm(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043778-pollingwithsystemcode
    pollingWithSystemCode_requestCode_timeSlot_completionHandler(systemCode: cocoascript.NSData, requestCode: cocoascript.NFCFeliCaPollingRequestCode, timeSlot: cocoascript.NFCFeliCaPollingTimeSlot, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043782-requestservicewithnodecodelist
    requestServiceWithNodeCodeList_completionHandler(nodeCodeList: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043781-requestservicev2withnodecodelist
    requestServiceV2WithNodeCodeList_completionHandler(nodeCodeList: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043780-requestresponsewithcompletionhan
    requestResponseWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043783-requestspecificationversionwithc
    requestSpecificationVersionWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043784-requestsystemcodewithcompletionh
    requestSystemCodeWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043785-resetmodewithcompletionhandler
    resetModeWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043779-readwithoutencryptionwithservice
    readWithoutEncryptionWithServiceCodeList_blockList_completionHandler(serviceCodeList: cocoascript.NSData, blockList: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043787-writewithoutencryptionwithservic
    writeWithoutEncryptionWithServiceCodeList_blockList_blockData_completionHandler(serviceCodeList: cocoascript.NSData, blockList: cocoascript.NSData, blockData: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcfelicatag/3043786-sendfelicacommandpacket
    sendFeliCaCommandPacket_completionHandler(commandPacket: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with an ISO 15693 tag.
   * doc://com.apple.documentation/documentation/corenfc/nfciso15693tag
   */
  interface NFCISO15693Tag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/2882083-icmanufacturercode
    icManufacturerCode(): cocoascript.NSUInteger;
    setIcManufacturerCode(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/2882070-icserialnumber
    icSerialNumber(): cocoascript.NSData;
    setIcSerialNumber(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/2882078-identifier
    identifier(): cocoascript.NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043805-getsysteminfowithrequestflag
    getSystemInfoWithRequestFlag_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043810-readsingleblockwithrequestflags
    readSingleBlockWithRequestFlags_blockNumber_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockNumber: number, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043817-writesingleblockwithrequestflags
    writeSingleBlockWithRequestFlags_blockNumber_dataBlock_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockNumber: number, dataBlock: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043807-lockblockwithrequestflags
    lockBlockWithRequestFlags_blockNumber_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockNumber: number, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043809-readmultipleblockswithrequestfla
    readMultipleBlocksWithRequestFlags_blockRange_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043816-writemultipleblockswithrequestfl
    writeMultipleBlocksWithRequestFlags_blockRange_dataBlocks_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, dataBlocks: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043804-getmultipleblocksecuritystatuswi
    getMultipleBlockSecurityStatusWithRequestFlag_blockRange_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043814-writeafiwithrequestflag
    writeAFIWithRequestFlag_afi_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, afi: number, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043806-lockafiwithrequestflag
    lockAFIWithRequestFlag_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043815-writedsfidwithrequestflag
    writeDSFIDWithRequestFlag_dsfid_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, dsfid: number, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043808-lockdfsidwithrequestflag
    lockDFSIDWithRequestFlag_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043811-resettoreadywithrequestflags
    resetToReadyWithRequestFlags_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043812-selectwithrequestflags
    selectWithRequestFlags_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043813-stayquietwithcompletionhandler
    stayQuietWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043799-customcommandwithrequestflag
    customCommandWithRequestFlag_customCommandCode_customRequestParameters_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, customCommandCode: cocoascript.NSInteger, customRequestParameters: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043802-extendedreadsingleblockwithreque
    extendedReadSingleBlockWithRequestFlags_blockNumber_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockNumber: cocoascript.NSInteger, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043803-extendedwritesingleblockwithrequ
    extendedWriteSingleBlockWithRequestFlags_blockNumber_dataBlock_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockNumber: cocoascript.NSInteger, dataBlock: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043800-extendedlockblockwithrequestflag
    extendedLockBlockWithRequestFlags_blockNumber_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockNumber: cocoascript.NSInteger, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3043801-extendedreadmultipleblockswithre
    extendedReadMultipleBlocksWithRequestFlags_blockRange_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tagresponseerrorkey
    NFCISO15693TagResponseErrorKey(): cocoascript.const;
    setNFCISO15693TagResponseErrorKey(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3583264-lockdsfidwithrequestflag
    lockDSFIDWithRequestFlag_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551925-authenticatewithrequestflags
    authenticateWithRequestFlags_cryptoSuiteIdentifier_message_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, cryptoSuiteIdentifier: cocoascript.NSInteger, message: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551926-challengewithrequestflags
    challengeWithRequestFlags_cryptoSuiteIdentifier_message_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, cryptoSuiteIdentifier: cocoascript.NSInteger, message: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551927-extendedfastreadmultipleblockswi
    extendedFastReadMultipleBlocksWithRequestFlag_blockRange_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551928-extendedgetmultipleblocksecurity
    extendedGetMultipleBlockSecurityStatusWithRequestFlag_blockRange_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551929-extendedwritemultipleblockswithr
    extendedWriteMultipleBlocksWithRequestFlags_blockRange_dataBlocks_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, dataBlocks: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551930-fastreadmultipleblockswithreques
    fastReadMultipleBlocksWithRequestFlag_blockRange_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, blockRange: cocoascript.NSRange, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3578121-getsysteminfoanduidwithrequestfl
    getSystemInfoAndUIDWithRequestFlag_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551931-keyupdatewithrequestflags
    keyUpdateWithRequestFlags_keyIdentifier_message_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, keyIdentifier: cocoascript.NSInteger, message: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551932-readbufferwithrequestflags
    readBufferWithRequestFlags_completionHandler(flags: cocoascript.NFCISO15693RequestFlag, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfciso15693tag/3551933-sendrequestwithflag
    sendRequestWithFlag_commandCode_data_completionHandler(flags: cocoascript.NSInteger, commandCode: cocoascript.NSInteger, data: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for interacting with a MIFARE® tag.
   * doc://com.apple.documentation/documentation/corenfc/nfcmifaretag
   */
  interface NFCMiFareTag extends NFCNDEFTag {
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3153113-mifarefamily
    mifareFamily(): cocoascript.NFCMiFareFamily;
    setMifareFamily(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3183038-identifier
    identifier(): cocoascript.NSData;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3183037-historicalbytes
    historicalBytes(): cocoascript.NSData;
    setHistoricalBytes(): void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3043838-sendmifarecommand
    sendMiFareCommand_completionHandler(command: cocoascript.NSData, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/corenfc/nfcmifaretag/3153114-sendmifareiso7816command
    sendMiFareISO7816Command_completionHandler(apdu: cocoascript.NFCISO7816APDU, completionHandler: cocoascript.NSError):void;
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
declare const NFCErrorDomain: cocoascript.NSErrorDomain;
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
