declare namespace cocoascript {
/**
 * A collection similar to an array, but with a broader range of available memory semantics.
 * doc://com.apple.documentation/documentation/foundation/nspointerarray
 */
interface NSPointerArray extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1408229-initwithoptions
  initWithOptions(options: cocoascript.NSPointerFunctionsOptions):cocoascript.NSPointerArray;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1416727-initwithpointerfunctions
  initWithPointerFunctions(functions: cocoascript.NSPointerFunctions):cocoascript.NSPointerArray;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1418453-count
  count(): cocoascript.NSUInteger;
  setCount(): void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1408081-allobjects
  allObjects(): cocoascript.NSArray;
  setAllObjects(): void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1417655-pointeratindex
  pointerAtIndex(index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1411636-addpointer
  addPointer(pointer: void):void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1407403-removepointeratindex
  removePointerAtIndex(index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1408589-insertpointer
  insertPointer_atIndex(item: void, index: cocoascript.NSUInteger):void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1412654-replacepointeratindex
  replacePointerAtIndex_withPointer(index: cocoascript.NSUInteger, item: void):void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1413659-compact
  compact():void;
  // doc://com.apple.documentation/documentation/foundation/nspointerarray/1413669-pointerfunctions
  pointerFunctions(): cocoascript.NSPointerFunctions;
  setPointerFunctions(): void;
  // 
  alloc():cocoascript.NSPointerArray;
  // 
  init():cocoascript.NSPointerArray;
}
}
declare const NSPointerArray: cocoascript.NSPointerArray;

