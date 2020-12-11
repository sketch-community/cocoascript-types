declare namespace cocoascript {
  /**
   * The interface through which a user activity instance notifies its delegate of updates.
   * doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate
   */
  interface NSUserActivityDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate/1407386-useractivity
    userActivity_didReceiveInputStream_outputStream(userActivity: cocoascript.NSUserActivity, inputStream: cocoascript.NSInputStream, outputStream: cocoascript.NSOutputStream):void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate/1413276-useractivitywascontinued
    userActivityWasContinued(userActivity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/foundation/nsuseractivitydelegate/1414848-useractivitywillsave
    userActivityWillSave(userActivity: cocoascript.NSUserActivity):void;
  }
}
