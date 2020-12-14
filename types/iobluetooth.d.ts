declare namespace cocoascript {
  /**
   * An instance of this class represents a single SDP data element as defined by the Bluetooth SDP spec.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement
   */
  interface IOBluetoothSDPDataElement extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396701-initwithelementvalue
    initWithElementValue(element: cocoascript.NSObject):cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396719-initwithtype
    initWithType_sizeDescriptor_size_value(newType: cocoascript.BluetoothSDPDataElementTypeDescriptor, newSizeDescriptor: cocoascript.BluetoothSDPDataElementSizeDescriptor, newSize: number, newValue: cocoascript.NSObject):cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396689-containsdataelement
    containsDataElement(dataElement: cocoascript.IOBluetoothSDPDataElement):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396715-containsvalue
    containsValue(cmpValue: cocoascript.NSObject):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396708-getarrayvalue
    getArrayValue():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396717-getdatavalue
    getDataValue():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396693-getnumbervalue
    getNumberValue():cocoascript.NSNumber;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396704-getsdpdataelementref
    getSDPDataElementRef():cocoascript.IOBluetoothSDPDataElementRef;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396713-getsize
    getSize():number;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396691-getsizedescriptor
    getSizeDescriptor():cocoascript.BluetoothSDPDataElementSizeDescriptor;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396695-getstringvalue
    getStringValue():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396697-gettypedescriptor
    getTypeDescriptor():cocoascript.BluetoothSDPDataElementTypeDescriptor;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396702-getuuidvalue
    getUUIDValue():cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396699-getvalue
    getValue():cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396721-withelementvalue
    withElementValue(element: cocoascript.NSObject):cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396687-withsdpdataelementref
    withSDPDataElementRef(sdpDataElementRef: cocoascript.IOBluetoothSDPDataElementRef):cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelement/1396706-withtype
    withType_sizeDescriptor_size_value(type: cocoascript.BluetoothSDPDataElementTypeDescriptor, newSizeDescriptor: cocoascript.BluetoothSDPDataElementSizeDescriptor, newSize: number, newValue: cocoascript.NSObject):cocoascript.IOBluetoothSDPDataElement;
    //
    alloc():cocoascript.IOBluetoothSDPDataElement;
    //
    init():cocoascript.IOBluetoothSDPDataElement;
  }
}

declare const IOBluetoothSDPDataElement: cocoascript.IOBluetoothSDPDataElement;
declare namespace cocoascript {
  /**
   * An NSData subclass that represents a UUID as defined in the Bluetooth SDP spec.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid
   */
  interface IOBluetoothSDPUUID extends NSData {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1431398-initwithuuid16
    initWithUUID16(uuid16: cocoascript.BluetoothSDPUUID16):cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1430416-initwithuuid32
    initWithUUID32(uuid32: cocoascript.BluetoothSDPUUID32):cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1428320-uuidwithbytes
    uuidWithBytes_length(bytes: void, length: number):cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1433987-uuidwithdata
    uuidWithData(data: cocoascript.NSData):cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1434310-classforarchiver
    classForArchiver():cocoascript.Class;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1431004-classforcoder
    classForCoder():cocoascript.Class;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1429202-classforportcoder
    classForPortCoder():cocoascript.Class;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1434307-getuuidwithlength
    getUUIDWithLength(newLength: number):cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1428786-isequaltouuid
    isEqualToUUID(otherUUID: cocoascript.IOBluetoothSDPUUID):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1433610-uuid16
    uuid16(uuid16: cocoascript.BluetoothSDPUUID16):cocoascript.IOBluetoothSDPUUID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuid/1429154-uuid32
    uuid32(uuid32: cocoascript.BluetoothSDPUUID32):cocoascript.IOBluetoothSDPUUID;
    //
    alloc():cocoascript.IOBluetoothSDPUUID;
    //
    init():cocoascript.IOBluetoothSDPUUID;
  }
}

declare const IOBluetoothSDPUUID: cocoascript.IOBluetoothSDPUUID;
declare namespace cocoascript {
  /**
   * IOBluetoothSDPServiceAttribute represents a single SDP service attribute.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute
   */
  interface IOBluetoothSDPServiceAttribute extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1434496-initwithid
    initWithID_attributeElement(newAttributeID: cocoascript.BluetoothSDPServiceAttributeID, attributeElement: cocoascript.IOBluetoothSDPDataElement):cocoascript.IOBluetoothSDPServiceAttribute;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1434660-initwithid
    initWithID_attributeElementValue(newAttributeID: cocoascript.BluetoothSDPServiceAttributeID, attributeElementValue: cocoascript.NSObject):cocoascript.IOBluetoothSDPServiceAttribute;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1432222-getattributeid
    getAttributeID():cocoascript.BluetoothSDPServiceAttributeID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1434313-getdataelement
    getDataElement():cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1429114-getiddataelement
    getIDDataElement():cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1431154-withid
    withID_attributeElement(newAttributeID: cocoascript.BluetoothSDPServiceAttributeID, attributeElement: cocoascript.IOBluetoothSDPDataElement):cocoascript.IOBluetoothSDPServiceAttribute;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpserviceattribute/1430305-withid
    withID_attributeElementValue(newAttributeID: cocoascript.BluetoothSDPServiceAttributeID, attributeElementValue: cocoascript.NSObject):cocoascript.IOBluetoothSDPServiceAttribute;
    //
    alloc():cocoascript.IOBluetoothSDPServiceAttribute;
    //
    init():cocoascript.IOBluetoothSDPServiceAttribute;
  }
}

