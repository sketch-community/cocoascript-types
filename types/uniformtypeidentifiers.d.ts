declare namespace cocoascript {
  /**
   * An object that represents a type of data to load, send or receive.
   * doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype
   */
  interface UTType extends NSObject {
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548222-typeswithtag
    typesWithTag_tagClass_conformingToType(tag: string | NSString, tagClass: string | NSString, supertype: UTType):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3600608-exportedtypewithidentifier
    exportedTypeWithIdentifier(identifier: string | NSString):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3600609-exportedtypewithidentifier
    exportedTypeWithIdentifier_conformingToType(identifier: string | NSString, parentType: UTType):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3600610-importedtypewithidentifier
    importedTypeWithIdentifier(identifier: string | NSString):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3600611-importedtypewithidentifier
    importedTypeWithIdentifier_conformingToType(identifier: string | NSString, parentType: UTType):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548218-typewithidentifier
    typeWithIdentifier(identifier: string | NSString):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548216-typewithfilenameextension
    typeWithFilenameExtension(filenameExtension: string | NSString):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548217-typewithfilenameextension
    typeWithFilenameExtension_conformingToType(filenameExtension: string | NSString, supertype: UTType):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548219-typewithmimetype
    typeWithMIMEType(mimeType: string | NSString):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548220-typewithmimetype
    typeWithMIMEType_conformingToType(mimeType: string | NSString, supertype: UTType):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548221-typewithtag
    typeWithTag_tagClass_conformingToType(tag: string | NSString, tagClass: string | NSString, supertype: UTType):UTType;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548206-identifier
    identifier(): string | NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548210-preferredfilenameextension
    preferredFilenameExtension(): string | NSString;
    setPreferredFilenameExtension(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548211-preferredmimetype
    preferredMIMEType(): string | NSString;
    setPreferredMIMEType(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548215-tags
    tags(): string | NSString;
    setTags(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548204-declared
    declared(): BOOL;
    setDeclared(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548205-dynamic
    dynamic(): BOOL;
    setDynamic(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548212-publictype
    publicType(): BOOL;
    setPublicType(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548213-referenceurl
    referenceURL(): NSURL;
    setReferenceURL(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548223-version
    version(): NSNumber;
    setVersion(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548214-supertypes
    supertypes(): UTType;
    setSupertypes(): void;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548203-conformstotype
    conformsToType(type: UTType):BOOL;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548207-issubtypeoftype
    isSubtypeOfType(type: UTType):BOOL;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548208-issupertypeoftype
    isSupertypeOfType(type: UTType):BOOL;
    // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548209-localizeddescription
    localizedDescription(): string | NSString;
    setLocalizedDescription(): void;
    //
    alloc():UTType;
    //
    init():UTType;
  }
}

declare const UTType: cocoascript.UTType;
