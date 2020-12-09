declare namespace cocoascript {
/**
 * A representation of the state of your app at a moment in time.
 * doc://com.apple.documentation/documentation/foundation/nsuseractivity
 */
interface NSUserActivity extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1410714-initwithactivitytype
  initWithActivityType(activityType: cocoascript.NSString):cocoascript.NSUserActivity;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409240-init
  init():cocoascript.NSUserActivity;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409611-activitytype
  activityType(): cocoascript.NSString;
  setActivityType(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1413375-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1417256-requireduserinfokeys
  requiredUserInfoKeys(): cocoascript.NSString;
  setRequiredUserInfoKeys(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1411706-userinfo
  userInfo(): cocoascript.NSDictionary;
  setUserInfo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1410066-adduserinfoentriesfromdictionary
  addUserInfoEntriesFromDictionary(otherDictionary: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1408791-needssave
  needsSave(): cocoascript.BOOL;
  setNeedsSave(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1616398-contentattributeset
  contentAttributeSet(): cocoascript.CSSearchableItemAttributeSet;
  setContentAttributeSet(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1408023-keywords
  keywords(): cocoascript.NSString;
  setKeywords(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2980675-persistentidentifier
  persistentIdentifier(): cocoascript.NSUserActivityPersistentIdentifier;
  setPersistentIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/3580315-appclipactivationpayload
  appClipActivationPayload(): cocoascript.APActivationPayload;
  setAppClipActivationPayload(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1410971-eligibleforhandoff
  eligibleForHandoff(): cocoascript.BOOL;
  setEligibleForHandoff(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1417761-eligibleforsearch
  eligibleForSearch(): cocoascript.BOOL;
  setEligibleForSearch(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1414701-eligibleforpublicindexing
  eligibleForPublicIndexing(): cocoascript.BOOL;
  setEligibleForPublicIndexing(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1413745-expirationdate
  expirationDate(): cocoascript.NSDate;
  setExpirationDate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1413665-becomecurrent
  becomeCurrent():void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409596-resigncurrent
  resignCurrent():void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1416401-invalidate
  invalidate():void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1412329-delegate
  delegate(): cocoascript.NSUserActivityDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409195-supportscontinuationstreams
  supportsContinuationStreams(): cocoascript.BOOL;
  setSupportsContinuationStreams(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1409931-getcontinuationstreamswithcomple
  getContinuationStreamsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1418086-webpageurl
  webpageURL(): cocoascript.NSURL;
  setWebpageURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2980674-eligibleforprediction
  eligibleForPrediction(): cocoascript.BOOL;
  setEligibleForPrediction(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2976237-suggestedinvocationphrase
  suggestedInvocationPhrase(): cocoascript.NSString;
  setSuggestedInvocationPhrase(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/3552239-shortcutavailability
  shortcutAvailability(): cocoascript.INShortcutAvailabilityOptions;
  setShortcutAvailability(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1690346-interaction
  interaction(): cocoascript.INInteraction;
  setInteraction(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2968463-ndefmessagepayload
  ndefMessagePayload(): cocoascript.NFCNDEFMessage;
  setNdefMessagePayload(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/1690596-mapitem
  mapItem(): cocoascript.MKMapItem;
  setMapItem(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivitytypebrowsingweb
  NSUserActivityTypeBrowsingWeb(): cocoascript.const;
  setNSUserActivityTypeBrowsingWeb(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2866826-contextidentifierpath
  contextIdentifierPath(): cocoascript.NSString;
  setContextIdentifierPath(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2935570-detectedbarcodedescriptor
  detectedBarcodeDescriptor(): cocoascript.CIBarcodeDescriptor;
  setDetectedBarcodeDescriptor(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2921646-externalmediacontentidentifier
  externalMediaContentIdentifier(): cocoascript.NSString;
  setExternalMediaContentIdentifier(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2953056-isclasskitdeeplink
  isClassKitDeepLink(): cocoascript.BOOL;
  setIsClassKitDeepLink(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/2875762-referrerurl
  referrerURL(): cocoascript.NSURL;
  setReferrerURL(): void;
  // doc://com.apple.documentation/documentation/foundation/nsuseractivity/3238062-targetcontentidentifier
  targetContentIdentifier(): cocoascript.NSString;
  setTargetContentIdentifier(): void;
  // 
  alloc():cocoascript.NSUserActivity;
  // 
  init():cocoascript.NSUserActivity;
}
}
declare const NSUserActivity: cocoascript.NSUserActivity;

