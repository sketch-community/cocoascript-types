declare namespace cocoascript {
  /**
   * An object that coordinates the reading and writing of files and directories among file presenters.
   * doc://com.apple.documentation/documentation/foundation/nsfilecoordinator
   */
  interface NSFileCoordinator extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1416795-initwithfilepresenter
    initWithFilePresenter(filePresenterOrNil: cocoascript.NSFilePresenter):cocoascript.NSFileCoordinator;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1407685-filepresenters
    filePresenters(): cocoascript.NSFilePresenter;
    setFilePresenters(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1411868-purposeidentifier
    purposeIdentifier(): cocoascript.NSString;
    setPurposeIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1411533-coordinateaccesswithintents
    coordinateAccessWithIntents_queue_byAccessor(intents: cocoascript.NSFileAccessIntent, queue: cocoascript.NSOperationQueue, accessor: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1407416-coordinatereadingitematurl
    coordinateReadingItemAtURL_options_error_byAccessor(url: cocoascript.NSURL, options: cocoascript.NSFileCoordinatorReadingOptions, outError: cocoascript._Nullable, reader: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1413344-coordinatewritingitematurl
    coordinateWritingItemAtURL_options_error_byAccessor(url: cocoascript.NSURL, options: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript._Nullable, writer: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1413385-coordinatereadingitematurl
    coordinateReadingItemAtURL_options_writingItemAtURL_options_error_byAccessor(readingURL: cocoascript.NSURL, readingOptions: cocoascript.NSFileCoordinatorReadingOptions, writingURL: cocoascript.NSURL, writingOptions: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript._Nullable, readerWriter: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1408970-coordinatewritingitematurl
    coordinateWritingItemAtURL_options_writingItemAtURL_options_error_byAccessor(url1: cocoascript.NSURL, options1: cocoascript.NSFileCoordinatorWritingOptions, url2: cocoascript.NSURL, options2: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript._Nullable, writer: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1412420-prepareforreadingitemsaturls
    prepareForReadingItemsAtURLs_options_writingItemsAtURLs_options_error_byAccessor(readingURLs: cocoascript.NSURL, readingOptions: cocoascript.NSFileCoordinatorReadingOptions, writingURLs: cocoascript.NSURL, writingOptions: cocoascript.NSFileCoordinatorWritingOptions, outError: cocoascript._Nullable, batchAccessor: void):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1408668-itematurl
    itemAtURL_willMoveToURL(oldURL: cocoascript.NSURL, newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1410328-itematurl
    itemAtURL_didMoveToURL(oldURL: cocoascript.NSURL, newURL: cocoascript.NSURL):void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/1418457-cancel
    cancel():void;
    // doc://com.apple.documentation/documentation/foundation/nsfilecoordinator/2909000-itematurl
    itemAtURL_didChangeUbiquityAttributes(url: cocoascript.NSURL, attributes: cocoascript.NSURLResourceKey):void;
    //
    alloc():cocoascript.NSFileCoordinator;
    //
    init():cocoascript.NSFileCoordinator;
  }
}

declare const NSFileCoordinator: cocoascript.NSFileCoordinator;
