declare namespace cocoascript {
  /**
   * A configuration that allows a responder to export data through a variety of interactions.
   * doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration
   */
  interface UIActivityItemsConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368122-initwithitemproviders
    initWithItemProviders(itemProviders: cocoascript.NSItemProvider):cocoascript.UIActivityItemsConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368123-initwithobjects
    initWithObjects(objects: cocoascript.NSItemProviderWriting):cocoascript.UIActivityItemsConfiguration;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368124-localobject
    localObject(): cocoascript.id;
    setLocalObject(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368125-metadataprovider
    metadataProvider(): cocoascript.UIActivityItemsConfigurationMetadataKey;
    setMetadataProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368126-peritemmetadataprovider
    perItemMetadataProvider(): cocoascript.UIActivityItemsConfigurationMetadataKey;
    setPerItemMetadataProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368121-applicationactivitiesprovider
    applicationActivitiesProvider(): void;
    setApplicationActivitiesProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368128-supportedinteractions
    supportedInteractions(): cocoascript.UIActivityItemsConfigurationInteraction;
    setSupportedInteractions(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfiguration/3368127-previewprovider
    previewProvider(): cocoascript.CGSize;
    setPreviewProvider(): void;
    //
    alloc():cocoascript.UIActivityItemsConfiguration;
    //
    init():cocoascript.UIActivityItemsConfiguration;
  }
}

declare const UIActivityItemsConfiguration: cocoascript.UIActivityItemsConfiguration;
