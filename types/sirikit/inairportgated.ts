declare namespace cocoascript {
/**
 * The information that describes an arrival or departure gate for a flight.
 * doc://com.apple.documentation/documentation/sirikit/inairportgate
 */
interface INAirportGate extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191867-initwithairport
  initWithAirport_terminal_gate(airport: cocoascript.INAirport, terminal: cocoascript.NSString, gate: cocoascript.NSString):cocoascript.INAirportGate;
  // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191865-airport
  airport(): cocoascript.INAirport;
  setAirport(): void;
  // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191868-terminal
  terminal(): cocoascript.NSString;
  setTerminal(): void;
  // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191866-gate
  gate(): cocoascript.NSString;
  setGate(): void;
  // 
  alloc():cocoascript.INAirportGate;
  // 
  init():cocoascript.INAirportGate;
}
}
declare const INAirportGate: cocoascript.INAirportGate;

