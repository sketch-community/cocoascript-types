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
