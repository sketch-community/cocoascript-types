declare namespace cocoascript {
/**
 * The properties you use to configure a sunbeams generator filter.
 * doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator
 */
interface CISunbeamsGenerator extends CIFilter {
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228767-center
  center(): cocoascript.CGPoint;
  setCenter(): void;
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228768-color
  color(): cocoascript.CIColor;
  setColor(): void;
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228769-maxstriationradius
  maxStriationRadius(): number;
  setMaxStriationRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228770-striationcontrast
  striationContrast(): number;
  setStriationContrast(): void;
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228771-striationstrength
  striationStrength(): number;
  setStriationStrength(): void;
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228772-sunradius
  sunRadius(): number;
  setSunRadius(): void;
  // doc://com.apple.documentation/documentation/coreimage/cisunbeamsgenerator/3228773-time
  time(): number;
  setTime(): void;
}
}