declare const IOBluetoothSDPServiceAttribute: cocoascript.IOBluetoothSDPServiceAttribute;
declare namespace cocoascript {
  /**
   * An instance of this class represents a single SDP service record.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord
   */
  interface IOBluetoothSDPServiceRecord extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1431493-initwithservicedictionary
    initWithServiceDictionary_device(serviceDict: cocoascript.NSDictionary, device: cocoascript.IOBluetoothDevice):cocoascript.IOBluetoothSDPServiceRecord;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1433779-attributes
    attributes(): cocoascript.NSDictionary;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1433059-device
    device(): cocoascript.IOBluetoothDevice;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434569-sortedattributes
    sortedAttributes(): cocoascript.NSArray;
    setSortedAttributes(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1429300-getattributedataelement
    getAttributeDataElement(attributeID: cocoascript.BluetoothSDPServiceAttributeID):cocoascript.IOBluetoothSDPDataElement;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1430339-getl2cappsm
    getL2CAPPSM(outPSM: cocoascript.BluetoothL2CAPPSM):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434175-getrfcommchannelid
    getRFCOMMChannelID(rfcommChannelID: cocoascript.BluetoothRFCOMMChannelID):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1429688-getsdpservicerecordref
    getSDPServiceRecordRef():cocoascript.IOBluetoothSDPServiceRecordRef;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434797-getservicename
    getServiceName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1432281-getservicerecordhandle
    getServiceRecordHandle(outServiceRecordHandle: cocoascript.BluetoothSDPServiceRecordHandle):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1427810-handsfreesupportedfeatures
    handsFreeSupportedFeatures():number;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1433726-hasservicefromarray
    hasServiceFromArray(array: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1431678-matchessearcharray
    matchesSearchArray(searchArray: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1429229-matchesuuid16
    matchesUUID16(uuid16: cocoascript.BluetoothSDPUUID16):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434055-matchesuuidarray
    matchesUUIDArray(uuidArray: cocoascript.NSArray):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1432315-removeservicerecord
    removeServiceRecord():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1430450-publishedservicerecordwithdictio
    publishedServiceRecordWithDictionary(serviceDict: cocoascript.NSDictionary):cocoascript.IOBluetoothSDPServiceRecord;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434716-withsdpservicerecordref
    withSDPServiceRecordRef(sdpServiceRecordRef: cocoascript.IOBluetoothSDPServiceRecordRef):cocoascript.IOBluetoothSDPServiceRecord;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1435073-withservicedictionary
    withServiceDictionary_device(serviceDict: cocoascript.NSDictionary, device: cocoascript.IOBluetoothDevice):cocoascript.IOBluetoothSDPServiceRecord;
    //
    alloc():cocoascript.IOBluetoothSDPServiceRecord;
    //
    init():cocoascript.IOBluetoothSDPServiceRecord;
  }
}

declare const IOBluetoothSDPServiceRecord: cocoascript.IOBluetoothSDPServiceRecord;
declare namespace cocoascript {
  /**
   * An instance of IOBluetoothDevice represents a single remote Bluetooth device.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice
   */
  interface IOBluetoothDevice extends IOBluetoothObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434863-devicewithaddress
    deviceWithAddress(address: cocoascript.BluetoothDeviceAddress):cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434342-devicewithaddressstring
    deviceWithAddressString(address: cocoascript.NSString):cocoascript.IOBluetoothDevice;
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
    addToFavorites():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434886-awakeafterusingcoder
    awakeAfterUsingCoder(coder: cocoascript.NSCoder):cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433689-closeconnection
    closeConnection():any;
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
    openConnection():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429815-openconnection
    openConnection(target: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433547-openconnection
    openConnection_withPageTimeout_authenticationRequired(target: cocoascript.IOBluetoothDevice, pageTimeoutValue: cocoascript.BluetoothHCIPageTimeout, authenticationRequired: cocoascript.BOOL):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431981-openl2capchannelasync
    openL2CAPChannelAsync_withPSM_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelDelegate: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430889-openl2capchannelasync
    openL2CAPChannelAsync_withPSM_withConfiguration_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelConfiguration: cocoascript.NSDictionary, channelDelegate: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434939-openl2capchannelsync
    openL2CAPChannelSync_withPSM_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelDelegate: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429338-openl2capchannelsync
    openL2CAPChannelSync_withPSM_withConfiguration_delegate(newChannel: cocoascript.IOBluetoothL2CAPChannel, psm: cocoascript.BluetoothL2CAPPSM, channelConfiguration: cocoascript.NSDictionary, channelDelegate: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1435022-openrfcommchannelasync
    openRFCOMMChannelAsync_withChannelID_delegate(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, channelID: cocoascript.BluetoothRFCOMMChannelID, channelDelegate: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431606-openrfcommchannelsync
    openRFCOMMChannelSync_withChannelID_delegate(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, channelID: cocoascript.BluetoothRFCOMMChannelID, channelDelegate: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432337-performsdpquery
    performSDPQuery(target: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431740-performsdpquery
    performSDPQuery_uuids(target: cocoascript.IOBluetoothDevice, uuidArray: cocoascript.NSArray):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1434998-rawrssi
    rawRSSI():cocoascript.BluetoothHCIRSSIValue;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432994-recentaccessdate
    recentAccessDate():cocoascript.NSDate;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1429542-registerfordisconnectnotificatio
    registerForDisconnectNotification_selector(observer: cocoascript.IOBluetoothDevice, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433706-remotenamerequest
    remoteNameRequest(target: cocoascript.IOBluetoothDevice):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1432647-remotenamerequest
    remoteNameRequest_withPageTimeout(target: cocoascript.IOBluetoothDevice, pageTimeoutValue: cocoascript.BluetoothHCIPageTimeout):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430142-removefromfavorites
    removeFromFavorites():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1430322-requestauthentication
    requestAuthentication():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431303-sendl2capechorequest
    sendL2CAPEchoRequest_length(data: void, length: cocoascript.UInt16):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1431049-setsupervisiontimeout
    setSupervisionTimeout(timeout: cocoascript.UInt16):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1589893-openl2capchannel
    openL2CAPChannel_findExisting_newChannel(psm: cocoascript.BluetoothL2CAPPSM, findExisting: cocoascript.BOOL, newChannel: cocoascript.IOBluetoothL2CAPChannel):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433372-favoritedevices
    favoriteDevices():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433674-paireddevices
    pairedDevices():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433426-recentdevices
    recentDevices(numDevices: number):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevice/1433370-registerforconnectnotifications
    registerForConnectNotifications_selector(observer: cocoascript.IOBluetoothDevice, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    //
    alloc():cocoascript.IOBluetoothDevice;
    //
    init():cocoascript.IOBluetoothDevice;
  }
}

declare const IOBluetoothDevice: cocoascript.IOBluetoothDevice;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate
   */
  interface IOBluetoothDevicePairDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432152-devicepairingconnecting
    devicePairingConnecting(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1434609-devicepairingfinished
    devicePairingFinished_error(sender: cocoascript.IOBluetoothDevicePairDelegate, error: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432539-devicepairingpincoderequest
    devicePairingPINCodeRequest(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1431489-devicepairingstarted
    devicePairingStarted(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1431902-devicepairinguserconfirmationreq
    devicePairingUserConfirmationRequest_numericValue(sender: cocoascript.IOBluetoothDevicePairDelegate, numericValue: cocoascript.BluetoothNumericValue):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432500-devicepairinguserpasskeynotifica
    devicePairingUserPasskeyNotification_passkey(sender: cocoascript.IOBluetoothDevicePairDelegate, passkey: cocoascript.BluetoothPasskey):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1429233-devicesimplepairingcomplete
    deviceSimplePairingComplete_status(sender: cocoascript.IOBluetoothDevicePairDelegate, status: cocoascript.BluetoothHCIEventStatus):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate
   */
  interface IOBluetoothHandsFreeDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427880-handsfree
    handsFree_connected(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427728-handsfree
    handsFree_disconnected(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427824-handsfree
    handsFree_scoConnectionClosed(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedelegate/1427868-handsfree
    handsFree_scoConnectionOpened(device: cocoascript.IOBluetoothHandsFree, status: cocoascript.NSNumber):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobject
   */
  interface IOBluetoothObject extends NSObject {
    //
    alloc():cocoascript.IOBluetoothObject;
    //
    init():cocoascript.IOBluetoothObject;
  }
}

declare const IOBluetoothObject: cocoascript.IOBluetoothObject;
declare namespace cocoascript {
  /**
   * Implements advanced OBEX operations in addition to simple PUT and GET.
   * doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices
   */
  interface OBEXFileTransferServices extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1431373-initwithobexsession
    initWithOBEXSession(inOBEXSession: cocoascript.IOBluetoothOBEXSession):cocoascript.OBEXFileTransferServices;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1430781-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429764-abort
    abort():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429850-changecurrentfolderbackward
    changeCurrentFolderBackward():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429069-changecurrentfolderforwardtopath
    changeCurrentFolderForwardToPath(inDirName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1428745-changecurrentfoldertoroot
    changeCurrentFolderToRoot():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1433641-connecttoftpservice
    connectToFTPService():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1429786-connecttoobjectpushservice
    connectToObjectPushService():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434277-copyremotefile
    copyRemoteFile_toLocalPath(inRemoteFileName: cocoascript.NSString, inLocalPathAndName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434906-createfolder
    createFolder(inDirName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434309-currentpath
    currentPath():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434667-disconnect
    disconnect():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1433891-getdefaultvcard
    getDefaultVCard(inLocalPathAndName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1434607-isbusy
    isBusy():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1428521-isconnected
    isConnected():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1428401-removeitem
    removeItem(inItemName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1433947-retrievefolderlisting
    retrieveFolderListing():cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1432819-senddata
    sendData_type_name(inData: cocoascript.NSData, inType: cocoascript.NSString, inName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1430911-sendfile
    sendFile(inLocalPathAndName: cocoascript.NSString):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexfiletransferservices/1435045-withobexsession
    withOBEXSession(inOBEXSession: cocoascript.IOBluetoothOBEXSession):cocoascript.OBEXFileTransferServices;
    //
    alloc():cocoascript.OBEXFileTransferServices;
    //
    init():cocoascript.OBEXFileTransferServices;
  }
}

declare const OBEXFileTransferServices: cocoascript.OBEXFileTransferServices;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexerror
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
  /**
   * An instance of IOBluetoothL2CAPChannel represents a single open L2CAP channel.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel
   */
  interface IOBluetoothL2CAPChannel extends IOBluetoothObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1432783-psm
    PSM(): cocoascript.BluetoothL2CAPPSM;
    setPSM(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433430-device
    device(): cocoascript.IOBluetoothDevice;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431269-incomingmtu
    incomingMTU(): cocoascript.BluetoothL2CAPMTU;
    setIncomingMTU(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1434996-localchannelid
    localChannelID(): cocoascript.BluetoothL2CAPChannelID;
    setLocalChannelID(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1428413-objectid
    objectID(): cocoascript.IOBluetoothObjectID;
    setObjectID(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433700-outgoingmtu
    outgoingMTU(): cocoascript.BluetoothL2CAPMTU;
    setOutgoingMTU(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1434793-remotechannelid
    remoteChannelID(): cocoascript.BluetoothL2CAPChannelID;
    setRemoteChannelID(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433617-closechannel
    closeChannel():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431693-delegate
    delegate():cocoascript.IOBluetoothL2CAPChannel;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1435024-isincoming
    isIncoming():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1432240-registerforchannelclosenotificat
    registerForChannelCloseNotification_selector(observer: cocoascript.IOBluetoothL2CAPChannel, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430453-requestremotemtu
    requestRemoteMTU(remoteMTU: cocoascript.BluetoothL2CAPMTU):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430338-setdelegate
    setDelegate(channelDelegate: cocoascript.IOBluetoothL2CAPChannel):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430853-setdelegate
    setDelegate_withConfiguration(channelDelegate: cocoascript.IOBluetoothL2CAPChannel, channelConfiguration: cocoascript.NSDictionary):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431569-writeasync
    writeAsync_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/2980981-writeasynctrap
    writeAsyncTrap_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433699-writesync
    writeSync_length(data: void, length: cocoascript.UInt16):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433032-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector(object: cocoascript.IOBluetoothL2CAPChannel, selector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1429004-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector_withPSM_direction(object: cocoascript.IOBluetoothL2CAPChannel, selector: cocoascript.SEL, psm: cocoascript.BluetoothL2CAPPSM, inDirection: cocoascript.IOBluetoothUserNotificationChannelDirection):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433768-withobjectid
    withObjectID(objectID: cocoascript.IOBluetoothObjectID):cocoascript.IOBluetoothL2CAPChannel;
    //
    alloc():cocoascript.IOBluetoothL2CAPChannel;
    //
    init():cocoascript.IOBluetoothL2CAPChannel;
  }
}

declare const IOBluetoothL2CAPChannel: cocoascript.IOBluetoothL2CAPChannel;
declare namespace cocoascript {
  /**
   * An instance of this class represents an RFCOMM channel as defined by the Bluetooth SDP spec..
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel
   */
  interface IOBluetoothRFCOMMChannel extends IOBluetoothObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1428722-closechannel
    closeChannel():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1432238-delegate
    delegate():cocoascript.IOBluetoothRFCOMMChannel;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1431850-getchannelid
    getChannelID():cocoascript.BluetoothRFCOMMChannelID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1432615-getdevice
    getDevice():cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1428996-getmtu
    getMTU():cocoascript.BluetoothRFCOMMMTU;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434526-getobjectid
    getObjectID():cocoascript.IOBluetoothObjectID;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434600-getrfcommchannelref
    getRFCOMMChannelRef():cocoascript.IOBluetoothRFCOMMChannelRef;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430334-isincoming
    isIncoming():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430708-isopen
    isOpen():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434740-istransmissionpaused
    isTransmissionPaused():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1428800-registerforchannelclosenotificat
    registerForChannelCloseNotification_selector(observer: cocoascript.IOBluetoothRFCOMMChannel, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434323-sendremotelinestatus
    sendRemoteLineStatus(lineStatus: cocoascript.BluetoothRFCOMMLineStatus):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430417-setdelegate
    setDelegate(delegate: cocoascript.IOBluetoothRFCOMMChannel):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1431119-setserialparameters
    setSerialParameters_dataBits_parity_stopBits(speed: number, nBits: cocoascript.UInt8, parity: cocoascript.BluetoothRFCOMMParityType, bitStop: cocoascript.UInt8):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430167-writeasync
    writeAsync_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434633-writesync
    writeSync_length(data: void, length: cocoascript.UInt16):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430146-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector(object: cocoascript.IOBluetoothRFCOMMChannel, selector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1431566-registerforchannelopennotificati
    registerForChannelOpenNotifications_selector_withChannelID_direction(object: cocoascript.IOBluetoothRFCOMMChannel, selector: cocoascript.SEL, channelID: cocoascript.BluetoothRFCOMMChannelID, inDirection: cocoascript.IOBluetoothUserNotificationChannelDirection):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430561-withobjectid
    withObjectID(objectID: cocoascript.IOBluetoothObjectID):cocoascript.IOBluetoothRFCOMMChannel;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1433571-withrfcommchannelref
    withRFCOMMChannelRef(rfcommChannelRef: cocoascript.IOBluetoothRFCOMMChannelRef):cocoascript.IOBluetoothRFCOMMChannel;
    //
    alloc():cocoascript.IOBluetoothRFCOMMChannel;
    //
    init():cocoascript.IOBluetoothRFCOMMChannel;
  }
}

declare const IOBluetoothRFCOMMChannel: cocoascript.IOBluetoothRFCOMMChannel;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate
   */
  interface IOBluetoothHandsFreeDeviceDelegate extends IOBluetoothHandsFreeDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1428496-handsfree
    handsFree_batteryCharge(device: cocoascript.IOBluetoothHandsFreeDevice, batteryCharge: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433981-handsfree
    handsFree_callHoldState(device: cocoascript.IOBluetoothHandsFreeDevice, callHoldState: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1429223-handsfree
    handsFree_callSetupMode(device: cocoascript.IOBluetoothHandsFreeDevice, callSetupMode: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1432883-handsfree
    handsFree_currentCall(device: cocoascript.IOBluetoothHandsFreeDevice, currentCall: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1429210-handsfree
    handsFree_incomingCallFrom(device: cocoascript.IOBluetoothHandsFreeDevice, number: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1430510-handsfree
    handsFree_incomingSMS(device: cocoascript.IOBluetoothHandsFreeDevice, sms: cocoascript.NSDictionary):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431339-handsfree
    handsFree_isCallActive(device: cocoascript.IOBluetoothHandsFreeDevice, isCallActive: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431758-handsfree
    handsFree_isRoaming(device: cocoascript.IOBluetoothHandsFreeDevice, isRoaming: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433100-handsfree
    handsFree_isServiceAvailable(device: cocoascript.IOBluetoothHandsFreeDevice, isServiceAvailable: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1431746-handsfree
    handsFree_ringAttempt(device: cocoascript.IOBluetoothHandsFreeDevice, ringAttempt: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1432799-handsfree
    handsFree_signalStrength(device: cocoascript.IOBluetoothHandsFreeDevice, signalStrength: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1430067-handsfree
    handsFree_subscriberNumber(device: cocoascript.IOBluetoothHandsFreeDevice, subscriberNumber: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/1433815-handsfree
    handsFree_unhandledResultCode(device: cocoascript.IOBluetoothHandsFreeDevice, resultCode: cocoascript.NSString):void;
  }
}
declare namespace cocoascript {
  /**
   * Object representing a device inquiry that finds Bluetooth devices in-range of the computer, and (optionally) retrieves name information for them.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry
   */
  interface IOBluetoothDeviceInquiry extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423401-initwithdelegate
    initWithDelegate(delegate: cocoascript.IOBluetoothDeviceInquiry):cocoascript.IOBluetoothDeviceInquiry;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423403-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423397-inquirylength
    inquiryLength(): number;
    setInquiryLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423413-searchtype
    searchType(): cocoascript.IOBluetoothDeviceSearchTypes;
    setSearchType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423419-updatenewdevicenames
    updateNewDeviceNames(): cocoascript.BOOL;
    setUpdateNewDeviceNames(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423417-clearfounddevices
    clearFoundDevices():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423411-founddevices
    foundDevices():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423399-setsearchcriteria
    setSearchCriteria_majorDeviceClass_minorDeviceClass(inServiceClassMajor: cocoascript.BluetoothServiceClassMajor, inMajorDeviceClass: cocoascript.BluetoothDeviceClassMajor, inMinorDeviceClass: cocoascript.BluetoothDeviceClassMinor):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423423-start
    start():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423407-stop
    stop():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423421-inquirywithdelegate
    inquiryWithDelegate(delegate: cocoascript.IOBluetoothDeviceInquiry):cocoascript.IOBluetoothDeviceInquiry;
    //
    alloc():cocoascript.IOBluetoothDeviceInquiry;
    //
    init():cocoascript.IOBluetoothDeviceInquiry;
  }
}

declare const IOBluetoothDeviceInquiry: cocoascript.IOBluetoothDeviceInquiry;
declare namespace cocoascript {
  /**
   * An instance of IOBluetoothDevicePair represents a pairing attempt to a remote Bluetooth device.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair
   */
  interface IOBluetoothDevicePair extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1429730-pairwithdevice
    pairWithDevice(device: cocoascript.IOBluetoothDevice):cocoascript.IOBluetoothDevicePair;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1431438-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1432295-device
    device():cocoascript.IOBluetoothDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1434270-replypincode
    replyPINCode_PINCode(PINCodeSize: cocoascript.ByteCount, PINCode: cocoascript.BluetoothPINCode):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1429385-replyuserconfirmation
    replyUserConfirmation(reply: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1433332-setdevice
    setDevice(inDevice: cocoascript.IOBluetoothDevice):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1430048-start
    start():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepair/1433707-stop
    stop():void;
    //
    alloc():cocoascript.IOBluetoothDevicePair;
    //
    init():cocoascript.IOBluetoothDevicePair;
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
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree
   */
  interface IOBluetoothHandsFree extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1811379-isconnected
    ():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427916-initwithdevice
    initWithDevice_delegate(device: cocoascript.IOBluetoothDevice, inDelegate: cocoascript.IOBluetoothHandsFreeDelegate):cocoascript.IOBluetoothHandsFree;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427726-smsenabled
    SMSEnabled(): cocoascript.BOOL;
    setSMSEnabled(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427794-smsmode
    SMSMode(): cocoascript.IOBluetoothSMSMode;
    setSMSMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427760-connected
    connected(): cocoascript.BOOL;
    setConnected(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427851-delegate
    delegate(): cocoascript.IOBluetoothHandsFreeDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427918-device
    device(): cocoascript.IOBluetoothDevice;
    setDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427864-devicecallholdmodes
    deviceCallHoldModes(): number;
    setDeviceCallHoldModes(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427893-devicesupportedfeatures
    deviceSupportedFeatures(): number;
    setDeviceSupportedFeatures(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427843-devicesupportedsmsservices
    deviceSupportedSMSServices(): number;
    setDeviceSupportedSMSServices(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427800-inputmuted
    inputMuted(): cocoascript.BOOL;
    setInputMuted(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427816-inputvolume
    inputVolume(): number;
    setInputVolume(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427756-outputmuted
    outputMuted(): cocoascript.BOOL;
    setOutputMuted(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427874-outputvolume
    outputVolume(): number;
    setOutputVolume(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427903-supportedfeatures
    supportedFeatures(): number;
    setSupportedFeatures(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427829-connect
    connect():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427914-connectsco
    connectSCO():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427804-disconnect
    disconnect():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427766-disconnectsco
    disconnectSCO():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427897-indicator
    indicator(indicatorName: cocoascript.NSString):number;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427858-isscoconnected
    isSCOConnected():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree/1427872-setindicator
    setIndicator_value(indicatorName: cocoascript.NSString, indicatorValue: number):void;
    //
    alloc():cocoascript.IOBluetoothHandsFree;
    //
    init():cocoascript.IOBluetoothHandsFree;
  }
}

declare const IOBluetoothHandsFree: cocoascript.IOBluetoothHandsFree;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway
   */
  interface IOBluetoothHandsFreeAudioGateway extends IOBluetoothHandsFree {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1428663-initwithdevice
    initWithDevice_delegate(device: cocoascript.IOBluetoothDevice, inDelegate: cocoascript.IOBluetoothHandsFreeAudioGateway):cocoascript.IOBluetoothHandsFreeAudioGateway;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1431383-createindicator
    createIndicator_min_max_currentValue(indicatorName: cocoascript.NSString, minValue: number, maxValue: number, currentValue: number):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1429231-processatcommand
    processATCommand(atCommand: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1429059-sendokresponse
    sendOKResponse():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1434911-sendresponse
    sendResponse(response: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogateway/1434547-sendresponse
    sendResponse_withOK(response: cocoascript.NSString, withOK: cocoascript.BOOL):void;
    //
    alloc():cocoascript.IOBluetoothHandsFreeAudioGateway;
    //
    init():cocoascript.IOBluetoothHandsFreeAudioGateway;
  }
}

declare const IOBluetoothHandsFreeAudioGateway: cocoascript.IOBluetoothHandsFreeAudioGateway;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice
   */
  interface IOBluetoothHandsFreeDevice extends IOBluetoothHandsFree {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1428834-initwithdevice
    initWithDevice_delegate(device: cocoascript.IOBluetoothDevice, delegate: cocoascript.IOBluetoothHandsFreeDevice):cocoascript.IOBluetoothHandsFreeDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430391-acceptcall
    acceptCall():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1432773-acceptcallonphone
    acceptCallOnPhone():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1432732-addheldcall
    addHeldCall():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1434534-calltransfer
    callTransfer():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430837-currentcalllist
    currentCallList():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430771-dialnumber
    dialNumber(aNumber: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430763-endcall
    endCall():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1434936-holdcall
    holdCall():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1429842-memorydial
    memoryDial(memoryLocation: number):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430932-placeallothersonhold
    placeAllOthersOnHold(index: number):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430476-redial
    redial():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1432769-releaseactivecalls
    releaseActiveCalls():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1431536-releasecall
    releaseCall(index: number):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1433087-releaseheldcalls
    releaseHeldCalls():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1429190-sendatcommand
    sendATCommand(atCommand: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430619-sendatcommand
    sendATCommand_timeout_selector_target(atCommand: cocoascript.NSString, timeout: number, selector: cocoascript.SEL, target: cocoascript.IOBluetoothHandsFreeDevice):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1428351-senddtmf
    sendDTMF(character: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1429652-sendsms
    sendSMS_message(aNumber: cocoascript.NSString, aMessage: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1430919-subscribernumber
    subscriberNumber():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1429256-transferaudiotocomputer
    transferAudioToComputer():void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevice/1434079-transferaudiotophone
    transferAudioToPhone():void;
    //
    alloc():cocoascript.IOBluetoothHandsFreeDevice;
    //
    init():cocoascript.IOBluetoothHandsFreeDevice;
  }
}

declare const IOBluetoothHandsFreeDevice: cocoascript.IOBluetoothHandsFreeDevice;
declare namespace cocoascript {
  /**
   * This class is a representation of a Bluetooth Host Controller Interface that is present on the local computer (either plugged in externally or available internally).
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller
   */
  interface IOBluetoothHostController extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1434248-delegate
    delegate(): cocoascript.id;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1429740-powerstate
    powerState(): cocoascript.BluetoothHCIPowerState;
    setPowerState(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1434703-addressasstring
    addressAsString():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1428536-classofdevice
    classOfDevice():cocoascript.BluetoothClassOfDevice;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1431310-nameasstring
    nameAsString():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1433813-setclassofdevice
    setClassOfDevice_forTimeInterval(classOfDevice: cocoascript.BluetoothClassOfDevice, seconds: cocoascript.NSTimeInterval):any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhostcontroller/1433496-defaultcontroller
    defaultController():cocoascript.IOBluetoothHostController;
    //
    alloc():cocoascript.IOBluetoothHostController;
    //
    init():cocoascript.IOBluetoothHostController;
  }
}

declare const IOBluetoothHostController: cocoascript.IOBluetoothHostController;
declare namespace cocoascript {
  interface IOBluetoothL2CAPChannelRef {
  }
}
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
    sendBufferTroughChannel():any;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1428500-senddatatotransport
    sendDataToTransport_dataLength(inDataToSend: void, inDataLength: any):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1431213-setobexsessionopenconnectioncall
    setOBEXSessionOpenConnectionCallback_refCon(inCallback: cocoascript.IOBluetoothOBEXSessionOpenConnectionCallback, inUserRefCon: void):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1434129-setopentransportconnectionasyncs
    setOpenTransportConnectionAsyncSelector_target_refCon(inSelector: cocoascript.SEL, inSelectorTarget: cocoascript.IOBluetoothOBEXSession, inUserRefCon: cocoascript.IOBluetoothOBEXSession):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1432953-withdevice
    withDevice_channelID(inDevice: cocoascript.IOBluetoothDevice, inRFCOMMChannelID: cocoascript.BluetoothRFCOMMChannelID):cocoascript.IOBluetoothOBEXSession;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1431248-withincomingrfcommchannel
    withIncomingRFCOMMChannel_eventSelector_selectorTarget_refCon(inChannel: cocoascript.IOBluetoothRFCOMMChannel, inEventSelector: cocoascript.SEL, inEventSelectorTarget: cocoascript.IOBluetoothOBEXSession, inUserRefCon: void):cocoascript.IOBluetoothOBEXSession;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsession/1431979-withsdpservicerecord
    withSDPServiceRecord(inSDPServiceRecord: cocoascript.IOBluetoothSDPServiceRecord):cocoascript.IOBluetoothOBEXSession;
    //
    alloc():cocoascript.IOBluetoothOBEXSession;
    //
    init():cocoascript.IOBluetoothOBEXSession;
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
  interface IOBluetoothSDPUUIDRef {
  }
}
declare namespace cocoascript {
  /**
   * Represents a registered notification.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotification
   */
  interface IOBluetoothUserNotification extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotification/1398108-unregister
    unregister():void;
    //
    alloc():cocoascript.IOBluetoothUserNotification;
    //
    init():cocoascript.IOBluetoothUserNotification;
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
   * doc://com.apple.documentation/documentation/iobluetooth/obexsession
   */
  interface OBEXSession extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1429402-obexabort
    OBEXAbort_optionalHeadersLength_eventSelector_selectorTarget_refCon(inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1432852-obexabortresponse
    OBEXAbortResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1433181-obexconnect
    OBEXConnect_maxPacketLength_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inFlags: cocoascript.OBEXFlags, inMaxPacketLength: cocoascript.OBEXMaxPacketLength, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434390-obexconnectresponse
    OBEXConnectResponse_flags_maxPacketLength_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inFlags: cocoascript.OBEXFlags, inMaxPacketLength: cocoascript.OBEXMaxPacketLength, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434125-obexdisconnect
    OBEXDisconnect_optionalHeadersLength_eventSelector_selectorTarget_refCon(inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434021-obexdisconnectresponse
    OBEXDisconnectResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434710-obexget
    OBEXGet_headers_headersLength_eventSelector_selectorTarget_refCon(isFinalChunk: boolean, inHeaders: void, inHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434941-obexgetresponse
    OBEXGetResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1431295-obexput
    OBEXPut_headersData_headersDataLength_bodyData_bodyDataLength_eventSelector_selectorTarget_refCon(isFinalChunk: boolean, inHeadersData: void, inHeadersDataLength: any, inBodyData: void, inBodyDataLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1429618-obexputresponse
    OBEXPutResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1428620-obexsetpath
    OBEXSetPath_constants_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inFlags: cocoascript.OBEXFlags, inConstants: cocoascript.OBEXConstants, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1434520-obexsetpathresponse
    OBEXSetPathResponse_optionalHeaders_optionalHeadersLength_eventSelector_selectorTarget_refCon(inResponseOpCode: cocoascript.OBEXOpCode, inOptionalHeaders: void, inOptionalHeadersLength: any, inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
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
    hasOpenTransportConnection():boolean;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1431621-opentransportconnection
    openTransportConnection_selectorTarget_refCon(inSelector: cocoascript.SEL, inTarget: cocoascript.OBEXSession, inUserRefCon: void):cocoascript.OBEXError;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsession/1430616-senddatatotransport
    sendDataToTransport_dataLength(inDataToSend: void, inDataLength: any):cocoascript.OBEXError;
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
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks
   */
  interface IOBluetoothDeviceAsyncCallbacks {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434956-connectioncomplete
    connectionComplete_status(device: cocoascript.IOBluetoothDevice, status: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434878-remotenamerequestcomplete
    remoteNameRequestComplete_status(device: cocoascript.IOBluetoothDevice, status: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434694-sdpquerycomplete
    sdpQueryComplete_status(device: cocoascript.IOBluetoothDevice, status: any):void;
  }
}
declare namespace cocoascript {
  /**
   * This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate
   */
  interface IOBluetoothDeviceInquiryDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423409-deviceinquirycomplete
    deviceInquiryComplete_error_aborted(sender: cocoascript.IOBluetoothDeviceInquiry, error: any, aborted: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423415-deviceinquirydevicefound
    deviceInquiryDeviceFound_device(sender: cocoascript.IOBluetoothDeviceInquiry, device: cocoascript.IOBluetoothDevice):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423429-deviceinquirydevicenameupdated
    deviceInquiryDeviceNameUpdated_device_devicesRemaining(sender: cocoascript.IOBluetoothDeviceInquiry, device: cocoascript.IOBluetoothDevice, devicesRemaining: number):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423405-deviceinquirystarted
    deviceInquiryStarted(sender: cocoascript.IOBluetoothDeviceInquiry):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423425-deviceinquiryupdatingdevicenames
    deviceInquiryUpdatingDeviceNamesStarted_devicesRemaining(sender: cocoascript.IOBluetoothDeviceInquiry, devicesRemaining: number):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate
   */
  interface IOBluetoothHandsFreeAudioGatewayDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/1433943-handsfree
    handsFree_hangup(device: cocoascript.IOBluetoothHandsFreeAudioGateway, hangup: cocoascript.NSNumber):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/1433563-handsfree
    handsFree_redial(device: cocoascript.IOBluetoothHandsFreeAudioGateway, redial: cocoascript.NSNumber):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate
   */
  interface IOBluetoothL2CAPChannelDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1433766-l2capchannelclosed
    l2capChannelClosed(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431868-l2capchanneldata
    l2capChannelData_data_length(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, dataPointer: void, dataLength: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1430363-l2capchannelopencomplete
    l2capChannelOpenComplete_status(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, error: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431728-l2capchannelqueuespaceavailable
    l2capChannelQueueSpaceAvailable(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1428740-l2capchannelreconfigured
    l2capChannelReconfigured(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431099-l2capchannelwritecomplete
    l2capChannelWriteComplete_refcon_status(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, refcon: void, error: any):void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate
   */
  interface IOBluetoothRFCOMMChannelDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434518-rfcommchannelclosed
    rfcommChannelClosed(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429160-rfcommchannelcontrolsignalschang
    rfcommChannelControlSignalsChanged(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1431822-rfcommchanneldata
    rfcommChannelData_data_length(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, dataPointer: void, dataLength: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1430179-rfcommchannelflowcontrolchanged
    rfcommChannelFlowControlChanged(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429633-rfcommchannelopencomplete
    rfcommChannelOpenComplete_status(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, error: any):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429752-rfcommchannelqueuespaceavailable
    rfcommChannelQueueSpaceAvailable(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434978-rfcommchannelwritecomplete
    rfcommChannelWriteComplete_refcon_status(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, refcon: void, error: any):void;
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdpdataelementtypedescriptor
  type BluetoothSDPDataElementTypeDescriptor = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdpdataelementsizedescriptor
  type BluetoothSDPDataElementSizeDescriptor = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdpuuid16
  type BluetoothSDPUUID16 = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdpuuid32
  type BluetoothSDPUUID32 = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdpserviceattributeid
  type BluetoothSDPServiceAttributeID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2cappsm
  type BluetoothL2CAPPSM = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothrfcommchannelid
  type BluetoothRFCOMMChannelID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdpservicerecordhandle
  type BluetoothSDPServiceRecordHandle = number;
}
declare namespace cocoascript {
  interface BluetoothDeviceAddress {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothclassofdevice
  type BluetoothClassOfDevice = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothconnectionhandle
  type BluetoothConnectionHandle = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothdeviceclassmajor
  type BluetoothDeviceClassMajor = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothdeviceclassminor
  type BluetoothDeviceClassMinor = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothserviceclassmajor
  type BluetoothServiceClassMajor = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssivalue
  type BluetoothHCIRSSIValue = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothclockoffset
  type BluetoothClockOffset = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionmode
  type BluetoothHCIEncryptionMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlinktype
  type BluetoothLinkType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpagescanmode
  type BluetoothPageScanMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpagescanperiodmode
  type BluetoothPageScanPeriodMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpagescanrepetitionmode
  type BluetoothPageScanRepetitionMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipagetimeout
  type BluetoothHCIPageTimeout = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothnumericvalue
  type BluetoothNumericValue = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpasskey
  type BluetoothPasskey = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventstatus
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
  // doc://com.apple.documentation/documentation/iobluetooth/obextransporteventtype
  type OBEXTransportEventType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotificationcallback
  type IOBluetoothUserNotificationCallback = cocoascript.IOBluetoothObjectRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchoptions
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
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampcommandrejectreason
  type BluetoothAMPCommandRejectReason = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampcreatephysicallinkresponsestatus
  type BluetoothAMPCreatePhysicalLinkResponseStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampdisconnectphysicallinkresponsestatus
  type BluetoothAMPDisconnectPhysicalLinkResponseStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampdiscoverresponsecontrollerstatus
  type BluetoothAMPDiscoverResponseControllerStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampgetassocresponsestatus
  type BluetoothAMPGetAssocResponseStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampgetinforesponsestatus
  type BluetoothAMPGetInfoResponseStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothampmanagercode
  type BluetoothAMPManagerCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipowerstate
  type BluetoothHCIPowerState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capcommandcode
  type BluetoothL2CAPCommandCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capcommandrejectreason
  type BluetoothL2CAPCommandRejectReason = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capconfigurationoption
  type BluetoothL2CAPConfigurationOption = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capconfigurationresult
  type BluetoothL2CAPConfigurationResult = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capconfigurationretransmissionandflowcontrolflags
  type BluetoothL2CAPConfigurationRetransmissionAndFlowControlFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capconnectionresult
  type BluetoothL2CAPConnectionResult = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capconnectionstatus
  type BluetoothL2CAPConnectionStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capinformationextendedfeaturesmask
  type BluetoothL2CAPInformationExtendedFeaturesMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capinformationresult
  type BluetoothL2CAPInformationResult = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capinformationtype
  type BluetoothL2CAPInformationType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capqostype
  type BluetoothL2CAPQoSType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capsegmentationandreassembly
  type BluetoothL2CAPSegmentationAndReassembly = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capsupervisoryfuctiontype
  type BluetoothL2CAPSupervisoryFuctionType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothleaddresstype
  type BluetoothLEAddressType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothleadvertisingtype
  type BluetoothLEAdvertisingType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothleconnectioninterval
  type BluetoothLEConnectionInterval = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlescan
  type BluetoothLEScan = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlescanduplicatefilter
  type BluetoothLEScanDuplicateFilter = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlescanfilter
  type BluetoothLEScanFilter = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlescantype
  type BluetoothLEScanType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanagercommandcode
  type BluetoothLESecurityManagerCommandCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanageriocapability
  type BluetoothLESecurityManagerIOCapability = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanagerkeypressnotificationtype
  type BluetoothLESecurityManagerKeypressNotificationType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanageroobdata
  type BluetoothLESecurityManagerOOBData = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanagerpairingfailedreasoncode
  type BluetoothLESecurityManagerPairingFailedReasonCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanageruserinputcapability
  type BluetoothLESecurityManagerUserInputCapability = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlesecuritymanageruseroutputcapability
  type BluetoothLESecurityManagerUserOutputCapability = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothrfcommlinestatus
  type BluetoothRFCOMMLineStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothrfcommparitytype
  type BluetoothRFCOMMParityType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewayfeatures
  type IOBluetoothHandsFreeAudioGatewayFeatures = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreecallholdmodes
  type IOBluetoothHandsFreeCallHoldModes = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreecodecid
  type IOBluetoothHandsFreeCodecID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreedevicefeatures
  type IOBluetoothHandsFreeDeviceFeatures = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreepdumessagestatus
  type IOBluetoothHandsFreePDUMessageStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfreesmssupport
  type IOBluetoothHandsFreeSMSSupport = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneleventtype
  type IOBluetoothL2CAPChannelEventType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsmsmode
  type IOBluetoothSMSMode = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotificationchanneldirection
  type IOBluetoothUserNotificationChannelDirection = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhmode
  type BluetoothAFHMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothairmode
  type BluetoothAirMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothallowroleswitch
  type BluetoothAllowRoleSwitch = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothauthenticationrequirements
  type BluetoothAuthenticationRequirements = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothdevicename
  type BluetoothDeviceName = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothencryptionenable
  type BluetoothEncryptionEnable = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacldatabytecount
  type BluetoothHCIACLDataByteCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciafhchannelassessmentmode
  type BluetoothHCIAFHChannelAssessmentMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciauthenticationenable
  type BluetoothHCIAuthenticationEnable = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeout
  type BluetoothHCIAutomaticFlushTimeout = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicommandopcode
  type BluetoothHCICommandOpCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicommandopcodecommand
  type BluetoothHCICommandOpCodeCommand = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicommandopcodegroup
  type BluetoothHCICommandOpCodeGroup = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciconnectionaccepttimeout
  type BluetoothHCIConnectionAcceptTimeout = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciconnectionmode
  type BluetoothHCIConnectionMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicontentformat
  type BluetoothHCIContentFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicountrycode
  type BluetoothHCICountryCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcidataid
  type BluetoothHCIDataID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcideletestoredlinkkeyflag
  type BluetoothHCIDeleteStoredLinkKeyFlag = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcierroneousdatareporting
  type BluetoothHCIErroneousDataReporting = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventcode
  type BluetoothHCIEventCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventid
  type BluetoothHCIEventID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmask
  type BluetoothHCIEventMask = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresponsedatatype
  type BluetoothHCIExtendedInquiryResponseDataType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifecrequired
  type BluetoothHCIFECRequired = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactcount
  type BluetoothHCIFailedContactCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciflowcontrolstate
  type BluetoothHCIFlowControlState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciholdmodeactivity
  type BluetoothHCIHoldModeActivity = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputbandwidth
  type BluetoothHCIInputBandwidth = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputcodeddatasize
  type BluetoothHCIInputCodedDataSize = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputcodingformat
  type BluetoothHCIInputCodingFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputdatapath
  type BluetoothHCIInputDataPath = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputpcmdataformat
  type BluetoothHCIInputPCMDataFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputpcmsamplepayloadmsbposition
  type BluetoothHCIInputPCMSamplePayloadMSBPosition = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinputtransportunitsize
  type BluetoothHCIInputTransportUnitSize = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryaccesscodecount
  type BluetoothHCIInquiryAccessCodeCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirylength
  type BluetoothHCIInquiryLength = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirymode
  type BluetoothHCIInquiryMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryscantype
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
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettings
  type BluetoothHCILinkPolicySettings = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkquality
  type BluetoothHCILinkQuality = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciloopbackmode
  type BluetoothHCILoopbackMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcimaxlatency
  type BluetoothHCIMaxLatency = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcimodeinterval
  type BluetoothHCIModeInterval = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcinumbroadcastretransmissions
  type BluetoothHCINumBroadcastRetransmissions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcinumlinkkeysdeleted
  type BluetoothHCINumLinkKeysDeleted = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcinumlinkkeystowrite
  type BluetoothHCINumLinkKeysToWrite = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioperationid
  type BluetoothHCIOperationID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputbandwidth
  type BluetoothHCIOutputBandwidth = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputcodeddatasize
  type BluetoothHCIOutputCodedDataSize = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputcodingformat
  type BluetoothHCIOutputCodingFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputdatapath
  type BluetoothHCIOutputDataPath = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputpcmdataformat
  type BluetoothHCIOutputPCMDataFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputpcmsamplepayloadmsbposition
  type BluetoothHCIOutputPCMSamplePayloadMSBPosition = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcioutputtransportunitsize
  type BluetoothHCIOutputTransportUnitSize = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipagenumber
  type BluetoothHCIPageNumber = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipagescanenablestate
  type BluetoothHCIPageScanEnableState = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipagescanmode
  type BluetoothHCIPageScanMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipagescanperiodmode
  type BluetoothHCIPageScanPeriodMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcipagescantype
  type BluetoothHCIPageScanType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciparambytecount
  type BluetoothHCIParamByteCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciparkmodebeaconinterval
  type BluetoothHCIParkModeBeaconInterval = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciqosflags
  type BluetoothHCIQoSFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadstoredlinkkeysflag
  type BluetoothHCIReadStoredLinkKeysFlag = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireceivebandwidth
  type BluetoothHCIReceiveBandwidth = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireceivecodecframesize
  type BluetoothHCIReceiveCodecFrameSize = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireceivecodingformat
  type BluetoothHCIReceiveCodingFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestid
  type BluetoothHCIRequestID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciresponsecount
  type BluetoothHCIResponseCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciretransmissioneffort
  type BluetoothHCIRetransmissionEffort = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirole
  type BluetoothHCIRole = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciscodatabytecount
  type BluetoothHCISCODataByteCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisignalid
  type BluetoothHCISignalID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisimplepairingmode
  type BluetoothHCISimplePairingMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisniffattemptcount
  type BluetoothHCISniffAttemptCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisnifftimeout
  type BluetoothHCISniffTimeout = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcistatus
  type BluetoothHCIStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisupportediac
  type BluetoothHCISupportedIAC = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitbandwidth
  type BluetoothHCITransmitBandwidth = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitcodecframesize
  type BluetoothHCITransmitCodecFrameSize = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitcodingformat
  type BluetoothHCITransmitCodingFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitpowerlevel
  type BluetoothHCITransmitPowerLevel = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitpowerleveltype
  type BluetoothHCITransmitPowerLevelType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransportcommandid
  type BluetoothHCITransportCommandID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransportid
  type BluetoothHCITransportID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcivendorcommandselector
  type BluetoothHCIVendorCommandSelector = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversions
  type BluetoothHCIVersions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcivoicesetting
  type BluetoothHCIVoiceSetting = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapability
  type BluetoothIOCapability = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeyflag
  type BluetoothKeyFlag = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeytype
  type BluetoothKeyType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotificationtype
  type BluetoothKeypressNotificationType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capbytecount
  type BluetoothL2CAPByteCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capchannelid
  type BluetoothL2CAPChannelID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capcommandbytecount
  type BluetoothL2CAPCommandByteCount = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capcommandid
  type BluetoothL2CAPCommandID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capflushtimeout
  type BluetoothL2CAPFlushTimeout = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capgroupid
  type BluetoothL2CAPGroupID = cocoascript.BluetoothL2CAPChannelID;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2caplinktimeout
  type BluetoothL2CAPLinkTimeout = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capmtu
  type BluetoothL2CAPMTU = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlap
  type BluetoothLAP = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlmphandle
  type BluetoothLMPHandle = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlmpsubversion
  type BluetoothLMPSubversion = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlmpversion
  type BluetoothLMPVersion = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothlmpversions
  type BluetoothLMPVersions = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothmanufacturername
  type BluetoothManufacturerName = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothmaxslots
  type BluetoothMaxSlots = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothoobdatapresence
  type BluetoothOOBDataPresence = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpintype
  type BluetoothPINType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpackettype
  type BluetoothPacketType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothrfcommmtu
  type BluetoothRFCOMMMTU = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothreasoncode
  type BluetoothReasonCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothrole
  type BluetoothRole = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdperrorcode
  type BluetoothSDPErrorCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdppduid
  type BluetoothSDPPDUID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsdptransactionid
  type BluetoothSDPTransactionID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsimplepairingdebugmode
  type BluetoothSimplePairingDebugMode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothtransportinfoptr
  type BluetoothTransportInfoPtr = cocoascript.BluetoothTransportInfo;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchtypes
  type IOBluetoothDeviceSearchTypes = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelincomingdatalistener
  type IOBluetoothL2CAPChannelIncomingDataListener = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelincomingeventlistener
  type IOBluetoothL2CAPChannelIncomingEventListener = cocoascript.IOBluetoothL2CAPChannelEvent;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobexsessionopenconnectioncallback
  type IOBluetoothOBEXSessionOpenConnectionCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobjectid
  type IOBluetoothObjectID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexconstants
  type OBEXConstants = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexflags
  type OBEXFlags = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexheaderidentifier
  type OBEXHeaderIdentifier = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexmaxpacketlength
  type OBEXMaxPacketLength = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexopcode
  type OBEXOpCode = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexsessioneventcallback
  type OBEXSessionEventCallback = cocoascript.OBEXSessionEvent;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexsessioneventtype
  type OBEXSessionEventType = number;
}
declare namespace cocoascript {
  interface OBEXSessionRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexversion
  type OBEXVersion = number;
}
declare namespace cocoascript {
  interface PrivOBEXSessionDataRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/transmissionpower
  type TransmissionPower = cocoascript.SInt8;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysize
  type BluetoothHCIEncryptionKeySize = number;
}
