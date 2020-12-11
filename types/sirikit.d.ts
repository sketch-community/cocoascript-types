declare namespace cocoascript {
  /**
   * An interaction between the user and your app involving an intent object.
   * doc://com.apple.documentation/documentation/sirikit/ininteraction
   */
  interface INInteraction extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1639259-initwithintent
    initWithIntent_response(intent: cocoascript.INIntent, response: cocoascript.INIntentResponse):cocoascript.INInteraction;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638928-intent
    intent(): cocoascript.INIntent;
    setIntent(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638817-intentresponse
    intentResponse(): cocoascript.INIntentResponse;
    setIntentResponse(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1690386-donateinteractionwithcompletion
    donateInteractionWithCompletion(completion: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638740-intenthandlingstatus
    intentHandlingStatus(): cocoascript.INIntentHandlingStatus;
    setIntentHandlingStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1639368-direction
    direction(): cocoascript.INInteractionDirection;
    setDirection(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638853-dateinterval
    dateInterval(): cocoascript.NSDateInterval;
    setDateInterval(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638924-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/1638832-groupidentifier
    groupIdentifier(): cocoascript.NSString;
    setGroupIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ininteraction/2908769-parametervalueforparameter
    parameterValueForParameter(parameter: cocoascript.INParameter):cocoascript.INInteraction;
    //
    alloc():cocoascript.INInteraction;
    //
    init():cocoascript.INInteraction;
  }
}

declare const INInteraction: cocoascript.INInteraction;
declare namespace cocoascript {
  /**
   * The handler interface that snoozes tasks in a task list.
   * doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling
   */
  interface INSnoozeTasksIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141847-resolvenexttriggertimeforsnoozet
    resolveNextTriggerTimeForSnoozeTasks_withCompletion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141848-resolvetasksforsnoozetasks
    resolveTasksForSnoozeTasks_withCompletion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INSnoozeTasksTaskResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141845-confirmsnoozetasks
    confirmSnoozeTasks_completion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INSnoozeTasksIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintenthandling/3141846-handlesnoozetasks
    handleSnoozeTasks_completion(intent: cocoascript.INSnoozeTasksIntent, completion: cocoascript.INSnoozeTasksIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s audio source.
   * doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling
   */
  interface INSetAudioSourceInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1902349-resolveaudiosourceforsetaudiosou
    resolveAudioSourceForSetAudioSourceInCar_withCompletion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INCarAudioSourceResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1902350-resolverelativeaudiosourcerefere
    resolveRelativeAudioSourceReferenceForSetAudioSourceInCar_withCompletion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INRelativeReferenceResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1648408-confirmsetaudiosourceincar
    confirmSetAudioSourceInCar_completion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INSetAudioSourceInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintenthandling/1648405-handlesetaudiosourceincar
    handleSetAudioSourceInCar_completion(intent: cocoascript.INSetAudioSourceInCarIntent, completion: cocoascript.INSetAudioSourceInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to delete tasks from a task list.
   * doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling
   */
  interface INDeleteTasksIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141692-resolvetasklistfordeletetasks
    resolveTaskListForDeleteTasks_withCompletion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksTaskListResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141693-resolvetasksfordeletetasks
    resolveTasksForDeleteTasks_withCompletion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksTaskResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141690-confirmdeletetasks
    confirmDeleteTasks_completion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintenthandling/3141691-handledeletetasks
    handleDeleteTasks_completion(intent: cocoascript.INDeleteTasksIntent, completion: cocoascript.INDeleteTasksIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles modifying message attributes.
   * doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling
   */
  interface INSetMessageAttributeIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling/1902387-resolveattributeforsetmessageatt
    resolveAttributeForSetMessageAttribute_withCompletion(intent: cocoascript.INSetMessageAttributeIntent, completion: cocoascript.INMessageAttributeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling/1829397-confirmsetmessageattribute
    confirmSetMessageAttribute_completion(intent: cocoascript.INSetMessageAttributeIntent, completion: cocoascript.INSetMessageAttributeIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintenthandling/1829394-handlesetmessageattribute
    handleSetMessageAttribute_completion(intent: cocoascript.INSetMessageAttributeIntent, completion: cocoascript.INSetMessageAttributeIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for saving vehicle environment settings to a user-specified profile.
   * doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling
   */
  interface INSaveProfileInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2102341-resolveprofilenumberforsaveprofi
    resolveProfileNumberForSaveProfileInCar_withCompletion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2727144-resolveprofilenameforsaveprofile
    resolveProfileNameForSaveProfileInCar_withCompletion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2102344-confirmsaveprofileincar
    confirmSaveProfileInCar_completion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INSaveProfileInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintenthandling/2102342-handlesaveprofileincar
    handleSaveProfileInCar_completion(intent: cocoascript.INSaveProfileInCarIntent, completion: cocoascript.INSaveProfileInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for transferring money from the current user’s account to a different user’s account.
   * doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling
   */
  interface INSendPaymentIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638813-resolvepayeeforsendpayment
    resolvePayeeForSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentPayeeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638362-resolvecurrencyamountforsendpaym
    resolveCurrencyAmountForSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentCurrencyAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1906905-resolvenoteforsendpayment
    resolveNoteForSendPayment_withCompletion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1906907-resolvepayeeforsendpayment
    resolvePayeeForSendPayment_withCompletion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1906906-resolvecurrencyamountforsendpaym
    resolveCurrencyAmountForSendPayment_withCompletion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INCurrencyAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638929-confirmsendpayment
    confirmSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintenthandling/1638809-handlesendpayment
    handleSendPayment_completion(intent: cocoascript.INSendPaymentIntent, completion: cocoascript.INSendPaymentIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for creating notes.
   * doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling
   */
  interface INCreateNoteIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874064-resolvetitleforcreatenote
    resolveTitleForCreateNote_withCompletion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874061-resolvecontentforcreatenote
    resolveContentForCreateNote_withCompletion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INNoteContentResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874057-resolvegroupnameforcreatenote
    resolveGroupNameForCreateNote_withCompletion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874062-confirmcreatenote
    confirmCreateNote_completion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INCreateNoteIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintenthandling/2874059-handlecreatenote
    handleCreateNote_completion(intent: cocoascript.INCreateNoteIntent, completion: cocoascript.INCreateNoteIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for booking a ride for the user.
   * doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling
   */
  interface INRequestRideIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902428-resolvepickuplocationforrequestr
    resolvePickupLocationForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/2838715-resolvescheduledpickuptimeforreq
    resolveScheduledPickupTimeForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902427-resolvedropofflocationforrequest
    resolveDropOffLocationForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902429-resolverideoptionnameforrequestr
    resolveRideOptionNameForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1902425-resolvepartysizeforrequestride
    resolvePartySizeForRequestRide_withCompletion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1649612-confirmrequestride
    confirmRequestRide_completion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INRequestRideIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintenthandling/1649625-handlerequestride
    handleRequestRide_completion(intent: cocoascript.INRequestRideIntent, completion: cocoascript.INRequestRideIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching and delivering the user’s current reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1845247-resolverestaurantforgetusercurre
    resolveRestaurantForGetUserCurrentRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1845251-confirmgetusercurrentrestaurantr
    confirmGetUserCurrentRestaurantReservationBookings_completion(intent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent, completion: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1650031-handlegetusercurrentrestaurantre
    handleGetUserCurrentRestaurantReservationBookings_completion(intent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent, completion: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles requests to resume a workout.
   * doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling
   */
  interface INResumeWorkoutIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling/1902397-resolveworkoutnameforresumeworko
    resolveWorkoutNameForResumeWorkout_withCompletion(intent: cocoascript.INResumeWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling/1638905-confirmresumeworkout
    confirmResumeWorkout_completion(intent: cocoascript.INResumeWorkoutIntent, completion: cocoascript.INResumeWorkoutIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintenthandling/1639077-handleresumeworkout
    handleResumeWorkout_completion(intent: cocoascript.INResumeWorkoutIntent, completion: cocoascript.INResumeWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for appending content to a note.
   * doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling
   */
  interface INAppendToNoteIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2873750-resolvecontentforappendtonote
    resolveContentForAppendToNote_withCompletion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INNoteContentResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2878105-resolvetargetnoteforappendtonote
    resolveTargetNoteForAppendToNote_withCompletion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INNoteResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2873748-confirmappendtonote
    confirmAppendToNote_completion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INAppendToNoteIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintenthandling/2873753-handleappendtonote
    handleAppendToNote_completion(intent: cocoascript.INAppendToNoteIntent, completion: cocoascript.INAppendToNoteIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s defroster settings.
   * doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling
   */
  interface INSetDefrosterSettingsInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1902493-resolveenableforsetdefrostersett
    resolveEnableForSetDefrosterSettingsInCar_withCompletion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1902494-resolvedefrosterforsetdefrosters
    resolveDefrosterForSetDefrosterSettingsInCar_withCompletion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INCarDefrosterResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/3019573-resolvecarnameforsetdefrosterset
    resolveCarNameForSetDefrosterSettingsInCar_withCompletion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1649421-confirmsetdefrostersettingsincar
    confirmSetDefrosterSettingsInCar_completion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INSetDefrosterSettingsInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintenthandling/1649423-handlesetdefrostersettingsincar
    handleSetDefrosterSettingsInCar_completion(intent: cocoascript.INSetDefrosterSettingsInCarIntent, completion: cocoascript.INSetDefrosterSettingsInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to complete a workout.
   * doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling
   */
  interface INEndWorkoutIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling/1902506-resolveworkoutnameforendworkout
    resolveWorkoutNameForEndWorkout_withCompletion(intent: cocoascript.INEndWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling/1638404-confirmendworkout
    confirmEndWorkout_completion(intent: cocoascript.INEndWorkoutIntent, completion: cocoascript.INEndWorkoutIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintenthandling/1638144-handleendworkout
    handleEndWorkout_completion(intent: cocoascript.INEndWorkoutIntent, completion: cocoascript.INEndWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to pause a workout.
   * doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling
   */
  interface INPauseWorkoutIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling/1902354-resolveworkoutnameforpauseworkou
    resolveWorkoutNameForPauseWorkout_withCompletion(intent: cocoascript.INPauseWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling/1638659-confirmpauseworkout
    confirmPauseWorkout_completion(intent: cocoascript.INPauseWorkoutIntent, completion: cocoascript.INPauseWorkoutIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintenthandling/1638187-handlepauseworkout
    handlePauseWorkout_completion(intent: cocoascript.INPauseWorkoutIntent, completion: cocoascript.INPauseWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1845246-resolverestaurantforgetavailable
    resolveRestaurantForGetAvailableRestaurantReservationBookingDefaults_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1845257-confirmgetavailablerestaurantres
    confirmGetAvailableRestaurantReservationBookingDefaults_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1650055-handlegetavailablerestaurantrese
    handleGetAvailableRestaurantReservationBookingDefaults_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to start audio and video calls.
   * doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling
   */
  interface INStartCallIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165949-resolvecallcapabilityforstartcal
    resolveCallCapabilityForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallCallCapabilityResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165950-resolvecontactsforstartcall
    resolveContactsForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallContactResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165951-resolvedestinationtypeforstartca
    resolveDestinationTypeForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INCallDestinationTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165947-confirmstartcall
    confirmStartCall_completion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3165948-handlestartcall
    handleStartCall_completion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INStartCallIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintenthandling/3649678-resolvecallrecordtocallbackforst
    resolveCallRecordToCallBackForStartCall_withCompletion(intent: cocoascript.INStartCallIntent, completion: cocoascript.INCallRecordResolutionResult):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for hiding portions of the default interfaces that Siri provides.
   * doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding
   */
  interface INUIHostedViewSiriProviding extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding/1649161-displaysmap
    displaysMap(): cocoascript.BOOL;
    setDisplaysMap(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding/1649151-displaysmessage
    displaysMessage(): cocoascript.BOOL;
    setDisplaysMessage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewsiriproviding/2279035-displayspaymenttransaction
    displaysPaymentTransaction(): cocoascript.BOOL;
    setDisplaysPaymentTransaction(): void;
  }
}
declare namespace cocoascript {
  /**
   * Pronunciation hints for strings used in a spoken interface.
   * doc://com.apple.documentation/documentation/sirikit/inspeakable
   */
  interface INSpeakable extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2092306-spokenphrase
    spokenPhrase(): cocoascript.NSString;
    setSpokenPhrase(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2092309-pronunciationhint
    pronunciationHint(): cocoascript.NSString;
    setPronunciationHint(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2873318-vocabularyidentifier
    vocabularyIdentifier(): cocoascript.NSString;
    setVocabularyIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2092308-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspeakable/2873673-alternativespeakablematches
    alternativeSpeakableMatches(): cocoascript.INSpeakable;
    setAlternativeSpeakableMatches(): void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for initiating an audio call from your app.
   * doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling
   */
  interface INStartAudioCallIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/1902341-resolvecontactsforstartaudiocall
    resolveContactsForStartAudioCall_withCompletion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/2873772-resolvedestinationtypeforstartau
    resolveDestinationTypeForStartAudioCall_withCompletion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INCallDestinationTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/1638634-confirmstartaudiocall
    confirmStartAudioCall_completion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INStartAudioCallIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintenthandling/1639088-handlestartaudiocall
    handleStartAudioCall_completion(intent: cocoascript.INStartAudioCallIntent, completion: cocoascript.INStartAudioCallIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s climate control settings.
   * doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling
   */
  interface INSetClimateSettingsInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905635-resolveenablefanforsetclimateset
    resolveEnableFanForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905614-resolveenableairconditionerforse
    resolveEnableAirConditionerForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905609-resolveenableclimatecontrolforse
    resolveEnableClimateControlForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905617-resolveenableautomodeforsetclima
    resolveEnableAutoModeForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905621-resolveaircirculationmodeforsetc
    resolveAirCirculationModeForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INCarAirCirculationModeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905633-resolvefanspeedindexforsetclimat
    resolveFanSpeedIndexForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905607-resolvefanspeedpercentageforsetc
    resolveFanSpeedPercentageForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INDoubleResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905619-resolverelativefanspeedsettingfo
    resolveRelativeFanSpeedSettingForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INRelativeSettingResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905630-resolvetemperatureforsetclimates
    resolveTemperatureForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INTemperatureResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1905623-resolverelativetemperaturesettin
    resolveRelativeTemperatureSettingForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INRelativeSettingResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/2102613-resolveclimatezoneforsetclimates
    resolveClimateZoneForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INCarSeatResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/3019570-resolvecarnameforsetclimatesetti
    resolveCarNameForSetClimateSettingsInCar_withCompletion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1649053-confirmsetclimatesettingsincar
    confirmSetClimateSettingsInCar_completion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INSetClimateSettingsInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintenthandling/1649065-handlesetclimatesettingsincar
    handleSetClimateSettingsInCar_completion(intent: cocoascript.INSetClimateSettingsInCarIntent, completion: cocoascript.INSetClimateSettingsInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for displaying your app’s visual codes.
   * doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling
   */
  interface INGetVisualCodeIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling/2873903-resolvevisualcodetypeforgetvisua
    resolveVisualCodeTypeForGetVisualCode_withCompletion(intent: cocoascript.INGetVisualCodeIntent, completion: cocoascript.INVisualCodeTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling/2873902-confirmgetvisualcode
    confirmGetVisualCode_completion(intent: cocoascript.INGetVisualCodeIntent, completion: cocoascript.INGetVisualCodeIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintenthandling/2873897-handlegetvisualcode
    handleGetVisualCode_completion(intent: cocoascript.INGetVisualCodeIntent, completion: cocoascript.INGetVisualCodeIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching for bills associated with the user.
   * doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling
   */
  interface INSearchForBillsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798972-resolvebillpayeeforsearchforbill
    resolveBillPayeeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INBillPayeeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798982-resolvebilltypeforsearchforbills
    resolveBillTypeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INBillTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798978-resolveduedaterangeforsearchforb
    resolveDueDateRangeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798979-resolvepaymentdaterangeforsearch
    resolvePaymentDateRangeForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798981-resolvestatusforsearchforbills
    resolveStatusForSearchForBills_withCompletion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INPaymentStatusResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798977-confirmsearchforbills
    confirmSearchForBills_completion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INSearchForBillsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintenthandling/2798973-handlesearchforbills
    handleSearchForBills_completion(intent: cocoascript.INSearchForBillsIntent, completion: cocoascript.INSearchForBillsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for delivering a request for payment from another user of your app.
   * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling
   */
  interface INRequestPaymentIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638225-resolvepayerforrequestpayment
    resolvePayerForRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentPayerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638148-resolvecurrencyamountforrequestp
    resolveCurrencyAmountForRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentCurrencyAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1902486-resolvenoteforrequestpayment
    resolveNoteForRequestPayment_withCompletion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1902484-resolvepayerforrequestpayment
    resolvePayerForRequestPayment_withCompletion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1902487-resolvecurrencyamountforrequestp
    resolveCurrencyAmountForRequestPayment_withCompletion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INCurrencyAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638330-confirmrequestpayment
    confirmRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintenthandling/1638420-handlerequestpayment
    handleRequestPayment_completion(intent: cocoascript.INRequestPaymentIntent, completion: cocoascript.INRequestPaymentIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a radio station.
   * doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling
   */
  interface INSetRadioStationIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906895-resolveradiotypeforsetradiostati
    resolveRadioTypeForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INRadioTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906892-resolvefrequencyforsetradiostati
    resolveFrequencyForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INDoubleResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906896-resolvestationnameforsetradiosta
    resolveStationNameForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906894-resolvechannelforsetradiostation
    resolveChannelForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1906893-resolvepresetnumberforsetradiost
    resolvePresetNumberForSetRadioStation_withCompletion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1649479-confirmsetradiostation
    confirmSetRadioStation_completion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INSetRadioStationIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintenthandling/1649474-handlesetradiostation
    handleSetRadioStation_completion(intent: cocoascript.INSetRadioStationIntent, completion: cocoascript.INSetRadioStationIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to start a workout.
   * doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling
   */
  interface INStartWorkoutIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902501-resolveworkoutnameforstartworkou
    resolveWorkoutNameForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902504-resolvegoalvalueforstartworkout
    resolveGoalValueForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INDoubleResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902503-resolveworkoutgoalunittypeforsta
    resolveWorkoutGoalUnitTypeForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INWorkoutGoalUnitTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902505-resolveworkoutlocationtypeforsta
    resolveWorkoutLocationTypeForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INWorkoutLocationTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1902502-resolveisopenendedforstartworkou
    resolveIsOpenEndedForStartWorkout_withCompletion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1639089-confirmstartworkout
    confirmStartWorkout_completion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INStartWorkoutIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintenthandling/1638639-handlestartworkout
    handleStartWorkout_completion(intent: cocoascript.INStartWorkoutIntent, completion: cocoascript.INStartWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for initiating a video call from your app.
   * doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling
   */
  interface INStartVideoCallIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling/1902444-resolvecontactsforstartvideocall
    resolveContactsForStartVideoCall_withCompletion(intent: cocoascript.INStartVideoCallIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling/1639163-confirmstartvideocall
    confirmStartVideoCall_completion(intent: cocoascript.INStartVideoCallIntent, completion: cocoascript.INStartVideoCallIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintenthandling/1639069-handlestartvideocall
    handleStartVideoCall_completion(intent: cocoascript.INStartVideoCallIntent, completion: cocoascript.INStartVideoCallIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate
   */
  interface INUIAddVoiceShortcutViewControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate/2968470-addvoiceshortcutviewcontroller
    addVoiceShortcutViewController_didFinishWithVoiceShortcut_error(controller: cocoascript.INUIAddVoiceShortcutViewController, voiceShortcut: cocoascript.INVoiceShortcut, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate/2968471-addvoiceshortcutviewcontrollerdi
    addVoiceShortcutViewControllerDidCancel(controller: cocoascript.INUIAddVoiceShortcutViewController):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting to activate the car’s signals.
   * doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling
   */
  interface INActivateCarSignalIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799256-resolvecarnameforactivatecarsign
    resolveCarNameForActivateCarSignal_withCompletion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799254-resolvesignalsforactivatecarsign
    resolveSignalsForActivateCarSignal_withCompletion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INCarSignalOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799259-confirmactivatecarsignal
    confirmActivateCarSignal_completion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INActivateCarSignalIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintenthandling/2799253-handleactivatecarsignal
    handleActivateCarSignal_completion(intent: cocoascript.INActivateCarSignalIntent, completion: cocoascript.INActivateCarSignalIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s photos.
   * doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling
   */
  interface INSearchForPhotosIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902404-resolvedatecreatedforsearchforph
    resolveDateCreatedForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902403-resolvelocationcreatedforsearchf
    resolveLocationCreatedForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902402-resolvepeopleinphotoforsearchfor
    resolvePeopleInPhotoForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902399-resolvealbumnameforsearchforphot
    resolveAlbumNameForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1902398-resolvesearchtermsforsearchforph
    resolveSearchTermsForSearchForPhotos_withCompletion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1638989-confirmsearchforphotos
    confirmSearchForPhotos_completion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INSearchForPhotosIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintenthandling/1638466-handlesearchforphotos
    handleSearchForPhotos_completion(intent: cocoascript.INSearchForPhotosIntent, completion: cocoascript.INSearchForPhotosIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for providing updated status for an active ride.
   * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponseobserver
   */
  interface INGetRideStatusIntentResponseObserver extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponseobserver/1639309-getridestatusresponsedidupdate
    getRideStatusResponseDidUpdate(response: cocoascript.INGetRideStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for canceling a previously booked ride.
   * doc://com.apple.documentation/documentation/sirikit/incancelrideintenthandling
   */
  interface INCancelRideIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintenthandling/2875585-confirmcancelride
    confirmCancelRide_completion(intent: cocoascript.INCancelRideIntent, completion: cocoascript.INCancelRideIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintenthandling/2875587-handlecancelride
    handleCancelRide_completion(intent: cocoascript.INCancelRideIntent, completion: cocoascript.INCancelRideIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting to lock or unlock a car.
   * doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling
   */
  interface INSetCarLockStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799287-resolvecarnameforsetcarlockstatu
    resolveCarNameForSetCarLockStatus_withCompletion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799281-resolvelockedforsetcarlockstatus
    resolveLockedForSetCarLockStatus_withCompletion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799284-confirmsetcarlockstatus
    confirmSetCarLockStatus_completion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INSetCarLockStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintenthandling/2799286-handlesetcarlockstatus
    handleSetCarLockStatus_completion(intent: cocoascript.INSetCarLockStatusIntent, completion: cocoascript.INSetCarLockStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles media search requests.
   * doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling
   */
  interface INSearchForMediaIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling/3180154-resolvemediaitemsforsearchformed
    resolveMediaItemsForSearchForMedia_withCompletion(intent: cocoascript.INSearchForMediaIntent, completion: cocoascript.INSearchForMediaMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling/3074297-confirmsearchformedia
    confirmSearchForMedia_completion(intent: cocoascript.INSearchForMediaIntent, completion: cocoascript.INSearchForMediaIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintenthandling/3074298-handlesearchformedia
    handleSearchForMedia_completion(intent: cocoascript.INSearchForMediaIntent, completion: cocoascript.INSearchForMediaIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting a car’s current power level.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling
   */
  interface INGetCarPowerLevelStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799247-resolvecarnameforgetcarpowerleve
    resolveCarNameForGetCarPowerLevelStatus_withCompletion(intent: cocoascript.INGetCarPowerLevelStatusIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799244-confirmgetcarpowerlevelstatus
    confirmGetCarPowerLevelStatus_completion(intent: cocoascript.INGetCarPowerLevelStatusIntent, completion: cocoascript.INGetCarPowerLevelStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799241-handlegetcarpowerlevelstatus
    handleGetCarPowerLevelStatus_completion(intent: cocoascript.INGetCarPowerLevelStatusIntent, completion: cocoascript.INGetCarPowerLevelStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/3552166-startsendingupdatesforgetcarpowe
    startSendingUpdatesForGetCarPowerLevelStatus_toObserver(intent: cocoascript.INGetCarPowerLevelStatusIntent, observer: cocoascript.INGetCarPowerLevelStatusIntentResponseObserver):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/3552167-stopsendingupdatesforgetcarpower
    stopSendingUpdatesForGetCarPowerLevelStatus(intent: cocoascript.INGetCarPowerLevelStatusIntent):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.
   * doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate
   */
  interface INUIEditVoiceShortcutViewControllerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968477-editvoiceshortcutviewcontroller
    editVoiceShortcutViewController_didUpdateVoiceShortcut_error(controller: cocoascript.INUIEditVoiceShortcutViewController, voiceShortcut: cocoascript.INVoiceShortcut, error: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968476-editvoiceshortcutviewcontroller
    editVoiceShortcutViewController_didDeleteVoiceShortcutWithIdentifier(controller: cocoascript.INUIEditVoiceShortcutViewController, deletedVoiceShortcutIdentifier: cocoascript.NSUUID):void;
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968478-editvoiceshortcutviewcontrollerd
    editVoiceShortcutViewControllerDidCancel(controller: cocoascript.INUIEditVoiceShortcutViewController):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching information about the person making a reservation.
   * doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintenthandling
   */
  interface INGetRestaurantGuestIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintenthandling/1845238-confirmgetrestaurantguest
    confirmGetRestaurantGuest_completion(guestIntent: cocoascript.INGetRestaurantGuestIntent, completion: cocoascript.INGetRestaurantGuestIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintenthandling/1778395-handlegetrestaurantguest
    handleGetRestaurantGuest_completion(intent: cocoascript.INGetRestaurantGuestIntent, completion: cocoascript.INGetRestaurantGuestIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching for account information.
   * doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling
   */
  interface INSearchForAccountsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867913-resolveaccountnicknameforsearchf
    resolveAccountNicknameForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867911-resolveaccounttypeforsearchforac
    resolveAccountTypeForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INAccountTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867920-resolveorganizationnameforsearch
    resolveOrganizationNameForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867915-resolverequestedbalancetypeforse
    resolveRequestedBalanceTypeForSearchForAccounts_withCompletion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INBalanceTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867908-confirmsearchforaccounts
    confirmSearchForAccounts_completion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSearchForAccountsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintenthandling/2867909-handlesearchforaccounts
    handleSearchForAccounts_completion(intent: cocoascript.INSearchForAccountsIntent, completion: cocoascript.INSearchForAccountsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for providing updates of a vehicle’s power level.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponseobserver
   */
  interface INGetCarPowerLevelStatusIntentResponseObserver extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponseobserver/3552169-getcarpowerlevelstatusresponsedi
    getCarPowerLevelStatusResponseDidUpdate(response: cocoascript.INGetCarPowerLevelStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for restoring vehicle environment settings from a user-specified profile.
   * doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling
   */
  interface INSetProfileInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102251-resolveprofilenumberforsetprofil
    resolveProfileNumberForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2726870-resolveprofilenameforsetprofilei
    resolveProfileNameForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/3019576-resolvecarnameforsetprofileincar
    resolveCarNameForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102247-resolvedefaultprofileforsetprofi
    resolveDefaultProfileForSetProfileInCar_withCompletion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102249-confirmsetprofileincar
    confirmSetProfileInCar_completion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INSetProfileInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintenthandling/2102246-handlesetprofileincar
    handleSetProfileInCar_completion(intent: cocoascript.INSetProfileInCarIntent, completion: cocoascript.INSetProfileInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for presenting custom content in the Siri and Maps interfaces.
   * doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontrolling
   */
  interface INUIHostedViewControlling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontrolling/2915897-configureviewforparameters
    configureViewForParameters_ofInteraction_interactiveBehavior_context_completion(parameters: cocoascript.INParameter, interaction: cocoascript.INInteraction, interactiveBehavior: cocoascript.INUIInteractiveBehavior, context: cocoascript.INUIHostedViewContext, completion: cocoascript.CGSize):void;
    // doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontrolling/1649168-configurewithinteraction
    configureWithInteraction_context_completion(interaction: cocoascript.INInteraction, context: cocoascript.INUIHostedViewContext, completion: cocoascript.CGSize):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching the status of the user’s current ride.
   * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling
   */
  interface INGetRideStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649849-confirmgetridestatus
    confirmGetRideStatus_completion(intent: cocoascript.INGetRideStatusIntent, completion: cocoascript.INGetRideStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649848-handlegetridestatus
    handleGetRideStatus_completion(intent: cocoascript.INGetRideStatusIntent, completion: cocoascript.INGetRideStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649845-startsendingupdatesforgetridesta
    startSendingUpdatesForGetRideStatus_toObserver(intent: cocoascript.INGetRideStatusIntent, observer: cocoascript.INGetRideStatusIntentResponseObserver):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintenthandling/1649844-stopsendingupdatesforgetridestat
    stopSendingUpdatesForGetRideStatus(intent: cocoascript.INGetRideStatusIntent):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching for notes, tasks, and reminders.
   * doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling
   */
  interface INSearchForNotebookItemsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875695-resolveitemtypeforsearchfornoteb
    resolveItemTypeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INNotebookItemTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875660-resolvetitleforsearchfornotebook
    resolveTitleForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875692-resolvecontentforsearchfornotebo
    resolveContentForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875583-resolvestatusforsearchfornoteboo
    resolveStatusForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INTaskStatusResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875597-resolvedatesearchtypeforsearchfo
    resolveDateSearchTypeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INDateSearchTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875698-resolvedatetimeforsearchfornoteb
    resolveDateTimeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875630-resolvelocationforsearchfornoteb
    resolveLocationForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875637-resolvelocationsearchtypeforsear
    resolveLocationSearchTypeForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INLocationSearchTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/3141832-resolvetaskpriorityforsearchforn
    resolveTaskPriorityForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INTaskPriorityResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/3141833-resolvetemporaleventtriggertypes
    resolveTemporalEventTriggerTypesForSearchForNotebookItems_withCompletion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INTemporalEventTriggerTypeOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875580-confirmsearchfornotebookitems
    confirmSearchForNotebookItems_completion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INSearchForNotebookItemsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintenthandling/2875649-handlesearchfornotebookitems
    handleSearchForNotebookItems_completion(intent: cocoascript.INSearchForNotebookItemsIntent, completion: cocoascript.INSearchForNotebookItemsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching the list of rides currently available from your ride-booking service.
   * doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling
   */
  interface INListRideOptionsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1902396-resolvepickuplocationforlistride
    resolvePickupLocationForListRideOptions_withCompletion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1902395-resolvedropofflocationforlistrid
    resolveDropOffLocationForListRideOptions_withCompletion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1648128-confirmlistrideoptions
    confirmListRideOptions_completion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INListRideOptionsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintenthandling/1648129-handlelistrideoptions
    handleListRideOptions_completion(intent: cocoascript.INListRideOptionsIntent, completion: cocoascript.INListRideOptionsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles requests to cancel a workout.
   * doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling
   */
  interface INCancelWorkoutIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling/1902365-resolveworkoutnameforcancelworko
    resolveWorkoutNameForCancelWorkout_withCompletion(intent: cocoascript.INCancelWorkoutIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling/1639032-confirmcancelworkout
    confirmCancelWorkout_completion(intent: cocoascript.INCancelWorkoutIntent, completion: cocoascript.INCancelWorkoutIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintenthandling/1638479-handlecancelworkout
    handleCancelWorkout_completion(intent: cocoascript.INCancelWorkoutIntent, completion: cocoascript.INCancelWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting a list of the user’s electric vehicles.
   * doc://com.apple.documentation/documentation/sirikit/inlistcarsintenthandling
   */
  interface INListCarsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintenthandling/3552191-confirmlistcars
    confirmListCars_completion(intent: cocoascript.INListCarsIntent, completion: cocoascript.INListCarsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintenthandling/3552192-handlelistcars
    handleListCars_completion(intent: cocoascript.INListCarsIntent, completion: cocoascript.INListCarsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for creating task lists.
   * doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling
   */
  interface INCreateTaskListIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873993-resolvetitleforcreatetasklist
    resolveTitleForCreateTaskList_withCompletion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873991-resolvetasktitlesforcreatetaskli
    resolveTaskTitlesForCreateTaskList_withCompletion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873989-resolvegroupnameforcreatetasklis
    resolveGroupNameForCreateTaskList_withCompletion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873990-confirmcreatetasklist
    confirmCreateTaskList_completion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INCreateTaskListIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintenthandling/2873996-handlecreatetasklist
    handleCreateTaskList_completion(intent: cocoascript.INCreateTaskListIntent, completion: cocoascript.INCreateTaskListIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for sending ride feedback to your service.
   * doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintenthandling
   */
  interface INSendRideFeedbackIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintenthandling/2875665-confirmsendridefeedback
    confirmSendRideFeedback_completion(sendRideFeedbackIntent: cocoascript.INSendRideFeedbackIntent, completion: cocoascript.INSendRideFeedbackIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintenthandling/2875582-handlesendridefeedback
    handleSendRideFeedback_completion(sendRideFeedbackintent: cocoascript.INSendRideFeedbackIntent, completion: cocoascript.INSendRideFeedbackIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface to handle sending messages to one or more designated users.
   * doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling
   */
  interface INSendMessageIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1638459-resolverecipientsforsendmessage
    resolveRecipientsForSendMessage_completion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSendMessageRecipientResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1902359-resolvecontentforsendmessage
    resolveContentForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/2866588-resolvespeakablegroupnameforsend
    resolveSpeakableGroupNameForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1902356-resolverecipientsforsendmessage
    resolveRecipientsForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1902358-resolvegroupnameforsendmessage
    resolveGroupNameForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1639459-confirmsendmessage
    confirmSendMessage_completion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSendMessageIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/1639338-handlesendmessage
    handleSendMessage_completion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INSendMessageIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintenthandling/3552233-resolveoutgoingmessagetypeforsen
    resolveOutgoingMessageTypeForSendMessage_withCompletion(intent: cocoascript.INSendMessageIntent, completion: cocoascript.INOutgoingMessageTypeResolutionResult):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface booking a reservation that the user selected.
   * doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling
   */
  interface INBookRestaurantReservationIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845261-resolverestaurantforbookrestaura
    resolveRestaurantForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/2305427-resolvebookingdatecomponentsforb
    resolveBookingDateComponentsForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INDateComponentsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845260-resolvepartysizeforbookrestauran
    resolvePartySizeForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845253-resolveguestforbookrestaurantres
    resolveGuestForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INRestaurantGuestResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845245-resolveguestprovidedspecialreque
    resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation_withCompletion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1845255-confirmbookrestaurantreservation
    confirmBookRestaurantReservation_completion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INBookRestaurantReservationIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintenthandling/1649560-handlebookrestaurantreservation
    handleBookRestaurantReservation_completion(intent: cocoascript.INBookRestaurantReservationIntent, completion: cocoascript.INBookRestaurantReservationIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s photos and the playback of the results.
   * doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling
   */
  interface INStartPhotoPlaybackIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906888-resolvedatecreatedforstartphotop
    resolveDateCreatedForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906891-resolvelocationcreatedforstartph
    resolveLocationCreatedForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INPlacemarkResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906887-resolvepeopleinphotoforstartphot
    resolvePeopleInPhotoForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1906885-resolvealbumnameforstartphotopla
    resolveAlbumNameForStartPhotoPlayback_withCompletion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1638847-confirmstartphotoplayback
    confirmStartPhotoPlayback_completion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INStartPhotoPlaybackIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintenthandling/1638162-handlestartphotoplayback
    handleStartPhotoPlayback_completion(intent: cocoascript.INStartPhotoPlaybackIntent, completion: cocoascript.INStartPhotoPlaybackIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s seat-related settings.
   * doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling
   */
  interface INSetSeatSettingsInCarIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102624-resolveenablecoolingforsetseatse
    resolveEnableCoolingForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102628-resolveenableheatingforsetseatse
    resolveEnableHeatingForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102621-resolveenablemassageforsetseatse
    resolveEnableMassageForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102616-resolveseatforsetseatsettingsinc
    resolveSeatForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INCarSeatResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102623-resolvelevelforsetseatsettingsin
    resolveLevelForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102625-resolverelativelevelsettingforse
    resolveRelativeLevelSettingForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INRelativeSettingResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/3019579-resolvecarnameforsetseatsettings
    resolveCarNameForSetSeatSettingsInCar_withCompletion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102627-confirmsetseatsettingsincar
    confirmSetSeatSettingsInCar_completion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INSetSeatSettingsInCarIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintenthandling/2102615-handlesetseatsettingsincar
    handleSetSeatSettingsInCar_completion(intent: cocoascript.INSetSeatSettingsInCarIntent, completion: cocoascript.INSetSeatSettingsInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to search the current user’s messages.
   * doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling
   */
  interface INSearchForMessagesIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902441-resolverecipientsforsearchformes
    resolveRecipientsForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902439-resolvesendersforsearchformessag
    resolveSendersForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902440-resolveattributesforsearchformes
    resolveAttributesForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INMessageAttributeOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902436-resolvedatetimerangeforsearchfor
    resolveDateTimeRangeForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/2867285-resolvespeakablegroupnamesforsea
    resolveSpeakableGroupNamesForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1902438-resolvegroupnamesforsearchformes
    resolveGroupNamesForSearchForMessages_withCompletion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1638410-confirmsearchformessages
    confirmSearchForMessages_completion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INSearchForMessagesIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintenthandling/1638324-handlesearchformessages
    handleSearchForMessages_completion(intent: cocoascript.INSearchForMessagesIntent, completion: cocoascript.INSearchForMessagesIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for paying a bill using money from the user’s account.
   * doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling
   */
  interface INPayBillIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799071-resolvebillpayeeforpaybill
    resolveBillPayeeForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INBillPayeeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799065-resolvebilltypeforpaybill
    resolveBillTypeForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INBillTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799069-resolvefromaccountforpaybill
    resolveFromAccountForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPaymentAccountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799076-resolvetransactionamountforpaybi
    resolveTransactionAmountForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPaymentAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799068-resolveduedateforpaybill
    resolveDueDateForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799074-resolvetransactionscheduleddatef
    resolveTransactionScheduledDateForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799078-resolvetransactionnoteforpaybill
    resolveTransactionNoteForPayBill_withCompletion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799070-confirmpaybill
    confirmPayBill_completion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPayBillIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintenthandling/2799072-handlepaybill
    handlePayBill_completion(intent: cocoascript.INPayBillIntent, completion: cocoascript.INPayBillIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for dispatching intents to the custom objects that handle those intents.
   * doc://com.apple.documentation/documentation/sirikit/inintenthandlerproviding
   */
  interface INIntentHandlerProviding extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inintenthandlerproviding/1638898-handlerforintent
    handlerForIntent(intent: cocoascript.INIntent):cocoascript.INIntentHandlerProviding;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for updating the attributes of an existing task.
   * doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling
   */
  interface INSetTaskAttributeIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2878118-resolvetargettaskforsettaskattri
    resolveTargetTaskForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTaskResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873560-resolvestatusforsettaskattribute
    resolveStatusForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTaskStatusResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873565-resolvespatialeventtriggerforset
    resolveSpatialEventTriggerForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSpatialEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/3327010-resolvetemporaleventtriggerforse
    resolveTemporalEventTriggerForSetTaskAttribute_completion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/3141837-resolvepriorityforsettaskattribu
    resolvePriorityForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTaskPriorityResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/3141838-resolvetasktitleforsettaskattrib
    resolveTaskTitleForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873568-resolvetemporaleventtriggerforse
    resolveTemporalEventTriggerForSetTaskAttribute_withCompletion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INTemporalEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873562-confirmsettaskattribute
    confirmSetTaskAttribute_completion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSetTaskAttributeIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintenthandling/2873564-handlesettaskattribute
    handleSetTaskAttribute_completion(intent: cocoascript.INSetTaskAttributeIntent, completion: cocoascript.INSetTaskAttributeIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for transferring money between accounts.
   * doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling
   */
  interface INTransferMoneyIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868064-resolvefromaccountfortransfermon
    resolveFromAccountForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INPaymentAccountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868069-resolvetoaccountfortransfermoney
    resolveToAccountForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INPaymentAccountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868055-resolvetransactionamountfortrans
    resolveTransactionAmountForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INPaymentAmountResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868070-resolvetransactionscheduleddatef
    resolveTransactionScheduledDateForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868066-resolvetransactionnotefortransfe
    resolveTransactionNoteForTransferMoney_withCompletion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868057-confirmtransfermoney
    confirmTransferMoney_completion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INTransferMoneyIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintenthandling/2868059-handletransfermoney
    handleTransferMoney_completion(intent: cocoascript.INTransferMoneyIntent, completion: cocoascript.INTransferMoneyIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for adding tasks to a task list.
   * doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling
   */
  interface INAddTasksIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/3131041-resolvetargettasklistforaddtasks
    resolveTargetTaskListForAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksTargetTaskListResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874166-resolvetasktitlesforaddtasks
    resolveTaskTitlesForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874168-resolvespatialeventtriggerforadd
    resolveSpatialEventTriggerForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INSpatialEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/3327000-resolvetemporaleventtriggerforad
    resolveTemporalEventTriggerForAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksTemporalEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/3227906-resolvepriorityforaddtasks
    resolvePriorityForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INTaskPriorityResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2878113-resolvetargettasklistforaddtasks
    resolveTargetTaskListForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INTaskListResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874164-resolvetemporaleventtriggerforad
    resolveTemporalEventTriggerForAddTasks_withCompletion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INTemporalEventTriggerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874165-confirmaddtasks
    confirmAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintenthandling/2874162-handleaddtasks
    handleAddTasks_completion(intent: cocoascript.INAddTasksIntent, completion: cocoascript.INAddTasksIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s call history.
   * doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling
   */
  interface INSearchCallHistoryIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/2866198-resolvecalltypesforsearchcallhis
    resolveCallTypesForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INCallRecordTypeOptionsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1902447-resolvecalltypeforsearchcallhist
    resolveCallTypeForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INCallRecordTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1902450-resolverecipientforsearchcallhis
    resolveRecipientForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INPersonResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1902448-resolvedatecreatedforsearchcallh
    resolveDateCreatedForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INDateComponentsRangeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/2879131-resolveunseenforsearchcallhistor
    resolveUnseenForSearchCallHistory_withCompletion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1639070-confirmsearchcallhistory
    confirmSearchCallHistory_completion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INSearchCallHistoryIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintenthandling/1638471-handlesearchcallhistory
    handleSearchCallHistory_completion(intent: cocoascript.INSearchCallHistoryIntent, completion: cocoascript.INSearchCallHistoryIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the Siri Shortcut button.
   * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate
   */
  interface INUIAddVoiceShortcutButtonDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate/3024517-presentaddvoiceshortcutviewcontr
    presentAddVoiceShortcutViewController_forAddVoiceShortcutButton(addVoiceShortcutViewController: cocoascript.INUIAddVoiceShortcutViewController, addVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton):void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate/3024518-presenteditvoiceshortcutviewcont
    presentEditVoiceShortcutViewController_forAddVoiceShortcutButton(editVoiceShortcutViewController: cocoascript.INUIEditVoiceShortcutViewController, addVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface that adds media.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling
   */
  interface INAddMediaIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074192-resolvemediadestinationforaddmed
    resolveMediaDestinationForAddMedia_withCompletion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaMediaDestinationResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074193-resolvemediaitemsforaddmedia
    resolveMediaItemsForAddMedia_withCompletion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074190-confirmaddmedia
    confirmAddMedia_completion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintenthandling/3074191-handleaddmedia
    handleAddMedia_completion(intent: cocoascript.INAddMediaIntent, completion: cocoascript.INAddMediaIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface an object implements to confirm and handle play media intents.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling
   */
  interface INPlayMediaIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074275-resolvemediaitemsforplaymedia
    resolveMediaItemsForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074276-resolveplayshuffledforplaymedia
    resolvePlayShuffledForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074277-resolveplaybackqueuelocationforp
    resolvePlaybackQueueLocationForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlaybackQueueLocationResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074278-resolveplaybackrepeatmodeforplay
    resolvePlaybackRepeatModeForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlaybackRepeatModeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3180131-resolveplaybackspeedforplaymedia
    resolvePlaybackSpeedForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaPlaybackSpeedResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/3074279-resolveresumeplaybackforplaymedi
    resolveResumePlaybackForPlayMedia_withCompletion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INBooleanResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/2963020-confirmplaymedia
    confirmPlayMedia_completion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintenthandling/2963021-handleplaymedia
    handlePlayMedia_completion(intent: cocoascript.INPlayMediaIntent, completion: cocoascript.INPlayMediaIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for generating a list of potential reservation times from which the user can select.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling
   */
  interface INGetAvailableRestaurantReservationBookingsIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845244-resolverestaurantforgetavailable
    resolveRestaurantForGetAvailableRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INRestaurantResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845252-resolvepartysizeforgetavailabler
    resolvePartySizeForGetAvailableRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INIntegerResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/2305422-resolvepreferredbookingdatecompo
    resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings_withCompletion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INDateComponentsResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845258-confirmgetavailablerestaurantres
    confirmGetAvailableRestaurantReservationBookings_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1648716-handlegetavailablerestaurantrese
    handleGetAvailableRestaurantReservationBookings_completion(intent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent, completion: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles requests to update the user’s preference for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling
   */
  interface INUpdateMediaAffinityIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074320-resolveaffinitytypeforupdatemedi
    resolveAffinityTypeForUpdateMediaAffinity_withCompletion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INMediaAffinityTypeResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074321-resolvemediaitemsforupdatemediaa
    resolveMediaItemsForUpdateMediaAffinity_withCompletion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INUpdateMediaAffinityMediaItemResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074318-confirmupdatemediaaffinity
    confirmUpdateMediaAffinity_completion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INUpdateMediaAffinityIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintenthandling/3074319-handleupdatemediaaffinity
    handleUpdateMediaAffinity_completion(intent: cocoascript.INUpdateMediaAffinityIntent, completion: cocoascript.INUpdateMediaAffinityIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting the current status of the car’s locks.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling
   */
  interface INGetCarLockStatusIntentHandling extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling/2799270-resolvecarnameforgetcarlockstatu
    resolveCarNameForGetCarLockStatus_withCompletion(intent: cocoascript.INGetCarLockStatusIntent, completion: cocoascript.INSpeakableStringResolutionResult):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling/2799271-confirmgetcarlockstatus
    confirmGetCarLockStatus_completion(intent: cocoascript.INGetCarLockStatusIntent, completion: cocoascript.INGetCarLockStatusIntentResponse):void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintenthandling/2799269-handlegetcarlockstatus
    handleGetCarLockStatus_completion(intent: cocoascript.INGetCarLockStatusIntent, completion: cocoascript.INGetCarLockStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * Image data inside an Intents extension or Intents UI extension.
   * doc://com.apple.documentation/documentation/sirikit/inimage
   */
  interface INImage extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inimage/2915857-fetchuiimagewithcompletion
    fetchUIImageWithCompletion(completion: cocoascript.UIImage):void;
    //
    alloc():cocoascript.INImage;
    //
    init():cocoascript.INImage;
  }
}

declare const INImage: cocoascript.INImage;
declare namespace cocoascript {
  /**
   * A request to fulfill in your app or Intents extension.
   * doc://com.apple.documentation/documentation/sirikit/inintent
   */
  interface INIntent extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inintent/1639000-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inintent/2921266-intentdescription
    intentDescription(): cocoascript.NSString;
    setIntentDescription(): void;
    // doc://com.apple.documentation/documentation/sirikit/inintent/2962960-suggestedinvocationphrase
    suggestedInvocationPhrase(): cocoascript.NSString;
    setSuggestedInvocationPhrase(): void;
    // doc://com.apple.documentation/documentation/sirikit/inintent/3552187-shortcutavailability
    shortcutAvailability(): cocoascript.INShortcutAvailabilityOptions;
    setShortcutAvailability(): void;
    // doc://com.apple.documentation/documentation/sirikit/inintent/2976222-imageforparameternamed
    imageForParameterNamed(parameterName: cocoascript.NSString):cocoascript.INImage;
    // doc://com.apple.documentation/documentation/sirikit/inintent/2976224-setimage
    setImage_forParameterNamed(image: cocoascript.INImage, parameterName: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/sirikit/inintent/2976223-keyimage
    keyImage():cocoascript.INImage;
    //
    alloc():cocoascript.INIntent;
    //
    init():cocoascript.INIntent;
  }
}

declare const INIntent: cocoascript.INIntent;
declare namespace cocoascript {
  /**
   * The information about a user involved in a SiriKit interaction.
   * doc://com.apple.documentation/documentation/sirikit/inperson
   */
  interface INPerson extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inperson/2138319-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString):cocoascript.INPerson;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2976230-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_isMe(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString, isMe: cocoascript.BOOL):cocoascript.INPerson;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2138310-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_aliases_suggestionType(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString, aliases: cocoascript.INPersonHandle, suggestionType: cocoascript.INPersonSuggestionType):cocoascript.INPerson;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1638494-initwithhandle
    initWithHandle_displayName_contactIdentifier(handle: cocoascript.NSString, displayName: cocoascript.NSString, contactIdentifier: cocoascript.NSString):cocoascript.INPerson;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1639010-initwithhandle
    initWithHandle_nameComponents_contactIdentifier(handle: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, contactIdentifier: cocoascript.NSString):cocoascript.INPerson;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1638508-initwithhandle
    initWithHandle_nameComponents_displayName_image_contactIdentifier(handle: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString):cocoascript.INPerson;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1638921-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1638822-namecomponents
    nameComponents(): cocoascript.NSPersonNameComponents;
    setNameComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2138314-personhandle
    personHandle(): cocoascript.INPersonHandle;
    setPersonHandle(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1639130-image
    image(): cocoascript.INImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2878157-isme
    isMe(): cocoascript.BOOL;
    setIsMe(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2138316-aliases
    aliases(): cocoascript.INPersonHandle;
    setAliases(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1639190-handle
    handle(): cocoascript.NSString;
    setHandle(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/1638320-contactidentifier
    contactIdentifier(): cocoascript.NSString;
    setContactIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2138295-customidentifier
    customIdentifier(): cocoascript.NSString;
    setCustomIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2138313-suggestiontype
    suggestionType(): cocoascript.INPersonSuggestionType;
    setSuggestionType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2715831-relationship
    relationship(): cocoascript.INPersonRelationship;
    setRelationship(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/2863696-sirimatches
    siriMatches(): cocoascript.INPerson;
    setSiriMatches(): void;
    // doc://com.apple.documentation/documentation/sirikit/inperson/3552225-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_relationship(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, contactIdentifier: cocoascript.NSString, customIdentifier: cocoascript.NSString, relationship: cocoascript.INPersonRelationship):cocoascript.INPerson;
    //
    alloc():cocoascript.INPerson;
    //
    init():cocoascript.INPerson;
  }
}

declare const INPerson: cocoascript.INPerson;
declare namespace cocoascript {
  /**
   * An amount of money to transfer during a financial transaction.
   * doc://com.apple.documentation/documentation/sirikit/incurrencyamount
   */
  interface INCurrencyAmount extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incurrencyamount/1638814-initwithamount
    initWithAmount_currencyCode(amount: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INCurrencyAmount;
    // doc://com.apple.documentation/documentation/sirikit/incurrencyamount/1638388-amount
    amount(): cocoascript.NSDecimalNumber;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/incurrencyamount/1638973-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():cocoascript.INCurrencyAmount;
    //
    init():cocoascript.INCurrencyAmount;
  }
}

declare const INCurrencyAmount: cocoascript.INCurrencyAmount;
declare namespace cocoascript {
  /**
   * Information about a message managed by your app.
   * doc://com.apple.documentation/documentation/sirikit/inmessage
   */
  interface INMessage extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inmessage/2882886-initwithidentifier
    initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_messageType(identifier: cocoascript.NSString, conversationIdentifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson, messageType: cocoascript.INMessageType):cocoascript.INMessage;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/2919433-initwithidentifier
    initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_groupName_messageType(identifier: cocoascript.NSString, conversationIdentifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson, groupName: cocoascript.INSpeakableString, messageType: cocoascript.INMessageType):cocoascript.INMessage;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/1687606-initwithidentifier
    initWithIdentifier_content_dateSent_sender_recipients(identifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson):cocoascript.INMessage;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/3392958-initwithidentifier
    initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_groupName_messageType_serviceName(identifier: cocoascript.NSString, conversationIdentifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson, groupName: cocoascript.INSpeakableString, messageType: cocoascript.INMessageType, serviceName: cocoascript.NSString):cocoascript.INMessage;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/1638230-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/2867834-conversationidentifier
    conversationIdentifier(): cocoascript.NSString;
    setConversationIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/2882867-messagetype
    messageType(): cocoascript.INMessageType;
    setMessageType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/1638778-sender
    sender(): cocoascript.INPerson;
    setSender(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/1638938-recipients
    recipients(): cocoascript.INPerson;
    setRecipients(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/2919432-groupname
    groupName(): cocoascript.INSpeakableString;
    setGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/1638554-content
    content(): cocoascript.NSString;
    setContent(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/1639255-datesent
    dateSent(): cocoascript.NSDate;
    setDateSent(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmessage/3392959-servicename
    serviceName(): cocoascript.NSString;
    setServiceName(): void;
    //
    alloc():cocoascript.INMessage;
    //
    init():cocoascript.INMessage;
  }
}

declare const INMessage: cocoascript.INMessage;
declare namespace cocoascript {
  /**
   * Information about a form of payment supported by your app.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentmethod
   */
  interface INPaymentMethod extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/2211609-initwithtype
    initWithType_name_identificationHint_icon(type: cocoascript.INPaymentMethodType, name: cocoascript.NSString, identificationHint: cocoascript.NSString, icon: cocoascript.INImage):cocoascript.INPaymentMethod;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/1638590-type
    type(): cocoascript.INPaymentMethodType;
    setType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/1638237-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/2211608-identificationhint
    identificationHint(): cocoascript.NSString;
    setIdentificationHint(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentmethod/1639364-icon
    icon(): cocoascript.INImage;
    setIcon(): void;
    //
    alloc():cocoascript.INPaymentMethod;
    //
    init():cocoascript.INPaymentMethod;
  }
}

declare const INPaymentMethod: cocoascript.INPaymentMethod;
declare namespace cocoascript {
  /**
   * Identifying information about a driver of a ride service.
   * doc://com.apple.documentation/documentation/sirikit/inridedriver
   */
  interface INRideDriver extends INPerson {
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/2727146-initwithphonenumber
    initWithPhoneNumber_nameComponents_displayName_image_rating(phoneNumber: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, rating: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1639295-initwithhandle
    initWithHandle_displayName_image_rating_phoneNumber(handle: cocoascript.NSString, displayName: cocoascript.NSString, image: cocoascript.INImage, rating: cocoascript.NSString, phoneNumber: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1638407-initwithhandle
    initWithHandle_nameComponents_image_rating_phoneNumber(handle: cocoascript.NSString, nameComponents: cocoascript.NSPersonNameComponents, image: cocoascript.INImage, rating: cocoascript.NSString, phoneNumber: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/2143442-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_rating_phoneNumber(personHandle: cocoascript.INPersonHandle, nameComponents: cocoascript.NSPersonNameComponents, displayName: cocoascript.NSString, image: cocoascript.INImage, rating: cocoascript.NSString, phoneNumber: cocoascript.NSString):cocoascript.INRideDriver;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1638184-rating
    rating(): cocoascript.NSString;
    setRating(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridedriver/1639331-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    //
    alloc():cocoascript.INRideDriver;
    //
    init():cocoascript.INRideDriver;
  }
}

declare const INRideDriver: cocoascript.INRideDriver;
declare namespace cocoascript {
  /**
   * A span of time.
   * doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange
   */
  interface INDateComponentsRange extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/1639081-initwithstartdatecomponents
    initWithStartDateComponents_endDateComponents(startDateComponents: cocoascript.NSDateComponents, endDateComponents: cocoascript.NSDateComponents):cocoascript.INDateComponentsRange;
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2890754-initwithstartdatecomponents
    initWithStartDateComponents_endDateComponents_recurrenceRule(startDateComponents: cocoascript.NSDateComponents, endDateComponents: cocoascript.NSDateComponents, recurrenceRule: cocoascript.INRecurrenceRule):cocoascript.INDateComponentsRange;
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2915225-initwithekrecurrencerule
    initWithEKRecurrenceRule(recurrenceRule: cocoascript.EKRecurrenceRule):cocoascript.INDateComponentsRange;
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/1639214-startdatecomponents
    startDateComponents(): cocoascript.NSDateComponents;
    setStartDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/1639237-enddatecomponents
    endDateComponents(): cocoascript.NSDateComponents;
    setEndDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2890755-recurrencerule
    recurrenceRule(): cocoascript.INRecurrenceRule;
    setRecurrenceRule(): void;
    // doc://com.apple.documentation/documentation/sirikit/indatecomponentsrange/2915224-ekrecurrencerule
    EKRecurrenceRule():cocoascript.EKRecurrenceRule;
    //
    alloc():cocoascript.INDateComponentsRange;
    //
    init():cocoascript.INDateComponentsRange;
  }
}

declare const INDateComponentsRange: cocoascript.INDateComponentsRange;
declare namespace cocoascript {
  /**
   * Your response to an intent object.
   * doc://com.apple.documentation/documentation/sirikit/inintentresponse
   */
  interface INIntentResponse extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inintentresponse/1639469-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    //
    alloc():cocoascript.INIntentResponse;
    //
    init():cocoascript.INIntentResponse;
  }
}

declare const INIntentResponse: cocoascript.INIntentResponse;
declare namespace cocoascript {
  /**
   * Detailed information about a financial transaction made between two users.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentrecord
   */
  interface INPaymentRecord extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/2274388-initwithpayee
    initWithPayee_payer_currencyAmount_paymentMethod_note_status_feeAmount(payee: cocoascript.INPerson, payer: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, paymentMethod: cocoascript.INPaymentMethod, note: cocoascript.NSString, status: cocoascript.INPaymentStatus, feeAmount: cocoascript.INCurrencyAmount):cocoascript.INPaymentRecord;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638960-initwithpayee
    initWithPayee_payer_currencyAmount_paymentMethod_note_status(payee: cocoascript.INPerson, payer: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, paymentMethod: cocoascript.INPaymentMethod, note: cocoascript.NSString, status: cocoascript.INPaymentStatus):cocoascript.INPaymentRecord;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1639333-status
    status(): cocoascript.INPaymentStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1639172-payee
    payee(): cocoascript.INPerson;
    setPayee(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1639269-payer
    payer(): cocoascript.INPerson;
    setPayer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638675-currencyamount
    currencyAmount(): cocoascript.INCurrencyAmount;
    setCurrencyAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/2274390-feeamount
    feeAmount(): cocoascript.INCurrencyAmount;
    setFeeAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638939-paymentmethod
    paymentMethod(): cocoascript.INPaymentMethod;
    setPaymentMethod(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentrecord/1638190-note
    note(): cocoascript.NSString;
    setNote(): void;
    //
    alloc():cocoascript.INPaymentRecord;
    //
    init():cocoascript.INPaymentRecord;
  }
}

declare const INPaymentRecord: cocoascript.INPaymentRecord;
declare namespace cocoascript {
  /**
   * Price information, as a range of possible values.
   * doc://com.apple.documentation/documentation/sirikit/inpricerange
   */
  interface INPriceRange extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638476-initwithprice
    initWithPrice_currencyCode(price: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1639347-initwithrangebetweenprice
    initWithRangeBetweenPrice_andPrice_currencyCode(firstPrice: cocoascript.NSDecimalNumber, secondPrice: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638268-initwithmaximumprice
    initWithMaximumPrice_currencyCode(maximumPrice: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1639229-initwithminimumprice
    initWithMinimumPrice_currencyCode(minimumPrice: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INPriceRange;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638727-minimumprice
    minimumPrice(): cocoascript.NSDecimalNumber;
    setMinimumPrice(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638626-maximumprice
    maximumPrice(): cocoascript.NSDecimalNumber;
    setMaximumPrice(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpricerange/1638555-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():cocoascript.INPriceRange;
    //
    init():cocoascript.INPriceRange;
  }
}

declare const INPriceRange: cocoascript.INPriceRange;
declare namespace cocoascript {
  /**
   * A potential reservation that a user can book.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking
   */
  interface INRestaurantReservationBooking extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/2132093-initwithrestaurant
    initWithRestaurant_bookingDate_partySize_bookingIdentifier(restaurant: cocoascript.INRestaurant, bookingDate: cocoascript.NSDate, partySize: cocoascript.NSUInteger, bookingIdentifier: cocoascript.NSString):cocoascript.INRestaurantReservationBooking;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648075-restaurant
    restaurant(): cocoascript.INRestaurant;
    setRestaurant(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648082-partysize
    partySize(): cocoascript.NSUInteger;
    setPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648081-offers
    offers(): cocoascript.INRestaurantOffer;
    setOffers(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648077-bookingidentifier
    bookingIdentifier(): cocoascript.NSString;
    setBookingIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648080-bookingavailable
    bookingAvailable(): cocoascript.BOOL;
    setBookingAvailable(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1648078-bookingdate
    bookingDate(): cocoascript.NSDate;
    setBookingDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778334-bookingdescription
    bookingDescription(): cocoascript.NSString;
    setBookingDescription(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778336-requiresname
    requiresName(): cocoascript.BOOL;
    setRequiresName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778335-requiresemailaddress
    requiresEmailAddress(): cocoascript.BOOL;
    setRequiresEmailAddress(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1778337-requiresphonenumber
    requiresPhoneNumber(): cocoascript.BOOL;
    setRequiresPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationbooking/1771692-requiresmanualrequest
    requiresManualRequest(): cocoascript.BOOL;
    setRequiresManualRequest(): void;
    //
    alloc():cocoascript.INRestaurantReservationBooking;
    //
    init():cocoascript.INRestaurantReservationBooking;
  }
}

declare const INRestaurantReservationBooking: cocoascript.INRestaurantReservationBooking;
declare namespace cocoascript {
  /**
   * A reservation created by a user.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking
   */
  interface INRestaurantReservationUserBooking extends INRestaurantReservationBooking {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2132117-initwithrestaurant
    initWithRestaurant_bookingDate_partySize_bookingIdentifier_guest_status_dateStatusModified(restaurant: cocoascript.INRestaurant, bookingDate: cocoascript.NSDate, partySize: cocoascript.NSUInteger, bookingIdentifier: cocoascript.NSString, guest: cocoascript.INRestaurantGuest, status: cocoascript.INRestaurantReservationUserBookingStatus, dateStatusModified: cocoascript.NSDate):cocoascript.INRestaurantReservationUserBooking;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/1778366-guest
    guest(): cocoascript.INRestaurantGuest;
    setGuest(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/1771364-status
    status(): cocoascript.INRestaurantReservationUserBookingStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2102576-datestatusmodified
    dateStatusModified(): cocoascript.NSDate;
    setDateStatusModified(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2102578-guestprovidedspecialrequesttext
    guestProvidedSpecialRequestText(): cocoascript.NSString;
    setGuestProvidedSpecialRequestText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/2102577-selectedoffer
    selectedOffer(): cocoascript.INRestaurantOffer;
    setSelectedOffer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbooking/1648213-advisementtext
    advisementText(): cocoascript.NSString;
    setAdvisementText(): void;
    //
    alloc():cocoascript.INRestaurantReservationUserBooking;
    //
    init():cocoascript.INRestaurantReservationUserBooking;
  }
}

declare const INRestaurantReservationUserBooking: cocoascript.INRestaurantReservationUserBooking;
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
declare namespace cocoascript {
  /**
   * A request for the time slots available for making a reservation.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent
   */
  interface INGetAvailableRestaurantReservationBookingsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/2877503-initwithrestaurant
    initWithRestaurant_partySize_preferredBookingDateComponents_maximumNumberOfResults_earliestBookingDateForResults_latestBookingDateForResults(restaurant: cocoascript.INRestaurant, partySize: cocoascript.NSUInteger, preferredBookingDateComponents: cocoascript.NSDateComponents, maximumNumberOfResults: cocoascript.NSNumber, earliestBookingDateForResults: cocoascript.NSDate, latestBookingDateForResults: cocoascript.NSDate):cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1648718-restaurant
    restaurant(): cocoascript.INRestaurant;
    setRestaurant(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1648712-partysize
    partySize(): cocoascript.NSUInteger;
    setPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/2305423-preferredbookingdatecomponents
    preferredBookingDateComponents(): cocoascript.NSDateComponents;
    setPreferredBookingDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778387-earliestbookingdateforresults
    earliestBookingDateForResults(): cocoascript.NSDate;
    setEarliestBookingDateForResults(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778418-latestbookingdateforresults
    latestBookingDateForResults(): cocoascript.NSDate;
    setLatestBookingDateForResults(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778378-maximumnumberofresults
    maximumNumberOfResults(): cocoascript.NSNumber;
    setMaximumNumberOfResults(): void;
    //
    alloc():cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
    //
    init():cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
  }
}

declare const INGetAvailableRestaurantReservationBookingsIntent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
declare namespace cocoascript {
  /**
   * Information about special offers made by a restaurant.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer
   */
  interface INRestaurantOffer extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer/1649398-offertitletext
    offerTitleText(): cocoascript.NSString;
    setOfferTitleText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer/1649401-offerdetailtext
    offerDetailText(): cocoascript.NSString;
    setOfferDetailText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantoffer/1649400-offeridentifier
    offerIdentifier(): cocoascript.NSString;
    setOfferIdentifier(): void;
    //
    alloc():cocoascript.INRestaurantOffer;
    //
    init():cocoascript.INRestaurantOffer;
  }
}

declare const INRestaurantOffer: cocoascript.INRestaurantOffer;
declare namespace cocoascript {
  /**
   * A request to create a reservation at the specified restaurant.
   * doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent
   */
  interface INBookRestaurantReservationIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/2877498-initwithrestaurant
    initWithRestaurant_bookingDateComponents_partySize_bookingIdentifier_guest_selectedOffer_guestProvidedSpecialRequestText(restaurant: cocoascript.INRestaurant, bookingDateComponents: cocoascript.NSDateComponents, partySize: cocoascript.NSUInteger, bookingIdentifier: cocoascript.NSString, guest: cocoascript.INRestaurantGuest, selectedOffer: cocoascript.INRestaurantOffer, guestProvidedSpecialRequestText: cocoascript.NSString):cocoascript.INBookRestaurantReservationIntent;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649559-restaurant
    restaurant(): cocoascript.INRestaurant;
    setRestaurant(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/2305412-bookingdatecomponents
    bookingDateComponents(): cocoascript.NSDateComponents;
    setBookingDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649557-bookingidentifier
    bookingIdentifier(): cocoascript.NSString;
    setBookingIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649565-partysize
    partySize(): cocoascript.NSUInteger;
    setPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1778392-guest
    guest(): cocoascript.INRestaurantGuest;
    setGuest(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1778382-guestprovidedspecialrequesttext
    guestProvidedSpecialRequestText(): cocoascript.NSString;
    setGuestProvidedSpecialRequestText(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintent/1649561-selectedoffer
    selectedOffer(): cocoascript.INRestaurantOffer;
    setSelectedOffer(): void;
    //
    alloc():cocoascript.INBookRestaurantReservationIntent;
    //
    init():cocoascript.INBookRestaurantReservationIntent;
  }
}

declare const INBookRestaurantReservationIntent: cocoascript.INBookRestaurantReservationIntent;
declare namespace cocoascript {
  /**
   * A specific vehicle used by a ride-booking service.
   * doc://com.apple.documentation/documentation/sirikit/inridevehicle
   */
  interface INRideVehicle extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649589-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649590-mapannotationimage
    mapAnnotationImage(): cocoascript.INImage;
    setMapAnnotationImage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649593-registrationplate
    registrationPlate(): cocoascript.NSString;
    setRegistrationPlate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649588-manufacturer
    manufacturer(): cocoascript.NSString;
    setManufacturer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridevehicle/1649592-model
    model(): cocoascript.NSString;
    setModel(): void;
    //
    alloc():cocoascript.INRideVehicle;
    //
    init():cocoascript.INRideVehicle;
  }
}

declare const INRideVehicle: cocoascript.INRideVehicle;
declare namespace cocoascript {
  /**
   * The price of a ride involving the specified number of people.
   * doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption
   */
  interface INRidePartySizeOption extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649721-initwithpartysizerange
    initWithPartySizeRange_sizeDescription_priceRange(partySizeRange: cocoascript.NSRange, sizeDescription: cocoascript.NSString, priceRange: cocoascript.INPriceRange):cocoascript.INRidePartySizeOption;
    // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649719-partysizerange
    partySizeRange(): cocoascript.NSRange;
    setPartySizeRange(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649722-sizedescription
    sizeDescription(): cocoascript.NSString;
    setSizeDescription(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridepartysizeoption/1649723-pricerange
    priceRange(): cocoascript.INPriceRange;
    setPriceRange(): void;
    //
    alloc():cocoascript.INRidePartySizeOption;
    //
    init():cocoascript.INRidePartySizeOption;
  }
}

declare const INRidePartySizeOption: cocoascript.INRidePartySizeOption;
declare namespace cocoascript {
  /**
   * A specific type of ride-related charge.
   * doc://com.apple.documentation/documentation/sirikit/inridefarelineitem
   */
  interface INRideFareLineItem extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649902-initwithtitle
    initWithTitle_price_currencyCode(title: cocoascript.NSString, price: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INRideFareLineItem;
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649900-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649903-price
    price(): cocoascript.NSDecimalNumber;
    setPrice(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridefarelineitem/1649901-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():cocoascript.INRideFareLineItem;
    //
    init():cocoascript.INRideFareLineItem;
  }
}

declare const INRideFareLineItem: cocoascript.INRideFareLineItem;
declare namespace cocoascript {
  /**
   * Details about a type of ride offered by your ride-booking service.
   * doc://com.apple.documentation/documentation/sirikit/inrideoption
   */
  interface INRideOption extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649958-initwithname
    initWithName_estimatedPickupDate(name: cocoascript.NSString, estimatedPickupDate: cocoascript.NSDate):cocoascript.INRideOption;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649960-initwithcoder
    initWithCoder(decoder: cocoascript.NSCoder):cocoascript.INRideOption;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649970-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649965-estimatedpickupdate
    estimatedPickupDate(): cocoascript.NSDate;
    setEstimatedPickupDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649956-disclaimermessage
    disclaimerMessage(): cocoascript.NSString;
    setDisclaimerMessage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649961-availablepartysizeoptions
    availablePartySizeOptions(): cocoascript.INRidePartySizeOption;
    setAvailablePartySizeOptions(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649968-availablepartysizeoptionsselecti
    availablePartySizeOptionsSelectionPrompt(): cocoascript.NSString;
    setAvailablePartySizeOptionsSelectionPrompt(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649969-pricerange
    priceRange(): cocoascript.INPriceRange;
    setPriceRange(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649964-specialpricing
    specialPricing(): cocoascript.NSString;
    setSpecialPricing(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649963-specialpricingbadgeimage
    specialPricingBadgeImage(): cocoascript.INImage;
    setSpecialPricingBadgeImage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/2132100-usesmeteredfare
    usesMeteredFare(): cocoascript.NSNumber;
    setUsesMeteredFare(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649966-farelineitems
    fareLineItems(): cocoascript.INRideFareLineItem;
    setFareLineItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649962-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrideoption/1649957-useractivityforbookinginapplicat
    userActivityForBookingInApplication(): cocoascript.NSUserActivity;
    setUserActivityForBookingInApplication(): void;
    //
    alloc():cocoascript.INRideOption;
    //
    init():cocoascript.INRideOption;
  }
}

declare const INRideOption: cocoascript.INRideOption;
declare namespace cocoascript {
  /**
   * A restaurant for which your app can make and manage reservations.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurant
   */
  interface INRestaurant extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/2132091-initwithlocation
    initWithLocation_name_vendorIdentifier_restaurantIdentifier(location: cocoascript.CLLocation, name: cocoascript.NSString, vendorIdentifier: cocoascript.NSString, restaurantIdentifier: cocoascript.NSString):cocoascript.INRestaurant;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649980-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649979-location
    location(): cocoascript.CLLocation;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649977-restaurantidentifier
    restaurantIdentifier(): cocoascript.NSString;
    setRestaurantIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurant/1649978-vendoridentifier
    vendorIdentifier(): cocoascript.NSString;
    setVendorIdentifier(): void;
    //
    alloc():cocoascript.INRestaurant;
    //
    init():cocoascript.INRestaurant;
  }
}

declare const INRestaurant: cocoascript.INRestaurant;
declare namespace cocoascript {
  /**
   * A request for the list of the user’s current reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2877506-initwithrestaurant
    initWithRestaurant_reservationIdentifier_maximumNumberOfResults_earliestBookingDateForResults(restaurant: cocoascript.INRestaurant, reservationIdentifier: cocoascript.NSString, maximumNumberOfResults: cocoascript.NSNumber, earliestBookingDateForResults: cocoascript.NSDate):cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/1650029-restaurant
    restaurant(): cocoascript.INRestaurant;
    setRestaurant(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/1650028-reservationidentifier
    reservationIdentifier(): cocoascript.NSString;
    setReservationIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2102242-maximumnumberofresults
    maximumNumberOfResults(): cocoascript.NSNumber;
    setMaximumNumberOfResults(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2102243-earliestbookingdateforresults
    earliestBookingDateForResults(): cocoascript.NSDate;
    setEarliestBookingDateForResults(): void;
    //
    alloc():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
    //
    init():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
  }
}

declare const INGetUserCurrentRestaurantReservationBookingsIntent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
declare namespace cocoascript {
  /**
   * Options about how to display guest information from system interfaces.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences
   */
  interface INRestaurantGuestDisplayPreferences extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2127690-namefieldshouldbedisplayed
    nameFieldShouldBeDisplayed(): cocoascript.BOOL;
    setNameFieldShouldBeDisplayed(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102609-phonenumberfieldshouldbedisplaye
    phoneNumberFieldShouldBeDisplayed(): cocoascript.BOOL;
    setPhoneNumberFieldShouldBeDisplayed(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102602-emailaddressfieldshouldbedisplay
    emailAddressFieldShouldBeDisplayed(): cocoascript.BOOL;
    setEmailAddressFieldShouldBeDisplayed(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102604-namefieldfirstnameoptional
    nameFieldFirstNameOptional(): cocoascript.BOOL;
    setNameFieldFirstNameOptional(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102606-namefieldlastnameoptional
    nameFieldLastNameOptional(): cocoascript.BOOL;
    setNameFieldLastNameOptional(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102603-nameeditable
    nameEditable(): cocoascript.BOOL;
    setNameEditable(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102608-emailaddresseditable
    emailAddressEditable(): cocoascript.BOOL;
    setEmailAddressEditable(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguestdisplaypreferences/2102607-phonenumbereditable
    phoneNumberEditable(): cocoascript.BOOL;
    setPhoneNumberEditable(): void;
    //
    alloc():cocoascript.INRestaurantGuestDisplayPreferences;
    //
    init():cocoascript.INRestaurantGuestDisplayPreferences;
  }
}

declare const INRestaurantGuestDisplayPreferences: cocoascript.INRestaurantGuestDisplayPreferences;
declare namespace cocoascript {
  /**
   * A custom phrase to be resolved by an Intents extension.
   * doc://com.apple.documentation/documentation/sirikit/inspeakablestring
   */
  interface INSpeakableString extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inspeakablestring/2721324-initwithspokenphrase
    initWithSpokenPhrase(spokenPhrase: cocoascript.NSString):cocoascript.INSpeakableString;
    // doc://com.apple.documentation/documentation/sirikit/inspeakablestring/2873438-initwithvocabularyidentifier
    initWithVocabularyIdentifier_spokenPhrase_pronunciationHint(vocabularyIdentifier: cocoascript.NSString, spokenPhrase: cocoascript.NSString, pronunciationHint: cocoascript.NSString):cocoascript.INSpeakableString;
    // doc://com.apple.documentation/documentation/sirikit/inspeakablestring/2118338-initwithidentifier
    initWithIdentifier_spokenPhrase_pronunciationHint(identifier: cocoascript.NSString, spokenPhrase: cocoascript.NSString, pronunciationHint: cocoascript.NSString):cocoascript.INSpeakableString;
    //
    alloc():cocoascript.INSpeakableString;
    //
    init():cocoascript.INSpeakableString;
  }
}

declare const INSpeakableString: cocoascript.INSpeakableString;
declare namespace cocoascript {
  /**
   * The terms and conditions of service when making restaurant reservations.
   * doc://com.apple.documentation/documentation/sirikit/intermsandconditions
   */
  interface INTermsAndConditions extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132095-initwithlocalizedtermsandconditi
    initWithLocalizedTermsAndConditionsText_privacyPolicyURL_termsAndConditionsURL(localizedTermsAndConditionsText: cocoascript.NSString, privacyPolicyURL: cocoascript.NSURL, termsAndConditionsURL: cocoascript.NSURL):cocoascript.INTermsAndConditions;
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132098-localizedtermsandconditionstext
    localizedTermsAndConditionsText(): cocoascript.NSString;
    setLocalizedTermsAndConditionsText(): void;
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132099-privacypolicyurl
    privacyPolicyURL(): cocoascript.NSURL;
    setPrivacyPolicyURL(): void;
    // doc://com.apple.documentation/documentation/sirikit/intermsandconditions/2132097-termsandconditionsurl
    termsAndConditionsURL(): cocoascript.NSURL;
    setTermsAndConditionsURL(): void;
    //
    alloc():cocoascript.INTermsAndConditions;
    //
    init():cocoascript.INTermsAndConditions;
  }
}

declare const INTermsAndConditions: cocoascript.INTermsAndConditions;
declare namespace cocoascript {
  /**
   * Additional details about whether a ride completed successfully or someone canceled the ride.
   * doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus
   */
  interface INRideCompletionStatus extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132108-completionuseractivity
    completionUserActivity(): cocoascript.NSUserActivity;
    setCompletionUserActivity(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132109-completed
    completed(): cocoascript.BOOL;
    setCompleted(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132104-canceled
    canceled(): cocoascript.BOOL;
    setCanceled(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132115-missedpickup
    missedPickup(): cocoascript.BOOL;
    setMissedPickup(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132114-outstanding
    outstanding(): cocoascript.BOOL;
    setOutstanding(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2132106-paymentamount
    paymentAmount(): cocoascript.INCurrencyAmount;
    setPaymentAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2875467-feedbacktype
    feedbackType(): cocoascript.INRideFeedbackTypeOptions;
    setFeedbackType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inridecompletionstatus/2875466-defaulttippingoptions
    defaultTippingOptions(): cocoascript.INCurrencyAmount;
    setDefaultTippingOptions(): void;
    //
    alloc():cocoascript.INRideCompletionStatus;
    //
    init():cocoascript.INRideCompletionStatus;
  }
}

declare const INRideCompletionStatus: cocoascript.INRideCompletionStatus;
declare namespace cocoascript {
  /**
   * The identifying information for a user of your app.
   * doc://com.apple.documentation/documentation/sirikit/inpersonhandle
   */
  interface INPersonHandle extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2716071-initwithvalue
    initWithValue_type_label(value: cocoascript.NSString, type: cocoascript.INPersonHandleType, label: cocoascript.INPersonHandleLabel):cocoascript.INPersonHandle;
    // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2138303-initwithvalue
    initWithValue_type(value: cocoascript.NSString, type: cocoascript.INPersonHandleType):cocoascript.INPersonHandle;
    // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2138309-type
    type(): cocoascript.INPersonHandleType;
    setType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2138297-value
    value(): cocoascript.NSString;
    setValue(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpersonhandle/2716072-label
    label(): cocoascript.INPersonHandleLabel;
    setLabel(): void;
    //
    alloc():cocoascript.INPersonHandle;
    //
    init():cocoascript.INPersonHandle;
  }
}

declare const INPersonHandle: cocoascript.INPersonHandle;
declare namespace cocoascript {
  /**
   * The amount of money to apply to a bill payment.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentamount
   */
  interface INPaymentAmount extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpaymentamount/2799131-initwithamounttype
    initWithAmountType_amount(amountType: cocoascript.INAmountType, amount: cocoascript.INCurrencyAmount):cocoascript.INPaymentAmount;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentamount/2799132-amount
    amount(): cocoascript.INCurrencyAmount;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentamount/2799130-amounttype
    amountType(): cocoascript.INAmountType;
    setAmountType(): void;
    //
    alloc():cocoascript.INPaymentAmount;
    //
    init():cocoascript.INPaymentAmount;
  }
}

declare const INPaymentAmount: cocoascript.INPaymentAmount;
declare namespace cocoascript {
  /**
   * A user account that provides the funds when making a payment.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentaccount
   */
  interface INPaymentAccount extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2867840-initwithnickname
    initWithNickname_number_accountType_organizationName_balance_secondaryBalance(nickname: cocoascript.INSpeakableString, number: cocoascript.NSString, accountType: cocoascript.INAccountType, organizationName: cocoascript.INSpeakableString, balance: cocoascript.INBalanceAmount, secondaryBalance: cocoascript.INBalanceAmount):cocoascript.INPaymentAccount;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2851531-initwithnickname
    initWithNickname_number_accountType_organizationName(nickname: cocoascript.INSpeakableString, number: cocoascript.NSString, accountType: cocoascript.INAccountType, organizationName: cocoascript.INSpeakableString):cocoascript.INPaymentAccount;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2851529-nickname
    nickname(): cocoascript.INSpeakableString;
    setNickname(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2799156-organizationname
    organizationName(): cocoascript.INSpeakableString;
    setOrganizationName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2799152-accounttype
    accountType(): cocoascript.INAccountType;
    setAccountType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2799154-accountnumber
    accountNumber(): cocoascript.NSString;
    setAccountNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2867838-balance
    balance(): cocoascript.INBalanceAmount;
    setBalance(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2867839-secondarybalance
    secondaryBalance(): cocoascript.INBalanceAmount;
    setSecondaryBalance(): void;
    //
    alloc():cocoascript.INPaymentAccount;
    //
    init():cocoascript.INPaymentAccount;
  }
}

declare const INPaymentAccount: cocoascript.INPaymentAccount;
declare namespace cocoascript {
  /**
   * The detailed information associated with a bill.
   * doc://com.apple.documentation/documentation/sirikit/inbilldetails
   */
  interface INBillDetails extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2852117-initwithbilltype
    initWithBillType_paymentStatus_billPayee_amountDue_minimumDue_lateFee_dueDate_paymentDate(billType: cocoascript.INBillType, paymentStatus: cocoascript.INPaymentStatus, billPayee: cocoascript.INBillPayee, amountDue: cocoascript.INCurrencyAmount, minimumDue: cocoascript.INCurrencyAmount, lateFee: cocoascript.INCurrencyAmount, dueDate: cocoascript.NSDateComponents, paymentDate: cocoascript.NSDateComponents):cocoascript.INBillDetails;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799228-billpayee
    billPayee(): cocoascript.INBillPayee;
    setBillPayee(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799231-paymentdate
    paymentDate(): cocoascript.NSDateComponents;
    setPaymentDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799232-paymentstatus
    paymentStatus(): cocoascript.INPaymentStatus;
    setPaymentStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799226-billtype
    billType(): cocoascript.INBillType;
    setBillType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799230-minimumdue
    minimumDue(): cocoascript.INCurrencyAmount;
    setMinimumDue(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799229-amountdue
    amountDue(): cocoascript.INCurrencyAmount;
    setAmountDue(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799234-duedate
    dueDate(): cocoascript.NSDateComponents;
    setDueDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbilldetails/2799233-latefee
    lateFee(): cocoascript.INCurrencyAmount;
    setLateFee(): void;
    //
    alloc():cocoascript.INBillDetails;
    //
    init():cocoascript.INBillDetails;
  }
}

declare const INBillDetails: cocoascript.INBillDetails;
declare namespace cocoascript {
  /**
   * The entity that receives the proceeds from a bill payment.
   * doc://com.apple.documentation/documentation/sirikit/inbillpayee
   */
  interface INBillPayee extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2851532-initwithnickname
    initWithNickname_number_organizationName(nickname: cocoascript.INSpeakableString, number: cocoascript.NSString, organizationName: cocoascript.INSpeakableString):cocoascript.INBillPayee;
    // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2851533-nickname
    nickname(): cocoascript.INSpeakableString;
    setNickname(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2799316-organizationname
    organizationName(): cocoascript.INSpeakableString;
    setOrganizationName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbillpayee/2799312-accountnumber
    accountNumber(): cocoascript.NSString;
    setAccountNumber(): void;
    //
    alloc():cocoascript.INBillPayee;
    //
    init():cocoascript.INBillPayee;
  }
}

declare const INBillPayee: cocoascript.INBillPayee;
declare namespace cocoascript {
  /**
   * A balance associated with an account.
   * doc://com.apple.documentation/documentation/sirikit/inbalanceamount
   */
  interface INBalanceAmount extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867278-initwithamount
    initWithAmount_currencyCode(amount: cocoascript.NSDecimalNumber, currencyCode: cocoascript.NSString):cocoascript.INBalanceAmount;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867277-initwithamount
    initWithAmount_balanceType(amount: cocoascript.NSDecimalNumber, balanceType: cocoascript.INBalanceType):cocoascript.INBalanceAmount;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867279-amount
    amount(): cocoascript.NSDecimalNumber;
    setAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867275-currencycode
    currencyCode(): cocoascript.NSString;
    setCurrencyCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbalanceamount/2867280-balancetype
    balanceType(): cocoascript.INBalanceType;
    setBalanceType(): void;
    //
    alloc():cocoascript.INBalanceAmount;
    //
    init():cocoascript.INBalanceAmount;
  }
}

declare const INBalanceAmount: cocoascript.INBalanceAmount;
declare namespace cocoascript {
  /**
   * The content and metadata associated with a single note entry in your app.
   * doc://com.apple.documentation/documentation/sirikit/innote
   */
  interface INNote extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/innote/2878109-initwithtitle
    initWithTitle_contents_groupName_createdDateComponents_modifiedDateComponents_identifier(title: cocoascript.INSpeakableString, contents: cocoascript.INNoteContent, groupName: cocoascript.INSpeakableString, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString):cocoascript.INNote;
    // doc://com.apple.documentation/documentation/sirikit/innote/2873614-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/innote/2873617-contents
    contents(): cocoascript.INNoteContent;
    setContents(): void;
    // doc://com.apple.documentation/documentation/sirikit/innote/2873615-groupname
    groupName(): cocoascript.INSpeakableString;
    setGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/innote/2873616-createddatecomponents
    createdDateComponents(): cocoascript.NSDateComponents;
    setCreatedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/innote/2873611-modifieddatecomponents
    modifiedDateComponents(): cocoascript.NSDateComponents;
    setModifiedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/innote/2873612-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    //
    alloc():cocoascript.INNote;
    //
    init():cocoascript.INNote;
  }
}

declare const INNote: cocoascript.INNote;
declare namespace cocoascript {
  /**
   * An image contained in a note.
   * doc://com.apple.documentation/documentation/sirikit/inimagenotecontent
   */
  interface INImageNoteContent extends INNoteContent {
    // doc://com.apple.documentation/documentation/sirikit/inimagenotecontent/2880150-initwithimage
    initWithImage(image: cocoascript.INImage):cocoascript.INImageNoteContent;
    // doc://com.apple.documentation/documentation/sirikit/inimagenotecontent/2873670-image
    image(): cocoascript.INImage;
    setImage(): void;
    //
    alloc():cocoascript.INImageNoteContent;
    //
    init():cocoascript.INImageNoteContent;
  }
}

declare const INImageNoteContent: cocoascript.INImageNoteContent;
declare namespace cocoascript {
  /**
   * The details about a call handled by your app.
   * doc://com.apple.documentation/documentation/sirikit/incallrecord
   */
  interface INCallRecord extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/3113792-initwithidentifier
    initWithIdentifier_dateCreated_caller_callRecordType_callCapability_callDuration_unseen_numberOfCalls(identifier: cocoascript.NSString, dateCreated: cocoascript.NSDate, caller: cocoascript.INPerson, callRecordType: cocoascript.INCallRecordType, callCapability: cocoascript.INCallCapability, callDuration: cocoascript.NSNumber, unseen: cocoascript.NSNumber, numberOfCalls: cocoascript.NSNumber):cocoascript.INCallRecord;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2881733-initwithidentifier
    initWithIdentifier_dateCreated_caller_callRecordType_callCapability_callDuration_unseen(identifier: cocoascript.NSString, dateCreated: cocoascript.NSDate, caller: cocoascript.INPerson, callRecordType: cocoascript.INCallRecordType, callCapability: cocoascript.INCallCapability, callDuration: cocoascript.NSNumber, unseen: cocoascript.NSNumber):cocoascript.INCallRecord;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873326-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873327-caller
    caller(): cocoascript.INPerson;
    setCaller(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873325-callrecordtype
    callRecordType(): cocoascript.INCallRecordType;
    setCallRecordType(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2881732-callcapability
    callCapability(): cocoascript.INCallCapability;
    setCallCapability(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2873324-datecreated
    dateCreated(): cocoascript.NSDate;
    setDateCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2879128-callduration
    callDuration(): cocoascript.NSNumber;
    setCallDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/2879129-unseen
    unseen(): cocoascript.NSNumber;
    setUnseen(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecord/3113793-numberofcalls
    numberOfCalls(): cocoascript.NSNumber;
    setNumberOfCalls(): void;
    //
    alloc():cocoascript.INCallRecord;
    //
    init():cocoascript.INCallRecord;
  }
}

declare const INCallRecord: cocoascript.INCallRecord;
declare namespace cocoascript {
  /**
   * An abstract class that defines the types of content contained in notes.
   * doc://com.apple.documentation/documentation/sirikit/innotecontent
   */
  interface INNoteContent extends NSObject {
    //
    alloc():cocoascript.INNoteContent;
    //
    init():cocoascript.INNoteContent;
  }
}

declare const INNoteContent: cocoascript.INNoteContent;
declare namespace cocoascript {
  /**
   * A trigger condition based on the user’s arrival or departure from a given location.
   * doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger
   */
  interface INSpatialEventTrigger extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger/2878151-initwithplacemark
    initWithPlacemark_event(placemark: cocoascript.CLPlacemark, event: cocoascript.INSpatialEvent):cocoascript.INSpatialEventTrigger;
    // doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger/2873869-placemark
    placemark(): cocoascript.CLPlacemark;
    setPlacemark(): void;
    // doc://com.apple.documentation/documentation/sirikit/inspatialeventtrigger/2878150-event
    event(): cocoascript.INSpatialEvent;
    setEvent(): void;
    //
    alloc():cocoascript.INSpatialEventTrigger;
    //
    init():cocoascript.INSpatialEventTrigger;
  }
}

declare const INSpatialEventTrigger: cocoascript.INSpatialEventTrigger;
declare namespace cocoascript {
  /**
   * A collection of individual tasks.
   * doc://com.apple.documentation/documentation/sirikit/intasklist
   */
  interface INTaskList extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2888348-initwithtitle
    initWithTitle_tasks_groupName_createdDateComponents_modifiedDateComponents_identifier(title: cocoascript.INSpeakableString, tasks: cocoascript.INTask, groupName: cocoascript.INSpeakableString, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString):cocoascript.INTaskList;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874006-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874011-tasks
    tasks(): cocoascript.INTask;
    setTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874008-groupname
    groupName(): cocoascript.INSpeakableString;
    setGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874009-createddatecomponents
    createdDateComponents(): cocoascript.NSDateComponents;
    setCreatedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874007-modifieddatecomponents
    modifiedDateComponents(): cocoascript.NSDateComponents;
    setModifiedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intasklist/2874004-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    //
    alloc():cocoascript.INTaskList;
    //
    init():cocoascript.INTaskList;
  }
}

declare const INTaskList: cocoascript.INTaskList;
declare namespace cocoascript {
  /**
   * An individual task the user needs to complete.
   * doc://com.apple.documentation/documentation/sirikit/intask
   */
  interface INTask extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intask/3227907-initwithtitle
    initWithTitle_status_taskType_spatialEventTrigger_temporalEventTrigger_createdDateComponents_modifiedDateComponents_identifier_priority(title: cocoascript.INSpeakableString, status: cocoascript.INTaskStatus, taskType: cocoascript.INTaskType, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString, priority: cocoascript.INTaskPriority):cocoascript.INTask;
    // doc://com.apple.documentation/documentation/sirikit/intask/2888298-initwithtitle
    initWithTitle_status_taskType_spatialEventTrigger_temporalEventTrigger_createdDateComponents_modifiedDateComponents_identifier(title: cocoascript.INSpeakableString, status: cocoascript.INTaskStatus, taskType: cocoascript.INTaskType, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString):cocoascript.INTask;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874013-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874019-status
    status(): cocoascript.INTaskStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874018-temporaleventtrigger
    temporalEventTrigger(): cocoascript.INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874015-spatialeventtrigger
    spatialEventTrigger(): cocoascript.INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874017-createddatecomponents
    createdDateComponents(): cocoascript.NSDateComponents;
    setCreatedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874014-modifieddatecomponents
    modifiedDateComponents(): cocoascript.NSDateComponents;
    setModifiedDateComponents(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2888297-tasktype
    taskType(): cocoascript.INTaskType;
    setTaskType(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/2874016-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/intask/3227908-priority
    priority(): cocoascript.INTaskPriority;
    setPriority(): void;
    //
    alloc():cocoascript.INTask;
    //
    init():cocoascript.INTask;
  }
}

declare const INTask: cocoascript.INTask;
declare namespace cocoascript {
  /**
   * The textual content of a note.
   * doc://com.apple.documentation/documentation/sirikit/intextnotecontent
   */
  interface INTextNoteContent extends INNoteContent {
    // doc://com.apple.documentation/documentation/sirikit/intextnotecontent/2878142-initwithtext
    initWithText(text: cocoascript.NSString):cocoascript.INTextNoteContent;
    // doc://com.apple.documentation/documentation/sirikit/intextnotecontent/2874035-text
    text(): cocoascript.NSString;
    setText(): void;
    //
    alloc():cocoascript.INTextNoteContent;
    //
    init():cocoascript.INTextNoteContent;
  }
}

declare const INTextNoteContent: cocoascript.INTextNoteContent;
declare namespace cocoascript {
  /**
   * A trigger condition based on a date or time.
   * doc://com.apple.documentation/documentation/sirikit/intemporaleventtrigger
   */
  interface INTemporalEventTrigger extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intemporaleventtrigger/2878115-initwithdatecomponentsrange
    initWithDateComponentsRange(dateComponentsRange: cocoascript.INDateComponentsRange):cocoascript.INTemporalEventTrigger;
    // doc://com.apple.documentation/documentation/sirikit/intemporaleventtrigger/2878114-datecomponentsrange
    dateComponentsRange(): cocoascript.INDateComponentsRange;
    setDateComponentsRange(): void;
    //
    alloc():cocoascript.INTemporalEventTrigger;
    //
    init():cocoascript.INTemporalEventTrigger;
  }
}

declare const INTemporalEventTrigger: cocoascript.INTemporalEventTrigger;
declare namespace cocoascript {
  /**
   * An object that describes the pattern to use when repeating an event.
   * doc://com.apple.documentation/documentation/sirikit/inrecurrencerule
   */
  interface INRecurrenceRule extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/2890769-initwithinterval
    initWithInterval_frequency(interval: cocoascript.NSUInteger, frequency: cocoascript.INRecurrenceFrequency):cocoascript.INRecurrenceRule;
    // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/2890761-frequency
    frequency(): cocoascript.INRecurrenceFrequency;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/2890760-interval
    interval(): cocoascript.NSUInteger;
    setInterval(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/3552226-initwithinterval
    initWithInterval_frequency_weeklyRecurrenceDays(interval: cocoascript.NSUInteger, frequency: cocoascript.INRecurrenceFrequency, weeklyRecurrenceDays: cocoascript.INDayOfWeekOptions):cocoascript.INRecurrenceRule;
    // doc://com.apple.documentation/documentation/sirikit/inrecurrencerule/3552227-weeklyrecurrencedays
    weeklyRecurrenceDays(): cocoascript.INDayOfWeekOptions;
    setWeeklyRecurrenceDays(): void;
    //
    alloc():cocoascript.INRecurrenceRule;
    //
    init():cocoascript.INRecurrenceRule;
  }
}

declare const INRecurrenceRule: cocoascript.INRecurrenceRule;
declare namespace cocoascript {
  /**
   * A parameter of an interaction object.
   * doc://com.apple.documentation/documentation/sirikit/inparameter
   */
  interface INParameter extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908771-parameterkeypath
    parameterKeyPath(): cocoascript.NSString;
    setParameterKeyPath(): void;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908773-parameterclass
    parameterClass(): cocoascript.Class;
    setParameterClass(): void;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908767-indexforsubkeypath
    indexForSubKeyPath(subKeyPath: cocoascript.NSString):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908766-setindex
    setIndex_forSubKeyPath(index: cocoascript.NSUInteger, subKeyPath: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/sirikit/inparameter/2908764-isequaltoparameter
    isEqualToParameter(parameter: cocoascript.INParameter):cocoascript.BOOL;
    //
    alloc():cocoascript.INParameter;
    //
    init():cocoascript.INParameter;
  }
}

declare const INParameter: cocoascript.INParameter;
declare namespace cocoascript {
  /**
   * A card template for customizing the Siri watch face for a shortcut.
   * doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate
   */
  interface INDefaultCardTemplate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962952-initwithtitle
    initWithTitle(title: cocoascript.NSString):cocoascript.INDefaultCardTemplate;
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962954-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962953-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/indefaultcardtemplate/2962951-image
    image(): cocoascript.INImage;
    setImage(): void;
    //
    alloc():cocoascript.INDefaultCardTemplate;
    //
    init():cocoascript.INDefaultCardTemplate;
  }
}

declare const INDefaultCardTemplate: cocoascript.INDefaultCardTemplate;
declare namespace cocoascript {
  /**
   * An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.
   * doc://com.apple.documentation/documentation/sirikit/inmediaitem
   */
  interface INMediaItem extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962985-initwithidentifier
    initWithIdentifier_title_type_artwork(identifier: cocoascript.NSString, title: cocoascript.NSString, type: cocoascript.INMediaItemType, artwork: cocoascript.INImage):cocoascript.INMediaItem;
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/3074229-initwithidentifier
    initWithIdentifier_title_type_artwork_artist(identifier: cocoascript.NSString, title: cocoascript.NSString, type: cocoascript.INMediaItemType, artwork: cocoascript.INImage, artist: cocoascript.NSString):cocoascript.INMediaItem;
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962983-artwork
    artwork(): cocoascript.INImage;
    setArtwork(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962984-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962986-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/3074228-artist
    artist(): cocoascript.NSString;
    setArtist(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediaitem/2962987-type
    type(): cocoascript.INMediaItemType;
    setType(): void;
    //
    alloc():cocoascript.INMediaItem;
    //
    init():cocoascript.INMediaItem;
  }
}

declare const INMediaItem: cocoascript.INMediaItem;
declare namespace cocoascript {
  /**
   * An abstract class that represents a relevance provider.
   * doc://com.apple.documentation/documentation/sirikit/inrelevanceprovider
   */
  interface INRelevanceProvider extends NSObject {
    //
    alloc():cocoascript.INRelevanceProvider;
    //
    init():cocoascript.INRelevanceProvider;
  }
}

declare const INRelevanceProvider: cocoascript.INRelevanceProvider;
declare namespace cocoascript {
  /**
   * A shortcut the user added to Siri.
   * doc://com.apple.documentation/documentation/sirikit/invoiceshortcut
   */
  interface INVoiceShortcut extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcut/2963084-identifier
    identifier(): cocoascript.NSUUID;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcut/2963088-invocationphrase
    invocationPhrase(): cocoascript.NSString;
    setInvocationPhrase(): void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcut/2994363-shortcut
    shortcut(): cocoascript.INShortcut;
    setShortcut(): void;
    //
    alloc():cocoascript.INVoiceShortcut;
    //
    init():cocoascript.INVoiceShortcut;
  }
}

declare const INVoiceShortcut: cocoascript.INVoiceShortcut;
declare namespace cocoascript {
  /**
   * A representation of a custom intent parameter or response property.
   * doc://com.apple.documentation/documentation/sirikit/inobject
   */
  interface INObject extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inobject/3601151-initwithidentifier
    initWithIdentifier_displayString_subtitleString_displayImage(identifier: cocoascript.NSString, displayString: cocoascript.NSString, subtitleString: cocoascript.NSString, displayImage: cocoascript.INImage):cocoascript.INObject;
    // doc://com.apple.documentation/documentation/sirikit/inobject/2980692-initwithidentifier
    initWithIdentifier_displayString(identifier: cocoascript.NSString, displayString: cocoascript.NSString):cocoascript.INObject;
    // doc://com.apple.documentation/documentation/sirikit/inobject/3601150-initwithidentifier
    initWithIdentifier_displayString_pronunciationHint_subtitleString_displayImage(identifier: cocoascript.NSString, displayString: cocoascript.NSString, pronunciationHint: cocoascript.NSString, subtitleString: cocoascript.NSString, displayImage: cocoascript.INImage):cocoascript.INObject;
    // doc://com.apple.documentation/documentation/sirikit/inobject/2980693-initwithidentifier
    initWithIdentifier_displayString_pronunciationHint(identifier: cocoascript.NSString, displayString: cocoascript.NSString, pronunciationHint: cocoascript.NSString):cocoascript.INObject;
    // doc://com.apple.documentation/documentation/sirikit/inobject/2980690-displaystring
    displayString(): cocoascript.NSString;
    setDisplayString(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobject/3552206-subtitlestring
    subtitleString(): cocoascript.NSString;
    setSubtitleString(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobject/3552205-displayimage
    displayImage(): cocoascript.INImage;
    setDisplayImage(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobject/2980691-identifier
    identifier(): cocoascript.NSString;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobject/2980694-pronunciationhint
    pronunciationHint(): cocoascript.NSString;
    setPronunciationHint(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobject/3174873-alternativespeakablematches
    alternativeSpeakableMatches(): cocoascript.INSpeakableString;
    setAlternativeSpeakableMatches(): void;
    //
    alloc():cocoascript.INObject;
    //
    init():cocoascript.INObject;
  }
}

declare const INObject: cocoascript.INObject;
declare namespace cocoascript {
  /**
   * An object that defines a shortcut and its relevance to the user.
   * doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut
   */
  interface INRelevantShortcut extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993343-initwithshortcut
    initWithShortcut(shortcut: cocoascript.INShortcut):cocoascript.INRelevantShortcut;
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993345-shortcut
    shortcut(): cocoascript.INShortcut;
    setShortcut(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/3017321-shortcutrole
    shortcutRole(): cocoascript.INRelevantShortcutRole;
    setShortcutRole(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993344-relevanceproviders
    relevanceProviders(): cocoascript.INRelevanceProvider;
    setRelevanceProviders(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcut/2993346-watchtemplate
    watchTemplate(): cocoascript.INDefaultCardTemplate;
    setWatchTemplate(): void;
    //
    alloc():cocoascript.INRelevantShortcut;
    //
    init():cocoascript.INRelevantShortcut;
  }
}

declare const INRelevantShortcut: cocoascript.INRelevantShortcut;
declare namespace cocoascript {
  /**
   * An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inshortcut
   */
  interface INShortcut extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993351-initwithintent
    initWithIntent(intent: cocoascript.INIntent):cocoascript.INShortcut;
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993352-initwithuseractivity
    initWithUserActivity(userActivity: cocoascript.NSUserActivity):cocoascript.INShortcut;
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993353-intent
    intent(): cocoascript.INIntent;
    setIntent(): void;
    // doc://com.apple.documentation/documentation/sirikit/inshortcut/2993354-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    //
    alloc():cocoascript.INShortcut;
    //
    init():cocoascript.INShortcut;
  }
}

declare const INShortcut: cocoascript.INShortcut;
declare namespace cocoascript {
  /**
   * An object that describes the destination for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inmediadestination
   */
  interface INMediaDestination extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inmediadestination/3074218-playlistname
    playlistName(): cocoascript.NSString;
    setPlaylistName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediadestination/3074216-mediadestinationtype
    mediaDestinationType(): cocoascript.INMediaDestinationType;
    setMediaDestinationType(): void;
    //
    alloc():cocoascript.INMediaDestination;
    //
    init():cocoascript.INMediaDestination;
  }
}

declare const INMediaDestination: cocoascript.INMediaDestination;
declare namespace cocoascript {
  /**
   * An object that describes a media type to search for, such as a station name, song name, or album name.
   * doc://com.apple.documentation/documentation/sirikit/inmediasearch
   */
  interface INMediaSearch extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3362535-initwithmediatype
    initWithMediaType_sortOrder_mediaName_artistName_albumName_genreNames_moodNames_releaseDate_reference_mediaIdentifier(mediaType: cocoascript.INMediaItemType, sortOrder: cocoascript.INMediaSortOrder, mediaName: cocoascript.NSString, artistName: cocoascript.NSString, albumName: cocoascript.NSString, genreNames: cocoascript.NSString, moodNames: cocoascript.NSString, releaseDate: cocoascript.INDateComponentsRange, reference: cocoascript.INMediaReference, mediaIdentifier: cocoascript.NSString):cocoascript.INMediaSearch;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074247-genrenames
    genreNames(): cocoascript.NSString;
    setGenreNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074249-mediaidentifier
    mediaIdentifier(): cocoascript.NSString;
    setMediaIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074250-medianame
    mediaName(): cocoascript.NSString;
    setMediaName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074251-mediatype
    mediaType(): cocoascript.INMediaItemType;
    setMediaType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074252-moodnames
    moodNames(): cocoascript.NSString;
    setMoodNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074255-reference
    reference(): cocoascript.INMediaReference;
    setReference(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074256-releasedate
    releaseDate(): cocoascript.INDateComponentsRange;
    setReleaseDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074258-sortorder
    sortOrder(): cocoascript.INMediaSortOrder;
    setSortOrder(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074243-activitynames
    activityNames(): cocoascript.NSString;
    setActivityNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074244-albumname
    albumName(): cocoascript.NSString;
    setAlbumName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediasearch/3074245-artistname
    artistName(): cocoascript.NSString;
    setArtistName(): void;
    //
    alloc():cocoascript.INMediaSearch;
    //
    init():cocoascript.INMediaSearch;
  }
}

declare const INMediaSearch: cocoascript.INMediaSearch;
declare namespace cocoascript {
  /**
   * The information that describes an airline.
   * doc://com.apple.documentation/documentation/sirikit/inairline
   */
  interface INAirline extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inairline/3113779-initwithname
    initWithName_iataCode_icaoCode(name: cocoascript.NSString, iataCode: cocoascript.NSString, icaoCode: cocoascript.NSString):cocoascript.INAirline;
    // doc://com.apple.documentation/documentation/sirikit/inairline/3113780-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inairline/3113777-iatacode
    iataCode(): cocoascript.NSString;
    setIataCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inairline/3113778-icaocode
    icaoCode(): cocoascript.NSString;
    setIcaoCode(): void;
    //
    alloc():cocoascript.INAirline;
    //
    init():cocoascript.INAirline;
  }
}

declare const INAirline: cocoascript.INAirline;
declare namespace cocoascript {
  /**
   * The information that describes an airport.
   * doc://com.apple.documentation/documentation/sirikit/inairport
   */
  interface INAirport extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inairport/3113784-initwithname
    initWithName_iataCode_icaoCode(name: cocoascript.NSString, iataCode: cocoascript.NSString, icaoCode: cocoascript.NSString):cocoascript.INAirport;
    // doc://com.apple.documentation/documentation/sirikit/inairport/3113785-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inairport/3113782-iatacode
    iataCode(): cocoascript.NSString;
    setIataCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inairport/3113783-icaocode
    icaoCode(): cocoascript.NSString;
    setIcaoCode(): void;
    //
    alloc():cocoascript.INAirport;
    //
    init():cocoascript.INAirport;
  }
}

declare const INAirport: cocoascript.INAirport;
declare namespace cocoascript {
  /**
   * The information that describes a flight.
   * doc://com.apple.documentation/documentation/sirikit/inflight
   */
  interface INFlight extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191872-initwithairline
    initWithAirline_flightNumber_boardingTime_flightDuration_departureAirportGate_arrivalAirportGate(airline: cocoascript.INAirline, flightNumber: cocoascript.NSString, boardingTime: cocoascript.INDateComponentsRange, flightDuration: cocoascript.INDateComponentsRange, departureAirportGate: cocoascript.INAirportGate, arrivalAirportGate: cocoascript.INAirportGate):cocoascript.INFlight;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3113801-airline
    airline(): cocoascript.INAirline;
    setAirline(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3113805-flightnumber
    flightNumber(): cocoascript.NSString;
    setFlightNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3113803-boardingtime
    boardingTime(): cocoascript.INDateComponentsRange;
    setBoardingTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191871-flightduration
    flightDuration(): cocoascript.INDateComponentsRange;
    setFlightDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191870-departureairportgate
    departureAirportGate(): cocoascript.INAirportGate;
    setDepartureAirportGate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflight/3191869-arrivalairportgate
    arrivalAirportGate(): cocoascript.INAirportGate;
    setArrivalAirportGate(): void;
    //
    alloc():cocoascript.INFlight;
    //
    init():cocoascript.INFlight;
  }
}

declare const INFlight: cocoascript.INFlight;
declare namespace cocoascript {
  /**
   * The information that describes a flight reservation.
   * doc://com.apple.documentation/documentation/sirikit/inflightreservation
   */
  interface INFlightReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3552165-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_flight(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, flight: cocoascript.INFlight):cocoascript.INFlightReservation;
    // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3191873-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_flight(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservedSeat: cocoascript.INSeat, flight: cocoascript.INFlight):cocoascript.INFlightReservation;
    // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3113811-flight
    flight(): cocoascript.INFlight;
    setFlight(): void;
    // doc://com.apple.documentation/documentation/sirikit/inflightreservation/3113813-reservedseat
    reservedSeat(): cocoascript.INSeat;
    setReservedSeat(): void;
    //
    alloc():cocoascript.INFlightReservation;
    //
    init():cocoascript.INFlightReservation;
  }
}

declare const INFlightReservation: cocoascript.INFlightReservation;
declare namespace cocoascript {
  /**
   * An object that describes a reservation.
   * doc://com.apple.documentation/documentation/sirikit/inreservation
   */
  interface INReservation extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3113834-reservationholdername
    reservationHolderName(): cocoascript.NSString;
    setReservationHolderName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3113835-reservationnumber
    reservationNumber(): cocoascript.NSString;
    setReservationNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3113836-reservationstatus
    reservationStatus(): cocoascript.INReservationStatus;
    setReservationStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3113833-bookingtime
    bookingTime(): cocoascript.NSDate;
    setBookingTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3172624-itemreference
    itemReference(): cocoascript.INSpeakableString;
    setItemReference(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3191877-actions
    actions(): cocoascript.INReservationAction;
    setActions(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservation/3552229-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.INReservation;
    //
    init():cocoascript.INReservation;
  }
}

declare const INReservation: cocoascript.INReservation;
declare namespace cocoascript {
  /**
   * An object containing seat information associated with a reservation.
   * doc://com.apple.documentation/documentation/sirikit/inseat
   */
  interface INSeat extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inseat/3113845-initwithseatsection
    initWithSeatSection_seatRow_seatNumber_seatingType(seatSection: cocoascript.NSString, seatRow: cocoascript.NSString, seatNumber: cocoascript.NSString, seatingType: cocoascript.NSString):cocoascript.INSeat;
    // doc://com.apple.documentation/documentation/sirikit/inseat/3113848-seatsection
    seatSection(): cocoascript.NSString;
    setSeatSection(): void;
    // doc://com.apple.documentation/documentation/sirikit/inseat/3113847-seatrow
    seatRow(): cocoascript.NSString;
    setSeatRow(): void;
    // doc://com.apple.documentation/documentation/sirikit/inseat/3113846-seatnumber
    seatNumber(): cocoascript.NSString;
    setSeatNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inseat/3113849-seatingtype
    seatingType(): cocoascript.NSString;
    setSeatingType(): void;
    //
    alloc():cocoascript.INSeat;
    //
    init():cocoascript.INSeat;
  }
}

declare const INSeat: cocoascript.INSeat;
declare namespace cocoascript {
  /**
   * The information that describes a lodging reservation.
   * doc://com.apple.documentation/documentation/sirikit/inlodgingreservation
   */
  interface INLodgingReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3601149-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_lodgingBusinessLocation_reservationDuration_numberOfAdults_numberOfChildren(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, lodgingBusinessLocation: cocoascript.CLPlacemark, reservationDuration: cocoascript.INDateComponentsRange, numberOfAdults: cocoascript.NSNumber, numberOfChildren: cocoascript.NSNumber):cocoascript.INLodgingReservation;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3191875-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_lodgingBusinessLocation_reservationDuration_numberOfAdults_numberOfChildren(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, lodgingBusinessLocation: cocoascript.CLPlacemark, reservationDuration: cocoascript.INDateComponentsRange, numberOfAdults: cocoascript.NSNumber, numberOfChildren: cocoascript.NSNumber):cocoascript.INLodgingReservation;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141807-lodgingbusinesslocation
    lodgingBusinessLocation(): cocoascript.CLPlacemark;
    setLodgingBusinessLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141810-reservationduration
    reservationDuration(): cocoascript.INDateComponentsRange;
    setReservationDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141808-numberofadults
    numberOfAdults(): cocoascript.NSNumber;
    setNumberOfAdults(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlodgingreservation/3141809-numberofchildren
    numberOfChildren(): cocoascript.NSNumber;
    setNumberOfChildren(): void;
    //
    alloc():cocoascript.INLodgingReservation;
    //
    init():cocoascript.INLodgingReservation;
  }
}

declare const INLodgingReservation: cocoascript.INLodgingReservation;
declare namespace cocoascript {
  /**
   * The information that describes a rental car.
   * doc://com.apple.documentation/documentation/sirikit/inrentalcar
   */
  interface INRentalCar extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141812-initwithrentalcompanyname
    initWithRentalCompanyName_type_make_model_rentalCarDescription(rentalCompanyName: cocoascript.NSString, type: cocoascript.NSString, make: cocoascript.NSString, model: cocoascript.NSString, rentalCarDescription: cocoascript.NSString):cocoascript.INRentalCar;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141816-rentalcompanyname
    rentalCompanyName(): cocoascript.NSString;
    setRentalCompanyName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141817-type
    type(): cocoascript.NSString;
    setType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141813-make
    make(): cocoascript.NSString;
    setMake(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141814-model
    model(): cocoascript.NSString;
    setModel(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcar/3141815-rentalcardescription
    rentalCarDescription(): cocoascript.NSString;
    setRentalCarDescription(): void;
    //
    alloc():cocoascript.INRentalCar;
    //
    init():cocoascript.INRentalCar;
  }
}

declare const INRentalCar: cocoascript.INRentalCar;
declare namespace cocoascript {
  /**
   * The information that describes a rental car reservation.
   * doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation
   */
  interface INRentalCarReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3552228-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_rentalCar_rentalDuration_pickupLocation_dropOffLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, rentalCar: cocoascript.INRentalCar, rentalDuration: cocoascript.INDateComponentsRange, pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark):cocoascript.INRentalCarReservation;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3191876-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_rentalCar_rentalDuration_pickupLocation_dropOffLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, rentalCar: cocoascript.INRentalCar, rentalDuration: cocoascript.INDateComponentsRange, pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark):cocoascript.INRentalCarReservation;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141822-rentalcar
    rentalCar(): cocoascript.INRentalCar;
    setRentalCar(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141823-rentalduration
    rentalDuration(): cocoascript.INDateComponentsRange;
    setRentalDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141821-pickuplocation
    pickupLocation(): cocoascript.CLPlacemark;
    setPickupLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrentalcarreservation/3141819-dropofflocation
    dropOffLocation(): cocoascript.CLPlacemark;
    setDropOffLocation(): void;
    //
    alloc():cocoascript.INRentalCarReservation;
    //
    init():cocoascript.INRentalCarReservation;
  }
}

declare const INRentalCarReservation: cocoascript.INRentalCarReservation;
declare namespace cocoascript {
  /**
   * The information that describes a restaurant reservation.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation
   */
  interface INRestaurantReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3601152-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservationDuration_partySize_restaurantLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservationDuration: cocoascript.INDateComponentsRange, partySize: cocoascript.NSNumber, restaurantLocation: cocoascript.CLPlacemark):cocoascript.INRestaurantReservation;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3191888-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservationDuration_partySize_restaurantLocation(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservationDuration: cocoascript.INDateComponentsRange, partySize: cocoascript.NSNumber, restaurantLocation: cocoascript.CLPlacemark):cocoascript.INRestaurantReservation;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3141827-reservationduration
    reservationDuration(): cocoascript.INDateComponentsRange;
    setReservationDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3141828-restaurantlocation
    restaurantLocation(): cocoascript.CLPlacemark;
    setRestaurantLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservation/3141826-partysize
    partySize(): cocoascript.NSNumber;
    setPartySize(): void;
    //
    alloc():cocoascript.INRestaurantReservation;
    //
    init():cocoascript.INRestaurantReservation;
  }
}

declare const INRestaurantReservation: cocoascript.INRestaurantReservation;
declare namespace cocoascript {
  /**
   * The information that describes a ticketed event.
   * doc://com.apple.documentation/documentation/sirikit/inticketedevent
   */
  interface INTicketedEvent extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3191890-initwithcategory
    initWithCategory_name_eventDuration_location(category: cocoascript.INTicketedEventCategory, name: cocoascript.NSString, eventDuration: cocoascript.INDateComponentsRange, location: cocoascript.CLPlacemark):cocoascript.INTicketedEvent;
    // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3191889-category
    category(): cocoascript.INTicketedEventCategory;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3141882-eventduration
    eventDuration(): cocoascript.INDateComponentsRange;
    setEventDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3141884-location
    location(): cocoascript.CLPlacemark;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inticketedevent/3141885-name
    name(): cocoascript.NSString;
    setName(): void;
    //
    alloc():cocoascript.INTicketedEvent;
    //
    init():cocoascript.INTicketedEvent;
  }
}

declare const INTicketedEvent: cocoascript.INTicketedEvent;
declare namespace cocoascript {
  /**
   * The information that describes a ticketed event reservation.
   * doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation
   */
  interface INTicketedEventReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3552237-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_event(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, event: cocoascript.INTicketedEvent):cocoascript.INTicketedEventReservation;
    // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3191895-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_event(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservedSeat: cocoascript.INSeat, event: cocoascript.INTicketedEvent):cocoascript.INTicketedEventReservation;
    // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3141887-event
    event(): cocoascript.INTicketedEvent;
    setEvent(): void;
    // doc://com.apple.documentation/documentation/sirikit/inticketedeventreservation/3141889-reservedseat
    reservedSeat(): cocoascript.INSeat;
    setReservedSeat(): void;
    //
    alloc():cocoascript.INTicketedEventReservation;
    //
    init():cocoascript.INTicketedEventReservation;
  }
}

declare const INTicketedEventReservation: cocoascript.INTicketedEventReservation;
declare namespace cocoascript {
  /**
   * The information that describes a train reservation.
   * doc://com.apple.documentation/documentation/sirikit/intrainreservation
   */
  interface INTrainReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3552238-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_trainTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, trainTrip: cocoascript.INTrainTrip):cocoascript.INTrainReservation;
    // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3191896-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_trainTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, reservedSeat: cocoascript.INSeat, trainTrip: cocoascript.INTrainTrip):cocoascript.INTrainReservation;
    // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3141895-reservedseat
    reservedSeat(): cocoascript.INSeat;
    setReservedSeat(): void;
    // doc://com.apple.documentation/documentation/sirikit/intrainreservation/3141896-traintrip
    trainTrip(): cocoascript.INTrainTrip;
    setTrainTrip(): void;
    //
    alloc():cocoascript.INTrainReservation;
    //
    init():cocoascript.INTrainReservation;
  }
}

declare const INTrainReservation: cocoascript.INTrainReservation;
declare namespace cocoascript {
  /**
   * The information that describes a train trip.
   * doc://com.apple.documentation/documentation/sirikit/intraintrip
   */
  interface INTrainTrip extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3191897-initwithprovider
    initWithProvider_trainName_trainNumber_tripDuration_departureStationLocation_departurePlatform_arrivalStationLocation_arrivalPlatform(provider: cocoascript.NSString, trainName: cocoascript.NSString, trainNumber: cocoascript.NSString, tripDuration: cocoascript.INDateComponentsRange, departureStationLocation: cocoascript.CLPlacemark, departurePlatform: cocoascript.NSString, arrivalStationLocation: cocoascript.CLPlacemark, arrivalPlatform: cocoascript.NSString):cocoascript.INTrainTrip;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3191898-provider
    provider(): cocoascript.NSString;
    setProvider(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141904-trainname
    trainName(): cocoascript.NSString;
    setTrainName(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141905-trainnumber
    trainNumber(): cocoascript.NSString;
    setTrainNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141906-tripduration
    tripDuration(): cocoascript.INDateComponentsRange;
    setTripDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141901-departurestationlocation
    departureStationLocation(): cocoascript.CLPlacemark;
    setDepartureStationLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141900-departureplatform
    departurePlatform(): cocoascript.NSString;
    setDeparturePlatform(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141899-arrivalstationlocation
    arrivalStationLocation(): cocoascript.CLPlacemark;
    setArrivalStationLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/intraintrip/3141898-arrivalplatform
    arrivalPlatform(): cocoascript.NSString;
    setArrivalPlatform(): void;
    //
    alloc():cocoascript.INTrainTrip;
    //
    init():cocoascript.INTrainTrip;
  }
}

declare const INTrainTrip: cocoascript.INTrainTrip;
declare namespace cocoascript {
  /**
   * The information that describes an arrival or departure gate for a flight.
   * doc://com.apple.documentation/documentation/sirikit/inairportgate
   */
  interface INAirportGate extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191867-initwithairport
    initWithAirport_terminal_gate(airport: cocoascript.INAirport, terminal: cocoascript.NSString, gate: cocoascript.NSString):cocoascript.INAirportGate;
    // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191865-airport
    airport(): cocoascript.INAirport;
    setAirport(): void;
    // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191868-terminal
    terminal(): cocoascript.NSString;
    setTerminal(): void;
    // doc://com.apple.documentation/documentation/sirikit/inairportgate/3191866-gate
    gate(): cocoascript.NSString;
    setGate(): void;
    //
    alloc():cocoascript.INAirportGate;
    //
    init():cocoascript.INAirportGate;
  }
}

declare const INAirportGate: cocoascript.INAirportGate;
declare namespace cocoascript {
  /**
   * An action a user can perform that’s relevant to a reservation.
   * doc://com.apple.documentation/documentation/sirikit/inreservationaction
   */
  interface INReservationAction extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191879-initwithtype
    initWithType_validDuration_userActivity(type: cocoascript.INReservationActionType, validDuration: cocoascript.INDateComponentsRange, userActivity: cocoascript.NSUserActivity):cocoascript.INReservationAction;
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191880-type
    type(): cocoascript.INReservationActionType;
    setType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191881-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    // doc://com.apple.documentation/documentation/sirikit/inreservationaction/3191882-validduration
    validDuration(): cocoascript.INDateComponentsRange;
    setValidDuration(): void;
    //
    alloc():cocoascript.INReservationAction;
    //
    init():cocoascript.INReservationAction;
  }
}

declare const INReservationAction: cocoascript.INReservationAction;
declare namespace cocoascript {
  /**
   * The information that describes a boat trip.
   * doc://com.apple.documentation/documentation/sirikit/inboattrip
   */
  interface INBoatTrip extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552103-initwithprovider
    initWithProvider_boatName_boatNumber_tripDuration_departureBoatTerminalLocation_arrivalBoatTerminalLocation(provider: cocoascript.NSString, boatName: cocoascript.NSString, boatNumber: cocoascript.NSString, tripDuration: cocoascript.INDateComponentsRange, departureBoatTerminalLocation: cocoascript.CLPlacemark, arrivalBoatTerminalLocation: cocoascript.CLPlacemark):cocoascript.INBoatTrip;
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552104-provider
    provider(): cocoascript.NSString;
    setProvider(): void;
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552100-boatname
    boatName(): cocoascript.NSString;
    setBoatName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552101-boatnumber
    boatNumber(): cocoascript.NSString;
    setBoatNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552105-tripduration
    tripDuration(): cocoascript.INDateComponentsRange;
    setTripDuration(): void;
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552102-departureboatterminallocation
    departureBoatTerminalLocation(): cocoascript.CLPlacemark;
    setDepartureBoatTerminalLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inboattrip/3552099-arrivalboatterminallocation
    arrivalBoatTerminalLocation(): cocoascript.CLPlacemark;
    setArrivalBoatTerminalLocation(): void;
    //
    alloc():cocoascript.INBoatTrip;
    //
    init():cocoascript.INBoatTrip;
  }
}

declare const INBoatTrip: cocoascript.INBoatTrip;
declare namespace cocoascript {
  /**
   * Information describing a bus trip.
   * doc://com.apple.documentation/documentation/sirikit/inbustrip
   */
  interface INBusTrip extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552117-initwithprovider
    initWithProvider_busName_busNumber_tripDuration_departureBusStopLocation_departurePlatform_arrivalBusStopLocation_arrivalPlatform(provider: cocoascript.NSString, busName: cocoascript.NSString, busNumber: cocoascript.NSString, tripDuration: cocoascript.INDateComponentsRange, departureBusStopLocation: cocoascript.CLPlacemark, departurePlatform: cocoascript.NSString, arrivalBusStopLocation: cocoascript.CLPlacemark, arrivalPlatform: cocoascript.NSString):cocoascript.INBusTrip;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552111-arrivalbusstoplocation
    arrivalBusStopLocation(): cocoascript.CLPlacemark;
    setArrivalBusStopLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552112-arrivalplatform
    arrivalPlatform(): cocoascript.NSString;
    setArrivalPlatform(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552113-busname
    busName(): cocoascript.NSString;
    setBusName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552114-busnumber
    busNumber(): cocoascript.NSString;
    setBusNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552115-departurebusstoplocation
    departureBusStopLocation(): cocoascript.CLPlacemark;
    setDepartureBusStopLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552116-departureplatform
    departurePlatform(): cocoascript.NSString;
    setDeparturePlatform(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552118-provider
    provider(): cocoascript.NSString;
    setProvider(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbustrip/3552119-tripduration
    tripDuration(): cocoascript.INDateComponentsRange;
    setTripDuration(): void;
    //
    alloc():cocoascript.INBusTrip;
    //
    init():cocoascript.INBusTrip;
  }
}

declare const INBusTrip: cocoascript.INBusTrip;
declare namespace cocoascript {
  /**
   * A specific electric vehicle that Maps uses during route planning and navigation.
   * doc://com.apple.documentation/documentation/sirikit/incar
   */
  interface INCar extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incar/3552129-initwithcaridentifier
    initWithCarIdentifier_displayName_year_make_model_color_headUnit_supportedChargingConnectors(carIdentifier: cocoascript.NSString, displayName: cocoascript.NSString, year: cocoascript.NSString, make: cocoascript.NSString, model: cocoascript.NSString, color: cocoascript.CGColorRef, headUnit: cocoascript.INCarHeadUnit, supportedChargingConnectors: cocoascript.INCarChargingConnectorType):cocoascript.INCar;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552125-caridentifier
    carIdentifier(): cocoascript.NSString;
    setCarIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552127-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552130-make
    make(): cocoascript.NSString;
    setMake(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552132-model
    model(): cocoascript.NSString;
    setModel(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552126-color
    color(): cocoascript.CGColorRef;
    setColor(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552135-year
    year(): cocoascript.NSString;
    setYear(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552128-headunit
    headUnit(): cocoascript.INCarHeadUnit;
    setHeadUnit(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552134-supportedchargingconnectors
    supportedChargingConnectors(): cocoascript.INCarChargingConnectorType;
    setSupportedChargingConnectors(): void;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552131-maximumpowerforchargingconnector
    maximumPowerForChargingConnectorType(chargingConnectorType: cocoascript.INCarChargingConnectorType):cocoascript.NSUnitPower;
    // doc://com.apple.documentation/documentation/sirikit/incar/3552133-setmaximumpower
    setMaximumPower_forChargingConnectorType(power: cocoascript.NSUnitPower, chargingConnectorType: cocoascript.INCarChargingConnectorType):void;
    //
    alloc():cocoascript.INCar;
    //
    init():cocoascript.INCar;
  }
}

declare const INCar: cocoascript.INCar;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/inobjectcollection
   */
  interface INObjectCollection extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552209-initwithitems
    initWithItems(items: cocoascript.NSArray):cocoascript.INObjectCollection;
    // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552210-initwithsections
    initWithSections(sections: cocoascript.INObjectSection):cocoascript.INObjectCollection;
    // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552208-allitems
    allItems(): any;
    setAllItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552211-sections
    sections(): any;
    setSections(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobjectcollection/3552212-usesindexedcollation
    usesIndexedCollation(): cocoascript.BOOL;
    setUsesIndexedCollation(): void;
    //
    alloc():cocoascript.INObjectCollection;
    //
    init():cocoascript.INObjectCollection;
  }
}

declare const INObjectCollection: cocoascript.INObjectCollection;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/inobjectsection
   */
  interface INObjectSection extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inobjectsection/3552214-initwithtitle
    initWithTitle_items(title: cocoascript.NSString, items: cocoascript.NSArray):cocoascript.INObjectSection;
    // doc://com.apple.documentation/documentation/sirikit/inobjectsection/3552215-items
    items(): any;
    setItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inobjectsection/3552216-title
    title(): cocoascript.NSString;
    setTitle(): void;
    //
    alloc():cocoascript.INObjectSection;
    //
    init():cocoascript.INObjectSection;
  }
}

declare const INObjectSection: cocoascript.INObjectSection;
declare namespace cocoascript {
  /**
   * The information that describes a boat reservation.
   * doc://com.apple.documentation/documentation/sirikit/inboatreservation
   */
  interface INBoatReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inboatreservation/3601143-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_boatTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, boatTrip: cocoascript.INBoatTrip):cocoascript.INBoatReservation;
    // doc://com.apple.documentation/documentation/sirikit/inboatreservation/3601142-boattrip
    boatTrip(): cocoascript.INBoatTrip;
    setBoatTrip(): void;
    // doc://com.apple.documentation/documentation/sirikit/inboatreservation/3601144-reservedseat
    reservedSeat(): cocoascript.INSeat;
    setReservedSeat(): void;
    //
    alloc():cocoascript.INBoatReservation;
    //
    init():cocoascript.INBoatReservation;
  }
}

declare const INBoatReservation: cocoascript.INBoatReservation;
declare namespace cocoascript {
  /**
   * The information that describes a bus reservation.
   * doc://com.apple.documentation/documentation/sirikit/inbusreservation
   */
  interface INBusReservation extends INReservation {
    // doc://com.apple.documentation/documentation/sirikit/inbusreservation/3601147-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_busTrip(itemReference: cocoascript.INSpeakableString, reservationNumber: cocoascript.NSString, bookingTime: cocoascript.NSDate, reservationStatus: cocoascript.INReservationStatus, reservationHolderName: cocoascript.NSString, actions: cocoascript.INReservationAction, URL: cocoascript.NSURL, reservedSeat: cocoascript.INSeat, busTrip: cocoascript.INBusTrip):cocoascript.INBusReservation;
    // doc://com.apple.documentation/documentation/sirikit/inbusreservation/3601146-bustrip
    busTrip(): cocoascript.INBusTrip;
    setBusTrip(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbusreservation/3601148-reservedseat
    reservedSeat(): cocoascript.INSeat;
    setReservedSeat(): void;
    //
    alloc():cocoascript.INBusReservation;
    //
    init():cocoascript.INBusReservation;
  }
}

declare const INBusReservation: cocoascript.INBusReservation;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/incallrecordfilter
   */
  interface INCallRecordFilter extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649664-initwithparticipants
    initWithParticipants_callTypes_callCapability(participants: cocoascript.INPerson, callTypes: cocoascript.INCallRecordTypeOptions, callCapability: cocoascript.INCallCapability):cocoascript.INCallRecordFilter;
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649662-callcapability
    callCapability(): cocoascript.INCallCapability;
    setCallCapability(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649663-calltypes
    callTypes(): cocoascript.INCallRecordTypeOptions;
    setCallTypes(): void;
    // doc://com.apple.documentation/documentation/sirikit/incallrecordfilter/3649665-participants
    participants(): cocoascript.INPerson;
    setParticipants(): void;
    //
    alloc():cocoascript.INCallRecordFilter;
    //
    init():cocoascript.INCallRecordFilter;
  }
}

declare const INCallRecordFilter: cocoascript.INCallRecordFilter;
declare namespace cocoascript {
  /**
   * An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.
   * doc://com.apple.documentation/documentation/sirikit/incarheadunit
   */
  interface INCarHeadUnit extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/incarheadunit/3674223-initwithbluetoothidentifier
    initWithBluetoothIdentifier_iAP2Identifier(bluetoothIdentifier: cocoascript.NSString, iAP2Identifier: cocoascript.NSString):cocoascript.INCarHeadUnit;
    // doc://com.apple.documentation/documentation/sirikit/incarheadunit/3674221-bluetoothidentifier
    bluetoothIdentifier(): cocoascript.NSString;
    setBluetoothIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/incarheadunit/3674222-iap2identifier
    iAP2Identifier(): cocoascript.NSString;
    setIAP2Identifier(): void;
    //
    alloc():cocoascript.INCarHeadUnit;
    //
    init():cocoascript.INCarHeadUnit;
  }
}

declare const INCarHeadUnit: cocoascript.INCarHeadUnit;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inintenthandlingstatus
  type INIntentHandlingStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ininteractiondirection
  type INInteractionDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inshortcutavailabilityoptions
  type INShortcutAvailabilityOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A request to send a message to the designated recipients.
   * doc://com.apple.documentation/documentation/sirikit/insendmessageintent
   */
  interface INSendMessageIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/2866587-initwithrecipients
    initWithRecipients_content_speakableGroupName_conversationIdentifier_serviceName_sender(recipients: cocoascript.INPerson, content: cocoascript.NSString, speakableGroupName: cocoascript.INSpeakableString, conversationIdentifier: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1778238-initwithrecipients
    initWithRecipients_content_groupName_serviceName_sender(recipients: cocoascript.INPerson, content: cocoascript.NSString, groupName: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639316-recipients
    recipients(): cocoascript.INPerson;
    setRecipients(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/2866586-conversationidentifier
    conversationIdentifier(): cocoascript.NSString;
    setConversationIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/2866589-speakablegroupname
    speakableGroupName(): cocoascript.INSpeakableString;
    setSpeakableGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639106-content
    content(): cocoascript.NSString;
    setContent(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639342-servicename
    serviceName(): cocoascript.NSString;
    setServiceName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639248-sender
    sender(): cocoascript.INPerson;
    setSender(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1778199-groupname
    groupName(): cocoascript.NSString;
    setGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3552231-initwithrecipients
    initWithRecipients_outgoingMessageType_content_speakableGroupName_conversationIdentifier_serviceName_sender(recipients: cocoascript.INPerson, outgoingMessageType: cocoascript.INOutgoingMessageType, content: cocoascript.NSString, speakableGroupName: cocoascript.INSpeakableString, conversationIdentifier: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3621863-initwithrecipients
    initWithRecipients_outgoingMessageType_content_speakableGroupName_conversationIdentifier_serviceName_sender_attachments(recipients: cocoascript.INPerson, outgoingMessageType: cocoascript.INOutgoingMessageType, content: cocoascript.NSString, speakableGroupName: cocoascript.INSpeakableString, conversationIdentifier: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson, attachments: cocoascript.INSendMessageAttachment):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3621862-attachments
    attachments(): cocoascript.INSendMessageAttachment;
    setAttachments(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3552232-outgoingmessagetype
    outgoingMessageType(): cocoascript.INOutgoingMessageType;
    setOutgoingMessageType(): void;
    //
    alloc():cocoascript.INSendMessageIntent;
    //
    init():cocoascript.INSendMessageIntent;
  }
}

declare const INSendMessageIntent: cocoascript.INSendMessageIntent;
declare namespace cocoascript {
  /**
   * An object that describes a file.
   * doc://com.apple.documentation/documentation/sirikit/infile
   */
  interface INFile extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/infile/3152217-filename
    filename(): cocoascript.NSString;
    setFilename(): void;
    // doc://com.apple.documentation/documentation/sirikit/infile/3152213-data
    data(): cocoascript.NSData;
    setData(): void;
    // doc://com.apple.documentation/documentation/sirikit/infile/3152214-fileurl
    fileURL(): cocoascript.NSURL;
    setFileURL(): void;
    // doc://com.apple.documentation/documentation/sirikit/infile/3152218-typeidentifier
    typeIdentifier(): cocoascript.NSString;
    setTypeIdentifier(): void;
    //
    alloc():cocoascript.INFile;
    //
    init():cocoascript.INFile;
  }
}

declare const INFile: cocoascript.INFile;
declare namespace cocoascript {
  /**
   * An object that provides user information to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inusercontext
   */
  interface INUserContext extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inusercontext/3197613-becomecurrent
    becomeCurrent():void;
    //
    alloc():cocoascript.INUserContext;
    //
    init():cocoascript.INUserContext;
  }
}

declare const INUserContext: cocoascript.INUserContext;
declare namespace cocoascript {
  /**
   * An intent that contains information about media playable from your app.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediaintent
   */
  interface INPlayMediaIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074271-initwithmediaitems
    initWithMediaItems_mediaContainer_playShuffled_playbackRepeatMode_resumePlayback_playbackQueueLocation_playbackSpeed_mediaSearch(mediaItems: cocoascript.INMediaItem, mediaContainer: cocoascript.INMediaItem, playShuffled: cocoascript.NSNumber, playbackRepeatMode: cocoascript.INPlaybackRepeatMode, resumePlayback: cocoascript.NSNumber, playbackQueueLocation: cocoascript.INPlaybackQueueLocation, playbackSpeed: cocoascript.NSNumber, mediaSearch: cocoascript.INMediaSearch):cocoascript.INPlayMediaIntent;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963013-initwithmediaitems
    initWithMediaItems_mediaContainer_playShuffled_playbackRepeatMode_resumePlayback(mediaItems: cocoascript.INMediaItem, mediaContainer: cocoascript.INMediaItem, playShuffled: cocoascript.NSNumber, playbackRepeatMode: cocoascript.INPlaybackRepeatMode, resumePlayback: cocoascript.NSNumber):cocoascript.INPlayMediaIntent;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963014-mediacontainer
    mediaContainer(): cocoascript.INMediaItem;
    setMediaContainer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963015-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963016-playshuffled
    playShuffled(): cocoascript.NSNumber;
    setPlayShuffled(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963018-resumeplayback
    resumePlayback(): cocoascript.NSNumber;
    setResumePlayback(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/2963017-playbackrepeatmode
    playbackRepeatMode(): cocoascript.INPlaybackRepeatMode;
    setPlaybackRepeatMode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074274-playbackspeed
    playbackSpeed(): cocoascript.NSNumber;
    setPlaybackSpeed(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074273-playbackqueuelocation
    playbackQueueLocation(): cocoascript.INPlaybackQueueLocation;
    setPlaybackQueueLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintent/3074272-mediasearch
    mediaSearch(): cocoascript.INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():cocoascript.INPlayMediaIntent;
    //
    init():cocoascript.INPlayMediaIntent;
  }
}

declare const INPlayMediaIntent: cocoascript.INPlayMediaIntent;
declare namespace cocoascript {
  /**
   * A request to snooze one or more tasks.
   * doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent
   */
  interface INSnoozeTasksIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141841-initwithtasks
    initWithTasks_nextTriggerTime_all(tasks: cocoascript.INTask, nextTriggerTime: cocoascript.INDateComponentsRange, all: cocoascript.NSNumber):cocoascript.INSnoozeTasksIntent;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141842-nexttriggertime
    nextTriggerTime(): cocoascript.INDateComponentsRange;
    setNextTriggerTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141843-tasks
    tasks(): cocoascript.INTask;
    setTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintent/3141840-all
    all(): cocoascript.NSNumber;
    setAll(): void;
    //
    alloc():cocoascript.INSnoozeTasksIntent;
    //
    init():cocoascript.INSnoozeTasksIntent;
  }
}

declare const INSnoozeTasksIntent: cocoascript.INSnoozeTasksIntent;
declare namespace cocoascript {
  /**
   * Your response to a delete tasks request.
   * doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse
   */
  interface INSnoozeTasksIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse/3141851-initwithcode
    initWithCode_userActivity(code: cocoascript.INSnoozeTasksIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSnoozeTasksIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse/3141850-code
    code(): cocoascript.INSnoozeTasksIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponse/3141852-snoozedtasks
    snoozedTasks(): cocoascript.INTask;
    setSnoozedTasks(): void;
    //
    alloc():cocoascript.INSnoozeTasksIntentResponse;
    //
    init():cocoascript.INSnoozeTasksIntentResponse;
  }
}

declare const INSnoozeTasksIntentResponse: cocoascript.INSnoozeTasksIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the source of audio playback in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent
   */
  interface INSetAudioSourceInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent/1648409-initwithaudiosource
    initWithAudioSource_relativeAudioSourceReference(audioSource: cocoascript.INCarAudioSource, relativeAudioSourceReference: cocoascript.INRelativeReference):cocoascript.INSetAudioSourceInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent/1648406-audiosource
    audioSource(): cocoascript.INCarAudioSource;
    setAudioSource(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent/1648407-relativeaudiosourcereference
    relativeAudioSourceReference(): cocoascript.INRelativeReference;
    setRelativeAudioSourceReference(): void;
    //
    alloc():cocoascript.INSetAudioSourceInCarIntent;
    //
    init():cocoascript.INSetAudioSourceInCarIntent;
  }
}

declare const INSetAudioSourceInCarIntent: cocoascript.INSetAudioSourceInCarIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the CarPlay domain.
   * doc://com.apple.documentation/documentation/sirikit/incarplaydomainhandling
   */
  interface INCarPlayDomainHandling extends INSaveProfileInCarIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a set audio source in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponse
   */
  interface INSetAudioSourceInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponse/1648501-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetAudioSourceInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetAudioSourceInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponse/1833289-code
    code(): cocoascript.INSetAudioSourceInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetAudioSourceInCarIntentResponse;
    //
    init():cocoascript.INSetAudioSourceInCarIntentResponse;
  }
}

declare const INSetAudioSourceInCarIntentResponse: cocoascript.INSetAudioSourceInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to delete one or more tasks.
   * doc://com.apple.documentation/documentation/sirikit/indeletetasksintent
   */
  interface INDeleteTasksIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141686-initwithtasklist
    initWithTaskList_tasks_all(taskList: cocoascript.INTaskList, tasks: cocoascript.INTask, all: cocoascript.NSNumber):cocoascript.INDeleteTasksIntent;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141687-tasklist
    taskList(): cocoascript.INTaskList;
    setTaskList(): void;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141688-tasks
    tasks(): cocoascript.INTask;
    setTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintent/3141685-all
    all(): cocoascript.NSNumber;
    setAll(): void;
    //
    alloc():cocoascript.INDeleteTasksIntent;
    //
    init():cocoascript.INDeleteTasksIntent;
  }
}

declare const INDeleteTasksIntent: cocoascript.INDeleteTasksIntent;
declare namespace cocoascript {
  /**
   * Your response to a request to delete tasks.
   * doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse
   */
  interface INDeleteTasksIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse/3141697-initwithcode
    initWithCode_userActivity(code: cocoascript.INDeleteTasksIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INDeleteTasksIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse/3141696-deletedtasks
    deletedTasks(): cocoascript.INTask;
    setDeletedTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponse/3141695-code
    code(): cocoascript.INDeleteTasksIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INDeleteTasksIntentResponse;
    //
    init():cocoascript.INDeleteTasksIntentResponse;
  }
}

declare const INDeleteTasksIntentResponse: cocoascript.INDeleteTasksIntentResponse;
declare namespace cocoascript {
  /**
   * A request to modify the attributes of a message.
   * doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent
   */
  interface INSetMessageAttributeIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent/1829396-initwithidentifiers
    initWithIdentifiers_attribute(identifiers: cocoascript.NSString, attribute: cocoascript.INMessageAttribute):cocoascript.INSetMessageAttributeIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent/1829395-attribute
    attribute(): cocoascript.INMessageAttribute;
    setAttribute(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintent/1829392-identifiers
    identifiers(): cocoascript.NSString;
    setIdentifiers(): void;
    //
    alloc():cocoascript.INSetMessageAttributeIntent;
    //
    init():cocoascript.INSetMessageAttributeIntent;
  }
}

declare const INSetMessageAttributeIntent: cocoascript.INSetMessageAttributeIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the messages domain.
   * doc://com.apple.documentation/documentation/sirikit/inmessagesdomainhandling
   */
  interface INMessagesDomainHandling extends INSearchForMessagesIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a set message attribute intent.
   * doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponse
   */
  interface INSetMessageAttributeIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponse/1831692-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetMessageAttributeIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetMessageAttributeIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponse/1831687-code
    code(): cocoascript.INSetMessageAttributeIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetMessageAttributeIntentResponse;
    //
    init():cocoascript.INSetMessageAttributeIntentResponse;
  }
}

declare const INSetMessageAttributeIntentResponse: cocoascript.INSetMessageAttributeIntentResponse;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inoutgoingmessagetype
  type INOutgoingMessageType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/inoutgoingmessagetyperesolutionresult
   */
  interface INOutgoingMessageTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INOutgoingMessageTypeResolutionResult;
    //
    init():cocoascript.INOutgoingMessageTypeResolutionResult;
  }
}

declare const INOutgoingMessageTypeResolutionResult: cocoascript.INOutgoingMessageTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A request to save the user’s vehicle environment settings in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent
   */
  interface INSaveProfileInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2727145-initwithprofilenumber
    initWithProfileNumber_profileName(profileNumber: cocoascript.NSNumber, profileName: cocoascript.NSString):cocoascript.INSaveProfileInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2102343-initwithprofilenumber
    initWithProfileNumber_profileLabel(profileNumber: cocoascript.NSNumber, profileLabel: cocoascript.NSString):cocoascript.INSaveProfileInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2102346-profilenumber
    profileNumber(): cocoascript.NSNumber;
    setProfileNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2727143-profilename
    profileName(): cocoascript.NSString;
    setProfileName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintent/2102345-profilelabel
    profileLabel(): cocoascript.NSString;
    setProfileLabel(): void;
    //
    alloc():cocoascript.INSaveProfileInCarIntent;
    //
    init():cocoascript.INSaveProfileInCarIntent;
  }
}

declare const INSaveProfileInCarIntent: cocoascript.INSaveProfileInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a save profile in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponse
   */
  interface INSaveProfileInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponse/2102277-initwithcode
    initWithCode_userActivity(code: cocoascript.INSaveProfileInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSaveProfileInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponse/2102282-code
    code(): cocoascript.INSaveProfileInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSaveProfileInCarIntentResponse;
    //
    init():cocoascript.INSaveProfileInCarIntentResponse;
  }
}

declare const INSaveProfileInCarIntentResponse: cocoascript.INSaveProfileInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to transfer money from the current user’s account to a different user’s account.
   * doc://com.apple.documentation/documentation/sirikit/insendpaymentintent
   */
  interface INSendPaymentIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/2102644-initwithpayee
    initWithPayee_currencyAmount_note(payee: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, note: cocoascript.NSString):cocoascript.INSendPaymentIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/1639374-payee
    payee(): cocoascript.INPerson;
    setPayee(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/1638381-currencyamount
    currencyAmount(): cocoascript.INCurrencyAmount;
    setCurrencyAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintent/1639091-note
    note(): cocoascript.NSString;
    setNote(): void;
    //
    alloc():cocoascript.INSendPaymentIntent;
    //
    init():cocoascript.INSendPaymentIntent;
  }
}

declare const INSendPaymentIntent: cocoascript.INSendPaymentIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the payments domain.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentsdomainhandling
   */
  interface INPaymentsDomainHandling extends INPayBillIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a send payment intent.
   * doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse
   */
  interface INSendPaymentIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse/1639483-initwithcode
    initWithCode_userActivity(code: cocoascript.INSendPaymentIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSendPaymentIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse/1829426-code
    code(): cocoascript.INSendPaymentIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponse/1638625-paymentrecord
    paymentRecord(): cocoascript.INPaymentRecord;
    setPaymentRecord(): void;
    //
    alloc():cocoascript.INSendPaymentIntentResponse;
    //
    init():cocoascript.INSendPaymentIntentResponse;
  }
}

declare const INSendPaymentIntentResponse: cocoascript.INSendPaymentIntentResponse;
declare namespace cocoascript {
  /**
   * A request to create a new note.
   * doc://com.apple.documentation/documentation/sirikit/increatenoteintent
   */
  interface INCreateNoteIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874065-initwithtitle
    initWithTitle_content_groupName(title: cocoascript.INSpeakableString, content: cocoascript.INNoteContent, groupName: cocoascript.INSpeakableString):cocoascript.INCreateNoteIntent;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874056-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874060-content
    content(): cocoascript.INNoteContent;
    setContent(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintent/2874063-groupname
    groupName(): cocoascript.INSpeakableString;
    setGroupName(): void;
    //
    alloc():cocoascript.INCreateNoteIntent;
    //
    init():cocoascript.INCreateNoteIntent;
  }
}

declare const INCreateNoteIntent: cocoascript.INCreateNoteIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the lists and notes domain.
   * doc://com.apple.documentation/documentation/sirikit/innotebookdomainhandling
   */
  interface INNotebookDomainHandling extends INAddTasksIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a request to create a note.
   * doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse
   */
  interface INCreateNoteIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse/2873960-initwithcode
    initWithCode_userActivity(code: cocoascript.INCreateNoteIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCreateNoteIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse/2873962-code
    code(): cocoascript.INCreateNoteIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponse/2873959-creatednote
    createdNote(): cocoascript.INNote;
    setCreatedNote(): void;
    //
    alloc():cocoascript.INCreateNoteIntentResponse;
    //
    init():cocoascript.INCreateNoteIntentResponse;
  }
}

declare const INCreateNoteIntentResponse: cocoascript.INCreateNoteIntentResponse;
declare namespace cocoascript {
  /**
   * A request to book the specified ride from your service.
   * doc://com.apple.documentation/documentation/sirikit/inrequestrideintent
   */
  interface INRequestRideIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2838713-initwithpickuplocation
    initWithPickupLocation_dropOffLocation_rideOptionName_partySize_paymentMethod_scheduledPickupTime(pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark, rideOptionName: cocoascript.INSpeakableString, partySize: cocoascript.NSNumber, paymentMethod: cocoascript.INPaymentMethod, scheduledPickupTime: cocoascript.INDateComponentsRange):cocoascript.INRequestRideIntent;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2274389-initwithpickuplocation
    initWithPickupLocation_dropOffLocation_rideOptionName_partySize_paymentMethod(pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark, rideOptionName: cocoascript.INSpeakableString, partySize: cocoascript.NSNumber, paymentMethod: cocoascript.INPaymentMethod):cocoascript.INRequestRideIntent;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649615-rideoptionname
    rideOptionName(): cocoascript.INSpeakableString;
    setRideOptionName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649610-partysize
    partySize(): cocoascript.NSNumber;
    setPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649623-pickuplocation
    pickupLocation(): cocoascript.CLPlacemark;
    setPickupLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2838714-scheduledpickuptime
    scheduledPickupTime(): cocoascript.INDateComponentsRange;
    setScheduledPickupTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/1649618-dropofflocation
    dropOffLocation(): cocoascript.CLPlacemark;
    setDropOffLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintent/2274382-paymentmethod
    paymentMethod(): cocoascript.INPaymentMethod;
    setPaymentMethod(): void;
    //
    alloc():cocoascript.INRequestRideIntent;
    //
    init():cocoascript.INRequestRideIntent;
  }
}

declare const INRequestRideIntent: cocoascript.INRequestRideIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request ride intent.
   * doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse
   */
  interface INRequestRideIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse/1649171-initwithcode
    initWithCode_userActivity(code: cocoascript.INRequestRideIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INRequestRideIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse/1833290-code
    code(): cocoascript.INRequestRideIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponse/1649156-ridestatus
    rideStatus(): cocoascript.INRideStatus;
    setRideStatus(): void;
    //
    alloc():cocoascript.INRequestRideIntentResponse;
    //
    init():cocoascript.INRequestRideIntentResponse;
  }
}

declare const INRequestRideIntentResponse: cocoascript.INRequestRideIntentResponse;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the ride-booking domain.
   * doc://com.apple.documentation/documentation/sirikit/inridesharingdomainhandling
   */
  interface INRidesharingDomainHandling extends INCancelRideIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a get user current restaurant reservation bookings intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/2102292-initwithusercurrentbookings
    initWithUserCurrentBookings_code_userActivity(userCurrentBookings: cocoascript.INRestaurantReservationUserBooking, code: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/1829446-code
    code(): cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/1648495-usercurrentbookings
    userCurrentBookings(): cocoascript.INRestaurantReservationUserBooking;
    setUserCurrentBookings(): void;
    //
    alloc():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
    //
    init():cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
  }
}

declare const INGetUserCurrentRestaurantReservationBookingsIntentResponse: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the workouts domain.
   * doc://com.apple.documentation/documentation/sirikit/inworkoutsdomainhandling
   */
  interface INWorkoutsDomainHandling extends INCancelWorkoutIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * A request to resume a paused workout.
   * doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintent
   */
  interface INResumeWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintent/1638965-initwithworkoutname
    initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INResumeWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintent/1639245-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():cocoascript.INResumeWorkoutIntent;
    //
    init():cocoascript.INResumeWorkoutIntent;
  }
}

declare const INResumeWorkoutIntent: cocoascript.INResumeWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a resume workout intent.
   * doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponse
   */
  interface INResumeWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponse/1638616-initwithcode
    initWithCode_userActivity(code: cocoascript.INResumeWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INResumeWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponse/1833295-code
    code(): cocoascript.INResumeWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INResumeWorkoutIntentResponse;
    //
    init():cocoascript.INResumeWorkoutIntentResponse;
  }
}

declare const INResumeWorkoutIntentResponse: cocoascript.INResumeWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request to append content to a note.
   * doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent
   */
  interface INAppendToNoteIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent/2878103-initwithtargetnote
    initWithTargetNote_content(targetNote: cocoascript.INNote, content: cocoascript.INNoteContent):cocoascript.INAppendToNoteIntent;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent/2873746-content
    content(): cocoascript.INNoteContent;
    setContent(): void;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintent/2878104-targetnote
    targetNote(): cocoascript.INNote;
    setTargetNote(): void;
    //
    alloc():cocoascript.INAppendToNoteIntent;
    //
    init():cocoascript.INAppendToNoteIntent;
  }
}

declare const INAppendToNoteIntent: cocoascript.INAppendToNoteIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to append content to a note.
   * doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse
   */
  interface INAppendToNoteIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse/2873878-initwithcode
    initWithCode_userActivity(code: cocoascript.INAppendToNoteIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INAppendToNoteIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse/2873875-code
    code(): cocoascript.INAppendToNoteIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponse/2873874-note
    note(): cocoascript.INNote;
    setNote(): void;
    //
    alloc():cocoascript.INAppendToNoteIntentResponse;
    //
    init():cocoascript.INAppendToNoteIntentResponse;
  }
}

declare const INAppendToNoteIntentResponse: cocoascript.INAppendToNoteIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the defroster settings in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent
   */
  interface INSetDefrosterSettingsInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/3019572-initwithenable
    initWithEnable_defroster_carName(enable: cocoascript.NSNumber, defroster: cocoascript.INCarDefroster, carName: cocoascript.INSpeakableString):cocoascript.INSetDefrosterSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/1649426-initwithenable
    initWithEnable_defroster(enable: cocoascript.NSNumber, defroster: cocoascript.INCarDefroster):cocoascript.INSetDefrosterSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/1649424-enable
    enable(): cocoascript.NSNumber;
    setEnable(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/1649428-defroster
    defroster(): cocoascript.INCarDefroster;
    setDefroster(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintent/3019571-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    //
    alloc():cocoascript.INSetDefrosterSettingsInCarIntent;
    //
    init():cocoascript.INSetDefrosterSettingsInCarIntent;
  }
}

declare const INSetDefrosterSettingsInCarIntent: cocoascript.INSetDefrosterSettingsInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set defroster settings in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponse
   */
  interface INSetDefrosterSettingsInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponse/1648507-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetDefrosterSettingsInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetDefrosterSettingsInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponse/1829409-code
    code(): cocoascript.INSetDefrosterSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetDefrosterSettingsInCarIntentResponse;
    //
    init():cocoascript.INSetDefrosterSettingsInCarIntentResponse;
  }
}

declare const INSetDefrosterSettingsInCarIntentResponse: cocoascript.INSetDefrosterSettingsInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to end the current workout that also validates workout parameters and saves the results.
   * doc://com.apple.documentation/documentation/sirikit/inendworkoutintent
   */
  interface INEndWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintent/1638329-initwithworkoutname
    initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INEndWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintent/1638515-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():cocoascript.INEndWorkoutIntent;
    //
    init():cocoascript.INEndWorkoutIntent;
  }
}

declare const INEndWorkoutIntent: cocoascript.INEndWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to an end workout intent.
   * doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponse
   */
  interface INEndWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponse/1639429-initwithcode
    initWithCode_userActivity(code: cocoascript.INEndWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INEndWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponse/1833283-code
    code(): cocoascript.INEndWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INEndWorkoutIntentResponse;
    //
    init():cocoascript.INEndWorkoutIntentResponse;
  }
}

declare const INEndWorkoutIntentResponse: cocoascript.INEndWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request to pause the current workout that also stops the gathering of workout data.
   * doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintent
   */
  interface INPauseWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintent/1639171-initwithworkoutname
    initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INPauseWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintent/1638222-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():cocoascript.INPauseWorkoutIntent;
    //
    init():cocoascript.INPauseWorkoutIntent;
  }
}

declare const INPauseWorkoutIntent: cocoascript.INPauseWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a pause workout intent.
   * doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponse
   */
  interface INPauseWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponse/1638462-initwithcode
    initWithCode_userActivity(code: cocoascript.INPauseWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INPauseWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponse/1829799-code
    code(): cocoascript.INPauseWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INPauseWorkoutIntentResponse;
    //
    init():cocoascript.INPauseWorkoutIntentResponse;
  }
}

declare const INPauseWorkoutIntentResponse: cocoascript.INPauseWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the default values to use when fetching potential reservation options.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent/2877495-initwithrestaurant
    initWithRestaurant(restaurant: cocoascript.INRestaurant):cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent/1650053-restaurant
    restaurant(): cocoascript.INRestaurant;
    setRestaurant(): void;
    //
    alloc():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
    //
    init():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
  }
}

declare const INGetAvailableRestaurantReservationBookingDefaultsIntent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a get available restaurant reservation booking defaults intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/2102588-initwithdefaultpartysize
    initWithDefaultPartySize_defaultBookingDate_code_userActivity(defaultPartySize: cocoascript.NSUInteger, defaultBookingDate: cocoascript.NSDate, code: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1833312-code
    code(): cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1648798-defaultbookingdate
    defaultBookingDate(): cocoascript.NSDate;
    setDefaultBookingDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1648799-defaultpartysize
    defaultPartySize(): cocoascript.NSUInteger;
    setDefaultPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1778390-maximumpartysize
    maximumPartySize(): cocoascript.NSNumber;
    setMaximumPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/2102587-minimumpartysize
    minimumPartySize(): cocoascript.NSNumber;
    setMinimumPartySize(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1778384-providerimage
    providerImage(): cocoascript.INImage;
    setProviderImage(): void;
    //
    alloc():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
    //
    init():cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
  }
}

declare const INGetAvailableRestaurantReservationBookingDefaultsIntentResponse: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start an audio or video call with one or more users.
   * doc://com.apple.documentation/documentation/sirikit/instartcallintent
   */
  interface INStartCallIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3333283-initwithaudioroute
    initWithAudioRoute_destinationType_contacts_recordTypeForRedialing_callCapability(audioRoute: cocoascript.INCallAudioRoute, destinationType: cocoascript.INCallDestinationType, contacts: cocoascript.INPerson, recordTypeForRedialing: cocoascript.INCallRecordType, callCapability: cocoascript.INCallCapability):cocoascript.INStartCallIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3165942-callcapability
    callCapability(): cocoascript.INCallCapability;
    setCallCapability(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3165943-contacts
    contacts(): cocoascript.INPerson;
    setContacts(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3165944-destinationtype
    destinationType(): cocoascript.INCallDestinationType;
    setDestinationType(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3197610-audioroute
    audioRoute(): cocoascript.INCallAudioRoute;
    setAudioRoute(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3333284-recordtypeforredialing
    recordTypeForRedialing(): cocoascript.INCallRecordType;
    setRecordTypeForRedialing(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3649677-initwithcallrecordfilter
    initWithCallRecordFilter_callRecordToCallBack_audioRoute_destinationType_contacts_callCapability(callRecordFilter: cocoascript.INCallRecordFilter, callRecordToCallBack: cocoascript.INCallRecord, audioRoute: cocoascript.INCallAudioRoute, destinationType: cocoascript.INCallDestinationType, contacts: cocoascript.INPerson, callCapability: cocoascript.INCallCapability):cocoascript.INStartCallIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3649675-callrecordfilter
    callRecordFilter(): cocoascript.INCallRecordFilter;
    setCallRecordFilter(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintent/3649676-callrecordtocallback
    callRecordToCallBack(): cocoascript.INCallRecord;
    setCallRecordToCallBack(): void;
    //
    alloc():cocoascript.INStartCallIntent;
    //
    init():cocoascript.INStartCallIntent;
  }
}

declare const INStartCallIntent: cocoascript.INStartCallIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a start call intent.
   * doc://com.apple.documentation/documentation/sirikit/instartcallintentresponse
   */
  interface INStartCallIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartcallintentresponse/3165954-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartCallIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartCallIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartcallintentresponse/3165953-code
    code(): cocoascript.INStartCallIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INStartCallIntentResponse;
    //
    init():cocoascript.INStartCallIntentResponse;
  }
}

declare const INStartCallIntentResponse: cocoascript.INStartCallIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start an audio-only call with one or more users.
   * doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent
   */
  interface INStartAudioCallIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/2873773-initwithdestinationtype
    initWithDestinationType_contacts(destinationType: cocoascript.INCallDestinationType, contacts: cocoascript.INPerson):cocoascript.INStartAudioCallIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/1638231-initwithcontacts
    initWithContacts(contacts: cocoascript.INPerson):cocoascript.INStartAudioCallIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/1638516-contacts
    contacts(): cocoascript.INPerson;
    setContacts(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintent/2873774-destinationtype
    destinationType(): cocoascript.INCallDestinationType;
    setDestinationType(): void;
    //
    alloc():cocoascript.INStartAudioCallIntent;
    //
    init():cocoascript.INStartAudioCallIntent;
  }
}

declare const INStartAudioCallIntent: cocoascript.INStartAudioCallIntent;
declare namespace cocoascript {
  /**
   * Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
   * doc://com.apple.documentation/documentation/sirikit/incallsdomainhandling
   */
  interface INCallsDomainHandling extends INSearchCallHistoryIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a start audio call intent.
   * doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponse
   */
  interface INStartAudioCallIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponse/1638718-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartAudioCallIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartAudioCallIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponse/1823483-code
    code(): cocoascript.INStartAudioCallIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INStartAudioCallIntentResponse;
    //
    init():cocoascript.INStartAudioCallIntentResponse;
  }
}

declare const INStartAudioCallIntentResponse: cocoascript.INStartAudioCallIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the climate settings in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent
   */
  interface INSetClimateSettingsInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/3019569-initwithenablefan
    initWithEnableFan_enableAirConditioner_enableClimateControl_enableAutoMode_airCirculationMode_fanSpeedIndex_fanSpeedPercentage_relativeFanSpeedSetting_temperature_relativeTemperatureSetting_climateZone_carName(enableFan: cocoascript.NSNumber, enableAirConditioner: cocoascript.NSNumber, enableClimateControl: cocoascript.NSNumber, enableAutoMode: cocoascript.NSNumber, airCirculationMode: cocoascript.INCarAirCirculationMode, fanSpeedIndex: cocoascript.NSNumber, fanSpeedPercentage: cocoascript.NSNumber, relativeFanSpeedSetting: cocoascript.INRelativeSetting, temperature: cocoascript.NSUnitTemperature, relativeTemperatureSetting: cocoascript.INRelativeSetting, climateZone: cocoascript.INCarSeat, carName: cocoascript.INSpeakableString):cocoascript.INSetClimateSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/2102611-initwithenablefan
    initWithEnableFan_enableAirConditioner_enableClimateControl_enableAutoMode_airCirculationMode_fanSpeedIndex_fanSpeedPercentage_relativeFanSpeedSetting_temperature_relativeTemperatureSetting_climateZone(enableFan: cocoascript.NSNumber, enableAirConditioner: cocoascript.NSNumber, enableClimateControl: cocoascript.NSNumber, enableAutoMode: cocoascript.NSNumber, airCirculationMode: cocoascript.INCarAirCirculationMode, fanSpeedIndex: cocoascript.NSNumber, fanSpeedPercentage: cocoascript.NSNumber, relativeFanSpeedSetting: cocoascript.INRelativeSetting, temperature: cocoascript.NSUnitTemperature, relativeTemperatureSetting: cocoascript.INRelativeSetting, climateZone: cocoascript.INCarSeat):cocoascript.INSetClimateSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/3019568-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649067-enableclimatecontrol
    enableClimateControl(): cocoascript.NSNumber;
    setEnableClimateControl(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649057-enableautomode
    enableAutoMode(): cocoascript.NSNumber;
    setEnableAutoMode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649051-aircirculationmode
    airCirculationMode(): cocoascript.INCarAirCirculationMode;
    setAirCirculationMode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649061-temperature
    temperature(): cocoascript.NSUnitTemperature;
    setTemperature(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649052-relativetemperaturesetting
    relativeTemperatureSetting(): cocoascript.INRelativeSetting;
    setRelativeTemperatureSetting(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/2102612-climatezone
    climateZone(): cocoascript.INCarSeat;
    setClimateZone(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649073-enablefan
    enableFan(): cocoascript.NSNumber;
    setEnableFan(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649072-fanspeedindex
    fanSpeedIndex(): cocoascript.NSNumber;
    setFanSpeedIndex(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649064-fanspeedpercentage
    fanSpeedPercentage(): cocoascript.NSNumber;
    setFanSpeedPercentage(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649063-relativefanspeedsetting
    relativeFanSpeedSetting(): cocoascript.INRelativeSetting;
    setRelativeFanSpeedSetting(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintent/1649054-enableairconditioner
    enableAirConditioner(): cocoascript.NSNumber;
    setEnableAirConditioner(): void;
    //
    alloc():cocoascript.INSetClimateSettingsInCarIntent;
    //
    init():cocoascript.INSetClimateSettingsInCarIntent;
  }
}

declare const INSetClimateSettingsInCarIntent: cocoascript.INSetClimateSettingsInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set climate settings in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponse
   */
  interface INSetClimateSettingsInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponse/1649645-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetClimateSettingsInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetClimateSettingsInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponse/1829405-code
    code(): cocoascript.INSetClimateSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetClimateSettingsInCarIntentResponse;
    //
    init():cocoascript.INSetClimateSettingsInCarIntentResponse;
  }
}

declare const INSetClimateSettingsInCarIntentResponse: cocoascript.INSetClimateSettingsInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request for a visual code to use for exchanging payment and contact information.
   * doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintent
   */
  interface INGetVisualCodeIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintent/2873899-initwithvisualcodetype
    initWithVisualCodeType(visualCodeType: cocoascript.INVisualCodeType):cocoascript.INGetVisualCodeIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintent/2873900-visualcodetype
    visualCodeType(): cocoascript.INVisualCodeType;
    setVisualCodeType(): void;
    //
    alloc():cocoascript.INGetVisualCodeIntent;
    //
    init():cocoascript.INGetVisualCodeIntent;
  }
}

declare const INGetVisualCodeIntent: cocoascript.INGetVisualCodeIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the visual codes domain.
   * doc://com.apple.documentation/documentation/sirikit/invisualcodedomainhandling
   */
  interface INVisualCodeDomainHandling extends INGetVisualCodeIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a request for a visual code.
   * doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse
   */
  interface INGetVisualCodeIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse/2874021-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetVisualCodeIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetVisualCodeIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse/2874032-code
    code(): cocoascript.INGetVisualCodeIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponse/2874029-visualcodeimage
    visualCodeImage(): cocoascript.INImage;
    setVisualCodeImage(): void;
    //
    alloc():cocoascript.INGetVisualCodeIntentResponse;
    //
    init():cocoascript.INGetVisualCodeIntentResponse;
  }
}

declare const INGetVisualCodeIntentResponse: cocoascript.INGetVisualCodeIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the list of bills matching the specified criteria.
   * doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent
   */
  interface INSearchForBillsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798970-initwithbillpayee
    initWithBillPayee_paymentDateRange_billType_status_dueDateRange(billPayee: cocoascript.INBillPayee, paymentDateRange: cocoascript.INDateComponentsRange, billType: cocoascript.INBillType, status: cocoascript.INPaymentStatus, dueDateRange: cocoascript.INDateComponentsRange):cocoascript.INSearchForBillsIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798975-billpayee
    billPayee(): cocoascript.INBillPayee;
    setBillPayee(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798974-billtype
    billType(): cocoascript.INBillType;
    setBillType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798969-duedaterange
    dueDateRange(): cocoascript.INDateComponentsRange;
    setDueDateRange(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798976-paymentdaterange
    paymentDateRange(): cocoascript.INDateComponentsRange;
    setPaymentDateRange(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintent/2798980-status
    status(): cocoascript.INPaymentStatus;
    setStatus(): void;
    //
    alloc():cocoascript.INSearchForBillsIntent;
    //
    init():cocoascript.INSearchForBillsIntent;
  }
}

declare const INSearchForBillsIntent: cocoascript.INSearchForBillsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to a search for bills.
   * doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse
   */
  interface INSearchForBillsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse/2799219-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchForBillsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForBillsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse/2799216-code
    code(): cocoascript.INSearchForBillsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponse/2799221-bills
    bills(): cocoascript.INBillDetails;
    setBills(): void;
    //
    alloc():cocoascript.INSearchForBillsIntentResponse;
    //
    init():cocoascript.INSearchForBillsIntentResponse;
  }
}

declare const INSearchForBillsIntentResponse: cocoascript.INSearchForBillsIntentResponse;
declare namespace cocoascript {
  /**
   * An intent for requesting money from another user’s account.
   * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent
   */
  interface INRequestPaymentIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/2102241-initwithpayer
    initWithPayer_currencyAmount_note(payer: cocoascript.INPerson, currencyAmount: cocoascript.INCurrencyAmount, note: cocoascript.NSString):cocoascript.INRequestPaymentIntent;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/1638567-payer
    payer(): cocoascript.INPerson;
    setPayer(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/1639090-currencyamount
    currencyAmount(): cocoascript.INCurrencyAmount;
    setCurrencyAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintent/1638628-note
    note(): cocoascript.NSString;
    setNote(): void;
    //
    alloc():cocoascript.INRequestPaymentIntent;
    //
    init():cocoascript.INRequestPaymentIntent;
  }
}

declare const INRequestPaymentIntent: cocoascript.INRequestPaymentIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request payment intent.
   * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse
   */
  interface INRequestPaymentIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse/1638434-initwithcode
    initWithCode_userActivity(code: cocoascript.INRequestPaymentIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INRequestPaymentIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse/1829451-code
    code(): cocoascript.INRequestPaymentIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponse/1638405-paymentrecord
    paymentRecord(): cocoascript.INPaymentRecord;
    setPaymentRecord(): void;
    //
    alloc():cocoascript.INRequestPaymentIntentResponse;
    //
    init():cocoascript.INRequestPaymentIntentResponse;
  }
}

declare const INRequestPaymentIntentResponse: cocoascript.INRequestPaymentIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the current radio station.
   * doc://com.apple.documentation/documentation/sirikit/insetradiostationintent
   */
  interface INSetRadioStationIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1778276-initwithradiotype
    initWithRadioType_frequency_stationName_channel_presetNumber(radioType: cocoascript.INRadioType, frequency: cocoascript.NSNumber, stationName: cocoascript.NSString, channel: cocoascript.NSString, presetNumber: cocoascript.NSNumber):cocoascript.INSetRadioStationIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649472-radiotype
    radioType(): cocoascript.INRadioType;
    setRadioType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649482-frequency
    frequency(): cocoascript.NSNumber;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649478-stationname
    stationName(): cocoascript.NSString;
    setStationName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1778274-channel
    channel(): cocoascript.NSString;
    setChannel(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintent/1649476-presetnumber
    presetNumber(): cocoascript.NSNumber;
    setPresetNumber(): void;
    //
    alloc():cocoascript.INSetRadioStationIntent;
    //
    init():cocoascript.INSetRadioStationIntent;
  }
}

declare const INSetRadioStationIntent: cocoascript.INSetRadioStationIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the radio domain.
   * doc://com.apple.documentation/documentation/sirikit/inradiodomainhandling
   */
  interface INRadioDomainHandling extends INSetRadioStationIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a set radio station intent.
   * doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponse
   */
  interface INSetRadioStationIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponse/1650045-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetRadioStationIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetRadioStationIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponse/1833303-code
    code(): cocoascript.INSetRadioStationIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetRadioStationIntentResponse;
    //
    init():cocoascript.INSetRadioStationIntentResponse;
  }
}

declare const INSetRadioStationIntentResponse: cocoascript.INSetRadioStationIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start a workout for the user.
   * doc://com.apple.documentation/documentation/sirikit/instartworkoutintent
   */
  interface INStartWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638948-initwithworkoutname
    initWithWorkoutName_goalValue_workoutGoalUnitType_workoutLocationType_isOpenEnded(workoutName: cocoascript.INSpeakableString, goalValue: cocoascript.NSNumber, workoutGoalUnitType: cocoascript.INWorkoutGoalUnitType, workoutLocationType: cocoascript.INWorkoutLocationType, isOpenEnded: cocoascript.NSNumber):cocoascript.INStartWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1639387-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638343-goalvalue
    goalValue(): cocoascript.NSNumber;
    setGoalValue(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1639319-workoutgoalunittype
    workoutGoalUnitType(): cocoascript.INWorkoutGoalUnitType;
    setWorkoutGoalUnitType(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638964-workoutlocationtype
    workoutLocationType(): cocoascript.INWorkoutLocationType;
    setWorkoutLocationType(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintent/1638370-isopenended
    isOpenEnded(): cocoascript.NSNumber;
    setIsOpenEnded(): void;
    //
    alloc():cocoascript.INStartWorkoutIntent;
    //
    init():cocoascript.INStartWorkoutIntent;
  }
}

declare const INStartWorkoutIntent: cocoascript.INStartWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a start workout intent.
   * doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponse
   */
  interface INStartWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponse/1638220-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponse/1833305-code
    code(): cocoascript.INStartWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INStartWorkoutIntentResponse;
    //
    init():cocoascript.INStartWorkoutIntentResponse;
  }
}

declare const INStartWorkoutIntentResponse: cocoascript.INStartWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start a video call with one or more users.
   * doc://com.apple.documentation/documentation/sirikit/instartvideocallintent
   */
  interface INStartVideoCallIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintent/1638541-initwithcontacts
    initWithContacts(contacts: cocoascript.INPerson):cocoascript.INStartVideoCallIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintent/1639126-contacts
    contacts(): cocoascript.INPerson;
    setContacts(): void;
    //
    alloc():cocoascript.INStartVideoCallIntent;
    //
    init():cocoascript.INStartVideoCallIntent;
  }
}

declare const INStartVideoCallIntent: cocoascript.INStartVideoCallIntent;
declare namespace cocoascript {
  /**
   * Your response to a start video call intent.
   * doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponse
   */
  interface INStartVideoCallIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponse/1639246-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartVideoCallIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartVideoCallIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponse/1823493-code
    code(): cocoascript.INStartVideoCallIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INStartVideoCallIntentResponse;
    //
    init():cocoascript.INStartVideoCallIntentResponse;
  }
}

declare const INStartVideoCallIntentResponse: cocoascript.INStartVideoCallIntentResponse;
declare namespace cocoascript {
  /**
   * A view controller that guides the user through the steps for adding a shortcut to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontroller
   */
  interface INUIAddVoiceShortcutViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontroller/2999415-initwithshortcut
    initWithShortcut(shortcut: cocoascript.INShortcut):cocoascript.INUIAddVoiceShortcutViewController;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutviewcontroller/2968467-delegate
    delegate(): cocoascript.INUIAddVoiceShortcutViewControllerDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.INUIAddVoiceShortcutViewController;
    //
    init():cocoascript.INUIAddVoiceShortcutViewController;
  }
}

declare const INUIAddVoiceShortcutViewController: cocoascript.INUIAddVoiceShortcutViewController;
declare namespace cocoascript {
  /**
   * A request to activate the signals on the user’s car.
   * doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent
   */
  interface INActivateCarSignalIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent/2799261-initwithcarname
    initWithCarName_signals(carName: cocoascript.INSpeakableString, signals: cocoascript.INCarSignalOptions):cocoascript.INActivateCarSignalIntent;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent/2799260-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintent/2799255-signals
    signals(): cocoascript.INCarSignalOptions;
    setSignals(): void;
    //
    alloc():cocoascript.INActivateCarSignalIntent;
    //
    init():cocoascript.INActivateCarSignalIntent;
  }
}

declare const INActivateCarSignalIntent: cocoascript.INActivateCarSignalIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all the handling protocols in the car commands domain.
   * doc://com.apple.documentation/documentation/sirikit/incarcommandsdomainhandling
   */
  interface INCarCommandsDomainHandling extends INActivateCarSignalIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a request to activate a car’s signals.
   * doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse
   */
  interface INActivateCarSignalIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse/2798997-initwithcode
    initWithCode_userActivity(code: cocoascript.INActivateCarSignalIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INActivateCarSignalIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse/2799003-code
    code(): cocoascript.INActivateCarSignalIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponse/2798994-signals
    signals(): cocoascript.INCarSignalOptions;
    setSignals(): void;
    //
    alloc():cocoascript.INActivateCarSignalIntentResponse;
    //
    init():cocoascript.INActivateCarSignalIntentResponse;
  }
}

declare const INActivateCarSignalIntentResponse: cocoascript.INActivateCarSignalIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the list of photos that match the specified criteria.
   * doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent
   */
  interface INSearchForPhotosIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638173-initwithdatecreated
    initWithDateCreated_locationCreated_albumName_searchTerms_includedAttributes_excludedAttributes_peopleInPhoto(dateCreated: cocoascript.INDateComponentsRange, locationCreated: cocoascript.CLPlacemark, albumName: cocoascript.NSString, searchTerms: cocoascript.NSString, includedAttributes: cocoascript.INPhotoAttributeOptions, excludedAttributes: cocoascript.INPhotoAttributeOptions, peopleInPhoto: cocoascript.INPerson):cocoascript.INSearchForPhotosIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1639439-peopleinphoto
    peopleInPhoto(): cocoascript.INPerson;
    setPeopleInPhoto(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638821-peopleinphotooperator
    peopleInPhotoOperator(): cocoascript.INConditionalOperator;
    setPeopleInPhotoOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638728-searchterms
    searchTerms(): cocoascript.NSString;
    setSearchTerms(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1639233-searchtermsoperator
    searchTermsOperator(): cocoascript.INConditionalOperator;
    setSearchTermsOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1639043-datecreated
    dateCreated(): cocoascript.INDateComponentsRange;
    setDateCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638736-locationcreated
    locationCreated(): cocoascript.CLPlacemark;
    setLocationCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638234-albumname
    albumName(): cocoascript.NSString;
    setAlbumName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638191-includedattributes
    includedAttributes(): cocoascript.INPhotoAttributeOptions;
    setIncludedAttributes(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintent/1638212-excludedattributes
    excludedAttributes(): cocoascript.INPhotoAttributeOptions;
    setExcludedAttributes(): void;
    //
    alloc():cocoascript.INSearchForPhotosIntent;
    //
    init():cocoascript.INSearchForPhotosIntent;
  }
}

declare const INSearchForPhotosIntent: cocoascript.INSearchForPhotosIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the photos domain.
   * doc://com.apple.documentation/documentation/sirikit/inphotosdomainhandling
   */
  interface INPhotosDomainHandling extends INSearchForPhotosIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a search for photos intent.
   * doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse
   */
  interface INSearchForPhotosIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse/1638236-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchForPhotosIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForPhotosIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse/1833286-code
    code(): cocoascript.INSearchForPhotosIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponse/1639111-searchresultscount
    searchResultsCount(): cocoascript.NSNumber;
    setSearchResultsCount(): void;
    //
    alloc():cocoascript.INSearchForPhotosIntentResponse;
    //
    init():cocoascript.INSearchForPhotosIntentResponse;
  }
}

declare const INSearchForPhotosIntentResponse: cocoascript.INSearchForPhotosIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the current status of a previously booked ride.
   * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintent
   */
  interface INGetRideStatusIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintent/1649847-init
    init():cocoascript.INGetRideStatusIntent;
    //
    alloc():cocoascript.INGetRideStatusIntent;
    //
    init():cocoascript.INGetRideStatusIntent;
  }
}

declare const INGetRideStatusIntent: cocoascript.INGetRideStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a get ride status intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse
   */
  interface INGetRideStatusIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse/1648160-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetRideStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetRideStatusIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse/1830547-code
    code(): cocoascript.INGetRideStatusIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponse/1648161-ridestatus
    rideStatus(): cocoascript.INRideStatus;
    setRideStatus(): void;
    //
    alloc():cocoascript.INGetRideStatusIntentResponse;
    //
    init():cocoascript.INGetRideStatusIntentResponse;
  }
}

declare const INGetRideStatusIntentResponse: cocoascript.INGetRideStatusIntentResponse;
declare namespace cocoascript {
  /**
   * An intent requesting the cancellation of a previously booked ride.
   * doc://com.apple.documentation/documentation/sirikit/incancelrideintent
   */
  interface INCancelRideIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintent/2875693-initwithrideidentifier
    initWithRideIdentifier(rideIdentifier: cocoascript.NSString):cocoascript.INCancelRideIntent;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintent/2875648-rideidentifier
    rideIdentifier(): cocoascript.NSString;
    setRideIdentifier(): void;
    //
    alloc():cocoascript.INCancelRideIntent;
    //
    init():cocoascript.INCancelRideIntent;
  }
}

declare const INCancelRideIntent: cocoascript.INCancelRideIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a cancel ride intent.
   * doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse
   */
  interface INCancelRideIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875682-initwithcode
    initWithCode_userActivity(code: cocoascript.INCancelRideIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCancelRideIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875627-code
    code(): cocoascript.INCancelRideIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875694-cancellationfee
    cancellationFee(): cocoascript.INCurrencyAmount;
    setCancellationFee(): void;
    // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponse/2875684-cancellationfeethreshold
    cancellationFeeThreshold(): cocoascript.NSDateComponents;
    setCancellationFeeThreshold(): void;
    //
    alloc():cocoascript.INCancelRideIntentResponse;
    //
    init():cocoascript.INCancelRideIntentResponse;
  }
}

declare const INCancelRideIntentResponse: cocoascript.INCancelRideIntentResponse;
declare namespace cocoascript {
  /**
   * A request to lock or unlock the user’s car.
   * doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent
   */
  interface INSetCarLockStatusIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent/2799283-initwithlocked
    initWithLocked_carName(locked: cocoascript.NSNumber, carName: cocoascript.INSpeakableString):cocoascript.INSetCarLockStatusIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent/2799285-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintent/2799289-locked
    locked(): cocoascript.NSNumber;
    setLocked(): void;
    //
    alloc():cocoascript.INSetCarLockStatusIntent;
    //
    init():cocoascript.INSetCarLockStatusIntent;
  }
}

declare const INSetCarLockStatusIntent: cocoascript.INSetCarLockStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to lock or unlock the car.
   * doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponse
   */
  interface INSetCarLockStatusIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponse/2799303-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetCarLockStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetCarLockStatusIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponse/2799302-code
    code(): cocoascript.INSetCarLockStatusIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetCarLockStatusIntentResponse;
    //
    init():cocoascript.INSetCarLockStatusIntentResponse;
  }
}

declare const INSetCarLockStatusIntentResponse: cocoascript.INSetCarLockStatusIntentResponse;
declare namespace cocoascript {
  /**
   * A request to search for a media item.
   * doc://com.apple.documentation/documentation/sirikit/insearchformediaintent
   */
  interface INSearchForMediaIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintent/3180152-initwithmediaitems
    initWithMediaItems_mediaSearch(mediaItems: cocoascript.INMediaItem, mediaSearch: cocoascript.INMediaSearch):cocoascript.INSearchForMediaIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintent/3180153-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintent/3074295-mediasearch
    mediaSearch(): cocoascript.INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():cocoascript.INSearchForMediaIntent;
    //
    init():cocoascript.INSearchForMediaIntent;
  }
}

declare const INSearchForMediaIntent: cocoascript.INSearchForMediaIntent;
declare namespace cocoascript {
  /**
   * An intents handler’s response to a search media intent.
   * doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse
   */
  interface INSearchForMediaIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse/3074301-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchForMediaIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForMediaIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse/3074300-code
    code(): cocoascript.INSearchForMediaIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponse/3074302-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    //
    alloc():cocoascript.INSearchForMediaIntentResponse;
    //
    init():cocoascript.INSearchForMediaIntentResponse;
  }
}

declare const INSearchForMediaIntentResponse: cocoascript.INSearchForMediaIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the current power level of the user’s car.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintent
   */
  interface INGetCarPowerLevelStatusIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintent/2799243-initwithcarname
    initWithCarName(carName: cocoascript.INSpeakableString):cocoascript.INGetCarPowerLevelStatusIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintent/2799245-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    //
    alloc():cocoascript.INGetCarPowerLevelStatusIntent;
    //
    init():cocoascript.INGetCarPowerLevelStatusIntent;
  }
}

declare const INGetCarPowerLevelStatusIntent: cocoascript.INGetCarPowerLevelStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request for the vehicle power level.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse
   */
  interface INGetCarPowerLevelStatusIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799147-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetCarPowerLevelStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetCarPowerLevelStatusIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799150-code
    code(): cocoascript.INGetCarPowerLevelStatusIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552171-caridentifier
    carIdentifier(): cocoascript.NSString;
    setCarIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799139-chargepercentremaining
    chargePercentRemaining(): cocoascript.NSNumber;
    setChargePercentRemaining(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799138-fuelpercentremaining
    fuelPercentRemaining(): cocoascript.NSNumber;
    setFuelPercentRemaining(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674226-maximumdistance
    maximumDistance(): cocoascript.NSUnitLength;
    setMaximumDistance(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799141-distanceremaining
    distanceRemaining(): cocoascript.NSUnitLength;
    setDistanceRemaining(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674227-maximumdistanceelectric
    maximumDistanceElectric(): cocoascript.NSUnitLength;
    setMaximumDistanceElectric(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552176-distanceremainingelectric
    distanceRemainingElectric(): cocoascript.NSUnitLength;
    setDistanceRemainingElectric(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674228-maximumdistancefuel
    maximumDistanceFuel(): cocoascript.NSUnitLength;
    setMaximumDistanceFuel(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674224-distanceremainingfuel
    distanceRemainingFuel(): cocoascript.NSUnitLength;
    setDistanceRemainingFuel(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552170-activeconnector
    activeConnector(): cocoascript.INCarChargingConnectorType;
    setActiveConnector(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3017318-charging
    charging(): cocoascript.NSNumber;
    setCharging(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3017319-minutestofull
    minutesToFull(): cocoascript.NSNumber;
    setMinutesToFull(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552175-dateoflaststateupdate
    dateOfLastStateUpdate(): cocoascript.NSDateComponents;
    setDateOfLastStateUpdate(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674229-minimumbatterycapacity
    minimumBatteryCapacity(): cocoascript.NSUnitEnergy;
    setMinimumBatteryCapacity(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674225-maximumbatterycapacity
    maximumBatteryCapacity(): cocoascript.NSUnitEnergy;
    setMaximumBatteryCapacity(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552174-currentbatterycapacity
    currentBatteryCapacity(): cocoascript.NSUnitEnergy;
    setCurrentBatteryCapacity(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552172-chargingformulaarguments
    chargingFormulaArguments(): cocoascript.id;
    setChargingFormulaArguments(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552173-consumptionformulaarguments
    consumptionFormulaArguments(): cocoascript.id;
    setConsumptionFormulaArguments(): void;
    //
    alloc():cocoascript.INGetCarPowerLevelStatusIntentResponse;
    //
    init():cocoascript.INGetCarPowerLevelStatusIntentResponse;
  }
}

declare const INGetCarPowerLevelStatusIntentResponse: cocoascript.INGetCarPowerLevelStatusIntentResponse;
declare namespace cocoascript {
  /**
   * A view controller that lets the user edit or remove an existing shortcut.
   * doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontroller
   */
  interface INUIEditVoiceShortcutViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontroller/2981853-initwithvoiceshortcut
    initWithVoiceShortcut(voiceShortcut: cocoascript.INVoiceShortcut):cocoascript.INUIEditVoiceShortcutViewController;
    // doc://com.apple.documentation/documentation/sirikit/inuieditvoiceshortcutviewcontroller/2968473-delegate
    delegate(): cocoascript.INUIEditVoiceShortcutViewControllerDelegate;
    setDelegate(): void;
    //
    alloc():cocoascript.INUIEditVoiceShortcutViewController;
    //
    init():cocoascript.INUIEditVoiceShortcutViewController;
  }
}

declare const INUIEditVoiceShortcutViewController: cocoascript.INUIEditVoiceShortcutViewController;
declare namespace cocoascript {
  /**
   * A request for information about the guest who is making reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintent
   */
  interface INGetRestaurantGuestIntent extends INIntent {
    //
    alloc():cocoascript.INGetRestaurantGuestIntent;
    //
    init():cocoascript.INGetRestaurantGuestIntent;
  }
}

declare const INGetRestaurantGuestIntent: cocoascript.INGetRestaurantGuestIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a get restaurant guest intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse
   */
  interface INGetRestaurantGuestIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/1833301-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetRestaurantGuestIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetRestaurantGuestIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/1833300-code
    code(): cocoascript.INGetRestaurantGuestIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/1778393-guest
    guest(): cocoascript.INRestaurantGuest;
    setGuest(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponse/2102599-guestdisplaypreferences
    guestDisplayPreferences(): cocoascript.INRestaurantGuestDisplayPreferences;
    setGuestDisplayPreferences(): void;
    //
    alloc():cocoascript.INGetRestaurantGuestIntentResponse;
    //
    init():cocoascript.INGetRestaurantGuestIntentResponse;
  }
}

declare const INGetRestaurantGuestIntentResponse: cocoascript.INGetRestaurantGuestIntentResponse;
declare namespace cocoascript {
  /**
   * A request for information about the user’s accounts in your app.
   * doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent
   */
  interface INSearchForAccountsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867916-initwithaccountnickname
    initWithAccountNickname_accountType_organizationName_requestedBalanceType(accountNickname: cocoascript.INSpeakableString, accountType: cocoascript.INAccountType, organizationName: cocoascript.INSpeakableString, requestedBalanceType: cocoascript.INBalanceType):cocoascript.INSearchForAccountsIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867912-accountnickname
    accountNickname(): cocoascript.INSpeakableString;
    setAccountNickname(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867910-accounttype
    accountType(): cocoascript.INAccountType;
    setAccountType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867917-organizationname
    organizationName(): cocoascript.INSpeakableString;
    setOrganizationName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867918-requestedbalancetype
    requestedBalanceType(): cocoascript.INBalanceType;
    setRequestedBalanceType(): void;
    //
    alloc():cocoascript.INSearchForAccountsIntent;
    //
    init():cocoascript.INSearchForAccountsIntent;
  }
}

declare const INSearchForAccountsIntent: cocoascript.INSearchForAccountsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to search for account information.
   * doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse
   */
  interface INSearchForAccountsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse/2867968-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchForAccountsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForAccountsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse/2867969-code
    code(): cocoascript.INSearchForAccountsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponse/2867970-accounts
    accounts(): cocoascript.INPaymentAccount;
    setAccounts(): void;
    //
    alloc():cocoascript.INSearchForAccountsIntentResponse;
    //
    init():cocoascript.INSearchForAccountsIntentResponse;
  }
}

declare const INSearchForAccountsIntentResponse: cocoascript.INSearchForAccountsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the user’s vehicle environment settings to the ones from the specified profile.
   * doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent
   */
  interface INSetProfileInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/3019575-initwithprofilenumber
    initWithProfileNumber_profileName_defaultProfile_carName(profileNumber: cocoascript.NSNumber, profileName: cocoascript.NSString, defaultProfile: cocoascript.NSNumber, carName: cocoascript.INSpeakableString):cocoascript.INSetProfileInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102250-defaultprofile
    defaultProfile(): cocoascript.NSNumber;
    setDefaultProfile(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2726869-profilename
    profileName(): cocoascript.NSString;
    setProfileName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102254-profilelabel
    profileLabel(): cocoascript.NSString;
    setProfileLabel(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102248-profilenumber
    profileNumber(): cocoascript.NSNumber;
    setProfileNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/3019574-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2726871-initwithprofilenumber
    initWithProfileNumber_profileName_defaultProfile(profileNumber: cocoascript.NSNumber, profileName: cocoascript.NSString, defaultProfile: cocoascript.NSNumber):cocoascript.INSetProfileInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintent/2102245-initwithprofilenumber
    initWithProfileNumber_profileLabel_defaultProfile(profileNumber: cocoascript.NSNumber, profileLabel: cocoascript.NSString, defaultProfile: cocoascript.NSNumber):cocoascript.INSetProfileInCarIntent;
    //
    alloc():cocoascript.INSetProfileInCarIntent;
    //
    init():cocoascript.INSetProfileInCarIntent;
  }
}

declare const INSetProfileInCarIntent: cocoascript.INSetProfileInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set profile in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponse
   */
  interface INSetProfileInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponse/2102641-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetProfileInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetProfileInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponse/2102634-code
    code(): cocoascript.INSetProfileInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetProfileInCarIntentResponse;
    //
    init():cocoascript.INSetProfileInCarIntentResponse;
  }
}

declare const INSetProfileInCarIntentResponse: cocoascript.INSetProfileInCarIntentResponse;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inuiinteractivebehavior
  type INUIInteractiveBehavior = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inuihostedviewcontext
  type INUIHostedViewContext = cocoascript.NSUInteger;
}
declare const IntentsUIVersionString: string;
declare namespace cocoascript {
  /**
   * A request to search for notes, tasks, and reminders.
   * doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent
   */
  interface INSearchForNotebookItemsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/3141829-initwithtitle
    initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType_temporalEventTriggerTypes_taskPriority_notebookItemIdentifier(title: cocoascript.INSpeakableString, content: cocoascript.NSString, itemType: cocoascript.INNotebookItemType, status: cocoascript.INTaskStatus, location: cocoascript.CLPlacemark, locationSearchType: cocoascript.INLocationSearchType, dateTime: cocoascript.INDateComponentsRange, dateSearchType: cocoascript.INDateSearchType, temporalEventTriggerTypes: cocoascript.INTemporalEventTriggerTypeOptions, taskPriority: cocoascript.INTaskPriority, notebookItemIdentifier: cocoascript.NSString):cocoascript.INSearchForNotebookItemsIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2935526-initwithtitle
    initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType_notebookItemIdentifier(title: cocoascript.INSpeakableString, content: cocoascript.NSString, itemType: cocoascript.INNotebookItemType, status: cocoascript.INTaskStatus, location: cocoascript.CLPlacemark, locationSearchType: cocoascript.INLocationSearchType, dateTime: cocoascript.INDateComponentsRange, dateSearchType: cocoascript.INDateSearchType, notebookItemIdentifier: cocoascript.NSString):cocoascript.INSearchForNotebookItemsIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875705-initwithtitle
    initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType(title: cocoascript.INSpeakableString, content: cocoascript.NSString, itemType: cocoascript.INNotebookItemType, status: cocoascript.INTaskStatus, location: cocoascript.CLPlacemark, locationSearchType: cocoascript.INLocationSearchType, dateTime: cocoascript.INDateComponentsRange, dateSearchType: cocoascript.INDateSearchType):cocoascript.INSearchForNotebookItemsIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875589-itemtype
    itemType(): cocoascript.INNotebookItemType;
    setItemType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875610-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875644-content
    content(): cocoascript.NSString;
    setContent(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875588-status
    status(): cocoascript.INTaskStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875647-location
    location(): cocoascript.CLPlacemark;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875602-locationsearchtype
    locationSearchType(): cocoascript.INLocationSearchType;
    setLocationSearchType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875608-datetime
    dateTime(): cocoascript.INDateComponentsRange;
    setDateTime(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2875615-datesearchtype
    dateSearchType(): cocoascript.INDateSearchType;
    setDateSearchType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/2935527-notebookitemidentifier
    notebookItemIdentifier(): cocoascript.NSString;
    setNotebookItemIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/3141830-taskpriority
    taskPriority(): cocoascript.INTaskPriority;
    setTaskPriority(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintent/3141831-temporaleventtriggertypes
    temporalEventTriggerTypes(): cocoascript.INTemporalEventTriggerTypeOptions;
    setTemporalEventTriggerTypes(): void;
    //
    alloc():cocoascript.INSearchForNotebookItemsIntent;
    //
    init():cocoascript.INSearchForNotebookItemsIntent;
  }
}

declare const INSearchForNotebookItemsIntent: cocoascript.INSearchForNotebookItemsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to search for notes, tasks, or reminders.
   * doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse
   */
  interface INSearchForNotebookItemsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875685-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchForNotebookItemsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForNotebookItemsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875668-code
    code(): cocoascript.INSearchForNotebookItemsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875669-notes
    notes(): cocoascript.INNote;
    setNotes(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875616-tasklists
    taskLists(): cocoascript.INTaskList;
    setTaskLists(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875664-tasks
    tasks(): cocoascript.INTask;
    setTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponse/2875676-sorttype
    sortType(): cocoascript.INSortType;
    setSortType(): void;
    //
    alloc():cocoascript.INSearchForNotebookItemsIntentResponse;
    //
    init():cocoascript.INSearchForNotebookItemsIntentResponse;
  }
}

declare const INSearchForNotebookItemsIntentResponse: cocoascript.INSearchForNotebookItemsIntentResponse;
declare namespace cocoascript {
  /**
   * An intent for getting the types of rides available from a ride-booking service.
   * doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent
   */
  interface INListRideOptionsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent/1648131-initwithpickuplocation
    initWithPickupLocation_dropOffLocation(pickupLocation: cocoascript.CLPlacemark, dropOffLocation: cocoascript.CLPlacemark):cocoascript.INListRideOptionsIntent;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent/1648136-pickuplocation
    pickupLocation(): cocoascript.CLPlacemark;
    setPickupLocation(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintent/1648133-dropofflocation
    dropOffLocation(): cocoascript.CLPlacemark;
    setDropOffLocation(): void;
    //
    alloc():cocoascript.INListRideOptionsIntent;
    //
    init():cocoascript.INListRideOptionsIntent;
  }
}

declare const INListRideOptionsIntent: cocoascript.INListRideOptionsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a list ride options intent.
   * doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse
   */
  interface INListRideOptionsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648791-initwithcode
    initWithCode_userActivity(code: cocoascript.INListRideOptionsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INListRideOptionsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1833313-code
    code(): cocoascript.INListRideOptionsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648795-rideoptions
    rideOptions(): cocoascript.INRideOption;
    setRideOptions(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648792-expirationdate
    expirationDate(): cocoascript.NSDate;
    setExpirationDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponse/1648786-paymentmethods
    paymentMethods(): cocoascript.INPaymentMethod;
    setPaymentMethods(): void;
    //
    alloc():cocoascript.INListRideOptionsIntentResponse;
    //
    init():cocoascript.INListRideOptionsIntentResponse;
  }
}

declare const INListRideOptionsIntentResponse: cocoascript.INListRideOptionsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to cancel an active workout.
   * doc://com.apple.documentation/documentation/sirikit/incancelworkoutintent
   */
  interface INCancelWorkoutIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintent/1639027-initwithworkoutname
    initWithWorkoutName(workoutName: cocoascript.INSpeakableString):cocoascript.INCancelWorkoutIntent;
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintent/1638739-workoutname
    workoutName(): cocoascript.INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():cocoascript.INCancelWorkoutIntent;
    //
    init():cocoascript.INCancelWorkoutIntent;
  }
}

declare const INCancelWorkoutIntent: cocoascript.INCancelWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a cancel workout intent.
   * doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponse
   */
  interface INCancelWorkoutIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponse/1638270-initwithcode
    initWithCode_userActivity(code: cocoascript.INCancelWorkoutIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCancelWorkoutIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponse/1833315-code
    code(): cocoascript.INCancelWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INCancelWorkoutIntentResponse;
    //
    init():cocoascript.INCancelWorkoutIntentResponse;
  }
}

declare const INCancelWorkoutIntentResponse: cocoascript.INCancelWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * An intent for retrieving a list of the user’s electric vehicles.
   * doc://com.apple.documentation/documentation/sirikit/inlistcarsintent
   */
  interface INListCarsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintent/3552189-init
    init():cocoascript.INListCarsIntent;
    //
    alloc():cocoascript.INListCarsIntent;
    //
    init():cocoascript.INListCarsIntent;
  }
}

declare const INListCarsIntent: cocoascript.INListCarsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to list the user’s electric vehicles.
   * doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse
   */
  interface INListCarsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse/3552196-initwithcode
    initWithCode_userActivity(code: cocoascript.INListCarsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INListCarsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse/3552195-code
    code(): cocoascript.INListCarsIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponse/3552194-cars
    cars(): cocoascript.INCar;
    setCars(): void;
    //
    alloc():cocoascript.INListCarsIntentResponse;
    //
    init():cocoascript.INListCarsIntentResponse;
  }
}

declare const INListCarsIntentResponse: cocoascript.INListCarsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to create a new task list.
   * doc://com.apple.documentation/documentation/sirikit/increatetasklistintent
   */
  interface INCreateTaskListIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873994-initwithtitle
    initWithTitle_taskTitles_groupName(title: cocoascript.INSpeakableString, taskTitles: cocoascript.INSpeakableString, groupName: cocoascript.INSpeakableString):cocoascript.INCreateTaskListIntent;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873997-title
    title(): cocoascript.INSpeakableString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873992-tasktitles
    taskTitles(): cocoascript.INSpeakableString;
    setTaskTitles(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintent/2873999-groupname
    groupName(): cocoascript.INSpeakableString;
    setGroupName(): void;
    //
    alloc():cocoascript.INCreateTaskListIntent;
    //
    init():cocoascript.INCreateTaskListIntent;
  }
}

declare const INCreateTaskListIntent: cocoascript.INCreateTaskListIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to create a task list.
   * doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse
   */
  interface INCreateTaskListIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse/2874148-initwithcode
    initWithCode_userActivity(code: cocoascript.INCreateTaskListIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INCreateTaskListIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse/2874147-code
    code(): cocoascript.INCreateTaskListIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponse/2880162-createdtasklist
    createdTaskList(): cocoascript.INTaskList;
    setCreatedTaskList(): void;
    //
    alloc():cocoascript.INCreateTaskListIntentResponse;
    //
    init():cocoascript.INCreateTaskListIntentResponse;
  }
}

declare const INCreateTaskListIntentResponse: cocoascript.INCreateTaskListIntentResponse;
declare namespace cocoascript {
  /**
   * An intent indicating that the user provided feedback for a completed ride.
   * doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent
   */
  interface INSendRideFeedbackIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875687-initwithrideidentifier
    initWithRideIdentifier(rideIdentifier: cocoascript.NSString):cocoascript.INSendRideFeedbackIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875663-rideidentifier
    rideIdentifier(): cocoascript.NSString;
    setRideIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875638-rating
    rating(): cocoascript.NSNumber;
    setRating(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintent/2875625-tip
    tip(): cocoascript.INCurrencyAmount;
    setTip(): void;
    //
    alloc():cocoascript.INSendRideFeedbackIntent;
    //
    init():cocoascript.INSendRideFeedbackIntent;
  }
}

declare const INSendRideFeedbackIntent: cocoascript.INSendRideFeedbackIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a send ride feedback intent.
   * doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponse
   */
  interface INSendRideFeedbackIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponse/2875679-initwithcode
    initWithCode_userActivity(code: cocoascript.INSendRideFeedbackIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSendRideFeedbackIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponse/2875626-code
    code(): cocoascript.INSendRideFeedbackIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSendRideFeedbackIntentResponse;
    //
    init():cocoascript.INSendRideFeedbackIntentResponse;
  }
}

declare const INSendRideFeedbackIntentResponse: cocoascript.INSendRideFeedbackIntentResponse;
declare namespace cocoascript {
  /**
   * Your app’s response to a send message intent.
   * doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse
   */
  interface INSendMessageIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse/1638961-initwithcode
    initWithCode_userActivity(code: cocoascript.INSendMessageIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSendMessageIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse/1823491-code
    code(): cocoascript.INSendMessageIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponse/2875672-sentmessage
    sentMessage(): cocoascript.INMessage;
    setSentMessage(): void;
    //
    alloc():cocoascript.INSendMessageIntentResponse;
    //
    init():cocoascript.INSendMessageIntentResponse;
  }
}

declare const INSendMessageIntentResponse: cocoascript.INSendMessageIntentResponse;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/insendmessageattachment
   */
  interface INSendMessageAttachment extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/insendmessageattachment/3621861-audiomessagefile
    audioMessageFile(): cocoascript.INFile;
    setAudioMessageFile(): void;
    //
    alloc():cocoascript.INSendMessageAttachment;
    //
    init():cocoascript.INSendMessageAttachment;
  }
}

declare const INSendMessageAttachment: cocoascript.INSendMessageAttachment;
declare namespace cocoascript {
  /**
   * Your app’s response to a book restaurant reservation intent.
   * doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse
   */
  interface INBookRestaurantReservationIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse/1778408-initwithcode
    initWithCode_userActivity(code: cocoascript.INBookRestaurantReservationIntentCode, userActivity: cocoascript.NSUserActivity):cocoascript.INBookRestaurantReservationIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse/1833287-code
    code(): cocoascript.INBookRestaurantReservationIntentCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentresponse/1648277-userbooking
    userBooking(): cocoascript.INRestaurantReservationUserBooking;
    setUserBooking(): void;
    //
    alloc():cocoascript.INBookRestaurantReservationIntentResponse;
    //
    init():cocoascript.INBookRestaurantReservationIntentResponse;
  }
}

declare const INBookRestaurantReservationIntentResponse: cocoascript.INBookRestaurantReservationIntentResponse;
declare namespace cocoascript {
  /**
   * A request to search for photos and initiate a slideshow with the results.
   * doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent
   */
  interface INStartPhotoPlaybackIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638354-initwithdatecreated
    initWithDateCreated_locationCreated_albumName_searchTerms_includedAttributes_excludedAttributes_peopleInPhoto(dateCreated: cocoascript.INDateComponentsRange, locationCreated: cocoascript.CLPlacemark, albumName: cocoascript.NSString, searchTerms: cocoascript.NSString, includedAttributes: cocoascript.INPhotoAttributeOptions, excludedAttributes: cocoascript.INPhotoAttributeOptions, peopleInPhoto: cocoascript.INPerson):cocoascript.INStartPhotoPlaybackIntent;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638564-peopleinphoto
    peopleInPhoto(): cocoascript.INPerson;
    setPeopleInPhoto(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638623-peopleinphotooperator
    peopleInPhotoOperator(): cocoascript.INConditionalOperator;
    setPeopleInPhotoOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1639186-searchterms
    searchTerms(): cocoascript.NSString;
    setSearchTerms(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1639393-searchtermsoperator
    searchTermsOperator(): cocoascript.INConditionalOperator;
    setSearchTermsOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638645-datecreated
    dateCreated(): cocoascript.INDateComponentsRange;
    setDateCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638879-locationcreated
    locationCreated(): cocoascript.CLPlacemark;
    setLocationCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1639239-albumname
    albumName(): cocoascript.NSString;
    setAlbumName(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638591-includedattributes
    includedAttributes(): cocoascript.INPhotoAttributeOptions;
    setIncludedAttributes(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintent/1638754-excludedattributes
    excludedAttributes(): cocoascript.INPhotoAttributeOptions;
    setExcludedAttributes(): void;
    //
    alloc():cocoascript.INStartPhotoPlaybackIntent;
    //
    init():cocoascript.INStartPhotoPlaybackIntent;
  }
}

declare const INStartPhotoPlaybackIntent: cocoascript.INStartPhotoPlaybackIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a start photo playback intent.
   * doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse
   */
  interface INStartPhotoPlaybackIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse/1639204-initwithcode
    initWithCode_userActivity(code: cocoascript.INStartPhotoPlaybackIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INStartPhotoPlaybackIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse/1829425-code
    code(): cocoascript.INStartPhotoPlaybackIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponse/1638601-searchresultscount
    searchResultsCount(): cocoascript.NSNumber;
    setSearchResultsCount(): void;
    //
    alloc():cocoascript.INStartPhotoPlaybackIntentResponse;
    //
    init():cocoascript.INStartPhotoPlaybackIntentResponse;
  }
}

declare const INStartPhotoPlaybackIntentResponse: cocoascript.INStartPhotoPlaybackIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the seat-related settings in a CarPlay-enabled vehicle.
   * doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent
   */
  interface INSetSeatSettingsInCarIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/3019578-initwithenableheating
    initWithEnableHeating_enableCooling_enableMassage_seat_level_relativeLevelSetting_carName(enableHeating: cocoascript.NSNumber, enableCooling: cocoascript.NSNumber, enableMassage: cocoascript.NSNumber, seat: cocoascript.INCarSeat, level: cocoascript.NSNumber, relativeLevelSetting: cocoascript.INRelativeSetting, carName: cocoascript.INSpeakableString):cocoascript.INSetSeatSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102622-initwithenableheating
    initWithEnableHeating_enableCooling_enableMassage_seat_level_relativeLevelSetting(enableHeating: cocoascript.NSNumber, enableCooling: cocoascript.NSNumber, enableMassage: cocoascript.NSNumber, seat: cocoascript.INCarSeat, level: cocoascript.NSNumber, relativeLevelSetting: cocoascript.INRelativeSetting):cocoascript.INSetSeatSettingsInCarIntent;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102630-seat
    seat(): cocoascript.INCarSeat;
    setSeat(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102617-enablecooling
    enableCooling(): cocoascript.NSNumber;
    setEnableCooling(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102618-enableheating
    enableHeating(): cocoascript.NSNumber;
    setEnableHeating(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102629-enablemassage
    enableMassage(): cocoascript.NSNumber;
    setEnableMassage(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102620-level
    level(): cocoascript.NSNumber;
    setLevel(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/2102626-relativelevelsetting
    relativeLevelSetting(): cocoascript.INRelativeSetting;
    setRelativeLevelSetting(): void;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintent/3019577-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    //
    alloc():cocoascript.INSetSeatSettingsInCarIntent;
    //
    init():cocoascript.INSetSeatSettingsInCarIntent;
  }
}

declare const INSetSeatSettingsInCarIntent: cocoascript.INSetSeatSettingsInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set seat settings in car intent.
   * doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponse
   */
  interface INSetSeatSettingsInCarIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponse/2102255-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetSeatSettingsInCarIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetSeatSettingsInCarIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponse/2102256-code
    code(): cocoascript.INSetSeatSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INSetSeatSettingsInCarIntentResponse;
    //
    init():cocoascript.INSetSeatSettingsInCarIntentResponse;
  }
}

declare const INSetSeatSettingsInCarIntentResponse: cocoascript.INSetSeatSettingsInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to list the messages matching the specified criteria.
   * doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent
   */
  interface INSearchForMessagesIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2983197-initwithrecipients
    initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_speakableGroupNames_conversationIdentifiers(recipients: cocoascript.INPerson, senders: cocoascript.INPerson, searchTerms: cocoascript.NSString, attributes: cocoascript.INMessageAttributeOptions, dateTimeRange: cocoascript.INDateComponentsRange, identifiers: cocoascript.NSString, notificationIdentifiers: cocoascript.NSString, speakableGroupNames: cocoascript.INSpeakableString, conversationIdentifiers: cocoascript.NSString):cocoascript.INSearchForMessagesIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638455-recipients
    recipients(): cocoascript.INPerson;
    setRecipients(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638624-recipientsoperator
    recipientsOperator(): cocoascript.INConditionalOperator;
    setRecipientsOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638436-senders
    senders(): cocoascript.INPerson;
    setSenders(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639394-sendersoperator
    sendersOperator(): cocoascript.INConditionalOperator;
    setSendersOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2867287-speakablegroupnames
    speakableGroupNames(): cocoascript.INSpeakableString;
    setSpeakableGroupNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2867288-speakablegroupnamesoperator
    speakableGroupNamesOperator(): cocoascript.INConditionalOperator;
    setSpeakableGroupNamesOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639353-searchterms
    searchTerms(): cocoascript.NSString;
    setSearchTerms(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639002-searchtermsoperator
    searchTermsOperator(): cocoascript.INConditionalOperator;
    setSearchTermsOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638192-datetimerange
    dateTimeRange(): cocoascript.INDateComponentsRange;
    setDateTimeRange(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639482-attributes
    attributes(): cocoascript.INMessageAttributeOptions;
    setAttributes(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638976-identifiers
    identifiers(): cocoascript.NSString;
    setIdentifiers(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638746-identifiersoperator
    identifiersOperator(): cocoascript.INConditionalOperator;
    setIdentifiersOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2983195-conversationidentifiers
    conversationIdentifiers(): cocoascript.NSString;
    setConversationIdentifiers(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2983196-conversationidentifiersoperator
    conversationIdentifiersOperator(): cocoascript.INConditionalOperator;
    setConversationIdentifiersOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639365-notificationidentifiers
    notificationIdentifiers(): cocoascript.NSString;
    setNotificationIdentifiers(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639253-notificationidentifiersoperator
    notificationIdentifiersOperator(): cocoascript.INConditionalOperator;
    setNotificationIdentifiersOperator(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2867286-initwithrecipients
    initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_speakableGroupNames(recipients: cocoascript.INPerson, senders: cocoascript.INPerson, searchTerms: cocoascript.NSString, attributes: cocoascript.INMessageAttributeOptions, dateTimeRange: cocoascript.INDateComponentsRange, identifiers: cocoascript.NSString, notificationIdentifiers: cocoascript.NSString, speakableGroupNames: cocoascript.INSpeakableString):cocoascript.INSearchForMessagesIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1902435-initwithrecipients
    initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_groupNames(recipients: cocoascript.INPerson, senders: cocoascript.INPerson, searchTerms: cocoascript.NSString, attributes: cocoascript.INMessageAttributeOptions, dateTimeRange: cocoascript.INDateComponentsRange, identifiers: cocoascript.NSString, notificationIdentifiers: cocoascript.NSString, groupNames: cocoascript.NSString):cocoascript.INSearchForMessagesIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1778236-groupnames
    groupNames(): cocoascript.NSString;
    setGroupNames(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1778193-groupnamesoperator
    groupNamesOperator(): cocoascript.INConditionalOperator;
    setGroupNamesOperator(): void;
    //
    alloc():cocoascript.INSearchForMessagesIntent;
    //
    init():cocoascript.INSearchForMessagesIntent;
  }
}

declare const INSearchForMessagesIntent: cocoascript.INSearchForMessagesIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a search for messages intent.
   * doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse
   */
  interface INSearchForMessagesIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse/1638285-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchForMessagesIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchForMessagesIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse/1823496-code
    code(): cocoascript.INSearchForMessagesIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponse/1639421-messages
    messages(): cocoascript.INMessage;
    setMessages(): void;
    //
    alloc():cocoascript.INSearchForMessagesIntentResponse;
    //
    init():cocoascript.INSearchForMessagesIntentResponse;
  }
}

declare const INSearchForMessagesIntentResponse: cocoascript.INSearchForMessagesIntentResponse;
declare namespace cocoascript {
  /**
   * A request to transfer of money to facilitate payment of a bill.
   * doc://com.apple.documentation/documentation/sirikit/inpaybillintent
   */
  interface INPayBillIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799077-initwithbillpayee
    initWithBillPayee_fromAccount_transactionAmount_transactionScheduledDate_transactionNote_billType_dueDate(billPayee: cocoascript.INBillPayee, fromAccount: cocoascript.INPaymentAccount, transactionAmount: cocoascript.INPaymentAmount, transactionScheduledDate: cocoascript.INDateComponentsRange, transactionNote: cocoascript.NSString, billType: cocoascript.INBillType, dueDate: cocoascript.INDateComponentsRange):cocoascript.INPayBillIntent;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799063-billpayee
    billPayee(): cocoascript.INBillPayee;
    setBillPayee(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799073-billtype
    billType(): cocoascript.INBillType;
    setBillType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799067-duedate
    dueDate(): cocoascript.INDateComponentsRange;
    setDueDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799079-fromaccount
    fromAccount(): cocoascript.INPaymentAccount;
    setFromAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799064-transactionamount
    transactionAmount(): cocoascript.INPaymentAmount;
    setTransactionAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799062-transactionnote
    transactionNote(): cocoascript.NSString;
    setTransactionNote(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintent/2799075-transactionscheduleddate
    transactionScheduledDate(): cocoascript.INDateComponentsRange;
    setTransactionScheduledDate(): void;
    //
    alloc():cocoascript.INPayBillIntent;
    //
    init():cocoascript.INPayBillIntent;
  }
}

declare const INPayBillIntent: cocoascript.INPayBillIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to pay a bill.
   * doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse
   */
  interface INPayBillIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799029-initwithcode
    initWithCode_userActivity(code: cocoascript.INPayBillIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INPayBillIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799031-code
    code(): cocoascript.INPayBillIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799022-fromaccount
    fromAccount(): cocoascript.INPaymentAccount;
    setFromAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799032-billdetails
    billDetails(): cocoascript.INBillDetails;
    setBillDetails(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799037-transactionamount
    transactionAmount(): cocoascript.INPaymentAmount;
    setTransactionAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799036-transactionscheduleddate
    transactionScheduledDate(): cocoascript.INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponse/2799035-transactionnote
    transactionNote(): cocoascript.NSString;
    setTransactionNote(): void;
    //
    alloc():cocoascript.INPayBillIntentResponse;
    //
    init():cocoascript.INPayBillIntentResponse;
  }
}

declare const INPayBillIntentResponse: cocoascript.INPayBillIntentResponse;
declare namespace cocoascript {
  /**
   * The entry point for an Intents extension.
   * doc://com.apple.documentation/documentation/sirikit/inextension
   */
  interface INExtension extends NSObject {
    //
    alloc():cocoascript.INExtension;
    //
    init():cocoascript.INExtension;
  }
}

declare const INExtension: cocoascript.INExtension;
declare namespace cocoascript {
  /**
   * A request to modify the attributes of a task.
   * doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent
   */
  interface INSetTaskAttributeIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/3141834-initwithtargettask
    initWithTargetTask_taskTitle_status_priority_spatialEventTrigger_temporalEventTrigger(targetTask: cocoascript.INTask, taskTitle: cocoascript.INSpeakableString, status: cocoascript.INTaskStatus, priority: cocoascript.INTaskPriority, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger):cocoascript.INSetTaskAttributeIntent;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2878117-initwithtargettask
    initWithTargetTask_status_spatialEventTrigger_temporalEventTrigger(targetTask: cocoascript.INTask, status: cocoascript.INTaskStatus, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger):cocoascript.INSetTaskAttributeIntent;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/3141835-priority
    priority(): cocoascript.INTaskPriority;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/3141836-tasktitle
    taskTitle(): cocoascript.INSpeakableString;
    setTaskTitle(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2878119-targettask
    targetTask(): cocoascript.INTask;
    setTargetTask(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2873569-status
    status(): cocoascript.INTaskStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2873567-temporaleventtrigger
    temporalEventTrigger(): cocoascript.INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintent/2873571-spatialeventtrigger
    spatialEventTrigger(): cocoascript.INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    //
    alloc():cocoascript.INSetTaskAttributeIntent;
    //
    init():cocoascript.INSetTaskAttributeIntent;
  }
}

declare const INSetTaskAttributeIntent: cocoascript.INSetTaskAttributeIntent;
declare namespace cocoascript {
  /**
   * Your response to a request to modify the attributes of an existing task.
   * doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse
   */
  interface INSetTaskAttributeIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse/2873807-initwithcode
    initWithCode_userActivity(code: cocoascript.INSetTaskAttributeIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSetTaskAttributeIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse/2873802-code
    code(): cocoascript.INSetTaskAttributeIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponse/2873806-modifiedtask
    modifiedTask(): cocoascript.INTask;
    setModifiedTask(): void;
    //
    alloc():cocoascript.INSetTaskAttributeIntentResponse;
    //
    init():cocoascript.INSetTaskAttributeIntentResponse;
  }
}

declare const INSetTaskAttributeIntentResponse: cocoascript.INSetTaskAttributeIntentResponse;
declare namespace cocoascript {
  /**
   * A request to transfer money between two accounts.
   * doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent
   */
  interface INTransferMoneyIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868061-initwithfromaccount
    initWithFromAccount_toAccount_transactionAmount_transactionScheduledDate_transactionNote(fromAccount: cocoascript.INPaymentAccount, toAccount: cocoascript.INPaymentAccount, transactionAmount: cocoascript.INPaymentAmount, transactionScheduledDate: cocoascript.INDateComponentsRange, transactionNote: cocoascript.NSString):cocoascript.INTransferMoneyIntent;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868067-fromaccount
    fromAccount(): cocoascript.INPaymentAccount;
    setFromAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868060-toaccount
    toAccount(): cocoascript.INPaymentAccount;
    setToAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868056-transactionamount
    transactionAmount(): cocoascript.INPaymentAmount;
    setTransactionAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868068-transactionscheduleddate
    transactionScheduledDate(): cocoascript.INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868062-transactionnote
    transactionNote(): cocoascript.NSString;
    setTransactionNote(): void;
    //
    alloc():cocoascript.INTransferMoneyIntent;
    //
    init():cocoascript.INTransferMoneyIntent;
  }
}

declare const INTransferMoneyIntent: cocoascript.INTransferMoneyIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to transfer money.
   * doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse
   */
  interface INTransferMoneyIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868342-initwithcode
    initWithCode_userActivity(code: cocoascript.INTransferMoneyIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INTransferMoneyIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868337-code
    code(): cocoascript.INTransferMoneyIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868343-fromaccount
    fromAccount(): cocoascript.INPaymentAccount;
    setFromAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868335-toaccount
    toAccount(): cocoascript.INPaymentAccount;
    setToAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868336-transactionamount
    transactionAmount(): cocoascript.INPaymentAmount;
    setTransactionAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868340-transactionscheduleddate
    transactionScheduledDate(): cocoascript.INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2868331-transactionnote
    transactionNote(): cocoascript.NSString;
    setTransactionNote(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponse/2919431-transferfee
    transferFee(): cocoascript.INCurrencyAmount;
    setTransferFee(): void;
    //
    alloc():cocoascript.INTransferMoneyIntentResponse;
    //
    init():cocoascript.INTransferMoneyIntentResponse;
  }
}

declare const INTransferMoneyIntentResponse: cocoascript.INTransferMoneyIntentResponse;
declare namespace cocoascript {
  /**
   * A request to add tasks to a task list.
   * doc://com.apple.documentation/documentation/sirikit/inaddtasksintent
   */
  interface INAddTasksIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/3227904-initwithtargettasklist
    initWithTargetTaskList_taskTitles_spatialEventTrigger_temporalEventTrigger_priority(targetTaskList: cocoascript.INTaskList, taskTitles: cocoascript.INSpeakableString, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger, priority: cocoascript.INTaskPriority):cocoascript.INAddTasksIntent;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2878111-initwithtargettasklist
    initWithTargetTaskList_taskTitles_spatialEventTrigger_temporalEventTrigger(targetTaskList: cocoascript.INTaskList, taskTitles: cocoascript.INSpeakableString, spatialEventTrigger: cocoascript.INSpatialEventTrigger, temporalEventTrigger: cocoascript.INTemporalEventTrigger):cocoascript.INAddTasksIntent;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2878112-targettasklist
    targetTaskList(): cocoascript.INTaskList;
    setTargetTaskList(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2874158-tasktitles
    taskTitles(): cocoascript.INSpeakableString;
    setTaskTitles(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/3227905-priority
    priority(): cocoascript.INTaskPriority;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2874163-spatialeventtrigger
    spatialEventTrigger(): cocoascript.INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintent/2874159-temporaleventtrigger
    temporalEventTrigger(): cocoascript.INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    //
    alloc():cocoascript.INAddTasksIntent;
    //
    init():cocoascript.INAddTasksIntent;
  }
}

declare const INAddTasksIntent: cocoascript.INAddTasksIntent;
declare namespace cocoascript {
  /**
   * Your response to a request to add tasks to a task list.
   * doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse
   */
  interface INAddTasksIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2874051-initwithcode
    initWithCode_userActivity(code: cocoascript.INAddTasksIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INAddTasksIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2874042-code
    code(): cocoascript.INAddTasksIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2874043-addedtasks
    addedTasks(): cocoascript.INTask;
    setAddedTasks(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponse/2880149-modifiedtasklist
    modifiedTaskList(): cocoascript.INTaskList;
    setModifiedTaskList(): void;
    //
    alloc():cocoascript.INAddTasksIntentResponse;
    //
    init():cocoascript.INAddTasksIntentResponse;
  }
}

declare const INAddTasksIntentResponse: cocoascript.INAddTasksIntentResponse;
declare namespace cocoascript {
  /**
   * A request to list the calls matching the specified criteria.
   * doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent
   */
  interface INSearchCallHistoryIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/2879133-initwithdatecreated
    initWithDateCreated_recipient_callCapabilities_callTypes_unseen(dateCreated: cocoascript.INDateComponentsRange, recipient: cocoascript.INPerson, callCapabilities: cocoascript.INCallCapabilityOptions, callTypes: cocoascript.INCallRecordTypeOptions, unseen: cocoascript.NSNumber):cocoascript.INSearchCallHistoryIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1902451-initwithcalltype
    initWithCallType_dateCreated_recipient_callCapabilities(callType: cocoascript.INCallRecordType, dateCreated: cocoascript.INDateComponentsRange, recipient: cocoascript.INPerson, callCapabilities: cocoascript.INCallCapabilityOptions):cocoascript.INSearchCallHistoryIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1638907-recipient
    recipient(): cocoascript.INPerson;
    setRecipient(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1638678-datecreated
    dateCreated(): cocoascript.INDateComponentsRange;
    setDateCreated(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/2866200-calltypes
    callTypes(): cocoascript.INCallRecordTypeOptions;
    setCallTypes(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1638944-calltype
    callType(): cocoascript.INCallRecordType;
    setCallType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/1639273-callcapabilities
    callCapabilities(): cocoascript.INCallCapabilityOptions;
    setCallCapabilities(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintent/2879132-unseen
    unseen(): cocoascript.NSNumber;
    setUnseen(): void;
    //
    alloc():cocoascript.INSearchCallHistoryIntent;
    //
    init():cocoascript.INSearchCallHistoryIntent;
  }
}

declare const INSearchCallHistoryIntent: cocoascript.INSearchCallHistoryIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a search call history intent.
   * doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse
   */
  interface INSearchCallHistoryIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse/1638691-initwithcode
    initWithCode_userActivity(code: cocoascript.INSearchCallHistoryIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INSearchCallHistoryIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse/1823492-code
    code(): cocoascript.INSearchCallHistoryIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponse/2873252-callrecords
    callRecords(): cocoascript.INCallRecord;
    setCallRecords(): void;
    //
    alloc():cocoascript.INSearchCallHistoryIntentResponse;
    //
    init():cocoascript.INSearchCallHistoryIntentResponse;
  }
}

declare const INSearchCallHistoryIntentResponse: cocoascript.INSearchCallHistoryIntentResponse;
declare namespace cocoascript {
  /**
   * A button that allows the user to add or edit a shortcut.
   * doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton
   */
  interface INUIAddVoiceShortcutButton extends UIButton {
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3019581-initwithstyle
    initWithStyle(style: cocoascript.INUIAddVoiceShortcutButtonStyle):cocoascript.INUIAddVoiceShortcutButton;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3024514-shortcut
    shortcut(): cocoascript.INShortcut;
    setShortcut(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3024513-delegate
    delegate(): cocoascript.INUIAddVoiceShortcutButtonDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3089175-setstyle
    setStyle(style: cocoascript.INUIAddVoiceShortcutButtonStyle):void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3024515-style
    style(): cocoascript.INUIAddVoiceShortcutButtonStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbutton/3089174-cornerradius
    cornerRadius(): cocoascript.CGFloat;
    setCornerRadius(): void;
    //
    alloc():cocoascript.INUIAddVoiceShortcutButton;
    //
    init():cocoascript.INUIAddVoiceShortcutButton;
  }
}

declare const INUIAddVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton;
declare namespace cocoascript {
  /**
   * A request to add a media item.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediaintent
   */
  interface INAddMediaIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074185-initwithmediaitems
    initWithMediaItems_mediaSearch_mediaDestination(mediaItems: cocoascript.INMediaItem, mediaSearch: cocoascript.INMediaSearch, mediaDestination: cocoascript.INMediaDestination):cocoascript.INAddMediaIntent;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074187-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074188-mediasearch
    mediaSearch(): cocoascript.INMediaSearch;
    setMediaSearch(): void;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintent/3074186-mediadestination
    mediaDestination(): cocoascript.INMediaDestination;
    setMediaDestination(): void;
    //
    alloc():cocoascript.INAddMediaIntent;
    //
    init():cocoascript.INAddMediaIntent;
  }
}

declare const INAddMediaIntent: cocoascript.INAddMediaIntent;
declare namespace cocoascript {
  /**
   * An intents handler's response to an add media intent.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponse
   */
  interface INAddMediaIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponse/3074196-initwithcode
    initWithCode_userActivity(code: cocoascript.INAddMediaIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INAddMediaIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponse/3074195-code
    code(): cocoascript.INAddMediaIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INAddMediaIntentResponse;
    //
    init():cocoascript.INAddMediaIntentResponse;
  }
}

declare const INAddMediaIntentResponse: cocoascript.INAddMediaIntentResponse;
declare namespace cocoascript {
  /**
   * An intents handler's response to a play media intent.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse
   */
  interface INPlayMediaIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse/2963024-initwithcode
    initWithCode_userActivity(code: cocoascript.INPlayMediaIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INPlayMediaIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse/2963023-code
    code(): cocoascript.INPlayMediaIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponse/2963025-nowplayinginfo
    nowPlayingInfo(): cocoascript.id;
    setNowPlayingInfo(): void;
    //
    alloc():cocoascript.INPlayMediaIntentResponse;
    //
    init():cocoascript.INPlayMediaIntentResponse;
  }
}

declare const INPlayMediaIntentResponse: cocoascript.INPlayMediaIntentResponse;
declare namespace cocoascript {
  /**
   * Your app’s response to a get available restaurant reservation bookings intent.
   * doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse
   */
  interface INGetAvailableRestaurantReservationBookingsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2102234-initwithavailablebookings
    initWithAvailableBookings_code_userActivity(availableBookings: cocoascript.INRestaurantReservationBooking, code: cocoascript.INGetAvailableRestaurantReservationBookingsIntentCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1649829-availablebookings
    availableBookings(): cocoascript.INRestaurantReservationBooking;
    setAvailableBookings(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2102233-localizedrestaurantdescriptionte
    localizedRestaurantDescriptionText(): cocoascript.NSString;
    setLocalizedRestaurantDescriptionText(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1778416-localizedbookingadvisementtext
    localizedBookingAdvisementText(): cocoascript.NSString;
    setLocalizedBookingAdvisementText(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2132101-termsandconditions
    termsAndConditions(): cocoascript.INTermsAndConditions;
    setTermsAndConditions(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1829404-code
    code(): cocoascript.INGetAvailableRestaurantReservationBookingsIntentCode;
    setCode(): void;
    //
    alloc():cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
    //
    init():cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
  }
}

declare const INGetAvailableRestaurantReservationBookingsIntentResponse: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to update the user’s affinity for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent
   */
  interface INUpdateMediaAffinityIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074314-initwithmediaitems
    initWithMediaItems_mediaSearch_affinityType(mediaItems: cocoascript.INMediaItem, mediaSearch: cocoascript.INMediaSearch, affinityType: cocoascript.INMediaAffinityType):cocoascript.INUpdateMediaAffinityIntent;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074313-affinitytype
    affinityType(): cocoascript.INMediaAffinityType;
    setAffinityType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074315-mediaitems
    mediaItems(): cocoascript.INMediaItem;
    setMediaItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintent/3074316-mediasearch
    mediaSearch(): cocoascript.INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():cocoascript.INUpdateMediaAffinityIntent;
    //
    init():cocoascript.INUpdateMediaAffinityIntent;
  }
}

declare const INUpdateMediaAffinityIntent: cocoascript.INUpdateMediaAffinityIntent;
declare namespace cocoascript {
  /**
   * An intents handler's response to an update media affinity intent.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponse
   */
  interface INUpdateMediaAffinityIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponse/3074324-initwithcode
    initWithCode_userActivity(code: cocoascript.INUpdateMediaAffinityIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INUpdateMediaAffinityIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponse/3074323-code
    code(): cocoascript.INUpdateMediaAffinityIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INUpdateMediaAffinityIntentResponse;
    //
    init():cocoascript.INUpdateMediaAffinityIntentResponse;
  }
}

declare const INUpdateMediaAffinityIntentResponse: cocoascript.INUpdateMediaAffinityIntentResponse;
declare namespace cocoascript {
  /**
   * A request to get the lock status of the user’s car.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintent
   */
  interface INGetCarLockStatusIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintent/2799272-initwithcarname
    initWithCarName(carName: cocoascript.INSpeakableString):cocoascript.INGetCarLockStatusIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintent/2799267-carname
    carName(): cocoascript.INSpeakableString;
    setCarName(): void;
    //
    alloc():cocoascript.INGetCarLockStatusIntent;
    //
    init():cocoascript.INGetCarLockStatusIntent;
  }
}

declare const INGetCarLockStatusIntent: cocoascript.INGetCarLockStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to get the car’s lock status.
   * doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse
   */
  interface INGetCarLockStatusIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse/2799326-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetCarLockStatusIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetCarLockStatusIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse/2799323-code
    code(): cocoascript.INGetCarLockStatusIntentResponseCode;
    setCode(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponse/2799331-locked
    locked(): cocoascript.NSNumber;
    setLocked(): void;
    //
    alloc():cocoascript.INGetCarLockStatusIntentResponse;
    //
    init():cocoascript.INGetCarLockStatusIntentResponse;
  }
}

declare const INGetCarLockStatusIntentResponse: cocoascript.INGetCarLockStatusIntentResponse;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpersonsuggestiontype
  type INPersonSuggestionType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpersonrelationship
  type INPersonRelationship = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandlelabel
  type INPersonHandleLabel = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaccounttype
  type INAccountType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpaymentstatus
  type INPaymentStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmessagetype
  type INMessageType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmessageattribute
  type INMessageAttribute = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmessageattributeoptions
  type INMessageAttributeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpaymentmethodtype
  type INPaymentMethodType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The person assigned to a reservation.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantguest
   */
  interface INRestaurantGuest extends INPerson {
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguest/2102287-initwithnamecomponents
    initWithNameComponents_phoneNumber_emailAddress(nameComponents: cocoascript.NSPersonNameComponents, phoneNumber: cocoascript.NSString, emailAddress: cocoascript.NSString):cocoascript.INRestaurantGuest;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguest/1778341-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrestaurantguest/1778340-emailaddress
    emailAddress(): cocoascript.NSString;
    setEmailAddress(): void;
    //
    alloc():cocoascript.INRestaurantGuest;
    //
    init():cocoascript.INRestaurantGuest;
  }
}

declare const INRestaurantGuest: cocoascript.INRestaurantGuest;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrestaurantreservationuserbookingstatus
  type INRestaurantReservationUserBookingStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inridephase
  type INRidePhase = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inridefeedbacktypeoptions
  type INRideFeedbackTypeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpersonhandletype
  type INPersonHandleType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inamounttype
  type INAmountType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inbilltype
  type INBillType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inbalancetype
  type INBalanceType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incallcapability
  type INCallCapability = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incallrecordtype
  type INCallRecordType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incallrecordtypeoptions
  type INCallRecordTypeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incalldestinationtype
  type INCallDestinationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/innotecontenttype
  type INNoteContentType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inspatialevent
  type INSpatialEvent = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result that adds a temporal event trigger.
   * doc://com.apple.documentation/documentation/sirikit/intemporaleventtriggertypeoptionsresolutionresult
   */
  interface INTemporalEventTriggerTypeOptionsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTemporalEventTriggerTypeOptionsResolutionResult;
    //
    init():cocoascript.INTemporalEventTriggerTypeOptionsResolutionResult;
  }
}

declare const INTemporalEventTriggerTypeOptionsResolutionResult: cocoascript.INTemporalEventTriggerTypeOptionsResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/indayofweekoptions
  type INDayOfWeekOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/intaskstatus
  type INTaskStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/intasktype
  type INTaskType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrecurrencefrequency
  type INRecurrenceFrequency = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmediaitemtype
  type INMediaItemType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The provider class that specifies a relevant daily routine.
   * doc://com.apple.documentation/documentation/sirikit/indailyroutinerelevanceprovider
   */
  interface INDailyRoutineRelevanceProvider extends INRelevanceProvider {
    // doc://com.apple.documentation/documentation/sirikit/indailyroutinerelevanceprovider/2963042-initwithsituation
    initWithSituation(situation: cocoascript.INDailyRoutineSituation):cocoascript.INDailyRoutineRelevanceProvider;
    // doc://com.apple.documentation/documentation/sirikit/indailyroutinerelevanceprovider/2963043-situation
    situation(): cocoascript.INDailyRoutineSituation;
    setSituation(): void;
    //
    alloc():cocoascript.INDailyRoutineRelevanceProvider;
    //
    init():cocoascript.INDailyRoutineRelevanceProvider;
  }
}

declare const INDailyRoutineRelevanceProvider: cocoascript.INDailyRoutineRelevanceProvider;
declare namespace cocoascript {
  /**
   * The provider class that specifies a relevant day and time.
   * doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider
   */
  interface INDateRelevanceProvider extends INRelevanceProvider {
    // doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider/2963054-initwithstartdate
    initWithStartDate_endDate(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate):cocoascript.INDateRelevanceProvider;
    // doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider/2963055-startdate
    startDate(): cocoascript.NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/indaterelevanceprovider/2963052-enddate
    endDate(): cocoascript.NSDate;
    setEndDate(): void;
    //
    alloc():cocoascript.INDateRelevanceProvider;
    //
    init():cocoascript.INDateRelevanceProvider;
  }
}

declare const INDateRelevanceProvider: cocoascript.INDateRelevanceProvider;
declare namespace cocoascript {
  /**
   * The provider class that specifies a relevant location.
   * doc://com.apple.documentation/documentation/sirikit/inlocationrelevanceprovider
   */
  interface INLocationRelevanceProvider extends INRelevanceProvider {
    // doc://com.apple.documentation/documentation/sirikit/inlocationrelevanceprovider/2963057-initwithregion
    initWithRegion(region: cocoascript.CLRegion):cocoascript.INLocationRelevanceProvider;
    // doc://com.apple.documentation/documentation/sirikit/inlocationrelevanceprovider/2963058-region
    region(): cocoascript.CLRegion;
    setRegion(): void;
    //
    alloc():cocoascript.INLocationRelevanceProvider;
    //
    init():cocoascript.INLocationRelevanceProvider;
  }
}

declare const INLocationRelevanceProvider: cocoascript.INLocationRelevanceProvider;
declare namespace cocoascript {
  /**
   * Retrieve the user's shortcuts and make shortcut suggestions.
   * doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter
   */
  interface INVoiceShortcutCenter extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2963093-sharedcenter
    sharedCenter(): cocoascript.INVoiceShortcutCenter;
    setSharedCenter(): void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2963091-getallvoiceshortcutswithcompleti
    getAllVoiceShortcutsWithCompletion(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2963092-getvoiceshortcutwithidentifier
    getVoiceShortcutWithIdentifier_completion(identifier: cocoascript.NSUUID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/sirikit/invoiceshortcutcenter/2994364-setshortcutsuggestions
    setShortcutSuggestions(suggestions: cocoascript.INShortcut):void;
    //
    alloc():cocoascript.INVoiceShortcutCenter;
    //
    init():cocoascript.INVoiceShortcutCenter;
  }
}

declare const INVoiceShortcutCenter: cocoascript.INVoiceShortcutCenter;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutrole
  type INRelevantShortcutRole = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that saves relevant shortcuts.
   * doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutstore
   */
  interface INRelevantShortcutStore extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutstore/2993348-defaultstore
    defaultStore(): cocoascript.INRelevantShortcutStore;
    setDefaultStore(): void;
    // doc://com.apple.documentation/documentation/sirikit/inrelevantshortcutstore/2993349-setrelevantshortcuts
    setRelevantShortcuts_completionHandler(shortcuts: cocoascript.INRelevantShortcut, completionHandler: cocoascript.NSError):void;
    //
    alloc():cocoascript.INRelevantShortcutStore;
    //
    init():cocoascript.INRelevantShortcutStore;
  }
}

declare const INRelevantShortcutStore: cocoascript.INRelevantShortcutStore;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmediadestinationtype
  type INMediaDestinationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmediareference
  type INMediaReference = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmediasortorder
  type INMediaSortOrder = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inreservationstatus
  type INReservationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inticketedeventcategory
  type INTicketedEventCategory = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inreservationactiontype
  type INReservationActionType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incarchargingconnectortype
  type INCarChargingConnectorType = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object for registering user-specific vocabulary that Siri requests might include.
   * doc://com.apple.documentation/documentation/sirikit/invocabulary
   */
  interface INVocabulary extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/invocabulary/2873636-setvocabulary
    setVocabulary_ofType(vocabulary: cocoascript.INSpeakable, type: cocoascript.INVocabularyStringType):void;
    // doc://com.apple.documentation/documentation/sirikit/invocabulary/1638998-setvocabularystrings
    setVocabularyStrings_ofType(vocabulary: cocoascript.NSString, type: cocoascript.INVocabularyStringType):void;
    // doc://com.apple.documentation/documentation/sirikit/invocabulary/1638705-removeallvocabularystrings
    removeAllVocabularyStrings():void;
    //
    alloc():cocoascript.INVocabulary;
    //
    init():cocoascript.INVocabulary;
  }
}

declare const INVocabulary: cocoascript.INVocabulary;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/incallrecordresolutionresult
   */
  interface INCallRecordResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallRecordResolutionResult;
    //
    init():cocoascript.INCallRecordResolutionResult;
  }
}

declare const INCallRecordResolutionResult: cocoascript.INCallRecordResolutionResult;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/sirikit/instartcallcallrecordtocallbackresolutionresult
   */
  interface INStartCallCallRecordToCallBackResolutionResult extends INCallRecordResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/instartcallcallrecordtocallbackresolutionresult/3649671-initwithcallrecordresolutionresu
    initWithCallRecordResolutionResult(callRecordResolutionResult: cocoascript.INCallRecordResolutionResult):cocoascript.INStartCallCallRecordToCallBackResolutionResult;
    //
    alloc():cocoascript.INStartCallCallRecordToCallBackResolutionResult;
    //
    init():cocoascript.INStartCallCallRecordToCallBackResolutionResult;
  }
}

declare const INStartCallCallRecordToCallBackResolutionResult: cocoascript.INStartCallCallRecordToCallBackResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inconditionaloperator
  type INConditionalOperator = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a parameter of an intent object.
   * doc://com.apple.documentation/documentation/sirikit/inintentresolutionresult
   */
  interface INIntentResolutionResult extends NSObject {
    //
    alloc():cocoascript.INIntentResolutionResult;
    //
    init():cocoascript.INIntentResolutionResult;
  }
}

declare const INIntentResolutionResult: cocoascript.INIntentResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a user associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inpersonresolutionresult
   */
  interface INPersonResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPersonResolutionResult;
    //
    init():cocoascript.INPersonResolutionResult;
  }
}

declare const INPersonResolutionResult: cocoascript.INPersonResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for placemark information associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inplacemarkresolutionresult
   */
  interface INPlacemarkResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPlacemarkResolutionResult;
    //
    init():cocoascript.INPlacemarkResolutionResult;
  }
}

declare const INPlacemarkResolutionResult: cocoascript.INPlacemarkResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the range of dates associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/indatecomponentsrangeresolutionresult
   */
  interface INDateComponentsRangeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INDateComponentsRangeResolutionResult;
    //
    init():cocoascript.INDateComponentsRangeResolutionResult;
  }
}

declare const INDateComponentsRangeResolutionResult: cocoascript.INDateComponentsRangeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the date information associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/indatecomponentsresolutionresult
   */
  interface INDateComponentsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INDateComponentsResolutionResult;
    //
    init():cocoascript.INDateComponentsResolutionResult;
  }
}

declare const INDateComponentsResolutionResult: cocoascript.INDateComponentsResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a file associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/infileresolutionresult
   */
  interface INFileResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INFileResolutionResult;
    //
    init():cocoascript.INFileResolutionResult;
  }
}

declare const INFileResolutionResult: cocoascript.INFileResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a speed associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inspeedresolutionresult
   */
  interface INSpeedResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INSpeedResolutionResult;
    //
    init():cocoascript.INSpeedResolutionResult;
  }
}

declare const INSpeedResolutionResult: cocoascript.INSpeedResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a volume associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/involumeresolutionresult
   */
  interface INVolumeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INVolumeResolutionResult;
    //
    init():cocoascript.INVolumeResolutionResult;
  }
}

declare const INVolumeResolutionResult: cocoascript.INVolumeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an energy parameter associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inenergyresolutionresult
   */
  interface INEnergyResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INEnergyResolutionResult;
    //
    init():cocoascript.INEnergyResolutionResult;
  }
}

declare const INEnergyResolutionResult: cocoascript.INEnergyResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a length associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inlengthresolutionresult
   */
  interface INLengthResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INLengthResolutionResult;
    //
    init():cocoascript.INLengthResolutionResult;
  }
}

declare const INLengthResolutionResult: cocoascript.INLengthResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a mass associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inmassresolutionresult
   */
  interface INMassResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMassResolutionResult;
    //
    init():cocoascript.INMassResolutionResult;
  }
}

declare const INMassResolutionResult: cocoascript.INMassResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a currency amount associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/incurrencyamountresolutionresult
   */
  interface INCurrencyAmountResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCurrencyAmountResolutionResult;
    //
    init():cocoascript.INCurrencyAmountResolutionResult;
  }
}

declare const INCurrencyAmountResolutionResult: cocoascript.INCurrencyAmountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an integer value associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inintegerresolutionresult
   */
  interface INIntegerResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INIntegerResolutionResult;
    //
    init():cocoascript.INIntegerResolutionResult;
  }
}

declare const INIntegerResolutionResult: cocoascript.INIntegerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a double value associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/indoubleresolutionresult
   */
  interface INDoubleResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INDoubleResolutionResult;
    //
    init():cocoascript.INDoubleResolutionResult;
  }
}

declare const INDoubleResolutionResult: cocoascript.INDoubleResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a Boolean value associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inbooleanresolutionresult
   */
  interface INBooleanResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INBooleanResolutionResult;
    //
    init():cocoascript.INBooleanResolutionResult;
  }
}

declare const INBooleanResolutionResult: cocoascript.INBooleanResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a string value associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/instringresolutionresult
   */
  interface INStringResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INStringResolutionResult;
    //
    init():cocoascript.INStringResolutionResult;
  }
}

declare const INStringResolutionResult: cocoascript.INStringResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a speakable string object associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inspeakablestringresolutionresult
   */
  interface INSpeakableStringResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INSpeakableStringResolutionResult;
    //
    init():cocoascript.INSpeakableStringResolutionResult;
  }
}

declare const INSpeakableStringResolutionResult: cocoascript.INSpeakableStringResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a time interval associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/intimeintervalresolutionresult
   */
  interface INTimeIntervalResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTimeIntervalResolutionResult;
    //
    init():cocoascript.INTimeIntervalResolutionResult;
  }
}

declare const INTimeIntervalResolutionResult: cocoascript.INTimeIntervalResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an enumeration associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inenumresolutionresult
   */
  interface INEnumResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INEnumResolutionResult;
    //
    init():cocoascript.INEnumResolutionResult;
  }
}

declare const INEnumResolutionResult: cocoascript.INEnumResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an Object associated with an intent.
   * doc://com.apple.documentation/documentation/sirikit/inobjectresolutionresult
   */
  interface INObjectResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INObjectResolutionResult;
    //
    init():cocoascript.INObjectResolutionResult;
  }
}

declare const INObjectResolutionResult: cocoascript.INObjectResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types media destinations.
   * doc://com.apple.documentation/documentation/sirikit/inurlresolutionresult
   */
  interface INURLResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INURLResolutionResult;
    //
    init():cocoascript.INURLResolutionResult;
  }
}

declare const INURLResolutionResult: cocoascript.INURLResolutionResult;
declare namespace cocoascript {
  /**
   * An object that provides user information to Siri.
   * doc://com.apple.documentation/documentation/sirikit/inmediausercontext
   */
  interface INMediaUserContext extends INUserContext {
    // doc://com.apple.documentation/documentation/sirikit/inmediausercontext/3197603-init
    init():cocoascript.INMediaUserContext;
    // doc://com.apple.documentation/documentation/sirikit/inmediausercontext/3197604-numberoflibraryitems
    numberOfLibraryItems(): cocoascript.NSNumber;
    setNumberOfLibraryItems(): void;
    // doc://com.apple.documentation/documentation/sirikit/inmediausercontext/3197605-subscriptionstatus
    subscriptionStatus(): cocoascript.INMediaUserContextSubscriptionStatus;
    setSubscriptionStatus(): void;
    //
    alloc():cocoascript.INMediaUserContext;
    //
    init():cocoascript.INMediaUserContext;
  }
}

declare const INMediaUserContext: cocoascript.INMediaUserContext;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inplaybackrepeatmode
  type INPlaybackRepeatMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inplaybackqueuelocation
  type INPlaybackQueueLocation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result that adds tasks to a target task list.
   * doc://com.apple.documentation/documentation/sirikit/inaddtaskstargettasklistresolutionresult
   */
  interface INAddTasksTargetTaskListResolutionResult extends INTaskListResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inaddtaskstargettasklistresolutionresult/3131046-initwithtasklistresolutionresult
    initWithTaskListResolutionResult(taskListResolutionResult: cocoascript.INTaskListResolutionResult):cocoascript.INAddTasksTargetTaskListResolutionResult;
    //
    alloc():cocoascript.INAddTasksTargetTaskListResolutionResult;
    //
    init():cocoascript.INAddTasksTargetTaskListResolutionResult;
  }
}

declare const INAddTasksTargetTaskListResolutionResult: cocoascript.INAddTasksTargetTaskListResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a temporal event trigger.
   * doc://com.apple.documentation/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult
   */
  interface INAddTasksTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult/3327002-initwithtemporaleventtriggerreso
    initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: cocoascript.INTemporalEventTriggerResolutionResult):cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
    //
    alloc():cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
    //
    init():cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
  }
}

declare const INAddTasksTemporalEventTriggerResolutionResult: cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for deleting task lists.
   * doc://com.apple.documentation/documentation/sirikit/indeletetaskstasklistresolutionresult
   */
  interface INDeleteTasksTaskListResolutionResult extends INTaskListResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/indeletetaskstasklistresolutionresult/3141706-initwithtasklistresolutionresult
    initWithTaskListResolutionResult(taskListResolutionResult: cocoascript.INTaskListResolutionResult):cocoascript.INDeleteTasksTaskListResolutionResult;
    //
    alloc():cocoascript.INDeleteTasksTaskListResolutionResult;
    //
    init():cocoascript.INDeleteTasksTaskListResolutionResult;
  }
}

declare const INDeleteTasksTaskListResolutionResult: cocoascript.INDeleteTasksTaskListResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for deleting tasks.
   * doc://com.apple.documentation/documentation/sirikit/indeletetaskstaskresolutionresult
   */
  interface INDeleteTasksTaskResolutionResult extends INTaskResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/indeletetaskstaskresolutionresult/3141711-initwithtaskresolutionresult
    initWithTaskResolutionResult(taskResolutionResult: cocoascript.INTaskResolutionResult):cocoascript.INDeleteTasksTaskResolutionResult;
    //
    alloc():cocoascript.INDeleteTasksTaskResolutionResult;
    //
    init():cocoascript.INDeleteTasksTaskResolutionResult;
  }
}

declare const INDeleteTasksTaskResolutionResult: cocoascript.INDeleteTasksTaskResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types of dates supported by a search.
   * doc://com.apple.documentation/documentation/sirikit/indatesearchtyperesolutionresult
   */
  interface INDateSearchTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INDateSearchTypeResolutionResult;
    //
    init():cocoascript.INDateSearchTypeResolutionResult;
  }
}

declare const INDateSearchTypeResolutionResult: cocoascript.INDateSearchTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for location-based searches.
   * doc://com.apple.documentation/documentation/sirikit/inlocationsearchtyperesolutionresult
   */
  interface INLocationSearchTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INLocationSearchTypeResolutionResult;
    //
    init():cocoascript.INLocationSearchTypeResolutionResult;
  }
}

declare const INLocationSearchTypeResolutionResult: cocoascript.INLocationSearchTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for notes.
   * doc://com.apple.documentation/documentation/sirikit/innoteresolutionresult
   */
  interface INNoteResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNoteResolutionResult;
    //
    init():cocoascript.INNoteResolutionResult;
  }
}

declare const INNoteResolutionResult: cocoascript.INNoteResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the content of notes.
   * doc://com.apple.documentation/documentation/sirikit/innotecontentresolutionresult
   */
  interface INNoteContentResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNoteContentResolutionResult;
    //
    init():cocoascript.INNoteContentResolutionResult;
  }
}

