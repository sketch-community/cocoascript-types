declare namespace cocoascript {
/**
 * The latitude, longitude, and course information reported by the system.
 * doc://com.apple.documentation/documentation/corelocation/cllocation
 */
interface CLLocation extends NSObject {
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423660-initwithlatitude
  initWithLatitude_longitude(latitude: cocoascript.CLLocationDegrees, longitude: cocoascript.CLLocationDegrees):cocoascript.CLLocation;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423666-initwithcoordinate
  initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_timestamp(coordinate: cocoascript.CLLocationCoordinate2D, altitude: cocoascript.CLLocationDistance, hAccuracy: cocoascript.CLLocationAccuracy, vAccuracy: cocoascript.CLLocationAccuracy, timestamp: cocoascript.NSDate):cocoascript.CLLocation;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423718-initwithcoordinate
  initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_speed_timestamp(coordinate: cocoascript.CLLocationCoordinate2D, altitude: cocoascript.CLLocationDistance, hAccuracy: cocoascript.CLLocationAccuracy, vAccuracy: cocoascript.CLLocationAccuracy, course: cocoascript.CLLocationDirection, speed: cocoascript.CLLocationSpeed, timestamp: cocoascript.NSDate):cocoascript.CLLocation;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/3524339-initwithcoordinate
  initWithCoordinate_altitude_horizontalAccuracy_verticalAccuracy_course_courseAccuracy_speed_speedAccuracy_timestamp(coordinate: cocoascript.CLLocationCoordinate2D, altitude: cocoascript.CLLocationDistance, hAccuracy: cocoascript.CLLocationAccuracy, vAccuracy: cocoascript.CLLocationAccuracy, course: cocoascript.CLLocationDirection, courseAccuracy: cocoascript.CLLocationDirectionAccuracy, speed: cocoascript.CLLocationSpeed, speedAccuracy: cocoascript.CLLocationSpeedAccuracy, timestamp: cocoascript.NSDate):cocoascript.CLLocation;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423504-coordinate
  coordinate(): cocoascript.CLLocationCoordinate2D;
  setCoordinate(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423820-altitude
  altitude(): cocoascript.CLLocationDistance;
  setAltitude(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1616762-floor
  floor(): cocoascript.CLFloor;
  setFloor(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423599-horizontalaccuracy
  horizontalAccuracy(): cocoascript.CLLocationAccuracy;
  setHorizontalAccuracy(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423550-verticalaccuracy
  verticalAccuracy(): cocoascript.CLLocationAccuracy;
  setVerticalAccuracy(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/3524340-speedaccuracy
  speedAccuracy(): cocoascript.CLLocationSpeedAccuracy;
  setSpeedAccuracy(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/3524338-courseaccuracy
  courseAccuracy(): cocoascript.CLLocationDirectionAccuracy;
  setCourseAccuracy(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423589-timestamp
  timestamp(): cocoascript.NSDate;
  setTimestamp(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423689-distancefromlocation
  distanceFromLocation(location: cocoascript.CLLocation):cocoascript.CLLocationDistance;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1616758-getdistancefrom
  getDistanceFrom(location: cocoascript.CLLocation):cocoascript.CLLocationDistance;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423798-speed
  speed(): cocoascript.CLLocationSpeed;
  setSpeed(): void;
  // doc://com.apple.documentation/documentation/corelocation/cllocation/1423832-course
  course(): cocoascript.CLLocationDirection;
  setCourse(): void;
  // 
  alloc():cocoascript.CLLocation;
  // 
  init():cocoascript.CLLocation;
}
}
declare const CLLocation: cocoascript.CLLocation;

