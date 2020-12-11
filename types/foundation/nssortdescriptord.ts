declare namespace cocoascript {
  /**
   * An immutable description of how to order a collection of objects based on a property common to all the objects.
   * doc://com.apple.documentation/documentation/foundation/nssortdescriptor
   */
  interface NSSortDescriptor extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1413572-initwithkey
    initWithKey_ascending(key: cocoascript.NSString, ascending: cocoascript.BOOL):cocoascript.NSSortDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1412495-initwithkey
    initWithKey_ascending_selector(key: cocoascript.NSString, ascending: cocoascript.BOOL, selector: cocoascript.SEL):cocoascript.NSSortDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1411607-initwithkey
    initWithKey_ascending_comparator(key: cocoascript.NSString, ascending: cocoascript.BOOL, cmptr: cocoascript.NSComparator):cocoascript.NSSortDescriptor;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1408931-ascending
    ascending(): cocoascript.BOOL;
    setAscending(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1415022-key
    key(): cocoascript.NSString;
    setKey(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1418337-selector
    selector(): cocoascript.SEL;
    setSelector(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1411426-comparator
    comparator(): cocoascript.NSComparator;
    setComparator(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1411557-compareobject
    compareObject_toObject(object1: cocoascript.NSSortDescriptor, object2: cocoascript.NSSortDescriptor):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1407712-reversedsortdescriptor
    reversedSortDescriptor(): cocoascript.id;
    setReversedSortDescriptor(): void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1412371-allowevaluation
    allowEvaluation():void;
    // doc://com.apple.documentation/documentation/foundation/nssortdescriptor/1412503-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSSortDescriptor;
    //
    alloc():cocoascript.NSSortDescriptor;
    //
    init():cocoascript.NSSortDescriptor;
  }
}

declare const NSSortDescriptor: cocoascript.NSSortDescriptor;
