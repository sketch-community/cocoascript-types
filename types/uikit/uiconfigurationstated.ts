declare namespace cocoascript {
  /**
   * The requirements for an object that encapsulates a view’s state.
   * doc://com.apple.documentation/documentation/uikit/uiconfigurationstate
   */
  interface UIConfigurationState extends NSCopying {
    // doc://com.apple.documentation/documentation/uikit/uiconfigurationstate/3600978-traitcollection
    traitCollection(): cocoascript.UITraitCollection;
    setTraitCollection(): void;
    // doc://com.apple.documentation/documentation/uikit/uiconfigurationstate/3600478-customstateforkey
    customStateForKey(key: cocoascript.UIConfigurationStateCustomKey):cocoascript.UIConfigurationState;
    // doc://com.apple.documentation/documentation/uikit/uiconfigurationstate/3600481-setcustomstate
    setCustomState_forKey(customState: cocoascript.UIConfigurationState, key: cocoascript.UIConfigurationStateCustomKey):void;
    // doc://com.apple.documentation/documentation/uikit/uiconfigurationstate/3600480-objectforkeyedsubscript
    objectForKeyedSubscript(key: cocoascript.UIConfigurationStateCustomKey):cocoascript.UIConfigurationState;
    // doc://com.apple.documentation/documentation/uikit/uiconfigurationstate/3600482-setobject
    setObject_forKeyedSubscript(obj: cocoascript.UIConfigurationState, key: cocoascript.UIConfigurationStateCustomKey):void;
    // doc://com.apple.documentation/documentation/uikit/uiconfigurationstate/3600479-initwithtraitcollection
    initWithTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.UIConfigurationState;
  }
}
