declare namespace cocoascript {
  /**
   * An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement
   */
  interface IOBluetoothSDPDataElement extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396701-initwithelementvalue
    initWithElementValue(element: NSObject):IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396719-initwithtype
    initWithType_sizeDescriptor_size_value(newType: BluetoothSDPDataElementTypeDescriptor, newSizeDescriptor: BluetoothSDPDataElementSizeDescriptor, newSize: number, newValue: NSObject):IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396689-containsdataelement
    containsDataElement(dataElement: IOBluetoothSDPDataElement):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396715-containsvalue
    containsValue(cmpValue: NSObject):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396708-getarrayvalue
    getArrayValue():NSArray;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396717-getdatavalue
    getDataValue():NSData;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396693-getnumbervalue
    getNumberValue():NSNumber;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396704-getsdpdataelementref
    getSDPDataElementRef():IOBluetoothSDPDataElementRef;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396713-getsize
    getSize():number;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396691-getsizedescriptor
    getSizeDescriptor():BluetoothSDPDataElementSizeDescriptor;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396695-getstringvalue
    getStringValue():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396697-gettypedescriptor
    getTypeDescriptor():BluetoothSDPDataElementTypeDescriptor;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396702-getuuidvalue
    getUUIDValue():IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396699-getvalue
    getValue():NSObject;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396721-withelementvalue
    withElementValue(element: NSObject):IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396687-withsdpdataelementref
    withSDPDataElementRef(sdpDataElementRef: IOBluetoothSDPDataElementRef):IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpdataelement/1396706-withtype
    withType_sizeDescriptor_size_value(type: BluetoothSDPDataElementTypeDescriptor, newSizeDescriptor: BluetoothSDPDataElementSizeDescriptor, newSize: number, newValue: NSObject):IOBluetoothSDPDataElement;
    //
    alloc():IOBluetoothSDPDataElement;
    //
    init():IOBluetoothSDPDataElement;
  }
}

declare const IOBluetoothSDPDataElement: cocoascript.IOBluetoothSDPDataElement;
declare namespace cocoascript {
  /**
   * IOBluetoothSDPServiceAttribute represents a single SDP service attribute.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute
   */
  interface IOBluetoothSDPServiceAttribute extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1434496-initwithid
    initWithID_attributeElement(newAttributeID: BluetoothSDPServiceAttributeID, attributeElement: IOBluetoothSDPDataElement):IOBluetoothSDPServiceAttribute;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1434660-initwithid
    initWithID_attributeElementValue(newAttributeID: BluetoothSDPServiceAttributeID, attributeElementValue: NSObject):IOBluetoothSDPServiceAttribute;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1432222-getattributeid
    getAttributeID():BluetoothSDPServiceAttributeID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1434313-getdataelement
    getDataElement():IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1429114-getiddataelement
    getIDDataElement():IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1431154-withid
    withID_attributeElement(newAttributeID: BluetoothSDPServiceAttributeID, attributeElement: IOBluetoothSDPDataElement):IOBluetoothSDPServiceAttribute;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpserviceattribute/1430305-withid
    withID_attributeElementValue(newAttributeID: BluetoothSDPServiceAttributeID, attributeElementValue: NSObject):IOBluetoothSDPServiceAttribute;
    //
    alloc():IOBluetoothSDPServiceAttribute;
    //
    init():IOBluetoothSDPServiceAttribute;
  }
}

