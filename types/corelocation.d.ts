declare namespace cocoascript {
  /**
   * The methods that you use to receive events from an associated location manager object.
   * doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate
   */
  interface CLLocationManagerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz
    locationManagerDidChangeAuthorization(manager: CLLocationManager):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423701-locationmanager
    locationManager_didChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423786-locationmanager
    locationManager_didFailWithError(manager: CLLocationManager, error: NSError):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423615-locationmanager
    locationManager_didUpdateLocations(manager: CLLocationManager, locations: CLLocation):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423716-locationmanager
    locationManager_didUpdateToLocation_fromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423537-locationmanager
    locationManager_didFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621553-locationmanagerdidpauselocationu
    locationManagerDidPauseLocationUpdates(manager: CLLocationManager):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621512-locationmanagerdidresumelocation
    locationManagerDidResumeLocationUpdates(manager: CLLocationManager):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621555-locationmanager
    locationManager_didUpdateHeading(manager: CLLocationManager, newHeading: CLHeading):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621457-locationmanagershoulddisplayhead
    locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager):BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423560-locationmanager
    locationManager_didEnterRegion(manager: CLLocationManager, region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423630-locationmanager
    locationManager_didExitRegion(manager: CLLocationManager, region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423570-locationmanager
    locationManager_didDetermineState_forRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423720-locationmanager
    locationManager_monitoringDidFailForRegion_withError(manager: CLLocationManager, region: CLRegion, error: NSError):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423842-locationmanager
    locationManager_didStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/3240610-locationmanager
    locationManager_didRangeBeacons_satisfyingConstraint(manager: CLLocationManager, beacons: CLBeacon, beaconConstraint: CLBeaconIdentityConstraint):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/3240609-locationmanager
    locationManager_didFailRangingBeaconsForConstraint_error(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621501-locationmanager
    locationManager_didRangeBeacons_inRegion(manager: CLLocationManager, beacons: CLBeacon, region: CLBeaconRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621483-locationmanager
    locationManager_rangingBeaconsDidFailForRegion_withError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621529-locationmanager
    locationManager_didVisit(manager: CLLocationManager, visit: CLVisit):void;
  }
}
declare namespace cocoascript {
  /**
   * The latitude, longitude, and course information reported by the system.
   * doc://com.apple.documentation/documentation/corelocation/cllocation
   */
  interface CLLocation extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423660-initwithlatitude
    initWithLatitude_longitude(latitude: CLLocationDegrees, longitude: CLLocationDegrees):CLLocation;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423666-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_timestamp(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, timestamp: NSDate):CLLocation;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423718-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_speed_timestamp(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, course: CLLocationDirection, speed: CLLocationSpeed, timestamp: NSDate):CLLocation;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/3524339-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_courseAccuracy_speed_speedAccuracy_timestamp(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, course: CLLocationDirection, courseAccuracy: CLLocationDirectionAccuracy, speed: CLLocationSpeed, speedAccuracy: CLLocationSpeedAccuracy, timestamp: NSDate):CLLocation;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423504-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423820-altitude
    altitude(): CLLocationDistance;
    setAltitude(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1616762-floor
    floor(): CLFloor;
    setFloor(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423599-horizontalaccuracy
    horizontalAccuracy(): CLLocationAccuracy;
    setHorizontalAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423550-verticalaccuracy
    verticalAccuracy(): CLLocationAccuracy;
    setVerticalAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/3524340-speedaccuracy
    speedAccuracy(): CLLocationSpeedAccuracy;
    setSpeedAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/3524338-courseaccuracy
    courseAccuracy(): CLLocationDirectionAccuracy;
    setCourseAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423589-timestamp
    timestamp(): NSDate;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423689-distancefromlocation
    distanceFromLocation(location: CLLocation):CLLocationDistance;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1616758-getdistancefrom
    getDistanceFrom(location: CLLocation):CLLocationDistance;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423798-speed
    speed(): CLLocationSpeed;
    setSpeed(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocation/1423832-course
    course(): CLLocationDirection;
    setCourse(): void;
    //
    alloc():CLLocation;
    //
    init():CLLocation;
  }
}

declare const CLLocation: cocoascript.CLLocation;
declare namespace cocoascript {
  /**
   * A user-friendly description of a geographic coordinate, often containing the name of the place, its address, and other relevant information.
   * doc://com.apple.documentation/documentation/corelocation/clplacemark
   */
  interface CLPlacemark extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423818-initwithplacemark
    initWithPlacemark(placemark: CLPlacemark):CLPlacemark;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/2132103-placemarkwithlocation
    placemarkWithLocation_name_postalAddress(location: CLLocation, name: string | cocoascript.NSString, postalAddress: CNPostalAddress):CLPlacemark;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423603-location
    location(): CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423634-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423796-isocountrycode
    ISOcountryCode(): string | cocoascript.NSString;
    setISOcountryCode(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423800-country
    country(): string | cocoascript.NSString;
    setCountry(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423851-postalcode
    postalCode(): string | cocoascript.NSString;
    setPostalCode(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423628-administrativearea
    administrativeArea(): string | cocoascript.NSString;
    setAdministrativeArea(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423776-subadministrativearea
    subAdministrativeArea(): string | cocoascript.NSString;
    setSubAdministrativeArea(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423507-locality
    locality(): string | cocoascript.NSString;
    setLocality(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423794-sublocality
    subLocality(): string | cocoascript.NSString;
    setSubLocality(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423814-thoroughfare
    thoroughfare(): string | cocoascript.NSString;
    setThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423782-subthoroughfare
    subThoroughfare(): string | cocoascript.NSString;
    setSubThoroughfare(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423808-region
    region(): CLRegion;
    setRegion(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423707-timezone
    timeZone(): NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/2890749-postaladdress
    postalAddress(): CNPostalAddress;
    setPostalAddress(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423605-addressdictionary
    addressDictionary(): NSDictionary;
    setAddressDictionary(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423738-inlandwater
    inlandWater(): string | cocoascript.NSString;
    setInlandWater(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423619-ocean
    ocean(): string | cocoascript.NSString;
    setOcean(): void;
    // doc://com.apple.documentation/documentation/corelocation/clplacemark/1423673-areasofinterest
    areasOfInterest(): string | cocoascript.NSString;
    setAreasOfInterest(): void;
    //
    alloc():CLPlacemark;
    //
    init():CLPlacemark;
  }
}

declare const CLPlacemark: cocoascript.CLPlacemark;
declare namespace cocoascript {
  /**
   * The azimuth (orientation) of the user’s device, relative to true or magnetic north.
   * doc://com.apple.documentation/documentation/corelocation/clheading
   */
  interface CLHeading extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423763-magneticheading
    magneticHeading(): CLLocationDirection;
    setMagneticHeading(): void;
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423568-trueheading
    trueHeading(): CLLocationDirection;
    setTrueHeading(): void;
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423705-headingaccuracy
    headingAccuracy(): CLLocationDirection;
    setHeadingAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423525-timestamp
    timestamp(): NSDate;
    setTimestamp(): void;
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423685-x
    x(): CLHeadingComponentValue;
    setX(): void;
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423617-y
    y(): CLHeadingComponentValue;
    setY(): void;
    // doc://com.apple.documentation/documentation/corelocation/clheading/1423609-z
    z(): CLHeadingComponentValue;
    setZ(): void;
    //
    alloc():CLHeading;
    //
    init():CLHeading;
  }
}

declare const CLHeading: cocoascript.CLHeading;
declare namespace cocoascript {
  /**
   * A base class representing an area that can be monitored.
   * doc://com.apple.documentation/documentation/corelocation/clregion
   */
  interface CLRegion extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423583-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423566-notifyonentry
    notifyOnEntry(): BOOL;
    setNotifyOnEntry(): void;
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423595-notifyonexit
    notifyOnExit(): BOOL;
    setNotifyOnExit(): void;
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423681-initcircularregionwithcenter
    initCircularRegionWithCenter_radius_identifier(center: CLLocationCoordinate2D, radius: CLLocationDistance, identifier: string | cocoascript.NSString):CLRegion;
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423828-containscoordinate
    containsCoordinate(coordinate: CLLocationCoordinate2D):BOOL;
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423691-center
    center(): CLLocationCoordinate2D;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/corelocation/clregion/1423730-radius
    radius(): CLLocationDistance;
    setRadius(): void;
    //
    alloc():CLRegion;
    //
    init():CLRegion;
  }
}

declare const CLRegion: cocoascript.CLRegion;
declare namespace cocoascript {
  /**
   * Information about the user's location during a specific period of time.
   * doc://com.apple.documentation/documentation/corelocation/clvisit
   */
  interface CLVisit extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614677-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(): void;
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614679-horizontalaccuracy
    horizontalAccuracy(): CLLocationAccuracy;
    setHorizontalAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614681-arrivaldate
    arrivalDate(): NSDate;
    setArrivalDate(): void;
    // doc://com.apple.documentation/documentation/corelocation/clvisit/1614685-departuredate
    departureDate(): NSDate;
    setDepartureDate(): void;
    //
    alloc():CLVisit;
    //
    init():CLVisit;
  }
}

declare const CLVisit: cocoascript.CLVisit;
declare namespace cocoascript {
  /**
   * The floor of a building on which the user's device is located.
   * doc://com.apple.documentation/documentation/corelocation/clfloor
   */
  interface CLFloor extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clfloor/1616759-level
    level(): NSInteger;
    setLevel(): void;
    //
    alloc():CLFloor;
    //
    init():CLFloor;
  }
}

declare const CLFloor: cocoascript.CLFloor;
declare namespace cocoascript {
  /**
   * Information about an observed iBeacon device and its relative distance to the user’s device.
   * doc://com.apple.documentation/documentation/corelocation/clbeacon
   */
  interface CLBeacon extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/3183017-uuid
    UUID(): NSUUID;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621418-major
    major(): NSNumber;
    setMajor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621558-minor
    minor(): NSNumber;
    setMinor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621508-proximityuuid
    proximityUUID(): NSUUID;
    setProximityUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621554-proximity
    proximity(): CLProximity;
    setProximity(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621551-accuracy
    accuracy(): CLLocationAccuracy;
    setAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/1621557-rssi
    rssi(): NSInteger;
    setRssi(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeacon/3183021-timestamp
    timestamp(): NSDate;
    setTimestamp(): void;
    //
    alloc():CLBeacon;
    //
    init():CLBeacon;
  }
}

declare const CLBeacon: cocoascript.CLBeacon;
declare namespace cocoascript {
  /**
   * Identity characteristics that can match one or more beacons.
   * doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint
   */
  interface CLBeaconIdentityConstraint extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240599-initwithuuid
    initWithUUID(uuid: NSUUID):CLBeaconIdentityConstraint;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240600-initwithuuid
    initWithUUID_major(uuid: NSUUID, major: CLBeaconMajorValue):CLBeaconIdentityConstraint;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240601-initwithuuid
    initWithUUID_major_minor(uuid: NSUUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue):CLBeaconIdentityConstraint;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240598-uuid
    UUID(): NSUUID;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240602-major
    major(): NSNumber;
    setMajor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconidentityconstraint/3240603-minor
    minor(): NSNumber;
    setMinor(): void;
    //
    alloc():CLBeaconIdentityConstraint;
    //
    init():CLBeaconIdentityConstraint;
  }
}

declare const CLBeaconIdentityConstraint: cocoascript.CLBeaconIdentityConstraint;
declare namespace cocoascript {
  /**
   * The object that you use to start and stop the delivery of location-related events to your app.
   * doc://com.apple.documentation/documentation/corelocation/cllocationmanager
   */
  interface CLLocationManager extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423677-significantlocationchangemonitor
    significantLocationChangeMonitoringAvailable():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423502-headingavailable
    headingAvailable():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3675588-authorizedforwidgetupdates
    authorizedForWidgetUpdates(): BOOL;
    setAuthorizedForWidgetUpdates(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3600215-accuracyauthorization
    accuracyAuthorization(): CLAccuracyAuthorization;
    setAccuracyAuthorization(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423654-ismonitoringavailableforclass
    isMonitoringAvailableForClass(regionClass: Class):BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620549-israngingavailable
    isRangingAvailable():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423648-locationservicesenabled
    locationServicesEnabled():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620561-headingavailable
    headingAvailable(): BOOL;
    setHeadingAvailable(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620566-locationservicesenabled
    locationServicesEnabled(): BOOL;
    setLocationServicesEnabled(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423564-regionmonitoringavailable
    regionMonitoringAvailable():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423585-regionmonitoringenabled
    regionMonitoringEnabled():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423792-delegate
    delegate(): CLLocationManagerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620562-requestwheninuseauthorization
    requestWhenInUseAuthorization():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization
    requestAlwaysAuthorization():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3600217-requesttemporaryfullaccuracyauth
    requestTemporaryFullAccuracyAuthorizationWithPurposeKey_completion(purposeKey: string | cocoascript.NSString, completion: NSError):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3600216-requesttemporaryfullaccuracyauth
    requestTemporaryFullAccuracyAuthorizationWithPurposeKey(purposeKey: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3563952-authorizationstatus
    authorizationStatus(): CLAuthorizationStatus;
    setAuthorizationStatus(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423523-authorizationstatus
    authorizationStatus():CLAuthorizationStatus;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423742-purpose
    purpose(): string | cocoascript.NSString;
    setPurpose(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423750-startupdatinglocation
    startUpdatingLocation():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423695-stopupdatinglocation
    stopUpdatingLocation():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620548-requestlocation
    requestLocation():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620553-pauseslocationupdatesautomatical
    pausesLocationUpdatesAutomatically(): BOOL;
    setPausesLocationUpdatesAutomatically(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620568-allowsbackgroundlocationupdates
    allowsBackgroundLocationUpdates(): BOOL;
    setAllowsBackgroundLocationUpdates(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/2923541-showsbackgroundlocationindicator
    showsBackgroundLocationIndicator(): BOOL;
    setShowsBackgroundLocationIndicator(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423500-distancefilter
    distanceFilter(): CLLocationDistance;
    setDistanceFilter(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423836-desiredaccuracy
    desiredAccuracy(): CLLocationAccuracy;
    setDesiredAccuracy(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620567-activitytype
    activityType(): CLActivityType;
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
    headingFilter(): CLLocationDegrees;
    setHeadingFilter(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620556-headingorientation
    headingOrientation(): CLDeviceOrientation;
    setHeadingOrientation(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423656-startmonitoringforregion
    startMonitoringForRegion(region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423840-stopmonitoringforregion
    stopMonitoringForRegion(region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423790-monitoredregions
    monitoredRegions(): CLRegion;
    setMonitoredRegions(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423740-maximumregionmonitoringdistance
    maximumRegionMonitoringDistance(): CLLocationDistance;
    setMaximumRegionMonitoringDistance(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620560-startmonitoringforregion
    startMonitoringForRegion_desiredAccuracy(region: CLRegion, accuracy: CLLocationAccuracy):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423804-requeststateforregion
    requestStateForRegion(region: CLRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3240607-startrangingbeaconssatisfyingcon
    startRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3240608-stoprangingbeaconssatisfyingcons
    stopRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/3240606-rangedbeaconconstraints
    rangedBeaconConstraints(): CLBeaconIdentityConstraint;
    setRangedBeaconConstraints(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620554-startrangingbeaconsinregion
    startRangingBeaconsInRegion(region: CLBeaconRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620559-stoprangingbeaconsinregion
    stopRangingBeaconsInRegion(region: CLBeaconRegion):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620552-rangedregions
    rangedRegions(): CLRegion;
    setRangedRegions(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1618692-startmonitoringvisits
    startMonitoringVisits():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1618693-stopmonitoringvisits
    stopMonitoringVisits():void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423687-location
    location(): CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620555-heading
    heading(): CLHeading;
    setHeading(): void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1423830-deferredlocationupdatesavailable
    deferredLocationUpdatesAvailable():BOOL;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620547-allowdeferredlocationupdatesunti
    allowDeferredLocationUpdatesUntilTraveled_timeout(distance: CLLocationDistance, timeout: NSTimeInterval):void;
    // doc://com.apple.documentation/documentation/corelocation/cllocationmanager/1620565-disallowdeferredlocationupdates
    disallowDeferredLocationUpdates():void;
    //
    alloc():CLLocationManager;
    //
    init():CLLocationManager;
  }
}

declare const CLLocationManager: cocoascript.CLLocationManager;
declare namespace cocoascript {
  /**
   * An interface for converting between geographic coordinates and place names.
   * doc://com.apple.documentation/documentation/corelocation/clgeocoder
   */
  interface CLGeocoder extends NSObject {
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2908779-reversegeocodelocation
    reverseGeocodeLocation_preferredLocale_completionHandler(location: CLLocation, locale: NSLocale, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423621-reversegeocodelocation
    reverseGeocodeLocation_completionHandler(location: CLLocation, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2890753-geocodeaddressstring
    geocodeAddressString_inRegion_preferredLocale_completionHandler(addressString: string | cocoascript.NSString, region: CLRegion, locale: NSLocale, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423509-geocodeaddressstring
    geocodeAddressString_completionHandler(addressString: string | cocoascript.NSString, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423591-geocodeaddressstring
    geocodeAddressString_inRegion_completionHandler(addressString: string | cocoascript.NSString, region: CLRegion, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2890752-geocodepostaladdress
    geocodePostalAddress_completionHandler(postalAddress: CNPostalAddress, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/2890750-geocodepostaladdress
    geocodePostalAddress_preferredLocale_completionHandler(postalAddress: CNPostalAddress, locale: NSLocale, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423693-geocodeaddressdictionary
    geocodeAddressDictionary_completionHandler(addressDictionary: NSDictionary, completionHandler: CLGeocodeCompletionHandler):void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423562-cancelgeocode
    cancelGeocode():void;
    // doc://com.apple.documentation/documentation/corelocation/clgeocoder/1423765-geocoding
    geocoding(): BOOL;
    setGeocoding(): void;
    //
    alloc():CLGeocoder;
    //
    init():CLGeocoder;
  }
}

declare const CLGeocoder: cocoascript.CLGeocoder;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationspeed
  type CLLocationSpeed = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationdirection
  type CLLocationDirection = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationdistance
  type CLLocationDistance = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationaccuracy
  type CLLocationAccuracy = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationspeedaccuracy
  type CLLocationSpeedAccuracy = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationdirectionaccuracy
  type CLLocationDirectionAccuracy = number;
}
declare namespace cocoascript {
  interface CLLocationCoordinate2D {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clheadingcomponentvalue
  type CLHeadingComponentValue = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clregionstate
  type CLRegionState = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A circular geographic region, specified as a center point and radius.
   * doc://com.apple.documentation/documentation/corelocation/clcircularregion
   */
  interface CLCircularRegion extends CLRegion {
    // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423761-initwithcenter
    initWithCenter_radius_identifier(center: CLLocationCoordinate2D, radius: CLLocationDistance, identifier: string | cocoascript.NSString):CLCircularRegion;
    // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423601-center
    center(): CLLocationCoordinate2D;
    setCenter(): void;
    // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423734-radius
    radius(): CLLocationDistance;
    setRadius(): void;
    // doc://com.apple.documentation/documentation/corelocation/clcircularregion/1423697-containscoordinate
    containsCoordinate(coordinate: CLLocationCoordinate2D):BOOL;
    //
    alloc():CLCircularRegion;
    //
    init():CLCircularRegion;
  }
}

declare const CLCircularRegion: cocoascript.CLCircularRegion;
declare namespace cocoascript {
  /**
   * A region used to detect the presence of iBeacon devices.
   * doc://com.apple.documentation/documentation/corelocation/clbeaconregion
   */
  interface CLBeaconRegion extends CLRegion {
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3240605-initwithbeaconidentityconstraint
    initWithBeaconIdentityConstraint_identifier(beaconIdentityConstraint: CLBeaconIdentityConstraint, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183025-initwithuuid
    initWithUUID_identifier(uuid: NSUUID, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183026-initwithuuid
    initWithUUID_major_identifier(uuid: NSUUID, major: CLBeaconMajorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183027-initwithuuid
    initWithUUID_major_minor_identifier(uuid: NSUUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621534-initwithproximityuuid
    initWithProximityUUID_identifier(proximityUUID: NSUUID, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621475-initwithproximityuuid
    initWithProximityUUID_major_identifier(proximityUUID: NSUUID, major: CLBeaconMajorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621392-initwithproximityuuid
    initWithProximityUUID_major_minor_identifier(proximityUUID: NSUUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3183022-uuid
    UUID(): NSUUID;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621536-major
    major(): NSNumber;
    setMajor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621414-minor
    minor(): NSNumber;
    setMinor(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/3240604-beaconidentityconstraint
    beaconIdentityConstraint(): CLBeaconIdentityConstraint;
    setBeaconIdentityConstraint(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621556-proximityuuid
    proximityUUID(): NSUUID;
    setProximityUUID(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621552-notifyentrystateondisplay
    notifyEntryStateOnDisplay(): BOOL;
    setNotifyEntryStateOnDisplay(): void;
    // doc://com.apple.documentation/documentation/corelocation/clbeaconregion/1621494-peripheraldatawithmeasuredpower
    peripheralDataWithMeasuredPower(measuredPower: NSNumber):CLBeaconRegion;
    //
    alloc():CLBeaconRegion;
    //
    init():CLBeaconRegion;
  }
}

declare const CLBeaconRegion: cocoascript.CLBeaconRegion;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clproximity
  type CLProximity = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clauthorizationstatus
  type CLAuthorizationStatus = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/claccuracyauthorization
  type CLAccuracyAuthorization = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clerror
  type CLError = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/corelocation/cllocationdistancemax
declare const CLLocationDistanceMax: cocoascript.CLLocationDistance;
// doc://com.apple.documentation/documentation/corelocation/kcldistancefilternone
declare const kCLDistanceFilterNone: cocoascript.CLLocationDistance;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clactivitytype
  type CLActivityType = cocoascript.NSInteger;
}
// doc://com.apple.documentation/documentation/corelocation/kclheadingfilternone
declare const kCLHeadingFilterNone: cocoascript.CLLocationDegrees;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cldeviceorientation
  type CLDeviceOrientation = number;
}
// doc://com.apple.documentation/documentation/corelocation/cltimeintervalmax
declare const CLTimeIntervalMax: cocoascript.NSTimeInterval;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/cllocationdegrees
  type CLLocationDegrees = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clgeocodecompletionhandler
  type CLGeocodeCompletionHandler = cocoascript.NSError;
}
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracybestfornavigation
declare const kCLLocationAccuracyBestForNavigation: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracybest
declare const kCLLocationAccuracyBest: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracynearesttenmeters
declare const kCLLocationAccuracyNearestTenMeters: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracyhundredmeters
declare const kCLLocationAccuracyHundredMeters: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracykilometer
declare const kCLLocationAccuracyKilometer: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracythreekilometers
declare const kCLLocationAccuracyThreeKilometers: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationaccuracyreduced
declare const kCLLocationAccuracyReduced: cocoascript.CLLocationAccuracy;
// doc://com.apple.documentation/documentation/corelocation/kcllocationcoordinate2dinvalid
declare const kCLLocationCoordinate2DInvalid: cocoascript.CLLocationCoordinate2D;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clbeaconmajorvalue
  type CLBeaconMajorValue = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/corelocation/clbeaconminorvalue
  type CLBeaconMinorValue = number;
}
