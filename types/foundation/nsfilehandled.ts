declare namespace cocoascript {
/**
 * An object-oriented wrapper for a file descriptor.
 * doc://com.apple.documentation/documentation/foundation/nsfilehandle
 */
interface NSFileHandle extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411001-filehandlewithstandarderror
  fileHandleWithStandardError(): cocoascript.NSFileHandle;
  setFileHandleWithStandardError(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413686-filehandlewithstandardinput
  fileHandleWithStandardInput(): cocoascript.NSFileHandle;
  setFileHandleWithStandardInput(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1416965-filehandlewithstandardoutput
  fileHandleWithStandardOutput(): cocoascript.NSFileHandle;
  setFileHandleWithStandardOutput(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413881-filehandlewithnulldevice
  fileHandleWithNullDevice(): cocoascript.NSFileHandle;
  setFileHandleWithNullDevice(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1409825-initwithfiledescriptor
  initWithFileDescriptor(fd: number):cocoascript.NSFileHandle;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1408522-initwithfiledescriptor
  initWithFileDescriptor_closeOnDealloc(fd: number, closeopt: cocoascript.BOOL):cocoascript.NSFileHandle;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1410326-filedescriptor
  fileDescriptor(): number;
  setFileDescriptor(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411463-availabledata
  availableData(): cocoascript.NSData;
  setAvailableData(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411490-readdatatoendoffile
  readDataToEndOfFile():cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413916-readdataoflength
  readDataOfLength(length: cocoascript.NSUInteger):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1410936-writedata
  writeData(data: cocoascript.NSData):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1412413-readabilityhandler
  readabilityHandler(): cocoascript.NSFileHandle;
  setReadabilityHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1415367-writeabilityhandler
  writeabilityHandler(): cocoascript.NSFileHandle;
  setWriteabilityHandler(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413309-acceptconnectioninbackgroundandn
  acceptConnectionInBackgroundAndNotify():void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1412997-acceptconnectioninbackgroundandn
  acceptConnectionInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1417635-readinbackgroundandnotify
  readInBackgroundAndNotify():void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1416294-readinbackgroundandnotifyformode
  readInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1415313-readtoendoffileinbackgroundandno
  readToEndOfFileInBackgroundAndNotify():void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1417321-readtoendoffileinbackgroundandno
  readToEndOfFileInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1409270-waitfordatainbackgroundandnotify
  waitForDataInBackgroundAndNotify():void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1414643-waitfordatainbackgroundandnotify
  waitForDataInBackgroundAndNotifyForModes(modes: cocoascript.NSRunLoopMode):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1408461-offsetinfile
  offsetInFile(): number;
  setOffsetInFile(): void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411311-seektoendoffile
  seekToEndOfFile():number;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1412135-seektofileoffset
  seekToFileOffset(offset: number):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1413393-closefile
  closeFile():void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411016-synchronizefile
  synchronizeFile():void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411716-truncatefileatoffset
  truncateFileAtOffset(offset: number):void;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/1411174-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSFileHandle;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172525-closeandreturnerror
  closeAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172530-seektooffset
  seekToOffset_error(offset: number, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172531-synchronizeandreturnerror
  synchronizeAndReturnError(error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172532-truncateatoffset
  truncateAtOffset_error(offset: number, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172526-getoffset
  getOffset_error(offsetInFile: number, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172527-readdatatoendoffileandreturnerro
  readDataToEndOfFileAndReturnError(error: cocoascript._Nullable):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172528-readdatauptolength
  readDataUpToLength_error(length: cocoascript.NSUInteger, error: cocoascript._Nullable):cocoascript.NSData;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172529-seektoendreturningoffset
  seekToEndReturningOffset_error(offsetInFile: number, error: cocoascript._Nullable):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nsfilehandle/3172533-writedata
  writeData_error(data: cocoascript.NSData, error: cocoascript._Nullable):cocoascript.BOOL;
  // 
  alloc():cocoascript.NSFileHandle;
  // 
  init():cocoascript.NSFileHandle;
}
}
declare const NSFileHandle: cocoascript.NSFileHandle;

