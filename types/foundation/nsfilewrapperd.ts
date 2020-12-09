declare namespace cocoascript {
/**
 * A representation of a node (a file, directory, or symbolic link) in the file system.
 * doc://com.apple.documentation/documentation/foundation/nsfilewrapper
 */
interface NSFileWrapper extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415658-initwithurl
  initWithURL_options_error(url: cocoascript.NSURL, options: cocoascript.NSFileWrapperReadingOptions, outError: cocoascript._Nullable):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408388-initwithpath
  initWithPath(path: cocoascript.NSString):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415121-initdirectorywithfilewrappers
  initDirectoryWithFileWrappers(childrenByPreferredName: cocoascript.NSFileWrapper):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409508-initregularfilewithcontents
  initRegularFileWithContents(contents: cocoascript.NSData):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1411268-initsymboliclinkwithdestination
  initSymbolicLinkWithDestination(path: cocoascript.NSString):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415098-initsymboliclinkwithdestinationu
  initSymbolicLinkWithDestinationURL(url: cocoascript.NSURL):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1407515-initwithserializedrepresentation
  initWithSerializedRepresentation(serializeRepresentation: cocoascript.NSData):cocoascript.NSFileWrapper;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415680-regularfile
  regularFile(): cocoascript.BOOL;
  setRegularFile(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409030-directory
  directory(): cocoascript.BOOL;
  setDirectory(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408125-symboliclink
  symbolicLink(): cocoascript.BOOL;
  setSymbolicLink(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409437-filewrappers
  fileWrappers(): cocoascript.NSFileWrapper;
  setFileWrappers(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415067-addfilewrapper
  addFileWrapper(child: cocoascript.NSFileWrapper):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1417343-removefilewrapper
  removeFileWrapper(child: cocoascript.NSFileWrapper):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1417211-addfilewithpath
  addFileWithPath(path: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1418374-addregularfilewithcontents
  addRegularFileWithContents_preferredFilename(data: cocoascript.NSData, fileName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1414604-addsymboliclinkwithdestination
  addSymbolicLinkWithDestination_preferredFilename(path: cocoascript.NSString, filename: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1407541-keyforfilewrapper
  keyForFileWrapper(child: cocoascript.NSFileWrapper):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1418302-symboliclinkdestination
  symbolicLinkDestination():cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408364-symboliclinkdestinationurl
  symbolicLinkDestinationURL(): cocoascript.NSURL;
  setSymbolicLinkDestinationURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1407738-needstobeupdatedfrompath
  needsToBeUpdatedFromPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1408360-matchescontentsofurl
  matchesContentsOfURL(url: cocoascript.NSURL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1416300-updatefrompath
  updateFromPath(path: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1411645-readfromurl
  readFromURL_options_error(url: cocoascript.NSURL, options: cocoascript.NSFileWrapperReadingOptions, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1412119-serializedrepresentation
  serializedRepresentation(): cocoascript.NSData;
  setSerializedRepresentation(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1416684-filename
  filename(): cocoascript.NSString;
  setFilename(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1409368-preferredfilename
  preferredFilename(): cocoascript.NSString;
  setPreferredFilename(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1412745-fileattributes
  fileAttributes(): cocoascript.id;
  setFileAttributes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1410178-regularfilecontents
  regularFileContents(): cocoascript.NSData;
  setRegularFileContents(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415079-writetofile
  writeToFile_atomically_updateFilenames(path: cocoascript.NSString, atomicFlag: cocoascript.BOOL, updateFilenamesFlag: cocoascript.BOOL):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1415981-writetourl
  writeToURL_options_originalContentsURL_error(url: cocoascript.NSURL, options: cocoascript.NSFileWrapperWritingOptions, originalContentsURL: cocoascript.NSURL, outError: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1413123-icon
  icon(): cocoascript.NSImage;
  setIcon(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilewrapper/1416358-initwithcoder
  initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSFileWrapper;
  // 
  alloc():cocoascript.NSFileWrapper;
  // 
  init():cocoascript.NSFileWrapper;
}
}
declare const NSFileWrapper: cocoascript.NSFileWrapper;

