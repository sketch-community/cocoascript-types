declare namespace cocoascript {
  /**
   * An OBEX Session with a Bluetooth RFCOMM channel as the transport.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession
   */
  interface IOBluetoothOBEXSession extends OBEXSession {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1429196-initwithsdpservicerecord
    initWithSDPServiceRecord(inSDPServiceRecord: cocoascript.IOBluetoothSDPServiceRecord):cocoascript.IOBluetoothOBEXSession;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1429922-initwithdevice
    initWithDevice_channelID(inDevice: cocoascript.IOBluetoothDevice, inChannelID: cocoascript.BluetoothRFCOMMChannelID):cocoascript.IOBluetoothOBEXSession;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1431317-initwithincomingrfcommchannel
    initWithIncomingRFCOMMChannel_eventSelector_selectorTarget_refCon(inChannel: cocoascript.IOBluetoothRFCOMMChannel, inEventSelector: cocoascript.SEL, inEventSelectorTarget: cocoascript.IOBluetoothOBEXSession, inUserRefCon: void):cocoascript.IOBluetoothOBEXSession;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1430752-closetransportconnection
    closeTransportConnection():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1428836-getdevice
    getDevice():cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1434690-getrfcommchannel
    getRFCOMMChannel():cocoascript.IOBluetoothRFCOMMChannel;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1433323-hasopentransportconnection
    hasOpenTransportConnection():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1435097-issessiontargetamac
    isSessionTargetAMac():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1428333-opentransportconnection
    openTransportConnection_selectorTarget_refCon(inSelector: cocoascript.SEL, inTarget: cocoascript.IOBluetoothOBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1429280-restarttransmission
    restartTransmission():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1432899-sendbuffertroughchannel
    sendBufferTroughChannel():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1428500-senddatatotransport
    sendDataToTransport_dataLength(inDataToSend: void, inDataLength: cocoascript.size_t):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1431213-setobexsessionopenconnectioncall
    setOBEXSessionOpenConnectionCallback_refCon(inCallback: cocoascript.IOBluetoothOBEXSessionOpenConnectionCallback, inUserRefCon: void):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1434129-setopentransportconnectionasyncs
    setOpenTransportConnectionAsyncSelector_target_refCon(inSelector: cocoascript.SEL, inSelectorTarget: cocoascript.IOBluetoothOBEXSession, inUserRefCon: cocoascript.IOBluetoothOBEXSession):void;
    //
    alloc():cocoascript.IOBluetoothOBEXSession;
    //
    init():cocoascript.IOBluetoothOBEXSession;
  }
}

declare const IOBluetoothOBEXSession: cocoascript.IOBluetoothOBEXSession;
