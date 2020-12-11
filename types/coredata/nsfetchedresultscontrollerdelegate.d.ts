declare namespace cocoascript {
  /**
   * A delegate protocol that describes the methods that will be called by the associated fetched results controller when the fetch results have changed.
   * doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate
   */
  interface NSFetchedResultsControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/3235742-controller
    controller_didChangeContentWithSnapshot(controller: cocoascript.NSFetchedResultsController, snapshot: cocoascript.NSManagedObjectID):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/3235741-controller
    controller_didChangeContentWithDifference(controller: cocoascript.NSFetchedResultsController, diff: cocoascript.NSManagedObjectID):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622295-controllerwillchangecontent
    controllerWillChangeContent(controller: cocoascript.NSFetchedResultsController):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622296-controller
    controller_didChangeObject_atIndexPath_forChangeType_newIndexPath(controller: cocoascript.NSFetchedResultsController, anObject: cocoascript.NSFetchedResultsControllerDelegate, indexPath: cocoascript.NSIndexPath, type: cocoascript.NSFetchedResultsChangeType, newIndexPath: cocoascript.NSIndexPath):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622298-controller
    controller_didChangeSection_atIndex_forChangeType(controller: cocoascript.NSFetchedResultsController, sectionInfo: cocoascript.NSFetchedResultsSectionInfo, sectionIndex: cocoascript.NSUInteger, type: cocoascript.NSFetchedResultsChangeType):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622290-controllerdidchangecontent
    controllerDidChangeContent(controller: cocoascript.NSFetchedResultsController):void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchedresultscontrollerdelegate/1622286-controller
    controller_sectionIndexTitleForSectionName(controller: cocoascript.NSFetchedResultsController, sectionName: cocoascript.NSString):cocoascript.NSString;
  }
}
