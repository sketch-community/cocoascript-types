declare namespace cocoascript {
/**
 * A request to list the calls matching the specified criteria.
 * doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent
 */
interface INSearchCallHistoryIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/2879133-initwithdatecreated
  initWithDateCreated_recipient_callCapabilities_callTypes_unseen(dateCreated: cocoascript.INDateComponentsRange, recipient: cocoascript.INPerson, callCapabilities: cocoascript.INCallCapabilityOptions, callTypes: cocoascript.INCallRecordTypeOptions, unseen: cocoascript.NSNumber):cocoascript.INSearchCallHistoryIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1902451-initwithcalltype
  initWithCallType_dateCreated_recipient_callCapabilities(callType: cocoascript.INCallRecordType, dateCreated: cocoascript.INDateComponentsRange, recipient: cocoascript.INPerson, callCapabilities: cocoascript.INCallCapabilityOptions):cocoascript.INSearchCallHistoryIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1638907-recipient
  recipient(): cocoascript.INPerson;
  setRecipient(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1638678-datecreated
  dateCreated(): cocoascript.INDateComponentsRange;
  setDateCreated(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/2866200-calltypes
  callTypes(): cocoascript.INCallRecordTypeOptions;
  setCallTypes(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1638944-calltype
  callType(): cocoascript.INCallRecordType;
  setCallType(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1639273-callcapabilities
  callCapabilities(): cocoascript.INCallCapabilityOptions;
  setCallCapabilities(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/2879132-unseen
  unseen(): cocoascript.NSNumber;
  setUnseen(): void;
  // 
  alloc():cocoascript.INSearchCallHistoryIntent;
  // 
  init():cocoascript.INSearchCallHistoryIntent;
}
}
declare const INSearchCallHistoryIntent: cocoascript.INSearchCallHistoryIntent;