declare const INNoteContentResolutionResult: cocoascript.INNoteContentResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of items to look for during a search of notes and tasks.
   * doc://com.apple.documentation/documentation/sirikit/innotebookitemtyperesolutionresult
   */
  interface INNotebookItemTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNotebookItemTypeResolutionResult;
    //
    init():cocoascript.INNotebookItemTypeResolutionResult;
  }
}

declare const INNotebookItemTypeResolutionResult: cocoascript.INNotebookItemTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a temporal event trigger.
   * doc://com.apple.documentation/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult
   */
  interface INSetTaskAttributeTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult/3327012-initwithtemporaleventtriggerreso
    initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: cocoascript.INTemporalEventTriggerResolutionResult):cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
    //
    alloc():cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
    //
    init():cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
  }
}

declare const INSetTaskAttributeTemporalEventTriggerResolutionResult: cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for snoozing a task.
   * doc://com.apple.documentation/documentation/sirikit/insnoozetaskstaskresolutionresult
   */
  interface INSnoozeTasksTaskResolutionResult extends INTaskResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insnoozetaskstaskresolutionresult/3141861-initwithtaskresolutionresult
    initWithTaskResolutionResult(taskResolutionResult: cocoascript.INTaskResolutionResult):cocoascript.INSnoozeTasksTaskResolutionResult;
    //
    alloc():cocoascript.INSnoozeTasksTaskResolutionResult;
    //
    init():cocoascript.INSnoozeTasksTaskResolutionResult;
  }
}

