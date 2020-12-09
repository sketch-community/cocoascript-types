declare namespace cocoascript {
/**
 * A proxy for data that passes to an activity view controller. 
 * doc://com.apple.documentation/documentation/uikit/uiactivityitemprovider
 */
interface UIActivityItemProvider extends NSOperation {
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemprovider/1620463-initwithplaceholderitem
  initWithPlaceholderItem(placeholderItem: cocoascript.UIActivityItemProvider):cocoascript.UIActivityItemProvider;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemprovider/1620457-item
  item(): cocoascript.id;
  setItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemprovider/1620454-placeholderitem
  placeholderItem(): cocoascript.id;
  setPlaceholderItem(): void;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemprovider/1620459-activitytype
  activityType(): cocoascript.UIActivityType;
  setActivityType(): void;
  // 
  alloc():cocoascript.UIActivityItemProvider;
  // 
  init():cocoascript.UIActivityItemProvider;
}
}
declare const UIActivityItemProvider: cocoascript.UIActivityItemProvider;

