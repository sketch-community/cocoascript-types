declare namespace cocoascript {
/**
 * The properties you use to configure a mesh generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cimeshgenerator
 */
interface CIMeshGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cimeshgenerator/3228559-color
  color(): cocoascript.CIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimeshgenerator/3228560-mesh
  mesh(): cocoascript.NSArray;
  setMesh(): void;
  // doc://com.apple.documentation/documentation/coreimage/cimeshgenerator/3228561-width
  width(): number;
  setWidth(): void;
}
}