declare const IOBluetoothSDPServiceAttribute: cocoascript.IOBluetoothSDPServiceAttribute;
declare namespace cocoascript {
  /**
   * An instance of this class represents a single SDP service record.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord
   */
  interface IOBluetoothSDPServiceRecord extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1431493-initwithservicedictionary
    initWithServiceDictionary_device(serviceDict: NSDictionary, device: IOBluetoothDevice):IOBluetoothSDPServiceRecord;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1433779-attributes
    attributes(): NSDictionary;
    setAttributes(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1433059-device
    device(): IOBluetoothDevice;
    setDevice(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1434569-sortedattributes
    sortedAttributes(): NSArray;
    setSortedAttributes(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1429300-getattributedataelement
    getAttributeDataElement(attributeID: BluetoothSDPServiceAttributeID):IOBluetoothSDPDataElement;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1430339-getl2cappsm
    getL2CAPPSM(outPSM: BluetoothL2CAPPSM):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1434175-getrfcommchannelid
    getRFCOMMChannelID(rfcommChannelID: BluetoothRFCOMMChannelID):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1429688-getsdpservicerecordref
    getSDPServiceRecordRef():IOBluetoothSDPServiceRecordRef;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1434797-getservicename
    getServiceName():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1432281-getservicerecordhandle
    getServiceRecordHandle(outServiceRecordHandle: BluetoothSDPServiceRecordHandle):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1427810-handsfreesupportedfeatures
    handsFreeSupportedFeatures():number;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1433726-hasservicefromarray
    hasServiceFromArray(array: NSArray):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1431678-matchessearcharray
    matchesSearchArray(searchArray: NSArray):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1429229-matchesuuid16
    matchesUUID16(uuid16: BluetoothSDPUUID16):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1434055-matchesuuidarray
    matchesUUIDArray(uuidArray: NSArray):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1432315-removeservicerecord
    removeServiceRecord():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1519679-getattributes
    getAttributes():NSDictionary;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1519680-getdevice
    getDevice():IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1430450-publishedservicerecordwithdictio
    publishedServiceRecordWithDictionary(serviceDict: NSDictionary):IOBluetoothSDPServiceRecord;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1434716-withsdpservicerecordref
    withSDPServiceRecordRef(sdpServiceRecordRef: IOBluetoothSDPServiceRecordRef):IOBluetoothSDPServiceRecord;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/1435073-withservicedictionary
    withServiceDictionary_device(serviceDict: NSDictionary, device: IOBluetoothDevice):IOBluetoothSDPServiceRecord;
    //
    alloc():IOBluetoothSDPServiceRecord;
    //
    init():IOBluetoothSDPServiceRecord;
  }
}

declare const IOBluetoothSDPServiceRecord: cocoascript.IOBluetoothSDPServiceRecord;
declare namespace cocoascript {
  /**
   * An instance of IOBluetoothDevice represents a single remote Bluetooth device.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice
   */
  interface IOBluetoothDevice extends IOBluetoothObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434863-devicewithaddress
    deviceWithAddress(address: BluetoothDeviceAddress):IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434342-devicewithaddressstring
    deviceWithAddressString(address: string | cocoascript.NSString):IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431756-addressstring
    addressString(): string | cocoascript.NSString;
    setAddressString(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1428484-classofdevice
    classOfDevice(): BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431263-connectionhandle
    connectionHandle(): BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1435069-deviceclassmajor
    deviceClassMajor(): BluetoothDeviceClassMajor;
    setDeviceClassMajor(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1429321-deviceclassminor
    deviceClassMinor(): BluetoothDeviceClassMinor;
    setDeviceClassMinor(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1427806-handsfreeaudiogateway
    handsFreeAudioGateway(): BOOL;
    setHandsFreeAudioGateway(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1427742-handsfreedevice
    handsFreeDevice(): BOOL;
    setHandsFreeDevice(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1430448-lastnameupdate
    lastNameUpdate(): NSDate;
    setLastNameUpdate(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434669-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1429807-nameoraddress
    nameOrAddress(): string | cocoascript.NSString;
    setNameOrAddress(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1429342-serviceclassmajor
    serviceClassMajor(): BluetoothServiceClassMajor;
    setServiceClassMajor(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432771-services
    services(): NSArray;
    setServices(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431127-rssi
    RSSI():BluetoothHCIRSSIValue;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433449-addtofavorites
    addToFavorites():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434886-awakeafterusingcoder
    awakeAfterUsingCoder(coder: NSCoder):IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433689-closeconnection
    closeConnection():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434306-getaddress
    getAddress():BluetoothDeviceAddress;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1428369-getclockoffset
    getClockOffset():BluetoothClockOffset;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433989-getencryptionmode
    getEncryptionMode():BluetoothHCIEncryptionMode;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434397-getlastinquiryupdate
    getLastInquiryUpdate():NSDate;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434331-getlastservicesupdate
    getLastServicesUpdate():NSDate;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1430010-getlinktype
    getLinkType():BluetoothLinkType;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1428665-getpagescanmode
    getPageScanMode():BluetoothPageScanMode;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432874-getpagescanperiodmode
    getPageScanPeriodMode():BluetoothPageScanPeriodMode;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432512-getpagescanrepetitionmode
    getPageScanRepetitionMode():BluetoothPageScanRepetitionMode;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433525-getservicerecordforuuid
    getServiceRecordForUUID(sdpUUID: IOBluetoothSDPUUID):IOBluetoothSDPServiceRecord;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1427826-handsfreeaudiogatewayservicereco
    handsFreeAudioGatewayServiceRecord():IOBluetoothSDPServiceRecord;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1427740-handsfreedeviceservicerecord
    handsFreeDeviceServiceRecord():IOBluetoothSDPServiceRecord;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432785-isconnected
    isConnected():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433415-isfavorite
    isFavorite():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434030-isincoming
    isIncoming():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432940-ispaired
    isPaired():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1428435-openconnection
    openConnection():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1429815-openconnection
    openConnection(target: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433547-openconnection
    openConnection_withPageTimeout_authenticationRequired(target: IOBluetoothDevice, pageTimeoutValue: BluetoothHCIPageTimeout, authenticationRequired: BOOL):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431981-openl2capchannelasync
    openL2CAPChannelAsync_withPSM_delegate(newChannel: IOBluetoothL2CAPChannel, psm: BluetoothL2CAPPSM, channelDelegate: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1430889-openl2capchannelasync
    openL2CAPChannelAsync_withPSM_withConfiguration_delegate(newChannel: IOBluetoothL2CAPChannel, psm: BluetoothL2CAPPSM, channelConfiguration: NSDictionary, channelDelegate: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434939-openl2capchannelsync
    openL2CAPChannelSync_withPSM_delegate(newChannel: IOBluetoothL2CAPChannel, psm: BluetoothL2CAPPSM, channelDelegate: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1429338-openl2capchannelsync
    openL2CAPChannelSync_withPSM_withConfiguration_delegate(newChannel: IOBluetoothL2CAPChannel, psm: BluetoothL2CAPPSM, channelConfiguration: NSDictionary, channelDelegate: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1435022-openrfcommchannelasync
    openRFCOMMChannelAsync_withChannelID_delegate(rfcommChannel: IOBluetoothRFCOMMChannel, channelID: BluetoothRFCOMMChannelID, channelDelegate: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431606-openrfcommchannelsync
    openRFCOMMChannelSync_withChannelID_delegate(rfcommChannel: IOBluetoothRFCOMMChannel, channelID: BluetoothRFCOMMChannelID, channelDelegate: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432337-performsdpquery
    performSDPQuery(target: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431740-performsdpquery
    performSDPQuery_uuids(target: IOBluetoothDevice, uuidArray: NSArray):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1434998-rawrssi
    rawRSSI():BluetoothHCIRSSIValue;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432994-recentaccessdate
    recentAccessDate():NSDate;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1429542-registerfordisconnectnotificatio
    registerForDisconnectNotification_selector(observer: IOBluetoothDevice, inSelector: SEL):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433706-remotenamerequest
    remoteNameRequest(target: IOBluetoothDevice):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1432647-remotenamerequest
    remoteNameRequest_withPageTimeout(target: IOBluetoothDevice, pageTimeoutValue: BluetoothHCIPageTimeout):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1430142-removefromfavorites
    removeFromFavorites():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1430322-requestauthentication
    requestAuthentication():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431303-sendl2capechorequest
    sendL2CAPEchoRequest_length(data: void, length: UInt16):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1431049-setsupervisiontimeout
    setSupervisionTimeout(timeout: UInt16):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589890-getaddressstring
    getAddressString():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589901-getclassofdevice
    getClassOfDevice():BluetoothClassOfDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589895-getconnectionhandle
    getConnectionHandle():BluetoothConnectionHandle;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589888-getdeviceclassmajor
    getDeviceClassMajor():BluetoothDeviceClassMajor;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589894-getdeviceclassminor
    getDeviceClassMinor():BluetoothDeviceClassMinor;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589892-getdeviceref
    getDeviceRef():IOBluetoothDeviceRef;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589896-getlastnameupdate
    getLastNameUpdate():NSDate;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589891-getname
    getName():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589889-getnameoraddress
    getNameOrAddress():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589897-getserviceclassmajor
    getServiceClassMajor():BluetoothServiceClassMajor;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589900-getservices
    getServices():NSArray;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1427922-handsfreeaudiogatewaydriverid
    handsFreeAudioGatewayDriverID():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1427814-handsfreedevicedriverid
    handsFreeDeviceDriverID():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589893-openl2capchannel
    openL2CAPChannel_findExisting_newChannel(psm: BluetoothL2CAPPSM, findExisting: BOOL, newChannel: IOBluetoothL2CAPChannel):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589899-openrfcommchannel
    openRFCOMMChannel_channel(channelID: BluetoothRFCOMMChannelID, rfcommChannel: IOBluetoothRFCOMMChannel):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433372-favoritedevices
    favoriteDevices():NSArray;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433674-paireddevices
    pairedDevices():NSArray;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433426-recentdevices
    recentDevices(numDevices: number):NSArray;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1433370-registerforconnectnotifications
    registerForConnectNotifications_selector(observer: IOBluetoothDevice, inSelector: SEL):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589898-withaddress
    withAddress(address: BluetoothDeviceAddress):IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/1589902-withdeviceref
    withDeviceRef(deviceRef: IOBluetoothDeviceRef):IOBluetoothDevice;
    //
    alloc():IOBluetoothDevice;
    //
    init():IOBluetoothDevice;
  }
}

declare const IOBluetoothDevice: cocoascript.IOBluetoothDevice;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate
   */
  interface IOBluetoothDevicePairDelegate extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432152-devicepairingconnecting
    devicePairingConnecting(sender: IOBluetoothDevicePairDelegate):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1434609-devicepairingfinished
    devicePairingFinished_error(sender: IOBluetoothDevicePairDelegate, error: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432539-devicepairingpincoderequest
    devicePairingPINCodeRequest(sender: IOBluetoothDevicePairDelegate):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1431489-devicepairingstarted
    devicePairingStarted(sender: IOBluetoothDevicePairDelegate):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1431902-devicepairinguserconfirmationreq
    devicePairingUserConfirmationRequest_numericValue(sender: IOBluetoothDevicePairDelegate, numericValue: BluetoothNumericValue):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432500-devicepairinguserpasskeynotifica
    devicePairingUserPasskeyNotification_passkey(sender: IOBluetoothDevicePairDelegate, passkey: BluetoothPasskey):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepairdelegate/1429233-devicesimplepairingcomplete
    deviceSimplePairingComplete_status(sender: IOBluetoothDevicePairDelegate, status: BluetoothHCIEventStatus):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedelegate
   */
  interface IOBluetoothHandsFreeDelegate extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427880-handsfree
    handsFree_connected(device: IOBluetoothHandsFree, status: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427728-handsfree
    handsFree_disconnected(device: IOBluetoothHandsFree, status: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427824-handsfree
    handsFree_scoConnectionClosed(device: IOBluetoothHandsFree, status: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427868-handsfree
    handsFree_scoConnectionOpened(device: IOBluetoothHandsFree, status: NSNumber):void;
  }
}
declare namespace cocoascript {
  /**
   * This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate
   */
  interface IOBluetoothDeviceInquiryDelegate extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423409-deviceinquirycomplete
    deviceInquiryComplete_error_aborted(sender: IOBluetoothDeviceInquiry, error: any, aborted: BOOL):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423415-deviceinquirydevicefound
    deviceInquiryDeviceFound_device(sender: IOBluetoothDeviceInquiry, device: IOBluetoothDevice):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423429-deviceinquirydevicenameupdated
    deviceInquiryDeviceNameUpdated_device_devicesRemaining(sender: IOBluetoothDeviceInquiry, device: IOBluetoothDevice, devicesRemaining: number):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423405-deviceinquirystarted
    deviceInquiryStarted(sender: IOBluetoothDeviceInquiry):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423425-deviceinquiryupdatingdevicenames
    deviceInquiryUpdatingDeviceNamesStarted_devicesRemaining(sender: IOBluetoothDeviceInquiry, devicesRemaining: number):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothobject
   */
  interface IOBluetoothObject extends NSObject {
    //
    alloc():IOBluetoothObject;
    //
    init():IOBluetoothObject;
  }
}

declare const IOBluetoothObject: cocoascript.IOBluetoothObject;
declare namespace cocoascript {
  /**
   * Implements advanced OBEX operations in addition to simple PUT and GET.
   * https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices
   */
  interface OBEXFileTransferServices extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1431373-initwithobexsession
    initWithOBEXSession(inOBEXSession: IOBluetoothOBEXSession):OBEXFileTransferServices;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1430781-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1429764-abort
    abort():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1429850-changecurrentfolderbackward
    changeCurrentFolderBackward():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1429069-changecurrentfolderforwardtopath
    changeCurrentFolderForwardToPath(inDirName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1428745-changecurrentfoldertoroot
    changeCurrentFolderToRoot():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1433641-connecttoftpservice
    connectToFTPService():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1429786-connecttoobjectpushservice
    connectToObjectPushService():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1434277-copyremotefile
    copyRemoteFile_toLocalPath(inRemoteFileName: string | cocoascript.NSString, inLocalPathAndName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1434906-createfolder
    createFolder(inDirName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1434309-currentpath
    currentPath():NSString;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1434667-disconnect
    disconnect():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1433891-getdefaultvcard
    getDefaultVCard(inLocalPathAndName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1434607-isbusy
    isBusy():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1428521-isconnected
    isConnected():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1428401-removeitem
    removeItem(inItemName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1433947-retrievefolderlisting
    retrieveFolderListing():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1432819-senddata
    sendData_type_name(inData: NSData, inType: string | cocoascript.NSString, inName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1430911-sendfile
    sendFile(inLocalPathAndName: string | cocoascript.NSString):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexfiletransferservices/1435045-withobexsession
    withOBEXSession(inOBEXSession: IOBluetoothOBEXSession):OBEXFileTransferServices;
    //
    alloc():OBEXFileTransferServices;
    //
    init():OBEXFileTransferServices;
  }
}

declare const OBEXFileTransferServices: cocoascript.OBEXFileTransferServices;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexerror
  type OBEXError = number;
}
declare namespace cocoascript {
  interface BluetoothHCILinkQualityInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIRSSIInfo {
  }
}
declare namespace cocoascript {
  interface IOBluetoothL2CAPChannelRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannelincomingdatalistener
  type IOBluetoothL2CAPChannelIncomingDataListener = void;
}
declare namespace cocoascript {
  /**
   * An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel
   */
  interface IOBluetoothL2CAPChannel extends IOBluetoothObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1432783-psm
    PSM(): BluetoothL2CAPPSM;
    setPSM(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1433430-device
    device(): IOBluetoothDevice;
    setDevice(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1431269-incomingmtu
    incomingMTU(): BluetoothL2CAPMTU;
    setIncomingMTU(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1434996-localchannelid
    localChannelID(): BluetoothL2CAPChannelID;
    setLocalChannelID(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1428413-objectid
    objectID(): IOBluetoothObjectID;
    setObjectID(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1433700-outgoingmtu
    outgoingMTU(): BluetoothL2CAPMTU;
    setOutgoingMTU(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1434793-remotechannelid
    remoteChannelID(): BluetoothL2CAPChannelID;
    setRemoteChannelID(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1433617-closechannel
    closeChannel():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1431693-delegate
    delegate():IOBluetoothL2CAPChannel;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1435024-isincoming
    isIncoming():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1432240-registerforchannelclosenotificat
    registerForChannelCloseNotification_selector(observer: IOBluetoothL2CAPChannel, inSelector: SEL):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1430453-requestremotemtu
    requestRemoteMTU(remoteMTU: BluetoothL2CAPMTU):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1430338-setdelegate
    setDelegate(channelDelegate: IOBluetoothL2CAPChannel):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1430853-setdelegate
    setDelegate_withConfiguration(channelDelegate: IOBluetoothL2CAPChannel, channelConfiguration: NSDictionary):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1431569-writeasync
    writeAsync_length_refcon(data: void, length: UInt16, refcon: void):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/2980981-writeasynctrap
    writeAsyncTrap_length_refcon(data: void, length: UInt16, refcon: void):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1433699-writesync
    writeSync_length(data: void, length: UInt16):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1433032-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector(object: IOBluetoothL2CAPChannel, selector: SEL):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1429004-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector_withPSM_direction(object: IOBluetoothL2CAPChannel, selector: SEL, psm: BluetoothL2CAPPSM, inDirection: IOBluetoothUserNotificationChannelDirection):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/1433768-withobjectid
    withObjectID(objectID: IOBluetoothObjectID):IOBluetoothL2CAPChannel;
    //
    alloc():IOBluetoothL2CAPChannel;
    //
    init():IOBluetoothL2CAPChannel;
  }
}

declare const IOBluetoothL2CAPChannel: cocoascript.IOBluetoothL2CAPChannel;
declare namespace cocoascript {
  /**
   * An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel
   */
  interface IOBluetoothRFCOMMChannel extends IOBluetoothObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1428722-closechannel
    closeChannel():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1432238-delegate
    delegate():IOBluetoothRFCOMMChannel;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1431850-getchannelid
    getChannelID():BluetoothRFCOMMChannelID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1432615-getdevice
    getDevice():IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1428996-getmtu
    getMTU():BluetoothRFCOMMMTU;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1434526-getobjectid
    getObjectID():IOBluetoothObjectID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1434600-getrfcommchannelref
    getRFCOMMChannelRef():IOBluetoothRFCOMMChannelRef;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1430334-isincoming
    isIncoming():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1430708-isopen
    isOpen():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1434740-istransmissionpaused
    isTransmissionPaused():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1428800-registerforchannelclosenotificat
    registerForChannelCloseNotification_selector(observer: IOBluetoothRFCOMMChannel, inSelector: SEL):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1434323-sendremotelinestatus
    sendRemoteLineStatus(lineStatus: BluetoothRFCOMMLineStatus):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1430417-setdelegate
    setDelegate(delegate: IOBluetoothRFCOMMChannel):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1431119-setserialparameters
    setSerialParameters_dataBits_parity_stopBits(speed: number, nBits: UInt8, parity: BluetoothRFCOMMParityType, bitStop: UInt8):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1430167-writeasync
    writeAsync_length_refcon(data: void, length: UInt16, refcon: void):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1434633-writesync
    writeSync_length(data: void, length: UInt16):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1430146-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector(object: IOBluetoothRFCOMMChannel, selector: SEL):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1431566-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector_withChannelID_direction(object: IOBluetoothRFCOMMChannel, selector: SEL, channelID: BluetoothRFCOMMChannelID, inDirection: IOBluetoothUserNotificationChannelDirection):IOBluetoothUserNotification;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1430561-withobjectid
    withObjectID(objectID: IOBluetoothObjectID):IOBluetoothRFCOMMChannel;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/1433571-withrfcommchannelref
    withRFCOMMChannelRef(rfcommChannelRef: IOBluetoothRFCOMMChannelRef):IOBluetoothRFCOMMChannel;
    //
    alloc():IOBluetoothRFCOMMChannel;
    //
    init():IOBluetoothRFCOMMChannel;
  }
}

declare const IOBluetoothRFCOMMChannel: cocoascript.IOBluetoothRFCOMMChannel;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate
   */
  interface IOBluetoothHandsFreeDeviceDelegate extends IOBluetoothHandsFreeDelegate {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1428496-handsfree
    handsFree_batteryCharge(device: IOBluetoothHandsFreeDevice, batteryCharge: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433981-handsfree
    handsFree_callHoldState(device: IOBluetoothHandsFreeDevice, callHoldState: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1429223-handsfree
    handsFree_callSetupMode(device: IOBluetoothHandsFreeDevice, callSetupMode: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1432883-handsfree
    handsFree_currentCall(device: IOBluetoothHandsFreeDevice, currentCall: NSDictionary):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1429210-handsfree
    handsFree_incomingCallFrom(device: IOBluetoothHandsFreeDevice, number: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1430510-handsfree
    handsFree_incomingSMS(device: IOBluetoothHandsFreeDevice, sms: NSDictionary):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431339-handsfree
    handsFree_isCallActive(device: IOBluetoothHandsFreeDevice, isCallActive: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431758-handsfree
    handsFree_isRoaming(device: IOBluetoothHandsFreeDevice, isRoaming: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433100-handsfree
    handsFree_isServiceAvailable(device: IOBluetoothHandsFreeDevice, isServiceAvailable: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431746-handsfree
    handsFree_ringAttempt(device: IOBluetoothHandsFreeDevice, ringAttempt: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1432799-handsfree
    handsFree_signalStrength(device: IOBluetoothHandsFreeDevice, signalStrength: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1430067-handsfree
    handsFree_subscriberNumber(device: IOBluetoothHandsFreeDevice, subscriberNumber: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433815-handsfree
    handsFree_unhandledResultCode(device: IOBluetoothHandsFreeDevice, resultCode: string | cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry
   */
  interface IOBluetoothDeviceInquiry extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423401-initwithdelegate
    initWithDelegate(delegate: IOBluetoothDeviceInquiry):IOBluetoothDeviceInquiry;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423403-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423397-inquirylength
    inquiryLength(): number;
    setInquiryLength(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423413-searchtype
    searchType(): IOBluetoothDeviceSearchTypes;
    setSearchType(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423419-updatenewdevicenames
    updateNewDeviceNames(): BOOL;
    setUpdateNewDeviceNames(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423417-clearfounddevices
    clearFoundDevices():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423411-founddevices
    foundDevices():NSArray;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423399-setsearchcriteria
    setSearchCriteria_majorDeviceClass_minorDeviceClass(inServiceClassMajor: BluetoothServiceClassMajor, inMajorDeviceClass: BluetoothDeviceClassMajor, inMinorDeviceClass: BluetoothDeviceClassMinor):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423423-start
    start():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423407-stop
    stop():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceinquiry/1423421-inquirywithdelegate
    inquiryWithDelegate(delegate: IOBluetoothDeviceInquiry):IOBluetoothDeviceInquiry;
    //
    alloc():IOBluetoothDeviceInquiry;
    //
    init():IOBluetoothDeviceInquiry;
  }
}

declare const IOBluetoothDeviceInquiry: cocoascript.IOBluetoothDeviceInquiry;
declare namespace cocoascript {
  /**
   * An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair
   */
  interface IOBluetoothDevicePair extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1429730-pairwithdevice
    pairWithDevice(device: IOBluetoothDevice):IOBluetoothDevicePair;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1431438-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1432295-device
    device():IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1434270-replypincode
    replyPINCode_PINCode(PINCodeSize: ByteCount, PINCode: BluetoothPINCode):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1429385-replyuserconfirmation
    replyUserConfirmation(reply: BOOL):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1433332-setdevice
    setDevice(inDevice: IOBluetoothDevice):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1430048-start
    start():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/1433707-stop
    stop():void;
    //
    alloc():IOBluetoothDevicePair;
    //
    init():IOBluetoothDevicePair;
  }
}

declare const IOBluetoothDevicePair: cocoascript.IOBluetoothDevicePair;
declare namespace cocoascript {
  interface IOBluetoothDeviceRef {
  }
}
declare namespace cocoascript {
  /**
   * Hands free profile class.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree
   */
  interface IOBluetoothHandsFree extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1811379-isconnected
    ():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427916-initwithdevice
    initWithDevice_delegate(device: IOBluetoothDevice, inDelegate: IOBluetoothHandsFreeDelegate):IOBluetoothHandsFree;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427726-smsenabled
    SMSEnabled(): BOOL;
    setSMSEnabled(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427794-smsmode
    SMSMode(): IOBluetoothSMSMode;
    setSMSMode(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427760-connected
    connected(): BOOL;
    setConnected(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427851-delegate
    delegate(): IOBluetoothHandsFreeDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427918-device
    device(): IOBluetoothDevice;
    setDevice(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427864-devicecallholdmodes
    deviceCallHoldModes(): number;
    setDeviceCallHoldModes(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427893-devicesupportedfeatures
    deviceSupportedFeatures(): number;
    setDeviceSupportedFeatures(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427843-devicesupportedsmsservices
    deviceSupportedSMSServices(): number;
    setDeviceSupportedSMSServices(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427800-inputmuted
    inputMuted(): BOOL;
    setInputMuted(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427816-inputvolume
    inputVolume(): number;
    setInputVolume(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427756-outputmuted
    outputMuted(): BOOL;
    setOutputMuted(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427874-outputvolume
    outputVolume(): number;
    setOutputVolume(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427903-supportedfeatures
    supportedFeatures(): number;
    setSupportedFeatures(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427829-connect
    connect():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427914-connectsco
    connectSCO():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427804-disconnect
    disconnect():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427766-disconnectsco
    disconnectSCO():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427897-indicator
    indicator(indicatorName: string | cocoascript.NSString):number;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427858-isscoconnected
    isSCOConnected():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfree/1427872-setindicator
    setIndicator_value(indicatorName: string | cocoascript.NSString, indicatorValue: number):void;
    //
    alloc():IOBluetoothHandsFree;
    //
    init():IOBluetoothHandsFree;
  }
}

declare const IOBluetoothHandsFree: cocoascript.IOBluetoothHandsFree;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway
   */
  interface IOBluetoothHandsFreeAudioGateway extends IOBluetoothHandsFree {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1428663-initwithdevice
    initWithDevice_delegate(device: IOBluetoothDevice, inDelegate: IOBluetoothHandsFreeAudioGateway):IOBluetoothHandsFreeAudioGateway;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1431383-createindicator
    createIndicator_min_max_currentValue(indicatorName: string | cocoascript.NSString, minValue: number, maxValue: number, currentValue: number):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1429231-processatcommand
    processATCommand(atCommand: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1429059-sendokresponse
    sendOKResponse():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1434911-sendresponse
    sendResponse(response: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1434547-sendresponse
    sendResponse_withOK(response: string | cocoascript.NSString, withOK: BOOL):void;
    //
    alloc():IOBluetoothHandsFreeAudioGateway;
    //
    init():IOBluetoothHandsFreeAudioGateway;
  }
}

declare const IOBluetoothHandsFreeAudioGateway: cocoascript.IOBluetoothHandsFreeAudioGateway;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice
   */
  interface IOBluetoothHandsFreeDevice extends IOBluetoothHandsFree {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1428834-initwithdevice
    initWithDevice_delegate(device: IOBluetoothDevice, delegate: IOBluetoothHandsFreeDevice):IOBluetoothHandsFreeDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430391-acceptcall
    acceptCall():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1432773-acceptcallonphone
    acceptCallOnPhone():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1432732-addheldcall
    addHeldCall():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1434534-calltransfer
    callTransfer():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430837-currentcalllist
    currentCallList():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430771-dialnumber
    dialNumber(aNumber: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430763-endcall
    endCall():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1434936-holdcall
    holdCall():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1429842-memorydial
    memoryDial(memoryLocation: number):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430932-placeallothersonhold
    placeAllOthersOnHold(index: number):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430476-redial
    redial():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1432769-releaseactivecalls
    releaseActiveCalls():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1431536-releasecall
    releaseCall(index: number):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1433087-releaseheldcalls
    releaseHeldCalls():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1429190-sendatcommand
    sendATCommand(atCommand: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430619-sendatcommand
    sendATCommand_timeout_selector_target(atCommand: string | cocoascript.NSString, timeout: number, selector: SEL, target: IOBluetoothHandsFreeDevice):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1428351-senddtmf
    sendDTMF(character: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1429652-sendsms
    sendSMS_message(aNumber: string | cocoascript.NSString, aMessage: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1430919-subscribernumber
    subscriberNumber():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1429256-transferaudiotocomputer
    transferAudioToComputer():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/1434079-transferaudiotophone
    transferAudioToPhone():void;
    //
    alloc():IOBluetoothHandsFreeDevice;
    //
    init():IOBluetoothHandsFreeDevice;
  }
}

declare const IOBluetoothHandsFreeDevice: cocoascript.IOBluetoothHandsFreeDevice;
declare namespace cocoascript {
  /**
   * This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller
   */
  interface IOBluetoothHostController extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1434248-delegate
    delegate(): id;
    setDelegate(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1429740-powerstate
    powerState(): BluetoothHCIPowerState;
    setPowerState(): void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1434703-addressasstring
    addressAsString():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1428536-classofdevice
    classOfDevice():BluetoothClassOfDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1431310-nameasstring
    nameAsString():NSString;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1433813-setclassofdevice
    setClassOfDevice_forTimeInterval(classOfDevice: BluetoothClassOfDevice, seconds: NSTimeInterval):any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhostcontroller/1433496-defaultcontroller
    defaultController():IOBluetoothHostController;
    //
    alloc():IOBluetoothHostController;
    //
    init():IOBluetoothHostController;
  }
}

declare const IOBluetoothHostController: cocoascript.IOBluetoothHostController;
declare namespace cocoascript {
  /**
   * An OBEX Session with a Bluetooth RFCOMM channel as the transport.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession
   */
  interface IOBluetoothOBEXSession extends OBEXSession {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1429196-initwithsdpservicerecord
    initWithSDPServiceRecord(inSDPServiceRecord: IOBluetoothSDPServiceRecord):IOBluetoothOBEXSession;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1429922-initwithdevice
    initWithDevice_channelID(inDevice: IOBluetoothDevice, inChannelID: BluetoothRFCOMMChannelID):IOBluetoothOBEXSession;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1431317-initwithincomingrfcommchannel
    initWithIncomingRFCOMMChannel_eventSelector_selectorTarget_refCon(inChannel: IOBluetoothRFCOMMChannel, inEventSelector: SEL, inEventSelectorTarget: IOBluetoothOBEXSession, inUserRefCon: void):IOBluetoothOBEXSession;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1430752-closetransportconnection
    closeTransportConnection():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1428836-getdevice
    getDevice():IOBluetoothDevice;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1434690-getrfcommchannel
    getRFCOMMChannel():IOBluetoothRFCOMMChannel;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1433323-hasopentransportconnection
    hasOpenTransportConnection():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1435097-issessiontargetamac
    isSessionTargetAMac():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1428333-opentransportconnection
    openTransportConnection_selectorTarget_refCon(inSelector: SEL, inTarget: IOBluetoothOBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1429280-restarttransmission
    restartTransmission():void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1432899-sendbuffertroughchannel
    sendBufferTroughChannel():any;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1428500-senddatatotransport
    sendDataToTransport_dataLength(inDataToSend: void, inDataLength: any):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1431213-setobexsessionopenconnectioncall
    setOBEXSessionOpenConnectionCallback_refCon(inCallback: IOBluetoothOBEXSessionOpenConnectionCallback, inUserRefCon: void):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1434129-setopentransportconnectionasyncs
    setOpenTransportConnectionAsyncSelector_target_refCon(inSelector: SEL, inSelectorTarget: IOBluetoothOBEXSession, inUserRefCon: IOBluetoothOBEXSession):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1432953-withdevice
    withDevice_channelID(inDevice: IOBluetoothDevice, inRFCOMMChannelID: BluetoothRFCOMMChannelID):IOBluetoothOBEXSession;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1431248-withincomingrfcommchannel
    withIncomingRFCOMMChannel_eventSelector_selectorTarget_refCon(inChannel: IOBluetoothRFCOMMChannel, inEventSelector: SEL, inEventSelectorTarget: IOBluetoothOBEXSession, inUserRefCon: void):IOBluetoothOBEXSession;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsession/1431979-withsdpservicerecord
    withSDPServiceRecord(inSDPServiceRecord: IOBluetoothSDPServiceRecord):IOBluetoothOBEXSession;
    //
    alloc():IOBluetoothOBEXSession;
    //
    init():IOBluetoothOBEXSession;
  }
}

declare const IOBluetoothOBEXSession: cocoascript.IOBluetoothOBEXSession;
declare namespace cocoascript {
  interface IOBluetoothObjectRef {
  }
}
declare namespace cocoascript {
  interface IOBluetoothRFCOMMChannelRef {
  }
}
declare namespace cocoascript {
  interface IOBluetoothSDPDataElementRef {
  }
}
declare namespace cocoascript {
  interface IOBluetoothSDPServiceRecordRef {
  }
}
declare namespace cocoascript {
  /**
   * An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid
   */
  interface IOBluetoothSDPUUID extends NSData {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1431398-initwithuuid16
    initWithUUID16(uuid16: BluetoothSDPUUID16):IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1430416-initwithuuid32
    initWithUUID32(uuid32: BluetoothSDPUUID32):IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1428320-uuidwithbytes
    uuidWithBytes_length(bytes: void, length: number):IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1433987-uuidwithdata
    uuidWithData(data: NSData):IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1434310-classforarchiver
    classForArchiver():Class;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1431004-classforcoder
    classForCoder():Class;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1429202-classforportcoder
    classForPortCoder():Class;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1434307-getuuidwithlength
    getUUIDWithLength(newLength: number):IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1428786-isequaltouuid
    isEqualToUUID(otherUUID: IOBluetoothSDPUUID):BOOL;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1433610-uuid16
    uuid16(uuid16: BluetoothSDPUUID16):IOBluetoothSDPUUID;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpuuid/1429154-uuid32
    uuid32(uuid32: BluetoothSDPUUID32):IOBluetoothSDPUUID;
    //
    alloc():IOBluetoothSDPUUID;
    //
    init():IOBluetoothSDPUUID;
  }
}

declare const IOBluetoothSDPUUID: cocoascript.IOBluetoothSDPUUID;
declare namespace cocoascript {
  interface IOBluetoothSDPUUIDRef {
  }
}
declare namespace cocoascript {
  /**
   * Represents a registered notification.
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothusernotification
   */
  interface IOBluetoothUserNotification extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothusernotification/1398108-unregister
    unregister():void;
    //
    alloc():IOBluetoothUserNotification;
    //
    init():IOBluetoothUserNotification;
  }
}

declare const IOBluetoothUserNotification: cocoascript.IOBluetoothUserNotification;
declare namespace cocoascript {
  interface IOBluetoothUserNotificationRef {
  }
}
declare namespace cocoascript {
  /**
   * Object representing an OBEX connection to a remote target.
   * https://developer.apple.com/documentation/iobluetooth/obexsession
   */
  interface OBEXSession extends NSObject {
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1429402-obexabort
    OBEXAbort_optionalHeadersLength_eventSelector_selectorTarget_refCon(inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1432852-obexabortresponse
    OBEXAbortResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1433181-obexconnect
    OBEXConnect_maxPacketLength_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inFlags: OBEXFlags, inMaxPacketLength: OBEXMaxPacketLength, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434390-obexconnectresponse
    OBEXConnectResponse_flags_maxPacketLength_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: OBEXOpCode, inFlags: OBEXFlags, inMaxPacketLength: OBEXMaxPacketLength, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434125-obexdisconnect
    OBEXDisconnect_optionalHeadersLength_eventSelector_selectorTarget_refCon(inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434021-obexdisconnectresponse
    OBEXDisconnectResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434710-obexget
    OBEXGet_headers_headersLength_eventSelector_selectorTarget_refCon(isFinalChunk: boolean, inHeaders: void, inHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434941-obexgetresponse
    OBEXGetResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1431295-obexput
    OBEXPut_headersData_headersDataLength_bodyData_bodyDataLength_eventSelector_selectorTarget_refCon(isFinalChunk: boolean, inHeadersData: void, inHeadersDataLength: any, inBodyData: void, inBodyDataLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1429618-obexputresponse
    OBEXPutResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1428620-obexsetpath
    OBEXSetPath_constants_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inFlags: OBEXFlags, inConstants: OBEXConstants, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434520-obexsetpathresponse
    OBEXSetPathResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434885-clienthandleincomingdata
    clientHandleIncomingData(event: OBEXTransportEvent):void;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434109-closetransportconnection
    closeTransportConnection():OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1431412-getavailablecommandpayloadlength
    getAvailableCommandPayloadLength(inOpCode: OBEXOpCode):OBEXMaxPacketLength;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1428698-getavailablecommandresponsepaylo
    getAvailableCommandResponsePayloadLength(inOpCode: OBEXOpCode):OBEXMaxPacketLength;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1428595-getmaxpacketlength
    getMaxPacketLength():OBEXMaxPacketLength;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1429707-hasopenobexconnection
    hasOpenOBEXConnection():BOOL;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1430785-hasopentransportconnection
    hasOpenTransportConnection():boolean;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1431621-opentransportconnection
    openTransportConnection_selectorTarget_refCon(inSelector: SEL, inTarget: OBEXSession, inUserRefCon: void):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1430616-senddatatotransport
    sendDataToTransport_dataLength(inDataToSend: void, inDataLength: any):OBEXError;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1432452-serverhandleincomingdata
    serverHandleIncomingData(event: OBEXTransportEvent):void;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1431039-seteventcallback
    setEventCallback(inEventCallback: OBEXSessionEventCallback):void;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1434706-seteventrefcon
    setEventRefCon(inRefCon: void):void;
    // https://developer.apple.com/documentation/iobluetooth/obexsession/1430378-seteventselector
    setEventSelector_target_refCon(inEventSelector: SEL, inEventSelectorTarget: OBEXSession, inUserRefCon: OBEXSession):void;
    //
    alloc():OBEXSession;
    //
    init():OBEXSession;
  }
}

declare const OBEXSession: cocoascript.OBEXSession;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceasynccallbacks
   */
  interface IOBluetoothDeviceAsyncCallbacks {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434956-connectioncomplete
    connectionComplete_status(device: IOBluetoothDevice, status: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434878-remotenamerequestcomplete
    remoteNameRequestComplete_status(device: IOBluetoothDevice, status: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434694-sdpquerycomplete
    sdpQueryComplete_status(device: IOBluetoothDevice, status: any):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate
   */
  interface IOBluetoothHandsFreeAudioGatewayDelegate {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/1433943-handsfree
    handsFree_hangup(device: IOBluetoothHandsFreeAudioGateway, hangup: NSNumber):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/1433563-handsfree
    handsFree_redial(device: IOBluetoothHandsFreeAudioGateway, redial: NSNumber):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate
   */
  interface IOBluetoothL2CAPChannelDelegate {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1433766-l2capchannelclosed
    l2capChannelClosed(l2capChannel: IOBluetoothL2CAPChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431868-l2capchanneldata
    l2capChannelData_data_length(l2capChannel: IOBluetoothL2CAPChannel, dataPointer: void, dataLength: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1430363-l2capchannelopencomplete
    l2capChannelOpenComplete_status(l2capChannel: IOBluetoothL2CAPChannel, error: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431728-l2capchannelqueuespaceavailable
    l2capChannelQueueSpaceAvailable(l2capChannel: IOBluetoothL2CAPChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1428740-l2capchannelreconfigured
    l2capChannelReconfigured(l2capChannel: IOBluetoothL2CAPChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431099-l2capchannelwritecomplete
    l2capChannelWriteComplete_refcon_status(l2capChannel: IOBluetoothL2CAPChannel, refcon: void, error: any):void;
  }
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate
   */
  interface IOBluetoothRFCOMMChannelDelegate {
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434518-rfcommchannelclosed
    rfcommChannelClosed(rfcommChannel: IOBluetoothRFCOMMChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429160-rfcommchannelcontrolsignalschang
    rfcommChannelControlSignalsChanged(rfcommChannel: IOBluetoothRFCOMMChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1431822-rfcommchanneldata
    rfcommChannelData_data_length(rfcommChannel: IOBluetoothRFCOMMChannel, dataPointer: void, dataLength: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1430179-rfcommchannelflowcontrolchanged
    rfcommChannelFlowControlChanged(rfcommChannel: IOBluetoothRFCOMMChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429633-rfcommchannelopencomplete
    rfcommChannelOpenComplete_status(rfcommChannel: IOBluetoothRFCOMMChannel, error: any):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429752-rfcommchannelqueuespaceavailable
    rfcommChannelQueueSpaceAvailable(rfcommChannel: IOBluetoothRFCOMMChannel):void;
    // https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434978-rfcommchannelwritecomplete
    rfcommChannelWriteComplete_refcon_status(rfcommChannel: IOBluetoothRFCOMMChannel, refcon: void, error: any):void;
  }
}
declare namespace cocoascript {
  interface BluetoothDeviceAddress {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothnumericvalue
  type BluetoothNumericValue = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothpasskey
  type BluetoothPasskey = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcieventstatus
  type BluetoothHCIEventStatus = number;
}
declare namespace cocoascript {
  interface OBEXSessionEvent {
  }
}
declare namespace cocoascript {
  interface OBEXAbortCommandData {
  }
}
declare namespace cocoascript {
  interface OBEXAbortCommandResponseData {
  }
}
declare namespace cocoascript {
  interface OBEXConnectCommandData {
  }
}
declare namespace cocoascript {
  interface OBEXConnectCommandResponseData {
  }
}
declare namespace cocoascript {
  interface OBEXDisconnectCommandData {
  }
}
declare namespace cocoascript {
  interface OBEXDisconnectCommandResponseData {
  }
}
declare namespace cocoascript {
  interface OBEXErrorData {
  }
}
declare namespace cocoascript {
  interface OBEXGetCommandData {
  }
}
declare namespace cocoascript {
  interface OBEXGetCommandResponseData {
  }
}
declare namespace cocoascript {
  interface OBEXPutCommandData {
  }
}
declare namespace cocoascript {
  interface OBEXPutCommandResponseData {
  }
}
declare namespace cocoascript {
  interface OBEXSetPathCommandData {
  }
}
declare namespace cocoascript {
  interface OBEXSetPathCommandResponseData {
  }
}
declare namespace cocoascript {
  interface OBEXTransportEvent {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obextransporteventtype
  type OBEXTransportEventType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothusernotificationcallback
  type IOBluetoothUserNotificationCallback = cocoascript.IOBluetoothObjectRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicesearchoptions
  type IOBluetoothDeviceSearchOptions = number;
}
declare namespace cocoascript {
  interface IOBluetoothDeviceSearchDeviceAttributes {
  }
}
declare namespace cocoascript {
  interface BluetoothAFHHostChannelClassification {
  }
}
declare namespace cocoascript {
  interface BluetoothAFHResults {
  }
}
declare namespace cocoascript {
  interface BluetoothEnhancedSynchronousConnectionInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothEventFilterCondition {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIAcceptSynchronousConnectionRequestParams {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIAutomaticFlushTimeoutInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIBufferSize {
  }
}
declare namespace cocoascript {
  interface BluetoothHCICurrentInquiryAccessCodes {
  }
}
declare namespace cocoascript {
  interface BluetoothHCICurrentInquiryAccessCodesForWrite {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEnhancedAcceptSynchronousConnectionRequestParams {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEnhancedSetupSynchronousConnectionParams {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventAuthenticationCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventChangeConnectionLinkKeyCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventConnectionCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventConnectionPacketTypeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventConnectionRequestResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventDataBufferOverflowResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventDisconnectionCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventEncryptionChangeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventEncryptionKeyRefreshCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventFlowSpecificationData {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventFlushOccurredResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventHardwareErrorResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLEConnectionCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLEConnectionUpdateCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLELongTermKeyRequestResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLEMetaResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLEReadRemoteUsedFeaturesCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLinkKeyNotificationResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventMasterLinkKeyCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventMaxSlotsChangeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventModeChangeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventPageScanModeChangeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventPageScanRepetitionModeChangeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventQoSSetupCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventQoSViolationResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReadClockOffsetResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReadExtendedFeaturesResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReadRemoteExtendedFeaturesResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReadRemoteSupportedFeaturesResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReadRemoteVersionInfoResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReadSupportedFeaturesResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventRemoteNameRequestResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventReturnLinkKeysResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventRoleChangeResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventSimplePairingCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventSniffSubratingResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventSynchronousConnectionChangedResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventSynchronousConnectionCompleteResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventVendorSpecificResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIExtendedFeaturesInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIExtendedInquiryResponse {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIExtendedInquiryResult {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIFailedContactInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIInquiryAccessCode {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIInquiryResult {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIInquiryResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIInquiryWithRSSIResult {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIInquiryWithRSSIResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCILEBufferSize {
  }
}
declare namespace cocoascript {
  interface BluetoothHCILinkPolicySettingsInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCILinkSupervisionTimeout {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIQualityOfServiceSetupParams {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIReadExtendedInquiryResponseResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIReadLMPHandleResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIReadLocalOOBDataResults {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIRequestCallbackInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIRoleInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIScanActivity {
  }
}
declare namespace cocoascript {
  interface BluetoothHCISetupSynchronousConnectionParams {
  }
}
declare namespace cocoascript {
  interface BluetoothHCISimplePairingOOBData {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIStoredLinkKeysInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCISupportedCommands {
  }
}
declare namespace cocoascript {
  interface BluetoothHCISupportedFeatures {
  }
}
declare namespace cocoascript {
  interface BluetoothHCITransmitPowerLevelInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIVersionInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothIOCapabilityResponse {
  }
}
declare namespace cocoascript {
  interface BluetoothIRK {
  }
}
declare namespace cocoascript {
  interface BluetoothKey {
  }
}
declare namespace cocoascript {
  interface BluetoothKeypressNotification {
  }
}
declare namespace cocoascript {
  interface BluetoothL2CAPQualityOfServiceOptions {
  }
}
declare namespace cocoascript {
  interface BluetoothL2CAPRetransmissionAndFlowControlOptions {
  }
}
declare namespace cocoascript {
  interface BluetoothPINCode {
  }
}
declare namespace cocoascript {
  interface BluetoothReadClockInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothRemoteHostSupportedFeaturesNotification {
  }
}
declare namespace cocoascript {
  interface BluetoothSetEventMask {
  }
}
declare namespace cocoascript {
  interface BluetoothSynchronousConnectionInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothTransportInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothUserConfirmationRequest {
  }
}
declare namespace cocoascript {
  interface BluetoothUserPasskeyNotification {
  }
}
declare namespace cocoascript {
  interface IOBluetoothDeviceSearchAttributes {
  }
}
declare namespace cocoascript {
  interface IOBluetoothL2CAPChannelDataBlock {
  }
}
declare namespace cocoascript {
  interface IOBluetoothL2CAPChannelEvent {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEncryptionKeySizeInfo {
  }
}
declare namespace cocoascript {
  interface BluetoothHCIEventLEEnhancedConnectionCompleteResults {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampcommandrejectreason
  type BluetoothAMPCommandRejectReason = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampcreatephysicallinkresponsestatus
  type BluetoothAMPCreatePhysicalLinkResponseStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampdisconnectphysicallinkresponsestatus
  type BluetoothAMPDisconnectPhysicalLinkResponseStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampdiscoverresponsecontrollerstatus
  type BluetoothAMPDiscoverResponseControllerStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampgetassocresponsestatus
  type BluetoothAMPGetAssocResponseStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampgetinforesponsestatus
  type BluetoothAMPGetInfoResponseStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothampmanagercode
  type BluetoothAMPManagerCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipowerstate
  type BluetoothHCIPowerState = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capcommandcode
  type BluetoothL2CAPCommandCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capcommandrejectreason
  type BluetoothL2CAPCommandRejectReason = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capconfigurationoption
  type BluetoothL2CAPConfigurationOption = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capconfigurationresult
  type BluetoothL2CAPConfigurationResult = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capconfigurationretransmissionandflowcontrolflags
  type BluetoothL2CAPConfigurationRetransmissionAndFlowControlFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capconnectionresult
  type BluetoothL2CAPConnectionResult = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capconnectionstatus
  type BluetoothL2CAPConnectionStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capinformationextendedfeaturesmask
  type BluetoothL2CAPInformationExtendedFeaturesMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capinformationresult
  type BluetoothL2CAPInformationResult = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capinformationtype
  type BluetoothL2CAPInformationType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capqostype
  type BluetoothL2CAPQoSType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capsegmentationandreassembly
  type BluetoothL2CAPSegmentationAndReassembly = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capsupervisoryfuctiontype
  type BluetoothL2CAPSupervisoryFuctionType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothleaddresstype
  type BluetoothLEAddressType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothleadvertisingtype
  type BluetoothLEAdvertisingType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothleconnectioninterval
  type BluetoothLEConnectionInterval = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlescan
  type BluetoothLEScan = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlescanduplicatefilter
  type BluetoothLEScanDuplicateFilter = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlescanfilter
  type BluetoothLEScanFilter = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlescantype
  type BluetoothLEScanType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanagercommandcode
  type BluetoothLESecurityManagerCommandCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanageriocapability
  type BluetoothLESecurityManagerIOCapability = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanagerkeypressnotificationtype
  type BluetoothLESecurityManagerKeypressNotificationType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanageroobdata
  type BluetoothLESecurityManagerOOBData = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanagerpairingfailedreasoncode
  type BluetoothLESecurityManagerPairingFailedReasonCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanageruserinputcapability
  type BluetoothLESecurityManagerUserInputCapability = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlesecuritymanageruseroutputcapability
  type BluetoothLESecurityManagerUserOutputCapability = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothrfcommlinestatus
  type BluetoothRFCOMMLineStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothrfcommparitytype
  type BluetoothRFCOMMParityType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewayfeatures
  type IOBluetoothHandsFreeAudioGatewayFeatures = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreecallholdmodes
  type IOBluetoothHandsFreeCallHoldModes = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreecodecid
  type IOBluetoothHandsFreeCodecID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicefeatures
  type IOBluetoothHandsFreeDeviceFeatures = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreepdumessagestatus
  type IOBluetoothHandsFreePDUMessageStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreesmssupport
  type IOBluetoothHandsFreeSMSSupport = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneleventtype
  type IOBluetoothL2CAPChannelEventType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothsmsmode
  type IOBluetoothSMSMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothusernotificationchanneldirection
  type IOBluetoothUserNotificationChannelDirection = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothafhmode
  type BluetoothAFHMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothairmode
  type BluetoothAirMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothallowroleswitch
  type BluetoothAllowRoleSwitch = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothauthenticationrequirements
  type BluetoothAuthenticationRequirements = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothclassofdevice
  type BluetoothClassOfDevice = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothclockoffset
  type BluetoothClockOffset = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothconnectionhandle
  type BluetoothConnectionHandle = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothdeviceclassmajor
  type BluetoothDeviceClassMajor = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothdeviceclassminor
  type BluetoothDeviceClassMinor = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothdevicename
  type BluetoothDeviceName = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothencryptionenable
  type BluetoothEncryptionEnable = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciacldatabytecount
  type BluetoothHCIACLDataByteCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciafhchannelassessmentmode
  type BluetoothHCIAFHChannelAssessmentMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciauthenticationenable
  type BluetoothHCIAuthenticationEnable = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciautomaticflushtimeout
  type BluetoothHCIAutomaticFlushTimeout = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcicommandopcode
  type BluetoothHCICommandOpCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcicommandopcodecommand
  type BluetoothHCICommandOpCodeCommand = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcicommandopcodegroup
  type BluetoothHCICommandOpCodeGroup = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciconnectionaccepttimeout
  type BluetoothHCIConnectionAcceptTimeout = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciconnectionmode
  type BluetoothHCIConnectionMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcicontentformat
  type BluetoothHCIContentFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcicountrycode
  type BluetoothHCICountryCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcidataid
  type BluetoothHCIDataID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcideletestoredlinkkeyflag
  type BluetoothHCIDeleteStoredLinkKeyFlag = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciencryptionmode
  type BluetoothHCIEncryptionMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcierroneousdatareporting
  type BluetoothHCIErroneousDataReporting = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcieventcode
  type BluetoothHCIEventCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcieventid
  type BluetoothHCIEventID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcieventmask
  type BluetoothHCIEventMask = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciextendedinquiryresponsedatatype
  type BluetoothHCIExtendedInquiryResponseDataType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcifecrequired
  type BluetoothHCIFECRequired = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcifailedcontactcount
  type BluetoothHCIFailedContactCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciflowcontrolstate
  type BluetoothHCIFlowControlState = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciholdmodeactivity
  type BluetoothHCIHoldModeActivity = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputbandwidth
  type BluetoothHCIInputBandwidth = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputcodeddatasize
  type BluetoothHCIInputCodedDataSize = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputcodingformat
  type BluetoothHCIInputCodingFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputdatapath
  type BluetoothHCIInputDataPath = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputpcmdataformat
  type BluetoothHCIInputPCMDataFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputpcmsamplepayloadmsbposition
  type BluetoothHCIInputPCMSamplePayloadMSBPosition = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinputtransportunitsize
  type BluetoothHCIInputTransportUnitSize = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinquiryaccesscodecount
  type BluetoothHCIInquiryAccessCodeCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinquirylength
  type BluetoothHCIInquiryLength = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinquirymode
  type BluetoothHCIInquiryMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciinquiryscantype
  type BluetoothHCIInquiryScanType = number;
}
declare namespace cocoascript {
  interface BluetoothHCILESupportedFeatures {
  }
}
declare namespace cocoascript {
  interface BluetoothHCILEUsedFeatures {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcilinkpolicysettings
  type BluetoothHCILinkPolicySettings = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcilinkquality
  type BluetoothHCILinkQuality = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciloopbackmode
  type BluetoothHCILoopbackMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcimaxlatency
  type BluetoothHCIMaxLatency = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcimodeinterval
  type BluetoothHCIModeInterval = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcinumbroadcastretransmissions
  type BluetoothHCINumBroadcastRetransmissions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcinumlinkkeysdeleted
  type BluetoothHCINumLinkKeysDeleted = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcinumlinkkeystowrite
  type BluetoothHCINumLinkKeysToWrite = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioperationid
  type BluetoothHCIOperationID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputbandwidth
  type BluetoothHCIOutputBandwidth = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputcodeddatasize
  type BluetoothHCIOutputCodedDataSize = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputcodingformat
  type BluetoothHCIOutputCodingFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputdatapath
  type BluetoothHCIOutputDataPath = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputpcmdataformat
  type BluetoothHCIOutputPCMDataFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputpcmsamplepayloadmsbposition
  type BluetoothHCIOutputPCMSamplePayloadMSBPosition = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcioutputtransportunitsize
  type BluetoothHCIOutputTransportUnitSize = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipagenumber
  type BluetoothHCIPageNumber = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipagescanenablestate
  type BluetoothHCIPageScanEnableState = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipagescanmode
  type BluetoothHCIPageScanMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipagescanperiodmode
  type BluetoothHCIPageScanPeriodMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipagescantype
  type BluetoothHCIPageScanType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcipagetimeout
  type BluetoothHCIPageTimeout = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciparambytecount
  type BluetoothHCIParamByteCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciparkmodebeaconinterval
  type BluetoothHCIParkModeBeaconInterval = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciqosflags
  type BluetoothHCIQoSFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcirssivalue
  type BluetoothHCIRSSIValue = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcireadstoredlinkkeysflag
  type BluetoothHCIReadStoredLinkKeysFlag = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcireceivebandwidth
  type BluetoothHCIReceiveBandwidth = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcireceivecodecframesize
  type BluetoothHCIReceiveCodecFrameSize = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcireceivecodingformat
  type BluetoothHCIReceiveCodingFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcirequestid
  type BluetoothHCIRequestID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciresponsecount
  type BluetoothHCIResponseCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciretransmissioneffort
  type BluetoothHCIRetransmissionEffort = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcirole
  type BluetoothHCIRole = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciscodatabytecount
  type BluetoothHCISCODataByteCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcisignalid
  type BluetoothHCISignalID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcisimplepairingmode
  type BluetoothHCISimplePairingMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcisniffattemptcount
  type BluetoothHCISniffAttemptCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcisnifftimeout
  type BluetoothHCISniffTimeout = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcistatus
  type BluetoothHCIStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcisupportediac
  type BluetoothHCISupportedIAC = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransmitbandwidth
  type BluetoothHCITransmitBandwidth = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransmitcodecframesize
  type BluetoothHCITransmitCodecFrameSize = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransmitcodingformat
  type BluetoothHCITransmitCodingFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransmitpowerlevel
  type BluetoothHCITransmitPowerLevel = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransmitpowerleveltype
  type BluetoothHCITransmitPowerLevelType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransportcommandid
  type BluetoothHCITransportCommandID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcitransportid
  type BluetoothHCITransportID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcivendorcommandselector
  type BluetoothHCIVendorCommandSelector = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciversions
  type BluetoothHCIVersions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhcivoicesetting
  type BluetoothHCIVoiceSetting = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothiocapability
  type BluetoothIOCapability = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothkeyflag
  type BluetoothKeyFlag = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothkeytype
  type BluetoothKeyType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothkeypressnotificationtype
  type BluetoothKeypressNotificationType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capbytecount
  type BluetoothL2CAPByteCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capchannelid
  type BluetoothL2CAPChannelID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capcommandbytecount
  type BluetoothL2CAPCommandByteCount = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capcommandid
  type BluetoothL2CAPCommandID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capflushtimeout
  type BluetoothL2CAPFlushTimeout = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capgroupid
  type BluetoothL2CAPGroupID = cocoascript.BluetoothL2CAPChannelID;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2caplinktimeout
  type BluetoothL2CAPLinkTimeout = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2capmtu
  type BluetoothL2CAPMTU = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothl2cappsm
  type BluetoothL2CAPPSM = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlap
  type BluetoothLAP = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlmphandle
  type BluetoothLMPHandle = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlmpsubversion
  type BluetoothLMPSubversion = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlmpversion
  type BluetoothLMPVersion = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlmpversions
  type BluetoothLMPVersions = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothlinktype
  type BluetoothLinkType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothmanufacturername
  type BluetoothManufacturerName = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothmaxslots
  type BluetoothMaxSlots = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothoobdatapresence
  type BluetoothOOBDataPresence = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothpintype
  type BluetoothPINType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothpackettype
  type BluetoothPacketType = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothpagescanmode
  type BluetoothPageScanMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothpagescanperiodmode
  type BluetoothPageScanPeriodMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothpagescanrepetitionmode
  type BluetoothPageScanRepetitionMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothrfcommchannelid
  type BluetoothRFCOMMChannelID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothrfcommmtu
  type BluetoothRFCOMMMTU = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothreasoncode
  type BluetoothReasonCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothrole
  type BluetoothRole = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdpdataelementsizedescriptor
  type BluetoothSDPDataElementSizeDescriptor = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdpdataelementtypedescriptor
  type BluetoothSDPDataElementTypeDescriptor = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdperrorcode
  type BluetoothSDPErrorCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdppduid
  type BluetoothSDPPDUID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdpserviceattributeid
  type BluetoothSDPServiceAttributeID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdpservicerecordhandle
  type BluetoothSDPServiceRecordHandle = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdptransactionid
  type BluetoothSDPTransactionID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdpuuid16
  type BluetoothSDPUUID16 = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsdpuuid32
  type BluetoothSDPUUID32 = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothserviceclassmajor
  type BluetoothServiceClassMajor = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothsimplepairingdebugmode
  type BluetoothSimplePairingDebugMode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothtransportinfoptr
  type BluetoothTransportInfoPtr = cocoascript.BluetoothTransportInfo;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicesearchtypes
  type IOBluetoothDeviceSearchTypes = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannelincomingeventlistener
  type IOBluetoothL2CAPChannelIncomingEventListener = cocoascript.IOBluetoothL2CAPChannelEvent;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothobexsessionopenconnectioncallback
  type IOBluetoothOBEXSessionOpenConnectionCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/iobluetoothobjectid
  type IOBluetoothObjectID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexconstants
  type OBEXConstants = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexflags
  type OBEXFlags = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexheaderidentifier
  type OBEXHeaderIdentifier = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexmaxpacketlength
  type OBEXMaxPacketLength = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexopcode
  type OBEXOpCode = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexsessioneventcallback
  type OBEXSessionEventCallback = cocoascript.OBEXSessionEvent;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexsessioneventtype
  type OBEXSessionEventType = number;
}
declare namespace cocoascript {
  interface OBEXSessionRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/obexversion
  type OBEXVersion = number;
}
declare namespace cocoascript {
  interface PrivOBEXSessionDataRef {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/transmissionpower
  type TransmissionPower = cocoascript.SInt8;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/iobluetooth/bluetoothhciencryptionkeysize
  type BluetoothHCIEncryptionKeySize = number;
}
