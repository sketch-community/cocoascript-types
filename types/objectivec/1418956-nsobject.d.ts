declare namespace cocoascript {
  /**
   * The group of methods that are fundamental to all Objective-C objects.
   * doc://com.apple.documentation/documentation/objectivec/1418956-nsobject
   */
  interface NSObject {
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1571949-class
    class():cocoascript.Class;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418793-superclass
    superclass(): cocoascript.Class;
    setSuperclass(): void;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418795-isequal
    isEqual(object: cocoascript.NSObject):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418859-hash
    hash(): cocoascript.NSUInteger;
    setHash(): void;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418954-self
    self():cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418511-iskindofclass
    isKindOfClass(aClass: cocoascript.Class):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418766-ismemberofclass
    isMemberOfClass(aClass: cocoascript.Class):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418583-respondstoselector
    respondsToSelector(aSelector: cocoascript.SEL):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418515-conformstoprotocol
    conformsToProtocol(aProtocol: cocoascript.Protocol):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418746-description
    description(): cocoascript.NSString;
    setDescription(): void;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418703-debugdescription
    debugDescription(): cocoascript.NSString;
    setDebugDescription(): void;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418867-performselector
    performSelector(aSelector: cocoascript.SEL):cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418764-performselector
    performSelector_withObject(aSelector: cocoascript.SEL, object: cocoascript.NSObject):cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418667-performselector
    performSelector_withObject_withObject(aSelector: cocoascript.SEL, object1: cocoascript.NSObject, object2: cocoascript.NSObject):cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1418528-isproxy
    isProxy():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1571946-retain
    retain():cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1571957-release
    release():void;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1571951-autorelease
    autorelease():cocoascript.NSObject;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1571952-retaincount
    retainCount():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/objectivec/1418956-nsobject/1571954-zone
    zone():cocoascript.struct;
  }
}
