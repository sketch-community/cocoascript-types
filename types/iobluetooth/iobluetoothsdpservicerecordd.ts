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

