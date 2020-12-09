declare namespace cocoascript {
/**
 * A one-way communications channel between related processes.
 * doc://com.apple.documentation/documentation/foundation/nspipe
 */
interface NSPipe extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nspipe/1414352-filehandleforreading
  fileHandleForReading(): cocoascript.NSFileHandle;
  setFileHandleForReading(): void;
  // doc://com.apple.documentation/documentation/foundation/nspipe/1412889-filehandleforwriting
  fileHandleForWriting(): cocoascript.NSFileHandle;
  setFileHandleForWriting(): void;
  // 
  alloc():cocoascript.NSPipe;
  // 
  init():cocoascript.NSPipe;
}
}
declare const NSPipe: cocoascript.NSPipe;