declare const INSnoozeTasksTaskResolutionResult: cocoascript.INSnoozeTasksTaskResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the location-based trigger associated with a task.
   * doc://com.apple.documentation/documentation/sirikit/inspatialeventtriggerresolutionresult
   */
  interface INSpatialEventTriggerResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INSpatialEventTriggerResolutionResult;
    //
    init():cocoascript.INSpatialEventTriggerResolutionResult;
  }
}

declare const INSpatialEventTriggerResolutionResult: cocoascript.INSpatialEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a list of tasks.
   * doc://com.apple.documentation/documentation/sirikit/intasklistresolutionresult
   */
  interface INTaskListResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskListResolutionResult;
    //
    init():cocoascript.INTaskListResolutionResult;
  }
}

declare const INTaskListResolutionResult: cocoascript.INTaskListResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a single task within a task list.
   * doc://com.apple.documentation/documentation/sirikit/intaskresolutionresult
   */
  interface INTaskResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskResolutionResult;
    //
    init():cocoascript.INTaskResolutionResult;
  }
}

declare const INTaskResolutionResult: cocoascript.INTaskResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the status of a task.
   * doc://com.apple.documentation/documentation/sirikit/intaskstatusresolutionresult
   */
  interface INTaskStatusResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskStatusResolutionResult;
    //
    init():cocoascript.INTaskStatusResolutionResult;
  }
}

