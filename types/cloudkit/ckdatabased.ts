declare namespace cocoascript {
/**
 * A conduit for accessing and performing operations on the data of an app container.
 * doc://com.apple.documentation/documentation/cloudkit/ckdatabase
 */
interface CKDatabase extends NSObject {
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449127-performquery
  performQuery_inZoneWithID_completionHandler(query: cocoascript.CKQuery, zoneID: cocoascript.CKRecordZoneID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449116-addoperation
  addOperation(operation: cocoascript.CKDatabaseOperation):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449126-fetchrecordwithid
  fetchRecordWithID_completionHandler(recordID: cocoascript.CKRecordID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449114-saverecord
  saveRecord_completionHandler(record: cocoascript.CKRecord, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449122-deleterecordwithid
  deleteRecordWithID_completionHandler(recordID: cocoascript.CKRecordID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449112-fetchallrecordzoneswithcompletio
  fetchAllRecordZonesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449104-fetchrecordzonewithid
  fetchRecordZoneWithID_completionHandler(zoneID: cocoascript.CKRecordZoneID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449108-saverecordzone
  saveRecordZone_completionHandler(zone: cocoascript.CKRecordZone, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449118-deleterecordzonewithid
  deleteRecordZoneWithID_completionHandler(zoneID: cocoascript.CKRecordZoneID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449110-fetchallsubscriptionswithcomplet
  fetchAllSubscriptionsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449106-fetchsubscriptionwithid
  fetchSubscriptionWithID_completionHandler(subscriptionID: cocoascript.CKSubscriptionID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449102-savesubscription
  saveSubscription_completionHandler(subscription: cocoascript.CKSubscription, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449120-deletesubscriptionwithid
  deleteSubscriptionWithID_completionHandler(subscriptionID: cocoascript.CKSubscriptionID, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1640398-databasescope
  databaseScope(): cocoascript.CKDatabaseScope;
  setDatabaseScope(): void;
  // 
  alloc():cocoascript.CKDatabase;
  // 
  init():cocoascript.CKDatabase;
}
}
declare const CKDatabase: cocoascript.CKDatabase;

