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

