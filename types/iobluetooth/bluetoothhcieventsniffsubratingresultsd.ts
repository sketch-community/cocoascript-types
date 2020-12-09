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

