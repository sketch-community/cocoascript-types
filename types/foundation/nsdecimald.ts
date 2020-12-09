declare namespace cocoascript {
/**
 * A structure representing a base-10 number.
 * doc://com.apple.documentation/documentation/foundation/nsdecimal
 */
interface NSDecimal {
  // doc://com.apple.documentation/documentation/foundation/1407702-nsdecimalstring
  NSDecimalString(): cocoascript.id;
  setNSDecimalString(): void;
  // doc://com.apple.documentation/documentation/foundation/1408473-nsdecimaladd
  NSDecimalAdd(): cocoascript.NSRoundingMode;
  setNSDecimalAdd(): void;
  // doc://com.apple.documentation/documentation/foundation/1408675-nsdecimalsubtract
  NSDecimalSubtract(): cocoascript.NSRoundingMode;
  setNSDecimalSubtract(): void;
  // doc://com.apple.documentation/documentation/foundation/1409398-nsdecimaldivide
  NSDecimalDivide(): cocoascript.NSRoundingMode;
  setNSDecimalDivide(): void;
  // doc://com.apple.documentation/documentation/foundation/1408890-nsdecimalmultiply
  NSDecimalMultiply(): cocoascript.NSRoundingMode;
  setNSDecimalMultiply(): void;
  // doc://com.apple.documentation/documentation/foundation/1414888-nsdecimalmultiplybypowerof10
  NSDecimalMultiplyByPowerOf10(): cocoascript.NSRoundingMode;
  setNSDecimalMultiplyByPowerOf10(): void;
  // doc://com.apple.documentation/documentation/foundation/1412419-nsdecimalpower
  NSDecimalPower(): cocoascript.NSRoundingMode;
  setNSDecimalPower(): void;
  // doc://com.apple.documentation/documentation/foundation/1410221-nsdecimalnormalize
  NSDecimalNormalize(): cocoascript.NSRoundingMode;
  setNSDecimalNormalize(): void;
  // doc://com.apple.documentation/documentation/foundation/1411143-nsdecimalcompare
  NSDecimalCompare(): cocoascript.NSDecimal;
  setNSDecimalCompare(): void;
}
}

