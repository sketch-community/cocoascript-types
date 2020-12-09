declare namespace cocoascript {
/**
 * The status of a ride booked through a ride-booking service.
 * doc://com.apple.documentation/documentation/sirikit/inridestatus
 */
interface INRideStatus extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648484-rideidentifier
  rideIdentifier(): cocoascript.NSString;
  setRideIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648490-phase
  phase(): cocoascript.INRidePhase;
  setPhase(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/2127692-completionstatus
  completionStatus(): cocoascript.INRideCompletionStatus;
  setCompletionStatus(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648486-vehicle
  vehicle(): cocoascript.INRideVehicle;
  setVehicle(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648487-driver
  driver(): cocoascript.INRideDriver;
  setDriver(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648482-rideoption
  rideOption(): cocoascript.INRideOption;
  setRideOption(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/2799248-scheduledpickuptime
  scheduledPickupTime(): cocoascript.INDateComponentsRange;
  setScheduledPickupTime(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648483-estimatedpickupdate
  estimatedPickupDate(): cocoascript.NSDate;
  setEstimatedPickupDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/2211607-estimatedpickupenddate
  estimatedPickupEndDate(): cocoascript.NSDate;
  setEstimatedPickupEndDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648491-estimateddropoffdate
  estimatedDropOffDate(): cocoascript.NSDate;
  setEstimatedDropOffDate(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648493-pickuplocation
  pickupLocation(): cocoascript.CLPlacemark;
  setPickupLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648492-waypoints
  waypoints(): cocoascript.CLPlacemark;
  setWaypoints(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648488-dropofflocation
  dropOffLocation(): cocoascript.CLPlacemark;
  setDropOffLocation(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/1648485-useractivityforcancelinginapplic
  userActivityForCancelingInApplication(): cocoascript.NSUserActivity;
  setUserActivityForCancelingInApplication(): void;
  // doc://com.apple.documentation/documentation/sirikit/inridestatus/2127693-additionalactionactivities
  additionalActionActivities(): cocoascript.NSUserActivity;
  setAdditionalActionActivities(): void;
  // 
  alloc():cocoascript.INRideStatus;
  // 
  init():cocoascript.INRideStatus;
}
}
declare const INRideStatus: cocoascript.INRideStatus;

