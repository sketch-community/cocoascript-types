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