declare const INTaskStatusResolutionResult: cocoascript.INTaskStatusResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the time-based trigger associated with a task.
   * doc://com.apple.documentation/documentation/sirikit/intemporaleventtriggerresolutionresult
   */
  interface INTemporalEventTriggerResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTemporalEventTriggerResolutionResult;
    //
    init():cocoascript.INTemporalEventTriggerResolutionResult;
  }
}

declare const INTemporalEventTriggerResolutionResult: cocoascript.INTemporalEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the priority associated with a task.
   * doc://com.apple.documentation/documentation/sirikit/intaskpriorityresolutionresult
   */
  interface INTaskPriorityResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTaskPriorityResolutionResult;
    //
    init():cocoascript.INTaskPriorityResolutionResult;
  }
}

declare const INTaskPriorityResolutionResult: cocoascript.INTaskPriorityResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of data contained in notes.
   * doc://com.apple.documentation/documentation/sirikit/innotecontenttyperesolutionresult
   */
  interface INNoteContentTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNoteContentTypeResolutionResult;
    //
    init():cocoascript.INNoteContentTypeResolutionResult;
  }
}

declare const INNoteContentTypeResolutionResult: cocoascript.INNoteContentTypeResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insnoozetasksintentresponsecode
  type INSnoozeTasksIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incarseat
  type INCarSeat = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incardefroster
  type INCarDefroster = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incaraudiosource
  type INCarAudioSource = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incaraircirculationmode
  type INCarAirCirculationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inradiotype
  type INRadioType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrelativereference
  type INRelativeReference = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrelativesetting
  type INRelativeSetting = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a specific seat of the car.
   * doc://com.apple.documentation/documentation/sirikit/incarseatresolutionresult
   */
  interface INCarSeatResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCarSeatResolutionResult;
    //
    init():cocoascript.INCarSeatResolutionResult;
  }
}

