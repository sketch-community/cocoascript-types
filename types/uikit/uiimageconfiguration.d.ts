declare namespace cocoascript {
  /**
   * A configuration object that contains the traits that the system uses when selecting the current image variant.
   * doc://com.apple.documentation/documentation/uikit/uiimageconfiguration
   */
  interface UIImageConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiimageconfiguration/3294236-configurationbyapplyingconfigura
    configurationByApplyingConfiguration(otherConfiguration: cocoascript.UIImageConfiguration):cocoascript.UIImageConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiimageconfiguration/3295946-configurationwithtraitcollection
    configurationWithTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.UIImageConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiimageconfiguration/3295947-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    //
    alloc():cocoascript.UIImageConfiguration;
    //
    init():cocoascript.UIImageConfiguration;
  }
}

declare const UIImageConfiguration: cocoascript.UIImageConfiguration;
