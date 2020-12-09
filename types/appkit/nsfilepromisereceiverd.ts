declare namespace cocoascript {
/**
 * An object that receives a file promise from the pasteboard.
 * doc://com.apple.documentation/documentation/appkit/nsfilepromisereceiver
 */
interface NSFilePromiseReceiver extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsfilepromisereceiver/1642142-filenames
  fileNames(): cocoascript.NSString;
  setFileNames(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfilepromisereceiver/1642141-filetypes
  fileTypes(): cocoascript.NSString;
  setFileTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nsfilepromisereceiver/1642138-receivepromisedfilesatdestinatio
  receivePromisedFilesAtDestination_options_operationQueue_reader(destinationDir: cocoascript.NSURL, options: cocoascript.NSDictionary, operationQueue: cocoascript.NSOperationQueue, reader: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/appkit/nsfilepromisereceiver/1642140-readabledraggedtypes
  readableDraggedTypes(): cocoascript.NSString;
  setReadableDraggedTypes(): void;
  // 
  alloc():cocoascript.NSFilePromiseReceiver;
  // 
  init():cocoascript.NSFilePromiseReceiver;
}
}
declare const NSFilePromiseReceiver: cocoascript.NSFilePromiseReceiver;

