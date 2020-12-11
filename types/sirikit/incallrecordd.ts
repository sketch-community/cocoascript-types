declare namespace cocoascript {
  /**
   * The details about a call handled by your app.
   * doc://com.apple.documentation/documentation/sirikit/incallrecord
   */
  interface INCallRecord extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/3113792-initwithidentifier
    initWithIdentifier_dateCreated_caller_callRecordType_callCapability_callDuration_unseen_numberOfCalls(identifier: cocoascript.NSString, dateCreated: cocoascript.NSDate, caller: cocoascript.INPerson, callRecordType: cocoascript.INCallRecordType, callCapability: cocoascript.INCallCapability, callDuration: cocoascript.NSNumber, unseen: cocoascript.NSNumber, numberOfCalls: cocoascript.NSNumber):cocoascript.INCallRecord;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2881733-initwithidentifier
    initWithIdentifier_dateCreated_caller_callRecordType_callCapability_callDuration_unseen(identifier: cocoascript.NSString, dateCreated: cocoascript.NSDate, caller: cocoascript.INPerson, callRecordType: cocoascript.INCallRecordType, callCapability: cocoascript.INCallCapability, callDuration: cocoascript.NSNumber, unseen: cocoascript.NSNumber):cocoascript.INCallRecord;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873326-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873327-caller
    caller(): cocoascript.INPerson;
    setCaller(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873325-callrecordtype
    callRecordType(): cocoascript.INCallRecordType;
    setCallRecordType(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2881732-callcapability
    callCapability(): cocoascript.INCallCapability;
    setCallCapability(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873324-datecreated
    dateCreated(): cocoascript.NSDate;
    setDateCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2879128-callduration
    callDuration(): cocoascript.NSNumber;
    setCallDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2879129-unseen
    unseen(): cocoascript.NSNumber;
    setUnseen(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/3113793-numberofcalls
    numberOfCalls(): cocoascript.NSNumber;
    setNumberOfCalls(): void;
    //
    alloc():cocoascript.INCallRecord;
    //
    init():cocoascript.INCallRecord;
  }
}

declare const INCallRecord: cocoascript.INCallRecord;
