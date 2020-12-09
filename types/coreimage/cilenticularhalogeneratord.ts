declare namespace cocoascript {
/**
 * The properties you use to configure a lenticular halo generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator
 */
interface CILenticularHaloGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228520-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228521-color
  color(): cocoascript.CIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228522-halooverlap
  haloOverlap(): number;
  setHaloOverlap(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228523-haloradius
  haloRadius(): number;
  setHaloRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228524-halowidth
  haloWidth(): number;
  setHaloWidth(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228525-striationcontrast
  striationContrast(): number;
  setStriationContrast(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228526-striationstrength
  striationStrength(): number;
  setStriationStrength(): void;
  // doc://com.apple.documentation/documentation/coreimage/cilenticularhalogenerator/3228527-time
  time(): number;
  setTime(): void;
}
}

