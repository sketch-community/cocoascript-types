declare namespace cocoascript {
/**
 * A dynamic collection of objects associated with unique keys.
 * doc://com.apple.documentation/documentation/foundation/nsmutabledictionary
 */
interface NSMutableDictionary extends NSDictionary {
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1417898-initwithcapacity
  initWithCapacity(numItems: cocoascript.NSUInteger):cocoascript.NSMutableDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1410577-init
  init():cocoascript.NSMutableDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1411616-setobject
  setObject(anObject: cocoascript.NSMutableDictionary):cocoascript.NSCopying;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1574187-setobject
  setObject(obj: cocoascript.NSMutableDictionary):cocoascript.NSCopying;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1416335-setvalue
  setValue(value: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1411035-addentriesfromdictionary
  addEntriesFromDictionary(otherDictionary: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1409566-setdictionary
  setDictionary(otherDictionary: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1416518-removeobjectforkey
  removeObjectForKey(aKey: cocoascript.):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1408955-removeallobjects
  removeAllObjects():void;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1410430-removeobjectsforkeys
  removeObjectsForKeys(keyArray: cocoascript.NSArray):void;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1418255-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSMutableDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1407593-initwithcontentsoffile
  initWithContentsOfFile(path: cocoascript.NSString):cocoascript.NSMutableDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1410409-initwithcontentsofurl
  initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSMutableDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1431956-addapplicationparameterheader
  addApplicationParameterHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433422-addauthorizationchallengeheader
  addAuthorizationChallengeHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1432339-addauthorizationresponseheader
  addAuthorizationResponseHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430411-addbodyheader
  addBodyHeader_length_endOfBody(inHeaderData: void, inHeaderDataLength: number, isEndOfBody: cocoascript.BOOL):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428676-addbytesequenceheader
  addByteSequenceHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430403-addconnectionidheader
  addConnectionIDHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433317-addcountheader
  addCountHeader(inCount: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434905-adddescriptionheader
  addDescriptionHeader(inDescriptionString: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434484-addhttpheader
  addHTTPHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1429678-addimagedescriptorheader
  addImageDescriptorHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430878-addimagehandleheader
  addImageHandleHeader(type: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433652-addlengthheader
  addLengthHeader(length: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1430284-addnameheader
  addNameHeader(inNameString: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434696-addobjectclassheader
  addObjectClassHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428678-addtargetheader
  addTargetHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433527-addtime4byteheader
  addTime4ByteHeader(time4Byte: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428661-addtimeisoheader
  addTimeISOHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433211-addtypeheader
  addTypeHeader(type: cocoascript.NSString):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1434461-adduserdefinedheader
  addUserDefinedHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1433510-addwhoheader
  addWhoHeader_length(inHeaderData: void, inHeaderDataLength: number):cocoascript.OBEXError;
  // doc://com.apple.documentation/documentation/foundation/nsmutabledictionary/1428890-getheaderbytes
  getHeaderBytes():cocoascript.NSMutableData;
  // 
  alloc():cocoascript.NSMutableDictionary;
  // 
  init():cocoascript.NSMutableDictionary;
}
}
declare const NSMutableDictionary: cocoascript.NSMutableDictionary;

