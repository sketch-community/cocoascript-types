declare namespace cocoascript {
  /**
   * An item provider for conveying data or a file between processes during drag and drop or copy/paste activities, or from a host app to an app extension.
   * doc://com.apple.documentation/documentation/foundation/nsitemprovider
   */
  interface NSItemProvider extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403911-initwithcontentsofurl
    initWithContentsOfURL(fileURL: cocoascript.NSURL):cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403933-initwithitem
    initWithItem_typeIdentifier(item: cocoascript.NSSecureCoding, typeIdentifier: cocoascript.NSString):cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888323-init
    init():cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888328-initwithobject
    initWithObject(object: cocoascript.NSItemProviderWriting):cocoascript.NSItemProvider;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888333-canloadobjectofclass
    canLoadObjectOfClass(aClass: cocoascript.NSItemProviderReading):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403921-hasitemconformingtotypeidentifie
    hasItemConformingToTypeIdentifier(typeIdentifier: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403900-loaditemfortypeidentifier
    loadItemForTypeIdentifier_options_completionHandler(typeIdentifier: cocoascript.NSString, options: cocoascript.NSDictionary, completionHandler: cocoascript.NSItemProviderCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888331-loaddatarepresentationfortypeide
    loadDataRepresentationForTypeIdentifier_completionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888338-loadfilerepresentationfortypeide
    loadFileRepresentationForTypeIdentifier_completionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888335-loadinplacefilerepresentationfor
    loadInPlaceFileRepresentationForTypeIdentifier_completionHandler(typeIdentifier: cocoascript.NSString, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888336-loadobjectofclass
    loadObjectOfClass_completionHandler(aClass: cocoascript.NSItemProviderReading, completionHandler: cocoascript.NSError):cocoascript.NSProgress;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888320-hasrepresentationconformingtotyp
    hasRepresentationConformingToTypeIdentifier_fileOptions(typeIdentifier: cocoascript.NSString, fileOptions: cocoascript.NSItemProviderFileOptions):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888334-registeredtypeidentifierswithfil
    registeredTypeIdentifiersWithFileOptions(fileOptions: cocoascript.NSItemProviderFileOptions):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888319-registerdatarepresentationfortyp
    registerDataRepresentationForTypeIdentifier_visibility_loadHandler(typeIdentifier: cocoascript.NSString, visibility: cocoascript.NSItemProviderRepresentationVisibility, loadHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888337-registerfilerepresentationfortyp
    registerFileRepresentationForTypeIdentifier_fileOptions_visibility_loadHandler(typeIdentifier: cocoascript.NSString, fileOptions: cocoascript.NSItemProviderFileOptions, visibility: cocoascript.NSItemProviderRepresentationVisibility, loadHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888321-registerobject
    registerObject_visibility(object: cocoascript.NSItemProviderWriting, visibility: cocoascript.NSItemProviderRepresentationVisibility):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2888329-registerobjectofclass
    registerObjectOfClass_visibility_loadHandler(aClass: cocoascript.NSItemProviderWriting, visibility: cocoascript.NSItemProviderRepresentationVisibility, loadHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2890244-suggestedname
    suggestedName(): cocoascript.NSString;
    setSuggestedName(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403917-registeritemfortypeidentifier
    registerItemForTypeIdentifier_loadHandler(typeIdentifier: cocoascript.NSString, loadHandler: cocoascript.NSItemProviderLoadHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403923-registeredtypeidentifiers
    registeredTypeIdentifiers(): cocoascript.NSString;
    setRegisteredTypeIdentifiers(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403925-loadpreviewimagewithoptions
    loadPreviewImageWithOptions_completionHandler(options: cocoascript.NSDictionary, completionHandler: cocoascript.NSItemProviderCompletionHandler):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1403904-previewimagehandler
    previewImageHandler(): cocoascript.NSItemProviderLoadHandler;
    setPreviewImageHandler(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1528569-sourceframe
    sourceFrame(): cocoascript.NSRect;
    setSourceFrame(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1528571-containerframe
    containerFrame(): cocoascript.NSRect;
    setContainerFrame(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1528574-preferredpresentationsize
    preferredPresentationSize(): cocoascript.CGSize;
    setPreferredPresentationSize(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2921257-preferredpresentationstyle
    preferredPresentationStyle(): cocoascript.UIPreferredPresentationStyle;
    setPreferredPresentationStyle(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovidererrordomain
    NSItemProviderErrorDomain(): cocoascript.const;
    setNSItemProviderErrorDomain(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/2909055-teamdata
    teamData(): cocoascript.NSData;
    setTeamData(): void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1644692-registercloudkitshare
    registerCloudKitShare_container(share: cocoascript.CKShare, container: cocoascript.CKContainer):void;
    // doc://com.apple.documentation/documentation/foundation/nsitemprovider/1644475-registercloudkitsharewithprepara
    registerCloudKitShareWithPreparationHandler(preparationHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.NSItemProvider;
    //
    init():cocoascript.NSItemProvider;
  }
}

declare const NSItemProvider: cocoascript.NSItemProvider;
