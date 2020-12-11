declare namespace cocoascript {
  /**
   * An instance of IOBluetoothDevice represents a single remote Bluetooth device.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice
   */
  interface IOBluetoothDevice extends IOBluetoothObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431756-addressstring
    addressString(): cocoascript.NSString;
    setAddressString(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1428484-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431263-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1435069-deviceclassmajor
    deviceClassMajor(): cocoascript.BluetoothDeviceClassMajor;
    setDeviceClassMajor(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429321-deviceclassminor
    deviceClassMinor(): cocoascript.BluetoothDeviceClassMinor;
    setDeviceClassMinor(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1427806-handsfreeaudiogateway
    handsFreeAudioGateway(): cocoascript.BOOL;
    setHandsFreeAudioGateway(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1427742-handsfreedevice
    handsFreeDevice(): cocoascript.BOOL;
    setHandsFreeDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430448-lastnameupdate
    lastNameUpdate(): cocoascript.NSDate;
    setLastNameUpdate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434669-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429807-nameoraddress
    nameOrAddress(): cocoascript.NSString;
    setNameOrAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429342-serviceclassmajor
    serviceClassMajor(): cocoascript.BluetoothServiceClassMajor;
    setServiceClassMajor(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432771-services
    services(): cocoascript.NSArray;
    setServices(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431127-rssi
    RSSI():cocoascript.BluetoothHCIRSSIValue;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433449-addtofavorites
    addToFavorites():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434886-awakeafterusingcoder
    awakeAfterUsingCoder(coder: cocoascript.NSCoder):cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433689-closeconnection
    closeConnection():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434306-getaddress
    getAddress():cocoascript.BluetoothDeviceAddress;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1428369-getclockoffset
    getClockOffset():cocoascript.BluetoothClockOffset;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433989-getencryptionmode
    getEncryptionMode():cocoascript.BluetoothHCIEncryptionMode;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434397-getlastinquiryupdate
    getLastInquiryUpdate():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434331-getlastservicesupdate
    getLastServicesUpdate():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430010-getlinktype
    getLinkType():cocoascript.BluetoothLinkType;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1428665-getpagescanmode
    getPageScanMode():cocoascript.BluetoothPageScanMode;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432874-getpagescanperiodmode
    getPageScanPeriodMode():cocoascript.BluetoothPageScanPeriodMode;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432512-getpagescanrepetitionmode
    getPageScanRepetitionMode():cocoascript.BluetoothPageScanRepetitionMode;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433525-getservicerecordforuuid
    getServiceRecordForUUID(sdpUUID: cocoascript.IOBluetoothSDPUUID):cocoascript.IOBluetoothSDPServiceRecord;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1427826-handsfreeaudiogatewayservicereco
    handsFreeAudioGatewayServiceRecord():cocoascript.IOBluetoothSDPServiceRecord;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1427740-handsfreedeviceservicerecord
    handsFreeDeviceServiceRecord():cocoascript.IOBluetoothSDPServiceRecord;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432785-isconnected
    isConnected():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433415-isfavorite
    isFavorite():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434030-isincoming
    isIncoming():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432940-ispaired
    isPaired():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1428435-openconnection
    openConnection():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429815-openconnection
    openConnection(target: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433547-openconnection
    openConnection_withPageTimeout_authenticationRequired(target: cocoascript.IOBluetoothDevice, pageTimeoutValue: cocoascript.BluetoothHCIPageTimeout, authenticationRequired: cocoascript.BOOL):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431981-openl2capchannelasync
    openL2CAPChannelAsync_withPSM_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelDelegate: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430889-openl2capchannelasync
    openL2CAPChannelAsync_withPSM_withConfiguration_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelConfiguration: cocoascript.NSDictionary, channelDelegate: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434939-openl2capchannelsync
    openL2CAPChannelSync_withPSM_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelDelegate: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429338-openl2capchannelsync
    openL2CAPChannelSync_withPSM_withConfiguration_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelConfiguration: cocoascript.NSDictionary, channelDelegate: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1435022-openrfcommchannelasync
    openRFCOMMChannelAsync_withChannelID_delegate(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, channelID: cocoascript.BluetoothRFCOMMChannelID, channelDelegate: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431606-openrfcommchannelsync
    openRFCOMMChannelSync_withChannelID_delegate(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, channelID: cocoascript.BluetoothRFCOMMChannelID, channelDelegate: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432337-performsdpquery
    performSDPQuery(target: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431740-performsdpquery
    performSDPQuery_uuids(target: cocoascript.IOBluetoothDevice, uuidArray: cocoascript.NSArray):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434998-rawrssi
    rawRSSI():cocoascript.BluetoothHCIRSSIValue;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432994-recentaccessdate
    recentAccessDate():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429542-registerfordisconnectnotificatio
    registerForDisconnectNotification_selector(observer: cocoascript.IOBluetoothDevice, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433706-remotenamerequest
    remoteNameRequest(target: cocoascript.IOBluetoothDevice):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432647-remotenamerequest
    remoteNameRequest_withPageTimeout(target: cocoascript.IOBluetoothDevice, pageTimeoutValue: cocoascript.BluetoothHCIPageTimeout):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430142-removefromfavorites
    removeFromFavorites():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430322-requestauthentication
    requestAuthentication():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431303-sendl2capechorequest
    sendL2CAPEchoRequest_length(data: void, length: cocoascript.UInt16):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431049-setsupervisiontimeout
    setSupervisionTimeout(timeout: cocoascript.UInt16):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1589893-openl2capchannel
    openL2CAPChannel_findExisting_newChannel(psm: cocoascript.BluetoothL2CAPPSM, findExisting: cocoascript.BOOL, newChannel: cocoascript.IOBluetoothL2CAPChannel):cocoascript.IOReturn;
    //
    alloc():cocoascript.IOBluetoothDevice;
    //
    init():cocoascript.IOBluetoothDevice;
  }
}

declare const IOBluetoothDevice: cocoascript.IOBluetoothDevice;
