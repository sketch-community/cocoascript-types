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

