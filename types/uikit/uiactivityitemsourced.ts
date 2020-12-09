declare namespace cocoascript {
/**
 * A set of methods that an activity view controller uses to retrieve the data items to act on.  
 * doc://com.apple.documentation/documentation/uikit/uiactivityitemsource
 */
interface UIActivityItemSource extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsource/1620458-activityviewcontrollerplaceholde
  activityViewControllerPlaceholderItem(activityViewController: cocoascript.UIActivityViewController):cocoascript.UIActivityItemSource;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsource/1620453-activityviewcontroller
  activityViewController_itemForActivityType(activityViewController: cocoascript.UIActivityViewController, activityType: cocoascript.UIActivityType):cocoascript.UIActivityItemSource;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsource/1620455-activityviewcontroller
  activityViewController_subjectForActivityType(activityViewController: cocoascript.UIActivityViewController, activityType: cocoascript.UIActivityType):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsource/1620456-activityviewcontroller
  activityViewController_dataTypeIdentifierForActivityType(activityViewController: cocoascript.UIActivityViewController, activityType: cocoascript.UIActivityType):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsource/1620462-activityviewcontroller
  activityViewController_thumbnailImageForActivityType_suggestedSize(activityViewController: cocoascript.UIActivityViewController, activityType: cocoascript.UIActivityType, size: cocoascript.CGSize):cocoascript.UIImage;
  // doc://com.apple.documentation/documentation/uikit/uiactivityitemsource/3144571-activityviewcontrollerlinkmetada
  activityViewControllerLinkMetadata(activityViewController: cocoascript.UIActivityViewController):cocoascript.LPLinkMetadata;
}
}

