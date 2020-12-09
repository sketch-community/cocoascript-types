declare namespace cocoascript {
/**
 * A wrapper for the Apple event descriptor data type.
 * doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor
 */
interface NSAppleEventDescriptor extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416351-initlistdescriptor
  initListDescriptor():cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416093-initrecorddescriptor
  initRecordDescriptor():cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1415233-initwithaedescnocopy
  initWithAEDescNoCopy(aeDesc: cocoascript.AEDesc):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417137-initwithdescriptortype
  initWithDescriptorType_bytes_length(descriptorType: cocoascript.DescType, bytes: void, byteCount: cocoascript.NSUInteger):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417129-initwithdescriptortype
  initWithDescriptorType_data(descriptorType: cocoascript.DescType, data: cocoascript.NSData):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1414999-initwitheventclass
  initWithEventClass_eventID_targetDescriptor_returnID_transactionID(eventClass: cocoascript.AEEventClass, eventID: cocoascript.AEEventID, targetDescriptor: cocoascript.NSAppleEventDescriptor, returnID: cocoascript.AEReturnID, transactionID: cocoascript.AETransactionID):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413715-aedesc
  aeDesc(): cocoascript.AEDesc;
  setAeDesc(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1412412-booleanvalue
  booleanValue(): cocoascript.Boolean;
  setBooleanValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416286-coercetodescriptortype
  coerceToDescriptorType(descriptorType: cocoascript.DescType):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413486-data
  data(): cocoascript.NSData;
  setData(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408495-descriptortype
  descriptorType(): cocoascript.DescType;
  setDescriptorType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408039-enumcodevalue
  enumCodeValue(): cocoascript.OSType;
  setEnumCodeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1407270-int32value
  int32Value(): cocoascript.SInt32;
  setInt32Value(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416786-numberofitems
  numberOfItems(): cocoascript.NSInteger;
  setNumberOfItems(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1407584-stringvalue
  stringValue(): cocoascript.NSString;
  setStringValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409662-typecodevalue
  typeCodeValue(): cocoascript.OSType;
  setTypeCodeValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408027-descriptoratindex
  descriptorAtIndex(index: cocoascript.NSInteger):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409452-insertdescriptor
  insertDescriptor_atIndex(descriptor: cocoascript.NSAppleEventDescriptor, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413644-removedescriptoratindex
  removeDescriptorAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416413-descriptorforkeyword
  descriptorForKeyword(keyword: cocoascript.AEKeyword):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417535-keywordfordescriptoratindex
  keywordForDescriptorAtIndex(index: cocoascript.NSInteger):cocoascript.AEKeyword;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1415663-removedescriptorwithkeyword
  removeDescriptorWithKeyword(keyword: cocoascript.AEKeyword):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409080-setdescriptor
  setDescriptor_forKeyword(descriptor: cocoascript.NSAppleEventDescriptor, keyword: cocoascript.AEKeyword):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417067-attributedescriptorforkeyword
  attributeDescriptorForKeyword(keyword: cocoascript.AEKeyword):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1410955-eventclass
  eventClass(): cocoascript.AEEventClass;
  setEventClass(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1413356-eventid
  eventID(): cocoascript.AEEventID;
  setEventID(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1412763-paramdescriptorforkeyword
  paramDescriptorForKeyword(keyword: cocoascript.AEKeyword):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1412353-removeparamdescriptorwithkeyword
  removeParamDescriptorWithKeyword(keyword: cocoascript.AEKeyword):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1415786-returnid
  returnID(): cocoascript.AEReturnID;
  setReturnID(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1418101-setattributedescriptor
  setAttributeDescriptor_forKeyword(descriptor: cocoascript.NSAppleEventDescriptor, keyword: cocoascript.AEKeyword):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416261-setparamdescriptor
  setParamDescriptor_forKeyword(descriptor: cocoascript.NSAppleEventDescriptor, keyword: cocoascript.AEKeyword):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1408981-transactionid
  transactionID(): cocoascript.AETransactionID;
  setTransactionID(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1416330-datevalue
  dateValue(): cocoascript.NSDate;
  setDateValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1417847-doublevalue
  doubleValue(): number;
  setDoubleValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409448-fileurlvalue
  fileURLValue(): cocoascript.NSURL;
  setFileURLValue(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1410136-isrecorddescriptor
  isRecordDescriptor(): cocoascript.BOOL;
  setIsRecordDescriptor(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventdescriptor/1409337-sendeventwithoptions
  sendEventWithOptions_timeout_error(sendOptions: cocoascript.NSAppleEventSendOptions, timeoutInSeconds: cocoascript.NSTimeInterval, error: cocoascript._Nullable):cocoascript.NSAppleEventDescriptor;
  // 
  alloc():cocoascript.NSAppleEventDescriptor;
  // 
  init():cocoascript.NSAppleEventDescriptor;
}
}
declare const NSAppleEventDescriptor: cocoascript.NSAppleEventDescriptor;

