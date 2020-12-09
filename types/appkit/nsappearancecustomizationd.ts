declare namespace cocoascript {
/**
 * A set of methods for getting and setting the appearance attributes of a view. 
 * doc://com.apple.documentation/documentation/appkit/nsappearancecustomization
 */
interface NSAppearanceCustomization extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsappearancecustomization/1533925-appearance
  appearance(): cocoascript.NSAppearance;
  setAppearance(): void;
  // doc://com.apple.documentation/documentation/appkit/nsappearancecustomization/1535147-effectiveappearance
  effectiveAppearance(): cocoascript.NSAppearance;
  setEffectiveAppearance(): void;
}
}