declare const INCarSeatResolutionResult: cocoascript.INCarSeatResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for which defroster to use in a car.
   * doc://com.apple.documentation/documentation/sirikit/incardefrosterresolutionresult
   */
  interface INCarDefrosterResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCarDefrosterResolutionResult;
    //
    init():cocoascript.INCarDefrosterResolutionResult;
  }
}

declare const INCarDefrosterResolutionResult: cocoascript.INCarDefrosterResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the audio source to use in a car.
   * doc://com.apple.documentation/documentation/sirikit/incaraudiosourceresolutionresult
   */
  interface INCarAudioSourceResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCarAudioSourceResolutionResult;
    //
    init():cocoascript.INCarAudioSourceResolutionResult;
  }
}

declare const INCarAudioSourceResolutionResult: cocoascript.INCarAudioSourceResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the air circulation mode to use in a car.
   * doc://com.apple.documentation/documentation/sirikit/incaraircirculationmoderesolutionresult
   */
  interface INCarAirCirculationModeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCarAirCirculationModeResolutionResult;
    //
    init():cocoascript.INCarAirCirculationModeResolutionResult;
  }
}

declare const INCarAirCirculationModeResolutionResult: cocoascript.INCarAirCirculationModeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of radio to use in a car.
   * doc://com.apple.documentation/documentation/sirikit/inradiotyperesolutionresult
   */
  interface INRadioTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INRadioTypeResolutionResult;
    //
    init():cocoascript.INRadioTypeResolutionResult;
  }
}

