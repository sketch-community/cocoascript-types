declare namespace cocoascript {
/**
 * The floor of a building on which the user's device is located. 
 * doc://com.apple.documentation/documentation/corelocation/clfloor
 */
interface CLFloor extends NSObject {
  // doc://com.apple.documentation/documentation/corelocation/clfloor/1616759-level
  level(): cocoascript.NSInteger;
  setLevel(): void;
  // 
  alloc():cocoascript.CLFloor;
  // 
  init():cocoascript.CLFloor;
}
}
declare const CLFloor: cocoascript.CLFloor;

