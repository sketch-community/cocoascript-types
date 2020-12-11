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
