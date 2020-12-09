declare namespace cocoascript {
/**
 * A protocol that defines the interface for section objects vended by a fetched results controller.
 * doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo
 */
interface NSFetchedResultsSectionInfo {
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622289-numberofobjects
  numberOfObjects(): cocoascript.NSUInteger;
  setNumberOfObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622293-objects
  objects(): cocoascript.NSArray;
  setObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622302-name
  name(): cocoascript.NSString;
  setName(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultssectioninfo/1622300-indextitle
  indexTitle(): cocoascript.NSString;
  setIndexTitle(): void;
}
}

