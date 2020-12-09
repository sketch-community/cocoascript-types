declare namespace cocoascript {
/**
 * An object for representing and performing arithmetic on base-10 numbers.
 * doc://com.apple.documentation/documentation/foundation/nsdecimalnumber
 */
interface NSDecimalNumber extends NSNumber {
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415711-one
  one(): cocoascript.NSDecimalNumber;
  setOne(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413127-zero
  zero(): cocoascript.NSDecimalNumber;
  setZero(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413389-notanumber
  notANumber(): cocoascript.NSDecimalNumber;
  setNotANumber(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1412692-initwithdecimal
  initWithDecimal(dcm: cocoascript.NSDecimal):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1416003-initwithmantissa
  initWithMantissa_exponent_isNegative(mantissa: number, exponent: cocoascript.short, flag: cocoascript.BOOL):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409902-initwithstring
  initWithString(numberValue: cocoascript.NSString):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409201-initwithstring
  initWithString_locale(numberValue: cocoascript.NSString, locale: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413203-decimalnumberbyadding
  decimalNumberByAdding(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1416873-decimalnumberbysubtracting
  decimalNumberBySubtracting(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1414243-decimalnumberbymultiplyingby
  decimalNumberByMultiplyingBy(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1410741-decimalnumberbydividingby
  decimalNumberByDividingBy(decimalNumber: cocoascript.NSDecimalNumber):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413922-decimalnumberbyraisingtopower
  decimalNumberByRaisingToPower(power: cocoascript.NSUInteger):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1408449-decimalnumberbymultiplyingbypowe
  decimalNumberByMultiplyingByPowerOf10(power: cocoascript.short):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1407456-decimalnumberbyadding
  decimalNumberByAdding_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409890-decimalnumberbysubtracting
  decimalNumberBySubtracting_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1414874-decimalnumberbymultiplyingby
  decimalNumberByMultiplyingBy_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415619-decimalnumberbydividingby
  decimalNumberByDividingBy_withBehavior(decimalNumber: cocoascript.NSDecimalNumber, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1410484-decimalnumberbyraisingtopower
  decimalNumberByRaisingToPower_withBehavior(power: cocoascript.NSUInteger, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1414279-decimalnumberbymultiplyingbypowe
  decimalNumberByMultiplyingByPowerOf10_withBehavior(power: cocoascript.short, behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415436-decimalnumberbyroundingaccording
  decimalNumberByRoundingAccordingToBehavior(behavior: cocoascript.NSDecimalNumberBehaviors):cocoascript.NSDecimalNumber;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1418084-defaultbehavior
  defaultBehavior(): cocoascript.NSDecimalNumberBehaviors;
  setDefaultBehavior(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409664-decimalvalue
  decimalValue(): cocoascript.NSDecimal;
  setDecimalValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1407569-doublevalue
  doubleValue(): number;
  setDoubleValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1412789-descriptionwithlocale
  descriptionWithLocale(locale: cocoascript.NSDecimalNumber):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1409042-objctype
  objCType(): cocoascript.char;
  setObjCType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1407637-compare
  compare(decimalNumber: cocoascript.NSNumber):cocoascript.NSComparisonResult;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1415841-maximumdecimalnumber
  maximumDecimalNumber(): cocoascript.NSDecimalNumber;
  setMaximumDecimalNumber(): void;
  // doc://com.apple.documentation/documentation/foundation/nsdecimalnumber/1413371-minimumdecimalnumber
  minimumDecimalNumber(): cocoascript.NSDecimalNumber;
  setMinimumDecimalNumber(): void;
  // 
  alloc():cocoascript.NSDecimalNumber;
  // 
  init():cocoascript.NSDecimalNumber;
}
}
declare const NSDecimalNumber: cocoascript.NSDecimalNumber;

