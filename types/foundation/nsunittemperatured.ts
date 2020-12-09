declare namespace cocoascript {
/**
 * A unit of measure for temperature.
 * doc://com.apple.documentation/documentation/foundation/nsunittemperature
 */
interface NSUnitTemperature extends NSDimension {
  // doc://com.apple.documentation/documentation/foundation/nsunittemperature/1690766-kelvin
  kelvin(): cocoascript.NSUnitTemperature;
  setKelvin(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunittemperature/1690835-celsius
  celsius(): cocoascript.NSUnitTemperature;
  setCelsius(): void;
  // doc://com.apple.documentation/documentation/foundation/nsunittemperature/1690842-fahrenheit
  fahrenheit(): cocoascript.NSUnitTemperature;
  setFahrenheit(): void;
  // 
  alloc():cocoascript.NSUnitTemperature;
  // 
  init():cocoascript.NSUnitTemperature;
}
}
declare const NSUnitTemperature: cocoascript.NSUnitTemperature;

