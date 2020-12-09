declare namespace cocoascript {
/**
 * A definition of logical conditions used to constrain a search either for a fetch or for in-memory filtering.
 * doc://com.apple.documentation/documentation/foundation/nspredicate
 */
interface NSPredicate extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nspredicate/1413227-predicatewithsubstitutionvariabl
  predicateWithSubstitutionVariables(variables: cocoascript.NSPredicate):cocoascript.NSPredicate;
  // doc://com.apple.documentation/documentation/foundation/nspredicate/1417924-evaluatewithobject
  evaluateWithObject(object: cocoascript.NSPredicate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nspredicate/1407759-evaluatewithobject
  evaluateWithObject_substitutionVariables(object: cocoascript.NSPredicate, bindings: cocoascript.NSPredicate):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/foundation/nspredicate/1416310-allowevaluation
  allowEvaluation():void;
  // doc://com.apple.documentation/documentation/foundation/nspredicate/1411605-predicateformat
  predicateFormat(): cocoascript.NSString;
  setPredicateFormat(): void;
  // 
  alloc():cocoascript.NSPredicate;
  // 
  init():cocoascript.NSPredicate;
}
}
declare const NSPredicate: cocoascript.NSPredicate;

