declare namespace cocoascript {
  /**
   * An action a user can perform that’s relevant to a reservation.
   * doc://com.apple.documentation/documentation/sirikit/inreservationaction
   */
  interface INReservationAction extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191879-initwithtype
    initWithType_validDuration_userActivity(type: cocoascript.INReservationActionType, validDuration: cocoascript.INDateComponentsRange, userActivity: cocoascript.NSUserActivity):cocoascript.INReservationAction;
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191880-type
    type(): cocoascript.INReservationActionType;
    setType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191881-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191882-validduration
    validDuration(): cocoascript.INDateComponentsRange;
    setValidDuration(): void;
    //
    alloc():cocoascript.INReservationAction;
    //
    init():cocoascript.INReservationAction;
  }
}

declare const INReservationAction: cocoascript.INReservationAction;
