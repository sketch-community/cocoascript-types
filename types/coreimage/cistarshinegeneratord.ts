declare namespace cocoascript {
/**
 * The properties you use to configure a star-shine generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator
 */
interface CIStarShineGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228749-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228750-color
  color(): cocoascript.CIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228751-crossangle
  crossAngle(): number;
  setCrossAngle(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228752-crossopacity
  crossOpacity(): number;
  setCrossOpacity(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228753-crossscale
  crossScale(): number;
  setCrossScale(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228754-crosswidth
  crossWidth(): number;
  setCrossWidth(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228755-epsilon
  epsilon(): number;
  setEpsilon(): void;
  // doc://com.apple.documentation/documentation/coreimage/cistarshinegenerator/3228756-radius
  radius(): number;
  setRadius(): void;
}
}

