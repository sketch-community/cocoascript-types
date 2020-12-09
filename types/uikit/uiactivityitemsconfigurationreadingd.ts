declare namespace cocoascript {
/**
 * doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading
 */
interface UIActivityItemsConfigurationReading extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading/3368148-applicationactivitiesforactivity
  applicationActivitiesForActivityItemsConfiguration(): cocoascript.UIActivity;
  setApplicationActivitiesForActivityItemsConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading/3368149-itemprovidersforactivityitemscon
  itemProvidersForActivityItemsConfiguration(): cocoascript.NSItemProvider;
  setItemProvidersForActivityItemsConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading/3368144-activityitemsconfigurationmetada
  activityItemsConfigurationMetadataForKey(key: cocoascript.UIActivityItemsConfigurationMetadataKey):cocoascript.UIActivityItemsConfigurationReading;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading/3368145-activityitemsconfigurationmetada
  activityItemsConfigurationMetadataForItemAtIndex_key(index: cocoascript.NSInteger, key: cocoascript.UIActivityItemsConfigurationMetadataKey):cocoascript.UIActivityItemsConfigurationReading;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading/3368146-activityitemsconfigurationprevie
  activityItemsConfigurationPreviewForItemAtIndex_intent_suggestedSize(index: cocoascript.NSInteger, intent: cocoascript.UIActivityItemsConfigurationPreviewIntent, suggestedSize: cocoascript.CGSize):cocoascript.NSItemProvider;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsconfigurationreading/3368147-activityitemsconfigurationsuppor
  activityItemsConfigurationSupportsInteraction(interaction: cocoascript.UIActivityItemsConfigurationInteraction):cocoascript.BOOL;
}
}

