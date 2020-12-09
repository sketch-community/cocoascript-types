declare namespace cocoascript {
/**
 * An operation that manages the concurrent execution of one or more blocks.
 * doc://com.apple.documentation/documentation/foundation/nsblockoperation
 */
interface NSBlockOperation extends NSOperation {
  // doc://com.apple.documentation/documentation/foundation/nsblockoperation/1414623-addexecutionblock
  addExecutionBlock(block: void):void;
  // doc://com.apple.documentation/documentation/foundation/nsblockoperation/1416555-executionblocks
  executionBlocks(): void;
  setExecutionBlocks(): void;
  // 
  alloc():cocoascript.NSBlockOperation;
  // 
  init():cocoascript.NSBlockOperation;
}
}
declare const NSBlockOperation: cocoascript.NSBlockOperation;