declare const INRadioTypeResolutionResult: cocoascript.INRadioTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the units to use with a temperature value.
   * doc://com.apple.documentation/documentation/sirikit/intemperatureresolutionresult
   */
  interface INTemperatureResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INTemperatureResolutionResult;
    //
    init():cocoascript.INTemperatureResolutionResult;
  }
}

declare const INTemperatureResolutionResult: cocoascript.INTemperatureResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a choice between the next or previous option.
   * doc://com.apple.documentation/documentation/sirikit/inrelativereferenceresolutionresult
   */
  interface INRelativeReferenceResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INRelativeReferenceResolutionResult;
    //
    init():cocoascript.INRelativeReferenceResolutionResult;
  }
}

declare const INRelativeReferenceResolutionResult: cocoascript.INRelativeReferenceResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for whether you can select the minimum, current, or maximum value.
   * doc://com.apple.documentation/documentation/sirikit/inrelativesettingresolutionresult
   */
  interface INRelativeSettingResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INRelativeSettingResolutionResult;
    //
    init():cocoascript.INRelativeSettingResolutionResult;
  }
}

declare const INRelativeSettingResolutionResult: cocoascript.INRelativeSettingResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintentresponsecode
  type INSetAudioSourceInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/indeletetasksintentresponsecode
  type INDeleteTasksIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for assorted attributes of a message.
   * doc://com.apple.documentation/documentation/sirikit/inmessageattributeresolutionresult
   */
  interface INMessageAttributeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMessageAttributeResolutionResult;
    //
    init():cocoascript.INMessageAttributeResolutionResult;
  }
}

