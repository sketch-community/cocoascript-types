declare namespace cocoascript {
  /**
   * A mapping instance that specifies in a model how to map from a property in a source entity to a property in a destination entity.
   * doc://com.apple.documentation/documentation/coredata/nspropertymapping
   */
  interface NSPropertyMapping extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nspropertymapping/1506748-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertymapping/1506819-valueexpression
    valueExpression(): cocoascript.NSExpression;
    setValueExpression(): void;
    // doc://com.apple.documentation/documentation/coredata/nspropertymapping/1506516-userinfo
    userInfo(): cocoascript.NSDictionary;
    setUserInfo(): void;
    //
    alloc():cocoascript.NSPropertyMapping;
    //
    init():cocoascript.NSPropertyMapping;
  }
}

declare const NSPropertyMapping: cocoascript.NSPropertyMapping;
