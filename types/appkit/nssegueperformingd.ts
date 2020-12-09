declare namespace cocoascript {
/**
 * A set of methods that support the mediation of a custom segue.
 * doc://com.apple.documentation/documentation/appkit/nssegueperforming
 */
interface NSSeguePerforming extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nssegueperforming/1409583-performseguewithidentifier
  performSegueWithIdentifier_sender(identifier: cocoascript.NSStoryboardSegueIdentifier, sender: cocoascript.NSSeguePerforming):void;
  // doc://com.apple.documentation/documentation/appkit/nssegueperforming/1409580-prepareforsegue
  prepareForSegue_sender(segue: cocoascript.NSStoryboardSegue, sender: cocoascript.NSSeguePerforming):void;
  // doc://com.apple.documentation/documentation/appkit/nssegueperforming/1409574-shouldperformseguewithidentifier
  shouldPerformSegueWithIdentifier_sender(identifier: cocoascript.NSStoryboardSegueIdentifier, sender: cocoascript.NSSeguePerforming):cocoascript.BOOL;
}
}