declare const INMessageAttributeResolutionResult: cocoascript.INMessageAttributeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the options applied to a message.
   * doc://com.apple.documentation/documentation/sirikit/inmessageattributeoptionsresolutionresult
   */
  interface INMessageAttributeOptionsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMessageAttributeOptionsResolutionResult;
    //
    init():cocoascript.INMessageAttributeOptionsResolutionResult;
  }
}

declare const INMessageAttributeOptionsResolutionResult: cocoascript.INMessageAttributeOptionsResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a message.
   * doc://com.apple.documentation/documentation/sirikit/insendmessagerecipientresolutionresult
   */
  interface INSendMessageRecipientResolutionResult extends INPersonResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insendmessagerecipientresolutionresult/2914612-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INSendMessageRecipientResolutionResult;
    //
    alloc():cocoascript.INSendMessageRecipientResolutionResult;
    //
    init():cocoascript.INSendMessageRecipientResolutionResult;
  }
}

declare const INSendMessageRecipientResolutionResult: cocoascript.INSendMessageRecipientResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetmessageattributeintentresponsecode
  type INSetMessageAttributeIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insaveprofileincarintentresponsecode
  type INSaveProfileInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for account types.
   * doc://com.apple.documentation/documentation/sirikit/inaccounttyperesolutionresult
   */
  interface INAccountTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INAccountTypeResolutionResult;
    //
    init():cocoascript.INAccountTypeResolutionResult;
  }
}

