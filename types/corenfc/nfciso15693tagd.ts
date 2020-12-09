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

