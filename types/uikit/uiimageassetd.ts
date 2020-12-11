declare namespace cocoascript {
  /**
   * A container for a collection of images that represent multiple ways of describing a single piece of artwork.
   * doc://com.apple.documentation/documentation/uikit/uiimageasset
   */
  interface UIImageAsset extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/1624977-init
    init():cocoascript.UIImageAsset;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/1624978-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIImageAsset;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/1624974-registerimage
    registerImage_withTraitCollection(image: cocoascript.UIImage, traitCollection: cocoascript.UITraitCollection):void;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/3295944-registerimage
    registerImage_withConfiguration(image: cocoascript.UIImage, configuration: cocoascript.UIImageConfiguration):void;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/1624973-unregisterimagewithtraitcollecti
    unregisterImageWithTraitCollection(traitCollection: cocoascript.UITraitCollection):void;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/3295945-unregisterimagewithconfiguration
    unregisterImageWithConfiguration(configuration: cocoascript.UIImageConfiguration):void;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/1624976-imagewithtraitcollection
    imageWithTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.UIImage;
    // doc://com.apple.documentation/documentation/uikit/uiimageasset/3238043-imagewithconfiguration
    imageWithConfiguration(configuration: cocoascript.UIImageConfiguration):cocoascript.UIImage;
    //
    alloc():cocoascript.UIImageAsset;
    //
    init():cocoascript.UIImageAsset;
  }
}

declare const UIImageAsset: cocoascript.UIImageAsset;
