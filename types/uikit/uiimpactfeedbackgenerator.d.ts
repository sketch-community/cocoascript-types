declare namespace cocoascript {
  /**
   * A concrete
   * doc://com.apple.documentation/documentation/uikit/uiimpactfeedbackgenerator
   */
  interface UIImpactFeedbackGenerator extends UIFeedbackGenerator {
    // doc://com.apple.documentation/documentation/uikit/uiimpactfeedbackgenerator/2374286-initwithstyle
    initWithStyle(style: cocoascript.UIImpactFeedbackStyle):cocoascript.UIImpactFeedbackGenerator;
    // doc://com.apple.documentation/documentation/uikit/uiimpactfeedbackgenerator/2374287-impactoccurred
    impactOccurred():void;
    // doc://com.apple.documentation/documentation/uikit/uiimpactfeedbackgenerator/3183920-impactoccurredwithintensity
    impactOccurredWithIntensity(intensity: cocoascript.CGFloat):void;
    //
    alloc():cocoascript.UIImpactFeedbackGenerator;
    //
    init():cocoascript.UIImpactFeedbackGenerator;
  }
}

declare const UIImpactFeedbackGenerator: cocoascript.UIImpactFeedbackGenerator;
