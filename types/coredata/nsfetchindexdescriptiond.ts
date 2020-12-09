declare namespace cocoascript {
/**
 * The description of the index.
 * doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription
 */
interface NSFetchIndexDescription extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887053-initwithname
  initWithName_elements(name: cocoascript.NSString, elements: cocoascript.NSFetchIndexElementDescription):cocoascript.NSFetchIndexDescription;
  // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887054-elements
  elements(): cocoascript.NSFetchIndexElementDescription;
  setElements(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887055-entity
  entity(): cocoascript.NSEntityDescription;
  setEntity(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887056-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchindexdescription/2887058-partialindexpredicate
  partialIndexPredicate(): cocoascript.NSPredicate;
  setPartialIndexPredicate(): void;
  // 
  alloc():cocoascript.NSFetchIndexDescription;
  // 
  init():cocoascript.NSFetchIndexDescription;
}
}
declare const NSFetchIndexDescription: cocoascript.NSFetchIndexDescription;

