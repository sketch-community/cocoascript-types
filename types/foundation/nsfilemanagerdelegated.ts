declare namespace cocoascript {
/**
 * The interface a file manager's delegate uses to intervene during operations or if an error occurs.
 * doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate
 */
interface NSFileManagerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1411878-filemanager
  fileManager_shouldMoveItemAtURL_toURL(fileManager: cocoascript.NSFileManager, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1407734-filemanager
  fileManager_shouldMoveItemAtPath_toPath(fileManager: cocoascript.NSFileManager, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1411289-filemanager
  fileManager_shouldProceedAfterError_movingItemAtURL_toURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1412865-filemanager
  fileManager_shouldProceedAfterError_movingItemAtPath_toPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1417936-filemanager
  fileManager_shouldCopyItemAtURL_toURL(fileManager: cocoascript.NSFileManager, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1414922-filemanager
  fileManager_shouldCopyItemAtPath_toPath(fileManager: cocoascript.NSFileManager, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1410788-filemanager
  fileManager_shouldProceedAfterError_copyingItemAtURL_toURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1410189-filemanager
  fileManager_shouldProceedAfterError_copyingItemAtPath_toPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1411918-filemanager
  fileManager_shouldRemoveItemAtURL(fileManager: cocoascript.NSFileManager, URL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1412994-filemanager
  fileManager_shouldRemoveItemAtPath(fileManager: cocoascript.NSFileManager, path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1408660-filemanager
  fileManager_shouldProceedAfterError_removingItemAtURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, URL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1409791-filemanager
  fileManager_shouldProceedAfterError_removingItemAtPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1417589-filemanager
  fileManager_shouldLinkItemAtURL_toURL(fileManager: cocoascript.NSFileManager, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1414699-filemanager
  fileManager_shouldLinkItemAtPath_toPath(fileManager: cocoascript.NSFileManager, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1408003-filemanager
  fileManager_shouldProceedAfterError_linkingItemAtURL_toURL(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerdelegate/1415627-filemanager
  fileManager_shouldProceedAfterError_linkingItemAtPath_toPath(fileManager: cocoascript.NSFileManager, error: cocoascript.NSError, srcPath: cocoascript.NSString, dstPath: cocoascript.NSString):cocoascript.BOOL;
}
}

