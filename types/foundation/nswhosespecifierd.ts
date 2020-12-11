declare namespace cocoascript {
  /**
   * A specifier that indicates every object in a collection matching a condition.
   * doc://com.apple.documentation/documentation/foundation/nswhosespecifier
   */
  interface NSWhoseSpecifier extends NSScriptObjectSpecifier {
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1412173-initwithcontainerclassdescriptio
    initWithContainerClassDescription_containerSpecifier_key_test(classDesc: cocoascript.NSScriptClassDescription, container: cocoascript.NSScriptObjectSpecifier, property: cocoascript.NSString, test: cocoascript.NSScriptWhoseTest):cocoascript.NSWhoseSpecifier;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1407761-endsubelementidentifier
    endSubelementIdentifier(): cocoascript.NSWhoseSubelementIdentifier;
    setEndSubelementIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1416686-endsubelementindex
    endSubelementIndex(): cocoascript.NSInteger;
    setEndSubelementIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1413408-startsubelementidentifier
    startSubelementIdentifier(): cocoascript.NSWhoseSubelementIdentifier;
    setStartSubelementIdentifier(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1417856-startsubelementindex
    startSubelementIndex(): cocoascript.NSInteger;
    setStartSubelementIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1412482-test
    test(): cocoascript.NSScriptWhoseTest;
    setTest(): void;
    // doc://com.apple.documentation/documentation/foundation/nswhosespecifier/1418262-initwithcoder
    initWithCoder(inCoder: cocoascript.NSCoder):cocoascript.NSWhoseSpecifier;
    //
    alloc():cocoascript.NSWhoseSpecifier;
    //
    init():cocoascript.NSWhoseSpecifier;
  }
}

declare const NSWhoseSpecifier: cocoascript.NSWhoseSpecifier;
