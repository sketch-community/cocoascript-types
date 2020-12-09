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

