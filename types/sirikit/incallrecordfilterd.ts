declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/incallrecordfilter
   */
  interface INCallRecordFilter extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649664-initwithparticipants
    initWithParticipants_callTypes_callCapability(participants: cocoascript.INPerson, callTypes: cocoascript.INCallRecordTypeOptions, callCapability: cocoascript.INCallCapability):cocoascript.INCallRecordFilter;
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649662-callcapability
    callCapability(): cocoascript.INCallCapability;
    setCallCapability(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649663-calltypes
    callTypes(): cocoascript.INCallRecordTypeOptions;
    setCallTypes(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649665-participants
    participants(): cocoascript.INPerson;
    setParticipants(): void;
    //
    alloc():cocoascript.INCallRecordFilter;
    //
    init():cocoascript.INCallRecordFilter;
  }
}

declare const INCallRecordFilter: cocoascript.INCallRecordFilter;
