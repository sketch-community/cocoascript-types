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

