declare namespace cocoascript {
/**
 * A set of methods you use to add custom restrictions for the Guided Access feature in iOS.
 * doc://com.apple.documentation/documentation/uikit/uiguidedaccessrestrictiondelegate
 */
interface UIGuidedAccessRestrictionDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiguidedaccessrestrictiondelegate/1621160-guidedaccessrestrictionidentifie
  guidedAccessRestrictionIdentifiers(): cocoascript.NSString;
  setGuidedAccessRestrictionIdentifiers(): void;
  // doc://com.apple.documentation/documentation/uikit/uiguidedaccessrestrictiondelegate/1621161-textforguidedaccessrestrictionwi
  textForGuidedAccessRestrictionWithIdentifier(restrictionIdentifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uiguidedaccessrestrictiondelegate/1621158-detailtextforguidedaccessrestric
  detailTextForGuidedAccessRestrictionWithIdentifier(restrictionIdentifier: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uiguidedaccessrestrictiondelegate/1621156-guidedaccessrestrictionwithident
  guidedAccessRestrictionWithIdentifier_didChangeState(restrictionIdentifier: cocoascript.NSString, newRestrictionState: cocoascript.UIGuidedAccessRestrictionState):void;
}
}

