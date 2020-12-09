declare namespace cocoascript {
/**
 * The object that you use to start and stop the delivery of location-related events to your app.
 * doc://com.apple.documentation/documentation/corelocation/cllocationmanager
 */
interface CLLocationManager extends NSObject {
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3675588-authorizedforwidgetupdates
  authorizedForWidgetUpdates(): cocoascript.BOOL;
  setAuthorizedForWidgetUpdates(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3600215-accuracyauthorization
  accuracyAuthorization(): cocoascript.CLAccuracyAuthorization;
  setAccuracyAuthorization(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620561-headingavailable
  headingAvailable(): cocoascript.BOOL;
  setHeadingAvailable(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620566-locationservicesenabled
  locationServicesEnabled(): cocoascript.BOOL;
  setLocationServicesEnabled(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423792-delegate
  delegate(): cocoascript.CLLocationManagerDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620562-requestwheninuseauthorization
  requestWhenInUseAuthorization():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization
  requestAlwaysAuthorization():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3600217-requesttemporaryfullaccuracyauth
  requestTemporaryFullAccuracyAuthorizationWithPurposeKey_completion(purposeKey: cocoascript.NSString, completion: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3600216-requesttemporaryfullaccuracyauth
  requestTemporaryFullAccuracyAuthorizationWithPurposeKey(purposeKey: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3563952-authorizationstatus
  authorizationStatus(): cocoascript.CLAuthorizationStatus;
  setAuthorizationStatus(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423742-purpose
  purpose(): cocoascript.NSString;
  setPurpose(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423750-startupdatinglocation
  startUpdatingLocation():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423695-stopupdatinglocation
  stopUpdatingLocation():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620548-requestlocation
  requestLocation():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620553-pauseslocationupdatesautomatical
  pausesLocationUpdatesAutomatically(): cocoascript.BOOL;
  setPausesLocationUpdatesAutomatically(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620568-allowsbackgroundlocationupdates
  allowsBackgroundLocationUpdates(): cocoascript.BOOL;
  setAllowsBackgroundLocationUpdates(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/2923541-showsbackgroundlocationindicator
  showsBackgroundLocationIndicator(): cocoascript.BOOL;
  setShowsBackgroundLocationIndicator(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423500-distancefilter
  distanceFilter(): cocoascript.CLLocationDistance;
  setDistanceFilter(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423836-desiredaccuracy
  desiredAccuracy(): cocoascript.CLLocationAccuracy;
  setDesiredAccuracy(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620567-activitytype
  activityType(): cocoascript.CLActivityType;
  setActivityType(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423531-startmonitoringsignificantlocati
  startMonitoringSignificantLocationChanges():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423679-stopmonitoringsignificantlocatio
  stopMonitoringSignificantLocationChanges():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620558-startupdatingheading
  startUpdatingHeading():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620569-stopupdatingheading
  stopUpdatingHeading():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620563-dismissheadingcalibrationdisplay
  dismissHeadingCalibrationDisplay():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620550-headingfilter
  headingFilter(): cocoascript.CLLocationDegrees;
  setHeadingFilter(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620556-headingorientation
  headingOrientation(): cocoascript.CLDeviceOrientation;
  setHeadingOrientation(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423656-startmonitoringforregion
  startMonitoringForRegion(region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423840-stopmonitoringforregion
  stopMonitoringForRegion(region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423790-monitoredregions
  monitoredRegions(): cocoascript.CLRegion;
  setMonitoredRegions(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423740-maximumregionmonitoringdistance
  maximumRegionMonitoringDistance(): cocoascript.CLLocationDistance;
  setMaximumRegionMonitoringDistance(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620560-startmonitoringforregion
  startMonitoringForRegion_desiredAccuracy(region: cocoascript.CLRegion, accuracy: cocoascript.CLLocationAccuracy):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423804-requeststateforregion
  requestStateForRegion(region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3240607-startrangingbeaconssatisfyingcon
  startRangingBeaconsSatisfyingConstraint(constraint: cocoascript.CLBeaconIdentityConstraint):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3240608-stoprangingbeaconssatisfyingcons
  stopRangingBeaconsSatisfyingConstraint(constraint: cocoascript.CLBeaconIdentityConstraint):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3240606-rangedbeaconconstraints
  rangedBeaconConstraints(): cocoascript.CLBeaconIdentityConstraint;
  setRangedBeaconConstraints(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620554-startrangingbeaconsinregion
  startRangingBeaconsInRegion(region: cocoascript.CLBeaconRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620559-stoprangingbeaconsinregion
  stopRangingBeaconsInRegion(region: cocoascript.CLBeaconRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620552-rangedregions
  rangedRegions(): cocoascript.CLRegion;
  setRangedRegions(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1618692-startmonitoringvisits
  startMonitoringVisits():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1618693-stopmonitoringvisits
  stopMonitoringVisits():void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423687-location
  location(): cocoascript.CLLocation;
  setLocation(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620555-heading
  heading(): cocoascript.CLHeading;
  setHeading(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620547-allowdeferredlocationupdatesunti
  allowDeferredLocationUpdatesUntilTraveled_timeout(distance: cocoascript.CLLocationDistance, timeout: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620565-disallowdeferredlocationupdates
  disallowDeferredLocationUpdates():void;
  // 
  alloc():cocoascript.CLLocationManager;
  // 
  init():cocoascript.CLLocationManager;
}
}
declare const CLLocationManager: cocoascript.CLLocationManager;

