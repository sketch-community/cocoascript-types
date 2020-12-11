declare namespace cocoascript {
  /**
   * A programmatic representation of the
   * doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel
   */
  interface NSManagedObjectModel extends NSObject {
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506225-initwithcontentsofurl
    initWithContentsOfURL(url: cocoascript.NSURL):cocoascript.NSManagedObjectModel;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506410-init
    init():cocoascript.NSManagedObjectModel;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506318-entities
    entities(): cocoascript.NSEntityDescription;
    setEntities(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506203-entitiesbyname
    entitiesByName(): cocoascript.NSEntityDescription;
    setEntitiesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506804-configurations
    configurations(): cocoascript.NSString;
    setConfigurations(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506693-entitiesforconfiguration
    entitiesForConfiguration(configuration: cocoascript.NSString):cocoascript.NSEntityDescription;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506287-setentities
    setEntities_forConfiguration(entities: cocoascript.NSEntityDescription, configuration: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506580-fetchrequesttemplatesbyname
    fetchRequestTemplatesByName(): cocoascript.NSFetchRequest;
    setFetchRequestTemplatesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506369-fetchrequesttemplateforname
    fetchRequestTemplateForName(name: cocoascript.NSString):cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506422-fetchrequestfromtemplatewithname
    fetchRequestFromTemplateWithName_substitutionVariables(name: cocoascript.NSString, variables: cocoascript.NSManagedObjectModel):cocoascript.NSFetchRequest;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506695-setfetchrequesttemplate
    setFetchRequestTemplate_forName(fetchRequestTemplate: cocoascript.NSFetchRequest, name: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506846-localizationdictionary
    localizationDictionary(): cocoascript.NSString;
    setLocalizationDictionary(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506940-isconfiguration
    isConfiguration_compatibleWithStoreMetadata(configuration: cocoascript.NSString, metadata: cocoascript.NSManagedObjectModel):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506992-entityversionhashesbyname
    entityVersionHashesByName(): cocoascript.NSData;
    setEntityVersionHashesByName(): void;
    // doc://com.apple.documentation/documentation/coredata/nsmanagedobjectmodel/1506268-versionidentifiers
    versionIdentifiers(): cocoascript.NSSet;
    setVersionIdentifiers(): void;
    //
    alloc():cocoascript.NSManagedObjectModel;
    //
    init():cocoascript.NSManagedObjectModel;
  }
}

declare const NSManagedObjectModel: cocoascript.NSManagedObjectModel;
