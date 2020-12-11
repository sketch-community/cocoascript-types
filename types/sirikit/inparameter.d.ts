declare namespace cocoascript {
  /**
   * A parameter of an interaction object.
   * doc://com.apple.documentation/documentation/sirikit/inparameter
   */
  interface INParameter extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908771-parameterkeypath
    parameterKeyPath(): cocoascript.NSString;
    setParameterKeyPath(): void;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908773-parameterclass
    parameterClass(): cocoascript.Class;
    setParameterClass(): void;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908767-indexforsubkeypath
    indexForSubKeyPath(subKeyPath: cocoascript.NSString):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908766-setindex
    setIndex_forSubKeyPath(index: cocoascript.NSUInteger, subKeyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908764-isequaltoparameter
    isEqualToParameter(parameter: cocoascript.INParameter):cocoascript.BOOL;
    //
    alloc():cocoascript.INParameter;
    //
    init():cocoascript.INParameter;
  }
}

declare const INParameter: cocoascript.INParameter;
