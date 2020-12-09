declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize
 */
interface BluetoothHCIBufferSize {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1428684-acldatapacketlength
  ACLDataPacketLength(): number;
  setACLDataPacketLength(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1434991-scodatapacketlength
  SCODataPacketLength(): number;
  setSCODataPacketLength(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1430939-totalnumacldatapackets
  totalNumACLDataPackets(): number;
  setTotalNumACLDataPackets(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcibuffersize/1428628-totalnumscodatapackets
  totalNumSCODataPackets(): number;
  setTotalNumSCODataPackets(): void;
}
}

