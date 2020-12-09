declare namespace cocoascript {
/**
 * An iCloud-based container of key-value pairs you use to share data among instances of your app running on a user's connected devices.
 * doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore
 */
interface NSUbiquitousKeyValueStore extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1413949-defaultstore
  defaultStore(): cocoascript.NSUbiquitousKeyValueStore;
  setDefaultStore(): void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1412191-arrayforkey
  arrayForKey(aKey: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417350-boolforkey
  boolForKey(aKey: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417800-dataforkey
  dataForKey(aKey: cocoascript.NSString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1416241-dictionaryforkey
  dictionaryForKey(aKey: cocoascript.NSString):cocoascript.NSUbiquitousKeyValueStore;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1409319-doubleforkey
  doubleForKey(aKey: cocoascript.NSString):number;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1413240-longlongforkey
  longLongForKey(aKey: cocoascript.NSString):number;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1407436-objectforkey
  objectForKey(aKey: cocoascript.NSString):cocoascript.NSUbiquitousKeyValueStore;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1418249-stringforkey
  stringForKey(aKey: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417721-setarray
  setArray_forKey(anArray: cocoascript.NSArray, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1415054-setbool
  setBool_forKey(value: cocoascript.BOOL, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1416218-setdata
  setData_forKey(aData: cocoascript.NSData, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1417155-setdictionary
  setDictionary_forKey(aDictionary: cocoascript.NSUbiquitousKeyValueStore, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1412608-setdouble
  setDouble_forKey(value: number, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1407812-setlonglong
  setLongLong_forKey(value: number, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1416434-setobject
  setObject_forKey(anObject: cocoascript.NSUbiquitousKeyValueStore, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1414610-setstring
  setString_forKey(aString: cocoascript.NSString, aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1415989-synchronize
  synchronize():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1410916-removeobjectforkey
  removeObjectForKey(aKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsubiquitouskeyvaluestore/1411129-dictionaryrepresentation
  dictionaryRepresentation(): cocoascript.id;
  setDictionaryRepresentation(): void;
  // 
  alloc():cocoascript.NSUbiquitousKeyValueStore;
  // 
  init():cocoascript.NSUbiquitousKeyValueStore;
}
}
declare const NSUbiquitousKeyValueStore: cocoascript.NSUbiquitousKeyValueStore;

