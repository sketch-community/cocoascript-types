declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent
 */
interface NSPersistentCloudKitContainerEvent extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618801-enddate
  endDate(): cocoascript.NSDate;
  setEndDate(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618802-error
  error(): cocoascript.NSError;
  setError(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618803-identifier
  identifier(): cocoascript.NSUUID;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618804-startdate
  startDate(): cocoascript.NSDate;
  setStartDate(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618805-storeidentifier
  storeIdentifier(): cocoascript.NSString;
  setStoreIdentifier(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618806-succeeded
  succeeded(): cocoascript.BOOL;
  setSucceeded(): void;
  // doc://com.apple.documentation/documentation/coredata/nspersistentcloudkitcontainerevent/3618807-type
  type(): cocoascript.NSPersistentCloudKitContainerEventType;
  setType(): void;
  // 
  alloc():cocoascript.NSPersistentCloudKitContainerEvent;
  // 
  init():cocoascript.NSPersistentCloudKitContainerEvent;
}
}
declare const NSPersistentCloudKitContainerEvent: cocoascript.NSPersistentCloudKitContainerEvent;

