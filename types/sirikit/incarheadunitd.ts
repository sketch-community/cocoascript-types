declare namespace cocoascript {
/**
 * An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.
 * doc://com.apple.documentation/documentation/sirikit/incarheadunit
 */
interface INCarHeadUnit extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/incarheadunit/3674223-initwithbluetoothidentifier
  initWithBluetoothIdentifier_iAP2Identifier(bluetoothIdentifier: cocoascript.NSString, iAP2Identifier: cocoascript.NSString):cocoascript.INCarHeadUnit;
  // doc://com.apple.documentation/documentation/sirikit/incarheadunit/3674221-bluetoothidentifier
  bluetoothIdentifier(): cocoascript.NSString;
  setBluetoothIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/incarheadunit/3674222-iap2identifier
  iAP2Identifier(): cocoascript.NSString;
  setIAP2Identifier(): void;
  // 
  alloc():cocoascript.INCarHeadUnit;
  // 
  init():cocoascript.INCarHeadUnit;
}
}
declare const INCarHeadUnit: cocoascript.INCarHeadUnit;

