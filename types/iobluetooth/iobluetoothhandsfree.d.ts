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
