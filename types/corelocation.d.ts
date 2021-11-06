declare namespace cocoascript {
  /**
   * A protocol that provides the entry point for the Location Push Service Extension.
   * https://developer.apple.com/documentation/corelocation/cllocationpushserviceextension
   */
  interface CLLocationPushServiceExtension extends NSObject {
    // https://developer.apple.com/documentation/corelocation/cllocationpushserviceextension/3746846-didreceivelocationpushpayload
    didReceiveLocationPushPayload_completion(payload: CLLocationPushServiceExtension, completion: void):void;
    // https://developer.apple.com/documentation/corelocation/cllocationpushserviceextension/3746847-serviceextensionwillterminate
    serviceExtensionWillTerminate():void;
  }
}
declare namespace cocoascript {
  /**
   * The methods that you use to receive events from an associated location manager object.
   * https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate
   */
  interface CLLocationManagerDelegate extends NSObject {
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz
    locationManagerDidChangeAuthorization(manager: CLLocationManager):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423701-locationmanager
    locationManager_didChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423786-locationmanager
    locationManager_didFailWithError(manager: CLLocationManager, error: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423615-locationmanager
    locationManager_didUpdateLocations(manager: CLLocationManager, locations: CLLocation):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423716-locationmanager
    locationManager_didUpdateToLocation_fromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423537-locationmanager
    locationManager_didFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621553-locationmanagerdidpauselocationu
    locationManagerDidPauseLocationUpdates(manager: CLLocationManager):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621512-locationmanagerdidresumelocation
    locationManagerDidResumeLocationUpdates(manager: CLLocationManager):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621555-locationmanager
    locationManager_didUpdateHeading(manager: CLLocationManager, newHeading: CLHeading):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621457-locationmanagershoulddisplayhead
    locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager):boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423560-locationmanager
    locationManager_didEnterRegion(manager: CLLocationManager, region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423630-locationmanager
    locationManager_didExitRegion(manager: CLLocationManager, region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423570-locationmanager
    locationManager_didDetermineState_forRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423720-locationmanager
    locationManager_monitoringDidFailForRegion_withError(manager: CLLocationManager, region: CLRegion, error: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1423842-locationmanager
    locationManager_didStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3240610-locationmanager
    locationManager_didRangeBeacons_satisfyingConstraint(manager: CLLocationManager, beacons: CLBeacon, beaconConstraint: CLBeaconIdentityConstraint):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/3240609-locationmanager
    locationManager_didFailRangingBeaconsForConstraint_error(manager: CLLocationManager, beaconConstraint: CLBeaconIdentityConstraint, error: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621501-locationmanager
    locationManager_didRangeBeacons_inRegion(manager: CLLocationManager, beacons: CLBeacon, region: CLBeaconRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621483-locationmanager
    locationManager_rangingBeaconsDidFailForRegion_withError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanagerdelegate/1621529-locationmanager
    locationManager_didVisit(manager: CLLocationManager, visit: CLVisit):void;
  }
}
declare namespace cocoascript {
  /**
   * The latitude, longitude, and course information reported by the system.
   * https://developer.apple.com/documentation/corelocation/cllocation
   */
  interface CLLocation extends NSObject {
    // https://developer.apple.com/documentation/corelocation/cllocation/1423660-initwithlatitude
    initWithLatitude_longitude(latitude: CLLocationDegrees, longitude: CLLocationDegrees):CLLocation;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423666-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_timestamp(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, timestamp: NSDate):CLLocation;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423718-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_speed_timestamp(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, course: CLLocationDirection, speed: CLLocationSpeed, timestamp: NSDate):CLLocation;
    // https://developer.apple.com/documentation/corelocation/cllocation/3524339-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_courseAccuracy_speed_speedAccuracy_timestamp(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, course: CLLocationDirection, courseAccuracy: CLLocationDirectionAccuracy, speed: CLLocationSpeed, speedAccuracy: CLLocationSpeedAccuracy, timestamp: NSDate):CLLocation;
    // https://developer.apple.com/documentation/corelocation/cllocation/3861802-initwithcoordinate
    initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_courseAccuracy_speed_speedAccuracy_timestamp_sourceInfo(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance, hAccuracy: CLLocationAccuracy, vAccuracy: CLLocationAccuracy, course: CLLocationDirection, courseAccuracy: CLLocationDirectionAccuracy, speed: CLLocationSpeed, speedAccuracy: CLLocationSpeedAccuracy, timestamp: NSDate, sourceInfo: CLLocationSourceInformation):CLLocation;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423504-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(value: CLLocationCoordinate2D): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423820-altitude
    altitude(): CLLocationDistance;
    setAltitude(value: CLLocationDistance): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/3861801-ellipsoidalaltitude
    ellipsoidalAltitude(): CLLocationDistance;
    setEllipsoidalAltitude(value: CLLocationDistance): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1616762-floor
    floor(): CLFloor;
    setFloor(value: CLFloor): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423599-horizontalaccuracy
    horizontalAccuracy(): CLLocationAccuracy;
    setHorizontalAccuracy(value: CLLocationAccuracy): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423550-verticalaccuracy
    verticalAccuracy(): CLLocationAccuracy;
    setVerticalAccuracy(value: CLLocationAccuracy): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423589-timestamp
    timestamp(): NSDate;
    setTimestamp(value: NSDate): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/3861803-sourceinformation
    sourceInformation(): CLLocationSourceInformation;
    setSourceInformation(value: CLLocationSourceInformation): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423689-distancefromlocation
    distanceFromLocation(location: CLLocation):CLLocationDistance;
    // https://developer.apple.com/documentation/corelocation/cllocation/1616758-getdistancefrom
    getDistanceFrom(location: CLLocation):CLLocationDistance;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423798-speed
    speed(): CLLocationSpeed;
    setSpeed(value: CLLocationSpeed): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/3524340-speedaccuracy
    speedAccuracy(): CLLocationSpeedAccuracy;
    setSpeedAccuracy(value: CLLocationSpeedAccuracy): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/1423832-course
    course(): CLLocationDirection;
    setCourse(value: CLLocationDirection): void;
    // https://developer.apple.com/documentation/corelocation/cllocation/3524338-courseaccuracy
    courseAccuracy(): CLLocationDirectionAccuracy;
    setCourseAccuracy(value: CLLocationDirectionAccuracy): void;
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
   * https://developer.apple.com/documentation/corelocation/clplacemark
   */
  interface CLPlacemark extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423818-initwithplacemark
    initWithPlacemark(placemark: CLPlacemark):CLPlacemark;
    // https://developer.apple.com/documentation/corelocation/clplacemark/2132103-placemarkwithlocation
    placemarkWithLocation_name_postalAddress(location: CLLocation, name: string | cocoascript.NSString, postalAddress: CNPostalAddress):CLPlacemark;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423603-location
    location(): CLLocation;
    setLocation(value: CLLocation): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423634-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423796-isocountrycode
    ISOcountryCode(): string | cocoascript.NSString;
    setISOcountryCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423800-country
    country(): string | cocoascript.NSString;
    setCountry(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423851-postalcode
    postalCode(): string | cocoascript.NSString;
    setPostalCode(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423628-administrativearea
    administrativeArea(): string | cocoascript.NSString;
    setAdministrativeArea(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423776-subadministrativearea
    subAdministrativeArea(): string | cocoascript.NSString;
    setSubAdministrativeArea(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423507-locality
    locality(): string | cocoascript.NSString;
    setLocality(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423794-sublocality
    subLocality(): string | cocoascript.NSString;
    setSubLocality(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423814-thoroughfare
    thoroughfare(): string | cocoascript.NSString;
    setThoroughfare(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423782-subthoroughfare
    subThoroughfare(): string | cocoascript.NSString;
    setSubThoroughfare(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423808-region
    region(): CLRegion;
    setRegion(value: CLRegion): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423707-timezone
    timeZone(): NSTimeZone;
    setTimeZone(value: NSTimeZone): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/2890749-postaladdress
    postalAddress(): CNPostalAddress;
    setPostalAddress(value: CNPostalAddress): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423605-addressdictionary
    addressDictionary(): NSDictionary;
    setAddressDictionary(value: NSDictionary): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423738-inlandwater
    inlandWater(): string | cocoascript.NSString;
    setInlandWater(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423619-ocean
    ocean(): string | cocoascript.NSString;
    setOcean(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clplacemark/1423673-areasofinterest
    areasOfInterest(): string | cocoascript.NSString;
    setAreasOfInterest(value: string | cocoascript.NSString): void;
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
   * https://developer.apple.com/documentation/corelocation/clheading
   */
  interface CLHeading extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clheading/1423763-magneticheading
    magneticHeading(): CLLocationDirection;
    setMagneticHeading(value: CLLocationDirection): void;
    // https://developer.apple.com/documentation/corelocation/clheading/1423568-trueheading
    trueHeading(): CLLocationDirection;
    setTrueHeading(value: CLLocationDirection): void;
    // https://developer.apple.com/documentation/corelocation/clheading/1423705-headingaccuracy
    headingAccuracy(): CLLocationDirection;
    setHeadingAccuracy(value: CLLocationDirection): void;
    // https://developer.apple.com/documentation/corelocation/clheading/1423525-timestamp
    timestamp(): NSDate;
    setTimestamp(value: NSDate): void;
    // https://developer.apple.com/documentation/corelocation/clheading/1423685-x
    x(): CLHeadingComponentValue;
    setX(value: CLHeadingComponentValue): void;
    // https://developer.apple.com/documentation/corelocation/clheading/1423617-y
    y(): CLHeadingComponentValue;
    setY(value: CLHeadingComponentValue): void;
    // https://developer.apple.com/documentation/corelocation/clheading/1423609-z
    z(): CLHeadingComponentValue;
    setZ(value: CLHeadingComponentValue): void;
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
   * https://developer.apple.com/documentation/corelocation/clregion
   */
  interface CLRegion extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clregion/1423583-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/clregion/1423566-notifyonentry
    notifyOnEntry(): boolean;
    setNotifyOnEntry(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/clregion/1423595-notifyonexit
    notifyOnExit(): boolean;
    setNotifyOnExit(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/clregion/1423681-initcircularregionwithcenter
    initCircularRegionWithCenter_radius_identifier(center: CLLocationCoordinate2D, radius: CLLocationDistance, identifier: string | cocoascript.NSString):CLRegion;
    // https://developer.apple.com/documentation/corelocation/clregion/1423828-containscoordinate
    containsCoordinate(coordinate: CLLocationCoordinate2D):boolean;
    // https://developer.apple.com/documentation/corelocation/clregion/1423691-center
    center(): CLLocationCoordinate2D;
    setCenter(value: CLLocationCoordinate2D): void;
    // https://developer.apple.com/documentation/corelocation/clregion/1423730-radius
    radius(): CLLocationDistance;
    setRadius(value: CLLocationDistance): void;
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
   * https://developer.apple.com/documentation/corelocation/clvisit
   */
  interface CLVisit extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clvisit/1614677-coordinate
    coordinate(): CLLocationCoordinate2D;
    setCoordinate(value: CLLocationCoordinate2D): void;
    // https://developer.apple.com/documentation/corelocation/clvisit/1614679-horizontalaccuracy
    horizontalAccuracy(): CLLocationAccuracy;
    setHorizontalAccuracy(value: CLLocationAccuracy): void;
    // https://developer.apple.com/documentation/corelocation/clvisit/1614681-arrivaldate
    arrivalDate(): NSDate;
    setArrivalDate(value: NSDate): void;
    // https://developer.apple.com/documentation/corelocation/clvisit/1614685-departuredate
    departureDate(): NSDate;
    setDepartureDate(value: NSDate): void;
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
   * https://developer.apple.com/documentation/corelocation/clfloor
   */
  interface CLFloor extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clfloor/1616759-level
    level(): NSInteger;
    setLevel(value: NSInteger): void;
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
   * https://developer.apple.com/documentation/corelocation/clbeacon
   */
  interface CLBeacon extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clbeacon/3183017-uuid
    UUID(): NSUUID;
    setUUID(value: NSUUID): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/1621418-major
    major(): NSNumber;
    setMajor(value: NSNumber): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/1621558-minor
    minor(): NSNumber;
    setMinor(value: NSNumber): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/1621508-proximityuuid
    proximityUUID(): NSUUID;
    setProximityUUID(value: NSUUID): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/1621554-proximity
    proximity(): CLProximity;
    setProximity(value: CLProximity): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/1621551-accuracy
    accuracy(): CLLocationAccuracy;
    setAccuracy(value: CLLocationAccuracy): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/1621557-rssi
    rssi(): NSInteger;
    setRssi(value: NSInteger): void;
    // https://developer.apple.com/documentation/corelocation/clbeacon/3183021-timestamp
    timestamp(): NSDate;
    setTimestamp(value: NSDate): void;
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
   * https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint
   */
  interface CLBeaconIdentityConstraint extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/3240599-initwithuuid
    initWithUUID(uuid: NSUUID):CLBeaconIdentityConstraint;
    // https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/3240600-initwithuuid
    initWithUUID_major(uuid: NSUUID, major: CLBeaconMajorValue):CLBeaconIdentityConstraint;
    // https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/3240601-initwithuuid
    initWithUUID_major_minor(uuid: NSUUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue):CLBeaconIdentityConstraint;
    // https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/3240598-uuid
    UUID(): NSUUID;
    setUUID(value: NSUUID): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/3240602-major
    major(): NSNumber;
    setMajor(value: NSNumber): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint/3240603-minor
    minor(): NSNumber;
    setMinor(value: NSNumber): void;
    //
    alloc():CLBeaconIdentityConstraint;
    //
    init():CLBeaconIdentityConstraint;
  }
}

declare const CLBeaconIdentityConstraint: cocoascript.CLBeaconIdentityConstraint;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/corelocation/cllocationsourceinformation
   */
  interface CLLocationSourceInformation extends NSObject {
    // https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/3861805-initwithsoftwaresimulationstate
    initWithSoftwareSimulationState_andExternalAccessoryState(isSoftware: boolean, isAccessory: boolean):CLLocationSourceInformation;
    // https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/3861806-isproducedbyaccessory
    isProducedByAccessory(): boolean;
    setIsProducedByAccessory(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/3861807-issimulatedbysoftware
    isSimulatedBySoftware(): boolean;
    setIsSimulatedBySoftware(value: boolean): void;
    //
    alloc():CLLocationSourceInformation;
    //
    init():CLLocationSourceInformation;
  }
}

declare const CLLocationSourceInformation: cocoascript.CLLocationSourceInformation;
declare namespace cocoascript {
  /**
   * The object that you use to start and stop the delivery of location-related events to your app.
   * https://developer.apple.com/documentation/corelocation/cllocationmanager
   */
  interface CLLocationManager extends NSObject {
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423677-significantlocationchangemonitor
    significantLocationChangeMonitoringAvailable():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423502-headingavailable
    headingAvailable():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3675588-authorizedforwidgetupdates
    authorizedForWidgetUpdates(): boolean;
    setAuthorizedForWidgetUpdates(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3600215-accuracyauthorization
    accuracyAuthorization(): CLAccuracyAuthorization;
    setAccuracyAuthorization(value: CLAccuracyAuthorization): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423654-ismonitoringavailableforclass
    isMonitoringAvailableForClass(regionClass: Class):boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620549-israngingavailable
    isRangingAvailable():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423648-locationservicesenabled
    locationServicesEnabled():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620561-headingavailable
    headingAvailable(): boolean;
    setHeadingAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620566-locationservicesenabled
    locationServicesEnabled(): boolean;
    setLocationServicesEnabled(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423564-regionmonitoringavailable
    regionMonitoringAvailable():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423585-regionmonitoringenabled
    regionMonitoringEnabled():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423792-delegate
    delegate(): CLLocationManagerDelegate;
    setDelegate(value: CLLocationManagerDelegate): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620562-requestwheninuseauthorization
    requestWhenInUseAuthorization():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620551-requestalwaysauthorization
    requestAlwaysAuthorization():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3600217-requesttemporaryfullaccuracyauth
    requestTemporaryFullAccuracyAuthorizationWithPurposeKey_completion(purposeKey: string | cocoascript.NSString, completion: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3600216-requesttemporaryfullaccuracyauth
    requestTemporaryFullAccuracyAuthorizationWithPurposeKey(purposeKey: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3563952-authorizationstatus
    authorizationStatus(): CLAuthorizationStatus;
    setAuthorizationStatus(value: CLAuthorizationStatus): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423523-authorizationstatus
    authorizationStatus():CLAuthorizationStatus;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423742-purpose
    purpose(): string | cocoascript.NSString;
    setPurpose(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423750-startupdatinglocation
    startUpdatingLocation():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423695-stopupdatinglocation
    stopUpdatingLocation():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620548-requestlocation
    requestLocation():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620553-pauseslocationupdatesautomatical
    pausesLocationUpdatesAutomatically(): boolean;
    setPausesLocationUpdatesAutomatically(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620568-allowsbackgroundlocationupdates
    allowsBackgroundLocationUpdates(): boolean;
    setAllowsBackgroundLocationUpdates(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/2923541-showsbackgroundlocationindicator
    showsBackgroundLocationIndicator(): boolean;
    setShowsBackgroundLocationIndicator(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620567-activitytype
    activityType(): CLActivityType;
    setActivityType(value: CLActivityType): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423500-distancefilter
    distanceFilter(): CLLocationDistance;
    setDistanceFilter(value: CLLocationDistance): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423836-desiredaccuracy
    desiredAccuracy(): CLLocationAccuracy;
    setDesiredAccuracy(value: CLLocationAccuracy): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423531-startmonitoringsignificantlocati
    startMonitoringSignificantLocationChanges():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423679-stopmonitoringsignificantlocatio
    stopMonitoringSignificantLocationChanges():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620558-startupdatingheading
    startUpdatingHeading():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620569-stopupdatingheading
    stopUpdatingHeading():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620563-dismissheadingcalibrationdisplay
    dismissHeadingCalibrationDisplay():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620550-headingfilter
    headingFilter(): CLLocationDegrees;
    setHeadingFilter(value: CLLocationDegrees): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620556-headingorientation
    headingOrientation(): CLDeviceOrientation;
    setHeadingOrientation(value: CLDeviceOrientation): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423656-startmonitoringforregion
    startMonitoringForRegion(region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423840-stopmonitoringforregion
    stopMonitoringForRegion(region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423790-monitoredregions
    monitoredRegions(): CLRegion;
    setMonitoredRegions(value: CLRegion): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423740-maximumregionmonitoringdistance
    maximumRegionMonitoringDistance(): CLLocationDistance;
    setMaximumRegionMonitoringDistance(value: CLLocationDistance): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620560-startmonitoringforregion
    startMonitoringForRegion_desiredAccuracy(region: CLRegion, accuracy: CLLocationAccuracy):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423804-requeststateforregion
    requestStateForRegion(region: CLRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3240607-startrangingbeaconssatisfyingcon
    startRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3240608-stoprangingbeaconssatisfyingcons
    stopRangingBeaconsSatisfyingConstraint(constraint: CLBeaconIdentityConstraint):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3240606-rangedbeaconconstraints
    rangedBeaconConstraints(): CLBeaconIdentityConstraint;
    setRangedBeaconConstraints(value: CLBeaconIdentityConstraint): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620554-startrangingbeaconsinregion
    startRangingBeaconsInRegion(region: CLBeaconRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620559-stoprangingbeaconsinregion
    stopRangingBeaconsInRegion(region: CLBeaconRegion):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620552-rangedregions
    rangedRegions(): CLRegion;
    setRangedRegions(value: CLRegion): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1618692-startmonitoringvisits
    startMonitoringVisits():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1618693-stopmonitoringvisits
    stopMonitoringVisits():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3746837-startmonitoringlocationpusheswit
    startMonitoringLocationPushesWithCompletion(completion: NSError):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/3746838-stopmonitoringlocationpushes
    stopMonitoringLocationPushes():void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423687-location
    location(): CLLocation;
    setLocation(value: CLLocation): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620555-heading
    heading(): CLHeading;
    setHeading(value: CLHeading): void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1423830-deferredlocationupdatesavailable
    deferredLocationUpdatesAvailable():boolean;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620547-allowdeferredlocationupdatesunti
    allowDeferredLocationUpdatesUntilTraveled_timeout(distance: CLLocationDistance, timeout: NSTimeInterval):void;
    // https://developer.apple.com/documentation/corelocation/cllocationmanager/1620565-disallowdeferredlocationupdates
    disallowDeferredLocationUpdates():void;
    //
    alloc():CLLocationManager;
    //
    init():CLLocationManager;
  }
}

declare const CLLocationManager: cocoascript.CLLocationManager;
// https://developer.apple.com/documentation/corelocation/cllocationpushserviceerrordomain
declare const CLLocationPushServiceErrorDomain: cocoascript.NSErrorDomain;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationpushserviceerror
  type CLLocationPushServiceError = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An interface for converting between geographic coordinates and place names.
   * https://developer.apple.com/documentation/corelocation/clgeocoder
   */
  interface CLGeocoder extends NSObject {
    // https://developer.apple.com/documentation/corelocation/clgeocoder/2908779-reversegeocodelocation
    reverseGeocodeLocation_preferredLocale_completionHandler(location: CLLocation, locale: NSLocale, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/1423621-reversegeocodelocation
    reverseGeocodeLocation_completionHandler(location: CLLocation, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/2890753-geocodeaddressstring
    geocodeAddressString_inRegion_preferredLocale_completionHandler(addressString: string | cocoascript.NSString, region: CLRegion, locale: NSLocale, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/1423509-geocodeaddressstring
    geocodeAddressString_completionHandler(addressString: string | cocoascript.NSString, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/1423591-geocodeaddressstring
    geocodeAddressString_inRegion_completionHandler(addressString: string | cocoascript.NSString, region: CLRegion, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/2890752-geocodepostaladdress
    geocodePostalAddress_completionHandler(postalAddress: CNPostalAddress, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/2890750-geocodepostaladdress
    geocodePostalAddress_preferredLocale_completionHandler(postalAddress: CNPostalAddress, locale: NSLocale, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/1423693-geocodeaddressdictionary
    geocodeAddressDictionary_completionHandler(addressDictionary: NSDictionary, completionHandler: CLGeocodeCompletionHandler):void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/1423562-cancelgeocode
    cancelGeocode():void;
    // https://developer.apple.com/documentation/corelocation/clgeocoder/1423765-geocoding
    geocoding(): boolean;
    setGeocoding(value: boolean): void;
    //
    alloc():CLGeocoder;
    //
    init():CLGeocoder;
  }
}

declare const CLGeocoder: cocoascript.CLGeocoder;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationspeed
  type CLLocationSpeed = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationdirection
  type CLLocationDirection = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationdistance
  type CLLocationDistance = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationaccuracy
  type CLLocationAccuracy = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationspeedaccuracy
  type CLLocationSpeedAccuracy = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationdirectionaccuracy
  type CLLocationDirectionAccuracy = number;
}
declare namespace cocoascript {
  interface CLLocationCoordinate2D {
  }
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clheadingcomponentvalue
  type CLHeadingComponentValue = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clregionstate
  type CLRegionState = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A circular geographic region, specified as a center point and radius.
   * https://developer.apple.com/documentation/corelocation/clcircularregion
   */
  interface CLCircularRegion extends CLRegion {
    // https://developer.apple.com/documentation/corelocation/clcircularregion/1423761-initwithcenter
    initWithCenter_radius_identifier(center: CLLocationCoordinate2D, radius: CLLocationDistance, identifier: string | cocoascript.NSString):CLCircularRegion;
    // https://developer.apple.com/documentation/corelocation/clcircularregion/1423601-center
    center(): CLLocationCoordinate2D;
    setCenter(value: CLLocationCoordinate2D): void;
    // https://developer.apple.com/documentation/corelocation/clcircularregion/1423734-radius
    radius(): CLLocationDistance;
    setRadius(value: CLLocationDistance): void;
    // https://developer.apple.com/documentation/corelocation/clcircularregion/1423697-containscoordinate
    containsCoordinate(coordinate: CLLocationCoordinate2D):boolean;
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
   * https://developer.apple.com/documentation/corelocation/clbeaconregion
   */
  interface CLBeaconRegion extends CLRegion {
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/3240605-initwithbeaconidentityconstraint
    initWithBeaconIdentityConstraint_identifier(beaconIdentityConstraint: CLBeaconIdentityConstraint, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/3183025-initwithuuid
    initWithUUID_identifier(uuid: NSUUID, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/3183026-initwithuuid
    initWithUUID_major_identifier(uuid: NSUUID, major: CLBeaconMajorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/3183027-initwithuuid
    initWithUUID_major_minor_identifier(uuid: NSUUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621534-initwithproximityuuid
    initWithProximityUUID_identifier(proximityUUID: NSUUID, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621475-initwithproximityuuid
    initWithProximityUUID_major_identifier(proximityUUID: NSUUID, major: CLBeaconMajorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621392-initwithproximityuuid
    initWithProximityUUID_major_minor_identifier(proximityUUID: NSUUID, major: CLBeaconMajorValue, minor: CLBeaconMinorValue, identifier: string | cocoascript.NSString):CLBeaconRegion;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/3183022-uuid
    UUID(): NSUUID;
    setUUID(value: NSUUID): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621536-major
    major(): NSNumber;
    setMajor(value: NSNumber): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621414-minor
    minor(): NSNumber;
    setMinor(value: NSNumber): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/3240604-beaconidentityconstraint
    beaconIdentityConstraint(): CLBeaconIdentityConstraint;
    setBeaconIdentityConstraint(value: CLBeaconIdentityConstraint): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621556-proximityuuid
    proximityUUID(): NSUUID;
    setProximityUUID(value: NSUUID): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621552-notifyentrystateondisplay
    notifyEntryStateOnDisplay(): boolean;
    setNotifyEntryStateOnDisplay(value: boolean): void;
    // https://developer.apple.com/documentation/corelocation/clbeaconregion/1621494-peripheraldatawithmeasuredpower
    peripheralDataWithMeasuredPower(measuredPower: NSNumber):CLBeaconRegion;
    //
    alloc():CLBeaconRegion;
    //
    init():CLBeaconRegion;
  }
}

declare const CLBeaconRegion: cocoascript.CLBeaconRegion;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clproximity
  type CLProximity = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clauthorizationstatus
  type CLAuthorizationStatus = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/claccuracyauthorization
  type CLAccuracyAuthorization = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clerror
  type CLError = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clactivitytype
  type CLActivityType = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/corelocation/cllocationdistancemax
declare const CLLocationDistanceMax: cocoascript.CLLocationDistance;
// https://developer.apple.com/documentation/corelocation/kcldistancefilternone
declare const kCLDistanceFilterNone: cocoascript.CLLocationDistance;
// https://developer.apple.com/documentation/corelocation/kclheadingfilternone
declare const kCLHeadingFilterNone: cocoascript.CLLocationDegrees;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cllocationdegrees
  type CLLocationDegrees = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/cldeviceorientation
  type CLDeviceOrientation = number;
}
// https://developer.apple.com/documentation/corelocation/cltimeintervalmax
declare const CLTimeIntervalMax: cocoascript.NSTimeInterval;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clgeocodecompletionhandler
  type CLGeocodeCompletionHandler = cocoascript.NSError;
}
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
declare const kCLLocationAccuracyBestForNavigation: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracybest
declare const kCLLocationAccuracyBest: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracynearesttenmeters
declare const kCLLocationAccuracyNearestTenMeters: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracyhundredmeters
declare const kCLLocationAccuracyHundredMeters: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracykilometer
declare const kCLLocationAccuracyKilometer: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracythreekilometers
declare const kCLLocationAccuracyThreeKilometers: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationaccuracyreduced
declare const kCLLocationAccuracyReduced: cocoascript.CLLocationAccuracy;
// https://developer.apple.com/documentation/corelocation/kcllocationcoordinate2dinvalid
declare const kCLLocationCoordinate2DInvalid: cocoascript.CLLocationCoordinate2D;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clbeaconmajorvalue
  type CLBeaconMajorValue = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/corelocation/clbeaconminorvalue
  type CLBeaconMinorValue = number;
}
