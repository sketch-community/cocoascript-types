declare namespace cocoascript {
  /**
   * An object that represents a type of data to load, send, or receive.
   * https://developer.apple.com/documentation/uniformtypeidentifiers/uttype
   */
  interface UTType extends NSObject {
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548222-typeswithtag
    typesWithTag_tagClass_conformingToType(tag: string | cocoascript.NSString, tagClass: string | cocoascript.NSString, supertype: UTType):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3600608-exportedtypewithidentifier
    exportedTypeWithIdentifier(identifier: string | cocoascript.NSString):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3600609-exportedtypewithidentifier
    exportedTypeWithIdentifier_conformingToType(identifier: string | cocoascript.NSString, parentType: UTType):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3600610-importedtypewithidentifier
    importedTypeWithIdentifier(identifier: string | cocoascript.NSString):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3600611-importedtypewithidentifier
    importedTypeWithIdentifier_conformingToType(identifier: string | cocoascript.NSString, parentType: UTType):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548218-typewithidentifier
    typeWithIdentifier(identifier: string | cocoascript.NSString):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548216-typewithfilenameextension
    typeWithFilenameExtension(filenameExtension: string | cocoascript.NSString):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548217-typewithfilenameextension
    typeWithFilenameExtension_conformingToType(filenameExtension: string | cocoascript.NSString, supertype: UTType):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548219-typewithmimetype
    typeWithMIMEType(mimeType: string | cocoascript.NSString):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548220-typewithmimetype
    typeWithMIMEType_conformingToType(mimeType: string | cocoascript.NSString, supertype: UTType):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548221-typewithtag
    typeWithTag_tagClass_conformingToType(tag: string | cocoascript.NSString, tagClass: string | cocoascript.NSString, supertype: UTType):UTType;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548206-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548210-preferredfilenameextension
    preferredFilenameExtension(): string | cocoascript.NSString;
    setPreferredFilenameExtension(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548211-preferredmimetype
    preferredMIMEType(): string | cocoascript.NSString;
    setPreferredMIMEType(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548215-tags
    tags(): string | cocoascript.NSString;
    setTags(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548204-declared
    declared(): boolean;
    setDeclared(value: boolean): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548205-dynamic
    dynamic(): boolean;
    setDynamic(value: boolean): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548212-publictype
    publicType(): boolean;
    setPublicType(value: boolean): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548213-referenceurl
    referenceURL(): NSURL;
    setReferenceURL(value: NSURL): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548223-version
    version(): NSNumber;
    setVersion(value: NSNumber): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548214-supertypes
    supertypes(): UTType;
    setSupertypes(value: UTType): void;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548203-conformstotype
    conformsToType(type: UTType):boolean;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548207-issubtypeoftype
    isSubtypeOfType(type: UTType):boolean;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548208-issupertypeoftype
    isSupertypeOfType(type: UTType):boolean;
    // https://developer.apple.com/documentation/uniformtypeidentifiers/uttype/3548209-localizeddescription
    localizedDescription(): string | cocoascript.NSString;
    setLocalizedDescription(value: string | cocoascript.NSString): void;
    //
    alloc():UTType;
    //
    init():UTType;
  }
}

declare const UTType: cocoascript.UTType;
