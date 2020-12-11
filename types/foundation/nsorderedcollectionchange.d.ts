declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange
   */
  interface NSOrderedCollectionChange extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152179-initwithobject
    initWithObject_index(anObject: cocoascript.NSCollectionChangeType, index: cocoascript.NSUInteger):cocoascript.NSOrderedCollectionChange;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152180-initwithobject
    initWithObject_index_associatedIndex(anObject: cocoascript.NSCollectionChangeType, index: cocoascript.NSUInteger, associatedIndex: cocoascript.NSUInteger):cocoascript.NSOrderedCollectionChange;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152174-associatedindex
    associatedIndex(): cocoascript.NSUInteger;
    setAssociatedIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152175-changetype
    changeType(): cocoascript.NSCollectionChangeType;
    setChangeType(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152178-index
    index(): cocoascript.NSUInteger;
    setIndex(): void;
    // doc://com.apple.documentation/documentation/foundation/nsorderedcollectionchange/3152181-object
    object(): any;
    setObject(): void;
    //
    alloc():cocoascript.NSOrderedCollectionChange;
    //
    init():cocoascript.NSOrderedCollectionChange;
  }
}

declare const NSOrderedCollectionChange: cocoascript.NSOrderedCollectionChange;
