declare namespace cocoascript {
/**
 * An object that gives you the ability to choose from system-provided tinting behaviors.
 * doc://com.apple.documentation/documentation/appkit/nstintconfiguration
 */
interface NSTintConfiguration extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstintconfiguration/3626818-adaptstouseraccentcolor
  adaptsToUserAccentColor(): cocoascript.BOOL;
  setAdaptsToUserAccentColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstintconfiguration/3626820-defaulttintconfiguration
  defaultTintConfiguration(): cocoascript.NSTintConfiguration;
  setDefaultTintConfiguration(): void;
  // doc://com.apple.documentation/documentation/appkit/nstintconfiguration/3626822-monochrometintconfiguration
  monochromeTintConfiguration(): cocoascript.NSTintConfiguration;
  setMonochromeTintConfiguration(): void;
  // doc://com.apple.documentation/documentation/appkit/nstintconfiguration/3626819-basetintcolor
  baseTintColor(): cocoascript.NSColor;
  setBaseTintColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nstintconfiguration/3626821-equivalentcontenttintcolor
  equivalentContentTintColor(): cocoascript.NSColor;
  setEquivalentContentTintColor(): void;
  // 
  alloc():cocoascript.NSTintConfiguration;
  // 
  init():cocoascript.NSTintConfiguration;
}
}
declare const NSTintConfiguration: cocoascript.NSTintConfiguration;