declare const INAccountTypeResolutionResult: cocoascript.INAccountTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for balance types.
   * doc://com.apple.documentation/documentation/sirikit/inbalancetyperesolutionresult
   */
  interface INBalanceTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INBalanceTypeResolutionResult;
    //
    init():cocoascript.INBalanceTypeResolutionResult;
  }
}

declare const INBalanceTypeResolutionResult: cocoascript.INBalanceTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types of bills a user might pay.
   * doc://com.apple.documentation/documentation/sirikit/inbilltyperesolutionresult
   */
  interface INBillTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INBillTypeResolutionResult;
    //
    init():cocoascript.INBillTypeResolutionResult;
  }
}

declare const INBillTypeResolutionResult: cocoascript.INBillTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a bill payment.
   * doc://com.apple.documentation/documentation/sirikit/inbillpayeeresolutionresult
   */
  interface INBillPayeeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INBillPayeeResolutionResult;
    //
    init():cocoascript.INBillPayeeResolutionResult;
  }
}

declare const INBillPayeeResolutionResult: cocoascript.INBillPayeeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the user account that provides the funds to pay a bill.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentaccountresolutionresult
   */
  interface INPaymentAccountResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentAccountResolutionResult;
    //
    init():cocoascript.INPaymentAccountResolutionResult;
  }
}

declare const INPaymentAccountResolutionResult: cocoascript.INPaymentAccountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the amount to pay for a bill.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentamountresolutionresult
   */
  interface INPaymentAmountResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentAmountResolutionResult;
    //
    init():cocoascript.INPaymentAmountResolutionResult;
  }
}

declare const INPaymentAmountResolutionResult: cocoascript.INPaymentAmountResolutionResult;
declare namespace cocoascript {
  /**
   * Describes the result of resolving a payment method.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentmethodresolutionresult
   */
  interface INPaymentMethodResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentMethodResolutionResult;
    //
    init():cocoascript.INPaymentMethodResolutionResult;
  }
}

declare const INPaymentMethodResolutionResult: cocoascript.INPaymentMethodResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the payment status of a bill during a search.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentstatusresolutionresult
   */
  interface INPaymentStatusResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPaymentStatusResolutionResult;
    //
    init():cocoascript.INPaymentStatusResolutionResult;
  }
}

declare const INPaymentStatusResolutionResult: cocoascript.INPaymentStatusResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the currency amount associated with a payment request.
   * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult
   */
  interface INRequestPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult/2915220-initwithcurrencyamountresolution
    initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: cocoascript.INCurrencyAmountResolutionResult):cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
    //
    alloc():cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
    //
    init():cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
  }
}

declare const INRequestPaymentCurrencyAmountResolutionResult: cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the person making the payment.
   * doc://com.apple.documentation/documentation/sirikit/inrequestpaymentpayerresolutionresult
   */
  interface INRequestPaymentPayerResolutionResult extends INPersonResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentpayerresolutionresult/2915217-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INRequestPaymentPayerResolutionResult;
    //
    alloc():cocoascript.INRequestPaymentPayerResolutionResult;
    //
    init():cocoascript.INRequestPaymentPayerResolutionResult;
  }
}

declare const INRequestPaymentPayerResolutionResult: cocoascript.INRequestPaymentPayerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the currency amount to send to another user.
   * doc://com.apple.documentation/documentation/sirikit/insendpaymentcurrencyamountresolutionresult
   */
  interface INSendPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentcurrencyamountresolutionresult/2915223-initwithcurrencyamountresolution
    initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: cocoascript.INCurrencyAmountResolutionResult):cocoascript.INSendPaymentCurrencyAmountResolutionResult;
    //
    alloc():cocoascript.INSendPaymentCurrencyAmountResolutionResult;
    //
    init():cocoascript.INSendPaymentCurrencyAmountResolutionResult;
  }
}

declare const INSendPaymentCurrencyAmountResolutionResult: cocoascript.INSendPaymentCurrencyAmountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a payment.
   * doc://com.apple.documentation/documentation/sirikit/insendpaymentpayeeresolutionresult
   */
  interface INSendPaymentPayeeResolutionResult extends INPersonResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insendpaymentpayeeresolutionresult/2914909-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INSendPaymentPayeeResolutionResult;
    //
    alloc():cocoascript.INSendPaymentPayeeResolutionResult;
    //
    init():cocoascript.INSendPaymentPayeeResolutionResult;
  }
}

declare const INSendPaymentPayeeResolutionResult: cocoascript.INSendPaymentPayeeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of visual code used to exchange information.
   * doc://com.apple.documentation/documentation/sirikit/invisualcodetyperesolutionresult
   */
  interface INVisualCodeTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INVisualCodeTypeResolutionResult;
    //
    init():cocoascript.INVisualCodeTypeResolutionResult;
  }
}

declare const INVisualCodeTypeResolutionResult: cocoascript.INVisualCodeTypeResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentintentresponsecode
  type INSendPaymentIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/increatenoteintentresponsecode
  type INCreateNoteIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrequestrideintentresponsecode
  type INRequestRideIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the restaurant selected by a user.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantresolutionresult
   */
  interface INRestaurantResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INRestaurantResolutionResult;
    //
    init():cocoascript.INRestaurantResolutionResult;
  }
}

declare const INRestaurantResolutionResult: cocoascript.INRestaurantResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the identity of a user involved in booking a reservation at a restaurant.
   * doc://com.apple.documentation/documentation/sirikit/inrestaurantguestresolutionresult
   */
  interface INRestaurantGuestResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INRestaurantGuestResolutionResult;
    //
    init():cocoascript.INRestaurantGuestResolutionResult;
  }
}

declare const INRestaurantGuestResolutionResult: cocoascript.INRestaurantGuestResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponsecode
  type INGetUserCurrentRestaurantReservationBookingsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inworkoutnameidentifier
  type INWorkoutNameIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inworkoutgoalunittype
  type INWorkoutGoalUnitType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inworkoutlocationtype
  type INWorkoutLocationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the units of a workout goal.
   * doc://com.apple.documentation/documentation/sirikit/inworkoutgoalunittyperesolutionresult
   */
  interface INWorkoutGoalUnitTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INWorkoutGoalUnitTypeResolutionResult;
    //
    init():cocoascript.INWorkoutGoalUnitTypeResolutionResult;
  }
}

declare const INWorkoutGoalUnitTypeResolutionResult: cocoascript.INWorkoutGoalUnitTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the location type where the workout occurs.
   * doc://com.apple.documentation/documentation/sirikit/inworkoutlocationtyperesolutionresult
   */
  interface INWorkoutLocationTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INWorkoutLocationTypeResolutionResult;
    //
    init():cocoascript.INWorkoutLocationTypeResolutionResult;
  }
}

declare const INWorkoutLocationTypeResolutionResult: cocoascript.INWorkoutLocationTypeResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inresumeworkoutintentresponsecode
  type INResumeWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inappendtonoteintentresponsecode
  type INAppendToNoteIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetdefrostersettingsincarintentresponsecode
  type INSetDefrosterSettingsInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inendworkoutintentresponsecode
  type INEndWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpauseworkoutintentresponsecode
  type INPauseWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponsecode
  type INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the call capability for the call.
   * doc://com.apple.documentation/documentation/sirikit/incallcapabilityresolutionresult
   */
  interface INCallCapabilityResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallCapabilityResolutionResult;
    //
    init():cocoascript.INCallCapabilityResolutionResult;
  }
}

declare const INCallCapabilityResolutionResult: cocoascript.INCallCapabilityResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the destination type of a call.
   * doc://com.apple.documentation/documentation/sirikit/incalldestinationtyperesolutionresult
   */
  interface INCallDestinationTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallDestinationTypeResolutionResult;
    //
    init():cocoascript.INCallDestinationTypeResolutionResult;
  }
}

declare const INCallDestinationTypeResolutionResult: cocoascript.INCallDestinationTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types of calls that your app handled.
   * doc://com.apple.documentation/documentation/sirikit/incallrecordtyperesolutionresult
   */
  interface INCallRecordTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallRecordTypeResolutionResult;
    //
    init():cocoascript.INCallRecordTypeResolutionResult;
  }
}

declare const INCallRecordTypeResolutionResult: cocoascript.INCallRecordTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the call types to include in a search.
   * doc://com.apple.documentation/documentation/sirikit/incallrecordtypeoptionsresolutionresult
   */
  interface INCallRecordTypeOptionsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCallRecordTypeOptionsResolutionResult;
    //
    init():cocoascript.INCallRecordTypeOptionsResolutionResult;
  }
}

declare const INCallRecordTypeOptionsResolutionResult: cocoascript.INCallRecordTypeOptionsResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the call capability for the call.
   * doc://com.apple.documentation/documentation/sirikit/instartcallcallcapabilityresolutionresult
   */
  interface INStartCallCallCapabilityResolutionResult extends INCallCapabilityResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/instartcallcallcapabilityresolutionresult/3165924-initwithcallcapabilityresolution
    initWithCallCapabilityResolutionResult(callCapabilityResolutionResult: cocoascript.INCallCapabilityResolutionResult):cocoascript.INStartCallCallCapabilityResolutionResult;
    //
    alloc():cocoascript.INStartCallCallCapabilityResolutionResult;
    //
    init():cocoascript.INStartCallCallCapabilityResolutionResult;
  }
}

declare const INStartCallCallCapabilityResolutionResult: cocoascript.INStartCallCallCapabilityResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the contact for the call.
   * doc://com.apple.documentation/documentation/sirikit/instartcallcontactresolutionresult
   */
  interface INStartCallContactResolutionResult extends INPersonResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/instartcallcontactresolutionresult/3165931-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: cocoascript.INPersonResolutionResult):cocoascript.INStartCallContactResolutionResult;
    //
    alloc():cocoascript.INStartCallContactResolutionResult;
    //
    init():cocoascript.INStartCallContactResolutionResult;
  }
}

declare const INStartCallContactResolutionResult: cocoascript.INStartCallContactResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incallaudioroute
  type INCallAudioRoute = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartcallintentresponsecode
  type INStartCallIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartaudiocallintentresponsecode
  type INStartAudioCallIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetclimatesettingsincarintentresponsecode
  type INSetClimateSettingsInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/invisualcodetype
  type INVisualCodeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetvisualcodeintentresponsecode
  type INGetVisualCodeIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchforbillsintentresponsecode
  type INSearchForBillsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentintentresponsecode
  type INRequestPaymentIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetradiostationintentresponsecode
  type INSetRadioStationIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartworkoutintentresponsecode
  type INStartWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartvideocallintentresponsecode
  type INStartVideoCallIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incarsignaloptions
  type INCarSignalOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the signals the intent is managing on the car.
   * doc://com.apple.documentation/documentation/sirikit/incarsignaloptionsresolutionresult
   */
  interface INCarSignalOptionsResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INCarSignalOptionsResolutionResult;
    //
    init():cocoascript.INCarSignalOptionsResolutionResult;
  }
}

declare const INCarSignalOptionsResolutionResult: cocoascript.INCarSignalOptionsResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inactivatecarsignalintentresponsecode
  type INActivateCarSignalIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inphotoattributeoptions
  type INPhotoAttributeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchforphotosintentresponsecode
  type INSearchForPhotosIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetridestatusintentresponsecode
  type INGetRideStatusIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incancelrideintentresponsecode
  type INCancelRideIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetcarlockstatusintentresponsecode
  type INSetCarLockStatusIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The manager object you use to suggest media to the user.
   * doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager
   */
  interface INUpcomingMediaManager extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager/2963079-sharedmanager
    sharedManager(): cocoascript.INUpcomingMediaManager;
    setSharedManager(): void;
    // doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager/2963078-setsuggestedmediaintents
    setSuggestedMediaIntents(intents: cocoascript.INPlayMediaIntent):void;
    // doc://com.apple.documentation/documentation/sirikit/inupcomingmediamanager/2980695-setpredictionmode
    setPredictionMode_forType(mode: cocoascript.INUpcomingMediaPredictionMode, type: cocoascript.INMediaItemType):void;
    //
    alloc():cocoascript.INUpcomingMediaManager;
    //
    init():cocoascript.INUpcomingMediaManager;
  }
}

declare const INUpcomingMediaManager: cocoascript.INUpcomingMediaManager;
declare namespace cocoascript {
  /**
   * A resolution result for the types of destinations when adding media.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediamediadestinationresolutionresult
   */
  interface INAddMediaMediaDestinationResolutionResult extends INMediaDestinationResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediamediadestinationresolutionresult/3180117-initwithmediadestinationresoluti
    initWithMediaDestinationResolutionResult(mediaDestinationResolutionResult: cocoascript.INMediaDestinationResolutionResult):cocoascript.INAddMediaMediaDestinationResolutionResult;
    //
    alloc():cocoascript.INAddMediaMediaDestinationResolutionResult;
    //
    init():cocoascript.INAddMediaMediaDestinationResolutionResult;
  }
}

declare const INAddMediaMediaDestinationResolutionResult: cocoascript.INAddMediaMediaDestinationResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media item to add.
   * doc://com.apple.documentation/documentation/sirikit/inaddmediamediaitemresolutionresult
   */
  interface INAddMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inaddmediamediaitemresolutionresult/3180122-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INAddMediaMediaItemResolutionResult;
    //
    alloc():cocoascript.INAddMediaMediaItemResolutionResult;
    //
    init():cocoascript.INAddMediaMediaItemResolutionResult;
  }
}

declare const INAddMediaMediaItemResolutionResult: cocoascript.INAddMediaMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media destination types.
   * doc://com.apple.documentation/documentation/sirikit/inmediadestinationresolutionresult
   */
  interface INMediaDestinationResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMediaDestinationResolutionResult;
    //
    init():cocoascript.INMediaDestinationResolutionResult;
  }
}

declare const INMediaDestinationResolutionResult: cocoascript.INMediaDestinationResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for media item types.
   * doc://com.apple.documentation/documentation/sirikit/inmediaitemresolutionresult
   */
  interface INMediaItemResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMediaItemResolutionResult;
    //
    init():cocoascript.INMediaItemResolutionResult;
  }
}

declare const INMediaItemResolutionResult: cocoascript.INMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the user’s affinity for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inmediaaffinitytyperesolutionresult
   */
  interface INMediaAffinityTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INMediaAffinityTypeResolutionResult;
    //
    init():cocoascript.INMediaAffinityTypeResolutionResult;
  }
}

declare const INMediaAffinityTypeResolutionResult: cocoascript.INMediaAffinityTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media item to play.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediamediaitemresolutionresult
   */
  interface INPlayMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediamediaitemresolutionresult/3180133-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INPlayMediaMediaItemResolutionResult;
    //
    alloc():cocoascript.INPlayMediaMediaItemResolutionResult;
    //
    init():cocoascript.INPlayMediaMediaItemResolutionResult;
  }
}

declare const INPlayMediaMediaItemResolutionResult: cocoascript.INPlayMediaMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result that determines the playback speed of a media item.
   * doc://com.apple.documentation/documentation/sirikit/inplaymediaplaybackspeedresolutionresult
   */
  interface INPlayMediaPlaybackSpeedResolutionResult extends INDoubleResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inplaymediaplaybackspeedresolutionresult/3180142-initwithdoubleresolutionresult
    initWithDoubleResolutionResult(doubleResolutionResult: cocoascript.INDoubleResolutionResult):cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
    //
    alloc():cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
    //
    init():cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
  }
}

declare const INPlayMediaPlaybackSpeedResolutionResult: cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the playback repeat modes of a media item.
   * doc://com.apple.documentation/documentation/sirikit/inplaybackrepeatmoderesolutionresult
   */
  interface INPlaybackRepeatModeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPlaybackRepeatModeResolutionResult;
    //
    init():cocoascript.INPlaybackRepeatModeResolutionResult;
  }
}

declare const INPlaybackRepeatModeResolutionResult: cocoascript.INPlaybackRepeatModeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the requested playback queue location.
   * doc://com.apple.documentation/documentation/sirikit/inplaybackqueuelocationresolutionresult
   */
  interface INPlaybackQueueLocationResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INPlaybackQueueLocationResolutionResult;
    //
    init():cocoascript.INPlaybackQueueLocationResolutionResult;
  }
}

declare const INPlaybackQueueLocationResolutionResult: cocoascript.INPlaybackQueueLocationResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media item for which to search.
   * doc://com.apple.documentation/documentation/sirikit/insearchformediamediaitemresolutionresult
   */
  interface INSearchForMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/insearchformediamediaitemresolutionresult/3180156-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INSearchForMediaMediaItemResolutionResult;
    //
    alloc():cocoascript.INSearchForMediaMediaItemResolutionResult;
    //
    init():cocoascript.INSearchForMediaMediaItemResolutionResult;
  }
}

declare const INSearchForMediaMediaItemResolutionResult: cocoascript.INSearchForMediaMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for updating the user’s affinity for a media item.
   * doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult
   */
  interface INUpdateMediaAffinityMediaItemResolutionResult extends INMediaItemResolutionResult {
    // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult/3180165-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: cocoascript.INMediaItemResolutionResult):cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
    //
    alloc():cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
    //
    init():cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
  }
}

declare const INUpdateMediaAffinityMediaItemResolutionResult: cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchformediaintentresponsecode
  type INSearchForMediaIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetcarpowerlevelstatusintentresponsecode
  type INGetCarPowerLevelStatusIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetrestaurantguestintentresponsecode
  type INGetRestaurantGuestIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintentresponsecode
  type INSearchForAccountsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetprofileincarintentresponsecode
  type INSetProfileInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/innotebookitemtype
  type INNotebookItemType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inlocationsearchtype
  type INLocationSearchType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/indatesearchtype
  type INDateSearchType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/intaskpriority
  type INTaskPriority = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/intemporaleventtriggertypeoptions
  type INTemporalEventTriggerTypeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchfornotebookitemsintentresponsecode
  type INSearchForNotebookItemsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insorttype
  type INSortType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inlistrideoptionsintentresponsecode
  type INListRideOptionsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incancelworkoutintentresponsecode
  type INCancelWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inlistcarsintentresponsecode
  type INListCarsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/increatetasklistintentresponsecode
  type INCreateTaskListIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insendridefeedbackintentresponsecode
  type INSendRideFeedbackIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insendmessageintentresponsecode
  type INSendMessageIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inbookrestaurantreservationintentcode
  type INBookRestaurantReservationIntentCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartphotoplaybackintentresponsecode
  type INStartPhotoPlaybackIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insetseatsettingsincarintentresponsecode
  type INSetSeatSettingsInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintentresponsecode
  type INSearchForMessagesIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inpaybillintentresponsecode
  type INPayBillIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The preferences and authorization related to using SiriKit.
   * doc://com.apple.documentation/documentation/sirikit/inpreferences
   */
  interface INPreferences extends NSObject {
    //
    alloc():cocoascript.INPreferences;
    //
    init():cocoascript.INPreferences;
  }
}

declare const INPreferences: cocoascript.INPreferences;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inintenterrorcode
  type INIntentErrorCode = cocoascript.NSInteger;
}
declare const IntentsVersionString: string;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributeintentresponsecode
  type INSetTaskAttributeIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintentresponsecode
  type INTransferMoneyIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaddtasksintentresponsecode
  type INAddTasksIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/incallcapabilityoptions
  type INCallCapabilityOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchcallhistoryintentresponsecode
  type INSearchCallHistoryIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inuiaddvoiceshortcutbuttonstyle
  type INUIAddVoiceShortcutButtonStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaddmediaintentresponsecode
  type INAddMediaIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaintentresponsecode
  type INPlayMediaIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentcode
  type INGetAvailableRestaurantReservationBookingsIntentCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmediaaffinitytype
  type INMediaAffinityType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinityintentresponsecode
  type INUpdateMediaAffinityIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetcarlockstatusintentresponsecode
  type INGetCarLockStatusIntentResponseCode = cocoascript.NSInteger;
}
declare const INPersonRelationshipBrother: cocoascript.INPersonRelationship;
declare const INPersonRelationshipAssistant: cocoascript.INPersonRelationship;
declare const INPersonRelationshipChild: cocoascript.INPersonRelationship;
declare const INPersonRelationshipFather: cocoascript.INPersonRelationship;
declare const INPersonRelationshipFriend: cocoascript.INPersonRelationship;
declare const INPersonRelationshipManager: cocoascript.INPersonRelationship;
declare const INPersonRelationshipMother: cocoascript.INPersonRelationship;
declare const INPersonRelationshipParent: cocoascript.INPersonRelationship;
declare const INPersonRelationshipPartner: cocoascript.INPersonRelationship;
declare const INPersonRelationshipSister: cocoascript.INPersonRelationship;
declare const INPersonRelationshipSpouse: cocoascript.INPersonRelationship;
declare const INPersonRelationshipDaughter: cocoascript.INPersonRelationship;
declare const INPersonRelationshipSon: cocoascript.INPersonRelationship;
declare const INPersonHandleLabelHome: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelHomeFax: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabeliPhone: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelMain: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelMobile: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelOther: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelPager: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelWork: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelWorkFax: cocoascript.INPersonHandleLabel;
declare const INPersonHandleLabelSchool: cocoascript.INPersonHandleLabel;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/indailyroutinesituation
  type INDailyRoutineSituation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A request for details about one or more reservations.
   * doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent
   */
  interface INGetReservationDetailsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent/3172598-initwithreservationcontainerrefe
    initWithReservationContainerReference_reservationItemReferences(reservationContainerReference: cocoascript.INSpeakableString, reservationItemReferences: cocoascript.INSpeakableString):cocoascript.INGetReservationDetailsIntent;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent/3172599-reservationcontainerreference
    reservationContainerReference(): cocoascript.INSpeakableString;
    setReservationContainerReference(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintent/3172600-reservationitemreferences
    reservationItemReferences(): cocoascript.INSpeakableString;
    setReservationItemReferences(): void;
    //
    alloc():cocoascript.INGetReservationDetailsIntent;
    //
    init():cocoascript.INGetReservationDetailsIntent;
  }
}

declare const INGetReservationDetailsIntent: cocoascript.INGetReservationDetailsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request for reservation details.
   * doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse
   */
  interface INGetReservationDetailsIntentResponse extends INIntentResponse {
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse/3172608-initwithcode
    initWithCode_userActivity(code: cocoascript.INGetReservationDetailsIntentResponseCode, userActivity: cocoascript.NSUserActivity):cocoascript.INGetReservationDetailsIntentResponse;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse/3172609-reservations
    reservations(): cocoascript.INReservation;
    setReservations(): void;
    // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponse/3172607-code
    code(): cocoascript.INGetReservationDetailsIntentResponseCode;
    setCode(): void;
    //
    alloc():cocoascript.INGetReservationDetailsIntentResponse;
    //
    init():cocoascript.INGetReservationDetailsIntentResponse;
  }
}

declare const INGetReservationDetailsIntentResponse: cocoascript.INGetReservationDetailsIntentResponse;
declare const INCarChargingConnectorTypeCCS1: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeCCS2: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeCHAdeMO: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeGBTAC: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeGBTDC: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeJ1772: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeMennekes: cocoascript.INCarChargingConnectorType;
declare const INCarChargingConnectorTypeTesla: cocoascript.INCarChargingConnectorType;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/invocabularystringtype
  type INVocabularyStringType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartcallcallrecordtocallbackunsupportedreason
  type INStartCallCallRecordToCallBackUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inmediausercontextsubscriptionstatus
  type INMediaUserContextSubscriptionStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaddtaskstargettasklistconfirmationreason
  type INAddTasksTargetTaskListConfirmationReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaddtaskstemporaleventtriggerunsupportedreason
  type INAddTasksTemporalEventTriggerUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/indeletetaskstasklistunsupportedreason
  type INDeleteTasksTaskListUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/indeletetaskstaskunsupportedreason
  type INDeleteTasksTaskUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insettaskattributetemporaleventtriggerunsupportedreason
  type INSetTaskAttributeTemporalEventTriggerUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insnoozetaskstaskunsupportedreason
  type INSnoozeTasksTaskUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insendmessagerecipientunsupportedreason
  type INSendMessageRecipientUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentcurrencyamountunsupportedreason
  type INRequestPaymentCurrencyAmountUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inrequestpaymentpayerunsupportedreason
  type INRequestPaymentPayerUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentcurrencyamountunsupportedreason
  type INSendPaymentCurrencyAmountUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insendpaymentpayeeunsupportedreason
  type INSendPaymentPayeeUnsupportedReason = cocoascript.NSInteger;
}
declare const INWorkoutNameIdentifierCrosstraining: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierCycle: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierDance: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierElliptical: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierExercise: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierHighIntensityIntervalTraining: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierHike: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierIndoorcycle: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierIndoorrun: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierIndoorwalk: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierMove: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierOther: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierRower: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierRun: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierSit: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierStairs: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierStand: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierSteps: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierSwim: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierWalk: cocoascript.INWorkoutNameIdentifier;
declare const INWorkoutNameIdentifierYoga: cocoascript.INWorkoutNameIdentifier;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartcallcallcapabilityunsupportedreason
  type INStartCallCallCapabilityUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/instartcallcontactunsupportedreason
  type INStartCallContactUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inupcomingmediapredictionmode
  type INUpcomingMediaPredictionMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaddmediamediadestinationunsupportedreason
  type INAddMediaMediaDestinationUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inaddmediamediaitemunsupportedreason
  type INAddMediaMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inplaymediamediaitemunsupportedreason
  type INPlayMediaMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inplaymediaplaybackspeedunsupportedreason
  type INPlayMediaPlaybackSpeedUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insearchformediamediaitemunsupportedreason
  type INSearchForMediaMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/inupdatemediaaffinitymediaitemunsupportedreason
  type INUpdateMediaAffinityMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/insiriauthorizationstatus
  type INSiriAuthorizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/sirikit/ingetreservationdetailsintentresponsecode
  type INGetReservationDetailsIntentResponseCode = cocoascript.NSInteger;
}
