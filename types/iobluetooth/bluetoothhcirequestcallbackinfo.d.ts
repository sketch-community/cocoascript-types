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
