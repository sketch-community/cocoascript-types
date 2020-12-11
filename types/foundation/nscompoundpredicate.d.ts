declare namespace cocoascript {
  /**
   * A specialized predicate that evaluates logical combinations of other predicates.
   * doc://com.apple.documentation/documentation/foundation/nscompoundpredicate
   */
  interface NSCompoundPredicate extends NSPredicate {
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1407744-initwithtype
    initWithType_subpredicates(type: cocoascript.NSCompoundPredicateType, subpredicates: cocoascript.NSPredicate):cocoascript.NSCompoundPredicate;
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1412973-compoundpredicatetype
    compoundPredicateType(): cocoascript.NSCompoundPredicateType;
    setCompoundPredicateType(): void;
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1410273-subpredicates
    subpredicates(): cocoascript.NSArray;
    setSubpredicates(): void;
    // doc://com.apple.documentation/documentation/foundation/nscompoundpredicate/1417889-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSCompoundPredicate;
    //
    alloc():cocoascript.NSCompoundPredicate;
    //
    init():cocoascript.NSCompoundPredicate;
  }
}

declare const NSCompoundPredicate: cocoascript.NSCompoundPredicate;
