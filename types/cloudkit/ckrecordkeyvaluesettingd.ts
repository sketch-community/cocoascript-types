declare namespace cocoascript {
/**
 * A protocol for managing the key-value pairs of a CloudKit record.
 * doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting
 */
interface CKRecordKeyValueSetting extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976185-objectforkey
  objectForKey(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976186-objectforkeyedsubscript
  objectForKeyedSubscript(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976187-setobject
  setObject_forKey(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976188-setobject
  setObject_forKeyedSubscript(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976183-allkeys
  allKeys():cocoascript.CKRecordFieldKey;
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976184-changedkeys
  changedKeys():cocoascript.CKRecordFieldKey;
}
}

