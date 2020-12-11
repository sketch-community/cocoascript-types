declare namespace cocoascript {
  /**
   * The information that describes a flight.
   * doc://com.apple.documentation/documentation/sirikit/inflight
   */
  interface INFlight extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191872-initwithairline
    initWithAirline_flightNumber_boardingTime_flightDuration_departureAirportGate_arrivalAirportGate(airline: cocoascript.INAirline, flightNumber: cocoascript.NSString, boardingTime: cocoascript.INDateComponentsRange, flightDuration: cocoascript.INDateComponentsRange, departureAirportGate: cocoascript.INAirportGate, arrivalAirportGate: cocoascript.INAirportGate):cocoascript.INFlight;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3113801-airline
    airline(): cocoascript.INAirline;
    setAirline(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3113805-flightnumber
    flightNumber(): cocoascript.NSString;
    setFlightNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3113803-boardingtime
    boardingTime(): cocoascript.INDateComponentsRange;
    setBoardingTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191871-flightduration
    flightDuration(): cocoascript.INDateComponentsRange;
    setFlightDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191870-departureairportgate
    departureAirportGate(): cocoascript.INAirportGate;
    setDepartureAirportGate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191869-arrivalairportgate
    arrivalAirportGate(): cocoascript.INAirportGate;
    setArrivalAirportGate(): void;
    //
    alloc():cocoascript.INFlight;
    //
    init():cocoascript.INFlight;
  }
}

declare const INFlight: cocoascript.INFlight;
