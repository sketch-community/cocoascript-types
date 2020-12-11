declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/uikit/uiusernotificationsettings
   */
  interface UIUserNotificationSettings extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiusernotificationsettings/1615321-types
    types(): cocoascript.UIUserNotificationType;
    setTypes(): void;
    // doc://com.apple.documentation/documentation/uikit/uiusernotificationsettings/1615365-categories
    categories(): cocoascript.UIUserNotificationCategory;
    setCategories(): void;
    //
    alloc():cocoascript.UIUserNotificationSettings;
    //
    init():cocoascript.UIUserNotificationSettings;
  }
}

declare const UIUserNotificationSettings: cocoascript.UIUserNotificationSettings;
