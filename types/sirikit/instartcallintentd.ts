declare namespace cocoascript {
/**
 * A request to start an audio or video call with one or more users.
 * doc://com.apple.documentation/documentation/sirikit/instartcallintent
 */
interface INStartCallIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3333283-initwithaudioroute
  initWithAudioRoute_destinationType_contacts_recordTypeForRedialing_callCapability(audioRoute: cocoascript.INCallAudioRoute, destinationType: cocoascript.INCallDestinationType, contacts: cocoascript.INPerson, recordTypeForRedialing: cocoascript.INCallRecordType, callCapability: cocoascript.INCallCapability):cocoascript.INStartCallIntent;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3165942-callcapability
  callCapability(): cocoascript.INCallCapability;
  setCallCapability(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3165943-contacts
  contacts(): cocoascript.INPerson;
  setContacts(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3165944-destinationtype
  destinationType(): cocoascript.INCallDestinationType;
  setDestinationType(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3197610-audioroute
  audioRoute(): cocoascript.INCallAudioRoute;
  setAudioRoute(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3333284-recordtypeforredialing
  recordTypeForRedialing(): cocoascript.INCallRecordType;
  setRecordTypeForRedialing(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3649677-initwithcallrecordfilter
  initWithCallRecordFilter_callRecordToCallBack_audioRoute_destinationType_contacts_callCapability(callRecordFilter: cocoascript.INCallRecordFilter, callRecordToCallBack: cocoascript.INCallRecord, audioRoute: cocoascript.INCallAudioRoute, destinationType: cocoascript.INCallDestinationType, contacts: cocoascript.INPerson, callCapability: cocoascript.INCallCapability):cocoascript.INStartCallIntent;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3649675-callrecordfilter
  callRecordFilter(): cocoascript.INCallRecordFilter;
  setCallRecordFilter(): void;
  // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3649676-callrecordtocallback
  callRecordToCallBack(): cocoascript.INCallRecord;
  setCallRecordToCallBack(): void;
  // 
  alloc():cocoascript.INStartCallIntent;
  // 
  init():cocoascript.INStartCallIntent;
}
}
declare const INStartCallIntent: cocoascript.INStartCallIntent;

