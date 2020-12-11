declare namespace cocoascript {
  /**
   * A model instance that specifies how to map a model from a source to a destination managed object model.
   * doc://com.apple.documentation/documentation/coredata/nsmappingmodel
   */
  interface NSMappingModel extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmappingmodel/1506304-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSMappingModel;
    // doc://com.apple.documentation/documentation/coredata/nsmappingmodel/1506196-entitymappings
    entityMappings(): cocoascript.NSEntityMapping;
    setEntityMappings(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmappingmodel/1506179-entitymappingsbyname
    entityMappingsByName(): cocoascript.NSEntityMapping;
    setEntityMappingsByName(): void;
    //
    alloc():cocoascript.NSMappingModel;
    //
    init():cocoascript.NSMappingModel;
  }
}

declare const NSMappingModel: cocoascript.NSMappingModel;
