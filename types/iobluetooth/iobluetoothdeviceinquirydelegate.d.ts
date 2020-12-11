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
