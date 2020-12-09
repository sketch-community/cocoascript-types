declare namespace cocoascript {
/**
 * A convenient interface to the contents of the file system, and the primary means of interacting with it.
 * doc://com.apple.documentation/documentation/foundation/nsfilemanager
 */
interface NSFileManager extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409234-defaultmanager
  defaultManager(): cocoascript.NSFileManager;
  setDefaultManager(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1642807-homedirectoryforcurrentuser
  homeDirectoryForCurrentUser(): cocoascript.NSURL;
  setHomeDirectoryForCurrentUser(): void;
  // doc://com.apple.documentation/documentation/foundation/1413045-nshomedirectory
  NSHomeDirectory(): void;
  setNSHomeDirectory(): void;
  // doc://com.apple.documentation/documentation/foundation/1414297-nsusername
  NSUserName(): void;
  setNSUserName(): void;
  // doc://com.apple.documentation/documentation/foundation/1410265-nsfullusername
  NSFullUserName(): void;
  setNSFullUserName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1642853-homedirectoryforuser
  homeDirectoryForUser(userName: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/1413447-nshomedirectoryforuser
  NSHomeDirectoryForUser(): cocoascript.NSString;
  setNSHomeDirectoryForUser(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1642996-temporarydirectory
  temporaryDirectory(): cocoascript.NSURL;
  setTemporaryDirectory(): void;
  // doc://com.apple.documentation/documentation/foundation/1409211-nstemporarydirectory
  NSTemporaryDirectory(): void;
  setNSTemporaryDirectory(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407693-urlfordirectory
  URLForDirectory_inDomain_appropriateForURL_create_error(directory: cocoascript.NSSearchPathDirectory, domain: cocoascript.NSSearchPathDomainMask, url: cocoascript.NSURL, shouldCreate: cocoascript.BOOL, error: cocoascript._Nullable):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407726-urlsfordirectory
  URLsForDirectory_inDomains(directory: cocoascript.NSSearchPathDirectory, domainMask: cocoascript.NSSearchPathDomainMask):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/1414224-nssearchpathfordirectoriesindoma
  NSSearchPathForDirectoriesInDomains(): cocoascript.BOOL;
  setNSSearchPathForDirectoriesInDomains(): void;
  // doc://com.apple.documentation/documentation/foundation/1414132-nsopensteprootdirectory
  NSOpenStepRootDirectory(): void;
  setNSOpenStepRootDirectory(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412643-containerurlforsecurityapplicati
  containerURLForSecurityApplicationGroupIdentifier(groupIdentifier: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413768-contentsofdirectoryaturl
  contentsOfDirectoryAtURL_includingPropertiesForKeys_options_error(url: cocoascript.NSURL, keys: cocoascript.NSURLResourceKey, mask: cocoascript.NSDirectoryEnumerationOptions, error: cocoascript._Nullable):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414584-contentsofdirectoryatpath
  contentsOfDirectoryAtPath_error(path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409571-enumeratoraturl
  enumeratorAtURL_includingPropertiesForKeys_options_errorHandler(url: cocoascript.NSURL, keys: cocoascript.NSURLResourceKey, mask: cocoascript.NSDirectoryEnumerationOptions, handler: cocoascript.NSError):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408726-enumeratoratpath
  enumeratorAtPath(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409626-mountedvolumeurlsincludingresour
  mountedVolumeURLsIncludingResourceValuesForKeys_options(propertyKeys: cocoascript.NSURLResourceKey, options: cocoascript.NSVolumeEnumerationOptions):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1417353-subpathsofdirectoryatpath
  subpathsOfDirectoryAtPath_error(path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413742-subpathsatpath
  subpathsAtPath(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415371-createdirectoryaturl
  createDirectoryAtURL_withIntermediateDirectories_attributes_error(url: cocoascript.NSURL, createIntermediates: cocoascript.BOOL, attributes: cocoascript.NSFileManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407884-createdirectoryatpath
  createDirectoryAtPath_withIntermediateDirectories_attributes_error(path: cocoascript.NSString, createIntermediates: cocoascript.BOOL, attributes: cocoascript.NSFileManager, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410695-createfileatpath
  createFileAtPath_contents_attributes(path: cocoascript.NSString, data: cocoascript.NSData, attr: cocoascript.NSFileManager):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413590-removeitematurl
  removeItemAtURL_error(URL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408573-removeitematpath
  removeItemAtPath_error(path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414306-trashitematurl
  trashItemAtURL_resultingItemURL_error(url: cocoascript.NSURL, outResultingURL: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412432-replaceitematurl
  replaceItemAtURL_withItemAtURL_backupItemName_options_resultingItemURL_error(originalItemURL: cocoascript.NSURL, newItemURL: cocoascript.NSURL, backupItemName: cocoascript.NSString, options: cocoascript.NSFileManagerItemReplacementOptions, resultingURL: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412957-copyitematurl
  copyItemAtURL_toURL_error(srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407903-copyitematpath
  copyItemAtPath_toPath_error(srcPath: cocoascript.NSString, dstPath: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414750-moveitematurl
  moveItemAtURL_toURL_error(srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413529-moveitematpath
  moveItemAtPath_toPath_error(srcPath: cocoascript.NSString, dstPath: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408036-ubiquityidentitytoken
  ubiquityIdentityToken(): cocoascript.NSCoding;
  setUbiquityIdentityToken(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411653-urlforubiquitycontaineridentifie
  URLForUbiquityContainerIdentifier(containerIdentifier: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410218-isubiquitousitematurl
  isUbiquitousItemAtURL(url: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413989-setubiquitous
  setUbiquitous_itemAtURL_destinationURL_error(flag: cocoascript.BOOL, url: cocoascript.NSURL, destinationURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410377-startdownloadingubiquitousitemat
  startDownloadingUbiquitousItemAtURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409696-evictubiquitousitematurl
  evictUbiquitousItemAtURL_error(url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411577-urlforpublishingubiquitousitemat
  URLForPublishingUbiquitousItemAtURL_expirationDate_error(url: cocoascript.NSURL, outDate: cocoascript._Nullable, error: cocoascript._Nullable):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/2915262-getfileproviderservicesforitemat
  getFileProviderServicesForItemAtURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414652-createsymboliclinkaturl
  createSymbolicLinkAtURL_withDestinationURL_error(url: cocoascript.NSURL, destURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411007-createsymboliclinkatpath
  createSymbolicLinkAtPath_withDestinationPath_error(path: cocoascript.NSString, destPath: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414456-linkitematurl
  linkItemAtURL_toURL_error(srcURL: cocoascript.NSURL, dstURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411206-linkitematpath
  linkItemAtPath_toPath_error(srcPath: cocoascript.NSString, dstPath: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415161-destinationofsymboliclinkatpath
  destinationOfSymbolicLinkAtPath_error(path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415645-fileexistsatpath
  fileExistsAtPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410277-fileexistsatpath
  fileExistsAtPath_isDirectory(path: cocoascript.NSString, isDirectory: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1418292-isreadablefileatpath
  isReadableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1416680-iswritablefileatpath
  isWritableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1414159-isexecutablefileatpath
  isExecutableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1408087-isdeletablefileatpath
  isDeletableFileAtPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413929-componentstodisplayforpath
  componentsToDisplayForPath(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409751-displaynameatpath
  displayNameAtPath(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410452-attributesofitematpath
  attributesOfItemAtPath_error(path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSFileManager;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411896-attributesoffilesystemforpath
  attributesOfFileSystemForPath_error(path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.NSFileManager;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1413667-setattributes
  setAttributes_ofItemAtPath_error(attributes: cocoascript.NSFileManager, path: cocoascript.NSString, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407347-contentsatpath
  contentsAtPath(path: cocoascript.NSString):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415275-contentsequalatpath
  contentsEqualAtPath_andPath(path1: cocoascript.NSString, path2: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1407229-getrelationship
  getRelationship_ofDirectoryAtURL_toItemAtURL_error(outRelationship: cocoascript.NSURLRelationship, directoryURL: cocoascript.NSURL, otherURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1411439-getrelationship
  getRelationship_ofDirectory_inDomain_toItemAtURL_error(outRelationship: cocoascript.NSURLRelationship, directory: cocoascript.NSSearchPathDirectory, domainMask: cocoascript.NSSearchPathDomainMask, url: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1417057-filesystemrepresentationwithpath
  fileSystemRepresentationWithPath(path: cocoascript.NSString):cocoascript.char;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409640-stringwithfilesystemrepresentati
  stringWithFileSystemRepresentation_length(str: cocoascript.char, len: cocoascript.NSUInteger):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1415163-delegate
  delegate(): cocoascript.NSFileManagerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1412020-changecurrentdirectorypath
  changeCurrentDirectoryPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1410766-currentdirectorypath
  currentDirectoryPath(): cocoascript.NSString;
  setCurrentDirectoryPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1409917-unmountvolumeaturl
  unmountVolumeAtURL_options_completionHandler(url: cocoascript.NSURL, mask: cocoascript.NSFileManagerUnmountOptions, completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanagerunmountdissentingprocessidentifiererrorkey
  NSFileManagerUnmountDissentingProcessIdentifierErrorKey(): cocoascript.const;
  setNSFileManagerUnmountDissentingProcessIdentifierErrorKey(): void;
  // doc://com.apple.documentation/documentation/foundation/1412112-nsfiletypeforhfstypecode
  NSFileTypeForHFSTypeCode(): cocoascript.OSType;
  setNSFileTypeForHFSTypeCode(): void;
  // doc://com.apple.documentation/documentation/foundation/1415466-nshfstypecodefromfiletype
  NSHFSTypeCodeFromFileType(): cocoascript.NSString;
  setNSHFSTypeCodeFromFileType(): void;
  // doc://com.apple.documentation/documentation/foundation/1414326-nshfstypeoffile
  NSHFSTypeOfFile(): cocoascript.NSString;
  setNSHFSTypeOfFile(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557010-copypath
  copyPath_toPath_handler(src: cocoascript.NSString, dest: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1556999-movepath
  movePath_toPath_handler(src: cocoascript.NSString, dest: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1556998-removefileatpath
  removeFileAtPath_handler(path: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557001-changefileattributes
  changeFileAttributes_atPath(attributes: cocoascript.NSDictionary, path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557004-fileattributesatpath
  fileAttributesAtPath_traverseLink(path: cocoascript.NSString, yorn: cocoascript.BOOL):cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557008-filesystemattributesatpath
  fileSystemAttributesAtPath(path: cocoascript.NSString):cocoascript.NSDictionary;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557009-directorycontentsatpath
  directoryContentsAtPath(path: cocoascript.NSString):cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557007-createdirectoryatpath
  createDirectoryAtPath_attributes(path: cocoascript.NSString, attributes: cocoascript.NSDictionary):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557000-createsymboliclinkatpath
  createSymbolicLinkAtPath_pathContent(path: cocoascript.NSString, otherpath: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557006-pathcontentofsymboliclinkatpath
  pathContentOfSymbolicLinkAtPath(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilemanager/1557003-linkpath
  linkPath_toPath_handler(src: cocoascript.NSString, dest: cocoascript.NSString, handler: cocoascript.NSFileManager):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1557005-filemanager
  fileManager_shouldProceedAfterError(fm: cocoascript.NSFileManager, errorInfo: cocoascript.NSDictionary):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1557002-filemanager
  fileManager_willProcessPath(fm: cocoascript.NSFileManager, path: cocoascript.NSString):void;
  // 
  alloc():cocoascript.NSFileManager;
  // 
  init():cocoascript.NSFileManager;
}
}
declare const NSFileManager: cocoascript.NSFileManager;

