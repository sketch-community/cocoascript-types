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
