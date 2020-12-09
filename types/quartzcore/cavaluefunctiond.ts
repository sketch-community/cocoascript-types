declare namespace cocoascript {
/**
 * An object that provides a flexible method of defining animated transformations.
 * doc://com.apple.documentation/documentation/quartzcore/cavaluefunction
 */
interface CAValueFunction extends NSObject {
  // doc://com.apple.documentation/documentation/quartzcore/cavaluefunction/1521888-name
  name(): cocoascript.CAValueFunctionName;
  setName(): void;
  // 
  alloc():cocoascript.CAValueFunction;
  // 
  init():cocoascript.CAValueFunction;
}
}
declare const CAValueFunction: cocoascript.CAValueFunction;

