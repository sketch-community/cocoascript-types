declare namespace cocoascript {
  /**
   * An interface that allows objects to respond to actions triggered by a
   * doc://com.apple.documentation/documentation/quartzcore/caaction
   */
  interface CAAction {
    // doc://com.apple.documentation/documentation/quartzcore/caaction/1410806-runactionforkey
    runActionForKey_object_arguments(event: cocoascript.NSString, anObject: cocoascript.CAAction, dict: cocoascript.NSDictionary):void;
  }
}
