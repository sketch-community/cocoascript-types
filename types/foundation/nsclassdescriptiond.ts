declare namespace cocoascript {
  /**
   * An abstract class that provides the interface for querying the relationships and properties of a class.
   * doc://com.apple.documentation/documentation/foundation/nsclassdescription
   */
  interface NSClassDescription extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1415001-attributekeys
    attributeKeys(): cocoascript.NSString;
    setAttributeKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1410945-inverseforrelationshipkey
    inverseForRelationshipKey(relationshipKey: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1408530-tomanyrelationshipkeys
    toManyRelationshipKeys(): cocoascript.NSString;
    setToManyRelationshipKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescription/1411937-toonerelationshipkeys
    toOneRelationshipKeys(): cocoascript.NSString;
    setToOneRelationshipKeys(): void;
    // doc://com.apple.documentation/documentation/foundation/nsclassdescriptionneededforclassnotification
    NSClassDescriptionNeededForClassNotification(): cocoascript.NSNotificationName;
    setNSClassDescriptionNeededForClassNotification(): void;
    //
    alloc():cocoascript.NSClassDescription;
    //
    init():cocoascript.NSClassDescription;
  }
}

declare const NSClassDescription: cocoascript.NSClassDescription;
