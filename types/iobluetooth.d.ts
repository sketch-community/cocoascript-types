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
    getL2CAPPSM(outPSM: cocoascript.BluetoothL2CAPPSM):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434175-getrfcommchannelid
    getRFCOMMChannelID(rfcommChannelID: cocoascript.BluetoothRFCOMMChannelID):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1429688-getsdpservicerecordref
    getSDPServiceRecordRef():cocoascript.IOBluetoothSDPServiceRecordRef;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1434797-getservicename
    getServiceName():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecord/1432281-getservicerecordhandle
    getServiceRecordHandle(outServiceRecordHandle: cocoascript.BluetoothSDPServiceRecordHandle):cocoascript.IOReturn;
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
    removeServiceRecord():cocoascript.IOReturn;
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
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate
   */
  interface IOBluetoothDevicePairDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1432152-devicepairingconnecting
    devicePairingConnecting(sender: cocoascript.IOBluetoothDevicePairDelegate):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicepairdelegate/1434609-devicepairingfinished
    devicePairingFinished_error(sender: cocoascript.IOBluetoothDevicePairDelegate, error: cocoascript.IOReturn):void;
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkqualityinfo
   */
  interface BluetoothHCILinkQualityInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkqualityinfo/1430303-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkqualityinfo/1429912-qualityvalue
    qualityValue(): cocoascript.BluetoothHCILinkQuality;
    setQualityValue(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssiinfo
   */
  interface BluetoothHCIRSSIInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssiinfo/1429507-rssivalue
    RSSIValue(): cocoascript.BluetoothHCIRSSIValue;
    setRSSIValue(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirssiinfo/1432838-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
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
    closeChannel():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431693-delegate
    delegate():cocoascript.IOBluetoothL2CAPChannel;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1435024-isincoming
    isIncoming():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1432240-registerforchannelclosenotificat
    registerForChannelCloseNotification_selector(observer: cocoascript.IOBluetoothL2CAPChannel, inSelector: cocoascript.SEL):cocoascript.IOBluetoothUserNotification;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430453-requestremotemtu
    requestRemoteMTU(remoteMTU: cocoascript.BluetoothL2CAPMTU):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430338-setdelegate
    setDelegate(channelDelegate: cocoascript.IOBluetoothL2CAPChannel):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1430853-setdelegate
    setDelegate_withConfiguration(channelDelegate: cocoascript.IOBluetoothL2CAPChannel, channelConfiguration: cocoascript.NSDictionary):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1431569-writeasync
    writeAsync_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/2980981-writeasynctrap
    writeAsyncTrap_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannel/1433699-writesync
    writeSync_length(data: void, length: cocoascript.UInt16):cocoascript.IOReturn;
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
    closeChannel():cocoascript.IOReturn;
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
    sendRemoteLineStatus(lineStatus: cocoascript.BluetoothRFCOMMLineStatus):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430417-setdelegate
    setDelegate(delegate: cocoascript.IOBluetoothRFCOMMChannel):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1431119-setserialparameters
    setSerialParameters_dataBits_parity_stopBits(speed: cocoascript.UInt32, nBits: cocoascript.UInt8, parity: cocoascript.BluetoothRFCOMMParityType, bitStop: cocoascript.UInt8):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1430167-writeasync
    writeAsync_length_refcon(data: void, length: cocoascript.UInt16, refcon: void):cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannel/1434633-writesync
    writeSync_length(data: void, length: cocoascript.UInt16):cocoascript.IOReturn;
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
    start():cocoascript.IOReturn;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquiry/1423407-stop
    stop():cocoascript.IOReturn;
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
    start():cocoascript.IOReturn;
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceref
   */
  interface IOBluetoothDeviceRef {
  }
}
declare namespace cocoascript {
  /**
   * Hands free profile class.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothhandsfree
   */
  interface IOBluetoothHandsFree extends NSObject {
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
    setClassOfDevice_forTimeInterval(classOfDevice: cocoascript.BluetoothClassOfDevice, seconds: cocoascript.NSTimeInterval):cocoascript.IOReturn;
    //
    alloc():cocoascript.IOBluetoothHostController;
    //
    init():cocoascript.IOBluetoothHostController;
  }
}

declare const IOBluetoothHostController: cocoascript.IOBluetoothHostController;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelref
   */
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
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothobjectref
   */
  interface IOBluetoothObjectRef {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchannelref
   */
  interface IOBluetoothRFCOMMChannelRef {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpdataelementref
   */
  interface IOBluetoothSDPDataElementRef {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpservicerecordref
   */
  interface IOBluetoothSDPServiceRecordRef {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothsdpuuidref
   */
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothusernotificationref
   */
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
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks
   */
  interface IOBluetoothDeviceAsyncCallbacks {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434956-connectioncomplete
    connectionComplete_status(device: cocoascript.IOBluetoothDevice, status: cocoascript.IOReturn):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434878-remotenamerequestcomplete
    remoteNameRequestComplete_status(device: cocoascript.IOBluetoothDevice, status: cocoascript.IOReturn):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceasynccallbacks/1434694-sdpquerycomplete
    sdpQueryComplete_status(device: cocoascript.IOBluetoothDevice, status: cocoascript.IOReturn):void;
  }
}
declare namespace cocoascript {
  /**
   * This category on NSObject describes the delegate methods for the IOBluetoothDeviceInquiry object. All methods are optional, but it is highly recommended you implement them all. Do NOT invoke remote name requests on found IOBluetoothDevice objects unless the inquiry object has been stopped. Doing so may deadlock your process.
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate
   */
  interface IOBluetoothDeviceInquiryDelegate {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdeviceinquirydelegate/1423409-deviceinquirycomplete
    deviceInquiryComplete_error_aborted(sender: cocoascript.IOBluetoothDeviceInquiry, error: cocoascript.IOReturn, aborted: cocoascript.BOOL):void;
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
    l2capChannelData_data_length(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, dataPointer: void, dataLength: cocoascript.size_t):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1430363-l2capchannelopencomplete
    l2capChannelOpenComplete_status(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, error: cocoascript.IOReturn):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431728-l2capchannelqueuespaceavailable
    l2capChannelQueueSpaceAvailable(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1428740-l2capchannelreconfigured
    l2capChannelReconfigured(l2capChannel: cocoascript.IOBluetoothL2CAPChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldelegate/1431099-l2capchannelwritecomplete
    l2capChannelWriteComplete_refcon_status(l2capChannel: cocoascript.IOBluetoothL2CAPChannel, refcon: void, error: cocoascript.IOReturn):void;
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
    rfcommChannelData_data_length(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, dataPointer: void, dataLength: cocoascript.size_t):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1430179-rfcommchannelflowcontrolchanged
    rfcommChannelFlowControlChanged(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429633-rfcommchannelopencomplete
    rfcommChannelOpenComplete_status(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, error: cocoascript.IOReturn):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1429752-rfcommchannelqueuespaceavailable
    rfcommChannelQueueSpaceAvailable(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel):void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/1434978-rfcommchannelwritecomplete
    rfcommChannelWriteComplete_refcon_status(rfcommChannel: cocoascript.IOBluetoothRFCOMMChannel, refcon: void, error: cocoascript.IOReturn):void;
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothdeviceaddress
   */
  interface BluetoothDeviceAddress {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothdeviceaddress/1430171-data
    data(): number;
    setData(): void;
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent
   */
  interface OBEXSessionEvent {
    // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1432887-isendofeventdata
    isEndOfEventData(): cocoascript.Boolean;
    setIsEndOfEventData(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1432148-session
    session(): cocoascript.OBEXSessionRef;
    setSession(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1431732-type
    type(): cocoascript.OBEXSessionEventType;
    setType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsessionevent/1434734-u
    u(): cocoascript.union;
    setU(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexabortcommanddata
   */
  interface OBEXAbortCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexabortcommanddata/1431564-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexabortcommandresponsedata
   */
  interface OBEXAbortCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexabortcommandresponsedata/1429424-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexabortcommandresponsedata/1435059-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata
   */
  interface OBEXConnectCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1430346-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1432709-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1434580-maxpacketsize
    maxPacketSize(): cocoascript.OBEXMaxPacketLength;
    setMaxPacketSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommanddata/1431969-version
    version(): cocoascript.OBEXVersion;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata
   */
  interface OBEXConnectCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1430825-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1432793-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1433428-maxpacketsize
    maxPacketSize(): cocoascript.OBEXMaxPacketLength;
    setMaxPacketSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1430093-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexconnectcommandresponsedata/1434576-version
    version(): cocoascript.OBEXVersion;
    setVersion(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommanddata
   */
  interface OBEXDisconnectCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommanddata/1428659-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommandresponsedata
   */
  interface OBEXDisconnectCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommandresponsedata/1429105-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexdisconnectcommandresponsedata/1431866-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexerrordata
   */
  interface OBEXErrorData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexerrordata/1432850-datalength
    dataLength(): cocoascript.size_t;
    setDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexerrordata/1431911-error
    error(): cocoascript.OBEXError;
    setError(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexgetcommanddata
   */
  interface OBEXGetCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexgetcommanddata/1430389-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexgetcommandresponsedata
   */
  interface OBEXGetCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexgetcommandresponsedata/1430744-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexgetcommandresponsedata/1432858-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexputcommanddata
   */
  interface OBEXPutCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexputcommanddata/1434369-bodydatalefttosend
    bodyDataLeftToSend(): cocoascript.size_t;
    setBodyDataLeftToSend(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexputcommanddata/1432265-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexputcommandresponsedata
   */
  interface OBEXPutCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexputcommandresponsedata/1432880-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexputcommandresponsedata/1433582-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata
   */
  interface OBEXSetPathCommandData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata/1428316-constants
    constants(): cocoascript.OBEXConstants;
    setConstants(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata/1434931-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommanddata/1430018-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * Part of the OBEXSessionEvent structure.
   * doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata
   */
  interface OBEXSetPathCommandResponseData {
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1433879-constants
    constants(): cocoascript.OBEXConstants;
    setConstants(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1428892-flags
    flags(): cocoascript.OBEXFlags;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1432885-headerdatalength
    headerDataLength(): cocoascript.size_t;
    setHeaderDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obexsetpathcommandresponsedata/1432017-serverresponseopcode
    serverResponseOpCode(): cocoascript.OBEXOpCode;
    setServerResponseOpCode(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/obextransportevent
   */
  interface OBEXTransportEvent {
    // doc://com.apple.documentation/documentation/iobluetooth/obextransportevent/1434165-datalength
    dataLength(): cocoascript.size_t;
    setDataLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obextransportevent/1430387-status
    status(): cocoascript.OBEXError;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/obextransportevent/1432864-type
    type(): cocoascript.OBEXTransportEventType;
    setType(): void;
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
  type IOBluetoothDeviceSearchOptions = cocoascript.UInt32;
}
declare namespace cocoascript {
  /**
   * Bits to determine what Bluetooth devices to search for
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes
   */
  interface IOBluetoothDeviceSearchDeviceAttributes {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1432321-address
    address(): cocoascript.BluetoothDeviceAddress;
    setAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1430643-deviceclassmajor
    deviceClassMajor(): cocoascript.BluetoothDeviceClassMajor;
    setDeviceClassMajor(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1434594-deviceclassminor
    deviceClassMinor(): cocoascript.BluetoothDeviceClassMinor;
    setDeviceClassMinor(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1434920-name
    name(): cocoascript.BluetoothDeviceName;
    setName(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchdeviceattributes/1429176-serviceclassmajor
    serviceClassMajor(): cocoascript.BluetoothServiceClassMajor;
    setServiceClassMajor(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhhostchannelclassification
   */
  interface BluetoothAFHHostChannelClassification {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhhostchannelclassification/1433983-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhresults
   */
  interface BluetoothAFHResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhresults/1431166-afhmap
    afhMap(): number;
    setAfhMap(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhresults/1429840-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothafhresults/1430319-mode
    mode(): cocoascript.BluetoothAFHMode;
    setMode(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo
   */
  interface BluetoothEnhancedSynchronousConnectionInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642930-inputbandwidth
    inputBandwidth(): cocoascript.BluetoothHCIInputBandwidth;
    setInputBandwidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643028-inputcodeddatasize
    inputCodedDataSize(): cocoascript.BluetoothHCIInputCodedDataSize;
    setInputCodedDataSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642916-inputcodingformat
    inputCodingFormat(): cocoascript.BluetoothHCIInputCodingFormat;
    setInputCodingFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642983-inputdatapath
    inputDataPath(): cocoascript.BluetoothHCIInputDataPath;
    setInputDataPath(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643051-inputpcmdataformat
    inputPCMDataFormat(): cocoascript.BluetoothHCIInputPCMDataFormat;
    setInputPCMDataFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642982-inputpcmsampelpayloadmsbposition
    inputPCMSampelPayloadMSBPosition(): cocoascript.BluetoothHCIInputPCMSamplePayloadMSBPosition;
    setInputPCMSampelPayloadMSBPosition(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643054-inputtransportunitsize
    inputTransportUnitSize(): cocoascript.BluetoothHCIInputTransportUnitSize;
    setInputTransportUnitSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642959-maxlatency
    maxLatency(): cocoascript.BluetoothHCIMaxLatency;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642939-outputbandwidth
    outputBandwidth(): cocoascript.BluetoothHCIOutputBandwidth;
    setOutputBandwidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643017-outputcodeddatasize
    outputCodedDataSize(): cocoascript.BluetoothHCIOutputCodedDataSize;
    setOutputCodedDataSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643011-outputcodingformat
    outputCodingFormat(): cocoascript.BluetoothHCIOutputCodingFormat;
    setOutputCodingFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642938-outputdatapath
    outputDataPath(): cocoascript.BluetoothHCIOutputDataPath;
    setOutputDataPath(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642858-outputpcmdataformat
    outputPCMDataFormat(): cocoascript.BluetoothHCIOutputPCMDataFormat;
    setOutputPCMDataFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642842-outputpcmsampelpayloadmsbpositio
    outputPCMSampelPayloadMSBPosition(): cocoascript.BluetoothHCIOutputPCMSamplePayloadMSBPosition;
    setOutputPCMSampelPayloadMSBPosition(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642840-outputtransportunitsize
    outputTransportUnitSize(): cocoascript.BluetoothHCIOutputTransportUnitSize;
    setOutputTransportUnitSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643044-packettype
    packetType(): cocoascript.BluetoothPacketType;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642941-receivebandwidth
    receiveBandWidth(): cocoascript.BluetoothHCIReceiveBandwidth;
    setReceiveBandWidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643015-receivecodecframesize
    receiveCodecFrameSize(): cocoascript.BluetoothHCIReceiveCodecFrameSize;
    setReceiveCodecFrameSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643022-receivecodingformat
    receiveCodingFormat(): cocoascript.BluetoothHCIReceiveCodingFormat;
    setReceiveCodingFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643041-retransmissioneffort
    retransmissionEffort(): cocoascript.BluetoothHCIRetransmissionEffort;
    setRetransmissionEffort(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643037-transmitbandwidth
    transmitBandWidth(): cocoascript.BluetoothHCITransmitBandwidth;
    setTransmitBandWidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642892-transmitcodecframesize
    transmitCodecFrameSize(): cocoascript.BluetoothHCITransmitCodecFrameSize;
    setTransmitCodecFrameSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1643075-transmitcodingformat
    transmitCodingFormat(): cocoascript.BluetoothHCITransmitCodingFormat;
    setTransmitCodingFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothenhancedsynchronousconnectioninfo/1642866-voicesetting
    voiceSetting(): cocoascript.BluetoothHCIVoiceSetting;
    setVoiceSetting(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetootheventfiltercondition
   */
  interface BluetoothEventFilterCondition {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetootheventfiltercondition/1430288-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams
   */
  interface BluetoothHCIAcceptSynchronousConnectionRequestParams {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1431571-contentformat
    contentFormat(): number;
    setContentFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1432730-maxlatency
    maxLatency(): number;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1434626-packettype
    packetType(): number;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciacceptsynchronousconnectionrequestparams/1432275-retransmissioneffort
    retransmissionEffort(): number;
    setRetransmissionEffort(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeoutinfo
   */
  interface BluetoothHCIAutomaticFlushTimeoutInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeoutinfo/1430656-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciautomaticflushtimeoutinfo/1432173-timeout
    timeout(): cocoascript.BluetoothHCIAutomaticFlushTimeout;
    setTimeout(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize
   */
  interface BluetoothHCIBufferSize {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1428684-acldatapacketlength
    ACLDataPacketLength(): number;
    setACLDataPacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1434991-scodatapacketlength
    SCODataPacketLength(): number;
    setSCODataPacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1430939-totalnumacldatapackets
    totalNumACLDataPackets(): number;
    setTotalNumACLDataPackets(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1428628-totalnumscodatapackets
    totalNumSCODataPackets(): number;
    setTotalNumSCODataPackets(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodes
   */
  interface BluetoothHCICurrentInquiryAccessCodes {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodes/1428670-codes
    codes(): cocoascript.BluetoothHCIInquiryAccessCode;
    setCodes(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodes/1429972-count
    count(): cocoascript.BluetoothHCIInquiryAccessCodeCount;
    setCount(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodesforwrite
   */
  interface BluetoothHCICurrentInquiryAccessCodesForWrite {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodesforwrite/1429848-codes
    codes(): number;
    setCodes(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcicurrentinquiryaccesscodesforwrite/1433549-count
    count(): cocoascript.BluetoothHCIInquiryAccessCodeCount;
    setCount(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams
   */
  interface BluetoothHCIEnhancedAcceptSynchronousConnectionRequestParams {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642974-inputcodeddatasize
    inputCodedDataSize(): number;
    setInputCodedDataSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642826-inputdatapath
    inputDataPath(): number;
    setInputDataPath(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642886-inputpcmdataformat
    inputPCMDataFormat(): number;
    setInputPCMDataFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1643018-inputpcmsamplepayloadmsbposition
    inputPCMSamplePayloadMSBPosition(): number;
    setInputPCMSamplePayloadMSBPosition(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1643033-inputtransportunitsize
    inputTransportUnitSize(): number;
    setInputTransportUnitSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642998-maxlatency
    maxLatency(): number;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642999-outputcodeddatasize
    outputCodedDataSize(): number;
    setOutputCodedDataSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1643050-outputdatapath
    outputDataPath(): number;
    setOutputDataPath(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642894-outputpcmdataformat
    outputPCMDataFormat(): number;
    setOutputPCMDataFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642895-outputpcmsamplepayloadmsbpositio
    outputPCMSamplePayloadMSBPosition(): number;
    setOutputPCMSamplePayloadMSBPosition(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642846-outputtransportunitsize
    outputTransportUnitSize(): number;
    setOutputTransportUnitSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642993-packettype
    packetType(): number;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642847-receivecodecframesize
    receiveCodecFrameSize(): number;
    setReceiveCodecFrameSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642921-retransmissioneffort
    retransmissionEffort(): number;
    setRetransmissionEffort(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedacceptsynchronousconnectionrequestparams/1642839-transmitcodecframesize
    transmitCodecFrameSize(): number;
    setTransmitCodecFrameSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams
   */
  interface BluetoothHCIEnhancedSetupSynchronousConnectionParams {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642889-inputcodeddatasize
    inputCodedDataSize(): number;
    setInputCodedDataSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642994-inputdatapath
    inputDataPath(): number;
    setInputDataPath(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1643027-inputpcmdataformat
    inputPCMDataFormat(): number;
    setInputPCMDataFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642899-inputpcmsamplepayloadmsbposition
    inputPCMSamplePayloadMSBPosition(): number;
    setInputPCMSamplePayloadMSBPosition(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642943-inputtransportunitsize
    inputTransportUnitSize(): number;
    setInputTransportUnitSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1643001-maxlatency
    maxLatency(): number;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1643059-outputcodeddatasize
    outputCodedDataSize(): number;
    setOutputCodedDataSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642987-outputdatapath
    outputDataPath(): number;
    setOutputDataPath(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642874-outputpcmdataformat
    outputPCMDataFormat(): number;
    setOutputPCMDataFormat(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642956-outputpcmsamplepayloadmsbpositio
    outputPCMSamplePayloadMSBPosition(): number;
    setOutputPCMSamplePayloadMSBPosition(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642913-outputtransportunitsize
    outputTransportUnitSize(): number;
    setOutputTransportUnitSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642844-packettype
    packetType(): number;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642933-receivecodecframesize
    receiveCodecFrameSize(): number;
    setReceiveCodecFrameSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642977-retransmissioneffort
    retransmissionEffort(): number;
    setRetransmissionEffort(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcienhancedsetupsynchronousconnectionparams/1642861-transmitcodecframesize
    transmitCodecFrameSize(): number;
    setTransmitCodecFrameSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventauthenticationcompleteresults
   */
  interface BluetoothHCIEventAuthenticationCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventauthenticationcompleteresults/1430368-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventchangeconnectionlinkkeycompleteresults
   */
  interface BluetoothHCIEventChangeConnectionLinkKeyCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventchangeconnectionlinkkeycompleteresults/1429590-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults
   */
  interface BluetoothHCIEventConnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1433937-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1434888-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1430195-encryptionmode
    encryptionMode(): cocoascript.BluetoothHCIEncryptionMode;
    setEncryptionMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectioncompleteresults/1430458-linktype
    linkType(): cocoascript.BluetoothLinkType;
    setLinkType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionpackettyperesults
   */
  interface BluetoothHCIEventConnectionPacketTypeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionpackettyperesults/1434009-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionpackettyperesults/1430821-packettype
    packetType(): cocoascript.BluetoothPacketType;
    setPacketType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults
   */
  interface BluetoothHCIEventConnectionRequestResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults/1432544-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults/1433764-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventconnectionrequestresults/1429838-linktype
    linkType(): cocoascript.BluetoothLinkType;
    setLinkType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdatabufferoverflowresults
   */
  interface BluetoothHCIEventDataBufferOverflowResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdatabufferoverflowresults/1430136-linktype
    linkType(): cocoascript.BluetoothLinkType;
    setLinkType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdisconnectioncompleteresults
   */
  interface BluetoothHCIEventDisconnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdisconnectioncompleteresults/1431097-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventdisconnectioncompleteresults/1434350-reason
    reason(): cocoascript.BluetoothReasonCode;
    setReason(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventencryptionchangeresults
   */
  interface BluetoothHCIEventEncryptionChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventencryptionchangeresults/1432114-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventencryptionchangeresults/1429716-enable
    enable(): cocoascript.BluetoothEncryptionEnable;
    setEnable(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventencryptionkeyrefreshcompleteresults
   */
  interface BluetoothHCIEventEncryptionKeyRefreshCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventencryptionkeyrefreshcompleteresults/1430421-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata
   */
  interface BluetoothHCIEventFlowSpecificationData {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1434325-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1434918-flags
    flags(): number;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1434704-flowdirection
    flowDirection(): number;
    setFlowDirection(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflowspecificationdata/1430827-servicetype
    serviceType(): number;
    setServiceType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflushoccurredresults
   */
  interface BluetoothHCIEventFlushOccurredResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventflushoccurredresults/1428874-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventhardwareerrorresults
   */
  interface BluetoothHCIEventHardwareErrorResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventhardwareerrorresults/1428336-error
    error(): cocoascript.BluetoothHCIStatus;
    setError(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults
   */
  interface BluetoothHCIEventLEConnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1432313-conninterval
    connInterval(): number;
    setConnInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1429776-connlatency
    connLatency(): number;
    setConnLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1433941-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1433573-masterclockaccuracy
    masterClockAccuracy(): number;
    setMasterClockAccuracy(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1429580-peeraddress
    peerAddress(): cocoascript.BluetoothDeviceAddress;
    setPeerAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1428544-peeraddresstype
    peerAddressType(): number;
    setPeerAddressType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1433254-role
    role(): number;
    setRole(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectioncompleteresults/1431360-supervisiontimeout
    supervisionTimeout(): number;
    setSupervisionTimeout(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults
   */
  interface BluetoothHCIEventLEConnectionUpdateCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1434658-conninterval
    connInterval(): number;
    setConnInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1428807-connlatency
    connLatency(): number;
    setConnLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1432579-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleconnectionupdatecompleteresults/1433022-supervisiontimeout
    supervisionTimeout(): number;
    setSupervisionTimeout(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults
   */
  interface BluetoothHCIEventLELongTermKeyRequestResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults/1430541-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults/1433619-ediv
    ediv(): number;
    setEdiv(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlelongtermkeyrequestresults/1431460-randomnumber
    randomNumber(): number;
    setRandomNumber(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlemetaresults
   */
  interface BluetoothHCIEventLEMetaResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlemetaresults/1431554-data
    data(): number;
    setData(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlemetaresults/1434223-length
    length(): number;
    setLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlereadremoteusedfeaturescompleteresults
   */
  interface BluetoothHCIEventLEReadRemoteUsedFeaturesCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlereadremoteusedfeaturescompleteresults/2092564-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlereadremoteusedfeaturescompleteresults/2092588-usedfeatures
    usedFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setUsedFeatures(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults
   */
  interface BluetoothHCIEventLinkKeyNotificationResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults/1428482-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults/1430085-keytype
    keyType(): cocoascript.BluetoothKeyType;
    setKeyType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventlinkkeynotificationresults/1432038-linkkey
    linkKey(): cocoascript.BluetoothKey;
    setLinkKey(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmasterlinkkeycompleteresults
   */
  interface BluetoothHCIEventMasterLinkKeyCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmasterlinkkeycompleteresults/1428318-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmasterlinkkeycompleteresults/1430706-keyflag
    keyFlag(): cocoascript.BluetoothKeyFlag;
    setKeyFlag(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmaxslotschangeresults
   */
  interface BluetoothHCIEventMaxSlotsChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmaxslotschangeresults/1431448-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmaxslotschangeresults/1434536-maxslots
    maxSlots(): cocoascript.BluetoothMaxSlots;
    setMaxSlots(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults
   */
  interface BluetoothHCIEventModeChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults/1429686-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults/1432036-mode
    mode(): cocoascript.BluetoothHCIConnectionMode;
    setMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventmodechangeresults/1429182-modeinterval
    modeInterval(): cocoascript.BluetoothHCIModeInterval;
    setModeInterval(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanmodechangeresults
   */
  interface BluetoothHCIEventPageScanModeChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanmodechangeresults/1428708-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanmodechangeresults/1434333-pagescanmode
    pageScanMode(): cocoascript.BluetoothPageScanMode;
    setPageScanMode(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanrepetitionmodechangeresults
   */
  interface BluetoothHCIEventPageScanRepetitionModeChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanrepetitionmodechangeresults/1432910-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventpagescanrepetitionmodechangeresults/1434065-pagescanrepetitionmode
    pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
    setPageScanRepetitionMode(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqossetupcompleteresults
   */
  interface BluetoothHCIEventQoSSetupCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqossetupcompleteresults/1430120-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqossetupcompleteresults/1434571-setupparams
    setupParams(): cocoascript.BluetoothHCIQualityOfServiceSetupParams;
    setSetupParams(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqosviolationresults
   */
  interface BluetoothHCIEventQoSViolationResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventqosviolationresults/1431434-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadclockoffsetresults
   */
  interface BluetoothHCIEventReadClockOffsetResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadclockoffsetresults/1433792-clockoffset
    clockOffset(): cocoascript.BluetoothClockOffset;
    setClockOffset(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadclockoffsetresults/1431077-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadextendedfeaturesresults
   */
  interface BluetoothHCIEventReadExtendedFeaturesResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadextendedfeaturesresults/1431814-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadextendedfeaturesresults/1434284-supportedfeaturesinfo
    supportedFeaturesInfo(): cocoascript.BluetoothHCIExtendedFeaturesInfo;
    setSupportedFeaturesInfo(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults
   */
  interface BluetoothHCIEventReadRemoteExtendedFeaturesResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1429340-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1430054-error
    error(): cocoascript.BluetoothHCIStatus;
    setError(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1429792-lmpfeatures
    lmpFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setLmpFeatures(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1430312-maxpage
    maxPage(): cocoascript.BluetoothHCIPageNumber;
    setMaxPage(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteextendedfeaturesresults/1430493-page
    page(): cocoascript.BluetoothHCIPageNumber;
    setPage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults
   */
  interface BluetoothHCIEventReadRemoteSupportedFeaturesResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults/1434509-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults/1428561-error
    error(): cocoascript.BluetoothHCIStatus;
    setError(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremotesupportedfeaturesresults/1431152-lmpfeatures
    lmpFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setLmpFeatures(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults
   */
  interface BluetoothHCIEventReadRemoteVersionInfoResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1434522-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1431939-lmpsubversion
    lmpSubversion(): cocoascript.BluetoothLMPSubversion;
    setLmpSubversion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1430422-lmpversion
    lmpVersion(): cocoascript.BluetoothLMPVersion;
    setLmpVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadremoteversioninforesults/1431958-manufacturername
    manufacturerName(): cocoascript.BluetoothManufacturerName;
    setManufacturerName(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadsupportedfeaturesresults
   */
  interface BluetoothHCIEventReadSupportedFeaturesResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadsupportedfeaturesresults/1429347-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreadsupportedfeaturesresults/1432924-supportedfeatures
    supportedFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setSupportedFeatures(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventremotenamerequestresults
   */
  interface BluetoothHCIEventRemoteNameRequestResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventremotenamerequestresults/1428828-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventremotenamerequestresults/1433356-devicename
    deviceName(): cocoascript.BluetoothDeviceName;
    setDeviceName(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreturnlinkkeysresults
   */
  interface BluetoothHCIEventReturnLinkKeysResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventreturnlinkkeysresults/1435055-numlinkkeys
    numLinkKeys(): number;
    setNumLinkKeys(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults
   */
  interface BluetoothHCIEventRoleChangeResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults/1431379-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults/1432679-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventrolechangeresults/1428935-role
    role(): cocoascript.BluetoothRole;
    setRole(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsimplepairingcompleteresults
   */
  interface BluetoothHCIEventSimplePairingCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsimplepairingcompleteresults/1434183-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsniffsubratingresults
   */
  interface BluetoothHCIEventSniffSubratingResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsniffsubratingresults/1429306-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsniffsubratingresults/1434705-maxreceivelatency
    maxReceiveLatency(): number;
    setMaxReceiveLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsniffsubratingresults/1433337-maxtransmitlatency
    maxTransmitLatency(): number;
    setMaxTransmitLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsniffsubratingresults/1430336-minlocaltimeout
    minLocalTimeout(): number;
    setMinLocalTimeout(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsniffsubratingresults/1430797-minremotetimeout
    minRemoteTimeout(): number;
    setMinRemoteTimeout(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults
   */
  interface BluetoothHCIEventSynchronousConnectionChangedResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434374-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434668-receivepacketlength
    receivePacketLength(): number;
    setReceivePacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434932-retransmissionwindow
    retransmissionWindow(): number;
    setRetransmissionWindow(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1429473-transmissioninterval
    transmissionInterval(): number;
    setTransmissionInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectionchangedresults/1434262-transmitpacketlength
    transmitPacketLength(): number;
    setTransmitPacketLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults
   */
  interface BluetoothHCIEventSynchronousConnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1430102-airmode
    airMode(): cocoascript.BluetoothAirMode;
    setAirMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1429513-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1431333-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1430652-linktype
    linkType(): cocoascript.BluetoothLinkType;
    setLinkType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1428300-receivepacketlength
    receivePacketLength(): number;
    setReceivePacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1431581-retransmissionwindow
    retransmissionWindow(): number;
    setRetransmissionWindow(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1433034-transmissioninterval
    transmissionInterval(): number;
    setTransmissionInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventsynchronousconnectioncompleteresults/1433269-transmitpacketlength
    transmitPacketLength(): number;
    setTransmitPacketLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventvendorspecificresults
   */
  interface BluetoothHCIEventVendorSpecificResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventvendorspecificresults/1430686-data
    data(): number;
    setData(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventvendorspecificresults/1433961-length
    length(): number;
    setLength(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo
   */
  interface BluetoothHCIExtendedFeaturesInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo/1429766-data
    data(): number;
    setData(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo/1434169-maxpage
    maxPage(): cocoascript.BluetoothHCIPageNumber;
    setMaxPage(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedfeaturesinfo/1429790-page
    page(): cocoascript.BluetoothHCIPageNumber;
    setPage(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresponse
   */
  interface BluetoothHCIExtendedInquiryResponse {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresponse/1431002-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult
   */
  interface BluetoothHCIExtendedInquiryResult {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1431045-rssivalue
    RSSIValue(): cocoascript.BluetoothHCIRSSIValue;
    setRSSIValue(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1430354-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1432232-clockoffset
    clockOffset(): cocoascript.BluetoothClockOffset;
    setClockOffset(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1432527-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1432761-extendedinquiryresponse
    extendedInquiryResponse(): cocoascript.BluetoothHCIExtendedInquiryResponse;
    setExtendedInquiryResponse(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1434761-numberofreponses
    numberOfReponses(): number;
    setNumberOfReponses(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1429705-pagescanrepetitionmode
    pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
    setPageScanRepetitionMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciextendedinquiryresult/1430917-reserved
    reserved(): number;
    setReserved(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactinfo
   */
  interface BluetoothHCIFailedContactInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactinfo/1430053-count
    count(): cocoascript.BluetoothHCIFailedContactCount;
    setCount(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcifailedcontactinfo/1433578-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryaccesscode
   */
  interface BluetoothHCIInquiryAccessCode {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryaccesscode/1430859-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult
   */
  interface BluetoothHCIInquiryResult {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1433781-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1429819-clockoffset
    clockOffset(): cocoascript.BluetoothClockOffset;
    setClockOffset(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1428792-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1432705-pagescanmode
    pageScanMode(): cocoascript.BluetoothHCIPageScanMode;
    setPageScanMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1433231-pagescanperiodmode
    pageScanPeriodMode(): cocoascript.BluetoothHCIPageScanPeriodMode;
    setPageScanPeriodMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresult/1432291-pagescanrepetitionmode
    pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
    setPageScanRepetitionMode(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresults
   */
  interface BluetoothHCIInquiryResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresults/1433637-count
    count(): cocoascript.IOItemCount;
    setCount(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquiryresults/1428864-results
    results(): cocoascript.BluetoothHCIInquiryResult;
    setResults(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult
   */
  interface BluetoothHCIInquiryWithRSSIResult {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1428639-rssivalue
    RSSIValue(): cocoascript.BluetoothHCIRSSIValue;
    setRSSIValue(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1433847-classofdevice
    classOfDevice(): cocoascript.BluetoothClassOfDevice;
    setClassOfDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1433335-clockoffset
    clockOffset(): cocoascript.BluetoothClockOffset;
    setClockOffset(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1431687-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1432813-pagescanrepetitionmode
    pageScanRepetitionMode(): cocoascript.BluetoothPageScanRepetitionMode;
    setPageScanRepetitionMode(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresult/1434628-reserved
    reserved(): number;
    setReserved(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresults
   */
  interface BluetoothHCIInquiryWithRSSIResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresults/1433911-count
    count(): cocoascript.IOItemCount;
    setCount(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciinquirywithrssiresults/1429856-results
    results(): cocoascript.BluetoothHCIInquiryWithRSSIResult;
    setResults(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilebuffersize
   */
  interface BluetoothHCILEBufferSize {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilebuffersize/1432393-acldatapacketlength
    ACLDataPacketLength(): number;
    setACLDataPacketLength(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilebuffersize/1431244-totalnumacldatapackets
    totalNumACLDataPackets(): number;
    setTotalNumACLDataPackets(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettingsinfo
   */
  interface BluetoothHCILinkPolicySettingsInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettingsinfo/1433945-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinkpolicysettingsinfo/1431770-settings
    settings(): cocoascript.BluetoothHCILinkPolicySettings;
    setSettings(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinksupervisiontimeout
   */
  interface BluetoothHCILinkSupervisionTimeout {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinksupervisiontimeout/1432976-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilinksupervisiontimeout/1434630-timeout
    timeout(): number;
    setTimeout(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciqualityofservicesetupparams
   */
  interface BluetoothHCIQualityOfServiceSetupParams {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciqualityofservicesetupparams/1434876-flags
    flags(): number;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciqualityofservicesetupparams/1431162-servicetype
    serviceType(): number;
    setServiceType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadextendedinquiryresponseresults
   */
  interface BluetoothHCIReadExtendedInquiryResponseResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadextendedinquiryresponseresults/1433177-extendedinquiryresponse
    extendedInquiryResponse(): cocoascript.BluetoothHCIExtendedInquiryResponse;
    setExtendedInquiryResponse(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadextendedinquiryresponseresults/1434813-outfecrequired
    outFECRequired(): cocoascript.BluetoothHCIFECRequired;
    setOutFECRequired(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlmphandleresults
   */
  interface BluetoothHCIReadLMPHandleResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlmphandleresults/1430070-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlmphandleresults/1429898-lmp_handle
    lmp_handle(): cocoascript.BluetoothLMPHandle;
    setLmp_handle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlocaloobdataresults
   */
  interface BluetoothHCIReadLocalOOBDataResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlocaloobdataresults/1432158-hash
    hash(): cocoascript.BluetoothHCISimplePairingOOBData;
    setHash(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlocaloobdataresults/1432797-randomizer
    randomizer(): cocoascript.BluetoothHCISimplePairingOOBData;
    setRandomizer(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestcallbackinfo
   */
  interface BluetoothHCIRequestCallbackInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestcallbackinfo/1428998-asyncidrefcon
    asyncIDRefCon(): cocoascript.mach_vm_address_t;
    setAsyncIDRefCon(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestcallbackinfo/1434363-internalrefcon
    internalRefCon(): cocoascript.mach_vm_address_t;
    setInternalRefCon(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestcallbackinfo/1435099-reserved
    reserved(): cocoascript.mach_vm_address_t;
    setReserved(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestcallbackinfo/1429968-usercallback
    userCallback(): cocoascript.mach_vm_address_t;
    setUserCallback(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcirequestcallbackinfo/1429250-userrefcon
    userRefCon(): cocoascript.mach_vm_address_t;
    setUserRefCon(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciroleinfo
   */
  interface BluetoothHCIRoleInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciroleinfo/1434540-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciroleinfo/1435109-role
    role(): number;
    setRole(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciscanactivity
   */
  interface BluetoothHCIScanActivity {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciscanactivity/1429714-scaninterval
    scanInterval(): number;
    setScanInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciscanactivity/1434910-scanwindow
    scanWindow(): number;
    setScanWindow(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams
   */
  interface BluetoothHCISetupSynchronousConnectionParams {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1433424-maxlatency
    maxLatency(): number;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1430801-packettype
    packetType(): number;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1430537-retransmissioneffort
    retransmissionEffort(): number;
    setRetransmissionEffort(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisetupsynchronousconnectionparams/1429974-voicesetting
    voiceSetting(): number;
    setVoiceSetting(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisimplepairingoobdata
   */
  interface BluetoothHCISimplePairingOOBData {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisimplepairingoobdata/1429540-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcistoredlinkkeysinfo
   */
  interface BluetoothHCIStoredLinkKeysInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcistoredlinkkeysinfo/1434837-maxnumlinkkeysallowedindevice
    maxNumLinkKeysAllowedInDevice(): number;
    setMaxNumLinkKeysAllowedInDevice(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcistoredlinkkeysinfo/1430883-numlinkkeysread
    numLinkKeysRead(): number;
    setNumLinkKeysRead(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisupportedcommands
   */
  interface BluetoothHCISupportedCommands {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisupportedcommands/1433692-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisupportedfeatures
   */
  interface BluetoothHCISupportedFeatures {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcisupportedfeatures/1428630-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitpowerlevelinfo
   */
  interface BluetoothHCITransmitPowerLevelInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitpowerlevelinfo/1429829-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcitransmitpowerlevelinfo/1430565-level
    level(): cocoascript.BluetoothHCITransmitPowerLevel;
    setLevel(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo
   */
  interface BluetoothHCIVersionInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1428632-hcirevision
    hciRevision(): number;
    setHciRevision(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1434821-hciversion
    hciVersion(): number;
    setHciVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1432347-lmpsubversion
    lmpSubVersion(): cocoascript.BluetoothLMPSubversion;
    setLmpSubVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1429564-lmpversion
    lmpVersion(): cocoascript.BluetoothLMPVersion;
    setLmpVersion(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciversioninfo/1432594-manufacturername
    manufacturerName(): cocoascript.BluetoothManufacturerName;
    setManufacturerName(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse
   */
  interface BluetoothIOCapabilityResponse {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1429118-oobdatapresence
    OOBDataPresence(): cocoascript.BluetoothOOBDataPresence;
    setOOBDataPresence(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1432216-authenticationrequirements
    authenticationRequirements(): cocoascript.BluetoothAuthenticationRequirements;
    setAuthenticationRequirements(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1434933-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothiocapabilityresponse/1432066-iocapability
    ioCapability(): cocoascript.BluetoothIOCapability;
    setIoCapability(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothirk
   */
  interface BluetoothIRK {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothirk/1430275-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothkey
   */
  interface BluetoothKey {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkey/1434972-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotification
   */
  interface BluetoothKeypressNotification {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotification/1431148-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothkeypressnotification/1429208-notificationtype
    notificationType(): cocoascript.BluetoothKeypressNotificationType;
    setNotificationType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capqualityofserviceoptions
   */
  interface BluetoothL2CAPQualityOfServiceOptions {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capqualityofserviceoptions/1432477-flags
    flags(): number;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capqualityofserviceoptions/1434345-servicetype
    serviceType(): number;
    setServiceType(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions
   */
  interface BluetoothL2CAPRetransmissionAndFlowControlOptions {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1434784-flags
    flags(): number;
    setFlags(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1433588-maxpdupayloadsize
    maxPDUPayloadSize(): number;
    setMaxPDUPayloadSize(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1430318-maxtransmit
    maxTransmit(): number;
    setMaxTransmit(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1431055-monitortimeout
    monitorTimeout(): number;
    setMonitorTimeout(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1430787-retransmissiontimeout
    retransmissionTimeout(): number;
    setRetransmissionTimeout(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothl2capretransmissionandflowcontroloptions/1433714-txwindowsize
    txWindowSize(): number;
    setTxWindowSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothpincode
   */
  interface BluetoothPINCode {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothpincode/1430988-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothreadclockinfo
   */
  interface BluetoothReadClockInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothreadclockinfo/1434498-accuracy
    accuracy(): number;
    setAccuracy(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothreadclockinfo/1429784-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothremotehostsupportedfeaturesnotification
   */
  interface BluetoothRemoteHostSupportedFeaturesNotification {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothremotehostsupportedfeaturesnotification/1429132-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothremotehostsupportedfeaturesnotification/1429986-hostsupportedfeatures
    hostSupportedFeatures(): cocoascript.BluetoothHCISupportedFeatures;
    setHostSupportedFeatures(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothseteventmask
   */
  interface BluetoothSetEventMask {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothseteventmask/1428880-data
    data(): number;
    setData(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo
   */
  interface BluetoothSynchronousConnectionInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1429892-maxlatency
    maxLatency(): cocoascript.BluetoothHCIMaxLatency;
    setMaxLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1432573-packettype
    packetType(): cocoascript.BluetoothPacketType;
    setPacketType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1432830-receivebandwidth
    receiveBandWidth(): cocoascript.BluetoothHCIReceiveBandwidth;
    setReceiveBandWidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1432285-retransmissioneffort
    retransmissionEffort(): cocoascript.BluetoothHCIRetransmissionEffort;
    setRetransmissionEffort(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1430658-transmitbandwidth
    transmitBandWidth(): cocoascript.BluetoothHCITransmitBandwidth;
    setTransmitBandWidth(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothsynchronousconnectioninfo/1430372-voicesetting
    voiceSetting(): cocoascript.BluetoothHCIVoiceSetting;
    setVoiceSetting(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothtransportinfo
   */
  interface BluetoothTransportInfo {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserconfirmationrequest
   */
  interface BluetoothUserConfirmationRequest {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserconfirmationrequest/1434892-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserconfirmationrequest/1431266-numericvalue
    numericValue(): cocoascript.BluetoothNumericValue;
    setNumericValue(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserpasskeynotification
   */
  interface BluetoothUserPasskeyNotification {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserpasskeynotification/1433747-deviceaddress
    deviceAddress(): cocoascript.BluetoothDeviceAddress;
    setDeviceAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothuserpasskeynotification/1430704-passkey
    passkey(): cocoascript.BluetoothPasskey;
    setPasskey(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes
   */
  interface IOBluetoothDeviceSearchAttributes {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1429237-attributelist
    attributeList(): cocoascript.IOBluetoothDeviceSearchDeviceAttributes;
    setAttributeList(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1429248-deviceattributecount
    deviceAttributeCount(): cocoascript.IOItemCount;
    setDeviceAttributeCount(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1430829-maxresults
    maxResults(): cocoascript.IOItemCount;
    setMaxResults(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothdevicesearchattributes/1431408-options
    options(): cocoascript.IOBluetoothDeviceSearchOptions;
    setOptions(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldatablock
   */
  interface IOBluetoothL2CAPChannelDataBlock {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchanneldatablock/1428555-datasize
    dataSize(): cocoascript.size_t;
    setDataSize(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent
   */
  interface IOBluetoothL2CAPChannelEvent {
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent/1432146-eventtype
    eventType(): cocoascript.IOBluetoothL2CAPChannelEventType;
    setEventType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent/1433227-status
    status(): cocoascript.IOReturn;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/iobluetoothl2capchannelevent/1433594-u
    u(): cocoascript.union;
    setU(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysizeinfo
   */
  interface BluetoothHCIEncryptionKeySizeInfo {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysizeinfo/3197683-handle
    handle(): cocoascript.BluetoothConnectionHandle;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhciencryptionkeysizeinfo/3197684-keysize
    keySize(): cocoascript.BluetoothHCIEncryptionKeySize;
    setKeySize(): void;
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults
   */
  interface BluetoothHCIEventLEEnhancedConnectionCompleteResults {
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042767-conninterval
    connInterval(): number;
    setConnInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042768-connlatency
    connLatency(): number;
    setConnLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042769-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042770-localresolvableprivateaddress
    localResolvablePrivateAddress(): cocoascript.BluetoothDeviceAddress;
    setLocalResolvablePrivateAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042771-masterclockaccuracy
    masterClockAccuracy(): number;
    setMasterClockAccuracy(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042772-peeraddress
    peerAddress(): cocoascript.BluetoothDeviceAddress;
    setPeerAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042773-peeraddresstype
    peerAddressType(): number;
    setPeerAddressType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042774-peerresolvableprivateaddress
    peerResolvablePrivateAddress(): cocoascript.BluetoothDeviceAddress;
    setPeerResolvablePrivateAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042775-role
    role(): number;
    setRole(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042776-supervisiontimeout
    supervisionTimeout(): number;
    setSupervisionTimeout(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042827-conninterval
    connInterval(): number;
    setConnInterval(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042828-connlatency
    connLatency(): number;
    setConnLatency(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042829-connectionhandle
    connectionHandle(): cocoascript.BluetoothConnectionHandle;
    setConnectionHandle(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042830-localresolvableprivateaddress
    localResolvablePrivateAddress(): cocoascript.BluetoothDeviceAddress;
    setLocalResolvablePrivateAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042831-masterclockaccuracy
    masterClockAccuracy(): number;
    setMasterClockAccuracy(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042832-peeraddress
    peerAddress(): cocoascript.BluetoothDeviceAddress;
    setPeerAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042833-peeraddresstype
    peerAddressType(): number;
    setPeerAddressType(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042834-peerresolvableprivateaddress
    peerResolvablePrivateAddress(): cocoascript.BluetoothDeviceAddress;
    setPeerResolvablePrivateAddress(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042835-role
    role(): number;
    setRole(): void;
    // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcieventleenhancedconnectioncompleteresults/3042836-supervisiontimeout
    supervisionTimeout(): number;
    setSupervisionTimeout(): void;
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
  type BluetoothHCIEventMask = cocoascript.uint64_t;
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
  type BluetoothHCIInputCodingFormat = cocoascript.uint64_t;
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcilesupportedfeatures
   */
  interface BluetoothHCILESupportedFeatures {
  }
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcileusedfeatures
   */
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
  type BluetoothHCIOutputCodingFormat = cocoascript.uint64_t;
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
  type BluetoothHCIReceiveCodingFormat = cocoascript.uint64_t;
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
  type BluetoothHCITransmitCodingFormat = cocoascript.uint64_t;
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
  type IOBluetoothDeviceSearchTypes = cocoascript.UInt32;
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
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/obexsessionref
   */
  interface OBEXSessionRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/iobluetooth/obexversion
  type OBEXVersion = number;
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/iobluetooth/privobexsessiondataref
   */
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
