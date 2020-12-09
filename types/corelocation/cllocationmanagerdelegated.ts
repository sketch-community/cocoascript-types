declare namespace cocoascript {
/**
 * The methods that you use to receive events from an associated location manager object.
 * doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate
 */
interface CLLocationManagerDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/3563956-locationmanagerdidchangeauthoriz
  locationManagerDidChangeAuthorization(manager: cocoascript.CLLocationManager):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423701-locationmanager
  locationManager_didChangeAuthorizationStatus(manager: cocoascript.CLLocationManager, status: cocoascript.CLAuthorizationStatus):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423786-locationmanager
  locationManager_didFailWithError(manager: cocoascript.CLLocationManager, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423615-locationmanager
  locationManager_didUpdateLocations(manager: cocoascript.CLLocationManager, locations: cocoascript.CLLocation):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423716-locationmanager
  locationManager_didUpdateToLocation_fromLocation(manager: cocoascript.CLLocationManager, newLocation: cocoascript.CLLocation, oldLocation: cocoascript.CLLocation):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423537-locationmanager
  locationManager_didFinishDeferredUpdatesWithError(manager: cocoascript.CLLocationManager, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621553-locationmanagerdidpauselocationu
  locationManagerDidPauseLocationUpdates(manager: cocoascript.CLLocationManager):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621512-locationmanagerdidresumelocation
  locationManagerDidResumeLocationUpdates(manager: cocoascript.CLLocationManager):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621555-locationmanager
  locationManager_didUpdateHeading(manager: cocoascript.CLLocationManager, newHeading: cocoascript.CLHeading):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621457-locationmanagershoulddisplayhead
  locationManagerShouldDisplayHeadingCalibration(manager: cocoascript.CLLocationManager):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423560-locationmanager
  locationManager_didEnterRegion(manager: cocoascript.CLLocationManager, region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423630-locationmanager
  locationManager_didExitRegion(manager: cocoascript.CLLocationManager, region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423570-locationmanager
  locationManager_didDetermineState_forRegion(manager: cocoascript.CLLocationManager, state: cocoascript.CLRegionState, region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423720-locationmanager
  locationManager_monitoringDidFailForRegion_withError(manager: cocoascript.CLLocationManager, region: cocoascript.CLRegion, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1423842-locationmanager
  locationManager_didStartMonitoringForRegion(manager: cocoascript.CLLocationManager, region: cocoascript.CLRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/3240610-locationmanager
  locationManager_didRangeBeacons_satisfyingConstraint(manager: cocoascript.CLLocationManager, beacons: cocoascript.CLBeacon, beaconConstraint: cocoascript.CLBeaconIdentityConstraint):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/3240609-locationmanager
  locationManager_didFailRangingBeaconsForConstraint_error(manager: cocoascript.CLLocationManager, beaconConstraint: cocoascript.CLBeaconIdentityConstraint, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621501-locationmanager
  locationManager_didRangeBeacons_inRegion(manager: cocoascript.CLLocationManager, beacons: cocoascript.CLBeacon, region: cocoascript.CLBeaconRegion):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621483-locationmanager
  locationManager_rangingBeaconsDidFailForRegion_withError(manager: cocoascript.CLLocationManager, region: cocoascript.CLBeaconRegion, error: cocoascript.NSError):void;
  // doc://com.apple.documentation/documentation/corelocation/cllocationmanagerdelegate/1621529-locationmanager
  locationManager_didVisit(manager: cocoascript.CLLocationManager, visit: cocoascript.CLVisit):void;
}
}

