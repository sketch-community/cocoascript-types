declare namespace cocoascript {
/**
 * A concrete 
 * doc://com.apple.documentation/documentation/uikit/uinotificationfeedbackgenerator
 */
interface UINotificationFeedbackGenerator extends UIFeedbackGenerator {
  // doc://com.apple.documentation/documentation/uikit/uinotificationfeedbackgenerator/2369826-notificationoccurred
  notificationOccurred(notificationType: cocoascript.UINotificationFeedbackType):void;
  // 
  alloc():cocoascript.UINotificationFeedbackGenerator;
  // 
  init():cocoascript.UINotificationFeedbackGenerator;
}
}
declare const UINotificationFeedbackGenerator: cocoascript.UINotificationFeedbackGenerator;

