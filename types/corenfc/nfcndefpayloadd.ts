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
  wellKnownTypeTextPayloadWithLocale(locale: cocoascript._Nullable):cocoascript.NSString;
  // 
  alloc():cocoascript.NFCNDEFPayload;
  // 
  init():cocoascript.NFCNDEFPayload;
}
}
declare const NFCNDEFPayload: cocoascript.NFCNDEFPayload;

