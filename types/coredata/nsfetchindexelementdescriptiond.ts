declare namespace cocoascript {
  /**
   * Description of an Index Element
   * doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription
   */
  interface NSFetchIndexElementDescription extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887043-initwithproperty
    initWithProperty_collationType(property: cocoascript.NSPropertyDescription, collationType: cocoascript.NSFetchIndexElementType):cocoascript.NSFetchIndexElementDescription;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887048-collationtype
    collationType(): cocoascript.NSFetchIndexElementType;
    setCollationType(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887047-indexdescription
    indexDescription(): cocoascript.NSFetchIndexDescription;
    setIndexDescription(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887051-ascending
    ascending(): cocoascript.BOOL;
    setAscending(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887049-property
    property(): cocoascript.NSPropertyDescription;
    setProperty(): void;
    // doc://com.apple.documentation/documentation/coredata/nsfetchindexelementdescription/2887045-propertyname
    propertyName(): cocoascript.NSString;
    setPropertyName(): void;
    //
    alloc():cocoascript.NSFetchIndexElementDescription;
    //
    init():cocoascript.NSFetchIndexElementDescription;
  }
}

declare const NSFetchIndexElementDescription: cocoascript.NSFetchIndexElementDescription;
