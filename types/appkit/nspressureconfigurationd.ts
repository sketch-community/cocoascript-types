declare namespace cocoascript {
/**
 * An encapsulation of the behavior and progression of a Force Touch trackpad as it responds to specific events.
 * doc://com.apple.documentation/documentation/appkit/nspressureconfiguration
 */
interface NSPressureConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nspressureconfiguration/1426883-initwithpressurebehavior
  initWithPressureBehavior(pressureBehavior: cocoascript.NSPressureBehavior):cocoascript.NSPressureConfiguration;
  // doc://com.apple.documentation/documentation/appkit/nspressureconfiguration/1426887-set
  set():void;
  // doc://com.apple.documentation/documentation/appkit/nspressureconfiguration/1426889-pressurebehavior
  pressureBehavior(): cocoascript.NSPressureBehavior;
  setPressureBehavior(): void;
  // 
  alloc():cocoascript.NSPressureConfiguration;
  // 
  init():cocoascript.NSPressureConfiguration;
}
}
declare const NSPressureConfiguration: cocoascript.NSPressureConfiguration;

