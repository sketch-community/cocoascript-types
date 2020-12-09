declare namespace cocoascript {
/**
 * A controller that you use to  manage the results of a Core Data fetch request and to display data to the user.
 * doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller
 */
interface NSFetchedResultsController extends NSObject {
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622282-initwithfetchrequest
  initWithFetchRequest_managedObjectContext_sectionNameKeyPath_cacheName(fetchRequest: cocoascript.NSFetchRequest, context: cocoascript.NSManagedObjectContext, sectionNameKeyPath: cocoascript.NSString, name: cocoascript.NSString):cocoascript.NSFetchedResultsController;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622305-performfetch
  performFetch(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622287-fetchrequest
  fetchRequest(): cocoascript.ResultType;
  setFetchRequest(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622304-managedobjectcontext
  managedObjectContext(): cocoascript.NSManagedObjectContext;
  setManagedObjectContext(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622285-sectionnamekeypath
  sectionNameKeyPath(): cocoascript.NSString;
  setSectionNameKeyPath(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622280-cachename
  cacheName(): cocoascript.NSString;
  setCacheName(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622291-delegate
  delegate(): cocoascript.NSFetchedResultsControllerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622278-fetchedobjects
  fetchedObjects(): cocoascript.ResultType;
  setFetchedObjects(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622281-objectatindexpath
  objectAtIndexPath(indexPath: cocoascript.NSIndexPath):void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622306-indexpathforobject
  indexPathForObject(object: cocoascript.):cocoascript.NSIndexPath;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622303-sections
  sections(): cocoascript.NSFetchedResultsSectionInfo;
  setSections(): void;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622284-sectionforsectionindextitle
  sectionForSectionIndexTitle_atIndex(title: cocoascript.NSString, sectionIndex: cocoascript.NSInteger):cocoascript.NSInteger;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622308-sectionindextitleforsectionname
  sectionIndexTitleForSectionName(sectionName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontroller/1622299-sectionindextitles
  sectionIndexTitles(): cocoascript.NSString;
  setSectionIndexTitles(): void;
  // 
  alloc():cocoascript.NSFetchedResultsController;
  // 
  init():cocoascript.NSFetchedResultsController;
}
}
declare const NSFetchedResultsController: cocoascript.NSFetchedResultsController;

