declare namespace cocoascript {
  /**
   * A description of an attribute of a Core Data entity.
   * doc://com.apple.documentation/documentation/coredata/nsattributedescription
   */
  interface NSAttributeDescription extends NSPropertyDescription {
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498291-attributetype
    attributeType(): cocoascript.NSAttributeType;
    setAttributeType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498309-attributevalueclassname
    attributeValueClassName(): cocoascript.NSString;
    setAttributeValueClassName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498302-defaultvalue
    defaultValue(): cocoascript.id;
    setDefaultValue(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498310-versionhash
    versionHash(): cocoascript.NSData;
    setVersionHash(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498305-valuetransformername
    valueTransformerName(): cocoascript.NSString;
    setValueTransformerName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/1498295-allowsexternalbinarydatastorage
    allowsExternalBinaryDataStorage(): cocoascript.BOOL;
    setAllowsExternalBinaryDataStorage(): void;
    // doc://com.apple.documentation/documentation/coredata/nsattributedescription/3180042-preservesvalueinhistoryondeletio
    preservesValueInHistoryOnDeletion(): cocoascript.BOOL;
    setPreservesValueInHistoryOnDeletion(): void;
    //
    alloc():cocoascript.NSAttributeDescription;
    //
    init():cocoascript.NSAttributeDescription;
  }
}

declare const NSAttributeDescription: cocoascript.NSAttributeDescription;
