declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlocaloobdataresults
 */
interface BluetoothHCIReadLocalOOBDataResults {
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlocaloobdataresults/1432158-hash
  hash(): cocoascript.BluetoothHCISimplePairingOOBData;
  setHash(): void;
  // doc://com.apple.documentation/documentation/iobluetooth/bluetoothhcireadlocaloobdataresults/1432797-randomizer
  randomizer(): cocoascript.BluetoothHCISimplePairingOOBData;
  setRandomizer(): void;
}
}

