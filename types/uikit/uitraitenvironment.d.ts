declare namespace cocoascript {
  /**
   * A set of methods that makes the iOS interface environment available to your app.
   * doc://com.apple.documentation/documentation/uikit/uitraitenvironment
   */
  interface UITraitEnvironment extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitraitenvironment/1623514-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    // doc://com.apple.documentation/documentation/uikit/uitraitenvironment/1623516-traitcollectiondidchange
    traitCollectionDidChange(previousTraitCollection: cocoascript.UITraitCollection):void;
  }
}
