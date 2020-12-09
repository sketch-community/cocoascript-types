declare namespace cocoascript {
/**
 * Object representing an OBEX connection to a remote target.
 * doc://com.apple.documentation/documentation/iobluetooth/obexsession
 */
interface OBEXSession extends NSObject {
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1429402-obexabort
  OBEXAbort_optionalHeadersLength_eventSelector_selectorTarget_refCon(inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1432852-obexabortresponse
  OBEXAbortResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1433181-obexconnect
  OBEXConnect_maxPacketLength_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inFlags: cocoascript.OBEXFlags, inMaxPacketLength: cocoascript.OBEXMaxPacketLength, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434390-obexconnectresponse
  OBEXConnectResponse_flags_maxPacketLength_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inFlags: cocoascript.OBEXFlags, inMaxPacketLength: cocoascript.OBEXMaxPacketLength, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434125-obexdisconnect
  OBEXDisconnect_optionalHeadersLength_eventSelector_selectorTarget_refCon(inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434021-obexdisconnectresponse
  OBEXDisconnectResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434710-obexget
  OBEXGet_headers_headersLength_eventSelector_selectorTarget_refCon(isFinalChunk: cocoascript.Boolean, inHeaders: void, inHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434941-obexgetresponse
  OBEXGetResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1431295-obexput
  OBEXPut_headersData_headersDataLength_bodyData_bodyDataLength_eventSelector_selectorTarget_refCon(isFinalChunk: cocoascript.Boolean, inHeadersData: void, inHeadersDataLength: cocoascript.size_t, inBodyData: void, inBodyDataLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1429618-obexputresponse
  OBEXPutResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1428620-obexsetpath
  OBEXSetPath_constants_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inFlags: cocoascript.OBEXFlags, inConstants: cocoascript.OBEXConstants, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434520-obexsetpathresponse
  OBEXSetPathResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: cocoascript.size_t, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434885-clienthandleincomingdata
  clientHandleIncomingData(event: cocoascript.OBEXTransportEvent):void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434109-closetransportconnection
  closeTransportConnection():cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1431412-getavailablecommandpayloadlength
  getAvailableCommandPayloadLength(inOpCode: cocoascript.OBEXOpCode):cocoascript.OBEXMaxPacketLength;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1428698-getavailablecommandresponsepaylo
  getAvailableCommandResponsePayloadLength(inOpCode: cocoascript.OBEXOpCode):cocoascript.OBEXMaxPacketLength;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1428595-getmaxpacketlength
  getMaxPacketLength():cocoascript.OBEXMaxPacketLength;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1429707-hasopenobexconnection
  hasOpenOBEXConnection():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1430785-hasopentransportconnection
  hasOpenTransportConnection():void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1431621-opentransportconnection
  openTransportConnection_selectorTarget_refCon(inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1430616-senddatatotransport
  sendDataToTransport_dataLength(inDataToSend: void, inDataLength: cocoascript.size_t):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1432452-serverhandleincomingdata
  serverHandleIncomingData(event: cocoascript.OBEXTransportEvent):void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1431039-seteventcallback
  setEventCallback(inEventCallback: cocoascript.OBEXSessionEventCallback):void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434706-seteventrefcon
  setEventRefCon(inRefCon: void):void;
  // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1430378-seteventselector
  setEventSelector_target_refCon(inEventSelector: cocoascript.SEL, inEventSelectorTarget: cocoascript.OBEXSession, inUserRefCon: cocoascript.OBEXSession):void;
  // 
  alloc():cocoascript.OBEXSession;
  // 
  init():cocoascript.OBEXSession;
}
}
declare const OBEXSession: cocoascript.OBEXSession;

