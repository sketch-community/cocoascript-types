declare namespace cocoascript {
  /**
   * A description object used to define which properties are fetched from Core Data.
   * doc://com.apple.documentation/documentation/coredata/nsfetchedpropertydescription
   */
  interface NSFetchedPropertyDescription extends NSPropertyDescription {
    // doc://com.apple.documentation/documentation/coredata/nsfetchedpropertydescription/1494679-fetchrequest
    fetchRequest(): cocoascript.NSFetchRequest;
    setFetchRequest(): void;
    //
    alloc():cocoascript.NSFetchedPropertyDescription;
    //
    init():cocoascript.NSFetchedPropertyDescription;
  }
}

declare const NSFetchedPropertyDescription: cocoascript.NSFetchedPropertyDescription;
