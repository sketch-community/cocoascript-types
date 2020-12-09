declare namespace cocoascript {
/**
 * An object that represents a type of data to load, send or receive. 
 * doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype
 */
interface UTType extends NSObject {
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548206-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548210-preferredfilenameextension
  preferredFilenameExtension(): cocoascript.NSString;
  setPreferredFilenameExtension(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548211-preferredmimetype
  preferredMIMEType(): cocoascript.NSString;
  setPreferredMIMEType(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548215-tags
  tags(): cocoascript.NSString;
  setTags(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548204-declared
  declared(): cocoascript.BOOL;
  setDeclared(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548205-dynamic
  dynamic(): cocoascript.BOOL;
  setDynamic(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548212-publictype
  publicType(): cocoascript.BOOL;
  setPublicType(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548213-referenceurl
  referenceURL(): cocoascript.NSURL;
  setReferenceURL(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548223-version
  version(): cocoascript.NSNumber;
  setVersion(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548214-supertypes
  supertypes(): cocoascript.UTType;
  setSupertypes(): void;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548203-conformstotype
  conformsToType(type: cocoascript.UTType):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548207-issubtypeoftype
  isSubtypeOfType(type: cocoascript.UTType):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548208-issupertypeoftype
  isSupertypeOfType(type: cocoascript.UTType):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uniformtypeidentifiers/uttype/3548209-localizeddescription
  localizedDescription(): cocoascript.NSString;
  setLocalizedDescription(): void;
  // 
  alloc():cocoascript.UTType;
  // 
  init():cocoascript.UTType;
}
}
declare const UTType: cocoascript.UTType;

