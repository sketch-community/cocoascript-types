declare namespace cocoascript {
/**
 * An object that represents the location of a resource, such as an item on a remote server or the path to a local file. 
 * doc://com.apple.documentation/documentation/foundation/nsurl
 */
interface NSURL extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413146-initwithstring
  initWithString(URLString: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417949-initwithstring
  initWithString_relativeToURL(URLString: cocoascript.NSString, baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417505-initfileurlwithpath
  initFileURLWithPath_isDirectory(path: cocoascript.NSString, isDir: cocoascript.BOOL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1415077-initfileurlwithpath
  initFileURLWithPath_relativeToURL(path: cocoascript.NSString, baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417932-initfileurlwithpath
  initFileURLWithPath_isDirectory_relativeToURL(path: cocoascript.NSString, isDir: cocoascript.BOOL, baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410301-initfileurlwithpath
  initFileURLWithPath(path: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413475-initbyresolvingbookmarkdata
  initByResolvingBookmarkData_options_relativeToURL_bookmarkDataIsStale_error(bookmarkData: cocoascript.NSData, options: cocoascript.NSURLBookmarkResolutionOptions, relativeURL: cocoascript.NSURL, isStale: cocoascript.BOOL, error: cocoascript._Nullable):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1415117-getfilesystemrepresentation
  getFileSystemRepresentation_maxLength(buffer: cocoascript.char, maxBufferLength: cocoascript.NSUInteger):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1411210-initfileurlwithfilesystemreprese
  initFileURLWithFileSystemRepresentation_isDirectory_relativeToURL(path: cocoascript.char, isDir: cocoascript.BOOL, baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410750-initabsoluteurlwithdatarepresent
  initAbsoluteURLWithDataRepresentation_relativeToURL(data: cocoascript.NSData, baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1416851-initwithdatarepresentation
  initWithDataRepresentation_relativeToURL(data: cocoascript.NSData, baseURL: cocoascript.NSURL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1407656-datarepresentation
  dataRepresentation(): cocoascript.NSData;
  setDataRepresentation(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410597-checkresourceisreachableandretur
  checkResourceIsReachableAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408507-isfilereferenceurl
  isFileReferenceURL():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408782-fileurl
  fileURL(): cocoascript.BOOL;
  setFileURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1409868-absolutestring
  absoluteString(): cocoascript.NSString;
  setAbsoluteString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1414266-absoluteurl
  absoluteURL(): cocoascript.NSURL;
  setAbsoluteURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1412311-baseurl
  baseURL(): cocoascript.NSURL;
  setBaseURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1412925-filesystemrepresentation
  fileSystemRepresentation(): cocoascript.char;
  setFileSystemRepresentation(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413775-fragment
  fragment(): cocoascript.NSString;
  setFragment(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413640-host
  host(): cocoascript.NSString;
  setHost(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417444-lastpathcomponent
  lastPathComponent(): cocoascript.NSString;
  setLastPathComponent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1412797-parameterstring
  parameterString(): cocoascript.NSString;
  setParameterString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1412096-password
  password(): cocoascript.NSString;
  setPassword(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408809-path
  path(): cocoascript.NSString;
  setPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1407365-pathcomponents
  pathComponents(): cocoascript.NSString;
  setPathComponents(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410208-pathextension
  pathExtension(): cocoascript.NSString;
  setPathExtension(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413455-port
  port(): cocoascript.NSNumber;
  setPort(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1407543-query
  query(): cocoascript.NSString;
  setQuery(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410263-relativepath
  relativePath(): cocoascript.NSString;
  setRelativePath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1411417-relativestring
  relativeString(): cocoascript.NSString;
  setRelativeString(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1415309-resourcespecifier
  resourceSpecifier(): cocoascript.NSString;
  setResourceSpecifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413437-scheme
  scheme(): cocoascript.NSString;
  setScheme(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1411073-standardizedurl
  standardizedURL(): cocoascript.NSURL;
  setStandardizedURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1418335-user
  user(): cocoascript.NSString;
  setUser(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417657-resourcevaluesforkeys
  resourceValuesForKeys_error(keys: cocoascript.NSURLResourceKey, error: cocoascript._Nullable):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408874-getresourcevalue
  getResourceValue_forKey_error(value: cocoascript._Nullable, key: cocoascript.NSURLResourceKey, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413819-setresourcevalue
  setResourceValue_forKey_error(value: cocoascript.NSURL, key: cocoascript.NSURLResourceKey, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408208-setresourcevalues
  setResourceValues_error(keyedValues: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417078-removeallcachedresourcevalues
  removeAllCachedResourceValues():void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410758-removecachedresourcevalueforkey
  removeCachedResourceValueForKey(key: cocoascript.NSURLResourceKey):void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1411094-settemporaryresourcevalue
  setTemporaryResourceValue_forKey(value: cocoascript.NSURL, key: cocoascript.NSURLResourceKey):void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408442-filepathurl
  filePathURL(): cocoascript.NSURL;
  setFilePathURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1408631-filereferenceurl
  fileReferenceURL():cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410614-urlbyappendingpathcomponent
  URLByAppendingPathComponent(pathComponent: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413953-urlbyappendingpathcomponent
  URLByAppendingPathComponent_isDirectory(pathComponent: cocoascript.NSString, isDirectory: cocoascript.BOOL):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417082-urlbyappendingpathextension
  URLByAppendingPathExtension(pathExtension: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1411592-urlbydeletinglastpathcomponent
  URLByDeletingLastPathComponent(): cocoascript.NSURL;
  setURLByDeletingLastPathComponent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1412357-urlbydeletingpathextension
  URLByDeletingPathExtension(): cocoascript.NSURL;
  setURLByDeletingPathExtension(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1415965-urlbyresolvingsymlinksinpath
  URLByResolvingSymlinksInPath(): cocoascript.NSURL;
  setURLByResolvingSymlinksInPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1414302-urlbystandardizingpath
  URLByStandardizingPath(): cocoascript.NSURL;
  setURLByStandardizingPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1411475-hasdirectorypath
  hasDirectoryPath(): cocoascript.BOOL;
  setHasDirectoryPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417795-bookmarkdatawithoptions
  bookmarkDataWithOptions_includingResourceValuesForKeys_relativeToURL_error(options: cocoascript.NSURLBookmarkCreationOptions, keys: cocoascript.NSURLResourceKey, relativeURL: cocoascript.NSURL, error: cocoascript._Nullable):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1417051-startaccessingsecurityscopedreso
  startAccessingSecurityScopedResource():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1413736-stopaccessingsecurityscopedresou
  stopAccessingSecurityScopedResource():void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1410411-checkpromiseditemisreachableandr
  checkPromisedItemIsReachableAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1414238-getpromiseditemresourcevalue
  getPromisedItemResourceValue_forKey_error(value: cocoascript._Nullable, key: cocoascript.NSURLResourceKey, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1407746-promiseditemresourcevaluesforkey
  promisedItemResourceValuesForKeys_error(keys: cocoascript.NSURLResourceKey, error: cocoascript._Nullable):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1532980-writetopasteboard
  writeToPasteboard(pasteBoard: cocoascript.NSPasteboard):void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1414181-initwithscheme
  initWithScheme_host_path(scheme: cocoascript.NSString, host: cocoascript.NSString, path: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1572051-urlhandleusingcache
  URLHandleUsingCache(shouldUseCache: cocoascript.BOOL):cocoascript.NSURLHandle;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1572043-loadresourcedatanotifyingclient
  loadResourceDataNotifyingClient_usingCache(client: cocoascript.NSURL, shouldUseCache: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1572037-resourcedatausingcache
  resourceDataUsingCache(shouldUseCache: cocoascript.BOOL):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1572038-setresourcedata
  setResourceData(data: cocoascript.NSData):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1572044-propertyforkey
  propertyForKey(propertyKey: cocoascript.NSString):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/1572041-setproperty
  setProperty_forKey(property: cocoascript.NSURL, propertyKey: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/3564810-urlbyappendingpathcomponent
  URLByAppendingPathComponent_conformingToType(partialName: cocoascript.NSString, contentType: cocoascript.UTType):cocoascript.NSURL;
  // doc://com.apple.documentation/documentation/foundation/nsurl/3584837-urlbyappendingpathextensionforty
  URLByAppendingPathExtensionForType(contentType: cocoascript.UTType):cocoascript.NSURL;
  // 
  alloc():cocoascript.NSURL;
  // 
  init():cocoascript.NSURL;
}
}
declare const NSURL: cocoascript.NSURL;

