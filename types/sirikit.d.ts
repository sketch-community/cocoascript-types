declare namespace cocoascript {
  /**
   * An interaction between the user and your app involving an intent object.
   * https://developer.apple.com/documentation/sirikit/ininteraction
   */
  interface INInteraction extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ininteraction/1639259-initwithintent
    initWithIntent_response(intent: INIntent, response: INIntentResponse):INInteraction;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1638928-intent
    intent(): INIntent;
    setIntent(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1638817-intentresponse
    intentResponse(): INIntentResponse;
    setIntentResponse(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1690386-donateinteractionwithcompletion
    donateInteractionWithCompletion(completion: NSError):void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1690389-deleteallinteractionswithcomplet
    deleteAllInteractionsWithCompletion(completion: NSError):void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1690400-deleteinteractionswithidentifier
    deleteInteractionsWithIdentifiers_completion(identifiers: string | cocoascript.NSString, completion: NSError):void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1690364-deleteinteractionswithgroupident
    deleteInteractionsWithGroupIdentifier_completion(groupIdentifier: string | cocoascript.NSString, completion: NSError):void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1638740-intenthandlingstatus
    intentHandlingStatus(): INIntentHandlingStatus;
    setIntentHandlingStatus(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1639368-direction
    direction(): INInteractionDirection;
    setDirection(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1638853-dateinterval
    dateInterval(): NSDateInterval;
    setDateInterval(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1638924-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/1638832-groupidentifier
    groupIdentifier(): string | cocoascript.NSString;
    setGroupIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/ininteraction/2908769-parametervalueforparameter
    parameterValueForParameter(parameter: INParameter):INInteraction;
    //
    alloc():INInteraction;
    //
    init():INInteraction;
  }
}

declare const INInteraction: cocoascript.INInteraction;
declare namespace cocoascript {
  /**
   * The handler interface that snoozes tasks in a task list.
   * https://developer.apple.com/documentation/sirikit/insnoozetasksintenthandling
   */
  interface INSnoozeTasksIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintenthandling/3141847-resolvenexttriggertimeforsnoozet
    resolveNextTriggerTimeForSnoozeTasks_withCompletion(intent: INSnoozeTasksIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintenthandling/3141848-resolvetasksforsnoozetasks
    resolveTasksForSnoozeTasks_withCompletion(intent: INSnoozeTasksIntent, completion: INSnoozeTasksTaskResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintenthandling/3141845-confirmsnoozetasks
    confirmSnoozeTasks_completion(intent: INSnoozeTasksIntent, completion: INSnoozeTasksIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintenthandling/3141846-handlesnoozetasks
    handleSnoozeTasks_completion(intent: INSnoozeTasksIntent, completion: INSnoozeTasksIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s audio source.
   * https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintenthandling
   */
  interface INSetAudioSourceInCarIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintenthandling/1902349-resolveaudiosourceforsetaudiosou
    resolveAudioSourceForSetAudioSourceInCar_withCompletion(intent: INSetAudioSourceInCarIntent, completion: INCarAudioSourceResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintenthandling/1902350-resolverelativeaudiosourcerefere
    resolveRelativeAudioSourceReferenceForSetAudioSourceInCar_withCompletion(intent: INSetAudioSourceInCarIntent, completion: INRelativeReferenceResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintenthandling/1648408-confirmsetaudiosourceincar
    confirmSetAudioSourceInCar_completion(intent: INSetAudioSourceInCarIntent, completion: INSetAudioSourceInCarIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintenthandling/1648405-handlesetaudiosourceincar
    handleSetAudioSourceInCar_completion(intent: INSetAudioSourceInCarIntent, completion: INSetAudioSourceInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to delete tasks from a task list.
   * https://developer.apple.com/documentation/sirikit/indeletetasksintenthandling
   */
  interface INDeleteTasksIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/indeletetasksintenthandling/3141692-resolvetasklistfordeletetasks
    resolveTaskListForDeleteTasks_withCompletion(intent: INDeleteTasksIntent, completion: INDeleteTasksTaskListResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintenthandling/3141693-resolvetasksfordeletetasks
    resolveTasksForDeleteTasks_withCompletion(intent: INDeleteTasksIntent, completion: INDeleteTasksTaskResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintenthandling/3141690-confirmdeletetasks
    confirmDeleteTasks_completion(intent: INDeleteTasksIntent, completion: INDeleteTasksIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintenthandling/3141691-handledeletetasks
    handleDeleteTasks_completion(intent: INDeleteTasksIntent, completion: INDeleteTasksIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles modifying message attributes.
   * https://developer.apple.com/documentation/sirikit/insetmessageattributeintenthandling
   */
  interface INSetMessageAttributeIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintenthandling/1902387-resolveattributeforsetmessageatt
    resolveAttributeForSetMessageAttribute_withCompletion(intent: INSetMessageAttributeIntent, completion: INMessageAttributeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintenthandling/1829397-confirmsetmessageattribute
    confirmSetMessageAttribute_completion(intent: INSetMessageAttributeIntent, completion: INSetMessageAttributeIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintenthandling/1829394-handlesetmessageattribute
    handleSetMessageAttribute_completion(intent: INSetMessageAttributeIntent, completion: INSetMessageAttributeIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for saving vehicle environment settings to a user-specified profile.
   * https://developer.apple.com/documentation/sirikit/insaveprofileincarintenthandling
   */
  interface INSaveProfileInCarIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintenthandling/2102341-resolveprofilenumberforsaveprofi
    resolveProfileNumberForSaveProfileInCar_withCompletion(intent: INSaveProfileInCarIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintenthandling/2727144-resolveprofilenameforsaveprofile
    resolveProfileNameForSaveProfileInCar_withCompletion(intent: INSaveProfileInCarIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintenthandling/2102344-confirmsaveprofileincar
    confirmSaveProfileInCar_completion(intent: INSaveProfileInCarIntent, completion: INSaveProfileInCarIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintenthandling/2102342-handlesaveprofileincar
    handleSaveProfileInCar_completion(intent: INSaveProfileInCarIntent, completion: INSaveProfileInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for transferring money from the current user’s account to a different user’s account.
   * https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling
   */
  interface INSendPaymentIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1638813-resolvepayeeforsendpayment
    resolvePayeeForSendPayment_completion(intent: INSendPaymentIntent, completion: INSendPaymentPayeeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1638362-resolvecurrencyamountforsendpaym
    resolveCurrencyAmountForSendPayment_completion(intent: INSendPaymentIntent, completion: INSendPaymentCurrencyAmountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1906905-resolvenoteforsendpayment
    resolveNoteForSendPayment_withCompletion(intent: INSendPaymentIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1906907-resolvepayeeforsendpayment
    resolvePayeeForSendPayment_withCompletion(intent: INSendPaymentIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1906906-resolvecurrencyamountforsendpaym
    resolveCurrencyAmountForSendPayment_withCompletion(intent: INSendPaymentIntent, completion: INCurrencyAmountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1638929-confirmsendpayment
    confirmSendPayment_completion(intent: INSendPaymentIntent, completion: INSendPaymentIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintenthandling/1638809-handlesendpayment
    handleSendPayment_completion(intent: INSendPaymentIntent, completion: INSendPaymentIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for creating notes.
   * https://developer.apple.com/documentation/sirikit/increatenoteintenthandling
   */
  interface INCreateNoteIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/increatenoteintenthandling/2874064-resolvetitleforcreatenote
    resolveTitleForCreateNote_withCompletion(intent: INCreateNoteIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintenthandling/2874061-resolvecontentforcreatenote
    resolveContentForCreateNote_withCompletion(intent: INCreateNoteIntent, completion: INNoteContentResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintenthandling/2874057-resolvegroupnameforcreatenote
    resolveGroupNameForCreateNote_withCompletion(intent: INCreateNoteIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintenthandling/2874062-confirmcreatenote
    confirmCreateNote_completion(intent: INCreateNoteIntent, completion: INCreateNoteIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintenthandling/2874059-handlecreatenote
    handleCreateNote_completion(intent: INCreateNoteIntent, completion: INCreateNoteIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for booking a ride for the user.
   * https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling
   */
  interface INRequestRideIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/1902428-resolvepickuplocationforrequestr
    resolvePickupLocationForRequestRide_withCompletion(intent: INRequestRideIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/2838715-resolvescheduledpickuptimeforreq
    resolveScheduledPickupTimeForRequestRide_withCompletion(intent: INRequestRideIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/1902427-resolvedropofflocationforrequest
    resolveDropOffLocationForRequestRide_withCompletion(intent: INRequestRideIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/1902429-resolverideoptionnameforrequestr
    resolveRideOptionNameForRequestRide_withCompletion(intent: INRequestRideIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/1902425-resolvepartysizeforrequestride
    resolvePartySizeForRequestRide_withCompletion(intent: INRequestRideIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/1649612-confirmrequestride
    confirmRequestRide_completion(intent: INRequestRideIntent, completion: INRequestRideIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintenthandling/1649625-handlerequestride
    handleRequestRide_completion(intent: INRequestRideIntent, completion: INRequestRideIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching and delivering the user’s current reservations.
   * https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1845247-resolverestaurantforgetusercurre
    resolveRestaurantForGetUserCurrentRestaurantReservationBookings_withCompletion(intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: INRestaurantResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1845251-confirmgetusercurrentrestaurantr
    confirmGetUserCurrentRestaurantReservationBookings_completion(intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: INGetUserCurrentRestaurantReservationBookingsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintenthandling/1650031-handlegetusercurrentrestaurantre
    handleGetUserCurrentRestaurantReservationBookings_completion(intent: INGetUserCurrentRestaurantReservationBookingsIntent, completion: INGetUserCurrentRestaurantReservationBookingsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles requests to resume a workout.
   * https://developer.apple.com/documentation/sirikit/inresumeworkoutintenthandling
   */
  interface INResumeWorkoutIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintenthandling/1902397-resolveworkoutnameforresumeworko
    resolveWorkoutNameForResumeWorkout_withCompletion(intent: INResumeWorkoutIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintenthandling/1638905-confirmresumeworkout
    confirmResumeWorkout_completion(intent: INResumeWorkoutIntent, completion: INResumeWorkoutIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintenthandling/1639077-handleresumeworkout
    handleResumeWorkout_completion(intent: INResumeWorkoutIntent, completion: INResumeWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for appending content to a note.
   * https://developer.apple.com/documentation/sirikit/inappendtonoteintenthandling
   */
  interface INAppendToNoteIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintenthandling/2873750-resolvecontentforappendtonote
    resolveContentForAppendToNote_withCompletion(intent: INAppendToNoteIntent, completion: INNoteContentResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintenthandling/2878105-resolvetargetnoteforappendtonote
    resolveTargetNoteForAppendToNote_withCompletion(intent: INAppendToNoteIntent, completion: INNoteResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintenthandling/2873748-confirmappendtonote
    confirmAppendToNote_completion(intent: INAppendToNoteIntent, completion: INAppendToNoteIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintenthandling/2873753-handleappendtonote
    handleAppendToNote_completion(intent: INAppendToNoteIntent, completion: INAppendToNoteIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s defroster settings.
   * https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintenthandling
   */
  interface INSetDefrosterSettingsInCarIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintenthandling/1902493-resolveenableforsetdefrostersett
    resolveEnableForSetDefrosterSettingsInCar_withCompletion(intent: INSetDefrosterSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintenthandling/1902494-resolvedefrosterforsetdefrosters
    resolveDefrosterForSetDefrosterSettingsInCar_withCompletion(intent: INSetDefrosterSettingsInCarIntent, completion: INCarDefrosterResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintenthandling/3019573-resolvecarnameforsetdefrosterset
    resolveCarNameForSetDefrosterSettingsInCar_withCompletion(intent: INSetDefrosterSettingsInCarIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintenthandling/1649421-confirmsetdefrostersettingsincar
    confirmSetDefrosterSettingsInCar_completion(intent: INSetDefrosterSettingsInCarIntent, completion: INSetDefrosterSettingsInCarIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintenthandling/1649423-handlesetdefrostersettingsincar
    handleSetDefrosterSettingsInCar_completion(intent: INSetDefrosterSettingsInCarIntent, completion: INSetDefrosterSettingsInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to complete a workout.
   * https://developer.apple.com/documentation/sirikit/inendworkoutintenthandling
   */
  interface INEndWorkoutIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inendworkoutintenthandling/1902506-resolveworkoutnameforendworkout
    resolveWorkoutNameForEndWorkout_withCompletion(intent: INEndWorkoutIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inendworkoutintenthandling/1638404-confirmendworkout
    confirmEndWorkout_completion(intent: INEndWorkoutIntent, completion: INEndWorkoutIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inendworkoutintenthandling/1638144-handleendworkout
    handleEndWorkout_completion(intent: INEndWorkoutIntent, completion: INEndWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to pause a workout.
   * https://developer.apple.com/documentation/sirikit/inpauseworkoutintenthandling
   */
  interface INPauseWorkoutIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintenthandling/1902354-resolveworkoutnameforpauseworkou
    resolveWorkoutNameForPauseWorkout_withCompletion(intent: INPauseWorkoutIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintenthandling/1638659-confirmpauseworkout
    confirmPauseWorkout_completion(intent: INPauseWorkoutIntent, completion: INPauseWorkoutIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintenthandling/1638187-handlepauseworkout
    handlePauseWorkout_completion(intent: INPauseWorkoutIntent, completion: INPauseWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for providing default values to the system when pre-fetching an initial set of possible reservation times.
   * https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1845246-resolverestaurantforgetavailable
    resolveRestaurantForGetAvailableRestaurantReservationBookingDefaults_withCompletion(intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: INRestaurantResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1845257-confirmgetavailablerestaurantres
    confirmGetAvailableRestaurantReservationBookingDefaults_completion(intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: INGetAvailableRestaurantReservationBookingDefaultsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintenthandling/1650055-handlegetavailablerestaurantrese
    handleGetAvailableRestaurantReservationBookingDefaults_completion(intent: INGetAvailableRestaurantReservationBookingDefaultsIntent, completion: INGetAvailableRestaurantReservationBookingDefaultsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to start audio and video calls.
   * https://developer.apple.com/documentation/sirikit/instartcallintenthandling
   */
  interface INStartCallIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/instartcallintenthandling/3165949-resolvecallcapabilityforstartcal
    resolveCallCapabilityForStartCall_withCompletion(intent: INStartCallIntent, completion: INStartCallCallCapabilityResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartcallintenthandling/3165950-resolvecontactsforstartcall
    resolveContactsForStartCall_withCompletion(intent: INStartCallIntent, completion: INStartCallContactResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartcallintenthandling/3165951-resolvedestinationtypeforstartca
    resolveDestinationTypeForStartCall_withCompletion(intent: INStartCallIntent, completion: INCallDestinationTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartcallintenthandling/3649678-resolvecallrecordtocallbackforst
    resolveCallRecordToCallBackForStartCall_withCompletion(intent: INStartCallIntent, completion: INCallRecordResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartcallintenthandling/3165947-confirmstartcall
    confirmStartCall_completion(intent: INStartCallIntent, completion: INStartCallIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/instartcallintenthandling/3165948-handlestartcall
    handleStartCall_completion(intent: INStartCallIntent, completion: INStartCallIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for hiding portions of the default interfaces that Siri provides.
   * https://developer.apple.com/documentation/sirikit/inuihostedviewsiriproviding
   */
  interface INUIHostedViewSiriProviding extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inuihostedviewsiriproviding/1649161-displaysmap
    displaysMap(): BOOL;
    setDisplaysMap(): void;
    // https://developer.apple.com/documentation/sirikit/inuihostedviewsiriproviding/1649151-displaysmessage
    displaysMessage(): BOOL;
    setDisplaysMessage(): void;
    // https://developer.apple.com/documentation/sirikit/inuihostedviewsiriproviding/2279035-displayspaymenttransaction
    displaysPaymentTransaction(): BOOL;
    setDisplaysPaymentTransaction(): void;
  }
}
declare namespace cocoascript {
  /**
   * Pronunciation hints for strings used in a spoken interface.
   * https://developer.apple.com/documentation/sirikit/inspeakable
   */
  interface INSpeakable extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inspeakable/2092306-spokenphrase
    spokenPhrase(): string | cocoascript.NSString;
    setSpokenPhrase(): void;
    // https://developer.apple.com/documentation/sirikit/inspeakable/2092309-pronunciationhint
    pronunciationHint(): string | cocoascript.NSString;
    setPronunciationHint(): void;
    // https://developer.apple.com/documentation/sirikit/inspeakable/2873318-vocabularyidentifier
    vocabularyIdentifier(): string | cocoascript.NSString;
    setVocabularyIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inspeakable/2092308-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inspeakable/2873673-alternativespeakablematches
    alternativeSpeakableMatches(): INSpeakable;
    setAlternativeSpeakableMatches(): void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for initiating an audio call from your app.
   * https://developer.apple.com/documentation/sirikit/instartaudiocallintenthandling
   */
  interface INStartAudioCallIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintenthandling/1902341-resolvecontactsforstartaudiocall
    resolveContactsForStartAudioCall_withCompletion(intent: INStartAudioCallIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintenthandling/2873772-resolvedestinationtypeforstartau
    resolveDestinationTypeForStartAudioCall_withCompletion(intent: INStartAudioCallIntent, completion: INCallDestinationTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintenthandling/1638634-confirmstartaudiocall
    confirmStartAudioCall_completion(intent: INStartAudioCallIntent, completion: INStartAudioCallIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintenthandling/1639088-handlestartaudiocall
    handleStartAudioCall_completion(intent: INStartAudioCallIntent, completion: INStartAudioCallIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s climate control settings.
   * https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling
   */
  interface INSetClimateSettingsInCarIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905635-resolveenablefanforsetclimateset
    resolveEnableFanForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905614-resolveenableairconditionerforse
    resolveEnableAirConditionerForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905609-resolveenableclimatecontrolforse
    resolveEnableClimateControlForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905617-resolveenableautomodeforsetclima
    resolveEnableAutoModeForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905621-resolveaircirculationmodeforsetc
    resolveAirCirculationModeForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INCarAirCirculationModeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905633-resolvefanspeedindexforsetclimat
    resolveFanSpeedIndexForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905607-resolvefanspeedpercentageforsetc
    resolveFanSpeedPercentageForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INDoubleResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905619-resolverelativefanspeedsettingfo
    resolveRelativeFanSpeedSettingForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INRelativeSettingResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905630-resolvetemperatureforsetclimates
    resolveTemperatureForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INTemperatureResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1905623-resolverelativetemperaturesettin
    resolveRelativeTemperatureSettingForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INRelativeSettingResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/2102613-resolveclimatezoneforsetclimates
    resolveClimateZoneForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INCarSeatResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/3019570-resolvecarnameforsetclimatesetti
    resolveCarNameForSetClimateSettingsInCar_withCompletion(intent: INSetClimateSettingsInCarIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1649053-confirmsetclimatesettingsincar
    confirmSetClimateSettingsInCar_completion(intent: INSetClimateSettingsInCarIntent, completion: INSetClimateSettingsInCarIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintenthandling/1649065-handlesetclimatesettingsincar
    handleSetClimateSettingsInCar_completion(intent: INSetClimateSettingsInCarIntent, completion: INSetClimateSettingsInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for displaying your app’s visual codes.
   * https://developer.apple.com/documentation/sirikit/ingetvisualcodeintenthandling
   */
  interface INGetVisualCodeIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintenthandling/2873903-resolvevisualcodetypeforgetvisua
    resolveVisualCodeTypeForGetVisualCode_withCompletion(intent: INGetVisualCodeIntent, completion: INVisualCodeTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintenthandling/2873902-confirmgetvisualcode
    confirmGetVisualCode_completion(intent: INGetVisualCodeIntent, completion: INGetVisualCodeIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintenthandling/2873897-handlegetvisualcode
    handleGetVisualCode_completion(intent: INGetVisualCodeIntent, completion: INGetVisualCodeIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching for bills associated with the user.
   * https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling
   */
  interface INSearchForBillsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798972-resolvebillpayeeforsearchforbill
    resolveBillPayeeForSearchForBills_withCompletion(intent: INSearchForBillsIntent, completion: INBillPayeeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798982-resolvebilltypeforsearchforbills
    resolveBillTypeForSearchForBills_withCompletion(intent: INSearchForBillsIntent, completion: INBillTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798978-resolveduedaterangeforsearchforb
    resolveDueDateRangeForSearchForBills_withCompletion(intent: INSearchForBillsIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798979-resolvepaymentdaterangeforsearch
    resolvePaymentDateRangeForSearchForBills_withCompletion(intent: INSearchForBillsIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798981-resolvestatusforsearchforbills
    resolveStatusForSearchForBills_withCompletion(intent: INSearchForBillsIntent, completion: INPaymentStatusResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798977-confirmsearchforbills
    confirmSearchForBills_completion(intent: INSearchForBillsIntent, completion: INSearchForBillsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintenthandling/2798973-handlesearchforbills
    handleSearchForBills_completion(intent: INSearchForBillsIntent, completion: INSearchForBillsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for delivering a request for payment from another user of your app.
   * https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling
   */
  interface INRequestPaymentIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1638225-resolvepayerforrequestpayment
    resolvePayerForRequestPayment_completion(intent: INRequestPaymentIntent, completion: INRequestPaymentPayerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1638148-resolvecurrencyamountforrequestp
    resolveCurrencyAmountForRequestPayment_completion(intent: INRequestPaymentIntent, completion: INRequestPaymentCurrencyAmountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1902486-resolvenoteforrequestpayment
    resolveNoteForRequestPayment_withCompletion(intent: INRequestPaymentIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1902484-resolvepayerforrequestpayment
    resolvePayerForRequestPayment_withCompletion(intent: INRequestPaymentIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1902487-resolvecurrencyamountforrequestp
    resolveCurrencyAmountForRequestPayment_withCompletion(intent: INRequestPaymentIntent, completion: INCurrencyAmountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1638330-confirmrequestpayment
    confirmRequestPayment_completion(intent: INRequestPaymentIntent, completion: INRequestPaymentIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintenthandling/1638420-handlerequestpayment
    handleRequestPayment_completion(intent: INRequestPaymentIntent, completion: INRequestPaymentIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a radio station.
   * https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling
   */
  interface INSetRadioStationIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1906895-resolveradiotypeforsetradiostati
    resolveRadioTypeForSetRadioStation_withCompletion(intent: INSetRadioStationIntent, completion: INRadioTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1906892-resolvefrequencyforsetradiostati
    resolveFrequencyForSetRadioStation_withCompletion(intent: INSetRadioStationIntent, completion: INDoubleResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1906896-resolvestationnameforsetradiosta
    resolveStationNameForSetRadioStation_withCompletion(intent: INSetRadioStationIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1906894-resolvechannelforsetradiostation
    resolveChannelForSetRadioStation_withCompletion(intent: INSetRadioStationIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1906893-resolvepresetnumberforsetradiost
    resolvePresetNumberForSetRadioStation_withCompletion(intent: INSetRadioStationIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1649479-confirmsetradiostation
    confirmSetRadioStation_completion(intent: INSetRadioStationIntent, completion: INSetRadioStationIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintenthandling/1649474-handlesetradiostation
    handleSetRadioStation_completion(intent: INSetRadioStationIntent, completion: INSetRadioStationIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to start a workout.
   * https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling
   */
  interface INStartWorkoutIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1902501-resolveworkoutnameforstartworkou
    resolveWorkoutNameForStartWorkout_withCompletion(intent: INStartWorkoutIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1902504-resolvegoalvalueforstartworkout
    resolveGoalValueForStartWorkout_withCompletion(intent: INStartWorkoutIntent, completion: INDoubleResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1902503-resolveworkoutgoalunittypeforsta
    resolveWorkoutGoalUnitTypeForStartWorkout_withCompletion(intent: INStartWorkoutIntent, completion: INWorkoutGoalUnitTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1902505-resolveworkoutlocationtypeforsta
    resolveWorkoutLocationTypeForStartWorkout_withCompletion(intent: INStartWorkoutIntent, completion: INWorkoutLocationTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1902502-resolveisopenendedforstartworkou
    resolveIsOpenEndedForStartWorkout_withCompletion(intent: INStartWorkoutIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1639089-confirmstartworkout
    confirmStartWorkout_completion(intent: INStartWorkoutIntent, completion: INStartWorkoutIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintenthandling/1638639-handlestartworkout
    handleStartWorkout_completion(intent: INStartWorkoutIntent, completion: INStartWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for initiating a video call from your app.
   * https://developer.apple.com/documentation/sirikit/instartvideocallintenthandling
   */
  interface INStartVideoCallIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/instartvideocallintenthandling/1902444-resolvecontactsforstartvideocall
    resolveContactsForStartVideoCall_withCompletion(intent: INStartVideoCallIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartvideocallintenthandling/1639163-confirmstartvideocall
    confirmStartVideoCall_completion(intent: INStartVideoCallIntent, completion: INStartVideoCallIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/instartvideocallintenthandling/1639069-handlestartvideocall
    handleStartVideoCall_completion(intent: INStartVideoCallIntent, completion: INStartVideoCallIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the view controller adding a shortcut to Siri.
   * https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate
   */
  interface INUIAddVoiceShortcutViewControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate/2968470-addvoiceshortcutviewcontroller
    addVoiceShortcutViewController_didFinishWithVoiceShortcut_error(controller: INUIAddVoiceShortcutViewController, voiceShortcut: INVoiceShortcut, error: NSError):void;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutviewcontrollerdelegate/2968471-addvoiceshortcutviewcontrollerdi
    addVoiceShortcutViewControllerDidCancel(controller: INUIAddVoiceShortcutViewController):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting to activate the car’s signals.
   * https://developer.apple.com/documentation/sirikit/inactivatecarsignalintenthandling
   */
  interface INActivateCarSignalIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintenthandling/2799256-resolvecarnameforactivatecarsign
    resolveCarNameForActivateCarSignal_withCompletion(intent: INActivateCarSignalIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintenthandling/2799254-resolvesignalsforactivatecarsign
    resolveSignalsForActivateCarSignal_withCompletion(intent: INActivateCarSignalIntent, completion: INCarSignalOptionsResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintenthandling/2799259-confirmactivatecarsignal
    confirmActivateCarSignal_completion(intent: INActivateCarSignalIntent, completion: INActivateCarSignalIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintenthandling/2799253-handleactivatecarsignal
    handleActivateCarSignal_completion(intent: INActivateCarSignalIntent, completion: INActivateCarSignalIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s photos.
   * https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling
   */
  interface INSearchForPhotosIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1902404-resolvedatecreatedforsearchforph
    resolveDateCreatedForSearchForPhotos_withCompletion(intent: INSearchForPhotosIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1902403-resolvelocationcreatedforsearchf
    resolveLocationCreatedForSearchForPhotos_withCompletion(intent: INSearchForPhotosIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1902402-resolvepeopleinphotoforsearchfor
    resolvePeopleInPhotoForSearchForPhotos_withCompletion(intent: INSearchForPhotosIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1902399-resolvealbumnameforsearchforphot
    resolveAlbumNameForSearchForPhotos_withCompletion(intent: INSearchForPhotosIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1902398-resolvesearchtermsforsearchforph
    resolveSearchTermsForSearchForPhotos_withCompletion(intent: INSearchForPhotosIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1638989-confirmsearchforphotos
    confirmSearchForPhotos_completion(intent: INSearchForPhotosIntent, completion: INSearchForPhotosIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintenthandling/1638466-handlesearchforphotos
    handleSearchForPhotos_completion(intent: INSearchForPhotosIntent, completion: INSearchForPhotosIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface for providing updated status for an active ride.
   * https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponseobserver
   */
  interface INGetRideStatusIntentResponseObserver extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponseobserver/1639309-getridestatusresponsedidupdate
    getRideStatusResponseDidUpdate(response: INGetRideStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for canceling a previously booked ride.
   * https://developer.apple.com/documentation/sirikit/incancelrideintenthandling
   */
  interface INCancelRideIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incancelrideintenthandling/2875585-confirmcancelride
    confirmCancelRide_completion(intent: INCancelRideIntent, completion: INCancelRideIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/incancelrideintenthandling/2875587-handlecancelride
    handleCancelRide_completion(intent: INCancelRideIntent, completion: INCancelRideIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting to lock or unlock a car.
   * https://developer.apple.com/documentation/sirikit/insetcarlockstatusintenthandling
   */
  interface INSetCarLockStatusIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintenthandling/2799287-resolvecarnameforsetcarlockstatu
    resolveCarNameForSetCarLockStatus_withCompletion(intent: INSetCarLockStatusIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintenthandling/2799281-resolvelockedforsetcarlockstatus
    resolveLockedForSetCarLockStatus_withCompletion(intent: INSetCarLockStatusIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintenthandling/2799284-confirmsetcarlockstatus
    confirmSetCarLockStatus_completion(intent: INSetCarLockStatusIntent, completion: INSetCarLockStatusIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintenthandling/2799286-handlesetcarlockstatus
    handleSetCarLockStatus_completion(intent: INSetCarLockStatusIntent, completion: INSetCarLockStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles media search requests.
   * https://developer.apple.com/documentation/sirikit/insearchformediaintenthandling
   */
  interface INSearchForMediaIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchformediaintenthandling/3180154-resolvemediaitemsforsearchformed
    resolveMediaItemsForSearchForMedia_withCompletion(intent: INSearchForMediaIntent, completion: INSearchForMediaMediaItemResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformediaintenthandling/3074297-confirmsearchformedia
    confirmSearchForMedia_completion(intent: INSearchForMediaIntent, completion: INSearchForMediaIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchformediaintenthandling/3074298-handlesearchformedia
    handleSearchForMedia_completion(intent: INSearchForMediaIntent, completion: INSearchForMediaIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting a car’s current power level.
   * https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintenthandling
   */
  interface INGetCarPowerLevelStatusIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799247-resolvecarnameforgetcarpowerleve
    resolveCarNameForGetCarPowerLevelStatus_withCompletion(intent: INGetCarPowerLevelStatusIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799244-confirmgetcarpowerlevelstatus
    confirmGetCarPowerLevelStatus_completion(intent: INGetCarPowerLevelStatusIntent, completion: INGetCarPowerLevelStatusIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/2799241-handlegetcarpowerlevelstatus
    handleGetCarPowerLevelStatus_completion(intent: INGetCarPowerLevelStatusIntent, completion: INGetCarPowerLevelStatusIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/3552166-startsendingupdatesforgetcarpowe
    startSendingUpdatesForGetCarPowerLevelStatus_toObserver(intent: INGetCarPowerLevelStatusIntent, observer: INGetCarPowerLevelStatusIntentResponseObserver):void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintenthandling/3552167-stopsendingupdatesforgetcarpower
    stopSendingUpdatesForGetCarPowerLevelStatus(intent: INGetCarPowerLevelStatusIntent):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the view controller that edits or removes a shortcut in Siri.
   * https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate
   */
  interface INUIEditVoiceShortcutViewControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968477-editvoiceshortcutviewcontroller
    editVoiceShortcutViewController_didUpdateVoiceShortcut_error(controller: INUIEditVoiceShortcutViewController, voiceShortcut: INVoiceShortcut, error: NSError):void;
    // https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968476-editvoiceshortcutviewcontroller
    editVoiceShortcutViewController_didDeleteVoiceShortcutWithIdentifier(controller: INUIEditVoiceShortcutViewController, deletedVoiceShortcutIdentifier: NSUUID):void;
    // https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontrollerdelegate/2968478-editvoiceshortcutviewcontrollerd
    editVoiceShortcutViewControllerDidCancel(controller: INUIEditVoiceShortcutViewController):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching information about the person making a reservation.
   * https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintenthandling
   */
  interface INGetRestaurantGuestIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintenthandling/1845238-confirmgetrestaurantguest
    confirmGetRestaurantGuest_completion(guestIntent: INGetRestaurantGuestIntent, completion: INGetRestaurantGuestIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintenthandling/1778395-handlegetrestaurantguest
    handleGetRestaurantGuest_completion(intent: INGetRestaurantGuestIntent, completion: INGetRestaurantGuestIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching for account information.
   * https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling
   */
  interface INSearchForAccountsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling/2867913-resolveaccountnicknameforsearchf
    resolveAccountNicknameForSearchForAccounts_withCompletion(intent: INSearchForAccountsIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling/2867911-resolveaccounttypeforsearchforac
    resolveAccountTypeForSearchForAccounts_withCompletion(intent: INSearchForAccountsIntent, completion: INAccountTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling/2867920-resolveorganizationnameforsearch
    resolveOrganizationNameForSearchForAccounts_withCompletion(intent: INSearchForAccountsIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling/2867915-resolverequestedbalancetypeforse
    resolveRequestedBalanceTypeForSearchForAccounts_withCompletion(intent: INSearchForAccountsIntent, completion: INBalanceTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling/2867908-confirmsearchforaccounts
    confirmSearchForAccounts_completion(intent: INSearchForAccountsIntent, completion: INSearchForAccountsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintenthandling/2867909-handlesearchforaccounts
    handleSearchForAccounts_completion(intent: INSearchForAccountsIntent, completion: INSearchForAccountsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for providing updates of a vehicle’s power level.
   * https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponseobserver
   */
  interface INGetCarPowerLevelStatusIntentResponseObserver extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponseobserver/3552169-getcarpowerlevelstatusresponsedi
    getCarPowerLevelStatusResponseDidUpdate(response: INGetCarPowerLevelStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for restoring vehicle environment settings from a user-specified profile.
   * https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling
   */
  interface INSetProfileInCarIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling/2102251-resolveprofilenumberforsetprofil
    resolveProfileNumberForSetProfileInCar_withCompletion(intent: INSetProfileInCarIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling/2726870-resolveprofilenameforsetprofilei
    resolveProfileNameForSetProfileInCar_withCompletion(intent: INSetProfileInCarIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling/3019576-resolvecarnameforsetprofileincar
    resolveCarNameForSetProfileInCar_withCompletion(intent: INSetProfileInCarIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling/2102247-resolvedefaultprofileforsetprofi
    resolveDefaultProfileForSetProfileInCar_withCompletion(intent: INSetProfileInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling/2102249-confirmsetprofileincar
    confirmSetProfileInCar_completion(intent: INSetProfileInCarIntent, completion: INSetProfileInCarIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintenthandling/2102246-handlesetprofileincar
    handleSetProfileInCar_completion(intent: INSetProfileInCarIntent, completion: INSetProfileInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for presenting custom content in the Siri and Maps interfaces.
   * https://developer.apple.com/documentation/sirikit/inuihostedviewcontrolling
   */
  interface INUIHostedViewControlling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inuihostedviewcontrolling/2915897-configureviewforparameters
    configureViewForParameters_ofInteraction_interactiveBehavior_context_completion(parameters: INParameter, interaction: INInteraction, interactiveBehavior: INUIInteractiveBehavior, context: INUIHostedViewContext, completion: CGSize):void;
    // https://developer.apple.com/documentation/sirikit/inuihostedviewcontrolling/1649168-configurewithinteraction
    configureWithInteraction_context_completion(interaction: INInteraction, context: INUIHostedViewContext, completion: CGSize):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching the status of the user’s current ride.
   * https://developer.apple.com/documentation/sirikit/ingetridestatusintenthandling
   */
  interface INGetRideStatusIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintenthandling/1649849-confirmgetridestatus
    confirmGetRideStatus_completion(intent: INGetRideStatusIntent, completion: INGetRideStatusIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintenthandling/1649848-handlegetridestatus
    handleGetRideStatus_completion(intent: INGetRideStatusIntent, completion: INGetRideStatusIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintenthandling/1649845-startsendingupdatesforgetridesta
    startSendingUpdatesForGetRideStatus_toObserver(intent: INGetRideStatusIntent, observer: INGetRideStatusIntentResponseObserver):void;
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintenthandling/1649844-stopsendingupdatesforgetridestat
    stopSendingUpdatesForGetRideStatus(intent: INGetRideStatusIntent):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching for notes, tasks, and reminders.
   * https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling
   */
  interface INSearchForNotebookItemsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875695-resolveitemtypeforsearchfornoteb
    resolveItemTypeForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INNotebookItemTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875660-resolvetitleforsearchfornotebook
    resolveTitleForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875692-resolvecontentforsearchfornotebo
    resolveContentForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875583-resolvestatusforsearchfornoteboo
    resolveStatusForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INTaskStatusResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875597-resolvedatesearchtypeforsearchfo
    resolveDateSearchTypeForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INDateSearchTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875698-resolvedatetimeforsearchfornoteb
    resolveDateTimeForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875630-resolvelocationforsearchfornoteb
    resolveLocationForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875637-resolvelocationsearchtypeforsear
    resolveLocationSearchTypeForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INLocationSearchTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/3141832-resolvetaskpriorityforsearchforn
    resolveTaskPriorityForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INTaskPriorityResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/3141833-resolvetemporaleventtriggertypes
    resolveTemporalEventTriggerTypesForSearchForNotebookItems_withCompletion(intent: INSearchForNotebookItemsIntent, completion: INTemporalEventTriggerTypeOptionsResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875580-confirmsearchfornotebookitems
    confirmSearchForNotebookItems_completion(intent: INSearchForNotebookItemsIntent, completion: INSearchForNotebookItemsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintenthandling/2875649-handlesearchfornotebookitems
    handleSearchForNotebookItems_completion(intent: INSearchForNotebookItemsIntent, completion: INSearchForNotebookItemsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for fetching the list of rides currently available from your ride-booking service.
   * https://developer.apple.com/documentation/sirikit/inlistrideoptionsintenthandling
   */
  interface INListRideOptionsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintenthandling/1902396-resolvepickuplocationforlistride
    resolvePickupLocationForListRideOptions_withCompletion(intent: INListRideOptionsIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintenthandling/1902395-resolvedropofflocationforlistrid
    resolveDropOffLocationForListRideOptions_withCompletion(intent: INListRideOptionsIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintenthandling/1648128-confirmlistrideoptions
    confirmListRideOptions_completion(intent: INListRideOptionsIntent, completion: INListRideOptionsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintenthandling/1648129-handlelistrideoptions
    handleListRideOptions_completion(intent: INListRideOptionsIntent, completion: INListRideOptionsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles requests to cancel a workout.
   * https://developer.apple.com/documentation/sirikit/incancelworkoutintenthandling
   */
  interface INCancelWorkoutIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintenthandling/1902365-resolveworkoutnameforcancelworko
    resolveWorkoutNameForCancelWorkout_withCompletion(intent: INCancelWorkoutIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintenthandling/1639032-confirmcancelworkout
    confirmCancelWorkout_completion(intent: INCancelWorkoutIntent, completion: INCancelWorkoutIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintenthandling/1638479-handlecancelworkout
    handleCancelWorkout_completion(intent: INCancelWorkoutIntent, completion: INCancelWorkoutIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting a list of the user’s electric vehicles.
   * https://developer.apple.com/documentation/sirikit/inlistcarsintenthandling
   */
  interface INListCarsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inlistcarsintenthandling/3552191-confirmlistcars
    confirmListCars_completion(intent: INListCarsIntent, completion: INListCarsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inlistcarsintenthandling/3552192-handlelistcars
    handleListCars_completion(intent: INListCarsIntent, completion: INListCarsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for creating task lists.
   * https://developer.apple.com/documentation/sirikit/increatetasklistintenthandling
   */
  interface INCreateTaskListIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/increatetasklistintenthandling/2873993-resolvetitleforcreatetasklist
    resolveTitleForCreateTaskList_withCompletion(intent: INCreateTaskListIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintenthandling/2873991-resolvetasktitlesforcreatetaskli
    resolveTaskTitlesForCreateTaskList_withCompletion(intent: INCreateTaskListIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintenthandling/2873989-resolvegroupnameforcreatetasklis
    resolveGroupNameForCreateTaskList_withCompletion(intent: INCreateTaskListIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintenthandling/2873990-confirmcreatetasklist
    confirmCreateTaskList_completion(intent: INCreateTaskListIntent, completion: INCreateTaskListIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintenthandling/2873996-handlecreatetasklist
    handleCreateTaskList_completion(intent: INCreateTaskListIntent, completion: INCreateTaskListIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for sending ride feedback to your service.
   * https://developer.apple.com/documentation/sirikit/insendridefeedbackintenthandling
   */
  interface INSendRideFeedbackIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintenthandling/2875665-confirmsendridefeedback
    confirmSendRideFeedback_completion(sendRideFeedbackIntent: INSendRideFeedbackIntent, completion: INSendRideFeedbackIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintenthandling/2875582-handlesendridefeedback
    handleSendRideFeedback_completion(sendRideFeedbackintent: INSendRideFeedbackIntent, completion: INSendRideFeedbackIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface to handle sending messages to one or more designated users.
   * https://developer.apple.com/documentation/sirikit/insendmessageintenthandling
   */
  interface INSendMessageIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/1638459-resolverecipientsforsendmessage
    resolveRecipientsForSendMessage_completion(intent: INSendMessageIntent, completion: INSendMessageRecipientResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/3552233-resolveoutgoingmessagetypeforsen
    resolveOutgoingMessageTypeForSendMessage_withCompletion(intent: INSendMessageIntent, completion: INOutgoingMessageTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/1902359-resolvecontentforsendmessage
    resolveContentForSendMessage_withCompletion(intent: INSendMessageIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/2866588-resolvespeakablegroupnameforsend
    resolveSpeakableGroupNameForSendMessage_withCompletion(intent: INSendMessageIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/1639459-confirmsendmessage
    confirmSendMessage_completion(intent: INSendMessageIntent, completion: INSendMessageIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/1639338-handlesendmessage
    handleSendMessage_completion(intent: INSendMessageIntent, completion: INSendMessageIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/1902356-resolverecipientsforsendmessage
    resolveRecipientsForSendMessage_withCompletion(intent: INSendMessageIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintenthandling/1902358-resolvegroupnameforsendmessage
    resolveGroupNameForSendMessage_withCompletion(intent: INSendMessageIntent, completion: INStringResolutionResult):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s photos and the playback of the results.
   * https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling
   */
  interface INStartPhotoPlaybackIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling/1906888-resolvedatecreatedforstartphotop
    resolveDateCreatedForStartPhotoPlayback_withCompletion(intent: INStartPhotoPlaybackIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling/1906891-resolvelocationcreatedforstartph
    resolveLocationCreatedForStartPhotoPlayback_withCompletion(intent: INStartPhotoPlaybackIntent, completion: INPlacemarkResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling/1906887-resolvepeopleinphotoforstartphot
    resolvePeopleInPhotoForStartPhotoPlayback_withCompletion(intent: INStartPhotoPlaybackIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling/1906885-resolvealbumnameforstartphotopla
    resolveAlbumNameForStartPhotoPlayback_withCompletion(intent: INStartPhotoPlaybackIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling/1638847-confirmstartphotoplayback
    confirmStartPhotoPlayback_completion(intent: INStartPhotoPlaybackIntent, completion: INStartPhotoPlaybackIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintenthandling/1638162-handlestartphotoplayback
    handleStartPhotoPlayback_completion(intent: INStartPhotoPlaybackIntent, completion: INStartPhotoPlaybackIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface booking a reservation that the user selected.
   * https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling
   */
  interface INBookRestaurantReservationIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/1845261-resolverestaurantforbookrestaura
    resolveRestaurantForBookRestaurantReservation_withCompletion(intent: INBookRestaurantReservationIntent, completion: INRestaurantResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/2305427-resolvebookingdatecomponentsforb
    resolveBookingDateComponentsForBookRestaurantReservation_withCompletion(intent: INBookRestaurantReservationIntent, completion: INDateComponentsResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/1845260-resolvepartysizeforbookrestauran
    resolvePartySizeForBookRestaurantReservation_withCompletion(intent: INBookRestaurantReservationIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/1845253-resolveguestforbookrestaurantres
    resolveGuestForBookRestaurantReservation_withCompletion(intent: INBookRestaurantReservationIntent, completion: INRestaurantGuestResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/1845245-resolveguestprovidedspecialreque
    resolveGuestProvidedSpecialRequestTextForBookRestaurantReservation_withCompletion(intent: INBookRestaurantReservationIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/1845255-confirmbookrestaurantreservation
    confirmBookRestaurantReservation_completion(intent: INBookRestaurantReservationIntent, completion: INBookRestaurantReservationIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintenthandling/1649560-handlebookrestaurantreservation
    handleBookRestaurantReservation_completion(intent: INBookRestaurantReservationIntent, completion: INBookRestaurantReservationIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for changing a vehicle’s seat-related settings.
   * https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling
   */
  interface INSetSeatSettingsInCarIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102624-resolveenablecoolingforsetseatse
    resolveEnableCoolingForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102628-resolveenableheatingforsetseatse
    resolveEnableHeatingForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102621-resolveenablemassageforsetseatse
    resolveEnableMassageForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102616-resolveseatforsetseatsettingsinc
    resolveSeatForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INCarSeatResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102623-resolvelevelforsetseatsettingsin
    resolveLevelForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102625-resolverelativelevelsettingforse
    resolveRelativeLevelSettingForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INRelativeSettingResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/3019579-resolvecarnameforsetseatsettings
    resolveCarNameForSetSeatSettingsInCar_withCompletion(intent: INSetSeatSettingsInCarIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102627-confirmsetseatsettingsincar
    confirmSetSeatSettingsInCar_completion(intent: INSetSeatSettingsInCarIntent, completion: INSetSeatSettingsInCarIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintenthandling/2102615-handlesetseatsettingsincar
    handleSetSeatSettingsInCar_completion(intent: INSetSeatSettingsInCarIntent, completion: INSetSeatSettingsInCarIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An interface that handles requests to search the current user’s messages.
   * https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling
   */
  interface INSearchForMessagesIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1902441-resolverecipientsforsearchformes
    resolveRecipientsForSearchForMessages_withCompletion(intent: INSearchForMessagesIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1902439-resolvesendersforsearchformessag
    resolveSendersForSearchForMessages_withCompletion(intent: INSearchForMessagesIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1902440-resolveattributesforsearchformes
    resolveAttributesForSearchForMessages_withCompletion(intent: INSearchForMessagesIntent, completion: INMessageAttributeOptionsResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1902436-resolvedatetimerangeforsearchfor
    resolveDateTimeRangeForSearchForMessages_withCompletion(intent: INSearchForMessagesIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/2867285-resolvespeakablegroupnamesforsea
    resolveSpeakableGroupNamesForSearchForMessages_withCompletion(intent: INSearchForMessagesIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1902438-resolvegroupnamesforsearchformes
    resolveGroupNamesForSearchForMessages_withCompletion(intent: INSearchForMessagesIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1638410-confirmsearchformessages
    confirmSearchForMessages_completion(intent: INSearchForMessagesIntent, completion: INSearchForMessagesIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintenthandling/1638324-handlesearchformessages
    handleSearchForMessages_completion(intent: INSearchForMessagesIntent, completion: INSearchForMessagesIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * A set of methods an object implements to process intents that share the user’s focus status.
   * https://developer.apple.com/documentation/sirikit/insharefocusstatusintenthandling
   */
  interface INShareFocusStatusIntentHandling extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for paying a bill using money from the user’s account.
   * https://developer.apple.com/documentation/sirikit/inpaybillintenthandling
   */
  interface INPayBillIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799071-resolvebillpayeeforpaybill
    resolveBillPayeeForPayBill_withCompletion(intent: INPayBillIntent, completion: INBillPayeeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799065-resolvebilltypeforpaybill
    resolveBillTypeForPayBill_withCompletion(intent: INPayBillIntent, completion: INBillTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799069-resolvefromaccountforpaybill
    resolveFromAccountForPayBill_withCompletion(intent: INPayBillIntent, completion: INPaymentAccountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799076-resolvetransactionamountforpaybi
    resolveTransactionAmountForPayBill_withCompletion(intent: INPayBillIntent, completion: INPaymentAmountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799068-resolveduedateforpaybill
    resolveDueDateForPayBill_withCompletion(intent: INPayBillIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799074-resolvetransactionscheduleddatef
    resolveTransactionScheduledDateForPayBill_withCompletion(intent: INPayBillIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799078-resolvetransactionnoteforpaybill
    resolveTransactionNoteForPayBill_withCompletion(intent: INPayBillIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799070-confirmpaybill
    confirmPayBill_completion(intent: INPayBillIntent, completion: INPayBillIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintenthandling/2799072-handlepaybill
    handlePayBill_completion(intent: INPayBillIntent, completion: INPayBillIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface for dispatching intents to the custom objects that handle those intents.
   * https://developer.apple.com/documentation/sirikit/inintenthandlerproviding
   */
  interface INIntentHandlerProviding extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inintenthandlerproviding/1638898-handlerforintent
    handlerForIntent(intent: INIntent):INIntentHandlerProviding;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for updating the attributes of an existing task.
   * https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling
   */
  interface INSetTaskAttributeIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/2878118-resolvetargettaskforsettaskattri
    resolveTargetTaskForSetTaskAttribute_withCompletion(intent: INSetTaskAttributeIntent, completion: INTaskResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/2873560-resolvestatusforsettaskattribute
    resolveStatusForSetTaskAttribute_withCompletion(intent: INSetTaskAttributeIntent, completion: INTaskStatusResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/2873565-resolvespatialeventtriggerforset
    resolveSpatialEventTriggerForSetTaskAttribute_withCompletion(intent: INSetTaskAttributeIntent, completion: INSpatialEventTriggerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/3327010-resolvetemporaleventtriggerforse
    resolveTemporalEventTriggerForSetTaskAttribute_completion(intent: INSetTaskAttributeIntent, completion: INSetTaskAttributeTemporalEventTriggerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/3141837-resolvepriorityforsettaskattribu
    resolvePriorityForSetTaskAttribute_withCompletion(intent: INSetTaskAttributeIntent, completion: INTaskPriorityResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/3141838-resolvetasktitleforsettaskattrib
    resolveTaskTitleForSetTaskAttribute_withCompletion(intent: INSetTaskAttributeIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/2873568-resolvetemporaleventtriggerforse
    resolveTemporalEventTriggerForSetTaskAttribute_withCompletion(intent: INSetTaskAttributeIntent, completion: INTemporalEventTriggerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/2873562-confirmsettaskattribute
    confirmSetTaskAttribute_completion(intent: INSetTaskAttributeIntent, completion: INSetTaskAttributeIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintenthandling/2873564-handlesettaskattribute
    handleSetTaskAttribute_completion(intent: INSetTaskAttributeIntent, completion: INSetTaskAttributeIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for transferring money between accounts.
   * https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling
   */
  interface INTransferMoneyIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868064-resolvefromaccountfortransfermon
    resolveFromAccountForTransferMoney_withCompletion(intent: INTransferMoneyIntent, completion: INPaymentAccountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868069-resolvetoaccountfortransfermoney
    resolveToAccountForTransferMoney_withCompletion(intent: INTransferMoneyIntent, completion: INPaymentAccountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868055-resolvetransactionamountfortrans
    resolveTransactionAmountForTransferMoney_withCompletion(intent: INTransferMoneyIntent, completion: INPaymentAmountResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868070-resolvetransactionscheduleddatef
    resolveTransactionScheduledDateForTransferMoney_withCompletion(intent: INTransferMoneyIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868066-resolvetransactionnotefortransfe
    resolveTransactionNoteForTransferMoney_withCompletion(intent: INTransferMoneyIntent, completion: INStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868057-confirmtransfermoney
    confirmTransferMoney_completion(intent: INTransferMoneyIntent, completion: INTransferMoneyIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintenthandling/2868059-handletransfermoney
    handleTransferMoney_completion(intent: INTransferMoneyIntent, completion: INTransferMoneyIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for adding tasks to a task list.
   * https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling
   */
  interface INAddTasksIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/3131041-resolvetargettasklistforaddtasks
    resolveTargetTaskListForAddTasks_completion(intent: INAddTasksIntent, completion: INAddTasksTargetTaskListResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/2874166-resolvetasktitlesforaddtasks
    resolveTaskTitlesForAddTasks_withCompletion(intent: INAddTasksIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/2874168-resolvespatialeventtriggerforadd
    resolveSpatialEventTriggerForAddTasks_withCompletion(intent: INAddTasksIntent, completion: INSpatialEventTriggerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/3327000-resolvetemporaleventtriggerforad
    resolveTemporalEventTriggerForAddTasks_completion(intent: INAddTasksIntent, completion: INAddTasksTemporalEventTriggerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/3227906-resolvepriorityforaddtasks
    resolvePriorityForAddTasks_withCompletion(intent: INAddTasksIntent, completion: INTaskPriorityResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/2878113-resolvetargettasklistforaddtasks
    resolveTargetTaskListForAddTasks_withCompletion(intent: INAddTasksIntent, completion: INTaskListResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/2874164-resolvetemporaleventtriggerforad
    resolveTemporalEventTriggerForAddTasks_withCompletion(intent: INAddTasksIntent, completion: INTemporalEventTriggerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/2874165-confirmaddtasks
    confirmAddTasks_completion(intent: INAddTasksIntent, completion: INAddTasksIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintenthandling/2874162-handleaddtasks
    handleAddTasks_completion(intent: INAddTasksIntent, completion: INAddTasksIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for searching the user’s call history.
   * https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling
   */
  interface INSearchCallHistoryIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/2866198-resolvecalltypesforsearchcallhis
    resolveCallTypesForSearchCallHistory_withCompletion(intent: INSearchCallHistoryIntent, completion: INCallRecordTypeOptionsResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/1902447-resolvecalltypeforsearchcallhist
    resolveCallTypeForSearchCallHistory_withCompletion(intent: INSearchCallHistoryIntent, completion: INCallRecordTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/1902450-resolverecipientforsearchcallhis
    resolveRecipientForSearchCallHistory_withCompletion(intent: INSearchCallHistoryIntent, completion: INPersonResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/1902448-resolvedatecreatedforsearchcallh
    resolveDateCreatedForSearchCallHistory_withCompletion(intent: INSearchCallHistoryIntent, completion: INDateComponentsRangeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/2879131-resolveunseenforsearchcallhistor
    resolveUnseenForSearchCallHistory_withCompletion(intent: INSearchCallHistoryIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/1639070-confirmsearchcallhistory
    confirmSearchCallHistory_completion(intent: INSearchCallHistoryIntent, completion: INSearchCallHistoryIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintenthandling/1638471-handlesearchcallhistory
    handleSearchCallHistory_completion(intent: INSearchCallHistoryIntent, completion: INSearchCallHistoryIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The protocol an object implements to receive notifications from the Siri Shortcut button.
   * https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate
   */
  interface INUIAddVoiceShortcutButtonDelegate extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate/3024517-presentaddvoiceshortcutviewcontr
    presentAddVoiceShortcutViewController_forAddVoiceShortcutButton(addVoiceShortcutViewController: INUIAddVoiceShortcutViewController, addVoiceShortcutButton: INUIAddVoiceShortcutButton):void;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbuttondelegate/3024518-presenteditvoiceshortcutviewcont
    presentEditVoiceShortcutViewController_forAddVoiceShortcutButton(editVoiceShortcutViewController: INUIEditVoiceShortcutViewController, addVoiceShortcutButton: INUIAddVoiceShortcutButton):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface that adds media.
   * https://developer.apple.com/documentation/sirikit/inaddmediaintenthandling
   */
  interface INAddMediaIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inaddmediaintenthandling/3074192-resolvemediadestinationforaddmed
    resolveMediaDestinationForAddMedia_withCompletion(intent: INAddMediaIntent, completion: INAddMediaMediaDestinationResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintenthandling/3074193-resolvemediaitemsforaddmedia
    resolveMediaItemsForAddMedia_withCompletion(intent: INAddMediaIntent, completion: INAddMediaMediaItemResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintenthandling/3074190-confirmaddmedia
    confirmAddMedia_completion(intent: INAddMediaIntent, completion: INAddMediaIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintenthandling/3074191-handleaddmedia
    handleAddMedia_completion(intent: INAddMediaIntent, completion: INAddMediaIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface an object implements to confirm and handle play media intents.
   * https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling
   */
  interface INPlayMediaIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/3074275-resolvemediaitemsforplaymedia
    resolveMediaItemsForPlayMedia_withCompletion(intent: INPlayMediaIntent, completion: INPlayMediaMediaItemResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/3074276-resolveplayshuffledforplaymedia
    resolvePlayShuffledForPlayMedia_withCompletion(intent: INPlayMediaIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/3074277-resolveplaybackqueuelocationforp
    resolvePlaybackQueueLocationForPlayMedia_withCompletion(intent: INPlayMediaIntent, completion: INPlaybackQueueLocationResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/3074278-resolveplaybackrepeatmodeforplay
    resolvePlaybackRepeatModeForPlayMedia_withCompletion(intent: INPlayMediaIntent, completion: INPlaybackRepeatModeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/3180131-resolveplaybackspeedforplaymedia
    resolvePlaybackSpeedForPlayMedia_withCompletion(intent: INPlayMediaIntent, completion: INPlayMediaPlaybackSpeedResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/3074279-resolveresumeplaybackforplaymedi
    resolveResumePlaybackForPlayMedia_withCompletion(intent: INPlayMediaIntent, completion: INBooleanResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/2963020-confirmplaymedia
    confirmPlayMedia_completion(intent: INPlayMediaIntent, completion: INPlayMediaIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintenthandling/2963021-handleplaymedia
    handlePlayMedia_completion(intent: INPlayMediaIntent, completion: INPlayMediaIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for generating a list of potential reservation times from which the user can select.
   * https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling
   */
  interface INGetAvailableRestaurantReservationBookingsIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845244-resolverestaurantforgetavailable
    resolveRestaurantForGetAvailableRestaurantReservationBookings_withCompletion(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: INRestaurantResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845252-resolvepartysizeforgetavailabler
    resolvePartySizeForGetAvailableRestaurantReservationBookings_withCompletion(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: INIntegerResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/2305422-resolvepreferredbookingdatecompo
    resolvePreferredBookingDateComponentsForGetAvailableRestaurantReservationBookings_withCompletion(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: INDateComponentsResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1845258-confirmgetavailablerestaurantres
    confirmGetAvailableRestaurantReservationBookings_completion(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: INGetAvailableRestaurantReservationBookingsIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintenthandling/1648716-handlegetavailablerestaurantrese
    handleGetAvailableRestaurantReservationBookings_completion(intent: INGetAvailableRestaurantReservationBookingsIntent, completion: INGetAvailableRestaurantReservationBookingsIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The interface that handles requests to update the user’s preference for a media item.
   * https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintenthandling
   */
  interface INUpdateMediaAffinityIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintenthandling/3074320-resolveaffinitytypeforupdatemedi
    resolveAffinityTypeForUpdateMediaAffinity_withCompletion(intent: INUpdateMediaAffinityIntent, completion: INMediaAffinityTypeResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintenthandling/3074321-resolvemediaitemsforupdatemediaa
    resolveMediaItemsForUpdateMediaAffinity_withCompletion(intent: INUpdateMediaAffinityIntent, completion: INUpdateMediaAffinityMediaItemResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintenthandling/3074318-confirmupdatemediaaffinity
    confirmUpdateMediaAffinity_completion(intent: INUpdateMediaAffinityIntent, completion: INUpdateMediaAffinityIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintenthandling/3074319-handleupdatemediaaffinity
    handleUpdateMediaAffinity_completion(intent: INUpdateMediaAffinityIntent, completion: INUpdateMediaAffinityIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * The handler interface for requesting the current status of the car’s locks.
   * https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintenthandling
   */
  interface INGetCarLockStatusIntentHandling extends NSObject {
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintenthandling/2799270-resolvecarnameforgetcarlockstatu
    resolveCarNameForGetCarLockStatus_withCompletion(intent: INGetCarLockStatusIntent, completion: INSpeakableStringResolutionResult):void;
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintenthandling/2799271-confirmgetcarlockstatus
    confirmGetCarLockStatus_completion(intent: INGetCarLockStatusIntent, completion: INGetCarLockStatusIntentResponse):void;
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintenthandling/2799269-handlegetcarlockstatus
    handleGetCarLockStatus_completion(intent: INGetCarLockStatusIntent, completion: INGetCarLockStatusIntentResponse):void;
  }
}
declare namespace cocoascript {
  /**
   * An intent that contains information about media playable from your app.
   * https://developer.apple.com/documentation/sirikit/inplaymediaintent
   */
  interface INPlayMediaIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/3074271-initwithmediaitems
    initWithMediaItems_mediaContainer_playShuffled_playbackRepeatMode_resumePlayback_playbackQueueLocation_playbackSpeed_mediaSearch(mediaItems: INMediaItem, mediaContainer: INMediaItem, playShuffled: NSNumber, playbackRepeatMode: INPlaybackRepeatMode, resumePlayback: NSNumber, playbackQueueLocation: INPlaybackQueueLocation, playbackSpeed: NSNumber, mediaSearch: INMediaSearch):INPlayMediaIntent;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/2963013-initwithmediaitems
    initWithMediaItems_mediaContainer_playShuffled_playbackRepeatMode_resumePlayback(mediaItems: INMediaItem, mediaContainer: INMediaItem, playShuffled: NSNumber, playbackRepeatMode: INPlaybackRepeatMode, resumePlayback: NSNumber):INPlayMediaIntent;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/2963014-mediacontainer
    mediaContainer(): INMediaItem;
    setMediaContainer(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/2963015-mediaitems
    mediaItems(): INMediaItem;
    setMediaItems(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/2963016-playshuffled
    playShuffled(): NSNumber;
    setPlayShuffled(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/2963018-resumeplayback
    resumePlayback(): NSNumber;
    setResumePlayback(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/2963017-playbackrepeatmode
    playbackRepeatMode(): INPlaybackRepeatMode;
    setPlaybackRepeatMode(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/3074274-playbackspeed
    playbackSpeed(): NSNumber;
    setPlaybackSpeed(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/3074273-playbackqueuelocation
    playbackQueueLocation(): INPlaybackQueueLocation;
    setPlaybackQueueLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintent/3074272-mediasearch
    mediaSearch(): INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():INPlayMediaIntent;
    //
    init():INPlayMediaIntent;
  }
}

declare const INPlayMediaIntent: cocoascript.INPlayMediaIntent;
declare namespace cocoascript {
  /**
   * A request to fulfill in your app or Intents extension.
   * https://developer.apple.com/documentation/sirikit/inintent
   */
  interface INIntent extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inintent/1639000-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inintent/2921266-intentdescription
    intentDescription(): string | cocoascript.NSString;
    setIntentDescription(): void;
    // https://developer.apple.com/documentation/sirikit/inintent/2962960-suggestedinvocationphrase
    suggestedInvocationPhrase(): string | cocoascript.NSString;
    setSuggestedInvocationPhrase(): void;
    // https://developer.apple.com/documentation/sirikit/inintent/3552187-shortcutavailability
    shortcutAvailability(): INShortcutAvailabilityOptions;
    setShortcutAvailability(): void;
    // https://developer.apple.com/documentation/sirikit/inintent/2976222-imageforparameternamed
    imageForParameterNamed(parameterName: string | cocoascript.NSString):INImage;
    // https://developer.apple.com/documentation/sirikit/inintent/2976224-setimage
    setImage_forParameterNamed(image: INImage, parameterName: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/sirikit/inintent/2976223-keyimage
    keyImage():INImage;
    //
    alloc():INIntent;
    //
    init():INIntent;
  }
}

declare const INIntent: cocoascript.INIntent;
declare namespace cocoascript {
  /**
   * Image data inside an Intents extension or Intents UI extension.
   * https://developer.apple.com/documentation/sirikit/inimage
   */
  interface INImage extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inimage/1778402-imagenamed
    imageNamed(name: string | cocoascript.NSString):INImage;
    // https://developer.apple.com/documentation/sirikit/inimage/1648802-imagewithuiimage
    imageWithUIImage(image: UIImage):INImage;
    // https://developer.apple.com/documentation/sirikit/inimage/1648801-imagewithcgimage
    imageWithCGImage(imageRef: CGImageRef):INImage;
    // https://developer.apple.com/documentation/sirikit/inimage/1638698-imagewithurl
    imageWithURL(URL: NSURL):INImage;
    // https://developer.apple.com/documentation/sirikit/inimage/1639328-imagewithimagedata
    imageWithImageData(imageData: NSData):INImage;
    // https://developer.apple.com/documentation/sirikit/inimage/2915209-imagewithurl
    imageWithURL_width_height(URL: NSURL, width: number, height: number):INImage;
    // https://developer.apple.com/documentation/sirikit/inimage/2915857-fetchuiimagewithcompletion
    fetchUIImageWithCompletion(completion: UIImage):void;
    // https://developer.apple.com/documentation/sirikit/inimage/1648800-imagesizeforintentresponse
    imageSizeForIntentResponse(response: INIntentResponse):CGSize;
    // https://developer.apple.com/documentation/sirikit/inimage/3577546-systemimagenamed
    systemImageNamed(systemImageName: string | cocoascript.NSString):INImage;
    //
    alloc():INImage;
    //
    init():INImage;
  }
}

declare const INImage: cocoascript.INImage;
declare namespace cocoascript {
  /**
   * The information about a user participating in a SiriKit interaction.
   * https://developer.apple.com/documentation/sirikit/inperson
   */
  interface INPerson extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inperson/3552225-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_relationship(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, contactIdentifier: string | cocoascript.NSString, customIdentifier: string | cocoascript.NSString, relationship: INPersonRelationship):INPerson;
    // https://developer.apple.com/documentation/sirikit/inperson/2138319-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, contactIdentifier: string | cocoascript.NSString, customIdentifier: string | cocoascript.NSString):INPerson;
    // https://developer.apple.com/documentation/sirikit/inperson/2976230-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_isMe(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, contactIdentifier: string | cocoascript.NSString, customIdentifier: string | cocoascript.NSString, isMe: BOOL):INPerson;
    // https://developer.apple.com/documentation/sirikit/inperson/2138310-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_contactIdentifier_customIdentifier_aliases_suggestionType(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, contactIdentifier: string | cocoascript.NSString, customIdentifier: string | cocoascript.NSString, aliases: INPersonHandle, suggestionType: INPersonSuggestionType):INPerson;
    // https://developer.apple.com/documentation/sirikit/inperson/1638921-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/1638822-namecomponents
    nameComponents(): NSPersonNameComponents;
    setNameComponents(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2138314-personhandle
    personHandle(): INPersonHandle;
    setPersonHandle(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/1639130-image
    image(): INImage;
    setImage(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2878157-isme
    isMe(): BOOL;
    setIsMe(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2138316-aliases
    aliases(): INPersonHandle;
    setAliases(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/1639190-handle
    handle(): string | cocoascript.NSString;
    setHandle(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/1638320-contactidentifier
    contactIdentifier(): string | cocoascript.NSString;
    setContactIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2138295-customidentifier
    customIdentifier(): string | cocoascript.NSString;
    setCustomIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2138313-suggestiontype
    suggestionType(): INPersonSuggestionType;
    setSuggestionType(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2715831-relationship
    relationship(): INPersonRelationship;
    setRelationship(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/2863696-sirimatches
    siriMatches(): INPerson;
    setSiriMatches(): void;
    // https://developer.apple.com/documentation/sirikit/inperson/1638494-initwithhandle
    initWithHandle_displayName_contactIdentifier(handle: string | cocoascript.NSString, displayName: string | cocoascript.NSString, contactIdentifier: string | cocoascript.NSString):INPerson;
    // https://developer.apple.com/documentation/sirikit/inperson/1639010-initwithhandle
    initWithHandle_nameComponents_contactIdentifier(handle: string | cocoascript.NSString, nameComponents: NSPersonNameComponents, contactIdentifier: string | cocoascript.NSString):INPerson;
    // https://developer.apple.com/documentation/sirikit/inperson/1638508-initwithhandle
    initWithHandle_nameComponents_displayName_image_contactIdentifier(handle: string | cocoascript.NSString, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, contactIdentifier: string | cocoascript.NSString):INPerson;
    //
    alloc():INPerson;
    //
    init():INPerson;
  }
}

declare const INPerson: cocoascript.INPerson;
declare namespace cocoascript {
  /**
   * An amount of money to transfer during a financial transaction.
   * https://developer.apple.com/documentation/sirikit/incurrencyamount
   */
  interface INCurrencyAmount extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incurrencyamount/1638814-initwithamount
    initWithAmount_currencyCode(amount: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INCurrencyAmount;
    // https://developer.apple.com/documentation/sirikit/incurrencyamount/1638388-amount
    amount(): NSDecimalNumber;
    setAmount(): void;
    // https://developer.apple.com/documentation/sirikit/incurrencyamount/1638973-currencycode
    currencyCode(): string | cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():INCurrencyAmount;
    //
    init():INCurrencyAmount;
  }
}

declare const INCurrencyAmount: cocoascript.INCurrencyAmount;
declare namespace cocoascript {
  /**
   * Information about a message that your app sends or receives.
   * https://developer.apple.com/documentation/sirikit/inmessage
   */
  interface INMessage extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inmessage/2882886-initwithidentifier
    initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_messageType(identifier: string | cocoascript.NSString, conversationIdentifier: string | cocoascript.NSString, content: string | cocoascript.NSString, dateSent: NSDate, sender: INPerson, recipients: INPerson, messageType: INMessageType):INMessage;
    // https://developer.apple.com/documentation/sirikit/inmessage/2919433-initwithidentifier
    initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_groupName_messageType(identifier: string | cocoascript.NSString, conversationIdentifier: string | cocoascript.NSString, content: string | cocoascript.NSString, dateSent: NSDate, sender: INPerson, recipients: INPerson, groupName: INSpeakableString, messageType: INMessageType):INMessage;
    // https://developer.apple.com/documentation/sirikit/inmessage/1687606-initwithidentifier
    initWithIdentifier_content_dateSent_sender_recipients(identifier: string | cocoascript.NSString, content: string | cocoascript.NSString, dateSent: NSDate, sender: INPerson, recipients: INPerson):INMessage;
    // https://developer.apple.com/documentation/sirikit/inmessage/3392958-initwithidentifier
    initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_groupName_messageType_serviceName(identifier: string | cocoascript.NSString, conversationIdentifier: string | cocoascript.NSString, content: string | cocoascript.NSString, dateSent: NSDate, sender: INPerson, recipients: INPerson, groupName: INSpeakableString, messageType: INMessageType, serviceName: string | cocoascript.NSString):INMessage;
    // https://developer.apple.com/documentation/sirikit/inmessage/1638230-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/2867834-conversationidentifier
    conversationIdentifier(): string | cocoascript.NSString;
    setConversationIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/2882867-messagetype
    messageType(): INMessageType;
    setMessageType(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/1638778-sender
    sender(): INPerson;
    setSender(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/1638938-recipients
    recipients(): INPerson;
    setRecipients(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/2919432-groupname
    groupName(): INSpeakableString;
    setGroupName(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/1638554-content
    content(): string | cocoascript.NSString;
    setContent(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/1639255-datesent
    dateSent(): NSDate;
    setDateSent(): void;
    // https://developer.apple.com/documentation/sirikit/inmessage/3392959-servicename
    serviceName(): string | cocoascript.NSString;
    setServiceName(): void;
    //
    alloc():INMessage;
    //
    init():INMessage;
  }
}

declare const INMessage: cocoascript.INMessage;
declare namespace cocoascript {
  /**
   * Information about a form of payment supported by your app.
   * https://developer.apple.com/documentation/sirikit/inpaymentmethod
   */
  interface INPaymentMethod extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpaymentmethod/2211609-initwithtype
    initWithType_name_identificationHint_icon(type: INPaymentMethodType, name: string | cocoascript.NSString, identificationHint: string | cocoascript.NSString, icon: INImage):INPaymentMethod;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethod/2247185-applepaypaymentmethod
    applePayPaymentMethod():INPaymentMethod;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethod/1638590-type
    type(): INPaymentMethodType;
    setType(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethod/1638237-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethod/2211608-identificationhint
    identificationHint(): string | cocoascript.NSString;
    setIdentificationHint(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethod/1639364-icon
    icon(): INImage;
    setIcon(): void;
    //
    alloc():INPaymentMethod;
    //
    init():INPaymentMethod;
  }
}

declare const INPaymentMethod: cocoascript.INPaymentMethod;
declare namespace cocoascript {
  /**
   * Identifying information about a driver of a ride service.
   * https://developer.apple.com/documentation/sirikit/inridedriver
   */
  interface INRideDriver extends INPerson {
    // https://developer.apple.com/documentation/sirikit/inridedriver/2727146-initwithphonenumber
    initWithPhoneNumber_nameComponents_displayName_image_rating(phoneNumber: string | cocoascript.NSString, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, rating: string | cocoascript.NSString):INRideDriver;
    // https://developer.apple.com/documentation/sirikit/inridedriver/1639295-initwithhandle
    initWithHandle_displayName_image_rating_phoneNumber(handle: string | cocoascript.NSString, displayName: string | cocoascript.NSString, image: INImage, rating: string | cocoascript.NSString, phoneNumber: string | cocoascript.NSString):INRideDriver;
    // https://developer.apple.com/documentation/sirikit/inridedriver/1638407-initwithhandle
    initWithHandle_nameComponents_image_rating_phoneNumber(handle: string | cocoascript.NSString, nameComponents: NSPersonNameComponents, image: INImage, rating: string | cocoascript.NSString, phoneNumber: string | cocoascript.NSString):INRideDriver;
    // https://developer.apple.com/documentation/sirikit/inridedriver/2143442-initwithpersonhandle
    initWithPersonHandle_nameComponents_displayName_image_rating_phoneNumber(personHandle: INPersonHandle, nameComponents: NSPersonNameComponents, displayName: string | cocoascript.NSString, image: INImage, rating: string | cocoascript.NSString, phoneNumber: string | cocoascript.NSString):INRideDriver;
    // https://developer.apple.com/documentation/sirikit/inridedriver/1638184-rating
    rating(): string | cocoascript.NSString;
    setRating(): void;
    // https://developer.apple.com/documentation/sirikit/inridedriver/1639331-phonenumber
    phoneNumber(): string | cocoascript.NSString;
    setPhoneNumber(): void;
    //
    alloc():INRideDriver;
    //
    init():INRideDriver;
  }
}

declare const INRideDriver: cocoascript.INRideDriver;
declare namespace cocoascript {
  /**
   * A span of time.
   * https://developer.apple.com/documentation/sirikit/indatecomponentsrange
   */
  interface INDateComponentsRange extends NSObject {
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/1639081-initwithstartdatecomponents
    initWithStartDateComponents_endDateComponents(startDateComponents: NSDateComponents, endDateComponents: NSDateComponents):INDateComponentsRange;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/2890754-initwithstartdatecomponents
    initWithStartDateComponents_endDateComponents_recurrenceRule(startDateComponents: NSDateComponents, endDateComponents: NSDateComponents, recurrenceRule: INRecurrenceRule):INDateComponentsRange;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/2915225-initwithekrecurrencerule
    initWithEKRecurrenceRule(recurrenceRule: EKRecurrenceRule):INDateComponentsRange;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/1639214-startdatecomponents
    startDateComponents(): NSDateComponents;
    setStartDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/1639237-enddatecomponents
    endDateComponents(): NSDateComponents;
    setEndDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/2890755-recurrencerule
    recurrenceRule(): INRecurrenceRule;
    setRecurrenceRule(): void;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrange/2915224-ekrecurrencerule
    EKRecurrenceRule():EKRecurrenceRule;
    //
    alloc():INDateComponentsRange;
    //
    init():INDateComponentsRange;
  }
}

declare const INDateComponentsRange: cocoascript.INDateComponentsRange;
declare namespace cocoascript {
  /**
   * Your response to an intent object.
   * https://developer.apple.com/documentation/sirikit/inintentresponse
   */
  interface INIntentResponse extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inintentresponse/1639469-useractivity
    userActivity(): NSUserActivity;
    setUserActivity(): void;
    //
    alloc():INIntentResponse;
    //
    init():INIntentResponse;
  }
}

declare const INIntentResponse: cocoascript.INIntentResponse;
declare namespace cocoascript {
  /**
   * Detailed information about a financial transaction made between two users.
   * https://developer.apple.com/documentation/sirikit/inpaymentrecord
   */
  interface INPaymentRecord extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/2274388-initwithpayee
    initWithPayee_payer_currencyAmount_paymentMethod_note_status_feeAmount(payee: INPerson, payer: INPerson, currencyAmount: INCurrencyAmount, paymentMethod: INPaymentMethod, note: string | cocoascript.NSString, status: INPaymentStatus, feeAmount: INCurrencyAmount):INPaymentRecord;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1638960-initwithpayee
    initWithPayee_payer_currencyAmount_paymentMethod_note_status(payee: INPerson, payer: INPerson, currencyAmount: INCurrencyAmount, paymentMethod: INPaymentMethod, note: string | cocoascript.NSString, status: INPaymentStatus):INPaymentRecord;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1639333-status
    status(): INPaymentStatus;
    setStatus(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1639172-payee
    payee(): INPerson;
    setPayee(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1639269-payer
    payer(): INPerson;
    setPayer(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1638675-currencyamount
    currencyAmount(): INCurrencyAmount;
    setCurrencyAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/2274390-feeamount
    feeAmount(): INCurrencyAmount;
    setFeeAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1638939-paymentmethod
    paymentMethod(): INPaymentMethod;
    setPaymentMethod(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentrecord/1638190-note
    note(): string | cocoascript.NSString;
    setNote(): void;
    //
    alloc():INPaymentRecord;
    //
    init():INPaymentRecord;
  }
}

declare const INPaymentRecord: cocoascript.INPaymentRecord;
declare namespace cocoascript {
  /**
   * Price information, as a range of possible values.
   * https://developer.apple.com/documentation/sirikit/inpricerange
   */
  interface INPriceRange extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpricerange/1638476-initwithprice
    initWithPrice_currencyCode(price: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INPriceRange;
    // https://developer.apple.com/documentation/sirikit/inpricerange/1639347-initwithrangebetweenprice
    initWithRangeBetweenPrice_andPrice_currencyCode(firstPrice: NSDecimalNumber, secondPrice: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INPriceRange;
    // https://developer.apple.com/documentation/sirikit/inpricerange/1638268-initwithmaximumprice
    initWithMaximumPrice_currencyCode(maximumPrice: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INPriceRange;
    // https://developer.apple.com/documentation/sirikit/inpricerange/1639229-initwithminimumprice
    initWithMinimumPrice_currencyCode(minimumPrice: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INPriceRange;
    // https://developer.apple.com/documentation/sirikit/inpricerange/1638727-minimumprice
    minimumPrice(): NSDecimalNumber;
    setMinimumPrice(): void;
    // https://developer.apple.com/documentation/sirikit/inpricerange/1638626-maximumprice
    maximumPrice(): NSDecimalNumber;
    setMaximumPrice(): void;
    // https://developer.apple.com/documentation/sirikit/inpricerange/1638555-currencycode
    currencyCode(): string | cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():INPriceRange;
    //
    init():INPriceRange;
  }
}

declare const INPriceRange: cocoascript.INPriceRange;
declare namespace cocoascript {
  /**
   * A potential reservation that a user can book.
   * https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking
   */
  interface INRestaurantReservationBooking extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/2132093-initwithrestaurant
    initWithRestaurant_bookingDate_partySize_bookingIdentifier(restaurant: INRestaurant, bookingDate: NSDate, partySize: NSUInteger, bookingIdentifier: string | cocoascript.NSString):INRestaurantReservationBooking;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1648075-restaurant
    restaurant(): INRestaurant;
    setRestaurant(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1648082-partysize
    partySize(): NSUInteger;
    setPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1648081-offers
    offers(): INRestaurantOffer;
    setOffers(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1648077-bookingidentifier
    bookingIdentifier(): string | cocoascript.NSString;
    setBookingIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1648080-bookingavailable
    bookingAvailable(): BOOL;
    setBookingAvailable(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1648078-bookingdate
    bookingDate(): NSDate;
    setBookingDate(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1778334-bookingdescription
    bookingDescription(): string | cocoascript.NSString;
    setBookingDescription(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1778336-requiresname
    requiresName(): BOOL;
    setRequiresName(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1778335-requiresemailaddress
    requiresEmailAddress(): BOOL;
    setRequiresEmailAddress(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1778337-requiresphonenumber
    requiresPhoneNumber(): BOOL;
    setRequiresPhoneNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationbooking/1771692-requiresmanualrequest
    requiresManualRequest(): BOOL;
    setRequiresManualRequest(): void;
    //
    alloc():INRestaurantReservationBooking;
    //
    init():INRestaurantReservationBooking;
  }
}

declare const INRestaurantReservationBooking: cocoascript.INRestaurantReservationBooking;
declare namespace cocoascript {
  /**
   * A reservation created by a user.
   * https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking
   */
  interface INRestaurantReservationUserBooking extends INRestaurantReservationBooking {
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/2132117-initwithrestaurant
    initWithRestaurant_bookingDate_partySize_bookingIdentifier_guest_status_dateStatusModified(restaurant: INRestaurant, bookingDate: NSDate, partySize: NSUInteger, bookingIdentifier: string | cocoascript.NSString, guest: INRestaurantGuest, status: INRestaurantReservationUserBookingStatus, dateStatusModified: NSDate):INRestaurantReservationUserBooking;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/1778366-guest
    guest(): INRestaurantGuest;
    setGuest(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/1771364-status
    status(): INRestaurantReservationUserBookingStatus;
    setStatus(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/2102576-datestatusmodified
    dateStatusModified(): NSDate;
    setDateStatusModified(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/2102578-guestprovidedspecialrequesttext
    guestProvidedSpecialRequestText(): string | cocoascript.NSString;
    setGuestProvidedSpecialRequestText(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/2102577-selectedoffer
    selectedOffer(): INRestaurantOffer;
    setSelectedOffer(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbooking/1648213-advisementtext
    advisementText(): string | cocoascript.NSString;
    setAdvisementText(): void;
    //
    alloc():INRestaurantReservationUserBooking;
    //
    init():INRestaurantReservationUserBooking;
  }
}

declare const INRestaurantReservationUserBooking: cocoascript.INRestaurantReservationUserBooking;
declare namespace cocoascript {
  /**
   * The status of a ride booked through a ride-booking service.
   * https://developer.apple.com/documentation/sirikit/inridestatus
   */
  interface INRideStatus extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648484-rideidentifier
    rideIdentifier(): string | cocoascript.NSString;
    setRideIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648490-phase
    phase(): INRidePhase;
    setPhase(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/2127692-completionstatus
    completionStatus(): INRideCompletionStatus;
    setCompletionStatus(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648486-vehicle
    vehicle(): INRideVehicle;
    setVehicle(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648487-driver
    driver(): INRideDriver;
    setDriver(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648482-rideoption
    rideOption(): INRideOption;
    setRideOption(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/2799248-scheduledpickuptime
    scheduledPickupTime(): INDateComponentsRange;
    setScheduledPickupTime(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648483-estimatedpickupdate
    estimatedPickupDate(): NSDate;
    setEstimatedPickupDate(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/2211607-estimatedpickupenddate
    estimatedPickupEndDate(): NSDate;
    setEstimatedPickupEndDate(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648491-estimateddropoffdate
    estimatedDropOffDate(): NSDate;
    setEstimatedDropOffDate(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648493-pickuplocation
    pickupLocation(): CLPlacemark;
    setPickupLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648492-waypoints
    waypoints(): CLPlacemark;
    setWaypoints(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648488-dropofflocation
    dropOffLocation(): CLPlacemark;
    setDropOffLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/1648485-useractivityforcancelinginapplic
    userActivityForCancelingInApplication(): NSUserActivity;
    setUserActivityForCancelingInApplication(): void;
    // https://developer.apple.com/documentation/sirikit/inridestatus/2127693-additionalactionactivities
    additionalActionActivities(): NSUserActivity;
    setAdditionalActionActivities(): void;
    //
    alloc():INRideStatus;
    //
    init():INRideStatus;
  }
}

declare const INRideStatus: cocoascript.INRideStatus;
declare namespace cocoascript {
  /**
   * A request for the time slots available for making a reservation.
   * https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent
   */
  interface INGetAvailableRestaurantReservationBookingsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/2877503-initwithrestaurant
    initWithRestaurant_partySize_preferredBookingDateComponents_maximumNumberOfResults_earliestBookingDateForResults_latestBookingDateForResults(restaurant: INRestaurant, partySize: NSUInteger, preferredBookingDateComponents: NSDateComponents, maximumNumberOfResults: NSNumber, earliestBookingDateForResults: NSDate, latestBookingDateForResults: NSDate):INGetAvailableRestaurantReservationBookingsIntent;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1648718-restaurant
    restaurant(): INRestaurant;
    setRestaurant(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1648712-partysize
    partySize(): NSUInteger;
    setPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/2305423-preferredbookingdatecomponents
    preferredBookingDateComponents(): NSDateComponents;
    setPreferredBookingDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778387-earliestbookingdateforresults
    earliestBookingDateForResults(): NSDate;
    setEarliestBookingDateForResults(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778418-latestbookingdateforresults
    latestBookingDateForResults(): NSDate;
    setLatestBookingDateForResults(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintent/1778378-maximumnumberofresults
    maximumNumberOfResults(): NSNumber;
    setMaximumNumberOfResults(): void;
    //
    alloc():INGetAvailableRestaurantReservationBookingsIntent;
    //
    init():INGetAvailableRestaurantReservationBookingsIntent;
  }
}

declare const INGetAvailableRestaurantReservationBookingsIntent: cocoascript.INGetAvailableRestaurantReservationBookingsIntent;
declare namespace cocoascript {
  /**
   * Information about special offers made by a restaurant.
   * https://developer.apple.com/documentation/sirikit/inrestaurantoffer
   */
  interface INRestaurantOffer extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrestaurantoffer/1649398-offertitletext
    offerTitleText(): string | cocoascript.NSString;
    setOfferTitleText(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantoffer/1649401-offerdetailtext
    offerDetailText(): string | cocoascript.NSString;
    setOfferDetailText(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantoffer/1649400-offeridentifier
    offerIdentifier(): string | cocoascript.NSString;
    setOfferIdentifier(): void;
    //
    alloc():INRestaurantOffer;
    //
    init():INRestaurantOffer;
  }
}

declare const INRestaurantOffer: cocoascript.INRestaurantOffer;
declare namespace cocoascript {
  /**
   * A request to create a reservation at the specified restaurant.
   * https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent
   */
  interface INBookRestaurantReservationIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/2877498-initwithrestaurant
    initWithRestaurant_bookingDateComponents_partySize_bookingIdentifier_guest_selectedOffer_guestProvidedSpecialRequestText(restaurant: INRestaurant, bookingDateComponents: NSDateComponents, partySize: NSUInteger, bookingIdentifier: string | cocoascript.NSString, guest: INRestaurantGuest, selectedOffer: INRestaurantOffer, guestProvidedSpecialRequestText: string | cocoascript.NSString):INBookRestaurantReservationIntent;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/1649559-restaurant
    restaurant(): INRestaurant;
    setRestaurant(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/2305412-bookingdatecomponents
    bookingDateComponents(): NSDateComponents;
    setBookingDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/1649557-bookingidentifier
    bookingIdentifier(): string | cocoascript.NSString;
    setBookingIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/1649565-partysize
    partySize(): NSUInteger;
    setPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/1778392-guest
    guest(): INRestaurantGuest;
    setGuest(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/1778382-guestprovidedspecialrequesttext
    guestProvidedSpecialRequestText(): string | cocoascript.NSString;
    setGuestProvidedSpecialRequestText(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintent/1649561-selectedoffer
    selectedOffer(): INRestaurantOffer;
    setSelectedOffer(): void;
    //
    alloc():INBookRestaurantReservationIntent;
    //
    init():INBookRestaurantReservationIntent;
  }
}

declare const INBookRestaurantReservationIntent: cocoascript.INBookRestaurantReservationIntent;
declare namespace cocoascript {
  /**
   * A specific vehicle used by a ride-booking service.
   * https://developer.apple.com/documentation/sirikit/inridevehicle
   */
  interface INRideVehicle extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inridevehicle/1649589-location
    location(): CLLocation;
    setLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inridevehicle/1649590-mapannotationimage
    mapAnnotationImage(): INImage;
    setMapAnnotationImage(): void;
    // https://developer.apple.com/documentation/sirikit/inridevehicle/1649593-registrationplate
    registrationPlate(): string | cocoascript.NSString;
    setRegistrationPlate(): void;
    // https://developer.apple.com/documentation/sirikit/inridevehicle/1649588-manufacturer
    manufacturer(): string | cocoascript.NSString;
    setManufacturer(): void;
    // https://developer.apple.com/documentation/sirikit/inridevehicle/1649592-model
    model(): string | cocoascript.NSString;
    setModel(): void;
    //
    alloc():INRideVehicle;
    //
    init():INRideVehicle;
  }
}

declare const INRideVehicle: cocoascript.INRideVehicle;
declare namespace cocoascript {
  /**
   * The price of a ride involving the specified number of people.
   * https://developer.apple.com/documentation/sirikit/inridepartysizeoption
   */
  interface INRidePartySizeOption extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inridepartysizeoption/1649721-initwithpartysizerange
    initWithPartySizeRange_sizeDescription_priceRange(partySizeRange: NSRange, sizeDescription: string | cocoascript.NSString, priceRange: INPriceRange):INRidePartySizeOption;
    // https://developer.apple.com/documentation/sirikit/inridepartysizeoption/1649719-partysizerange
    partySizeRange(): NSRange;
    setPartySizeRange(): void;
    // https://developer.apple.com/documentation/sirikit/inridepartysizeoption/1649722-sizedescription
    sizeDescription(): string | cocoascript.NSString;
    setSizeDescription(): void;
    // https://developer.apple.com/documentation/sirikit/inridepartysizeoption/1649723-pricerange
    priceRange(): INPriceRange;
    setPriceRange(): void;
    //
    alloc():INRidePartySizeOption;
    //
    init():INRidePartySizeOption;
  }
}

declare const INRidePartySizeOption: cocoascript.INRidePartySizeOption;
declare namespace cocoascript {
  /**
   * A specific type of ride-related charge.
   * https://developer.apple.com/documentation/sirikit/inridefarelineitem
   */
  interface INRideFareLineItem extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inridefarelineitem/1649902-initwithtitle
    initWithTitle_price_currencyCode(title: string | cocoascript.NSString, price: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INRideFareLineItem;
    // https://developer.apple.com/documentation/sirikit/inridefarelineitem/1649900-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/inridefarelineitem/1649903-price
    price(): NSDecimalNumber;
    setPrice(): void;
    // https://developer.apple.com/documentation/sirikit/inridefarelineitem/1649901-currencycode
    currencyCode(): string | cocoascript.NSString;
    setCurrencyCode(): void;
    //
    alloc():INRideFareLineItem;
    //
    init():INRideFareLineItem;
  }
}

declare const INRideFareLineItem: cocoascript.INRideFareLineItem;
declare namespace cocoascript {
  /**
   * Details about a type of ride offered by your ride-booking service.
   * https://developer.apple.com/documentation/sirikit/inrideoption
   */
  interface INRideOption extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649958-initwithname
    initWithName_estimatedPickupDate(name: string | cocoascript.NSString, estimatedPickupDate: NSDate):INRideOption;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649960-initwithcoder
    initWithCoder(decoder: NSCoder):INRideOption;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649970-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649965-estimatedpickupdate
    estimatedPickupDate(): NSDate;
    setEstimatedPickupDate(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649956-disclaimermessage
    disclaimerMessage(): string | cocoascript.NSString;
    setDisclaimerMessage(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649961-availablepartysizeoptions
    availablePartySizeOptions(): INRidePartySizeOption;
    setAvailablePartySizeOptions(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649968-availablepartysizeoptionsselecti
    availablePartySizeOptionsSelectionPrompt(): string | cocoascript.NSString;
    setAvailablePartySizeOptionsSelectionPrompt(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649969-pricerange
    priceRange(): INPriceRange;
    setPriceRange(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649964-specialpricing
    specialPricing(): string | cocoascript.NSString;
    setSpecialPricing(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649963-specialpricingbadgeimage
    specialPricingBadgeImage(): INImage;
    setSpecialPricingBadgeImage(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/2132100-usesmeteredfare
    usesMeteredFare(): NSNumber;
    setUsesMeteredFare(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649966-farelineitems
    fareLineItems(): INRideFareLineItem;
    setFareLineItems(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649962-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inrideoption/1649957-useractivityforbookinginapplicat
    userActivityForBookingInApplication(): NSUserActivity;
    setUserActivityForBookingInApplication(): void;
    //
    alloc():INRideOption;
    //
    init():INRideOption;
  }
}

declare const INRideOption: cocoascript.INRideOption;
declare namespace cocoascript {
  /**
   * A restaurant for which your app can make and manage reservations.
   * https://developer.apple.com/documentation/sirikit/inrestaurant
   */
  interface INRestaurant extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrestaurant/2132091-initwithlocation
    initWithLocation_name_vendorIdentifier_restaurantIdentifier(location: CLLocation, name: string | cocoascript.NSString, vendorIdentifier: string | cocoascript.NSString, restaurantIdentifier: string | cocoascript.NSString):INRestaurant;
    // https://developer.apple.com/documentation/sirikit/inrestaurant/1649980-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurant/1649979-location
    location(): CLLocation;
    setLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurant/1649977-restaurantidentifier
    restaurantIdentifier(): string | cocoascript.NSString;
    setRestaurantIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurant/1649978-vendoridentifier
    vendorIdentifier(): string | cocoascript.NSString;
    setVendorIdentifier(): void;
    //
    alloc():INRestaurant;
    //
    init():INRestaurant;
  }
}

declare const INRestaurant: cocoascript.INRestaurant;
declare namespace cocoascript {
  /**
   * A request for the list of the user’s current reservations.
   * https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2877506-initwithrestaurant
    initWithRestaurant_reservationIdentifier_maximumNumberOfResults_earliestBookingDateForResults(restaurant: INRestaurant, reservationIdentifier: string | cocoascript.NSString, maximumNumberOfResults: NSNumber, earliestBookingDateForResults: NSDate):INGetUserCurrentRestaurantReservationBookingsIntent;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/1650029-restaurant
    restaurant(): INRestaurant;
    setRestaurant(): void;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/1650028-reservationidentifier
    reservationIdentifier(): string | cocoascript.NSString;
    setReservationIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2102242-maximumnumberofresults
    maximumNumberOfResults(): NSNumber;
    setMaximumNumberOfResults(): void;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintent/2102243-earliestbookingdateforresults
    earliestBookingDateForResults(): NSDate;
    setEarliestBookingDateForResults(): void;
    //
    alloc():INGetUserCurrentRestaurantReservationBookingsIntent;
    //
    init():INGetUserCurrentRestaurantReservationBookingsIntent;
  }
}

declare const INGetUserCurrentRestaurantReservationBookingsIntent: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntent;
declare namespace cocoascript {
  /**
   * Options about how to display guest information from system interfaces.
   * https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences
   */
  interface INRestaurantGuestDisplayPreferences extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2127690-namefieldshouldbedisplayed
    nameFieldShouldBeDisplayed(): BOOL;
    setNameFieldShouldBeDisplayed(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102609-phonenumberfieldshouldbedisplaye
    phoneNumberFieldShouldBeDisplayed(): BOOL;
    setPhoneNumberFieldShouldBeDisplayed(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102602-emailaddressfieldshouldbedisplay
    emailAddressFieldShouldBeDisplayed(): BOOL;
    setEmailAddressFieldShouldBeDisplayed(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102604-namefieldfirstnameoptional
    nameFieldFirstNameOptional(): BOOL;
    setNameFieldFirstNameOptional(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102606-namefieldlastnameoptional
    nameFieldLastNameOptional(): BOOL;
    setNameFieldLastNameOptional(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102603-nameeditable
    nameEditable(): BOOL;
    setNameEditable(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102608-emailaddresseditable
    emailAddressEditable(): BOOL;
    setEmailAddressEditable(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestdisplaypreferences/2102607-phonenumbereditable
    phoneNumberEditable(): BOOL;
    setPhoneNumberEditable(): void;
    //
    alloc():INRestaurantGuestDisplayPreferences;
    //
    init():INRestaurantGuestDisplayPreferences;
  }
}

declare const INRestaurantGuestDisplayPreferences: cocoascript.INRestaurantGuestDisplayPreferences;
declare namespace cocoascript {
  /**
   * A custom phrase to be resolved by an Intents extension.
   * https://developer.apple.com/documentation/sirikit/inspeakablestring
   */
  interface INSpeakableString extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inspeakablestring/2721324-initwithspokenphrase
    initWithSpokenPhrase(spokenPhrase: string | cocoascript.NSString):INSpeakableString;
    // https://developer.apple.com/documentation/sirikit/inspeakablestring/2873438-initwithvocabularyidentifier
    initWithVocabularyIdentifier_spokenPhrase_pronunciationHint(vocabularyIdentifier: string | cocoascript.NSString, spokenPhrase: string | cocoascript.NSString, pronunciationHint: string | cocoascript.NSString):INSpeakableString;
    // https://developer.apple.com/documentation/sirikit/inspeakablestring/2118338-initwithidentifier
    initWithIdentifier_spokenPhrase_pronunciationHint(identifier: string | cocoascript.NSString, spokenPhrase: string | cocoascript.NSString, pronunciationHint: string | cocoascript.NSString):INSpeakableString;
    //
    alloc():INSpeakableString;
    //
    init():INSpeakableString;
  }
}

declare const INSpeakableString: cocoascript.INSpeakableString;
declare namespace cocoascript {
  /**
   * The terms and conditions of service when making restaurant reservations.
   * https://developer.apple.com/documentation/sirikit/intermsandconditions
   */
  interface INTermsAndConditions extends NSObject {
    // https://developer.apple.com/documentation/sirikit/intermsandconditions/2132095-initwithlocalizedtermsandconditi
    initWithLocalizedTermsAndConditionsText_privacyPolicyURL_termsAndConditionsURL(localizedTermsAndConditionsText: string | cocoascript.NSString, privacyPolicyURL: NSURL, termsAndConditionsURL: NSURL):INTermsAndConditions;
    // https://developer.apple.com/documentation/sirikit/intermsandconditions/2132098-localizedtermsandconditionstext
    localizedTermsAndConditionsText(): string | cocoascript.NSString;
    setLocalizedTermsAndConditionsText(): void;
    // https://developer.apple.com/documentation/sirikit/intermsandconditions/2132099-privacypolicyurl
    privacyPolicyURL(): NSURL;
    setPrivacyPolicyURL(): void;
    // https://developer.apple.com/documentation/sirikit/intermsandconditions/2132097-termsandconditionsurl
    termsAndConditionsURL(): NSURL;
    setTermsAndConditionsURL(): void;
    //
    alloc():INTermsAndConditions;
    //
    init():INTermsAndConditions;
  }
}

declare const INTermsAndConditions: cocoascript.INTermsAndConditions;
declare namespace cocoascript {
  /**
   * Additional details about whether a ride completed successfully or someone canceled the ride.
   * https://developer.apple.com/documentation/sirikit/inridecompletionstatus
   */
  interface INRideCompletionStatus extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132116-completed
    completed():INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132110-completedwithsettledpaymentamoun
    completedWithSettledPaymentAmount(settledPaymentAmount: INCurrencyAmount):INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132112-completedwithoutstandingpaymenta
    completedWithOutstandingPaymentAmount(outstandingPaymentAmount: INCurrencyAmount):INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2875465-completedwithoutstandingfeedback
    completedWithOutstandingFeedbackType(feedbackType: INRideFeedbackTypeOptions):INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132105-canceledbyservice
    canceledByService():INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132107-canceledbyuser
    canceledByUser():INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132113-canceledmissedpickup
    canceledMissedPickup():INRideCompletionStatus;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132108-completionuseractivity
    completionUserActivity(): NSUserActivity;
    setCompletionUserActivity(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132109-completed
    completed(): BOOL;
    setCompleted(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132104-canceled
    canceled(): BOOL;
    setCanceled(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132115-missedpickup
    missedPickup(): BOOL;
    setMissedPickup(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132114-outstanding
    outstanding(): BOOL;
    setOutstanding(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2132106-paymentamount
    paymentAmount(): INCurrencyAmount;
    setPaymentAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2875467-feedbacktype
    feedbackType(): INRideFeedbackTypeOptions;
    setFeedbackType(): void;
    // https://developer.apple.com/documentation/sirikit/inridecompletionstatus/2875466-defaulttippingoptions
    defaultTippingOptions(): INCurrencyAmount;
    setDefaultTippingOptions(): void;
    //
    alloc():INRideCompletionStatus;
    //
    init():INRideCompletionStatus;
  }
}

declare const INRideCompletionStatus: cocoascript.INRideCompletionStatus;
declare namespace cocoascript {
  /**
   * The identifying information for a user of your app.
   * https://developer.apple.com/documentation/sirikit/inpersonhandle
   */
  interface INPersonHandle extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpersonhandle/2716071-initwithvalue
    initWithValue_type_label(value: string | cocoascript.NSString, type: INPersonHandleType, label: INPersonHandleLabel):INPersonHandle;
    // https://developer.apple.com/documentation/sirikit/inpersonhandle/2138303-initwithvalue
    initWithValue_type(value: string | cocoascript.NSString, type: INPersonHandleType):INPersonHandle;
    // https://developer.apple.com/documentation/sirikit/inpersonhandle/2138309-type
    type(): INPersonHandleType;
    setType(): void;
    // https://developer.apple.com/documentation/sirikit/inpersonhandle/2138297-value
    value(): string | cocoascript.NSString;
    setValue(): void;
    // https://developer.apple.com/documentation/sirikit/inpersonhandle/2716072-label
    label(): INPersonHandleLabel;
    setLabel(): void;
    //
    alloc():INPersonHandle;
    //
    init():INPersonHandle;
  }
}

declare const INPersonHandle: cocoascript.INPersonHandle;
declare namespace cocoascript {
  /**
   * The amount of money to apply to a bill payment.
   * https://developer.apple.com/documentation/sirikit/inpaymentamount
   */
  interface INPaymentAmount extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpaymentamount/2799131-initwithamounttype
    initWithAmountType_amount(amountType: INAmountType, amount: INCurrencyAmount):INPaymentAmount;
    // https://developer.apple.com/documentation/sirikit/inpaymentamount/2799132-amount
    amount(): INCurrencyAmount;
    setAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentamount/2799130-amounttype
    amountType(): INAmountType;
    setAmountType(): void;
    //
    alloc():INPaymentAmount;
    //
    init():INPaymentAmount;
  }
}

declare const INPaymentAmount: cocoascript.INPaymentAmount;
declare namespace cocoascript {
  /**
   * A user account that provides the funds when making a payment.
   * https://developer.apple.com/documentation/sirikit/inpaymentaccount
   */
  interface INPaymentAccount extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2867840-initwithnickname
    initWithNickname_number_accountType_organizationName_balance_secondaryBalance(nickname: INSpeakableString, number: string | cocoascript.NSString, accountType: INAccountType, organizationName: INSpeakableString, balance: INBalanceAmount, secondaryBalance: INBalanceAmount):INPaymentAccount;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2851531-initwithnickname
    initWithNickname_number_accountType_organizationName(nickname: INSpeakableString, number: string | cocoascript.NSString, accountType: INAccountType, organizationName: INSpeakableString):INPaymentAccount;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2851529-nickname
    nickname(): INSpeakableString;
    setNickname(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2799156-organizationname
    organizationName(): INSpeakableString;
    setOrganizationName(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2799152-accounttype
    accountType(): INAccountType;
    setAccountType(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2799154-accountnumber
    accountNumber(): string | cocoascript.NSString;
    setAccountNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2867838-balance
    balance(): INBalanceAmount;
    setBalance(): void;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccount/2867839-secondarybalance
    secondaryBalance(): INBalanceAmount;
    setSecondaryBalance(): void;
    //
    alloc():INPaymentAccount;
    //
    init():INPaymentAccount;
  }
}

declare const INPaymentAccount: cocoascript.INPaymentAccount;
declare namespace cocoascript {
  /**
   * The detailed information associated with a bill.
   * https://developer.apple.com/documentation/sirikit/inbilldetails
   */
  interface INBillDetails extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2852117-initwithbilltype
    initWithBillType_paymentStatus_billPayee_amountDue_minimumDue_lateFee_dueDate_paymentDate(billType: INBillType, paymentStatus: INPaymentStatus, billPayee: INBillPayee, amountDue: INCurrencyAmount, minimumDue: INCurrencyAmount, lateFee: INCurrencyAmount, dueDate: NSDateComponents, paymentDate: NSDateComponents):INBillDetails;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799228-billpayee
    billPayee(): INBillPayee;
    setBillPayee(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799231-paymentdate
    paymentDate(): NSDateComponents;
    setPaymentDate(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799232-paymentstatus
    paymentStatus(): INPaymentStatus;
    setPaymentStatus(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799226-billtype
    billType(): INBillType;
    setBillType(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799230-minimumdue
    minimumDue(): INCurrencyAmount;
    setMinimumDue(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799229-amountdue
    amountDue(): INCurrencyAmount;
    setAmountDue(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799234-duedate
    dueDate(): NSDateComponents;
    setDueDate(): void;
    // https://developer.apple.com/documentation/sirikit/inbilldetails/2799233-latefee
    lateFee(): INCurrencyAmount;
    setLateFee(): void;
    //
    alloc():INBillDetails;
    //
    init():INBillDetails;
  }
}

declare const INBillDetails: cocoascript.INBillDetails;
declare namespace cocoascript {
  /**
   * The entity that receives the proceeds from a bill payment.
   * https://developer.apple.com/documentation/sirikit/inbillpayee
   */
  interface INBillPayee extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inbillpayee/2851532-initwithnickname
    initWithNickname_number_organizationName(nickname: INSpeakableString, number: string | cocoascript.NSString, organizationName: INSpeakableString):INBillPayee;
    // https://developer.apple.com/documentation/sirikit/inbillpayee/2851533-nickname
    nickname(): INSpeakableString;
    setNickname(): void;
    // https://developer.apple.com/documentation/sirikit/inbillpayee/2799316-organizationname
    organizationName(): INSpeakableString;
    setOrganizationName(): void;
    // https://developer.apple.com/documentation/sirikit/inbillpayee/2799312-accountnumber
    accountNumber(): string | cocoascript.NSString;
    setAccountNumber(): void;
    //
    alloc():INBillPayee;
    //
    init():INBillPayee;
  }
}

declare const INBillPayee: cocoascript.INBillPayee;
declare namespace cocoascript {
  /**
   * A balance associated with an account.
   * https://developer.apple.com/documentation/sirikit/inbalanceamount
   */
  interface INBalanceAmount extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inbalanceamount/2867278-initwithamount
    initWithAmount_currencyCode(amount: NSDecimalNumber, currencyCode: string | cocoascript.NSString):INBalanceAmount;
    // https://developer.apple.com/documentation/sirikit/inbalanceamount/2867277-initwithamount
    initWithAmount_balanceType(amount: NSDecimalNumber, balanceType: INBalanceType):INBalanceAmount;
    // https://developer.apple.com/documentation/sirikit/inbalanceamount/2867279-amount
    amount(): NSDecimalNumber;
    setAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inbalanceamount/2867275-currencycode
    currencyCode(): string | cocoascript.NSString;
    setCurrencyCode(): void;
    // https://developer.apple.com/documentation/sirikit/inbalanceamount/2867280-balancetype
    balanceType(): INBalanceType;
    setBalanceType(): void;
    //
    alloc():INBalanceAmount;
    //
    init():INBalanceAmount;
  }
}

declare const INBalanceAmount: cocoascript.INBalanceAmount;
declare namespace cocoascript {
  /**
   * The content and metadata associated with a single note entry in your app.
   * https://developer.apple.com/documentation/sirikit/innote
   */
  interface INNote extends NSObject {
    // https://developer.apple.com/documentation/sirikit/innote/2878109-initwithtitle
    initWithTitle_contents_groupName_createdDateComponents_modifiedDateComponents_identifier(title: INSpeakableString, contents: INNoteContent, groupName: INSpeakableString, createdDateComponents: NSDateComponents, modifiedDateComponents: NSDateComponents, identifier: string | cocoascript.NSString):INNote;
    // https://developer.apple.com/documentation/sirikit/innote/2873614-title
    title(): INSpeakableString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/innote/2873617-contents
    contents(): INNoteContent;
    setContents(): void;
    // https://developer.apple.com/documentation/sirikit/innote/2873615-groupname
    groupName(): INSpeakableString;
    setGroupName(): void;
    // https://developer.apple.com/documentation/sirikit/innote/2873616-createddatecomponents
    createdDateComponents(): NSDateComponents;
    setCreatedDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/innote/2873611-modifieddatecomponents
    modifiedDateComponents(): NSDateComponents;
    setModifiedDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/innote/2873612-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    //
    alloc():INNote;
    //
    init():INNote;
  }
}

declare const INNote: cocoascript.INNote;
declare namespace cocoascript {
  /**
   * An image contained in a note.
   * https://developer.apple.com/documentation/sirikit/inimagenotecontent
   */
  interface INImageNoteContent extends INNoteContent {
    // https://developer.apple.com/documentation/sirikit/inimagenotecontent/2880150-initwithimage
    initWithImage(image: INImage):INImageNoteContent;
    // https://developer.apple.com/documentation/sirikit/inimagenotecontent/2873670-image
    image(): INImage;
    setImage(): void;
    //
    alloc():INImageNoteContent;
    //
    init():INImageNoteContent;
  }
}

declare const INImageNoteContent: cocoascript.INImageNoteContent;
declare namespace cocoascript {
  /**
   * The details about a call handled by your app.
   * https://developer.apple.com/documentation/sirikit/incallrecord
   */
  interface INCallRecord extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incallrecord/3113792-initwithidentifier
    initWithIdentifier_dateCreated_caller_callRecordType_callCapability_callDuration_unseen_numberOfCalls(identifier: string | cocoascript.NSString, dateCreated: NSDate, caller: INPerson, callRecordType: INCallRecordType, callCapability: INCallCapability, callDuration: NSNumber, unseen: NSNumber, numberOfCalls: NSNumber):INCallRecord;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2881733-initwithidentifier
    initWithIdentifier_dateCreated_caller_callRecordType_callCapability_callDuration_unseen(identifier: string | cocoascript.NSString, dateCreated: NSDate, caller: INPerson, callRecordType: INCallRecordType, callCapability: INCallCapability, callDuration: NSNumber, unseen: NSNumber):INCallRecord;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2873326-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2873327-caller
    caller(): INPerson;
    setCaller(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2873325-callrecordtype
    callRecordType(): INCallRecordType;
    setCallRecordType(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2881732-callcapability
    callCapability(): INCallCapability;
    setCallCapability(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2873324-datecreated
    dateCreated(): NSDate;
    setDateCreated(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2879128-callduration
    callDuration(): NSNumber;
    setCallDuration(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/2879129-unseen
    unseen(): NSNumber;
    setUnseen(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecord/3113793-numberofcalls
    numberOfCalls(): NSNumber;
    setNumberOfCalls(): void;
    //
    alloc():INCallRecord;
    //
    init():INCallRecord;
  }
}

declare const INCallRecord: cocoascript.INCallRecord;
declare namespace cocoascript {
  /**
   * An abstract class that defines the types of content contained in notes.
   * https://developer.apple.com/documentation/sirikit/innotecontent
   */
  interface INNoteContent extends NSObject {
    //
    alloc():INNoteContent;
    //
    init():INNoteContent;
  }
}

declare const INNoteContent: cocoascript.INNoteContent;
declare namespace cocoascript {
  /**
   * A trigger condition based on the user’s arrival or departure from a given location.
   * https://developer.apple.com/documentation/sirikit/inspatialeventtrigger
   */
  interface INSpatialEventTrigger extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inspatialeventtrigger/2878151-initwithplacemark
    initWithPlacemark_event(placemark: CLPlacemark, event: INSpatialEvent):INSpatialEventTrigger;
    // https://developer.apple.com/documentation/sirikit/inspatialeventtrigger/2873869-placemark
    placemark(): CLPlacemark;
    setPlacemark(): void;
    // https://developer.apple.com/documentation/sirikit/inspatialeventtrigger/2878150-event
    event(): INSpatialEvent;
    setEvent(): void;
    //
    alloc():INSpatialEventTrigger;
    //
    init():INSpatialEventTrigger;
  }
}

declare const INSpatialEventTrigger: cocoascript.INSpatialEventTrigger;
declare namespace cocoascript {
  /**
   * A collection of individual tasks.
   * https://developer.apple.com/documentation/sirikit/intasklist
   */
  interface INTaskList extends NSObject {
    // https://developer.apple.com/documentation/sirikit/intasklist/2888348-initwithtitle
    initWithTitle_tasks_groupName_createdDateComponents_modifiedDateComponents_identifier(title: INSpeakableString, tasks: INTask, groupName: INSpeakableString, createdDateComponents: NSDateComponents, modifiedDateComponents: NSDateComponents, identifier: string | cocoascript.NSString):INTaskList;
    // https://developer.apple.com/documentation/sirikit/intasklist/2874006-title
    title(): INSpeakableString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/intasklist/2874011-tasks
    tasks(): INTask;
    setTasks(): void;
    // https://developer.apple.com/documentation/sirikit/intasklist/2874008-groupname
    groupName(): INSpeakableString;
    setGroupName(): void;
    // https://developer.apple.com/documentation/sirikit/intasklist/2874009-createddatecomponents
    createdDateComponents(): NSDateComponents;
    setCreatedDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/intasklist/2874007-modifieddatecomponents
    modifiedDateComponents(): NSDateComponents;
    setModifiedDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/intasklist/2874004-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    //
    alloc():INTaskList;
    //
    init():INTaskList;
  }
}

declare const INTaskList: cocoascript.INTaskList;
declare namespace cocoascript {
  /**
   * An individual task the user needs to complete.
   * https://developer.apple.com/documentation/sirikit/intask
   */
  interface INTask extends NSObject {
    // https://developer.apple.com/documentation/sirikit/intask/3227907-initwithtitle
    initWithTitle_status_taskType_spatialEventTrigger_temporalEventTrigger_createdDateComponents_modifiedDateComponents_identifier_priority(title: INSpeakableString, status: INTaskStatus, taskType: INTaskType, spatialEventTrigger: INSpatialEventTrigger, temporalEventTrigger: INTemporalEventTrigger, createdDateComponents: NSDateComponents, modifiedDateComponents: NSDateComponents, identifier: string | cocoascript.NSString, priority: INTaskPriority):INTask;
    // https://developer.apple.com/documentation/sirikit/intask/2888298-initwithtitle
    initWithTitle_status_taskType_spatialEventTrigger_temporalEventTrigger_createdDateComponents_modifiedDateComponents_identifier(title: INSpeakableString, status: INTaskStatus, taskType: INTaskType, spatialEventTrigger: INSpatialEventTrigger, temporalEventTrigger: INTemporalEventTrigger, createdDateComponents: NSDateComponents, modifiedDateComponents: NSDateComponents, identifier: string | cocoascript.NSString):INTask;
    // https://developer.apple.com/documentation/sirikit/intask/2874013-title
    title(): INSpeakableString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2874019-status
    status(): INTaskStatus;
    setStatus(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2874018-temporaleventtrigger
    temporalEventTrigger(): INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2874015-spatialeventtrigger
    spatialEventTrigger(): INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2874017-createddatecomponents
    createdDateComponents(): NSDateComponents;
    setCreatedDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2874014-modifieddatecomponents
    modifiedDateComponents(): NSDateComponents;
    setModifiedDateComponents(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2888297-tasktype
    taskType(): INTaskType;
    setTaskType(): void;
    // https://developer.apple.com/documentation/sirikit/intask/2874016-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/intask/3227908-priority
    priority(): INTaskPriority;
    setPriority(): void;
    //
    alloc():INTask;
    //
    init():INTask;
  }
}

declare const INTask: cocoascript.INTask;
declare namespace cocoascript {
  /**
   * The textual content of a note.
   * https://developer.apple.com/documentation/sirikit/intextnotecontent
   */
  interface INTextNoteContent extends INNoteContent {
    // https://developer.apple.com/documentation/sirikit/intextnotecontent/2878142-initwithtext
    initWithText(text: string | cocoascript.NSString):INTextNoteContent;
    // https://developer.apple.com/documentation/sirikit/intextnotecontent/2874035-text
    text(): string | cocoascript.NSString;
    setText(): void;
    //
    alloc():INTextNoteContent;
    //
    init():INTextNoteContent;
  }
}

declare const INTextNoteContent: cocoascript.INTextNoteContent;
declare namespace cocoascript {
  /**
   * A trigger condition based on a date or time.
   * https://developer.apple.com/documentation/sirikit/intemporaleventtrigger
   */
  interface INTemporalEventTrigger extends NSObject {
    // https://developer.apple.com/documentation/sirikit/intemporaleventtrigger/2878115-initwithdatecomponentsrange
    initWithDateComponentsRange(dateComponentsRange: INDateComponentsRange):INTemporalEventTrigger;
    // https://developer.apple.com/documentation/sirikit/intemporaleventtrigger/2878114-datecomponentsrange
    dateComponentsRange(): INDateComponentsRange;
    setDateComponentsRange(): void;
    //
    alloc():INTemporalEventTrigger;
    //
    init():INTemporalEventTrigger;
  }
}

declare const INTemporalEventTrigger: cocoascript.INTemporalEventTrigger;
declare namespace cocoascript {
  /**
   * An object that describes the pattern to use when repeating an event.
   * https://developer.apple.com/documentation/sirikit/inrecurrencerule
   */
  interface INRecurrenceRule extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrecurrencerule/2890769-initwithinterval
    initWithInterval_frequency(interval: NSUInteger, frequency: INRecurrenceFrequency):INRecurrenceRule;
    // https://developer.apple.com/documentation/sirikit/inrecurrencerule/2890761-frequency
    frequency(): INRecurrenceFrequency;
    setFrequency(): void;
    // https://developer.apple.com/documentation/sirikit/inrecurrencerule/2890760-interval
    interval(): NSUInteger;
    setInterval(): void;
    // https://developer.apple.com/documentation/sirikit/inrecurrencerule/3552226-initwithinterval
    initWithInterval_frequency_weeklyRecurrenceDays(interval: NSUInteger, frequency: INRecurrenceFrequency, weeklyRecurrenceDays: INDayOfWeekOptions):INRecurrenceRule;
    // https://developer.apple.com/documentation/sirikit/inrecurrencerule/3552227-weeklyrecurrencedays
    weeklyRecurrenceDays(): INDayOfWeekOptions;
    setWeeklyRecurrenceDays(): void;
    //
    alloc():INRecurrenceRule;
    //
    init():INRecurrenceRule;
  }
}

declare const INRecurrenceRule: cocoascript.INRecurrenceRule;
declare namespace cocoascript {
  /**
   * A parameter of an interaction object.
   * https://developer.apple.com/documentation/sirikit/inparameter
   */
  interface INParameter extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inparameter/2908772-parameterforclass
    parameterForClass_keyPath(aClass: Class, keyPath: string | cocoascript.NSString):INParameter;
    // https://developer.apple.com/documentation/sirikit/inparameter/2908771-parameterkeypath
    parameterKeyPath(): string | cocoascript.NSString;
    setParameterKeyPath(): void;
    // https://developer.apple.com/documentation/sirikit/inparameter/2908773-parameterclass
    parameterClass(): Class;
    setParameterClass(): void;
    // https://developer.apple.com/documentation/sirikit/inparameter/2908767-indexforsubkeypath
    indexForSubKeyPath(subKeyPath: string | cocoascript.NSString):NSUInteger;
    // https://developer.apple.com/documentation/sirikit/inparameter/2908766-setindex
    setIndex_forSubKeyPath(index: NSUInteger, subKeyPath: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/sirikit/inparameter/2908764-isequaltoparameter
    isEqualToParameter(parameter: INParameter):BOOL;
    //
    alloc():INParameter;
    //
    init():INParameter;
  }
}

declare const INParameter: cocoascript.INParameter;
declare namespace cocoascript {
  /**
   * A card template for customizing the Siri watch face for a shortcut.
   * https://developer.apple.com/documentation/sirikit/indefaultcardtemplate
   */
  interface INDefaultCardTemplate extends NSObject {
    // https://developer.apple.com/documentation/sirikit/indefaultcardtemplate/2962952-initwithtitle
    initWithTitle(title: string | cocoascript.NSString):INDefaultCardTemplate;
    // https://developer.apple.com/documentation/sirikit/indefaultcardtemplate/2962954-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/indefaultcardtemplate/2962953-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    // https://developer.apple.com/documentation/sirikit/indefaultcardtemplate/2962951-image
    image(): INImage;
    setImage(): void;
    //
    alloc():INDefaultCardTemplate;
    //
    init():INDefaultCardTemplate;
  }
}

declare const INDefaultCardTemplate: cocoascript.INDefaultCardTemplate;
declare namespace cocoascript {
  /**
   * An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.
   * https://developer.apple.com/documentation/sirikit/inmediaitem
   */
  interface INMediaItem extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inmediaitem/2962985-initwithidentifier
    initWithIdentifier_title_type_artwork(identifier: string | cocoascript.NSString, title: string | cocoascript.NSString, type: INMediaItemType, artwork: INImage):INMediaItem;
    // https://developer.apple.com/documentation/sirikit/inmediaitem/3074229-initwithidentifier
    initWithIdentifier_title_type_artwork_artist(identifier: string | cocoascript.NSString, title: string | cocoascript.NSString, type: INMediaItemType, artwork: INImage, artist: string | cocoascript.NSString):INMediaItem;
    // https://developer.apple.com/documentation/sirikit/inmediaitem/2962983-artwork
    artwork(): INImage;
    setArtwork(): void;
    // https://developer.apple.com/documentation/sirikit/inmediaitem/2962984-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inmediaitem/2962986-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/inmediaitem/3074228-artist
    artist(): string | cocoascript.NSString;
    setArtist(): void;
    // https://developer.apple.com/documentation/sirikit/inmediaitem/2962987-type
    type(): INMediaItemType;
    setType(): void;
    //
    alloc():INMediaItem;
    //
    init():INMediaItem;
  }
}

declare const INMediaItem: cocoascript.INMediaItem;
declare namespace cocoascript {
  /**
   * An abstract class that represents a relevance provider.
   * https://developer.apple.com/documentation/sirikit/inrelevanceprovider
   */
  interface INRelevanceProvider extends NSObject {
    //
    alloc():INRelevanceProvider;
    //
    init():INRelevanceProvider;
  }
}

declare const INRelevanceProvider: cocoascript.INRelevanceProvider;
declare namespace cocoascript {
  /**
   * A shortcut the user added to Siri.
   * https://developer.apple.com/documentation/sirikit/invoiceshortcut
   */
  interface INVoiceShortcut extends NSObject {
    // https://developer.apple.com/documentation/sirikit/invoiceshortcut/2963084-identifier
    identifier(): NSUUID;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/invoiceshortcut/2963088-invocationphrase
    invocationPhrase(): string | cocoascript.NSString;
    setInvocationPhrase(): void;
    // https://developer.apple.com/documentation/sirikit/invoiceshortcut/2994363-shortcut
    shortcut(): INShortcut;
    setShortcut(): void;
    //
    alloc():INVoiceShortcut;
    //
    init():INVoiceShortcut;
  }
}

declare const INVoiceShortcut: cocoascript.INVoiceShortcut;
declare namespace cocoascript {
  /**
   * A representation of a custom intent parameter or response property.
   * https://developer.apple.com/documentation/sirikit/inobject
   */
  interface INObject extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inobject/3601151-initwithidentifier
    initWithIdentifier_displayString_subtitleString_displayImage(identifier: string | cocoascript.NSString, displayString: string | cocoascript.NSString, subtitleString: string | cocoascript.NSString, displayImage: INImage):INObject;
    // https://developer.apple.com/documentation/sirikit/inobject/2980692-initwithidentifier
    initWithIdentifier_displayString(identifier: string | cocoascript.NSString, displayString: string | cocoascript.NSString):INObject;
    // https://developer.apple.com/documentation/sirikit/inobject/3601150-initwithidentifier
    initWithIdentifier_displayString_pronunciationHint_subtitleString_displayImage(identifier: string | cocoascript.NSString, displayString: string | cocoascript.NSString, pronunciationHint: string | cocoascript.NSString, subtitleString: string | cocoascript.NSString, displayImage: INImage):INObject;
    // https://developer.apple.com/documentation/sirikit/inobject/2980693-initwithidentifier
    initWithIdentifier_displayString_pronunciationHint(identifier: string | cocoascript.NSString, displayString: string | cocoascript.NSString, pronunciationHint: string | cocoascript.NSString):INObject;
    // https://developer.apple.com/documentation/sirikit/inobject/2980690-displaystring
    displayString(): string | cocoascript.NSString;
    setDisplayString(): void;
    // https://developer.apple.com/documentation/sirikit/inobject/3552206-subtitlestring
    subtitleString(): string | cocoascript.NSString;
    setSubtitleString(): void;
    // https://developer.apple.com/documentation/sirikit/inobject/3552205-displayimage
    displayImage(): INImage;
    setDisplayImage(): void;
    // https://developer.apple.com/documentation/sirikit/inobject/2980691-identifier
    identifier(): string | cocoascript.NSString;
    setIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inobject/2980694-pronunciationhint
    pronunciationHint(): string | cocoascript.NSString;
    setPronunciationHint(): void;
    // https://developer.apple.com/documentation/sirikit/inobject/3174873-alternativespeakablematches
    alternativeSpeakableMatches(): INSpeakableString;
    setAlternativeSpeakableMatches(): void;
    //
    alloc():INObject;
    //
    init():INObject;
  }
}

declare const INObject: cocoascript.INObject;
declare namespace cocoascript {
  /**
   * An object that defines a shortcut and its relevance to the user.
   * https://developer.apple.com/documentation/sirikit/inrelevantshortcut
   */
  interface INRelevantShortcut extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcut/2993343-initwithshortcut
    initWithShortcut(shortcut: INShortcut):INRelevantShortcut;
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcut/2993345-shortcut
    shortcut(): INShortcut;
    setShortcut(): void;
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcut/3017321-shortcutrole
    shortcutRole(): INRelevantShortcutRole;
    setShortcutRole(): void;
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcut/2993344-relevanceproviders
    relevanceProviders(): INRelevanceProvider;
    setRelevanceProviders(): void;
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcut/2993346-watchtemplate
    watchTemplate(): INDefaultCardTemplate;
    setWatchTemplate(): void;
    //
    alloc():INRelevantShortcut;
    //
    init():INRelevantShortcut;
  }
}

declare const INRelevantShortcut: cocoascript.INRelevantShortcut;
declare namespace cocoascript {
  /**
   * An object representing an action available in your app that the system may suggest to a user or a user may add to Siri.
   * https://developer.apple.com/documentation/sirikit/inshortcut
   */
  interface INShortcut extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inshortcut/2993351-initwithintent
    initWithIntent(intent: INIntent):INShortcut;
    // https://developer.apple.com/documentation/sirikit/inshortcut/2993352-initwithuseractivity
    initWithUserActivity(userActivity: NSUserActivity):INShortcut;
    // https://developer.apple.com/documentation/sirikit/inshortcut/2993353-intent
    intent(): INIntent;
    setIntent(): void;
    // https://developer.apple.com/documentation/sirikit/inshortcut/2993354-useractivity
    userActivity(): NSUserActivity;
    setUserActivity(): void;
    //
    alloc():INShortcut;
    //
    init():INShortcut;
  }
}

declare const INShortcut: cocoascript.INShortcut;
declare namespace cocoascript {
  /**
   * An object that describes the destination for a media item.
   * https://developer.apple.com/documentation/sirikit/inmediadestination
   */
  interface INMediaDestination extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inmediadestination/3074215-librarydestination
    libraryDestination():INMediaDestination;
    // https://developer.apple.com/documentation/sirikit/inmediadestination/3074217-playlistdestinationwithname
    playlistDestinationWithName(playlistName: string | cocoascript.NSString):INMediaDestination;
    // https://developer.apple.com/documentation/sirikit/inmediadestination/3074218-playlistname
    playlistName(): string | cocoascript.NSString;
    setPlaylistName(): void;
    // https://developer.apple.com/documentation/sirikit/inmediadestination/3074216-mediadestinationtype
    mediaDestinationType(): INMediaDestinationType;
    setMediaDestinationType(): void;
    //
    alloc():INMediaDestination;
    //
    init():INMediaDestination;
  }
}

declare const INMediaDestination: cocoascript.INMediaDestination;
declare namespace cocoascript {
  /**
   * An object that describes a media type to search for, such as a station name, song name, or album name.
   * https://developer.apple.com/documentation/sirikit/inmediasearch
   */
  interface INMediaSearch extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3362535-initwithmediatype
    initWithMediaType_sortOrder_mediaName_artistName_albumName_genreNames_moodNames_releaseDate_reference_mediaIdentifier(mediaType: INMediaItemType, sortOrder: INMediaSortOrder, mediaName: string | cocoascript.NSString, artistName: string | cocoascript.NSString, albumName: string | cocoascript.NSString, genreNames: string | cocoascript.NSString, moodNames: string | cocoascript.NSString, releaseDate: INDateComponentsRange, reference: INMediaReference, mediaIdentifier: string | cocoascript.NSString):INMediaSearch;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074247-genrenames
    genreNames(): string | cocoascript.NSString;
    setGenreNames(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074249-mediaidentifier
    mediaIdentifier(): string | cocoascript.NSString;
    setMediaIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074250-medianame
    mediaName(): string | cocoascript.NSString;
    setMediaName(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074251-mediatype
    mediaType(): INMediaItemType;
    setMediaType(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074252-moodnames
    moodNames(): string | cocoascript.NSString;
    setMoodNames(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074255-reference
    reference(): INMediaReference;
    setReference(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074256-releasedate
    releaseDate(): INDateComponentsRange;
    setReleaseDate(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074258-sortorder
    sortOrder(): INMediaSortOrder;
    setSortOrder(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074243-activitynames
    activityNames(): string | cocoascript.NSString;
    setActivityNames(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074244-albumname
    albumName(): string | cocoascript.NSString;
    setAlbumName(): void;
    // https://developer.apple.com/documentation/sirikit/inmediasearch/3074245-artistname
    artistName(): string | cocoascript.NSString;
    setArtistName(): void;
    //
    alloc():INMediaSearch;
    //
    init():INMediaSearch;
  }
}

declare const INMediaSearch: cocoascript.INMediaSearch;
declare namespace cocoascript {
  /**
   * The information that describes an airline.
   * https://developer.apple.com/documentation/sirikit/inairline
   */
  interface INAirline extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inairline/3113779-initwithname
    initWithName_iataCode_icaoCode(name: string | cocoascript.NSString, iataCode: string | cocoascript.NSString, icaoCode: string | cocoascript.NSString):INAirline;
    // https://developer.apple.com/documentation/sirikit/inairline/3113780-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/sirikit/inairline/3113777-iatacode
    iataCode(): string | cocoascript.NSString;
    setIataCode(): void;
    // https://developer.apple.com/documentation/sirikit/inairline/3113778-icaocode
    icaoCode(): string | cocoascript.NSString;
    setIcaoCode(): void;
    //
    alloc():INAirline;
    //
    init():INAirline;
  }
}

declare const INAirline: cocoascript.INAirline;
declare namespace cocoascript {
  /**
   * The information that describes an airport.
   * https://developer.apple.com/documentation/sirikit/inairport
   */
  interface INAirport extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inairport/3113784-initwithname
    initWithName_iataCode_icaoCode(name: string | cocoascript.NSString, iataCode: string | cocoascript.NSString, icaoCode: string | cocoascript.NSString):INAirport;
    // https://developer.apple.com/documentation/sirikit/inairport/3113785-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // https://developer.apple.com/documentation/sirikit/inairport/3113782-iatacode
    iataCode(): string | cocoascript.NSString;
    setIataCode(): void;
    // https://developer.apple.com/documentation/sirikit/inairport/3113783-icaocode
    icaoCode(): string | cocoascript.NSString;
    setIcaoCode(): void;
    //
    alloc():INAirport;
    //
    init():INAirport;
  }
}

declare const INAirport: cocoascript.INAirport;
declare namespace cocoascript {
  /**
   * The information that describes a flight.
   * https://developer.apple.com/documentation/sirikit/inflight
   */
  interface INFlight extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inflight/3191872-initwithairline
    initWithAirline_flightNumber_boardingTime_flightDuration_departureAirportGate_arrivalAirportGate(airline: INAirline, flightNumber: string | cocoascript.NSString, boardingTime: INDateComponentsRange, flightDuration: INDateComponentsRange, departureAirportGate: INAirportGate, arrivalAirportGate: INAirportGate):INFlight;
    // https://developer.apple.com/documentation/sirikit/inflight/3113801-airline
    airline(): INAirline;
    setAirline(): void;
    // https://developer.apple.com/documentation/sirikit/inflight/3113805-flightnumber
    flightNumber(): string | cocoascript.NSString;
    setFlightNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inflight/3113803-boardingtime
    boardingTime(): INDateComponentsRange;
    setBoardingTime(): void;
    // https://developer.apple.com/documentation/sirikit/inflight/3191871-flightduration
    flightDuration(): INDateComponentsRange;
    setFlightDuration(): void;
    // https://developer.apple.com/documentation/sirikit/inflight/3191870-departureairportgate
    departureAirportGate(): INAirportGate;
    setDepartureAirportGate(): void;
    // https://developer.apple.com/documentation/sirikit/inflight/3191869-arrivalairportgate
    arrivalAirportGate(): INAirportGate;
    setArrivalAirportGate(): void;
    //
    alloc():INFlight;
    //
    init():INFlight;
  }
}

declare const INFlight: cocoascript.INFlight;
declare namespace cocoascript {
  /**
   * The information that describes a flight reservation.
   * https://developer.apple.com/documentation/sirikit/inflightreservation
   */
  interface INFlightReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inflightreservation/3552165-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_flight(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, reservedSeat: INSeat, flight: INFlight):INFlightReservation;
    // https://developer.apple.com/documentation/sirikit/inflightreservation/3191873-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_flight(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, reservedSeat: INSeat, flight: INFlight):INFlightReservation;
    // https://developer.apple.com/documentation/sirikit/inflightreservation/3113811-flight
    flight(): INFlight;
    setFlight(): void;
    // https://developer.apple.com/documentation/sirikit/inflightreservation/3113813-reservedseat
    reservedSeat(): INSeat;
    setReservedSeat(): void;
    //
    alloc():INFlightReservation;
    //
    init():INFlightReservation;
  }
}

declare const INFlightReservation: cocoascript.INFlightReservation;
declare namespace cocoascript {
  /**
   * An object that describes a reservation.
   * https://developer.apple.com/documentation/sirikit/inreservation
   */
  interface INReservation extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inreservation/3113834-reservationholdername
    reservationHolderName(): string | cocoascript.NSString;
    setReservationHolderName(): void;
    // https://developer.apple.com/documentation/sirikit/inreservation/3113835-reservationnumber
    reservationNumber(): string | cocoascript.NSString;
    setReservationNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inreservation/3113836-reservationstatus
    reservationStatus(): INReservationStatus;
    setReservationStatus(): void;
    // https://developer.apple.com/documentation/sirikit/inreservation/3113833-bookingtime
    bookingTime(): NSDate;
    setBookingTime(): void;
    // https://developer.apple.com/documentation/sirikit/inreservation/3172624-itemreference
    itemReference(): INSpeakableString;
    setItemReference(): void;
    // https://developer.apple.com/documentation/sirikit/inreservation/3191877-actions
    actions(): INReservationAction;
    setActions(): void;
    // https://developer.apple.com/documentation/sirikit/inreservation/3552229-url
    URL(): NSURL;
    setURL(): void;
    //
    alloc():INReservation;
    //
    init():INReservation;
  }
}

declare const INReservation: cocoascript.INReservation;
declare namespace cocoascript {
  /**
   * An object containing seat information associated with a reservation.
   * https://developer.apple.com/documentation/sirikit/inseat
   */
  interface INSeat extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inseat/3113845-initwithseatsection
    initWithSeatSection_seatRow_seatNumber_seatingType(seatSection: string | cocoascript.NSString, seatRow: string | cocoascript.NSString, seatNumber: string | cocoascript.NSString, seatingType: string | cocoascript.NSString):INSeat;
    // https://developer.apple.com/documentation/sirikit/inseat/3113848-seatsection
    seatSection(): string | cocoascript.NSString;
    setSeatSection(): void;
    // https://developer.apple.com/documentation/sirikit/inseat/3113847-seatrow
    seatRow(): string | cocoascript.NSString;
    setSeatRow(): void;
    // https://developer.apple.com/documentation/sirikit/inseat/3113846-seatnumber
    seatNumber(): string | cocoascript.NSString;
    setSeatNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inseat/3113849-seatingtype
    seatingType(): string | cocoascript.NSString;
    setSeatingType(): void;
    //
    alloc():INSeat;
    //
    init():INSeat;
  }
}

declare const INSeat: cocoascript.INSeat;
declare namespace cocoascript {
  /**
   * The information that describes a lodging reservation.
   * https://developer.apple.com/documentation/sirikit/inlodgingreservation
   */
  interface INLodgingReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inlodgingreservation/3601149-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_lodgingBusinessLocation_reservationDuration_numberOfAdults_numberOfChildren(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, lodgingBusinessLocation: CLPlacemark, reservationDuration: INDateComponentsRange, numberOfAdults: NSNumber, numberOfChildren: NSNumber):INLodgingReservation;
    // https://developer.apple.com/documentation/sirikit/inlodgingreservation/3191875-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_lodgingBusinessLocation_reservationDuration_numberOfAdults_numberOfChildren(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, lodgingBusinessLocation: CLPlacemark, reservationDuration: INDateComponentsRange, numberOfAdults: NSNumber, numberOfChildren: NSNumber):INLodgingReservation;
    // https://developer.apple.com/documentation/sirikit/inlodgingreservation/3141807-lodgingbusinesslocation
    lodgingBusinessLocation(): CLPlacemark;
    setLodgingBusinessLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inlodgingreservation/3141810-reservationduration
    reservationDuration(): INDateComponentsRange;
    setReservationDuration(): void;
    // https://developer.apple.com/documentation/sirikit/inlodgingreservation/3141808-numberofadults
    numberOfAdults(): NSNumber;
    setNumberOfAdults(): void;
    // https://developer.apple.com/documentation/sirikit/inlodgingreservation/3141809-numberofchildren
    numberOfChildren(): NSNumber;
    setNumberOfChildren(): void;
    //
    alloc():INLodgingReservation;
    //
    init():INLodgingReservation;
  }
}

declare const INLodgingReservation: cocoascript.INLodgingReservation;
declare namespace cocoascript {
  /**
   * The information that describes a rental car.
   * https://developer.apple.com/documentation/sirikit/inrentalcar
   */
  interface INRentalCar extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrentalcar/3141812-initwithrentalcompanyname
    initWithRentalCompanyName_type_make_model_rentalCarDescription(rentalCompanyName: string | cocoascript.NSString, type: string | cocoascript.NSString, make: string | cocoascript.NSString, model: string | cocoascript.NSString, rentalCarDescription: string | cocoascript.NSString):INRentalCar;
    // https://developer.apple.com/documentation/sirikit/inrentalcar/3141816-rentalcompanyname
    rentalCompanyName(): string | cocoascript.NSString;
    setRentalCompanyName(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcar/3141817-type
    type(): string | cocoascript.NSString;
    setType(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcar/3141813-make
    make(): string | cocoascript.NSString;
    setMake(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcar/3141814-model
    model(): string | cocoascript.NSString;
    setModel(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcar/3141815-rentalcardescription
    rentalCarDescription(): string | cocoascript.NSString;
    setRentalCarDescription(): void;
    //
    alloc():INRentalCar;
    //
    init():INRentalCar;
  }
}

declare const INRentalCar: cocoascript.INRentalCar;
declare namespace cocoascript {
  /**
   * The information that describes a rental car reservation.
   * https://developer.apple.com/documentation/sirikit/inrentalcarreservation
   */
  interface INRentalCarReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inrentalcarreservation/3552228-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_rentalCar_rentalDuration_pickupLocation_dropOffLocation(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, rentalCar: INRentalCar, rentalDuration: INDateComponentsRange, pickupLocation: CLPlacemark, dropOffLocation: CLPlacemark):INRentalCarReservation;
    // https://developer.apple.com/documentation/sirikit/inrentalcarreservation/3191876-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_rentalCar_rentalDuration_pickupLocation_dropOffLocation(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, rentalCar: INRentalCar, rentalDuration: INDateComponentsRange, pickupLocation: CLPlacemark, dropOffLocation: CLPlacemark):INRentalCarReservation;
    // https://developer.apple.com/documentation/sirikit/inrentalcarreservation/3141822-rentalcar
    rentalCar(): INRentalCar;
    setRentalCar(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcarreservation/3141823-rentalduration
    rentalDuration(): INDateComponentsRange;
    setRentalDuration(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcarreservation/3141821-pickuplocation
    pickupLocation(): CLPlacemark;
    setPickupLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inrentalcarreservation/3141819-dropofflocation
    dropOffLocation(): CLPlacemark;
    setDropOffLocation(): void;
    //
    alloc():INRentalCarReservation;
    //
    init():INRentalCarReservation;
  }
}

declare const INRentalCarReservation: cocoascript.INRentalCarReservation;
declare namespace cocoascript {
  /**
   * The information that describes a restaurant reservation.
   * https://developer.apple.com/documentation/sirikit/inrestaurantreservation
   */
  interface INRestaurantReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservation/3601152-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservationDuration_partySize_restaurantLocation(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, reservationDuration: INDateComponentsRange, partySize: NSNumber, restaurantLocation: CLPlacemark):INRestaurantReservation;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservation/3191888-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservationDuration_partySize_restaurantLocation(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, reservationDuration: INDateComponentsRange, partySize: NSNumber, restaurantLocation: CLPlacemark):INRestaurantReservation;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservation/3141827-reservationduration
    reservationDuration(): INDateComponentsRange;
    setReservationDuration(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservation/3141828-restaurantlocation
    restaurantLocation(): CLPlacemark;
    setRestaurantLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantreservation/3141826-partysize
    partySize(): NSNumber;
    setPartySize(): void;
    //
    alloc():INRestaurantReservation;
    //
    init():INRestaurantReservation;
  }
}

declare const INRestaurantReservation: cocoascript.INRestaurantReservation;
declare namespace cocoascript {
  /**
   * The information that describes a ticketed event.
   * https://developer.apple.com/documentation/sirikit/inticketedevent
   */
  interface INTicketedEvent extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inticketedevent/3191890-initwithcategory
    initWithCategory_name_eventDuration_location(category: INTicketedEventCategory, name: string | cocoascript.NSString, eventDuration: INDateComponentsRange, location: CLPlacemark):INTicketedEvent;
    // https://developer.apple.com/documentation/sirikit/inticketedevent/3191889-category
    category(): INTicketedEventCategory;
    setCategory(): void;
    // https://developer.apple.com/documentation/sirikit/inticketedevent/3141882-eventduration
    eventDuration(): INDateComponentsRange;
    setEventDuration(): void;
    // https://developer.apple.com/documentation/sirikit/inticketedevent/3141884-location
    location(): CLPlacemark;
    setLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inticketedevent/3141885-name
    name(): string | cocoascript.NSString;
    setName(): void;
    //
    alloc():INTicketedEvent;
    //
    init():INTicketedEvent;
  }
}

declare const INTicketedEvent: cocoascript.INTicketedEvent;
declare namespace cocoascript {
  /**
   * The information that describes a ticketed event reservation.
   * https://developer.apple.com/documentation/sirikit/inticketedeventreservation
   */
  interface INTicketedEventReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inticketedeventreservation/3552237-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_event(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, reservedSeat: INSeat, event: INTicketedEvent):INTicketedEventReservation;
    // https://developer.apple.com/documentation/sirikit/inticketedeventreservation/3191895-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_event(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, reservedSeat: INSeat, event: INTicketedEvent):INTicketedEventReservation;
    // https://developer.apple.com/documentation/sirikit/inticketedeventreservation/3141887-event
    event(): INTicketedEvent;
    setEvent(): void;
    // https://developer.apple.com/documentation/sirikit/inticketedeventreservation/3141889-reservedseat
    reservedSeat(): INSeat;
    setReservedSeat(): void;
    //
    alloc():INTicketedEventReservation;
    //
    init():INTicketedEventReservation;
  }
}

declare const INTicketedEventReservation: cocoascript.INTicketedEventReservation;
declare namespace cocoascript {
  /**
   * The information that describes a train reservation.
   * https://developer.apple.com/documentation/sirikit/intrainreservation
   */
  interface INTrainReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/intrainreservation/3552238-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_trainTrip(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, reservedSeat: INSeat, trainTrip: INTrainTrip):INTrainReservation;
    // https://developer.apple.com/documentation/sirikit/intrainreservation/3191896-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_reservedSeat_trainTrip(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, reservedSeat: INSeat, trainTrip: INTrainTrip):INTrainReservation;
    // https://developer.apple.com/documentation/sirikit/intrainreservation/3141895-reservedseat
    reservedSeat(): INSeat;
    setReservedSeat(): void;
    // https://developer.apple.com/documentation/sirikit/intrainreservation/3141896-traintrip
    trainTrip(): INTrainTrip;
    setTrainTrip(): void;
    //
    alloc():INTrainReservation;
    //
    init():INTrainReservation;
  }
}

declare const INTrainReservation: cocoascript.INTrainReservation;
declare namespace cocoascript {
  /**
   * The information that describes a train trip.
   * https://developer.apple.com/documentation/sirikit/intraintrip
   */
  interface INTrainTrip extends NSObject {
    // https://developer.apple.com/documentation/sirikit/intraintrip/3191897-initwithprovider
    initWithProvider_trainName_trainNumber_tripDuration_departureStationLocation_departurePlatform_arrivalStationLocation_arrivalPlatform(provider: string | cocoascript.NSString, trainName: string | cocoascript.NSString, trainNumber: string | cocoascript.NSString, tripDuration: INDateComponentsRange, departureStationLocation: CLPlacemark, departurePlatform: string | cocoascript.NSString, arrivalStationLocation: CLPlacemark, arrivalPlatform: string | cocoascript.NSString):INTrainTrip;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3191898-provider
    provider(): string | cocoascript.NSString;
    setProvider(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141904-trainname
    trainName(): string | cocoascript.NSString;
    setTrainName(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141905-trainnumber
    trainNumber(): string | cocoascript.NSString;
    setTrainNumber(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141906-tripduration
    tripDuration(): INDateComponentsRange;
    setTripDuration(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141901-departurestationlocation
    departureStationLocation(): CLPlacemark;
    setDepartureStationLocation(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141900-departureplatform
    departurePlatform(): string | cocoascript.NSString;
    setDeparturePlatform(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141899-arrivalstationlocation
    arrivalStationLocation(): CLPlacemark;
    setArrivalStationLocation(): void;
    // https://developer.apple.com/documentation/sirikit/intraintrip/3141898-arrivalplatform
    arrivalPlatform(): string | cocoascript.NSString;
    setArrivalPlatform(): void;
    //
    alloc():INTrainTrip;
    //
    init():INTrainTrip;
  }
}

declare const INTrainTrip: cocoascript.INTrainTrip;
declare namespace cocoascript {
  /**
   * The information that describes an arrival or departure gate for a flight.
   * https://developer.apple.com/documentation/sirikit/inairportgate
   */
  interface INAirportGate extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inairportgate/3191867-initwithairport
    initWithAirport_terminal_gate(airport: INAirport, terminal: string | cocoascript.NSString, gate: string | cocoascript.NSString):INAirportGate;
    // https://developer.apple.com/documentation/sirikit/inairportgate/3191865-airport
    airport(): INAirport;
    setAirport(): void;
    // https://developer.apple.com/documentation/sirikit/inairportgate/3191868-terminal
    terminal(): string | cocoascript.NSString;
    setTerminal(): void;
    // https://developer.apple.com/documentation/sirikit/inairportgate/3191866-gate
    gate(): string | cocoascript.NSString;
    setGate(): void;
    //
    alloc():INAirportGate;
    //
    init():INAirportGate;
  }
}

declare const INAirportGate: cocoascript.INAirportGate;
declare namespace cocoascript {
  /**
   * An action a user can perform that’s relevant to a reservation.
   * https://developer.apple.com/documentation/sirikit/inreservationaction
   */
  interface INReservationAction extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inreservationaction/3191879-initwithtype
    initWithType_validDuration_userActivity(type: INReservationActionType, validDuration: INDateComponentsRange, userActivity: NSUserActivity):INReservationAction;
    // https://developer.apple.com/documentation/sirikit/inreservationaction/3191880-type
    type(): INReservationActionType;
    setType(): void;
    // https://developer.apple.com/documentation/sirikit/inreservationaction/3191881-useractivity
    userActivity(): NSUserActivity;
    setUserActivity(): void;
    // https://developer.apple.com/documentation/sirikit/inreservationaction/3191882-validduration
    validDuration(): INDateComponentsRange;
    setValidDuration(): void;
    //
    alloc():INReservationAction;
    //
    init():INReservationAction;
  }
}

declare const INReservationAction: cocoascript.INReservationAction;
declare namespace cocoascript {
  /**
   * The information that describes a boat trip.
   * https://developer.apple.com/documentation/sirikit/inboattrip
   */
  interface INBoatTrip extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552103-initwithprovider
    initWithProvider_boatName_boatNumber_tripDuration_departureBoatTerminalLocation_arrivalBoatTerminalLocation(provider: string | cocoascript.NSString, boatName: string | cocoascript.NSString, boatNumber: string | cocoascript.NSString, tripDuration: INDateComponentsRange, departureBoatTerminalLocation: CLPlacemark, arrivalBoatTerminalLocation: CLPlacemark):INBoatTrip;
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552104-provider
    provider(): string | cocoascript.NSString;
    setProvider(): void;
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552100-boatname
    boatName(): string | cocoascript.NSString;
    setBoatName(): void;
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552101-boatnumber
    boatNumber(): string | cocoascript.NSString;
    setBoatNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552105-tripduration
    tripDuration(): INDateComponentsRange;
    setTripDuration(): void;
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552102-departureboatterminallocation
    departureBoatTerminalLocation(): CLPlacemark;
    setDepartureBoatTerminalLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inboattrip/3552099-arrivalboatterminallocation
    arrivalBoatTerminalLocation(): CLPlacemark;
    setArrivalBoatTerminalLocation(): void;
    //
    alloc():INBoatTrip;
    //
    init():INBoatTrip;
  }
}

declare const INBoatTrip: cocoascript.INBoatTrip;
declare namespace cocoascript {
  /**
   * Information describing a bus trip.
   * https://developer.apple.com/documentation/sirikit/inbustrip
   */
  interface INBusTrip extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552117-initwithprovider
    initWithProvider_busName_busNumber_tripDuration_departureBusStopLocation_departurePlatform_arrivalBusStopLocation_arrivalPlatform(provider: string | cocoascript.NSString, busName: string | cocoascript.NSString, busNumber: string | cocoascript.NSString, tripDuration: INDateComponentsRange, departureBusStopLocation: CLPlacemark, departurePlatform: string | cocoascript.NSString, arrivalBusStopLocation: CLPlacemark, arrivalPlatform: string | cocoascript.NSString):INBusTrip;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552111-arrivalbusstoplocation
    arrivalBusStopLocation(): CLPlacemark;
    setArrivalBusStopLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552112-arrivalplatform
    arrivalPlatform(): string | cocoascript.NSString;
    setArrivalPlatform(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552113-busname
    busName(): string | cocoascript.NSString;
    setBusName(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552114-busnumber
    busNumber(): string | cocoascript.NSString;
    setBusNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552115-departurebusstoplocation
    departureBusStopLocation(): CLPlacemark;
    setDepartureBusStopLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552116-departureplatform
    departurePlatform(): string | cocoascript.NSString;
    setDeparturePlatform(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552118-provider
    provider(): string | cocoascript.NSString;
    setProvider(): void;
    // https://developer.apple.com/documentation/sirikit/inbustrip/3552119-tripduration
    tripDuration(): INDateComponentsRange;
    setTripDuration(): void;
    //
    alloc():INBusTrip;
    //
    init():INBusTrip;
  }
}

declare const INBusTrip: cocoascript.INBusTrip;
declare namespace cocoascript {
  /**
   * A specific electric vehicle that Maps uses during route planning and navigation.
   * https://developer.apple.com/documentation/sirikit/incar
   */
  interface INCar extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incar/3552129-initwithcaridentifier
    initWithCarIdentifier_displayName_year_make_model_color_headUnit_supportedChargingConnectors(carIdentifier: string | cocoascript.NSString, displayName: string | cocoascript.NSString, year: string | cocoascript.NSString, make: string | cocoascript.NSString, model: string | cocoascript.NSString, color: CGColorRef, headUnit: INCarHeadUnit, supportedChargingConnectors: INCarChargingConnectorType):INCar;
    // https://developer.apple.com/documentation/sirikit/incar/3552125-caridentifier
    carIdentifier(): string | cocoascript.NSString;
    setCarIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552127-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552130-make
    make(): string | cocoascript.NSString;
    setMake(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552132-model
    model(): string | cocoascript.NSString;
    setModel(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552126-color
    color(): CGColorRef;
    setColor(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552135-year
    year(): string | cocoascript.NSString;
    setYear(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552128-headunit
    headUnit(): INCarHeadUnit;
    setHeadUnit(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552134-supportedchargingconnectors
    supportedChargingConnectors(): INCarChargingConnectorType;
    setSupportedChargingConnectors(): void;
    // https://developer.apple.com/documentation/sirikit/incar/3552131-maximumpowerforchargingconnector
    maximumPowerForChargingConnectorType(chargingConnectorType: INCarChargingConnectorType):NSUnitPower;
    // https://developer.apple.com/documentation/sirikit/incar/3552133-setmaximumpower
    setMaximumPower_forChargingConnectorType(power: NSUnitPower, chargingConnectorType: INCarChargingConnectorType):void;
    //
    alloc():INCar;
    //
    init():INCar;
  }
}

declare const INCar: cocoascript.INCar;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/sirikit/inobjectcollection
   */
  interface INObjectCollection extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inobjectcollection/3552209-initwithitems
    initWithItems(items: any):INObjectCollection;
    // https://developer.apple.com/documentation/sirikit/inobjectcollection/3552210-initwithsections
    initWithSections(sections: any):INObjectCollection;
    // https://developer.apple.com/documentation/sirikit/inobjectcollection/3552208-allitems
    allItems(): any;
    setAllItems(): void;
    // https://developer.apple.com/documentation/sirikit/inobjectcollection/3552211-sections
    sections(): any;
    setSections(): void;
    // https://developer.apple.com/documentation/sirikit/inobjectcollection/3552212-usesindexedcollation
    usesIndexedCollation(): BOOL;
    setUsesIndexedCollation(): void;
    //
    alloc():INObjectCollection;
    //
    init():INObjectCollection;
  }
}

declare const INObjectCollection: cocoascript.INObjectCollection;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/sirikit/inobjectsection
   */
  interface INObjectSection extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inobjectsection/3552214-initwithtitle
    initWithTitle_items(title: string | cocoascript.NSString, items: any):INObjectSection;
    // https://developer.apple.com/documentation/sirikit/inobjectsection/3552215-items
    items(): any;
    setItems(): void;
    // https://developer.apple.com/documentation/sirikit/inobjectsection/3552216-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    //
    alloc():INObjectSection;
    //
    init():INObjectSection;
  }
}

declare const INObjectSection: cocoascript.INObjectSection;
declare namespace cocoascript {
  /**
   * The information that describes a boat reservation.
   * https://developer.apple.com/documentation/sirikit/inboatreservation
   */
  interface INBoatReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inboatreservation/3601143-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_boatTrip(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, reservedSeat: INSeat, boatTrip: INBoatTrip):INBoatReservation;
    // https://developer.apple.com/documentation/sirikit/inboatreservation/3601142-boattrip
    boatTrip(): INBoatTrip;
    setBoatTrip(): void;
    // https://developer.apple.com/documentation/sirikit/inboatreservation/3601144-reservedseat
    reservedSeat(): INSeat;
    setReservedSeat(): void;
    //
    alloc():INBoatReservation;
    //
    init():INBoatReservation;
  }
}

declare const INBoatReservation: cocoascript.INBoatReservation;
declare namespace cocoascript {
  /**
   * The information that describes a bus reservation.
   * https://developer.apple.com/documentation/sirikit/inbusreservation
   */
  interface INBusReservation extends INReservation {
    // https://developer.apple.com/documentation/sirikit/inbusreservation/3601147-initwithitemreference
    initWithItemReference_reservationNumber_bookingTime_reservationStatus_reservationHolderName_actions_URL_reservedSeat_busTrip(itemReference: INSpeakableString, reservationNumber: string | cocoascript.NSString, bookingTime: NSDate, reservationStatus: INReservationStatus, reservationHolderName: string | cocoascript.NSString, actions: INReservationAction, URL: NSURL, reservedSeat: INSeat, busTrip: INBusTrip):INBusReservation;
    // https://developer.apple.com/documentation/sirikit/inbusreservation/3601146-bustrip
    busTrip(): INBusTrip;
    setBusTrip(): void;
    // https://developer.apple.com/documentation/sirikit/inbusreservation/3601148-reservedseat
    reservedSeat(): INSeat;
    setReservedSeat(): void;
    //
    alloc():INBusReservation;
    //
    init():INBusReservation;
  }
}

declare const INBusReservation: cocoascript.INBusReservation;
declare namespace cocoascript {
  /**
   * Filters a user specifies to redial a call.
   * https://developer.apple.com/documentation/sirikit/incallrecordfilter
   */
  interface INCallRecordFilter extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incallrecordfilter/3649664-initwithparticipants
    initWithParticipants_callTypes_callCapability(participants: INPerson, callTypes: INCallRecordTypeOptions, callCapability: INCallCapability):INCallRecordFilter;
    // https://developer.apple.com/documentation/sirikit/incallrecordfilter/3649662-callcapability
    callCapability(): INCallCapability;
    setCallCapability(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecordfilter/3649663-calltypes
    callTypes(): INCallRecordTypeOptions;
    setCallTypes(): void;
    // https://developer.apple.com/documentation/sirikit/incallrecordfilter/3649665-participants
    participants(): INPerson;
    setParticipants(): void;
    //
    alloc():INCallRecordFilter;
    //
    init():INCallRecordFilter;
  }
}

declare const INCallRecordFilter: cocoascript.INCallRecordFilter;
declare namespace cocoascript {
  /**
   * An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.
   * https://developer.apple.com/documentation/sirikit/incarheadunit
   */
  interface INCarHeadUnit extends NSObject {
    // https://developer.apple.com/documentation/sirikit/incarheadunit/3674223-initwithbluetoothidentifier
    initWithBluetoothIdentifier_iAP2Identifier(bluetoothIdentifier: string | cocoascript.NSString, iAP2Identifier: string | cocoascript.NSString):INCarHeadUnit;
    // https://developer.apple.com/documentation/sirikit/incarheadunit/3674221-bluetoothidentifier
    bluetoothIdentifier(): string | cocoascript.NSString;
    setBluetoothIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/incarheadunit/3674222-iap2identifier
    iAP2Identifier(): string | cocoascript.NSString;
    setIAP2Identifier(): void;
    //
    alloc():INCarHeadUnit;
    //
    init():INCarHeadUnit;
  }
}

declare const INCarHeadUnit: cocoascript.INCarHeadUnit;
declare namespace cocoascript {
  /**
   * The details of a group call handled by your app.
   * https://developer.apple.com/documentation/sirikit/incallgroup
   */
  interface INCallGroup extends NSObject {
    //
    alloc():INCallGroup;
    //
    init():INCallGroup;
  }
}

declare const INCallGroup: cocoascript.INCallGroup;
declare namespace cocoascript {
  /**
   * The user’s preference for receiving notifications.
   * https://developer.apple.com/documentation/sirikit/infocusstatus
   */
  interface INFocusStatus extends NSObject {
    //
    alloc():INFocusStatus;
    //
    init():INFocusStatus;
  }
}

declare const INFocusStatus: cocoascript.INFocusStatus;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/sirikit/inintentdonationmetadata
   */
  interface INIntentDonationMetadata extends NSObject {
    //
    alloc():INIntentDonationMetadata;
    //
    init():INIntentDonationMetadata;
  }
}

declare const INIntentDonationMetadata: cocoascript.INIntentDonationMetadata;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inintenthandlingstatus
  type INIntentHandlingStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ininteractiondirection
  type INInteractionDirection = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * Retrieve the user's shortcuts and make shortcut suggestions.
   * https://developer.apple.com/documentation/sirikit/invoiceshortcutcenter
   */
  interface INVoiceShortcutCenter extends NSObject {
    // https://developer.apple.com/documentation/sirikit/invoiceshortcutcenter/2963093-sharedcenter
    sharedCenter(): INVoiceShortcutCenter;
    setSharedCenter(): void;
    // https://developer.apple.com/documentation/sirikit/invoiceshortcutcenter/2963091-getallvoiceshortcutswithcompleti
    getAllVoiceShortcutsWithCompletion(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/sirikit/invoiceshortcutcenter/2963092-getvoiceshortcutwithidentifier
    getVoiceShortcutWithIdentifier_completion(identifier: NSUUID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/sirikit/invoiceshortcutcenter/2994364-setshortcutsuggestions
    setShortcutSuggestions(suggestions: INShortcut):void;
    //
    alloc():INVoiceShortcutCenter;
    //
    init():INVoiceShortcutCenter;
  }
}

declare const INVoiceShortcutCenter: cocoascript.INVoiceShortcutCenter;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inshortcutavailabilityoptions
  type INShortcutAvailabilityOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A request to send a message to the designated recipients.
   * https://developer.apple.com/documentation/sirikit/insendmessageintent
   */
  interface INSendMessageIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/3621863-initwithrecipients
    initWithRecipients_outgoingMessageType_content_speakableGroupName_conversationIdentifier_serviceName_sender_attachments(recipients: INPerson, outgoingMessageType: INOutgoingMessageType, content: string | cocoascript.NSString, speakableGroupName: INSpeakableString, conversationIdentifier: string | cocoascript.NSString, serviceName: string | cocoascript.NSString, sender: INPerson, attachments: INSendMessageAttachment):INSendMessageIntent;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/1639316-recipients
    recipients(): INPerson;
    setRecipients(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/3552232-outgoingmessagetype
    outgoingMessageType(): INOutgoingMessageType;
    setOutgoingMessageType(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/2866586-conversationidentifier
    conversationIdentifier(): string | cocoascript.NSString;
    setConversationIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/2866589-speakablegroupname
    speakableGroupName(): INSpeakableString;
    setSpeakableGroupName(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/1639106-content
    content(): string | cocoascript.NSString;
    setContent(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/1639342-servicename
    serviceName(): string | cocoascript.NSString;
    setServiceName(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/1639248-sender
    sender(): INPerson;
    setSender(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/3621862-attachments
    attachments(): INSendMessageAttachment;
    setAttachments(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/2866587-initwithrecipients
    initWithRecipients_content_speakableGroupName_conversationIdentifier_serviceName_sender(recipients: INPerson, content: string | cocoascript.NSString, speakableGroupName: INSpeakableString, conversationIdentifier: string | cocoascript.NSString, serviceName: string | cocoascript.NSString, sender: INPerson):INSendMessageIntent;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/1778238-initwithrecipients
    initWithRecipients_content_groupName_serviceName_sender(recipients: INPerson, content: string | cocoascript.NSString, groupName: string | cocoascript.NSString, serviceName: string | cocoascript.NSString, sender: INPerson):INSendMessageIntent;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/3552231-initwithrecipients
    initWithRecipients_outgoingMessageType_content_speakableGroupName_conversationIdentifier_serviceName_sender(recipients: INPerson, outgoingMessageType: INOutgoingMessageType, content: string | cocoascript.NSString, speakableGroupName: INSpeakableString, conversationIdentifier: string | cocoascript.NSString, serviceName: string | cocoascript.NSString, sender: INPerson):INSendMessageIntent;
    // https://developer.apple.com/documentation/sirikit/insendmessageintent/1778199-groupname
    groupName(): string | cocoascript.NSString;
    setGroupName(): void;
    //
    alloc():INSendMessageIntent;
    //
    init():INSendMessageIntent;
  }
}

declare const INSendMessageIntent: cocoascript.INSendMessageIntent;
declare namespace cocoascript {
  /**
   * An object that describes a file.
   * https://developer.apple.com/documentation/sirikit/infile
   */
  interface INFile extends NSObject {
    // https://developer.apple.com/documentation/sirikit/infile/3152215-filewithdata
    fileWithData_filename_typeIdentifier(data: NSData, filename: string | cocoascript.NSString, typeIdentifier: string | cocoascript.NSString):INFile;
    // https://developer.apple.com/documentation/sirikit/infile/3152216-filewithfileurl
    fileWithFileURL_filename_typeIdentifier(fileURL: NSURL, filename: string | cocoascript.NSString, typeIdentifier: string | cocoascript.NSString):INFile;
    // https://developer.apple.com/documentation/sirikit/infile/3152217-filename
    filename(): string | cocoascript.NSString;
    setFilename(): void;
    // https://developer.apple.com/documentation/sirikit/infile/3152213-data
    data(): NSData;
    setData(): void;
    // https://developer.apple.com/documentation/sirikit/infile/3152214-fileurl
    fileURL(): NSURL;
    setFileURL(): void;
    // https://developer.apple.com/documentation/sirikit/infile/3152218-typeidentifier
    typeIdentifier(): string | cocoascript.NSString;
    setTypeIdentifier(): void;
    //
    alloc():INFile;
    //
    init():INFile;
  }
}

declare const INFile: cocoascript.INFile;
declare namespace cocoascript {
  /**
   * An object that provides user information to Siri.
   * https://developer.apple.com/documentation/sirikit/inusercontext
   */
  interface INUserContext extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inusercontext/3197613-becomecurrent
    becomeCurrent():void;
    //
    alloc():INUserContext;
    //
    init():INUserContext;
  }
}

declare const INUserContext: cocoascript.INUserContext;
declare namespace cocoascript {
  /**
   * A request to snooze one or more tasks.
   * https://developer.apple.com/documentation/sirikit/insnoozetasksintent
   */
  interface INSnoozeTasksIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintent/3141841-initwithtasks
    initWithTasks_nextTriggerTime_all(tasks: INTask, nextTriggerTime: INDateComponentsRange, all: NSNumber):INSnoozeTasksIntent;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintent/3141842-nexttriggertime
    nextTriggerTime(): INDateComponentsRange;
    setNextTriggerTime(): void;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintent/3141843-tasks
    tasks(): INTask;
    setTasks(): void;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintent/3141840-all
    all(): NSNumber;
    setAll(): void;
    //
    alloc():INSnoozeTasksIntent;
    //
    init():INSnoozeTasksIntent;
  }
}

declare const INSnoozeTasksIntent: cocoascript.INSnoozeTasksIntent;
declare namespace cocoascript {
  /**
   * Your response to a delete tasks request.
   * https://developer.apple.com/documentation/sirikit/insnoozetasksintentresponse
   */
  interface INSnoozeTasksIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintentresponse/3141851-initwithcode
    initWithCode_userActivity(code: INSnoozeTasksIntentResponseCode, userActivity: NSUserActivity):INSnoozeTasksIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintentresponse/3141850-code
    code(): INSnoozeTasksIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insnoozetasksintentresponse/3141852-snoozedtasks
    snoozedTasks(): INTask;
    setSnoozedTasks(): void;
    //
    alloc():INSnoozeTasksIntentResponse;
    //
    init():INSnoozeTasksIntentResponse;
  }
}

declare const INSnoozeTasksIntentResponse: cocoascript.INSnoozeTasksIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the source of audio playback in a CarPlay-enabled vehicle.
   * https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintent
   */
  interface INSetAudioSourceInCarIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintent/1648409-initwithaudiosource
    initWithAudioSource_relativeAudioSourceReference(audioSource: INCarAudioSource, relativeAudioSourceReference: INRelativeReference):INSetAudioSourceInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintent/1648406-audiosource
    audioSource(): INCarAudioSource;
    setAudioSource(): void;
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintent/1648407-relativeaudiosourcereference
    relativeAudioSourceReference(): INRelativeReference;
    setRelativeAudioSourceReference(): void;
    //
    alloc():INSetAudioSourceInCarIntent;
    //
    init():INSetAudioSourceInCarIntent;
  }
}

declare const INSetAudioSourceInCarIntent: cocoascript.INSetAudioSourceInCarIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the CarPlay domain.
   * https://developer.apple.com/documentation/sirikit/incarplaydomainhandling
   */
  interface INCarPlayDomainHandling extends INSaveProfileInCarIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a set audio source in car intent.
   * https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintentresponse
   */
  interface INSetAudioSourceInCarIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintentresponse/1648501-initwithcode
    initWithCode_userActivity(code: INSetAudioSourceInCarIntentResponseCode, userActivity: NSUserActivity):INSetAudioSourceInCarIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintentresponse/1833289-code
    code(): INSetAudioSourceInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetAudioSourceInCarIntentResponse;
    //
    init():INSetAudioSourceInCarIntentResponse;
  }
}

declare const INSetAudioSourceInCarIntentResponse: cocoascript.INSetAudioSourceInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to delete one or more tasks.
   * https://developer.apple.com/documentation/sirikit/indeletetasksintent
   */
  interface INDeleteTasksIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/indeletetasksintent/3141686-initwithtasklist
    initWithTaskList_tasks_all(taskList: INTaskList, tasks: INTask, all: NSNumber):INDeleteTasksIntent;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintent/3141687-tasklist
    taskList(): INTaskList;
    setTaskList(): void;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintent/3141688-tasks
    tasks(): INTask;
    setTasks(): void;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintent/3141685-all
    all(): NSNumber;
    setAll(): void;
    //
    alloc():INDeleteTasksIntent;
    //
    init():INDeleteTasksIntent;
  }
}

declare const INDeleteTasksIntent: cocoascript.INDeleteTasksIntent;
declare namespace cocoascript {
  /**
   * Your response to a request to delete tasks.
   * https://developer.apple.com/documentation/sirikit/indeletetasksintentresponse
   */
  interface INDeleteTasksIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/indeletetasksintentresponse/3141697-initwithcode
    initWithCode_userActivity(code: INDeleteTasksIntentResponseCode, userActivity: NSUserActivity):INDeleteTasksIntentResponse;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintentresponse/3141696-deletedtasks
    deletedTasks(): INTask;
    setDeletedTasks(): void;
    // https://developer.apple.com/documentation/sirikit/indeletetasksintentresponse/3141695-code
    code(): INDeleteTasksIntentResponseCode;
    setCode(): void;
    //
    alloc():INDeleteTasksIntentResponse;
    //
    init():INDeleteTasksIntentResponse;
  }
}

declare const INDeleteTasksIntentResponse: cocoascript.INDeleteTasksIntentResponse;
declare namespace cocoascript {
  /**
   * A resolution result for deleting task lists.
   * https://developer.apple.com/documentation/sirikit/indeletetaskstasklistresolutionresult
   */
  interface INDeleteTasksTaskListResolutionResult extends INTaskListResolutionResult {
    // https://developer.apple.com/documentation/sirikit/indeletetaskstasklistresolutionresult/3141706-initwithtasklistresolutionresult
    initWithTaskListResolutionResult(taskListResolutionResult: INTaskListResolutionResult):INDeleteTasksTaskListResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indeletetaskstasklistresolutionresult/3141707-unsupportedforreason
    unsupportedForReason(reason: INDeleteTasksTaskListUnsupportedReason):INDeleteTasksTaskListResolutionResult;
    //
    alloc():INDeleteTasksTaskListResolutionResult;
    //
    init():INDeleteTasksTaskListResolutionResult;
  }
}

declare const INDeleteTasksTaskListResolutionResult: cocoascript.INDeleteTasksTaskListResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for deleting tasks.
   * https://developer.apple.com/documentation/sirikit/indeletetaskstaskresolutionresult
   */
  interface INDeleteTasksTaskResolutionResult extends INTaskResolutionResult {
    // https://developer.apple.com/documentation/sirikit/indeletetaskstaskresolutionresult/3141711-initwithtaskresolutionresult
    initWithTaskResolutionResult(taskResolutionResult: INTaskResolutionResult):INDeleteTasksTaskResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indeletetaskstaskresolutionresult/3141712-unsupportedforreason
    unsupportedForReason(reason: INDeleteTasksTaskUnsupportedReason):INDeleteTasksTaskResolutionResult;
    //
    alloc():INDeleteTasksTaskResolutionResult;
    //
    init():INDeleteTasksTaskResolutionResult;
  }
}

declare const INDeleteTasksTaskResolutionResult: cocoascript.INDeleteTasksTaskResolutionResult;
declare namespace cocoascript {
  /**
   * A request to modify the attributes of a message.
   * https://developer.apple.com/documentation/sirikit/insetmessageattributeintent
   */
  interface INSetMessageAttributeIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintent/1829396-initwithidentifiers
    initWithIdentifiers_attribute(identifiers: string | cocoascript.NSString, attribute: INMessageAttribute):INSetMessageAttributeIntent;
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintent/1829395-attribute
    attribute(): INMessageAttribute;
    setAttribute(): void;
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintent/1829392-identifiers
    identifiers(): string | cocoascript.NSString;
    setIdentifiers(): void;
    //
    alloc():INSetMessageAttributeIntent;
    //
    init():INSetMessageAttributeIntent;
  }
}

declare const INSetMessageAttributeIntent: cocoascript.INSetMessageAttributeIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the messages domain.
   * https://developer.apple.com/documentation/sirikit/inmessagesdomainhandling
   */
  interface INMessagesDomainHandling extends INSearchForMessagesIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a set message attribute intent.
   * https://developer.apple.com/documentation/sirikit/insetmessageattributeintentresponse
   */
  interface INSetMessageAttributeIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintentresponse/1831692-initwithcode
    initWithCode_userActivity(code: INSetMessageAttributeIntentResponseCode, userActivity: NSUserActivity):INSetMessageAttributeIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetmessageattributeintentresponse/1831687-code
    code(): INSetMessageAttributeIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetMessageAttributeIntentResponse;
    //
    init():INSetMessageAttributeIntentResponse;
  }
}

declare const INSetMessageAttributeIntentResponse: cocoascript.INSetMessageAttributeIntentResponse;
declare namespace cocoascript {
  /**
   * A request to save the user’s vehicle environment settings in a CarPlay-enabled vehicle.
   * https://developer.apple.com/documentation/sirikit/insaveprofileincarintent
   */
  interface INSaveProfileInCarIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintent/2727145-initwithprofilenumber
    initWithProfileNumber_profileName(profileNumber: NSNumber, profileName: string | cocoascript.NSString):INSaveProfileInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintent/2102343-initwithprofilenumber
    initWithProfileNumber_profileLabel(profileNumber: NSNumber, profileLabel: string | cocoascript.NSString):INSaveProfileInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintent/2102346-profilenumber
    profileNumber(): NSNumber;
    setProfileNumber(): void;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintent/2727143-profilename
    profileName(): string | cocoascript.NSString;
    setProfileName(): void;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintent/2102345-profilelabel
    profileLabel(): string | cocoascript.NSString;
    setProfileLabel(): void;
    //
    alloc():INSaveProfileInCarIntent;
    //
    init():INSaveProfileInCarIntent;
  }
}

declare const INSaveProfileInCarIntent: cocoascript.INSaveProfileInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a save profile in car intent.
   * https://developer.apple.com/documentation/sirikit/insaveprofileincarintentresponse
   */
  interface INSaveProfileInCarIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintentresponse/2102277-initwithcode
    initWithCode_userActivity(code: INSaveProfileInCarIntentResponseCode, userActivity: NSUserActivity):INSaveProfileInCarIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insaveprofileincarintentresponse/2102282-code
    code(): INSaveProfileInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():INSaveProfileInCarIntentResponse;
    //
    init():INSaveProfileInCarIntentResponse;
  }
}

declare const INSaveProfileInCarIntentResponse: cocoascript.INSaveProfileInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to transfer money from the current user’s account to a different user’s account.
   * https://developer.apple.com/documentation/sirikit/insendpaymentintent
   */
  interface INSendPaymentIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insendpaymentintent/2102644-initwithpayee
    initWithPayee_currencyAmount_note(payee: INPerson, currencyAmount: INCurrencyAmount, note: string | cocoascript.NSString):INSendPaymentIntent;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintent/1639374-payee
    payee(): INPerson;
    setPayee(): void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintent/1638381-currencyamount
    currencyAmount(): INCurrencyAmount;
    setCurrencyAmount(): void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintent/1639091-note
    note(): string | cocoascript.NSString;
    setNote(): void;
    //
    alloc():INSendPaymentIntent;
    //
    init():INSendPaymentIntent;
  }
}

declare const INSendPaymentIntent: cocoascript.INSendPaymentIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the payments domain.
   * https://developer.apple.com/documentation/sirikit/inpaymentsdomainhandling
   */
  interface INPaymentsDomainHandling extends INPayBillIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a send payment intent.
   * https://developer.apple.com/documentation/sirikit/insendpaymentintentresponse
   */
  interface INSendPaymentIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insendpaymentintentresponse/1639483-initwithcode
    initWithCode_userActivity(code: INSendPaymentIntentResponseCode, userActivity: NSUserActivity):INSendPaymentIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintentresponse/1829426-code
    code(): INSendPaymentIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insendpaymentintentresponse/1638625-paymentrecord
    paymentRecord(): INPaymentRecord;
    setPaymentRecord(): void;
    //
    alloc():INSendPaymentIntentResponse;
    //
    init():INSendPaymentIntentResponse;
  }
}

declare const INSendPaymentIntentResponse: cocoascript.INSendPaymentIntentResponse;
declare namespace cocoascript {
  /**
   * A request to create a new note.
   * https://developer.apple.com/documentation/sirikit/increatenoteintent
   */
  interface INCreateNoteIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/increatenoteintent/2874065-initwithtitle
    initWithTitle_content_groupName(title: INSpeakableString, content: INNoteContent, groupName: INSpeakableString):INCreateNoteIntent;
    // https://developer.apple.com/documentation/sirikit/increatenoteintent/2874056-title
    title(): INSpeakableString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintent/2874060-content
    content(): INNoteContent;
    setContent(): void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintent/2874063-groupname
    groupName(): INSpeakableString;
    setGroupName(): void;
    //
    alloc():INCreateNoteIntent;
    //
    init():INCreateNoteIntent;
  }
}

declare const INCreateNoteIntent: cocoascript.INCreateNoteIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the lists and notes domain.
   * https://developer.apple.com/documentation/sirikit/innotebookdomainhandling
   */
  interface INNotebookDomainHandling extends INAddTasksIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a request to create a note.
   * https://developer.apple.com/documentation/sirikit/increatenoteintentresponse
   */
  interface INCreateNoteIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/increatenoteintentresponse/2873960-initwithcode
    initWithCode_userActivity(code: INCreateNoteIntentResponseCode, userActivity: NSUserActivity):INCreateNoteIntentResponse;
    // https://developer.apple.com/documentation/sirikit/increatenoteintentresponse/2873962-code
    code(): INCreateNoteIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/increatenoteintentresponse/2873959-creatednote
    createdNote(): INNote;
    setCreatedNote(): void;
    //
    alloc():INCreateNoteIntentResponse;
    //
    init():INCreateNoteIntentResponse;
  }
}

declare const INCreateNoteIntentResponse: cocoascript.INCreateNoteIntentResponse;
declare namespace cocoascript {
  /**
   * A request to book the specified ride from your service.
   * https://developer.apple.com/documentation/sirikit/inrequestrideintent
   */
  interface INRequestRideIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/2838713-initwithpickuplocation
    initWithPickupLocation_dropOffLocation_rideOptionName_partySize_paymentMethod_scheduledPickupTime(pickupLocation: CLPlacemark, dropOffLocation: CLPlacemark, rideOptionName: INSpeakableString, partySize: NSNumber, paymentMethod: INPaymentMethod, scheduledPickupTime: INDateComponentsRange):INRequestRideIntent;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/2274389-initwithpickuplocation
    initWithPickupLocation_dropOffLocation_rideOptionName_partySize_paymentMethod(pickupLocation: CLPlacemark, dropOffLocation: CLPlacemark, rideOptionName: INSpeakableString, partySize: NSNumber, paymentMethod: INPaymentMethod):INRequestRideIntent;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/1649615-rideoptionname
    rideOptionName(): INSpeakableString;
    setRideOptionName(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/1649610-partysize
    partySize(): NSNumber;
    setPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/1649623-pickuplocation
    pickupLocation(): CLPlacemark;
    setPickupLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/2838714-scheduledpickuptime
    scheduledPickupTime(): INDateComponentsRange;
    setScheduledPickupTime(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/1649618-dropofflocation
    dropOffLocation(): CLPlacemark;
    setDropOffLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintent/2274382-paymentmethod
    paymentMethod(): INPaymentMethod;
    setPaymentMethod(): void;
    //
    alloc():INRequestRideIntent;
    //
    init():INRequestRideIntent;
  }
}

declare const INRequestRideIntent: cocoascript.INRequestRideIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request ride intent.
   * https://developer.apple.com/documentation/sirikit/inrequestrideintentresponse
   */
  interface INRequestRideIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inrequestrideintentresponse/1649171-initwithcode
    initWithCode_userActivity(code: INRequestRideIntentResponseCode, userActivity: NSUserActivity):INRequestRideIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintentresponse/1833290-code
    code(): INRequestRideIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestrideintentresponse/1649156-ridestatus
    rideStatus(): INRideStatus;
    setRideStatus(): void;
    //
    alloc():INRequestRideIntentResponse;
    //
    init():INRequestRideIntentResponse;
  }
}

declare const INRequestRideIntentResponse: cocoascript.INRequestRideIntentResponse;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the ride-booking domain.
   * https://developer.apple.com/documentation/sirikit/inridesharingdomainhandling
   */
  interface INRidesharingDomainHandling extends INCancelRideIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a get user current restaurant reservation bookings intent.
   * https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse
   */
  interface INGetUserCurrentRestaurantReservationBookingsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/2102292-initwithusercurrentbookings
    initWithUserCurrentBookings_code_userActivity(userCurrentBookings: INRestaurantReservationUserBooking, code: INGetUserCurrentRestaurantReservationBookingsIntentResponseCode, userActivity: NSUserActivity):INGetUserCurrentRestaurantReservationBookingsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/1829446-code
    code(): INGetUserCurrentRestaurantReservationBookingsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponse/1648495-usercurrentbookings
    userCurrentBookings(): INRestaurantReservationUserBooking;
    setUserCurrentBookings(): void;
    //
    alloc():INGetUserCurrentRestaurantReservationBookingsIntentResponse;
    //
    init():INGetUserCurrentRestaurantReservationBookingsIntentResponse;
  }
}

declare const INGetUserCurrentRestaurantReservationBookingsIntentResponse: cocoascript.INGetUserCurrentRestaurantReservationBookingsIntentResponse;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the workouts domain.
   * https://developer.apple.com/documentation/sirikit/inworkoutsdomainhandling
   */
  interface INWorkoutsDomainHandling extends INCancelWorkoutIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * A request to resume a paused workout.
   * https://developer.apple.com/documentation/sirikit/inresumeworkoutintent
   */
  interface INResumeWorkoutIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintent/1638965-initwithworkoutname
    initWithWorkoutName(workoutName: INSpeakableString):INResumeWorkoutIntent;
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintent/1639245-workoutname
    workoutName(): INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():INResumeWorkoutIntent;
    //
    init():INResumeWorkoutIntent;
  }
}

declare const INResumeWorkoutIntent: cocoascript.INResumeWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a resume workout intent.
   * https://developer.apple.com/documentation/sirikit/inresumeworkoutintentresponse
   */
  interface INResumeWorkoutIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintentresponse/1638616-initwithcode
    initWithCode_userActivity(code: INResumeWorkoutIntentResponseCode, userActivity: NSUserActivity):INResumeWorkoutIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inresumeworkoutintentresponse/1833295-code
    code(): INResumeWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():INResumeWorkoutIntentResponse;
    //
    init():INResumeWorkoutIntentResponse;
  }
}

declare const INResumeWorkoutIntentResponse: cocoascript.INResumeWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request to append content to a note.
   * https://developer.apple.com/documentation/sirikit/inappendtonoteintent
   */
  interface INAppendToNoteIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintent/2878103-initwithtargetnote
    initWithTargetNote_content(targetNote: INNote, content: INNoteContent):INAppendToNoteIntent;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintent/2873746-content
    content(): INNoteContent;
    setContent(): void;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintent/2878104-targetnote
    targetNote(): INNote;
    setTargetNote(): void;
    //
    alloc():INAppendToNoteIntent;
    //
    init():INAppendToNoteIntent;
  }
}

declare const INAppendToNoteIntent: cocoascript.INAppendToNoteIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to append content to a note.
   * https://developer.apple.com/documentation/sirikit/inappendtonoteintentresponse
   */
  interface INAppendToNoteIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintentresponse/2873878-initwithcode
    initWithCode_userActivity(code: INAppendToNoteIntentResponseCode, userActivity: NSUserActivity):INAppendToNoteIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintentresponse/2873875-code
    code(): INAppendToNoteIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inappendtonoteintentresponse/2873874-note
    note(): INNote;
    setNote(): void;
    //
    alloc():INAppendToNoteIntentResponse;
    //
    init():INAppendToNoteIntentResponse;
  }
}

declare const INAppendToNoteIntentResponse: cocoascript.INAppendToNoteIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the defroster settings in a CarPlay-enabled vehicle.
   * https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintent
   */
  interface INSetDefrosterSettingsInCarIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintent/3019572-initwithenable
    initWithEnable_defroster_carName(enable: NSNumber, defroster: INCarDefroster, carName: INSpeakableString):INSetDefrosterSettingsInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintent/1649426-initwithenable
    initWithEnable_defroster(enable: NSNumber, defroster: INCarDefroster):INSetDefrosterSettingsInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintent/1649424-enable
    enable(): NSNumber;
    setEnable(): void;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintent/1649428-defroster
    defroster(): INCarDefroster;
    setDefroster(): void;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintent/3019571-carname
    carName(): INSpeakableString;
    setCarName(): void;
    //
    alloc():INSetDefrosterSettingsInCarIntent;
    //
    init():INSetDefrosterSettingsInCarIntent;
  }
}

declare const INSetDefrosterSettingsInCarIntent: cocoascript.INSetDefrosterSettingsInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set defroster settings in car intent.
   * https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintentresponse
   */
  interface INSetDefrosterSettingsInCarIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintentresponse/1648507-initwithcode
    initWithCode_userActivity(code: INSetDefrosterSettingsInCarIntentResponseCode, userActivity: NSUserActivity):INSetDefrosterSettingsInCarIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintentresponse/1829409-code
    code(): INSetDefrosterSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetDefrosterSettingsInCarIntentResponse;
    //
    init():INSetDefrosterSettingsInCarIntentResponse;
  }
}

declare const INSetDefrosterSettingsInCarIntentResponse: cocoascript.INSetDefrosterSettingsInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to end the current workout that also validates workout parameters and saves the results.
   * https://developer.apple.com/documentation/sirikit/inendworkoutintent
   */
  interface INEndWorkoutIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inendworkoutintent/1638329-initwithworkoutname
    initWithWorkoutName(workoutName: INSpeakableString):INEndWorkoutIntent;
    // https://developer.apple.com/documentation/sirikit/inendworkoutintent/1638515-workoutname
    workoutName(): INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():INEndWorkoutIntent;
    //
    init():INEndWorkoutIntent;
  }
}

declare const INEndWorkoutIntent: cocoascript.INEndWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to an end workout intent.
   * https://developer.apple.com/documentation/sirikit/inendworkoutintentresponse
   */
  interface INEndWorkoutIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inendworkoutintentresponse/1639429-initwithcode
    initWithCode_userActivity(code: INEndWorkoutIntentResponseCode, userActivity: NSUserActivity):INEndWorkoutIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inendworkoutintentresponse/1833283-code
    code(): INEndWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():INEndWorkoutIntentResponse;
    //
    init():INEndWorkoutIntentResponse;
  }
}

declare const INEndWorkoutIntentResponse: cocoascript.INEndWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request to pause the current workout that also stops the gathering of workout data.
   * https://developer.apple.com/documentation/sirikit/inpauseworkoutintent
   */
  interface INPauseWorkoutIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintent/1639171-initwithworkoutname
    initWithWorkoutName(workoutName: INSpeakableString):INPauseWorkoutIntent;
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintent/1638222-workoutname
    workoutName(): INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():INPauseWorkoutIntent;
    //
    init():INPauseWorkoutIntent;
  }
}

declare const INPauseWorkoutIntent: cocoascript.INPauseWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a pause workout intent.
   * https://developer.apple.com/documentation/sirikit/inpauseworkoutintentresponse
   */
  interface INPauseWorkoutIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintentresponse/1638462-initwithcode
    initWithCode_userActivity(code: INPauseWorkoutIntentResponseCode, userActivity: NSUserActivity):INPauseWorkoutIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inpauseworkoutintentresponse/1829799-code
    code(): INPauseWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():INPauseWorkoutIntentResponse;
    //
    init():INPauseWorkoutIntentResponse;
  }
}

declare const INPauseWorkoutIntentResponse: cocoascript.INPauseWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the default values to use when fetching potential reservation options.
   * https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent/2877495-initwithrestaurant
    initWithRestaurant(restaurant: INRestaurant):INGetAvailableRestaurantReservationBookingDefaultsIntent;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintent/1650053-restaurant
    restaurant(): INRestaurant;
    setRestaurant(): void;
    //
    alloc():INGetAvailableRestaurantReservationBookingDefaultsIntent;
    //
    init():INGetAvailableRestaurantReservationBookingDefaultsIntent;
  }
}

declare const INGetAvailableRestaurantReservationBookingDefaultsIntent: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a get available restaurant reservation booking defaults intent.
   * https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse
   */
  interface INGetAvailableRestaurantReservationBookingDefaultsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/2102588-initwithdefaultpartysize
    initWithDefaultPartySize_defaultBookingDate_code_userActivity(defaultPartySize: NSUInteger, defaultBookingDate: NSDate, code: INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode, userActivity: NSUserActivity):INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1833312-code
    code(): INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1648798-defaultbookingdate
    defaultBookingDate(): NSDate;
    setDefaultBookingDate(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1648799-defaultpartysize
    defaultPartySize(): NSUInteger;
    setDefaultPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1778390-maximumpartysize
    maximumPartySize(): NSNumber;
    setMaximumPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/2102587-minimumpartysize
    minimumPartySize(): NSNumber;
    setMinimumPartySize(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponse/1778384-providerimage
    providerImage(): INImage;
    setProviderImage(): void;
    //
    alloc():INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
    //
    init():INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
  }
}

declare const INGetAvailableRestaurantReservationBookingDefaultsIntentResponse: cocoascript.INGetAvailableRestaurantReservationBookingDefaultsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start an audio or video call with one or more users.
   * https://developer.apple.com/documentation/sirikit/instartcallintent
   */
  interface INStartCallIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3333283-initwithaudioroute
    initWithAudioRoute_destinationType_contacts_recordTypeForRedialing_callCapability(audioRoute: INCallAudioRoute, destinationType: INCallDestinationType, contacts: INPerson, recordTypeForRedialing: INCallRecordType, callCapability: INCallCapability):INStartCallIntent;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3165942-callcapability
    callCapability(): INCallCapability;
    setCallCapability(): void;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3165943-contacts
    contacts(): INPerson;
    setContacts(): void;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3165944-destinationtype
    destinationType(): INCallDestinationType;
    setDestinationType(): void;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3197610-audioroute
    audioRoute(): INCallAudioRoute;
    setAudioRoute(): void;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3333284-recordtypeforredialing
    recordTypeForRedialing(): INCallRecordType;
    setRecordTypeForRedialing(): void;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3649677-initwithcallrecordfilter
    initWithCallRecordFilter_callRecordToCallBack_audioRoute_destinationType_contacts_callCapability(callRecordFilter: INCallRecordFilter, callRecordToCallBack: INCallRecord, audioRoute: INCallAudioRoute, destinationType: INCallDestinationType, contacts: INPerson, callCapability: INCallCapability):INStartCallIntent;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3649675-callrecordfilter
    callRecordFilter(): INCallRecordFilter;
    setCallRecordFilter(): void;
    // https://developer.apple.com/documentation/sirikit/instartcallintent/3649676-callrecordtocallback
    callRecordToCallBack(): INCallRecord;
    setCallRecordToCallBack(): void;
    //
    alloc():INStartCallIntent;
    //
    init():INStartCallIntent;
  }
}

declare const INStartCallIntent: cocoascript.INStartCallIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a start call intent.
   * https://developer.apple.com/documentation/sirikit/instartcallintentresponse
   */
  interface INStartCallIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/instartcallintentresponse/3165954-initwithcode
    initWithCode_userActivity(code: INStartCallIntentResponseCode, userActivity: NSUserActivity):INStartCallIntentResponse;
    // https://developer.apple.com/documentation/sirikit/instartcallintentresponse/3165953-code
    code(): INStartCallIntentResponseCode;
    setCode(): void;
    //
    alloc():INStartCallIntentResponse;
    //
    init():INStartCallIntentResponse;
  }
}

declare const INStartCallIntentResponse: cocoascript.INStartCallIntentResponse;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartcallcallrecordtocallbackunsupportedreason
  type INStartCallCallRecordToCallBackUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A request to start an audio-only call with one or more users.
   * https://developer.apple.com/documentation/sirikit/instartaudiocallintent
   */
  interface INStartAudioCallIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintent/2873773-initwithdestinationtype
    initWithDestinationType_contacts(destinationType: INCallDestinationType, contacts: INPerson):INStartAudioCallIntent;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintent/1638231-initwithcontacts
    initWithContacts(contacts: INPerson):INStartAudioCallIntent;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintent/1638516-contacts
    contacts(): INPerson;
    setContacts(): void;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintent/2873774-destinationtype
    destinationType(): INCallDestinationType;
    setDestinationType(): void;
    //
    alloc():INStartAudioCallIntent;
    //
    init():INStartAudioCallIntent;
  }
}

declare const INStartAudioCallIntent: cocoascript.INStartAudioCallIntent;
declare namespace cocoascript {
  /**
   * Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
   * https://developer.apple.com/documentation/sirikit/incallsdomainhandling
   */
  interface INCallsDomainHandling extends INSearchCallHistoryIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a start audio call intent.
   * https://developer.apple.com/documentation/sirikit/instartaudiocallintentresponse
   */
  interface INStartAudioCallIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintentresponse/1638718-initwithcode
    initWithCode_userActivity(code: INStartAudioCallIntentResponseCode, userActivity: NSUserActivity):INStartAudioCallIntentResponse;
    // https://developer.apple.com/documentation/sirikit/instartaudiocallintentresponse/1823483-code
    code(): INStartAudioCallIntentResponseCode;
    setCode(): void;
    //
    alloc():INStartAudioCallIntentResponse;
    //
    init():INStartAudioCallIntentResponse;
  }
}

declare const INStartAudioCallIntentResponse: cocoascript.INStartAudioCallIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the climate settings in a CarPlay-enabled vehicle.
   * https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent
   */
  interface INSetClimateSettingsInCarIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/3019569-initwithenablefan
    initWithEnableFan_enableAirConditioner_enableClimateControl_enableAutoMode_airCirculationMode_fanSpeedIndex_fanSpeedPercentage_relativeFanSpeedSetting_temperature_relativeTemperatureSetting_climateZone_carName(enableFan: NSNumber, enableAirConditioner: NSNumber, enableClimateControl: NSNumber, enableAutoMode: NSNumber, airCirculationMode: INCarAirCirculationMode, fanSpeedIndex: NSNumber, fanSpeedPercentage: NSNumber, relativeFanSpeedSetting: INRelativeSetting, temperature: NSUnitTemperature, relativeTemperatureSetting: INRelativeSetting, climateZone: INCarSeat, carName: INSpeakableString):INSetClimateSettingsInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/2102611-initwithenablefan
    initWithEnableFan_enableAirConditioner_enableClimateControl_enableAutoMode_airCirculationMode_fanSpeedIndex_fanSpeedPercentage_relativeFanSpeedSetting_temperature_relativeTemperatureSetting_climateZone(enableFan: NSNumber, enableAirConditioner: NSNumber, enableClimateControl: NSNumber, enableAutoMode: NSNumber, airCirculationMode: INCarAirCirculationMode, fanSpeedIndex: NSNumber, fanSpeedPercentage: NSNumber, relativeFanSpeedSetting: INRelativeSetting, temperature: NSUnitTemperature, relativeTemperatureSetting: INRelativeSetting, climateZone: INCarSeat):INSetClimateSettingsInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/3019568-carname
    carName(): INSpeakableString;
    setCarName(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649067-enableclimatecontrol
    enableClimateControl(): NSNumber;
    setEnableClimateControl(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649057-enableautomode
    enableAutoMode(): NSNumber;
    setEnableAutoMode(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649051-aircirculationmode
    airCirculationMode(): INCarAirCirculationMode;
    setAirCirculationMode(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649061-temperature
    temperature(): NSUnitTemperature;
    setTemperature(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649052-relativetemperaturesetting
    relativeTemperatureSetting(): INRelativeSetting;
    setRelativeTemperatureSetting(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/2102612-climatezone
    climateZone(): INCarSeat;
    setClimateZone(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649073-enablefan
    enableFan(): NSNumber;
    setEnableFan(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649072-fanspeedindex
    fanSpeedIndex(): NSNumber;
    setFanSpeedIndex(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649064-fanspeedpercentage
    fanSpeedPercentage(): NSNumber;
    setFanSpeedPercentage(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649063-relativefanspeedsetting
    relativeFanSpeedSetting(): INRelativeSetting;
    setRelativeFanSpeedSetting(): void;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintent/1649054-enableairconditioner
    enableAirConditioner(): NSNumber;
    setEnableAirConditioner(): void;
    //
    alloc():INSetClimateSettingsInCarIntent;
    //
    init():INSetClimateSettingsInCarIntent;
  }
}

declare const INSetClimateSettingsInCarIntent: cocoascript.INSetClimateSettingsInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set climate settings in car intent.
   * https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintentresponse
   */
  interface INSetClimateSettingsInCarIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintentresponse/1649645-initwithcode
    initWithCode_userActivity(code: INSetClimateSettingsInCarIntentResponseCode, userActivity: NSUserActivity):INSetClimateSettingsInCarIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintentresponse/1829405-code
    code(): INSetClimateSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetClimateSettingsInCarIntentResponse;
    //
    init():INSetClimateSettingsInCarIntentResponse;
  }
}

declare const INSetClimateSettingsInCarIntentResponse: cocoascript.INSetClimateSettingsInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request for a visual code to use for exchanging payment and contact information.
   * https://developer.apple.com/documentation/sirikit/ingetvisualcodeintent
   */
  interface INGetVisualCodeIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintent/2873899-initwithvisualcodetype
    initWithVisualCodeType(visualCodeType: INVisualCodeType):INGetVisualCodeIntent;
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintent/2873900-visualcodetype
    visualCodeType(): INVisualCodeType;
    setVisualCodeType(): void;
    //
    alloc():INGetVisualCodeIntent;
    //
    init():INGetVisualCodeIntent;
  }
}

declare const INGetVisualCodeIntent: cocoascript.INGetVisualCodeIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the visual codes domain.
   * https://developer.apple.com/documentation/sirikit/invisualcodedomainhandling
   */
  interface INVisualCodeDomainHandling extends INGetVisualCodeIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a request for a visual code.
   * https://developer.apple.com/documentation/sirikit/ingetvisualcodeintentresponse
   */
  interface INGetVisualCodeIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintentresponse/2874021-initwithcode
    initWithCode_userActivity(code: INGetVisualCodeIntentResponseCode, userActivity: NSUserActivity):INGetVisualCodeIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintentresponse/2874032-code
    code(): INGetVisualCodeIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintentresponse/2874029-visualcodeimage
    visualCodeImage(): INImage;
    setVisualCodeImage(): void;
    //
    alloc():INGetVisualCodeIntentResponse;
    //
    init():INGetVisualCodeIntentResponse;
  }
}

declare const INGetVisualCodeIntentResponse: cocoascript.INGetVisualCodeIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the list of bills matching the specified criteria.
   * https://developer.apple.com/documentation/sirikit/insearchforbillsintent
   */
  interface INSearchForBillsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintent/2798970-initwithbillpayee
    initWithBillPayee_paymentDateRange_billType_status_dueDateRange(billPayee: INBillPayee, paymentDateRange: INDateComponentsRange, billType: INBillType, status: INPaymentStatus, dueDateRange: INDateComponentsRange):INSearchForBillsIntent;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintent/2798975-billpayee
    billPayee(): INBillPayee;
    setBillPayee(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintent/2798974-billtype
    billType(): INBillType;
    setBillType(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintent/2798969-duedaterange
    dueDateRange(): INDateComponentsRange;
    setDueDateRange(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintent/2798976-paymentdaterange
    paymentDateRange(): INDateComponentsRange;
    setPaymentDateRange(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintent/2798980-status
    status(): INPaymentStatus;
    setStatus(): void;
    //
    alloc():INSearchForBillsIntent;
    //
    init():INSearchForBillsIntent;
  }
}

declare const INSearchForBillsIntent: cocoascript.INSearchForBillsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to a search for bills.
   * https://developer.apple.com/documentation/sirikit/insearchforbillsintentresponse
   */
  interface INSearchForBillsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintentresponse/2799219-initwithcode
    initWithCode_userActivity(code: INSearchForBillsIntentResponseCode, userActivity: NSUserActivity):INSearchForBillsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintentresponse/2799216-code
    code(): INSearchForBillsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforbillsintentresponse/2799221-bills
    bills(): INBillDetails;
    setBills(): void;
    //
    alloc():INSearchForBillsIntentResponse;
    //
    init():INSearchForBillsIntentResponse;
  }
}

declare const INSearchForBillsIntentResponse: cocoascript.INSearchForBillsIntentResponse;
declare namespace cocoascript {
  /**
   * An intent for requesting money from another user’s account.
   * https://developer.apple.com/documentation/sirikit/inrequestpaymentintent
   */
  interface INRequestPaymentIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintent/2102241-initwithpayer
    initWithPayer_currencyAmount_note(payer: INPerson, currencyAmount: INCurrencyAmount, note: string | cocoascript.NSString):INRequestPaymentIntent;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintent/1638567-payer
    payer(): INPerson;
    setPayer(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintent/1639090-currencyamount
    currencyAmount(): INCurrencyAmount;
    setCurrencyAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintent/1638628-note
    note(): string | cocoascript.NSString;
    setNote(): void;
    //
    alloc():INRequestPaymentIntent;
    //
    init():INRequestPaymentIntent;
  }
}

declare const INRequestPaymentIntent: cocoascript.INRequestPaymentIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request payment intent.
   * https://developer.apple.com/documentation/sirikit/inrequestpaymentintentresponse
   */
  interface INRequestPaymentIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintentresponse/1638434-initwithcode
    initWithCode_userActivity(code: INRequestPaymentIntentResponseCode, userActivity: NSUserActivity):INRequestPaymentIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintentresponse/1829451-code
    code(): INRequestPaymentIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentintentresponse/1638405-paymentrecord
    paymentRecord(): INPaymentRecord;
    setPaymentRecord(): void;
    //
    alloc():INRequestPaymentIntentResponse;
    //
    init():INRequestPaymentIntentResponse;
  }
}

declare const INRequestPaymentIntentResponse: cocoascript.INRequestPaymentIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the current radio station.
   * https://developer.apple.com/documentation/sirikit/insetradiostationintent
   */
  interface INSetRadioStationIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetradiostationintent/1778276-initwithradiotype
    initWithRadioType_frequency_stationName_channel_presetNumber(radioType: INRadioType, frequency: NSNumber, stationName: string | cocoascript.NSString, channel: string | cocoascript.NSString, presetNumber: NSNumber):INSetRadioStationIntent;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintent/1649472-radiotype
    radioType(): INRadioType;
    setRadioType(): void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintent/1649482-frequency
    frequency(): NSNumber;
    setFrequency(): void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintent/1649478-stationname
    stationName(): string | cocoascript.NSString;
    setStationName(): void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintent/1778274-channel
    channel(): string | cocoascript.NSString;
    setChannel(): void;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintent/1649476-presetnumber
    presetNumber(): NSNumber;
    setPresetNumber(): void;
    //
    alloc():INSetRadioStationIntent;
    //
    init():INSetRadioStationIntent;
  }
}

declare const INSetRadioStationIntent: cocoascript.INSetRadioStationIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the radio domain.
   * https://developer.apple.com/documentation/sirikit/inradiodomainhandling
   */
  interface INRadioDomainHandling extends INSetRadioStationIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a set radio station intent.
   * https://developer.apple.com/documentation/sirikit/insetradiostationintentresponse
   */
  interface INSetRadioStationIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetradiostationintentresponse/1650045-initwithcode
    initWithCode_userActivity(code: INSetRadioStationIntentResponseCode, userActivity: NSUserActivity):INSetRadioStationIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetradiostationintentresponse/1833303-code
    code(): INSetRadioStationIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetRadioStationIntentResponse;
    //
    init():INSetRadioStationIntentResponse;
  }
}

declare const INSetRadioStationIntentResponse: cocoascript.INSetRadioStationIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start a workout for the user.
   * https://developer.apple.com/documentation/sirikit/instartworkoutintent
   */
  interface INStartWorkoutIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/instartworkoutintent/1638948-initwithworkoutname
    initWithWorkoutName_goalValue_workoutGoalUnitType_workoutLocationType_isOpenEnded(workoutName: INSpeakableString, goalValue: NSNumber, workoutGoalUnitType: INWorkoutGoalUnitType, workoutLocationType: INWorkoutLocationType, isOpenEnded: NSNumber):INStartWorkoutIntent;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintent/1639387-workoutname
    workoutName(): INSpeakableString;
    setWorkoutName(): void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintent/1638343-goalvalue
    goalValue(): NSNumber;
    setGoalValue(): void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintent/1639319-workoutgoalunittype
    workoutGoalUnitType(): INWorkoutGoalUnitType;
    setWorkoutGoalUnitType(): void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintent/1638964-workoutlocationtype
    workoutLocationType(): INWorkoutLocationType;
    setWorkoutLocationType(): void;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintent/1638370-isopenended
    isOpenEnded(): NSNumber;
    setIsOpenEnded(): void;
    //
    alloc():INStartWorkoutIntent;
    //
    init():INStartWorkoutIntent;
  }
}

declare const INStartWorkoutIntent: cocoascript.INStartWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a start workout intent.
   * https://developer.apple.com/documentation/sirikit/instartworkoutintentresponse
   */
  interface INStartWorkoutIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/instartworkoutintentresponse/1638220-initwithcode
    initWithCode_userActivity(code: INStartWorkoutIntentResponseCode, userActivity: NSUserActivity):INStartWorkoutIntentResponse;
    // https://developer.apple.com/documentation/sirikit/instartworkoutintentresponse/1833305-code
    code(): INStartWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():INStartWorkoutIntentResponse;
    //
    init():INStartWorkoutIntentResponse;
  }
}

declare const INStartWorkoutIntentResponse: cocoascript.INStartWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * A request to start a video call with one or more users.
   * https://developer.apple.com/documentation/sirikit/instartvideocallintent
   */
  interface INStartVideoCallIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/instartvideocallintent/1638541-initwithcontacts
    initWithContacts(contacts: INPerson):INStartVideoCallIntent;
    // https://developer.apple.com/documentation/sirikit/instartvideocallintent/1639126-contacts
    contacts(): INPerson;
    setContacts(): void;
    //
    alloc():INStartVideoCallIntent;
    //
    init():INStartVideoCallIntent;
  }
}

declare const INStartVideoCallIntent: cocoascript.INStartVideoCallIntent;
declare namespace cocoascript {
  /**
   * Your response to a start video call intent.
   * https://developer.apple.com/documentation/sirikit/instartvideocallintentresponse
   */
  interface INStartVideoCallIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/instartvideocallintentresponse/1639246-initwithcode
    initWithCode_userActivity(code: INStartVideoCallIntentResponseCode, userActivity: NSUserActivity):INStartVideoCallIntentResponse;
    // https://developer.apple.com/documentation/sirikit/instartvideocallintentresponse/1823493-code
    code(): INStartVideoCallIntentResponseCode;
    setCode(): void;
    //
    alloc():INStartVideoCallIntentResponse;
    //
    init():INStartVideoCallIntentResponse;
  }
}

declare const INStartVideoCallIntentResponse: cocoascript.INStartVideoCallIntentResponse;
declare namespace cocoascript {
  /**
   * A view controller that guides the user through the steps for adding a shortcut to Siri.
   * https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutviewcontroller
   */
  interface INUIAddVoiceShortcutViewController extends UIViewController {
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutviewcontroller/2999415-initwithshortcut
    initWithShortcut(shortcut: INShortcut):INUIAddVoiceShortcutViewController;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutviewcontroller/2968467-delegate
    delegate(): INUIAddVoiceShortcutViewControllerDelegate;
    setDelegate(): void;
    //
    alloc():INUIAddVoiceShortcutViewController;
    //
    init():INUIAddVoiceShortcutViewController;
  }
}

declare const INUIAddVoiceShortcutViewController: cocoascript.INUIAddVoiceShortcutViewController;
declare namespace cocoascript {
  /**
   * A request to activate the signals on the user’s car.
   * https://developer.apple.com/documentation/sirikit/inactivatecarsignalintent
   */
  interface INActivateCarSignalIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintent/2799261-initwithcarname
    initWithCarName_signals(carName: INSpeakableString, signals: INCarSignalOptions):INActivateCarSignalIntent;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintent/2799260-carname
    carName(): INSpeakableString;
    setCarName(): void;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintent/2799255-signals
    signals(): INCarSignalOptions;
    setSignals(): void;
    //
    alloc():INActivateCarSignalIntent;
    //
    init():INActivateCarSignalIntent;
  }
}

declare const INActivateCarSignalIntent: cocoascript.INActivateCarSignalIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all the handling protocols in the car commands domain.
   * https://developer.apple.com/documentation/sirikit/incarcommandsdomainhandling
   */
  interface INCarCommandsDomainHandling extends INActivateCarSignalIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a request to activate a car’s signals.
   * https://developer.apple.com/documentation/sirikit/inactivatecarsignalintentresponse
   */
  interface INActivateCarSignalIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintentresponse/2798997-initwithcode
    initWithCode_userActivity(code: INActivateCarSignalIntentResponseCode, userActivity: NSUserActivity):INActivateCarSignalIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintentresponse/2799003-code
    code(): INActivateCarSignalIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintentresponse/2798994-signals
    signals(): INCarSignalOptions;
    setSignals(): void;
    //
    alloc():INActivateCarSignalIntentResponse;
    //
    init():INActivateCarSignalIntentResponse;
  }
}

declare const INActivateCarSignalIntentResponse: cocoascript.INActivateCarSignalIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the list of photos that match the specified criteria.
   * https://developer.apple.com/documentation/sirikit/insearchforphotosintent
   */
  interface INSearchForPhotosIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638173-initwithdatecreated
    initWithDateCreated_locationCreated_albumName_searchTerms_includedAttributes_excludedAttributes_peopleInPhoto(dateCreated: INDateComponentsRange, locationCreated: CLPlacemark, albumName: string | cocoascript.NSString, searchTerms: string | cocoascript.NSString, includedAttributes: INPhotoAttributeOptions, excludedAttributes: INPhotoAttributeOptions, peopleInPhoto: INPerson):INSearchForPhotosIntent;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1639439-peopleinphoto
    peopleInPhoto(): INPerson;
    setPeopleInPhoto(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638821-peopleinphotooperator
    peopleInPhotoOperator(): INConditionalOperator;
    setPeopleInPhotoOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638728-searchterms
    searchTerms(): string | cocoascript.NSString;
    setSearchTerms(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1639233-searchtermsoperator
    searchTermsOperator(): INConditionalOperator;
    setSearchTermsOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1639043-datecreated
    dateCreated(): INDateComponentsRange;
    setDateCreated(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638736-locationcreated
    locationCreated(): CLPlacemark;
    setLocationCreated(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638234-albumname
    albumName(): string | cocoascript.NSString;
    setAlbumName(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638191-includedattributes
    includedAttributes(): INPhotoAttributeOptions;
    setIncludedAttributes(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintent/1638212-excludedattributes
    excludedAttributes(): INPhotoAttributeOptions;
    setExcludedAttributes(): void;
    //
    alloc():INSearchForPhotosIntent;
    //
    init():INSearchForPhotosIntent;
  }
}

declare const INSearchForPhotosIntent: cocoascript.INSearchForPhotosIntent;
declare namespace cocoascript {
  /**
   * An interface for adopting all of the protocols in the photos domain.
   * https://developer.apple.com/documentation/sirikit/inphotosdomainhandling
   */
  interface INPhotosDomainHandling extends INSearchForPhotosIntentHandling {
  }
}
declare namespace cocoascript {
  /**
   * Your app’s response to a search for photos intent.
   * https://developer.apple.com/documentation/sirikit/insearchforphotosintentresponse
   */
  interface INSearchForPhotosIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintentresponse/1638236-initwithcode
    initWithCode_userActivity(code: INSearchForPhotosIntentResponseCode, userActivity: NSUserActivity):INSearchForPhotosIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintentresponse/1833286-code
    code(): INSearchForPhotosIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforphotosintentresponse/1639111-searchresultscount
    searchResultsCount(): NSNumber;
    setSearchResultsCount(): void;
    //
    alloc():INSearchForPhotosIntentResponse;
    //
    init():INSearchForPhotosIntentResponse;
  }
}

declare const INSearchForPhotosIntentResponse: cocoascript.INSearchForPhotosIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the current status of a previously booked ride.
   * https://developer.apple.com/documentation/sirikit/ingetridestatusintent
   */
  interface INGetRideStatusIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintent/1649847-init
    init():INGetRideStatusIntent;
    //
    alloc():INGetRideStatusIntent;
    //
    init():INGetRideStatusIntent;
  }
}

declare const INGetRideStatusIntent: cocoascript.INGetRideStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a get ride status intent.
   * https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponse
   */
  interface INGetRideStatusIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponse/1648160-initwithcode
    initWithCode_userActivity(code: INGetRideStatusIntentResponseCode, userActivity: NSUserActivity):INGetRideStatusIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponse/1830547-code
    code(): INGetRideStatusIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponse/1648161-ridestatus
    rideStatus(): INRideStatus;
    setRideStatus(): void;
    //
    alloc():INGetRideStatusIntentResponse;
    //
    init():INGetRideStatusIntentResponse;
  }
}

declare const INGetRideStatusIntentResponse: cocoascript.INGetRideStatusIntentResponse;
declare namespace cocoascript {
  /**
   * An intent requesting the cancellation of a previously booked ride.
   * https://developer.apple.com/documentation/sirikit/incancelrideintent
   */
  interface INCancelRideIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/incancelrideintent/2875693-initwithrideidentifier
    initWithRideIdentifier(rideIdentifier: string | cocoascript.NSString):INCancelRideIntent;
    // https://developer.apple.com/documentation/sirikit/incancelrideintent/2875648-rideidentifier
    rideIdentifier(): string | cocoascript.NSString;
    setRideIdentifier(): void;
    //
    alloc():INCancelRideIntent;
    //
    init():INCancelRideIntent;
  }
}

declare const INCancelRideIntent: cocoascript.INCancelRideIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a cancel ride intent.
   * https://developer.apple.com/documentation/sirikit/incancelrideintentresponse
   */
  interface INCancelRideIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/incancelrideintentresponse/2875682-initwithcode
    initWithCode_userActivity(code: INCancelRideIntentResponseCode, userActivity: NSUserActivity):INCancelRideIntentResponse;
    // https://developer.apple.com/documentation/sirikit/incancelrideintentresponse/2875627-code
    code(): INCancelRideIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/incancelrideintentresponse/2875694-cancellationfee
    cancellationFee(): INCurrencyAmount;
    setCancellationFee(): void;
    // https://developer.apple.com/documentation/sirikit/incancelrideintentresponse/2875684-cancellationfeethreshold
    cancellationFeeThreshold(): NSDateComponents;
    setCancellationFeeThreshold(): void;
    //
    alloc():INCancelRideIntentResponse;
    //
    init():INCancelRideIntentResponse;
  }
}

declare const INCancelRideIntentResponse: cocoascript.INCancelRideIntentResponse;
declare namespace cocoascript {
  /**
   * A request to lock or unlock the user’s car.
   * https://developer.apple.com/documentation/sirikit/insetcarlockstatusintent
   */
  interface INSetCarLockStatusIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintent/2799283-initwithlocked
    initWithLocked_carName(locked: NSNumber, carName: INSpeakableString):INSetCarLockStatusIntent;
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintent/2799285-carname
    carName(): INSpeakableString;
    setCarName(): void;
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintent/2799289-locked
    locked(): NSNumber;
    setLocked(): void;
    //
    alloc():INSetCarLockStatusIntent;
    //
    init():INSetCarLockStatusIntent;
  }
}

declare const INSetCarLockStatusIntent: cocoascript.INSetCarLockStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to lock or unlock the car.
   * https://developer.apple.com/documentation/sirikit/insetcarlockstatusintentresponse
   */
  interface INSetCarLockStatusIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintentresponse/2799303-initwithcode
    initWithCode_userActivity(code: INSetCarLockStatusIntentResponseCode, userActivity: NSUserActivity):INSetCarLockStatusIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintentresponse/2799302-code
    code(): INSetCarLockStatusIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetCarLockStatusIntentResponse;
    //
    init():INSetCarLockStatusIntentResponse;
  }
}

declare const INSetCarLockStatusIntentResponse: cocoascript.INSetCarLockStatusIntentResponse;
declare namespace cocoascript {
  /**
   * A request to search for a media item.
   * https://developer.apple.com/documentation/sirikit/insearchformediaintent
   */
  interface INSearchForMediaIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchformediaintent/3180152-initwithmediaitems
    initWithMediaItems_mediaSearch(mediaItems: INMediaItem, mediaSearch: INMediaSearch):INSearchForMediaIntent;
    // https://developer.apple.com/documentation/sirikit/insearchformediaintent/3180153-mediaitems
    mediaItems(): INMediaItem;
    setMediaItems(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformediaintent/3074295-mediasearch
    mediaSearch(): INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():INSearchForMediaIntent;
    //
    init():INSearchForMediaIntent;
  }
}

declare const INSearchForMediaIntent: cocoascript.INSearchForMediaIntent;
declare namespace cocoascript {
  /**
   * An intents handler’s response to a search media intent.
   * https://developer.apple.com/documentation/sirikit/insearchformediaintentresponse
   */
  interface INSearchForMediaIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchformediaintentresponse/3074301-initwithcode
    initWithCode_userActivity(code: INSearchForMediaIntentResponseCode, userActivity: NSUserActivity):INSearchForMediaIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchformediaintentresponse/3074300-code
    code(): INSearchForMediaIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformediaintentresponse/3074302-mediaitems
    mediaItems(): INMediaItem;
    setMediaItems(): void;
    //
    alloc():INSearchForMediaIntentResponse;
    //
    init():INSearchForMediaIntentResponse;
  }
}

declare const INSearchForMediaIntentResponse: cocoascript.INSearchForMediaIntentResponse;
declare namespace cocoascript {
  /**
   * A request for the current power level of the user’s car.
   * https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintent
   */
  interface INGetCarPowerLevelStatusIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintent/2799243-initwithcarname
    initWithCarName(carName: INSpeakableString):INGetCarPowerLevelStatusIntent;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintent/2799245-carname
    carName(): INSpeakableString;
    setCarName(): void;
    //
    alloc():INGetCarPowerLevelStatusIntent;
    //
    init():INGetCarPowerLevelStatusIntent;
  }
}

declare const INGetCarPowerLevelStatusIntent: cocoascript.INGetCarPowerLevelStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request for the vehicle power level.
   * https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse
   */
  interface INGetCarPowerLevelStatusIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799147-initwithcode
    initWithCode_userActivity(code: INGetCarPowerLevelStatusIntentResponseCode, userActivity: NSUserActivity):INGetCarPowerLevelStatusIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799150-code
    code(): INGetCarPowerLevelStatusIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552171-caridentifier
    carIdentifier(): string | cocoascript.NSString;
    setCarIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799139-chargepercentremaining
    chargePercentRemaining(): NSNumber;
    setChargePercentRemaining(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799138-fuelpercentremaining
    fuelPercentRemaining(): NSNumber;
    setFuelPercentRemaining(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674226-maximumdistance
    maximumDistance(): NSUnitLength;
    setMaximumDistance(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/2799141-distanceremaining
    distanceRemaining(): NSUnitLength;
    setDistanceRemaining(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674227-maximumdistanceelectric
    maximumDistanceElectric(): NSUnitLength;
    setMaximumDistanceElectric(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552176-distanceremainingelectric
    distanceRemainingElectric(): NSUnitLength;
    setDistanceRemainingElectric(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674228-maximumdistancefuel
    maximumDistanceFuel(): NSUnitLength;
    setMaximumDistanceFuel(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674224-distanceremainingfuel
    distanceRemainingFuel(): NSUnitLength;
    setDistanceRemainingFuel(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552170-activeconnector
    activeConnector(): INCarChargingConnectorType;
    setActiveConnector(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3017318-charging
    charging(): NSNumber;
    setCharging(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3017319-minutestofull
    minutesToFull(): NSNumber;
    setMinutesToFull(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552175-dateoflaststateupdate
    dateOfLastStateUpdate(): NSDateComponents;
    setDateOfLastStateUpdate(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674229-minimumbatterycapacity
    minimumBatteryCapacity(): NSUnitEnergy;
    setMinimumBatteryCapacity(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3674225-maximumbatterycapacity
    maximumBatteryCapacity(): NSUnitEnergy;
    setMaximumBatteryCapacity(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552174-currentbatterycapacity
    currentBatteryCapacity(): NSUnitEnergy;
    setCurrentBatteryCapacity(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552172-chargingformulaarguments
    chargingFormulaArguments(): id;
    setChargingFormulaArguments(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponse/3552173-consumptionformulaarguments
    consumptionFormulaArguments(): id;
    setConsumptionFormulaArguments(): void;
    //
    alloc():INGetCarPowerLevelStatusIntentResponse;
    //
    init():INGetCarPowerLevelStatusIntentResponse;
  }
}

declare const INGetCarPowerLevelStatusIntentResponse: cocoascript.INGetCarPowerLevelStatusIntentResponse;
declare namespace cocoascript {
  /**
   * A view controller that lets the user edit or remove an existing shortcut.
   * https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontroller
   */
  interface INUIEditVoiceShortcutViewController extends UIViewController {
    // https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontroller/2981853-initwithvoiceshortcut
    initWithVoiceShortcut(voiceShortcut: INVoiceShortcut):INUIEditVoiceShortcutViewController;
    // https://developer.apple.com/documentation/sirikit/inuieditvoiceshortcutviewcontroller/2968473-delegate
    delegate(): INUIEditVoiceShortcutViewControllerDelegate;
    setDelegate(): void;
    //
    alloc():INUIEditVoiceShortcutViewController;
    //
    init():INUIEditVoiceShortcutViewController;
  }
}

declare const INUIEditVoiceShortcutViewController: cocoascript.INUIEditVoiceShortcutViewController;
declare namespace cocoascript {
  /**
   * A request for information about the guest who is making reservations.
   * https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintent
   */
  interface INGetRestaurantGuestIntent extends INIntent {
    //
    alloc():INGetRestaurantGuestIntent;
    //
    init():INGetRestaurantGuestIntent;
  }
}

declare const INGetRestaurantGuestIntent: cocoascript.INGetRestaurantGuestIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a get restaurant guest intent.
   * https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintentresponse
   */
  interface INGetRestaurantGuestIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintentresponse/1833301-initwithcode
    initWithCode_userActivity(code: INGetRestaurantGuestIntentResponseCode, userActivity: NSUserActivity):INGetRestaurantGuestIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintentresponse/1833300-code
    code(): INGetRestaurantGuestIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintentresponse/1778393-guest
    guest(): INRestaurantGuest;
    setGuest(): void;
    // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintentresponse/2102599-guestdisplaypreferences
    guestDisplayPreferences(): INRestaurantGuestDisplayPreferences;
    setGuestDisplayPreferences(): void;
    //
    alloc():INGetRestaurantGuestIntentResponse;
    //
    init():INGetRestaurantGuestIntentResponse;
  }
}

declare const INGetRestaurantGuestIntentResponse: cocoascript.INGetRestaurantGuestIntentResponse;
declare namespace cocoascript {
  /**
   * A request for information about the user’s accounts in your app.
   * https://developer.apple.com/documentation/sirikit/insearchforaccountsintent
   */
  interface INSearchForAccountsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintent/2867916-initwithaccountnickname
    initWithAccountNickname_accountType_organizationName_requestedBalanceType(accountNickname: INSpeakableString, accountType: INAccountType, organizationName: INSpeakableString, requestedBalanceType: INBalanceType):INSearchForAccountsIntent;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintent/2867912-accountnickname
    accountNickname(): INSpeakableString;
    setAccountNickname(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintent/2867910-accounttype
    accountType(): INAccountType;
    setAccountType(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintent/2867917-organizationname
    organizationName(): INSpeakableString;
    setOrganizationName(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintent/2867918-requestedbalancetype
    requestedBalanceType(): INBalanceType;
    setRequestedBalanceType(): void;
    //
    alloc():INSearchForAccountsIntent;
    //
    init():INSearchForAccountsIntent;
  }
}

declare const INSearchForAccountsIntent: cocoascript.INSearchForAccountsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to search for account information.
   * https://developer.apple.com/documentation/sirikit/insearchforaccountsintentresponse
   */
  interface INSearchForAccountsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintentresponse/2867968-initwithcode
    initWithCode_userActivity(code: INSearchForAccountsIntentResponseCode, userActivity: NSUserActivity):INSearchForAccountsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintentresponse/2867969-code
    code(): INSearchForAccountsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchforaccountsintentresponse/2867970-accounts
    accounts(): INPaymentAccount;
    setAccounts(): void;
    //
    alloc():INSearchForAccountsIntentResponse;
    //
    init():INSearchForAccountsIntentResponse;
  }
}

declare const INSearchForAccountsIntentResponse: cocoascript.INSearchForAccountsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the user’s vehicle environment settings to the ones from the specified profile.
   * https://developer.apple.com/documentation/sirikit/insetprofileincarintent
   */
  interface INSetProfileInCarIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/3019575-initwithprofilenumber
    initWithProfileNumber_profileName_defaultProfile_carName(profileNumber: NSNumber, profileName: string | cocoascript.NSString, defaultProfile: NSNumber, carName: INSpeakableString):INSetProfileInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/2102250-defaultprofile
    defaultProfile(): NSNumber;
    setDefaultProfile(): void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/2726869-profilename
    profileName(): string | cocoascript.NSString;
    setProfileName(): void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/2102254-profilelabel
    profileLabel(): string | cocoascript.NSString;
    setProfileLabel(): void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/2102248-profilenumber
    profileNumber(): NSNumber;
    setProfileNumber(): void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/3019574-carname
    carName(): INSpeakableString;
    setCarName(): void;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/2726871-initwithprofilenumber
    initWithProfileNumber_profileName_defaultProfile(profileNumber: NSNumber, profileName: string | cocoascript.NSString, defaultProfile: NSNumber):INSetProfileInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintent/2102245-initwithprofilenumber
    initWithProfileNumber_profileLabel_defaultProfile(profileNumber: NSNumber, profileLabel: string | cocoascript.NSString, defaultProfile: NSNumber):INSetProfileInCarIntent;
    //
    alloc():INSetProfileInCarIntent;
    //
    init():INSetProfileInCarIntent;
  }
}

declare const INSetProfileInCarIntent: cocoascript.INSetProfileInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set profile in car intent.
   * https://developer.apple.com/documentation/sirikit/insetprofileincarintentresponse
   */
  interface INSetProfileInCarIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintentresponse/2102641-initwithcode
    initWithCode_userActivity(code: INSetProfileInCarIntentResponseCode, userActivity: NSUserActivity):INSetProfileInCarIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetprofileincarintentresponse/2102634-code
    code(): INSetProfileInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetProfileInCarIntentResponse;
    //
    init():INSetProfileInCarIntentResponse;
  }
}

declare const INSetProfileInCarIntentResponse: cocoascript.INSetProfileInCarIntentResponse;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inuiinteractivebehavior
  type INUIInteractiveBehavior = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inuihostedviewcontext
  type INUIHostedViewContext = cocoascript.NSUInteger;
}
// https://developer.apple.com/documentation/sirikit/intentsuiversionstring
declare const IntentsUIVersionString: string;
declare namespace cocoascript {
  /**
   * A request to search for notes, tasks, and reminders.
   * https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent
   */
  interface INSearchForNotebookItemsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/3141829-initwithtitle
    initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType_temporalEventTriggerTypes_taskPriority_notebookItemIdentifier(title: INSpeakableString, content: string | cocoascript.NSString, itemType: INNotebookItemType, status: INTaskStatus, location: CLPlacemark, locationSearchType: INLocationSearchType, dateTime: INDateComponentsRange, dateSearchType: INDateSearchType, temporalEventTriggerTypes: INTemporalEventTriggerTypeOptions, taskPriority: INTaskPriority, notebookItemIdentifier: string | cocoascript.NSString):INSearchForNotebookItemsIntent;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2935526-initwithtitle
    initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType_notebookItemIdentifier(title: INSpeakableString, content: string | cocoascript.NSString, itemType: INNotebookItemType, status: INTaskStatus, location: CLPlacemark, locationSearchType: INLocationSearchType, dateTime: INDateComponentsRange, dateSearchType: INDateSearchType, notebookItemIdentifier: string | cocoascript.NSString):INSearchForNotebookItemsIntent;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875705-initwithtitle
    initWithTitle_content_itemType_status_location_locationSearchType_dateTime_dateSearchType(title: INSpeakableString, content: string | cocoascript.NSString, itemType: INNotebookItemType, status: INTaskStatus, location: CLPlacemark, locationSearchType: INLocationSearchType, dateTime: INDateComponentsRange, dateSearchType: INDateSearchType):INSearchForNotebookItemsIntent;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875589-itemtype
    itemType(): INNotebookItemType;
    setItemType(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875610-title
    title(): INSpeakableString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875644-content
    content(): string | cocoascript.NSString;
    setContent(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875588-status
    status(): INTaskStatus;
    setStatus(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875647-location
    location(): CLPlacemark;
    setLocation(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875602-locationsearchtype
    locationSearchType(): INLocationSearchType;
    setLocationSearchType(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875608-datetime
    dateTime(): INDateComponentsRange;
    setDateTime(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2875615-datesearchtype
    dateSearchType(): INDateSearchType;
    setDateSearchType(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/2935527-notebookitemidentifier
    notebookItemIdentifier(): string | cocoascript.NSString;
    setNotebookItemIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/3141830-taskpriority
    taskPriority(): INTaskPriority;
    setTaskPriority(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintent/3141831-temporaleventtriggertypes
    temporalEventTriggerTypes(): INTemporalEventTriggerTypeOptions;
    setTemporalEventTriggerTypes(): void;
    //
    alloc():INSearchForNotebookItemsIntent;
    //
    init():INSearchForNotebookItemsIntent;
  }
}

declare const INSearchForNotebookItemsIntent: cocoascript.INSearchForNotebookItemsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to search for notes, tasks, or reminders.
   * https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse
   */
  interface INSearchForNotebookItemsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse/2875685-initwithcode
    initWithCode_userActivity(code: INSearchForNotebookItemsIntentResponseCode, userActivity: NSUserActivity):INSearchForNotebookItemsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse/2875668-code
    code(): INSearchForNotebookItemsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse/2875669-notes
    notes(): INNote;
    setNotes(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse/2875616-tasklists
    taskLists(): INTaskList;
    setTaskLists(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse/2875664-tasks
    tasks(): INTask;
    setTasks(): void;
    // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponse/2875676-sorttype
    sortType(): INSortType;
    setSortType(): void;
    //
    alloc():INSearchForNotebookItemsIntentResponse;
    //
    init():INSearchForNotebookItemsIntentResponse;
  }
}

declare const INSearchForNotebookItemsIntentResponse: cocoascript.INSearchForNotebookItemsIntentResponse;
declare namespace cocoascript {
  /**
   * An intent for getting the types of rides available from a ride-booking service.
   * https://developer.apple.com/documentation/sirikit/inlistrideoptionsintent
   */
  interface INListRideOptionsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintent/1648131-initwithpickuplocation
    initWithPickupLocation_dropOffLocation(pickupLocation: CLPlacemark, dropOffLocation: CLPlacemark):INListRideOptionsIntent;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintent/1648136-pickuplocation
    pickupLocation(): CLPlacemark;
    setPickupLocation(): void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintent/1648133-dropofflocation
    dropOffLocation(): CLPlacemark;
    setDropOffLocation(): void;
    //
    alloc():INListRideOptionsIntent;
    //
    init():INListRideOptionsIntent;
  }
}

declare const INListRideOptionsIntent: cocoascript.INListRideOptionsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a list ride options intent.
   * https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponse
   */
  interface INListRideOptionsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponse/1648791-initwithcode
    initWithCode_userActivity(code: INListRideOptionsIntentResponseCode, userActivity: NSUserActivity):INListRideOptionsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponse/1833313-code
    code(): INListRideOptionsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponse/1648795-rideoptions
    rideOptions(): INRideOption;
    setRideOptions(): void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponse/1648792-expirationdate
    expirationDate(): NSDate;
    setExpirationDate(): void;
    // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponse/1648786-paymentmethods
    paymentMethods(): INPaymentMethod;
    setPaymentMethods(): void;
    //
    alloc():INListRideOptionsIntentResponse;
    //
    init():INListRideOptionsIntentResponse;
  }
}

declare const INListRideOptionsIntentResponse: cocoascript.INListRideOptionsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to cancel an active workout.
   * https://developer.apple.com/documentation/sirikit/incancelworkoutintent
   */
  interface INCancelWorkoutIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintent/1639027-initwithworkoutname
    initWithWorkoutName(workoutName: INSpeakableString):INCancelWorkoutIntent;
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintent/1638739-workoutname
    workoutName(): INSpeakableString;
    setWorkoutName(): void;
    //
    alloc():INCancelWorkoutIntent;
    //
    init():INCancelWorkoutIntent;
  }
}

declare const INCancelWorkoutIntent: cocoascript.INCancelWorkoutIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a cancel workout intent.
   * https://developer.apple.com/documentation/sirikit/incancelworkoutintentresponse
   */
  interface INCancelWorkoutIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintentresponse/1638270-initwithcode
    initWithCode_userActivity(code: INCancelWorkoutIntentResponseCode, userActivity: NSUserActivity):INCancelWorkoutIntentResponse;
    // https://developer.apple.com/documentation/sirikit/incancelworkoutintentresponse/1833315-code
    code(): INCancelWorkoutIntentResponseCode;
    setCode(): void;
    //
    alloc():INCancelWorkoutIntentResponse;
    //
    init():INCancelWorkoutIntentResponse;
  }
}

declare const INCancelWorkoutIntentResponse: cocoascript.INCancelWorkoutIntentResponse;
declare namespace cocoascript {
  /**
   * An intent for retrieving a list of the user’s electric vehicles.
   * https://developer.apple.com/documentation/sirikit/inlistcarsintent
   */
  interface INListCarsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inlistcarsintent/3552189-init
    init():INListCarsIntent;
    //
    alloc():INListCarsIntent;
    //
    init():INListCarsIntent;
  }
}

declare const INListCarsIntent: cocoascript.INListCarsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to list the user’s electric vehicles.
   * https://developer.apple.com/documentation/sirikit/inlistcarsintentresponse
   */
  interface INListCarsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inlistcarsintentresponse/3552196-initwithcode
    initWithCode_userActivity(code: INListCarsIntentResponseCode, userActivity: NSUserActivity):INListCarsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inlistcarsintentresponse/3552195-code
    code(): INListCarsIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inlistcarsintentresponse/3552194-cars
    cars(): INCar;
    setCars(): void;
    //
    alloc():INListCarsIntentResponse;
    //
    init():INListCarsIntentResponse;
  }
}

declare const INListCarsIntentResponse: cocoascript.INListCarsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to create a new task list.
   * https://developer.apple.com/documentation/sirikit/increatetasklistintent
   */
  interface INCreateTaskListIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/increatetasklistintent/2873994-initwithtitle
    initWithTitle_taskTitles_groupName(title: INSpeakableString, taskTitles: INSpeakableString, groupName: INSpeakableString):INCreateTaskListIntent;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintent/2873997-title
    title(): INSpeakableString;
    setTitle(): void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintent/2873992-tasktitles
    taskTitles(): INSpeakableString;
    setTaskTitles(): void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintent/2873999-groupname
    groupName(): INSpeakableString;
    setGroupName(): void;
    //
    alloc():INCreateTaskListIntent;
    //
    init():INCreateTaskListIntent;
  }
}

declare const INCreateTaskListIntent: cocoascript.INCreateTaskListIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to create a task list.
   * https://developer.apple.com/documentation/sirikit/increatetasklistintentresponse
   */
  interface INCreateTaskListIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/increatetasklistintentresponse/2874148-initwithcode
    initWithCode_userActivity(code: INCreateTaskListIntentResponseCode, userActivity: NSUserActivity):INCreateTaskListIntentResponse;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintentresponse/2874147-code
    code(): INCreateTaskListIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/increatetasklistintentresponse/2880162-createdtasklist
    createdTaskList(): INTaskList;
    setCreatedTaskList(): void;
    //
    alloc():INCreateTaskListIntentResponse;
    //
    init():INCreateTaskListIntentResponse;
  }
}

declare const INCreateTaskListIntentResponse: cocoascript.INCreateTaskListIntentResponse;
declare namespace cocoascript {
  /**
   * An intent indicating that the user provided feedback for a completed ride.
   * https://developer.apple.com/documentation/sirikit/insendridefeedbackintent
   */
  interface INSendRideFeedbackIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintent/2875687-initwithrideidentifier
    initWithRideIdentifier(rideIdentifier: string | cocoascript.NSString):INSendRideFeedbackIntent;
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintent/2875663-rideidentifier
    rideIdentifier(): string | cocoascript.NSString;
    setRideIdentifier(): void;
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintent/2875638-rating
    rating(): NSNumber;
    setRating(): void;
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintent/2875625-tip
    tip(): INCurrencyAmount;
    setTip(): void;
    //
    alloc():INSendRideFeedbackIntent;
    //
    init():INSendRideFeedbackIntent;
  }
}

declare const INSendRideFeedbackIntent: cocoascript.INSendRideFeedbackIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a send ride feedback intent.
   * https://developer.apple.com/documentation/sirikit/insendridefeedbackintentresponse
   */
  interface INSendRideFeedbackIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintentresponse/2875679-initwithcode
    initWithCode_userActivity(code: INSendRideFeedbackIntentResponseCode, userActivity: NSUserActivity):INSendRideFeedbackIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insendridefeedbackintentresponse/2875626-code
    code(): INSendRideFeedbackIntentResponseCode;
    setCode(): void;
    //
    alloc():INSendRideFeedbackIntentResponse;
    //
    init():INSendRideFeedbackIntentResponse;
  }
}

declare const INSendRideFeedbackIntentResponse: cocoascript.INSendRideFeedbackIntentResponse;
declare namespace cocoascript {
  /**
   * Your app’s response to a send message intent.
   * https://developer.apple.com/documentation/sirikit/insendmessageintentresponse
   */
  interface INSendMessageIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insendmessageintentresponse/1638961-initwithcode
    initWithCode_userActivity(code: INSendMessageIntentResponseCode, userActivity: NSUserActivity):INSendMessageIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insendmessageintentresponse/1823491-code
    code(): INSendMessageIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insendmessageintentresponse/2875672-sentmessage
    sentMessage(): INMessage;
    setSentMessage(): void;
    //
    alloc():INSendMessageIntentResponse;
    //
    init():INSendMessageIntentResponse;
  }
}

declare const INSendMessageIntentResponse: cocoascript.INSendMessageIntentResponse;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inoutgoingmessagetype
  type INOutgoingMessageType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/sirikit/insendmessageattachment
   */
  interface INSendMessageAttachment extends NSObject {
    // https://developer.apple.com/documentation/sirikit/insendmessageattachment/3621860-attachmentwithaudiomessagefile
    attachmentWithAudioMessageFile(audioMessageFile: INFile):INSendMessageAttachment;
    // https://developer.apple.com/documentation/sirikit/insendmessageattachment/3621861-audiomessagefile
    audioMessageFile(): INFile;
    setAudioMessageFile(): void;
    //
    alloc():INSendMessageAttachment;
    //
    init():INSendMessageAttachment;
  }
}

declare const INSendMessageAttachment: cocoascript.INSendMessageAttachment;
declare namespace cocoascript {
  /**
   * A request to search for photos and initiate a slideshow with the results.
   * https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent
   */
  interface INStartPhotoPlaybackIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638354-initwithdatecreated
    initWithDateCreated_locationCreated_albumName_searchTerms_includedAttributes_excludedAttributes_peopleInPhoto(dateCreated: INDateComponentsRange, locationCreated: CLPlacemark, albumName: string | cocoascript.NSString, searchTerms: string | cocoascript.NSString, includedAttributes: INPhotoAttributeOptions, excludedAttributes: INPhotoAttributeOptions, peopleInPhoto: INPerson):INStartPhotoPlaybackIntent;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638564-peopleinphoto
    peopleInPhoto(): INPerson;
    setPeopleInPhoto(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638623-peopleinphotooperator
    peopleInPhotoOperator(): INConditionalOperator;
    setPeopleInPhotoOperator(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1639186-searchterms
    searchTerms(): string | cocoascript.NSString;
    setSearchTerms(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1639393-searchtermsoperator
    searchTermsOperator(): INConditionalOperator;
    setSearchTermsOperator(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638645-datecreated
    dateCreated(): INDateComponentsRange;
    setDateCreated(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638879-locationcreated
    locationCreated(): CLPlacemark;
    setLocationCreated(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1639239-albumname
    albumName(): string | cocoascript.NSString;
    setAlbumName(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638591-includedattributes
    includedAttributes(): INPhotoAttributeOptions;
    setIncludedAttributes(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintent/1638754-excludedattributes
    excludedAttributes(): INPhotoAttributeOptions;
    setExcludedAttributes(): void;
    //
    alloc():INStartPhotoPlaybackIntent;
    //
    init():INStartPhotoPlaybackIntent;
  }
}

declare const INStartPhotoPlaybackIntent: cocoascript.INStartPhotoPlaybackIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a start photo playback intent.
   * https://developer.apple.com/documentation/sirikit/instartphotoplaybackintentresponse
   */
  interface INStartPhotoPlaybackIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintentresponse/1639204-initwithcode
    initWithCode_userActivity(code: INStartPhotoPlaybackIntentResponseCode, userActivity: NSUserActivity):INStartPhotoPlaybackIntentResponse;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintentresponse/1829425-code
    code(): INStartPhotoPlaybackIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintentresponse/1638601-searchresultscount
    searchResultsCount(): NSNumber;
    setSearchResultsCount(): void;
    //
    alloc():INStartPhotoPlaybackIntentResponse;
    //
    init():INStartPhotoPlaybackIntentResponse;
  }
}

declare const INStartPhotoPlaybackIntentResponse: cocoascript.INStartPhotoPlaybackIntentResponse;
declare namespace cocoascript {
  /**
   * Your app’s response to a book restaurant reservation intent.
   * https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintentresponse
   */
  interface INBookRestaurantReservationIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintentresponse/1778408-initwithcode
    initWithCode_userActivity(code: INBookRestaurantReservationIntentCode, userActivity: NSUserActivity):INBookRestaurantReservationIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintentresponse/1833287-code
    code(): INBookRestaurantReservationIntentCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintentresponse/1648277-userbooking
    userBooking(): INRestaurantReservationUserBooking;
    setUserBooking(): void;
    //
    alloc():INBookRestaurantReservationIntentResponse;
    //
    init():INBookRestaurantReservationIntentResponse;
  }
}

declare const INBookRestaurantReservationIntentResponse: cocoascript.INBookRestaurantReservationIntentResponse;
declare namespace cocoascript {
  /**
   * A request to change the seat-related settings in a CarPlay-enabled vehicle.
   * https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent
   */
  interface INSetSeatSettingsInCarIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/3019578-initwithenableheating
    initWithEnableHeating_enableCooling_enableMassage_seat_level_relativeLevelSetting_carName(enableHeating: NSNumber, enableCooling: NSNumber, enableMassage: NSNumber, seat: INCarSeat, level: NSNumber, relativeLevelSetting: INRelativeSetting, carName: INSpeakableString):INSetSeatSettingsInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102622-initwithenableheating
    initWithEnableHeating_enableCooling_enableMassage_seat_level_relativeLevelSetting(enableHeating: NSNumber, enableCooling: NSNumber, enableMassage: NSNumber, seat: INCarSeat, level: NSNumber, relativeLevelSetting: INRelativeSetting):INSetSeatSettingsInCarIntent;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102630-seat
    seat(): INCarSeat;
    setSeat(): void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102617-enablecooling
    enableCooling(): NSNumber;
    setEnableCooling(): void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102618-enableheating
    enableHeating(): NSNumber;
    setEnableHeating(): void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102629-enablemassage
    enableMassage(): NSNumber;
    setEnableMassage(): void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102620-level
    level(): NSNumber;
    setLevel(): void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/2102626-relativelevelsetting
    relativeLevelSetting(): INRelativeSetting;
    setRelativeLevelSetting(): void;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintent/3019577-carname
    carName(): INSpeakableString;
    setCarName(): void;
    //
    alloc():INSetSeatSettingsInCarIntent;
    //
    init():INSetSeatSettingsInCarIntent;
  }
}

declare const INSetSeatSettingsInCarIntent: cocoascript.INSetSeatSettingsInCarIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a set seat settings in car intent.
   * https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintentresponse
   */
  interface INSetSeatSettingsInCarIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintentresponse/2102255-initwithcode
    initWithCode_userActivity(code: INSetSeatSettingsInCarIntentResponseCode, userActivity: NSUserActivity):INSetSeatSettingsInCarIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintentresponse/2102256-code
    code(): INSetSeatSettingsInCarIntentResponseCode;
    setCode(): void;
    //
    alloc():INSetSeatSettingsInCarIntentResponse;
    //
    init():INSetSeatSettingsInCarIntentResponse;
  }
}

declare const INSetSeatSettingsInCarIntentResponse: cocoascript.INSetSeatSettingsInCarIntentResponse;
declare namespace cocoascript {
  /**
   * A request to list the messages matching the specified criteria.
   * https://developer.apple.com/documentation/sirikit/insearchformessagesintent
   */
  interface INSearchForMessagesIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/2983197-initwithrecipients
    initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_speakableGroupNames_conversationIdentifiers(recipients: INPerson, senders: INPerson, searchTerms: string | cocoascript.NSString, attributes: INMessageAttributeOptions, dateTimeRange: INDateComponentsRange, identifiers: string | cocoascript.NSString, notificationIdentifiers: string | cocoascript.NSString, speakableGroupNames: INSpeakableString, conversationIdentifiers: string | cocoascript.NSString):INSearchForMessagesIntent;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1638455-recipients
    recipients(): INPerson;
    setRecipients(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1638624-recipientsoperator
    recipientsOperator(): INConditionalOperator;
    setRecipientsOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1638436-senders
    senders(): INPerson;
    setSenders(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1639394-sendersoperator
    sendersOperator(): INConditionalOperator;
    setSendersOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/2867287-speakablegroupnames
    speakableGroupNames(): INSpeakableString;
    setSpeakableGroupNames(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/2867288-speakablegroupnamesoperator
    speakableGroupNamesOperator(): INConditionalOperator;
    setSpeakableGroupNamesOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1639353-searchterms
    searchTerms(): string | cocoascript.NSString;
    setSearchTerms(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1639002-searchtermsoperator
    searchTermsOperator(): INConditionalOperator;
    setSearchTermsOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1638192-datetimerange
    dateTimeRange(): INDateComponentsRange;
    setDateTimeRange(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1639482-attributes
    attributes(): INMessageAttributeOptions;
    setAttributes(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1638976-identifiers
    identifiers(): string | cocoascript.NSString;
    setIdentifiers(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1638746-identifiersoperator
    identifiersOperator(): INConditionalOperator;
    setIdentifiersOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/2983195-conversationidentifiers
    conversationIdentifiers(): string | cocoascript.NSString;
    setConversationIdentifiers(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/2983196-conversationidentifiersoperator
    conversationIdentifiersOperator(): INConditionalOperator;
    setConversationIdentifiersOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1639365-notificationidentifiers
    notificationIdentifiers(): string | cocoascript.NSString;
    setNotificationIdentifiers(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1639253-notificationidentifiersoperator
    notificationIdentifiersOperator(): INConditionalOperator;
    setNotificationIdentifiersOperator(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/2867286-initwithrecipients
    initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_speakableGroupNames(recipients: INPerson, senders: INPerson, searchTerms: string | cocoascript.NSString, attributes: INMessageAttributeOptions, dateTimeRange: INDateComponentsRange, identifiers: string | cocoascript.NSString, notificationIdentifiers: string | cocoascript.NSString, speakableGroupNames: INSpeakableString):INSearchForMessagesIntent;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1902435-initwithrecipients
    initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_groupNames(recipients: INPerson, senders: INPerson, searchTerms: string | cocoascript.NSString, attributes: INMessageAttributeOptions, dateTimeRange: INDateComponentsRange, identifiers: string | cocoascript.NSString, notificationIdentifiers: string | cocoascript.NSString, groupNames: string | cocoascript.NSString):INSearchForMessagesIntent;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1778236-groupnames
    groupNames(): string | cocoascript.NSString;
    setGroupNames(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintent/1778193-groupnamesoperator
    groupNamesOperator(): INConditionalOperator;
    setGroupNamesOperator(): void;
    //
    alloc():INSearchForMessagesIntent;
    //
    init():INSearchForMessagesIntent;
  }
}

declare const INSearchForMessagesIntent: cocoascript.INSearchForMessagesIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a search for messages intent.
   * https://developer.apple.com/documentation/sirikit/insearchformessagesintentresponse
   */
  interface INSearchForMessagesIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintentresponse/1638285-initwithcode
    initWithCode_userActivity(code: INSearchForMessagesIntentResponseCode, userActivity: NSUserActivity):INSearchForMessagesIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintentresponse/1823496-code
    code(): INSearchForMessagesIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchformessagesintentresponse/1639421-messages
    messages(): INMessage;
    setMessages(): void;
    //
    alloc():INSearchForMessagesIntentResponse;
    //
    init():INSearchForMessagesIntentResponse;
  }
}

declare const INSearchForMessagesIntentResponse: cocoascript.INSearchForMessagesIntentResponse;
declare namespace cocoascript {
  /**
   * A request to transfer of money to facilitate payment of a bill.
   * https://developer.apple.com/documentation/sirikit/inpaybillintent
   */
  interface INPayBillIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799077-initwithbillpayee
    initWithBillPayee_fromAccount_transactionAmount_transactionScheduledDate_transactionNote_billType_dueDate(billPayee: INBillPayee, fromAccount: INPaymentAccount, transactionAmount: INPaymentAmount, transactionScheduledDate: INDateComponentsRange, transactionNote: string | cocoascript.NSString, billType: INBillType, dueDate: INDateComponentsRange):INPayBillIntent;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799063-billpayee
    billPayee(): INBillPayee;
    setBillPayee(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799073-billtype
    billType(): INBillType;
    setBillType(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799067-duedate
    dueDate(): INDateComponentsRange;
    setDueDate(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799079-fromaccount
    fromAccount(): INPaymentAccount;
    setFromAccount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799064-transactionamount
    transactionAmount(): INPaymentAmount;
    setTransactionAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799062-transactionnote
    transactionNote(): string | cocoascript.NSString;
    setTransactionNote(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintent/2799075-transactionscheduleddate
    transactionScheduledDate(): INDateComponentsRange;
    setTransactionScheduledDate(): void;
    //
    alloc():INPayBillIntent;
    //
    init():INPayBillIntent;
  }
}

declare const INPayBillIntent: cocoascript.INPayBillIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to pay a bill.
   * https://developer.apple.com/documentation/sirikit/inpaybillintentresponse
   */
  interface INPayBillIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799029-initwithcode
    initWithCode_userActivity(code: INPayBillIntentResponseCode, userActivity: NSUserActivity):INPayBillIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799031-code
    code(): INPayBillIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799022-fromaccount
    fromAccount(): INPaymentAccount;
    setFromAccount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799032-billdetails
    billDetails(): INBillDetails;
    setBillDetails(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799037-transactionamount
    transactionAmount(): INPaymentAmount;
    setTransactionAmount(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799036-transactionscheduleddate
    transactionScheduledDate(): INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // https://developer.apple.com/documentation/sirikit/inpaybillintentresponse/2799035-transactionnote
    transactionNote(): string | cocoascript.NSString;
    setTransactionNote(): void;
    //
    alloc():INPayBillIntentResponse;
    //
    init():INPayBillIntentResponse;
  }
}

declare const INPayBillIntentResponse: cocoascript.INPayBillIntentResponse;
declare namespace cocoascript {
  /**
   * The entry point for an Intents extension.
   * https://developer.apple.com/documentation/sirikit/inextension
   */
  interface INExtension extends NSObject {
    //
    alloc():INExtension;
    //
    init():INExtension;
  }
}

declare const INExtension: cocoascript.INExtension;
declare namespace cocoascript {
  /**
   * A request to modify the attributes of a task.
   * https://developer.apple.com/documentation/sirikit/insettaskattributeintent
   */
  interface INSetTaskAttributeIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/3141834-initwithtargettask
    initWithTargetTask_taskTitle_status_priority_spatialEventTrigger_temporalEventTrigger(targetTask: INTask, taskTitle: INSpeakableString, status: INTaskStatus, priority: INTaskPriority, spatialEventTrigger: INSpatialEventTrigger, temporalEventTrigger: INTemporalEventTrigger):INSetTaskAttributeIntent;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/2878117-initwithtargettask
    initWithTargetTask_status_spatialEventTrigger_temporalEventTrigger(targetTask: INTask, status: INTaskStatus, spatialEventTrigger: INSpatialEventTrigger, temporalEventTrigger: INTemporalEventTrigger):INSetTaskAttributeIntent;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/3141835-priority
    priority(): INTaskPriority;
    setPriority(): void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/3141836-tasktitle
    taskTitle(): INSpeakableString;
    setTaskTitle(): void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/2878119-targettask
    targetTask(): INTask;
    setTargetTask(): void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/2873569-status
    status(): INTaskStatus;
    setStatus(): void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/2873567-temporaleventtrigger
    temporalEventTrigger(): INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintent/2873571-spatialeventtrigger
    spatialEventTrigger(): INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    //
    alloc():INSetTaskAttributeIntent;
    //
    init():INSetTaskAttributeIntent;
  }
}

declare const INSetTaskAttributeIntent: cocoascript.INSetTaskAttributeIntent;
declare namespace cocoascript {
  /**
   * Your response to a request to modify the attributes of an existing task.
   * https://developer.apple.com/documentation/sirikit/insettaskattributeintentresponse
   */
  interface INSetTaskAttributeIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintentresponse/2873807-initwithcode
    initWithCode_userActivity(code: INSetTaskAttributeIntentResponseCode, userActivity: NSUserActivity):INSetTaskAttributeIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintentresponse/2873802-code
    code(): INSetTaskAttributeIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insettaskattributeintentresponse/2873806-modifiedtask
    modifiedTask(): INTask;
    setModifiedTask(): void;
    //
    alloc():INSetTaskAttributeIntentResponse;
    //
    init():INSetTaskAttributeIntentResponse;
  }
}

declare const INSetTaskAttributeIntentResponse: cocoascript.INSetTaskAttributeIntentResponse;
declare namespace cocoascript {
  /**
   * A request to transfer money between two accounts.
   * https://developer.apple.com/documentation/sirikit/intransfermoneyintent
   */
  interface INTransferMoneyIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintent/2868061-initwithfromaccount
    initWithFromAccount_toAccount_transactionAmount_transactionScheduledDate_transactionNote(fromAccount: INPaymentAccount, toAccount: INPaymentAccount, transactionAmount: INPaymentAmount, transactionScheduledDate: INDateComponentsRange, transactionNote: string | cocoascript.NSString):INTransferMoneyIntent;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintent/2868067-fromaccount
    fromAccount(): INPaymentAccount;
    setFromAccount(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintent/2868060-toaccount
    toAccount(): INPaymentAccount;
    setToAccount(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintent/2868056-transactionamount
    transactionAmount(): INPaymentAmount;
    setTransactionAmount(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintent/2868068-transactionscheduleddate
    transactionScheduledDate(): INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintent/2868062-transactionnote
    transactionNote(): string | cocoascript.NSString;
    setTransactionNote(): void;
    //
    alloc():INTransferMoneyIntent;
    //
    init():INTransferMoneyIntent;
  }
}

declare const INTransferMoneyIntent: cocoascript.INTransferMoneyIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to transfer money.
   * https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse
   */
  interface INTransferMoneyIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868342-initwithcode
    initWithCode_userActivity(code: INTransferMoneyIntentResponseCode, userActivity: NSUserActivity):INTransferMoneyIntentResponse;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868337-code
    code(): INTransferMoneyIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868343-fromaccount
    fromAccount(): INPaymentAccount;
    setFromAccount(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868335-toaccount
    toAccount(): INPaymentAccount;
    setToAccount(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868336-transactionamount
    transactionAmount(): INPaymentAmount;
    setTransactionAmount(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868340-transactionscheduleddate
    transactionScheduledDate(): INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2868331-transactionnote
    transactionNote(): string | cocoascript.NSString;
    setTransactionNote(): void;
    // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponse/2919431-transferfee
    transferFee(): INCurrencyAmount;
    setTransferFee(): void;
    //
    alloc():INTransferMoneyIntentResponse;
    //
    init():INTransferMoneyIntentResponse;
  }
}

declare const INTransferMoneyIntentResponse: cocoascript.INTransferMoneyIntentResponse;
declare namespace cocoascript {
  /**
   * A request to add tasks to a task list.
   * https://developer.apple.com/documentation/sirikit/inaddtasksintent
   */
  interface INAddTasksIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/3227904-initwithtargettasklist
    initWithTargetTaskList_taskTitles_spatialEventTrigger_temporalEventTrigger_priority(targetTaskList: INTaskList, taskTitles: INSpeakableString, spatialEventTrigger: INSpatialEventTrigger, temporalEventTrigger: INTemporalEventTrigger, priority: INTaskPriority):INAddTasksIntent;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/2878111-initwithtargettasklist
    initWithTargetTaskList_taskTitles_spatialEventTrigger_temporalEventTrigger(targetTaskList: INTaskList, taskTitles: INSpeakableString, spatialEventTrigger: INSpatialEventTrigger, temporalEventTrigger: INTemporalEventTrigger):INAddTasksIntent;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/2878112-targettasklist
    targetTaskList(): INTaskList;
    setTargetTaskList(): void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/2874158-tasktitles
    taskTitles(): INSpeakableString;
    setTaskTitles(): void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/3227905-priority
    priority(): INTaskPriority;
    setPriority(): void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/2874163-spatialeventtrigger
    spatialEventTrigger(): INSpatialEventTrigger;
    setSpatialEventTrigger(): void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintent/2874159-temporaleventtrigger
    temporalEventTrigger(): INTemporalEventTrigger;
    setTemporalEventTrigger(): void;
    //
    alloc():INAddTasksIntent;
    //
    init():INAddTasksIntent;
  }
}

declare const INAddTasksIntent: cocoascript.INAddTasksIntent;
declare namespace cocoascript {
  /**
   * Your response to a request to add tasks to a task list.
   * https://developer.apple.com/documentation/sirikit/inaddtasksintentresponse
   */
  interface INAddTasksIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inaddtasksintentresponse/2874051-initwithcode
    initWithCode_userActivity(code: INAddTasksIntentResponseCode, userActivity: NSUserActivity):INAddTasksIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintentresponse/2874042-code
    code(): INAddTasksIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintentresponse/2874043-addedtasks
    addedTasks(): INTask;
    setAddedTasks(): void;
    // https://developer.apple.com/documentation/sirikit/inaddtasksintentresponse/2880149-modifiedtasklist
    modifiedTaskList(): INTaskList;
    setModifiedTaskList(): void;
    //
    alloc():INAddTasksIntentResponse;
    //
    init():INAddTasksIntentResponse;
  }
}

declare const INAddTasksIntentResponse: cocoascript.INAddTasksIntentResponse;
declare namespace cocoascript {
  /**
   * A request to list the calls matching the specified criteria.
   * https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent
   */
  interface INSearchCallHistoryIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/2879133-initwithdatecreated
    initWithDateCreated_recipient_callCapabilities_callTypes_unseen(dateCreated: INDateComponentsRange, recipient: INPerson, callCapabilities: INCallCapabilityOptions, callTypes: INCallRecordTypeOptions, unseen: NSNumber):INSearchCallHistoryIntent;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/1902451-initwithcalltype
    initWithCallType_dateCreated_recipient_callCapabilities(callType: INCallRecordType, dateCreated: INDateComponentsRange, recipient: INPerson, callCapabilities: INCallCapabilityOptions):INSearchCallHistoryIntent;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/1638907-recipient
    recipient(): INPerson;
    setRecipient(): void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/1638678-datecreated
    dateCreated(): INDateComponentsRange;
    setDateCreated(): void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/2866200-calltypes
    callTypes(): INCallRecordTypeOptions;
    setCallTypes(): void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/1638944-calltype
    callType(): INCallRecordType;
    setCallType(): void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/1639273-callcapabilities
    callCapabilities(): INCallCapabilityOptions;
    setCallCapabilities(): void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintent/2879132-unseen
    unseen(): NSNumber;
    setUnseen(): void;
    //
    alloc():INSearchCallHistoryIntent;
    //
    init():INSearchCallHistoryIntent;
  }
}

declare const INSearchCallHistoryIntent: cocoascript.INSearchCallHistoryIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a search call history intent.
   * https://developer.apple.com/documentation/sirikit/insearchcallhistoryintentresponse
   */
  interface INSearchCallHistoryIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintentresponse/1638691-initwithcode
    initWithCode_userActivity(code: INSearchCallHistoryIntentResponseCode, userActivity: NSUserActivity):INSearchCallHistoryIntentResponse;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintentresponse/1823492-code
    code(): INSearchCallHistoryIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintentresponse/2873252-callrecords
    callRecords(): INCallRecord;
    setCallRecords(): void;
    //
    alloc():INSearchCallHistoryIntentResponse;
    //
    init():INSearchCallHistoryIntentResponse;
  }
}

declare const INSearchCallHistoryIntentResponse: cocoascript.INSearchCallHistoryIntentResponse;
declare namespace cocoascript {
  /**
   * A button that allows the user to add or edit a shortcut.
   * https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton
   */
  interface INUIAddVoiceShortcutButton extends UIButton {
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton/3019581-initwithstyle
    initWithStyle(style: INUIAddVoiceShortcutButtonStyle):INUIAddVoiceShortcutButton;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton/3024514-shortcut
    shortcut(): INShortcut;
    setShortcut(): void;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton/3024513-delegate
    delegate(): INUIAddVoiceShortcutButtonDelegate;
    setDelegate(): void;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton/3089175-setstyle
    setStyle(style: INUIAddVoiceShortcutButtonStyle):void;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton/3024515-style
    style(): INUIAddVoiceShortcutButtonStyle;
    setStyle(): void;
    // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbutton/3089174-cornerradius
    cornerRadius(): CGFloat;
    setCornerRadius(): void;
    //
    alloc():INUIAddVoiceShortcutButton;
    //
    init():INUIAddVoiceShortcutButton;
  }
}

declare const INUIAddVoiceShortcutButton: cocoascript.INUIAddVoiceShortcutButton;
declare namespace cocoascript {
  /**
   * A request to add a media item.
   * https://developer.apple.com/documentation/sirikit/inaddmediaintent
   */
  interface INAddMediaIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inaddmediaintent/3074185-initwithmediaitems
    initWithMediaItems_mediaSearch_mediaDestination(mediaItems: INMediaItem, mediaSearch: INMediaSearch, mediaDestination: INMediaDestination):INAddMediaIntent;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintent/3074187-mediaitems
    mediaItems(): INMediaItem;
    setMediaItems(): void;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintent/3074188-mediasearch
    mediaSearch(): INMediaSearch;
    setMediaSearch(): void;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintent/3074186-mediadestination
    mediaDestination(): INMediaDestination;
    setMediaDestination(): void;
    //
    alloc():INAddMediaIntent;
    //
    init():INAddMediaIntent;
  }
}

declare const INAddMediaIntent: cocoascript.INAddMediaIntent;
declare namespace cocoascript {
  /**
   * An intents handler's response to an add media intent.
   * https://developer.apple.com/documentation/sirikit/inaddmediaintentresponse
   */
  interface INAddMediaIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inaddmediaintentresponse/3074196-initwithcode
    initWithCode_userActivity(code: INAddMediaIntentResponseCode, userActivity: NSUserActivity):INAddMediaIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inaddmediaintentresponse/3074195-code
    code(): INAddMediaIntentResponseCode;
    setCode(): void;
    //
    alloc():INAddMediaIntentResponse;
    //
    init():INAddMediaIntentResponse;
  }
}

declare const INAddMediaIntentResponse: cocoascript.INAddMediaIntentResponse;
declare namespace cocoascript {
  /**
   * An intents handler's response to a play media intent.
   * https://developer.apple.com/documentation/sirikit/inplaymediaintentresponse
   */
  interface INPlayMediaIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inplaymediaintentresponse/2963024-initwithcode
    initWithCode_userActivity(code: INPlayMediaIntentResponseCode, userActivity: NSUserActivity):INPlayMediaIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintentresponse/2963023-code
    code(): INPlayMediaIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/inplaymediaintentresponse/2963025-nowplayinginfo
    nowPlayingInfo(): id;
    setNowPlayingInfo(): void;
    //
    alloc():INPlayMediaIntentResponse;
    //
    init():INPlayMediaIntentResponse;
  }
}

declare const INPlayMediaIntentResponse: cocoascript.INPlayMediaIntentResponse;
declare namespace cocoascript {
  /**
   * Your app’s response to a get available restaurant reservation bookings intent.
   * https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse
   */
  interface INGetAvailableRestaurantReservationBookingsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2102234-initwithavailablebookings
    initWithAvailableBookings_code_userActivity(availableBookings: INRestaurantReservationBooking, code: INGetAvailableRestaurantReservationBookingsIntentCode, userActivity: NSUserActivity):INGetAvailableRestaurantReservationBookingsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1649829-availablebookings
    availableBookings(): INRestaurantReservationBooking;
    setAvailableBookings(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2102233-localizedrestaurantdescriptionte
    localizedRestaurantDescriptionText(): string | cocoascript.NSString;
    setLocalizedRestaurantDescriptionText(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1778416-localizedbookingadvisementtext
    localizedBookingAdvisementText(): string | cocoascript.NSString;
    setLocalizedBookingAdvisementText(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/2132101-termsandconditions
    termsAndConditions(): INTermsAndConditions;
    setTermsAndConditions(): void;
    // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentresponse/1829404-code
    code(): INGetAvailableRestaurantReservationBookingsIntentCode;
    setCode(): void;
    //
    alloc():INGetAvailableRestaurantReservationBookingsIntentResponse;
    //
    init():INGetAvailableRestaurantReservationBookingsIntentResponse;
  }
}

declare const INGetAvailableRestaurantReservationBookingsIntentResponse: cocoascript.INGetAvailableRestaurantReservationBookingsIntentResponse;
declare namespace cocoascript {
  /**
   * A request to update the user’s affinity for a media item.
   * https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintent
   */
  interface INUpdateMediaAffinityIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintent/3074314-initwithmediaitems
    initWithMediaItems_mediaSearch_affinityType(mediaItems: INMediaItem, mediaSearch: INMediaSearch, affinityType: INMediaAffinityType):INUpdateMediaAffinityIntent;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintent/3074313-affinitytype
    affinityType(): INMediaAffinityType;
    setAffinityType(): void;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintent/3074315-mediaitems
    mediaItems(): INMediaItem;
    setMediaItems(): void;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintent/3074316-mediasearch
    mediaSearch(): INMediaSearch;
    setMediaSearch(): void;
    //
    alloc():INUpdateMediaAffinityIntent;
    //
    init():INUpdateMediaAffinityIntent;
  }
}

declare const INUpdateMediaAffinityIntent: cocoascript.INUpdateMediaAffinityIntent;
declare namespace cocoascript {
  /**
   * An intents handler's response to an update media affinity intent.
   * https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintentresponse
   */
  interface INUpdateMediaAffinityIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintentresponse/3074324-initwithcode
    initWithCode_userActivity(code: INUpdateMediaAffinityIntentResponseCode, userActivity: NSUserActivity):INUpdateMediaAffinityIntentResponse;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintentresponse/3074323-code
    code(): INUpdateMediaAffinityIntentResponseCode;
    setCode(): void;
    //
    alloc():INUpdateMediaAffinityIntentResponse;
    //
    init():INUpdateMediaAffinityIntentResponse;
  }
}

declare const INUpdateMediaAffinityIntentResponse: cocoascript.INUpdateMediaAffinityIntentResponse;
declare namespace cocoascript {
  /**
   * A request to get the lock status of the user’s car.
   * https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintent
   */
  interface INGetCarLockStatusIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintent/2799272-initwithcarname
    initWithCarName(carName: INSpeakableString):INGetCarLockStatusIntent;
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintent/2799267-carname
    carName(): INSpeakableString;
    setCarName(): void;
    //
    alloc():INGetCarLockStatusIntent;
    //
    init():INGetCarLockStatusIntent;
  }
}

declare const INGetCarLockStatusIntent: cocoascript.INGetCarLockStatusIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request to get the car’s lock status.
   * https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintentresponse
   */
  interface INGetCarLockStatusIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintentresponse/2799326-initwithcode
    initWithCode_userActivity(code: INGetCarLockStatusIntentResponseCode, userActivity: NSUserActivity):INGetCarLockStatusIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintentresponse/2799323-code
    code(): INGetCarLockStatusIntentResponseCode;
    setCode(): void;
    // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintentresponse/2799331-locked
    locked(): NSNumber;
    setLocked(): void;
    //
    alloc():INGetCarLockStatusIntentResponse;
    //
    init():INGetCarLockStatusIntentResponse;
  }
}

declare const INGetCarLockStatusIntentResponse: cocoascript.INGetCarLockStatusIntentResponse;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inplaybackrepeatmode
  type INPlaybackRepeatMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inplaybackqueuelocation
  type INPlaybackQueueLocation = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a parameter of an intent object.
   * https://developer.apple.com/documentation/sirikit/inintentresolutionresult
   */
  interface INIntentResolutionResult extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inintentresolutionresult/3191874-confirmationrequiredwithitemtoco
    confirmationRequiredWithItemToConfirm_forReason(itemToConfirm: INIntentResolutionResult, reason: NSInteger):INIntentResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inintentresolutionresult/1639445-unsupportedwithreason
    unsupportedWithReason(reason: NSInteger):INIntentResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inintentresolutionresult/1902446-needsvalue
    needsValue():INIntentResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inintentresolutionresult/1902445-notrequired
    notRequired():INIntentResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inintentresolutionresult/2138302-unsupported
    unsupported():INIntentResolutionResult;
    //
    alloc():INIntentResolutionResult;
    //
    init():INIntentResolutionResult;
  }
}

declare const INIntentResolutionResult: cocoascript.INIntentResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpersonsuggestiontype
  type INPersonSuggestionType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpersonrelationship
  type INPersonRelationship = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpersonhandlelabel
  type INPersonHandleLabel = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaccounttype
  type INAccountType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpaymentstatus
  type INPaymentStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmessagetype
  type INMessageType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmessageattribute
  type INMessageAttribute = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmessageattributeoptions
  type INMessageAttributeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpaymentmethodtype
  type INPaymentMethodType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The person assigned to a reservation.
   * https://developer.apple.com/documentation/sirikit/inrestaurantguest
   */
  interface INRestaurantGuest extends INPerson {
    // https://developer.apple.com/documentation/sirikit/inrestaurantguest/2102287-initwithnamecomponents
    initWithNameComponents_phoneNumber_emailAddress(nameComponents: NSPersonNameComponents, phoneNumber: string | cocoascript.NSString, emailAddress: string | cocoascript.NSString):INRestaurantGuest;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguest/1778341-phonenumber
    phoneNumber(): string | cocoascript.NSString;
    setPhoneNumber(): void;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguest/1778340-emailaddress
    emailAddress(): string | cocoascript.NSString;
    setEmailAddress(): void;
    //
    alloc():INRestaurantGuest;
    //
    init():INRestaurantGuest;
  }
}

declare const INRestaurantGuest: cocoascript.INRestaurantGuest;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrestaurantreservationuserbookingstatus
  type INRestaurantReservationUserBookingStatus = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inridephase
  type INRidePhase = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inridefeedbacktypeoptions
  type INRideFeedbackTypeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpersonhandletype
  type INPersonHandleType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inamounttype
  type INAmountType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inbilltype
  type INBillType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the types of bills a user might pay.
   * https://developer.apple.com/documentation/sirikit/inbilltyperesolutionresult
   */
  interface INBillTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inbilltyperesolutionresult/2799011-successwithresolvedbilltype
    successWithResolvedBillType(resolvedBillType: INBillType):INBillTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbilltyperesolutionresult/2799013-confirmationrequiredwithbilltype
    confirmationRequiredWithBillTypeToConfirm(billTypeToConfirm: INBillType):INBillTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbilltyperesolutionresult/2933993-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INBillType):INBillTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbilltyperesolutionresult/2933994-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INBillType):INBillTypeResolutionResult;
    //
    alloc():INBillTypeResolutionResult;
    //
    init():INBillTypeResolutionResult;
  }
}

declare const INBillTypeResolutionResult: cocoascript.INBillTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a bill payment.
   * https://developer.apple.com/documentation/sirikit/inbillpayeeresolutionresult
   */
  interface INBillPayeeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inbillpayeeresolutionresult/2799319-successwithresolvedbillpayee
    successWithResolvedBillPayee(resolvedBillPayee: INBillPayee):INBillPayeeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbillpayeeresolutionresult/2799318-confirmationrequiredwithbillpaye
    confirmationRequiredWithBillPayeeToConfirm(billPayeeToConfirm: INBillPayee):INBillPayeeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbillpayeeresolutionresult/2799320-disambiguationwithbillpayeestodi
    disambiguationWithBillPayeesToDisambiguate(billPayeesToDisambiguate: INBillPayee):INBillPayeeResolutionResult;
    //
    alloc():INBillPayeeResolutionResult;
    //
    init():INBillPayeeResolutionResult;
  }
}

declare const INBillPayeeResolutionResult: cocoascript.INBillPayeeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of visual code used to exchange information.
   * https://developer.apple.com/documentation/sirikit/invisualcodetyperesolutionresult
   */
  interface INVisualCodeTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/invisualcodetyperesolutionresult/2873988-successwithresolvedvisualcodetyp
    successWithResolvedVisualCodeType(resolvedVisualCodeType: INVisualCodeType):INVisualCodeTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/invisualcodetyperesolutionresult/2873987-confirmationrequiredwithvisualco
    confirmationRequiredWithVisualCodeTypeToConfirm(visualCodeTypeToConfirm: INVisualCodeType):INVisualCodeTypeResolutionResult;
    //
    alloc():INVisualCodeTypeResolutionResult;
    //
    init():INVisualCodeTypeResolutionResult;
  }
}

declare const INVisualCodeTypeResolutionResult: cocoascript.INVisualCodeTypeResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inbalancetype
  type INBalanceType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incallcapability
  type INCallCapability = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incallrecordtype
  type INCallRecordType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incallrecordtypeoptions
  type INCallRecordTypeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incalldestinationtype
  type INCallDestinationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inspatialevent
  type INSpatialEvent = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result that adds a temporal event trigger.
   * https://developer.apple.com/documentation/sirikit/intemporaleventtriggertypeoptionsresolutionresult
   */
  interface INTemporalEventTriggerTypeOptionsResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intemporaleventtriggertypeoptionsresolutionresult/3141880-successwithresolvedtemporalevent
    successWithResolvedTemporalEventTriggerTypeOptions(resolvedTemporalEventTriggerTypeOptions: INTemporalEventTriggerTypeOptions):INTemporalEventTriggerTypeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intemporaleventtriggertypeoptionsresolutionresult/3141879-confirmationrequiredwithtemporal
    confirmationRequiredWithTemporalEventTriggerTypeOptionsToConfirm(temporalEventTriggerTypeOptionsToConfirm: INTemporalEventTriggerTypeOptions):INTemporalEventTriggerTypeOptionsResolutionResult;
    //
    alloc():INTemporalEventTriggerTypeOptionsResolutionResult;
    //
    init():INTemporalEventTriggerTypeOptionsResolutionResult;
  }
}

declare const INTemporalEventTriggerTypeOptionsResolutionResult: cocoascript.INTemporalEventTriggerTypeOptionsResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/indayofweekoptions
  type INDayOfWeekOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/intaskstatus
  type INTaskStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/intasktype
  type INTaskType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrecurrencefrequency
  type INRecurrenceFrequency = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmediaitemtype
  type INMediaItemType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The provider class that specifies a relevant daily routine.
   * https://developer.apple.com/documentation/sirikit/indailyroutinerelevanceprovider
   */
  interface INDailyRoutineRelevanceProvider extends INRelevanceProvider {
    // https://developer.apple.com/documentation/sirikit/indailyroutinerelevanceprovider/2963042-initwithsituation
    initWithSituation(situation: INDailyRoutineSituation):INDailyRoutineRelevanceProvider;
    // https://developer.apple.com/documentation/sirikit/indailyroutinerelevanceprovider/2963043-situation
    situation(): INDailyRoutineSituation;
    setSituation(): void;
    //
    alloc():INDailyRoutineRelevanceProvider;
    //
    init():INDailyRoutineRelevanceProvider;
  }
}

declare const INDailyRoutineRelevanceProvider: cocoascript.INDailyRoutineRelevanceProvider;
declare namespace cocoascript {
  /**
   * The provider class that specifies a relevant day and time.
   * https://developer.apple.com/documentation/sirikit/indaterelevanceprovider
   */
  interface INDateRelevanceProvider extends INRelevanceProvider {
    // https://developer.apple.com/documentation/sirikit/indaterelevanceprovider/2963054-initwithstartdate
    initWithStartDate_endDate(startDate: NSDate, endDate: NSDate):INDateRelevanceProvider;
    // https://developer.apple.com/documentation/sirikit/indaterelevanceprovider/2963055-startdate
    startDate(): NSDate;
    setStartDate(): void;
    // https://developer.apple.com/documentation/sirikit/indaterelevanceprovider/2963052-enddate
    endDate(): NSDate;
    setEndDate(): void;
    //
    alloc():INDateRelevanceProvider;
    //
    init():INDateRelevanceProvider;
  }
}

declare const INDateRelevanceProvider: cocoascript.INDateRelevanceProvider;
declare namespace cocoascript {
  /**
   * The provider class that specifies a relevant location.
   * https://developer.apple.com/documentation/sirikit/inlocationrelevanceprovider
   */
  interface INLocationRelevanceProvider extends INRelevanceProvider {
    // https://developer.apple.com/documentation/sirikit/inlocationrelevanceprovider/2963057-initwithregion
    initWithRegion(region: CLRegion):INLocationRelevanceProvider;
    // https://developer.apple.com/documentation/sirikit/inlocationrelevanceprovider/2963058-region
    region(): CLRegion;
    setRegion(): void;
    //
    alloc():INLocationRelevanceProvider;
    //
    init():INLocationRelevanceProvider;
  }
}

declare const INLocationRelevanceProvider: cocoascript.INLocationRelevanceProvider;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrelevantshortcutrole
  type INRelevantShortcutRole = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that saves relevant shortcuts.
   * https://developer.apple.com/documentation/sirikit/inrelevantshortcutstore
   */
  interface INRelevantShortcutStore extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcutstore/2993348-defaultstore
    defaultStore(): INRelevantShortcutStore;
    setDefaultStore(): void;
    // https://developer.apple.com/documentation/sirikit/inrelevantshortcutstore/2993349-setrelevantshortcuts
    setRelevantShortcuts_completionHandler(shortcuts: INRelevantShortcut, completionHandler: NSError):void;
    //
    alloc():INRelevantShortcutStore;
    //
    init():INRelevantShortcutStore;
  }
}

declare const INRelevantShortcutStore: cocoascript.INRelevantShortcutStore;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmediadestinationtype
  type INMediaDestinationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmediareference
  type INMediaReference = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmediasortorder
  type INMediaSortOrder = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inreservationstatus
  type INReservationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inticketedeventcategory
  type INTicketedEventCategory = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inreservationactiontype
  type INReservationActionType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incarchargingconnectortype
  type INCarChargingConnectorType = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object for registering user-specific vocabulary that Siri requests might include.
   * https://developer.apple.com/documentation/sirikit/invocabulary
   */
  interface INVocabulary extends NSObject {
    // https://developer.apple.com/documentation/sirikit/invocabulary/1639206-sharedvocabulary
    sharedVocabulary():INVocabulary;
    // https://developer.apple.com/documentation/sirikit/invocabulary/2873636-setvocabulary
    setVocabulary_ofType(vocabulary: INSpeakable, type: INVocabularyStringType):void;
    // https://developer.apple.com/documentation/sirikit/invocabulary/1638998-setvocabularystrings
    setVocabularyStrings_ofType(vocabulary: string | cocoascript.NSString, type: INVocabularyStringType):void;
    // https://developer.apple.com/documentation/sirikit/invocabulary/1638705-removeallvocabularystrings
    removeAllVocabularyStrings():void;
    //
    alloc():INVocabulary;
    //
    init():INVocabulary;
  }
}

declare const INVocabulary: cocoascript.INVocabulary;
declare namespace cocoascript {
  /**
   * A request for details about one or more reservations.
   * https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintent
   */
  interface INGetReservationDetailsIntent extends INIntent {
    // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintent/3172598-initwithreservationcontainerrefe
    initWithReservationContainerReference_reservationItemReferences(reservationContainerReference: INSpeakableString, reservationItemReferences: INSpeakableString):INGetReservationDetailsIntent;
    // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintent/3172599-reservationcontainerreference
    reservationContainerReference(): INSpeakableString;
    setReservationContainerReference(): void;
    // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintent/3172600-reservationitemreferences
    reservationItemReferences(): INSpeakableString;
    setReservationItemReferences(): void;
    //
    alloc():INGetReservationDetailsIntent;
    //
    init():INGetReservationDetailsIntent;
  }
}

declare const INGetReservationDetailsIntent: cocoascript.INGetReservationDetailsIntent;
declare namespace cocoascript {
  /**
   * Your app’s response to a request for reservation details.
   * https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintentresponse
   */
  interface INGetReservationDetailsIntentResponse extends INIntentResponse {
    // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintentresponse/3172608-initwithcode
    initWithCode_userActivity(code: INGetReservationDetailsIntentResponseCode, userActivity: NSUserActivity):INGetReservationDetailsIntentResponse;
    // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintentresponse/3172609-reservations
    reservations(): INReservation;
    setReservations(): void;
    // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintentresponse/3172607-code
    code(): INGetReservationDetailsIntentResponseCode;
    setCode(): void;
    //
    alloc():INGetReservationDetailsIntentResponse;
    //
    init():INGetReservationDetailsIntentResponse;
  }
}

declare const INGetReservationDetailsIntentResponse: cocoascript.INGetReservationDetailsIntentResponse;
declare namespace cocoascript {
  /**
   * An object that provides user information to Siri.
   * https://developer.apple.com/documentation/sirikit/inmediausercontext
   */
  interface INMediaUserContext extends INUserContext {
    // https://developer.apple.com/documentation/sirikit/inmediausercontext/3197603-init
    init():INMediaUserContext;
    // https://developer.apple.com/documentation/sirikit/inmediausercontext/3197604-numberoflibraryitems
    numberOfLibraryItems(): NSNumber;
    setNumberOfLibraryItems(): void;
    // https://developer.apple.com/documentation/sirikit/inmediausercontext/3197605-subscriptionstatus
    subscriptionStatus(): INMediaUserContextSubscriptionStatus;
    setSubscriptionStatus(): void;
    //
    alloc():INMediaUserContext;
    //
    init():INMediaUserContext;
  }
}

declare const INMediaUserContext: cocoascript.INMediaUserContext;
declare namespace cocoascript {
  /**
   * A resolution result that adds tasks to a target task list.
   * https://developer.apple.com/documentation/sirikit/inaddtaskstargettasklistresolutionresult
   */
  interface INAddTasksTargetTaskListResolutionResult extends INTaskListResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inaddtaskstargettasklistresolutionresult/3131046-initwithtasklistresolutionresult
    initWithTaskListResolutionResult(taskListResolutionResult: INTaskListResolutionResult):INAddTasksTargetTaskListResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaddtaskstargettasklistresolutionresult/3131045-confirmationrequiredwithtasklist
    confirmationRequiredWithTaskListToConfirm_forReason(taskListToConfirm: INTaskList, reason: INAddTasksTargetTaskListConfirmationReason):INAddTasksTargetTaskListResolutionResult;
    //
    alloc():INAddTasksTargetTaskListResolutionResult;
    //
    init():INAddTasksTargetTaskListResolutionResult;
  }
}

declare const INAddTasksTargetTaskListResolutionResult: cocoascript.INAddTasksTargetTaskListResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a temporal event trigger.
   * https://developer.apple.com/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult
   */
  interface INAddTasksTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult/3327002-initwithtemporaleventtriggerreso
    initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: INTemporalEventTriggerResolutionResult):INAddTasksTemporalEventTriggerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaddtaskstemporaleventtriggerresolutionresult/3327003-unsupportedforreason
    unsupportedForReason(reason: INAddTasksTemporalEventTriggerUnsupportedReason):INAddTasksTemporalEventTriggerResolutionResult;
    //
    alloc():INAddTasksTemporalEventTriggerResolutionResult;
    //
    init():INAddTasksTemporalEventTriggerResolutionResult;
  }
}

declare const INAddTasksTemporalEventTriggerResolutionResult: cocoascript.INAddTasksTemporalEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types of dates supported by a search.
   * https://developer.apple.com/documentation/sirikit/indatesearchtyperesolutionresult
   */
  interface INDateSearchTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/indatesearchtyperesolutionresult/2875634-successwithresolveddatesearchtyp
    successWithResolvedDateSearchType(resolvedDateSearchType: INDateSearchType):INDateSearchTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indatesearchtyperesolutionresult/2875584-confirmationrequiredwithdatesear
    confirmationRequiredWithDateSearchTypeToConfirm(dateSearchTypeToConfirm: INDateSearchType):INDateSearchTypeResolutionResult;
    //
    alloc():INDateSearchTypeResolutionResult;
    //
    init():INDateSearchTypeResolutionResult;
  }
}

declare const INDateSearchTypeResolutionResult: cocoascript.INDateSearchTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for location-based searches.
   * https://developer.apple.com/documentation/sirikit/inlocationsearchtyperesolutionresult
   */
  interface INLocationSearchTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inlocationsearchtyperesolutionresult/2875683-successwithresolvedlocationsearc
    successWithResolvedLocationSearchType(resolvedLocationSearchType: INLocationSearchType):INLocationSearchTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inlocationsearchtyperesolutionresult/2875658-confirmationrequiredwithlocation
    confirmationRequiredWithLocationSearchTypeToConfirm(locationSearchTypeToConfirm: INLocationSearchType):INLocationSearchTypeResolutionResult;
    //
    alloc():INLocationSearchTypeResolutionResult;
    //
    init():INLocationSearchTypeResolutionResult;
  }
}

declare const INLocationSearchTypeResolutionResult: cocoascript.INLocationSearchTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for notes.
   * https://developer.apple.com/documentation/sirikit/innoteresolutionresult
   */
  interface INNoteResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/innoteresolutionresult/2879142-successwithresolvednote
    successWithResolvedNote(resolvedNote: INNote):INNoteResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innoteresolutionresult/2879158-confirmationrequiredwithnotetoco
    confirmationRequiredWithNoteToConfirm(noteToConfirm: INNote):INNoteResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innoteresolutionresult/2879151-disambiguationwithnotestodisambi
    disambiguationWithNotesToDisambiguate(notesToDisambiguate: INNote):INNoteResolutionResult;
    //
    alloc():INNoteResolutionResult;
    //
    init():INNoteResolutionResult;
  }
}

declare const INNoteResolutionResult: cocoascript.INNoteResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the content of notes.
   * https://developer.apple.com/documentation/sirikit/innotecontentresolutionresult
   */
  interface INNoteContentResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/innotecontentresolutionresult/2875689-successwithresolvednotecontent
    successWithResolvedNoteContent(resolvedNoteContent: INNoteContent):INNoteContentResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innotecontentresolutionresult/2875620-confirmationrequiredwithnotecont
    confirmationRequiredWithNoteContentToConfirm(noteContentToConfirm: INNoteContent):INNoteContentResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innotecontentresolutionresult/2875691-disambiguationwithnotecontentsto
    disambiguationWithNoteContentsToDisambiguate(noteContentsToDisambiguate: INNoteContent):INNoteContentResolutionResult;
    //
    alloc():INNoteContentResolutionResult;
    //
    init():INNoteContentResolutionResult;
  }
}

declare const INNoteContentResolutionResult: cocoascript.INNoteContentResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of items to look for during a search of notes and tasks.
   * https://developer.apple.com/documentation/sirikit/innotebookitemtyperesolutionresult
   */
  interface INNotebookItemTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/innotebookitemtyperesolutionresult/2875673-successwithresolvednotebookitemt
    successWithResolvedNotebookItemType(resolvedNotebookItemType: INNotebookItemType):INNotebookItemTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innotebookitemtyperesolutionresult/2875686-confirmationrequiredwithnotebook
    confirmationRequiredWithNotebookItemTypeToConfirm(notebookItemTypeToConfirm: INNotebookItemType):INNotebookItemTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innotebookitemtyperesolutionresult/2923323-disambiguationwithnotebookitemty
    disambiguationWithNotebookItemTypesToDisambiguate(notebookItemTypesToDisambiguate: NSNumber):INNotebookItemTypeResolutionResult;
    //
    alloc():INNotebookItemTypeResolutionResult;
    //
    init():INNotebookItemTypeResolutionResult;
  }
}

declare const INNotebookItemTypeResolutionResult: cocoascript.INNotebookItemTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a temporal event trigger.
   * https://developer.apple.com/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult
   */
  interface INSetTaskAttributeTemporalEventTriggerResolutionResult extends INTemporalEventTriggerResolutionResult {
    // https://developer.apple.com/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult/3327012-initwithtemporaleventtriggerreso
    initWithTemporalEventTriggerResolutionResult(temporalEventTriggerResolutionResult: INTemporalEventTriggerResolutionResult):INSetTaskAttributeTemporalEventTriggerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insettaskattributetemporaleventtriggerresolutionresult/3327013-unsupportedforreason
    unsupportedForReason(reason: INSetTaskAttributeTemporalEventTriggerUnsupportedReason):INSetTaskAttributeTemporalEventTriggerResolutionResult;
    //
    alloc():INSetTaskAttributeTemporalEventTriggerResolutionResult;
    //
    init():INSetTaskAttributeTemporalEventTriggerResolutionResult;
  }
}

declare const INSetTaskAttributeTemporalEventTriggerResolutionResult: cocoascript.INSetTaskAttributeTemporalEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for snoozing a task.
   * https://developer.apple.com/documentation/sirikit/insnoozetaskstaskresolutionresult
   */
  interface INSnoozeTasksTaskResolutionResult extends INTaskResolutionResult {
    // https://developer.apple.com/documentation/sirikit/insnoozetaskstaskresolutionresult/3141861-initwithtaskresolutionresult
    initWithTaskResolutionResult(taskResolutionResult: INTaskResolutionResult):INSnoozeTasksTaskResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insnoozetaskstaskresolutionresult/3141862-unsupportedforreason
    unsupportedForReason(reason: INSnoozeTasksTaskUnsupportedReason):INSnoozeTasksTaskResolutionResult;
    //
    alloc():INSnoozeTasksTaskResolutionResult;
    //
    init():INSnoozeTasksTaskResolutionResult;
  }
}

declare const INSnoozeTasksTaskResolutionResult: cocoascript.INSnoozeTasksTaskResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the location-based trigger associated with a task.
   * https://developer.apple.com/documentation/sirikit/inspatialeventtriggerresolutionresult
   */
  interface INSpatialEventTriggerResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inspatialeventtriggerresolutionresult/2879156-successwithresolvedspatialeventt
    successWithResolvedSpatialEventTrigger(resolvedSpatialEventTrigger: INSpatialEventTrigger):INSpatialEventTriggerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inspatialeventtriggerresolutionresult/2879161-confirmationrequiredwithspatiale
    confirmationRequiredWithSpatialEventTriggerToConfirm(spatialEventTriggerToConfirm: INSpatialEventTrigger):INSpatialEventTriggerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inspatialeventtriggerresolutionresult/2879145-disambiguationwithspatialeventtr
    disambiguationWithSpatialEventTriggersToDisambiguate(spatialEventTriggersToDisambiguate: INSpatialEventTrigger):INSpatialEventTriggerResolutionResult;
    //
    alloc():INSpatialEventTriggerResolutionResult;
    //
    init():INSpatialEventTriggerResolutionResult;
  }
}

declare const INSpatialEventTriggerResolutionResult: cocoascript.INSpatialEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a list of tasks.
   * https://developer.apple.com/documentation/sirikit/intasklistresolutionresult
   */
  interface INTaskListResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intasklistresolutionresult/2879152-successwithresolvedtasklist
    successWithResolvedTaskList(resolvedTaskList: INTaskList):INTaskListResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intasklistresolutionresult/2879157-confirmationrequiredwithtasklist
    confirmationRequiredWithTaskListToConfirm(taskListToConfirm: INTaskList):INTaskListResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intasklistresolutionresult/2879144-disambiguationwithtaskliststodis
    disambiguationWithTaskListsToDisambiguate(taskListsToDisambiguate: INTaskList):INTaskListResolutionResult;
    //
    alloc():INTaskListResolutionResult;
    //
    init():INTaskListResolutionResult;
  }
}

declare const INTaskListResolutionResult: cocoascript.INTaskListResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a single task within a task list.
   * https://developer.apple.com/documentation/sirikit/intaskresolutionresult
   */
  interface INTaskResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intaskresolutionresult/2879147-successwithresolvedtask
    successWithResolvedTask(resolvedTask: INTask):INTaskResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intaskresolutionresult/2879154-confirmationrequiredwithtasktoco
    confirmationRequiredWithTaskToConfirm(taskToConfirm: INTask):INTaskResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intaskresolutionresult/2879149-disambiguationwithtaskstodisambi
    disambiguationWithTasksToDisambiguate(tasksToDisambiguate: INTask):INTaskResolutionResult;
    //
    alloc():INTaskResolutionResult;
    //
    init():INTaskResolutionResult;
  }
}

declare const INTaskResolutionResult: cocoascript.INTaskResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the status of a task.
   * https://developer.apple.com/documentation/sirikit/intaskstatusresolutionresult
   */
  interface INTaskStatusResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intaskstatusresolutionresult/2875697-successwithresolvedtaskstatus
    successWithResolvedTaskStatus(resolvedTaskStatus: INTaskStatus):INTaskStatusResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intaskstatusresolutionresult/2875636-confirmationrequiredwithtaskstat
    confirmationRequiredWithTaskStatusToConfirm(taskStatusToConfirm: INTaskStatus):INTaskStatusResolutionResult;
    //
    alloc():INTaskStatusResolutionResult;
    //
    init():INTaskStatusResolutionResult;
  }
}

declare const INTaskStatusResolutionResult: cocoascript.INTaskStatusResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the time-based trigger associated with a task.
   * https://developer.apple.com/documentation/sirikit/intemporaleventtriggerresolutionresult
   */
  interface INTemporalEventTriggerResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intemporaleventtriggerresolutionresult/2879141-successwithresolvedtemporalevent
    successWithResolvedTemporalEventTrigger(resolvedTemporalEventTrigger: INTemporalEventTrigger):INTemporalEventTriggerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intemporaleventtriggerresolutionresult/2879148-confirmationrequiredwithtemporal
    confirmationRequiredWithTemporalEventTriggerToConfirm(temporalEventTriggerToConfirm: INTemporalEventTrigger):INTemporalEventTriggerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intemporaleventtriggerresolutionresult/2879143-disambiguationwithtemporaleventt
    disambiguationWithTemporalEventTriggersToDisambiguate(temporalEventTriggersToDisambiguate: INTemporalEventTrigger):INTemporalEventTriggerResolutionResult;
    //
    alloc():INTemporalEventTriggerResolutionResult;
    //
    init():INTemporalEventTriggerResolutionResult;
  }
}

declare const INTemporalEventTriggerResolutionResult: cocoascript.INTemporalEventTriggerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the priority associated with a task.
   * https://developer.apple.com/documentation/sirikit/intaskpriorityresolutionresult
   */
  interface INTaskPriorityResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intaskpriorityresolutionresult/3141872-successwithresolvedtaskpriority
    successWithResolvedTaskPriority(resolvedTaskPriority: INTaskPriority):INTaskPriorityResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intaskpriorityresolutionresult/3141871-confirmationrequiredwithtaskprio
    confirmationRequiredWithTaskPriorityToConfirm(taskPriorityToConfirm: INTaskPriority):INTaskPriorityResolutionResult;
    //
    alloc():INTaskPriorityResolutionResult;
    //
    init():INTaskPriorityResolutionResult;
  }
}

declare const INTaskPriorityResolutionResult: cocoascript.INTaskPriorityResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the type of data contained in notes.
   * https://developer.apple.com/documentation/sirikit/innotecontenttyperesolutionresult
   */
  interface INNoteContentTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/innotecontenttyperesolutionresult/2875624-successwithresolvednotecontentty
    successWithResolvedNoteContentType(resolvedNoteContentType: INNoteContentType):INNoteContentTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/innotecontenttyperesolutionresult/2875614-confirmationrequiredwithnotecont
    confirmationRequiredWithNoteContentTypeToConfirm(noteContentTypeToConfirm: INNoteContentType):INNoteContentTypeResolutionResult;
    //
    alloc():INNoteContentTypeResolutionResult;
    //
    init():INNoteContentTypeResolutionResult;
  }
}

declare const INNoteContentTypeResolutionResult: cocoascript.INNoteContentTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the range of dates associated with an intent.
   * https://developer.apple.com/documentation/sirikit/indatecomponentsrangeresolutionresult
   */
  interface INDateComponentsRangeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrangeresolutionresult/1906920-successwithresolveddatecomponent
    successWithResolvedDateComponentsRange(resolvedDateComponentsRange: INDateComponentsRange):INDateComponentsRangeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrangeresolutionresult/1906923-confirmationrequiredwithdatecomp
    confirmationRequiredWithDateComponentsRangeToConfirm(dateComponentsRangeToConfirm: INDateComponentsRange):INDateComponentsRangeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsrangeresolutionresult/1906922-disambiguationwithdatecomponents
    disambiguationWithDateComponentsRangesToDisambiguate(dateComponentsRangesToDisambiguate: INDateComponentsRange):INDateComponentsRangeResolutionResult;
    //
    alloc():INDateComponentsRangeResolutionResult;
    //
    init():INDateComponentsRangeResolutionResult;
  }
}

declare const INDateComponentsRangeResolutionResult: cocoascript.INDateComponentsRangeResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insnoozetasksintentresponsecode
  type INSnoozeTasksIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incaraudiosource
  type INCarAudioSource = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the audio source to use in a car.
   * https://developer.apple.com/documentation/sirikit/incaraudiosourceresolutionresult
   */
  interface INCarAudioSourceResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incaraudiosourceresolutionresult/1904855-successwithresolvedcaraudiosourc
    successWithResolvedCarAudioSource(resolvedCarAudioSource: INCarAudioSource):INCarAudioSourceResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incaraudiosourceresolutionresult/1904854-confirmationrequiredwithcaraudio
    confirmationRequiredWithCarAudioSourceToConfirm(carAudioSourceToConfirm: INCarAudioSource):INCarAudioSourceResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incaraudiosourceresolutionresult/2933988-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCarAudioSource):INCarAudioSourceResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incaraudiosourceresolutionresult/2933987-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCarAudioSource):INCarAudioSourceResolutionResult;
    //
    alloc():INCarAudioSourceResolutionResult;
    //
    init():INCarAudioSourceResolutionResult;
  }
}

declare const INCarAudioSourceResolutionResult: cocoascript.INCarAudioSourceResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrelativereference
  type INRelativeReference = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a choice between the next or previous option.
   * https://developer.apple.com/documentation/sirikit/inrelativereferenceresolutionresult
   */
  interface INRelativeReferenceResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inrelativereferenceresolutionresult/1902364-successwithresolvedrelativerefer
    successWithResolvedRelativeReference(resolvedRelativeReference: INRelativeReference):INRelativeReferenceResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrelativereferenceresolutionresult/1902363-confirmationrequiredwithrelative
    confirmationRequiredWithRelativeReferenceToConfirm(relativeReferenceToConfirm: INRelativeReference):INRelativeReferenceResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrelativereferenceresolutionresult/2933974-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INRelativeReference):INRelativeReferenceResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrelativereferenceresolutionresult/2933973-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INRelativeReference):INRelativeReferenceResolutionResult;
    //
    alloc():INRelativeReferenceResolutionResult;
    //
    init():INRelativeReferenceResolutionResult;
  }
}

declare const INRelativeReferenceResolutionResult: cocoascript.INRelativeReferenceResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetaudiosourceincarintentresponsecode
  type INSetAudioSourceInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/indeletetasksintentresponsecode
  type INDeleteTasksIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/indeletetaskstasklistunsupportedreason
  type INDeleteTasksTaskListUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/indeletetaskstaskunsupportedreason
  type INDeleteTasksTaskUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/sirikit/inoutgoingmessagetyperesolutionresult
   */
  interface INOutgoingMessageTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inoutgoingmessagetyperesolutionresult/3552223-confirmationrequiredwithoutgoing
    confirmationRequiredWithOutgoingMessageTypeToConfirm(outgoingMessageTypeToConfirm: INOutgoingMessageType):INOutgoingMessageTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inoutgoingmessagetyperesolutionresult/3552224-successwithresolvedoutgoingmessa
    successWithResolvedOutgoingMessageType(resolvedOutgoingMessageType: INOutgoingMessageType):INOutgoingMessageTypeResolutionResult;
    //
    alloc():INOutgoingMessageTypeResolutionResult;
    //
    init():INOutgoingMessageTypeResolutionResult;
  }
}

declare const INOutgoingMessageTypeResolutionResult: cocoascript.INOutgoingMessageTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for assorted attributes of a message.
   * https://developer.apple.com/documentation/sirikit/inmessageattributeresolutionresult
   */
  interface INMessageAttributeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inmessageattributeresolutionresult/1902369-successwithresolvedmessageattrib
    successWithResolvedMessageAttribute(resolvedMessageAttribute: INMessageAttribute):INMessageAttributeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmessageattributeresolutionresult/1902368-confirmationrequiredwithmessagea
    confirmationRequiredWithMessageAttributeToConfirm(messageAttributeToConfirm: INMessageAttribute):INMessageAttributeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmessageattributeresolutionresult/2933976-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INMessageAttribute):INMessageAttributeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmessageattributeresolutionresult/2933975-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INMessageAttribute):INMessageAttributeResolutionResult;
    //
    alloc():INMessageAttributeResolutionResult;
    //
    init():INMessageAttributeResolutionResult;
  }
}

declare const INMessageAttributeResolutionResult: cocoascript.INMessageAttributeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the options applied to a message.
   * https://developer.apple.com/documentation/sirikit/inmessageattributeoptionsresolutionresult
   */
  interface INMessageAttributeOptionsResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inmessageattributeoptionsresolutionresult/1906939-successwithresolvedmessageattrib
    successWithResolvedMessageAttributeOptions(resolvedMessageAttributeOptions: INMessageAttributeOptions):INMessageAttributeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmessageattributeoptionsresolutionresult/1906938-confirmationrequiredwithmessagea
    confirmationRequiredWithMessageAttributeOptionsToConfirm(messageAttributeOptionsToConfirm: INMessageAttributeOptions):INMessageAttributeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmessageattributeoptionsresolutionresult/2933992-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INMessageAttributeOptions):INMessageAttributeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmessageattributeoptionsresolutionresult/2933991-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INMessageAttributeOptions):INMessageAttributeOptionsResolutionResult;
    //
    alloc():INMessageAttributeOptionsResolutionResult;
    //
    init():INMessageAttributeOptionsResolutionResult;
  }
}

declare const INMessageAttributeOptionsResolutionResult: cocoascript.INMessageAttributeOptionsResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a message.
   * https://developer.apple.com/documentation/sirikit/insendmessagerecipientresolutionresult
   */
  interface INSendMessageRecipientResolutionResult extends INPersonResolutionResult {
    // https://developer.apple.com/documentation/sirikit/insendmessagerecipientresolutionresult/2914622-unsupportedforreason
    unsupportedForReason(reason: INSendMessageRecipientUnsupportedReason):INSendMessageRecipientResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insendmessagerecipientresolutionresult/2914612-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult):INSendMessageRecipientResolutionResult;
    //
    alloc():INSendMessageRecipientResolutionResult;
    //
    init():INSendMessageRecipientResolutionResult;
  }
}

declare const INSendMessageRecipientResolutionResult: cocoascript.INSendMessageRecipientResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a user associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inpersonresolutionresult
   */
  interface INPersonResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inpersonresolutionresult/1902499-successwithresolvedperson
    successWithResolvedPerson(resolvedPerson: INPerson):INPersonResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpersonresolutionresult/1902496-confirmationrequiredwithpersonto
    confirmationRequiredWithPersonToConfirm(personToConfirm: INPerson):INPersonResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpersonresolutionresult/1902497-disambiguationwithpeopletodisamb
    disambiguationWithPeopleToDisambiguate(peopleToDisambiguate: INPerson):INPersonResolutionResult;
    //
    alloc():INPersonResolutionResult;
    //
    init():INPersonResolutionResult;
  }
}

declare const INPersonResolutionResult: cocoascript.INPersonResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetmessageattributeintentresponsecode
  type INSetMessageAttributeIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for an integer value associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inintegerresolutionresult
   */
  interface INIntegerResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inintegerresolutionresult/1888714-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: NSInteger):INIntegerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inintegerresolutionresult/1888715-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: NSNumber):INIntegerResolutionResult;
    //
    alloc():INIntegerResolutionResult;
    //
    init():INIntegerResolutionResult;
  }
}

declare const INIntegerResolutionResult: cocoascript.INIntegerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a string value associated with an intent.
   * https://developer.apple.com/documentation/sirikit/instringresolutionresult
   */
  interface INStringResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/instringresolutionresult/1902377-successwithresolvedstring
    successWithResolvedString(resolvedString: string | cocoascript.NSString):INStringResolutionResult;
    // https://developer.apple.com/documentation/sirikit/instringresolutionresult/1902375-confirmationrequiredwithstringto
    confirmationRequiredWithStringToConfirm(stringToConfirm: string | cocoascript.NSString):INStringResolutionResult;
    // https://developer.apple.com/documentation/sirikit/instringresolutionresult/1902378-disambiguationwithstringstodisam
    disambiguationWithStringsToDisambiguate(stringsToDisambiguate: string | cocoascript.NSString):INStringResolutionResult;
    //
    alloc():INStringResolutionResult;
    //
    init():INStringResolutionResult;
  }
}

declare const INStringResolutionResult: cocoascript.INStringResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insaveprofileincarintentresponsecode
  type INSaveProfileInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for account types.
   * https://developer.apple.com/documentation/sirikit/inaccounttyperesolutionresult
   */
  interface INAccountTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inaccounttyperesolutionresult/2867303-successwithresolvedaccounttype
    successWithResolvedAccountType(resolvedAccountType: INAccountType):INAccountTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaccounttyperesolutionresult/2867304-confirmationrequiredwithaccountt
    confirmationRequiredWithAccountTypeToConfirm(accountTypeToConfirm: INAccountType):INAccountTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaccounttyperesolutionresult/2934001-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INAccountType):INAccountTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaccounttyperesolutionresult/2934002-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INAccountType):INAccountTypeResolutionResult;
    //
    alloc():INAccountTypeResolutionResult;
    //
    init():INAccountTypeResolutionResult;
  }
}

declare const INAccountTypeResolutionResult: cocoascript.INAccountTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for balance types.
   * https://developer.apple.com/documentation/sirikit/inbalancetyperesolutionresult
   */
  interface INBalanceTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inbalancetyperesolutionresult/2866592-successwithresolvedbalancetype
    successWithResolvedBalanceType(resolvedBalanceType: INBalanceType):INBalanceTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbalancetyperesolutionresult/2866590-confirmationrequiredwithbalancet
    confirmationRequiredWithBalanceTypeToConfirm(balanceTypeToConfirm: INBalanceType):INBalanceTypeResolutionResult;
    //
    alloc():INBalanceTypeResolutionResult;
    //
    init():INBalanceTypeResolutionResult;
  }
}

declare const INBalanceTypeResolutionResult: cocoascript.INBalanceTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a currency amount associated with an intent.
   * https://developer.apple.com/documentation/sirikit/incurrencyamountresolutionresult
   */
  interface INCurrencyAmountResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incurrencyamountresolutionresult/1906932-successwithresolvedcurrencyamoun
    successWithResolvedCurrencyAmount(resolvedCurrencyAmount: INCurrencyAmount):INCurrencyAmountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incurrencyamountresolutionresult/1906933-confirmationrequiredwithcurrency
    confirmationRequiredWithCurrencyAmountToConfirm(currencyAmountToConfirm: INCurrencyAmount):INCurrencyAmountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incurrencyamountresolutionresult/1906935-disambiguationwithcurrencyamount
    disambiguationWithCurrencyAmountsToDisambiguate(currencyAmountsToDisambiguate: INCurrencyAmount):INCurrencyAmountResolutionResult;
    //
    alloc():INCurrencyAmountResolutionResult;
    //
    init():INCurrencyAmountResolutionResult;
  }
}

declare const INCurrencyAmountResolutionResult: cocoascript.INCurrencyAmountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the user account that provides the funds to pay a bill.
   * https://developer.apple.com/documentation/sirikit/inpaymentaccountresolutionresult
   */
  interface INPaymentAccountResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inpaymentaccountresolutionresult/2799057-successwithresolvedpaymentaccoun
    successWithResolvedPaymentAccount(resolvedPaymentAccount: INPaymentAccount):INPaymentAccountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccountresolutionresult/2799054-confirmationrequiredwithpaymenta
    confirmationRequiredWithPaymentAccountToConfirm(paymentAccountToConfirm: INPaymentAccount):INPaymentAccountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentaccountresolutionresult/2799055-disambiguationwithpaymentaccount
    disambiguationWithPaymentAccountsToDisambiguate(paymentAccountsToDisambiguate: INPaymentAccount):INPaymentAccountResolutionResult;
    //
    alloc():INPaymentAccountResolutionResult;
    //
    init():INPaymentAccountResolutionResult;
  }
}

declare const INPaymentAccountResolutionResult: cocoascript.INPaymentAccountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the amount to pay for a bill.
   * https://developer.apple.com/documentation/sirikit/inpaymentamountresolutionresult
   */
  interface INPaymentAmountResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inpaymentamountresolutionresult/2799251-successwithresolvedpaymentamount
    successWithResolvedPaymentAmount(resolvedPaymentAmount: INPaymentAmount):INPaymentAmountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentamountresolutionresult/2799249-confirmationrequiredwithpaymenta
    confirmationRequiredWithPaymentAmountToConfirm(paymentAmountToConfirm: INPaymentAmount):INPaymentAmountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentamountresolutionresult/2799252-disambiguationwithpaymentamounts
    disambiguationWithPaymentAmountsToDisambiguate(paymentAmountsToDisambiguate: INPaymentAmount):INPaymentAmountResolutionResult;
    //
    alloc():INPaymentAmountResolutionResult;
    //
    init():INPaymentAmountResolutionResult;
  }
}

declare const INPaymentAmountResolutionResult: cocoascript.INPaymentAmountResolutionResult;
declare namespace cocoascript {
  /**
   * Describes the result of resolving a payment method.
   * https://developer.apple.com/documentation/sirikit/inpaymentmethodresolutionresult
   */
  interface INPaymentMethodResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inpaymentmethodresolutionresult/1902391-confirmationrequiredwithpaymentm
    confirmationRequiredWithPaymentMethodToConfirm(paymentMethodToConfirm: INPaymentMethod):INPaymentMethodResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethodresolutionresult/1902394-disambiguationwithpaymentmethods
    disambiguationWithPaymentMethodsToDisambiguate(paymentMethodsToDisambiguate: INPaymentMethod):INPaymentMethodResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentmethodresolutionresult/1902389-successwithresolvedpaymentmethod
    successWithResolvedPaymentMethod(resolvedPaymentMethod: INPaymentMethod):INPaymentMethodResolutionResult;
    //
    alloc():INPaymentMethodResolutionResult;
    //
    init():INPaymentMethodResolutionResult;
  }
}

declare const INPaymentMethodResolutionResult: cocoascript.INPaymentMethodResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the payment status of a bill during a search.
   * https://developer.apple.com/documentation/sirikit/inpaymentstatusresolutionresult
   */
  interface INPaymentStatusResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inpaymentstatusresolutionresult/2799123-successwithresolvedpaymentstatus
    successWithResolvedPaymentStatus(resolvedPaymentStatus: INPaymentStatus):INPaymentStatusResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentstatusresolutionresult/2799125-confirmationrequiredwithpayments
    confirmationRequiredWithPaymentStatusToConfirm(paymentStatusToConfirm: INPaymentStatus):INPaymentStatusResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentstatusresolutionresult/2933995-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INPaymentStatus):INPaymentStatusResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inpaymentstatusresolutionresult/2933996-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INPaymentStatus):INPaymentStatusResolutionResult;
    //
    alloc():INPaymentStatusResolutionResult;
    //
    init():INPaymentStatusResolutionResult;
  }
}

declare const INPaymentStatusResolutionResult: cocoascript.INPaymentStatusResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the currency amount associated with a payment request.
   * https://developer.apple.com/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult
   */
  interface INRequestPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult/2875666-unsupportedforreason
    unsupportedForReason(reason: INRequestPaymentCurrencyAmountUnsupportedReason):INRequestPaymentCurrencyAmountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentcurrencyamountresolutionresult/2915220-initwithcurrencyamountresolution
    initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: INCurrencyAmountResolutionResult):INRequestPaymentCurrencyAmountResolutionResult;
    //
    alloc():INRequestPaymentCurrencyAmountResolutionResult;
    //
    init():INRequestPaymentCurrencyAmountResolutionResult;
  }
}

declare const INRequestPaymentCurrencyAmountResolutionResult: cocoascript.INRequestPaymentCurrencyAmountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the person making the payment.
   * https://developer.apple.com/documentation/sirikit/inrequestpaymentpayerresolutionresult
   */
  interface INRequestPaymentPayerResolutionResult extends INPersonResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentpayerresolutionresult/2875362-unsupportedforreason
    unsupportedForReason(reason: INRequestPaymentPayerUnsupportedReason):INRequestPaymentPayerResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrequestpaymentpayerresolutionresult/2915217-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult):INRequestPaymentPayerResolutionResult;
    //
    alloc():INRequestPaymentPayerResolutionResult;
    //
    init():INRequestPaymentPayerResolutionResult;
  }
}

declare const INRequestPaymentPayerResolutionResult: cocoascript.INRequestPaymentPayerResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the currency amount to send to another user.
   * https://developer.apple.com/documentation/sirikit/insendpaymentcurrencyamountresolutionresult
   */
  interface INSendPaymentCurrencyAmountResolutionResult extends INCurrencyAmountResolutionResult {
    // https://developer.apple.com/documentation/sirikit/insendpaymentcurrencyamountresolutionresult/2875701-unsupportedforreason
    unsupportedForReason(reason: INSendPaymentCurrencyAmountUnsupportedReason):INSendPaymentCurrencyAmountResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insendpaymentcurrencyamountresolutionresult/2915223-initwithcurrencyamountresolution
    initWithCurrencyAmountResolutionResult(currencyAmountResolutionResult: INCurrencyAmountResolutionResult):INSendPaymentCurrencyAmountResolutionResult;
    //
    alloc():INSendPaymentCurrencyAmountResolutionResult;
    //
    init():INSendPaymentCurrencyAmountResolutionResult;
  }
}

declare const INSendPaymentCurrencyAmountResolutionResult: cocoascript.INSendPaymentCurrencyAmountResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the recipient of a payment.
   * https://developer.apple.com/documentation/sirikit/insendpaymentpayeeresolutionresult
   */
  interface INSendPaymentPayeeResolutionResult extends INPersonResolutionResult {
    // https://developer.apple.com/documentation/sirikit/insendpaymentpayeeresolutionresult/2875696-unsupportedforreason
    unsupportedForReason(reason: INSendPaymentPayeeUnsupportedReason):INSendPaymentPayeeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insendpaymentpayeeresolutionresult/2914909-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult):INSendPaymentPayeeResolutionResult;
    //
    alloc():INSendPaymentPayeeResolutionResult;
    //
    init():INSendPaymentPayeeResolutionResult;
  }
}

declare const INSendPaymentPayeeResolutionResult: cocoascript.INSendPaymentPayeeResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insendpaymentintentresponsecode
  type INSendPaymentIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a speakable string object associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inspeakablestringresolutionresult
   */
  interface INSpeakableStringResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inspeakablestringresolutionresult/2092304-successwithresolvedstring
    successWithResolvedString(resolvedString: INSpeakableString):INSpeakableStringResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inspeakablestringresolutionresult/2092307-confirmationrequiredwithstringto
    confirmationRequiredWithStringToConfirm(stringToConfirm: INSpeakableString):INSpeakableStringResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inspeakablestringresolutionresult/2092305-disambiguationwithstringstodisam
    disambiguationWithStringsToDisambiguate(stringsToDisambiguate: INSpeakableString):INSpeakableStringResolutionResult;
    //
    alloc():INSpeakableStringResolutionResult;
    //
    init():INSpeakableStringResolutionResult;
  }
}

declare const INSpeakableStringResolutionResult: cocoascript.INSpeakableStringResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/increatenoteintentresponsecode
  type INCreateNoteIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrequestrideintentresponsecode
  type INRequestRideIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for placemark information associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inplacemarkresolutionresult
   */
  interface INPlacemarkResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inplacemarkresolutionresult/1902457-successwithresolvedplacemark
    successWithResolvedPlacemark(resolvedPlacemark: CLPlacemark):INPlacemarkResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplacemarkresolutionresult/1902453-confirmationrequiredwithplacemar
    confirmationRequiredWithPlacemarkToConfirm(placemarkToConfirm: CLPlacemark):INPlacemarkResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplacemarkresolutionresult/1902456-disambiguationwithplacemarkstodi
    disambiguationWithPlacemarksToDisambiguate(placemarksToDisambiguate: CLPlacemark):INPlacemarkResolutionResult;
    //
    alloc():INPlacemarkResolutionResult;
    //
    init():INPlacemarkResolutionResult;
  }
}

declare const INPlacemarkResolutionResult: cocoascript.INPlacemarkResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the restaurant selected by a user.
   * https://developer.apple.com/documentation/sirikit/inrestaurantresolutionresult
   */
  interface INRestaurantResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inrestaurantresolutionresult/2305433-successwithresolvedrestaurant
    successWithResolvedRestaurant(resolvedRestaurant: INRestaurant):INRestaurantResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrestaurantresolutionresult/2305410-confirmationrequiredwithrestaura
    confirmationRequiredWithRestaurantToConfirm(restaurantToConfirm: INRestaurant):INRestaurantResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrestaurantresolutionresult/2305428-disambiguationwithrestaurantstod
    disambiguationWithRestaurantsToDisambiguate(restaurantsToDisambiguate: INRestaurant):INRestaurantResolutionResult;
    //
    alloc():INRestaurantResolutionResult;
    //
    init():INRestaurantResolutionResult;
  }
}

declare const INRestaurantResolutionResult: cocoascript.INRestaurantResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the identity of a user involved in booking a reservation at a restaurant.
   * https://developer.apple.com/documentation/sirikit/inrestaurantguestresolutionresult
   */
  interface INRestaurantGuestResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestresolutionresult/2305413-successwithresolvedrestaurantgue
    successWithResolvedRestaurantGuest(resolvedRestaurantGuest: INRestaurantGuest):INRestaurantGuestResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestresolutionresult/2305416-confirmationrequiredwithrestaura
    confirmationRequiredWithRestaurantGuestToConfirm(restaurantGuestToConfirm: INRestaurantGuest):INRestaurantGuestResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrestaurantguestresolutionresult/2305411-disambiguationwithrestaurantgues
    disambiguationWithRestaurantGuestsToDisambiguate(restaurantGuestsToDisambiguate: INRestaurantGuest):INRestaurantGuestResolutionResult;
    //
    alloc():INRestaurantGuestResolutionResult;
    //
    init():INRestaurantGuestResolutionResult;
  }
}

declare const INRestaurantGuestResolutionResult: cocoascript.INRestaurantGuestResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetusercurrentrestaurantreservationbookingsintentresponsecode
  type INGetUserCurrentRestaurantReservationBookingsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inworkoutnameidentifier
  type INWorkoutNameIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inworkoutgoalunittype
  type INWorkoutGoalUnitType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inworkoutlocationtype
  type INWorkoutLocationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the units of a workout goal.
   * https://developer.apple.com/documentation/sirikit/inworkoutgoalunittyperesolutionresult
   */
  interface INWorkoutGoalUnitTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inworkoutgoalunittyperesolutionresult/1902384-successwithresolvedworkoutgoalun
    successWithResolvedWorkoutGoalUnitType(resolvedWorkoutGoalUnitType: INWorkoutGoalUnitType):INWorkoutGoalUnitTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inworkoutgoalunittyperesolutionresult/1902385-confirmationrequiredwithworkoutg
    confirmationRequiredWithWorkoutGoalUnitTypeToConfirm(workoutGoalUnitTypeToConfirm: INWorkoutGoalUnitType):INWorkoutGoalUnitTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inworkoutgoalunittyperesolutionresult/2933979-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INWorkoutGoalUnitType):INWorkoutGoalUnitTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inworkoutgoalunittyperesolutionresult/2933980-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INWorkoutGoalUnitType):INWorkoutGoalUnitTypeResolutionResult;
    //
    alloc():INWorkoutGoalUnitTypeResolutionResult;
    //
    init():INWorkoutGoalUnitTypeResolutionResult;
  }
}

declare const INWorkoutGoalUnitTypeResolutionResult: cocoascript.INWorkoutGoalUnitTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the location type where the workout occurs.
   * https://developer.apple.com/documentation/sirikit/inworkoutlocationtyperesolutionresult
   */
  interface INWorkoutLocationTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inworkoutlocationtyperesolutionresult/1902430-successwithresolvedworkoutlocati
    successWithResolvedWorkoutLocationType(resolvedWorkoutLocationType: INWorkoutLocationType):INWorkoutLocationTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inworkoutlocationtyperesolutionresult/1902432-confirmationrequiredwithworkoutl
    confirmationRequiredWithWorkoutLocationTypeToConfirm(workoutLocationTypeToConfirm: INWorkoutLocationType):INWorkoutLocationTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inworkoutlocationtyperesolutionresult/2933985-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INWorkoutLocationType):INWorkoutLocationTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inworkoutlocationtyperesolutionresult/2933986-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INWorkoutLocationType):INWorkoutLocationTypeResolutionResult;
    //
    alloc():INWorkoutLocationTypeResolutionResult;
    //
    init():INWorkoutLocationTypeResolutionResult;
  }
}

declare const INWorkoutLocationTypeResolutionResult: cocoascript.INWorkoutLocationTypeResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inresumeworkoutintentresponsecode
  type INResumeWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inappendtonoteintentresponsecode
  type INAppendToNoteIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a Boolean value associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inbooleanresolutionresult
   */
  interface INBooleanResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inbooleanresolutionresult/1906928-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: BOOL):INBooleanResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inbooleanresolutionresult/1906927-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: NSNumber):INBooleanResolutionResult;
    //
    alloc():INBooleanResolutionResult;
    //
    init():INBooleanResolutionResult;
  }
}

declare const INBooleanResolutionResult: cocoascript.INBooleanResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for which defroster to use in a car.
   * https://developer.apple.com/documentation/sirikit/incardefrosterresolutionresult
   */
  interface INCarDefrosterResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incardefrosterresolutionresult/1902347-successwithresolvedcardefroster
    successWithResolvedCarDefroster(resolvedCarDefroster: INCarDefroster):INCarDefrosterResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incardefrosterresolutionresult/1902346-confirmationrequiredwithcardefro
    confirmationRequiredWithCarDefrosterToConfirm(carDefrosterToConfirm: INCarDefroster):INCarDefrosterResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incardefrosterresolutionresult/2933970-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCarDefroster):INCarDefrosterResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incardefrosterresolutionresult/2933969-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCarDefroster):INCarDefrosterResolutionResult;
    //
    alloc():INCarDefrosterResolutionResult;
    //
    init():INCarDefrosterResolutionResult;
  }
}

declare const INCarDefrosterResolutionResult: cocoascript.INCarDefrosterResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetdefrostersettingsincarintentresponsecode
  type INSetDefrosterSettingsInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inendworkoutintentresponsecode
  type INEndWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpauseworkoutintentresponsecode
  type INPauseWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingdefaultsintentresponsecode
  type INGetAvailableRestaurantReservationBookingDefaultsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the call capability for the call.
   * https://developer.apple.com/documentation/sirikit/incallcapabilityresolutionresult
   */
  interface INCallCapabilityResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incallcapabilityresolutionresult/3165922-successwithresolvedcallcapabilit
    successWithResolvedCallCapability(resolvedCallCapability: INCallCapability):INCallCapabilityResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallcapabilityresolutionresult/3165921-confirmationrequiredwithcallcapa
    confirmationRequiredWithCallCapabilityToConfirm(callCapabilityToConfirm: INCallCapability):INCallCapabilityResolutionResult;
    //
    alloc():INCallCapabilityResolutionResult;
    //
    init():INCallCapabilityResolutionResult;
  }
}

declare const INCallCapabilityResolutionResult: cocoascript.INCallCapabilityResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the destination type of a call.
   * https://developer.apple.com/documentation/sirikit/incalldestinationtyperesolutionresult
   */
  interface INCallDestinationTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incalldestinationtyperesolutionresult/2873700-successwithresolvedcalldestinati
    successWithResolvedCallDestinationType(resolvedCallDestinationType: INCallDestinationType):INCallDestinationTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incalldestinationtyperesolutionresult/2873702-confirmationrequiredwithcalldest
    confirmationRequiredWithCallDestinationTypeToConfirm(callDestinationTypeToConfirm: INCallDestinationType):INCallDestinationTypeResolutionResult;
    //
    alloc():INCallDestinationTypeResolutionResult;
    //
    init():INCallDestinationTypeResolutionResult;
  }
}

declare const INCallDestinationTypeResolutionResult: cocoascript.INCallDestinationTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types of calls that your app handled.
   * https://developer.apple.com/documentation/sirikit/incallrecordtyperesolutionresult
   */
  interface INCallRecordTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incallrecordtyperesolutionresult/1902352-successwithresolvedcallrecordtyp
    successWithResolvedCallRecordType(resolvedCallRecordType: INCallRecordType):INCallRecordTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordtyperesolutionresult/1902351-confirmationrequiredwithcallreco
    confirmationRequiredWithCallRecordTypeToConfirm(callRecordTypeToConfirm: INCallRecordType):INCallRecordTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordtyperesolutionresult/2933972-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCallRecordType):INCallRecordTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordtyperesolutionresult/2933971-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCallRecordType):INCallRecordTypeResolutionResult;
    //
    alloc():INCallRecordTypeResolutionResult;
    //
    init():INCallRecordTypeResolutionResult;
  }
}

declare const INCallRecordTypeResolutionResult: cocoascript.INCallRecordTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the call types to include in a search.
   * https://developer.apple.com/documentation/sirikit/incallrecordtypeoptionsresolutionresult
   */
  interface INCallRecordTypeOptionsResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incallrecordtypeoptionsresolutionresult/2867599-successwithresolvedcallrecordtyp
    successWithResolvedCallRecordTypeOptions(resolvedCallRecordTypeOptions: INCallRecordTypeOptions):INCallRecordTypeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordtypeoptionsresolutionresult/2867601-confirmationrequiredwithcallreco
    confirmationRequiredWithCallRecordTypeOptionsToConfirm(callRecordTypeOptionsToConfirm: INCallRecordTypeOptions):INCallRecordTypeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordtypeoptionsresolutionresult/2934003-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCallRecordTypeOptions):INCallRecordTypeOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordtypeoptionsresolutionresult/2934004-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCallRecordTypeOptions):INCallRecordTypeOptionsResolutionResult;
    //
    alloc():INCallRecordTypeOptionsResolutionResult;
    //
    init():INCallRecordTypeOptionsResolutionResult;
  }
}

declare const INCallRecordTypeOptionsResolutionResult: cocoascript.INCallRecordTypeOptionsResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the call capability for the call.
   * https://developer.apple.com/documentation/sirikit/instartcallcallcapabilityresolutionresult
   */
  interface INStartCallCallCapabilityResolutionResult extends INCallCapabilityResolutionResult {
    // https://developer.apple.com/documentation/sirikit/instartcallcallcapabilityresolutionresult/3165924-initwithcallcapabilityresolution
    initWithCallCapabilityResolutionResult(callCapabilityResolutionResult: INCallCapabilityResolutionResult):INStartCallCallCapabilityResolutionResult;
    // https://developer.apple.com/documentation/sirikit/instartcallcallcapabilityresolutionresult/3165925-unsupportedforreason
    unsupportedForReason(reason: INStartCallCallCapabilityUnsupportedReason):INStartCallCallCapabilityResolutionResult;
    //
    alloc():INStartCallCallCapabilityResolutionResult;
    //
    init():INStartCallCallCapabilityResolutionResult;
  }
}

declare const INStartCallCallCapabilityResolutionResult: cocoascript.INStartCallCallCapabilityResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the contact for the call.
   * https://developer.apple.com/documentation/sirikit/instartcallcontactresolutionresult
   */
  interface INStartCallContactResolutionResult extends INPersonResolutionResult {
    // https://developer.apple.com/documentation/sirikit/instartcallcontactresolutionresult/3165931-initwithpersonresolutionresult
    initWithPersonResolutionResult(personResolutionResult: INPersonResolutionResult):INStartCallContactResolutionResult;
    // https://developer.apple.com/documentation/sirikit/instartcallcontactresolutionresult/3165932-unsupportedforreason
    unsupportedForReason(reason: INStartCallContactUnsupportedReason):INStartCallContactResolutionResult;
    //
    alloc():INStartCallContactResolutionResult;
    //
    init():INStartCallContactResolutionResult;
  }
}

declare const INStartCallContactResolutionResult: cocoascript.INStartCallContactResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incallaudioroute
  type INCallAudioRoute = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/sirikit/incallrecordresolutionresult
   */
  interface INCallRecordResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incallrecordresolutionresult/3649667-confirmationrequiredwithcallreco
    confirmationRequiredWithCallRecordToConfirm(callRecordToConfirm: INCallRecord):INCallRecordResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordresolutionresult/3649668-disambiguationwithcallrecordstod
    disambiguationWithCallRecordsToDisambiguate(callRecordsToDisambiguate: INCallRecord):INCallRecordResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incallrecordresolutionresult/3649669-successwithresolvedcallrecord
    successWithResolvedCallRecord(resolvedCallRecord: INCallRecord):INCallRecordResolutionResult;
    //
    alloc():INCallRecordResolutionResult;
    //
    init():INCallRecordResolutionResult;
  }
}

declare const INCallRecordResolutionResult: cocoascript.INCallRecordResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartcallintentresponsecode
  type INStartCallIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inconditionaloperator
  type INConditionalOperator = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartaudiocallintentresponsecode
  type INStartAudioCallIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incaraircirculationmode
  type INCarAirCirculationMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the air circulation mode to use in a car.
   * https://developer.apple.com/documentation/sirikit/incaraircirculationmoderesolutionresult
   */
  interface INCarAirCirculationModeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incaraircirculationmoderesolutionresult/1902411-successwithresolvedcaraircircula
    successWithResolvedCarAirCirculationMode(resolvedCarAirCirculationMode: INCarAirCirculationMode):INCarAirCirculationModeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incaraircirculationmoderesolutionresult/1902412-confirmationrequiredwithcarairci
    confirmationRequiredWithCarAirCirculationModeToConfirm(carAirCirculationModeToConfirm: INCarAirCirculationMode):INCarAirCirculationModeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incaraircirculationmoderesolutionresult/2933981-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCarAirCirculationMode):INCarAirCirculationModeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incaraircirculationmoderesolutionresult/2933982-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCarAirCirculationMode):INCarAirCirculationModeResolutionResult;
    //
    alloc():INCarAirCirculationModeResolutionResult;
    //
    init():INCarAirCirculationModeResolutionResult;
  }
}

declare const INCarAirCirculationModeResolutionResult: cocoascript.INCarAirCirculationModeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a double value associated with an intent.
   * https://developer.apple.com/documentation/sirikit/indoubleresolutionresult
   */
  interface INDoubleResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/indoubleresolutionresult/1906910-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: number):INDoubleResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indoubleresolutionresult/1906912-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: NSNumber):INDoubleResolutionResult;
    //
    alloc():INDoubleResolutionResult;
    //
    init():INDoubleResolutionResult;
  }
}

declare const INDoubleResolutionResult: cocoascript.INDoubleResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrelativesetting
  type INRelativeSetting = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for whether you can select the minimum, current, or maximum value.
   * https://developer.apple.com/documentation/sirikit/inrelativesettingresolutionresult
   */
  interface INRelativeSettingResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inrelativesettingresolutionresult/1906918-successwithresolvedrelativesetti
    successWithResolvedRelativeSetting(resolvedRelativeSetting: INRelativeSetting):INRelativeSettingResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrelativesettingresolutionresult/1906919-confirmationrequiredwithrelative
    confirmationRequiredWithRelativeSettingToConfirm(relativeSettingToConfirm: INRelativeSetting):INRelativeSettingResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrelativesettingresolutionresult/2933989-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INRelativeSetting):INRelativeSettingResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inrelativesettingresolutionresult/2933990-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INRelativeSetting):INRelativeSettingResolutionResult;
    //
    alloc():INRelativeSettingResolutionResult;
    //
    init():INRelativeSettingResolutionResult;
  }
}

declare const INRelativeSettingResolutionResult: cocoascript.INRelativeSettingResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the units to use with a temperature value.
   * https://developer.apple.com/documentation/sirikit/intemperatureresolutionresult
   */
  interface INTemperatureResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intemperatureresolutionresult/2132221-successwithresolvedtemperature
    successWithResolvedTemperature(resolvedTemperature: NSUnitTemperature):INTemperatureResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intemperatureresolutionresult/2132222-confirmationrequiredwithtemperat
    confirmationRequiredWithTemperatureToConfirm(temperatureToConfirm: NSUnitTemperature):INTemperatureResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intemperatureresolutionresult/2132223-disambiguationwithtemperaturesto
    disambiguationWithTemperaturesToDisambiguate(temperaturesToDisambiguate: NSUnitTemperature):INTemperatureResolutionResult;
    //
    alloc():INTemperatureResolutionResult;
    //
    init():INTemperatureResolutionResult;
  }
}

declare const INTemperatureResolutionResult: cocoascript.INTemperatureResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incarseat
  type INCarSeat = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a specific seat of the car.
   * https://developer.apple.com/documentation/sirikit/incarseatresolutionresult
   */
  interface INCarSeatResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incarseatresolutionresult/1902373-successwithresolvedcarseat
    successWithResolvedCarSeat(resolvedCarSeat: INCarSeat):INCarSeatResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incarseatresolutionresult/1902371-confirmationrequiredwithcarseatt
    confirmationRequiredWithCarSeatToConfirm(carSeatToConfirm: INCarSeat):INCarSeatResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incarseatresolutionresult/2933978-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCarSeat):INCarSeatResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incarseatresolutionresult/2933977-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCarSeat):INCarSeatResolutionResult;
    //
    alloc():INCarSeatResolutionResult;
    //
    init():INCarSeatResolutionResult;
  }
}

declare const INCarSeatResolutionResult: cocoascript.INCarSeatResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetclimatesettingsincarintentresponsecode
  type INSetClimateSettingsInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/invisualcodetype
  type INVisualCodeType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetvisualcodeintentresponsecode
  type INGetVisualCodeIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchforbillsintentresponsecode
  type INSearchForBillsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrequestpaymentintentresponsecode
  type INRequestPaymentIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inradiotype
  type INRadioType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the type of radio to use in a car.
   * https://developer.apple.com/documentation/sirikit/inradiotyperesolutionresult
   */
  interface INRadioTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inradiotyperesolutionresult/1902423-successwithresolvedradiotype
    successWithResolvedRadioType(resolvedRadioType: INRadioType):INRadioTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inradiotyperesolutionresult/1902421-confirmationrequiredwithradiotyp
    confirmationRequiredWithRadioTypeToConfirm(radioTypeToConfirm: INRadioType):INRadioTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inradiotyperesolutionresult/2933984-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INRadioType):INRadioTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inradiotyperesolutionresult/2933983-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INRadioType):INRadioTypeResolutionResult;
    //
    alloc():INRadioTypeResolutionResult;
    //
    init():INRadioTypeResolutionResult;
  }
}

declare const INRadioTypeResolutionResult: cocoascript.INRadioTypeResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetradiostationintentresponsecode
  type INSetRadioStationIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartworkoutintentresponsecode
  type INStartWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartvideocallintentresponsecode
  type INStartVideoCallIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incarsignaloptions
  type INCarSignalOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the signals the intent is managing on the car.
   * https://developer.apple.com/documentation/sirikit/incarsignaloptionsresolutionresult
   */
  interface INCarSignalOptionsResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/incarsignaloptionsresolutionresult/2799307-successwithresolvedcarsignalopti
    successWithResolvedCarSignalOptions(resolvedCarSignalOptions: INCarSignalOptions):INCarSignalOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incarsignaloptionsresolutionresult/2799306-confirmationrequiredwithcarsigna
    confirmationRequiredWithCarSignalOptionsToConfirm(carSignalOptionsToConfirm: INCarSignalOptions):INCarSignalOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incarsignaloptionsresolutionresult/2933998-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: INCarSignalOptions):INCarSignalOptionsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/incarsignaloptionsresolutionresult/2933997-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: INCarSignalOptions):INCarSignalOptionsResolutionResult;
    //
    alloc():INCarSignalOptionsResolutionResult;
    //
    init():INCarSignalOptionsResolutionResult;
  }
}

declare const INCarSignalOptionsResolutionResult: cocoascript.INCarSignalOptionsResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inactivatecarsignalintentresponsecode
  type INActivateCarSignalIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inphotoattributeoptions
  type INPhotoAttributeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchforphotosintentresponsecode
  type INSearchForPhotosIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetridestatusintentresponsecode
  type INGetRideStatusIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incancelrideintentresponsecode
  type INCancelRideIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetcarlockstatusintentresponsecode
  type INSetCarLockStatusIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The manager object you use to suggest media to the user.
   * https://developer.apple.com/documentation/sirikit/inupcomingmediamanager
   */
  interface INUpcomingMediaManager extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inupcomingmediamanager/2963079-sharedmanager
    sharedManager(): INUpcomingMediaManager;
    setSharedManager(): void;
    // https://developer.apple.com/documentation/sirikit/inupcomingmediamanager/2963078-setsuggestedmediaintents
    setSuggestedMediaIntents(intents: INPlayMediaIntent):void;
    // https://developer.apple.com/documentation/sirikit/inupcomingmediamanager/2980695-setpredictionmode
    setPredictionMode_forType(mode: INUpcomingMediaPredictionMode, type: INMediaItemType):void;
    //
    alloc():INUpcomingMediaManager;
    //
    init():INUpcomingMediaManager;
  }
}

declare const INUpcomingMediaManager: cocoascript.INUpcomingMediaManager;
declare namespace cocoascript {
  /**
   * A resolution result for the types of destinations when adding media.
   * https://developer.apple.com/documentation/sirikit/inaddmediamediadestinationresolutionresult
   */
  interface INAddMediaMediaDestinationResolutionResult extends INMediaDestinationResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inaddmediamediadestinationresolutionresult/3180117-initwithmediadestinationresoluti
    initWithMediaDestinationResolutionResult(mediaDestinationResolutionResult: INMediaDestinationResolutionResult):INAddMediaMediaDestinationResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaddmediamediadestinationresolutionresult/3180118-unsupportedforreason
    unsupportedForReason(reason: INAddMediaMediaDestinationUnsupportedReason):INAddMediaMediaDestinationResolutionResult;
    //
    alloc():INAddMediaMediaDestinationResolutionResult;
    //
    init():INAddMediaMediaDestinationResolutionResult;
  }
}

declare const INAddMediaMediaDestinationResolutionResult: cocoascript.INAddMediaMediaDestinationResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media item to add.
   * https://developer.apple.com/documentation/sirikit/inaddmediamediaitemresolutionresult
   */
  interface INAddMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inaddmediamediaitemresolutionresult/3600221-successeswithresolvedmediaitems
    successesWithResolvedMediaItems(resolvedMediaItems: INMediaItem):INAddMediaMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaddmediamediaitemresolutionresult/3180122-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult):INAddMediaMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inaddmediamediaitemresolutionresult/3180123-unsupportedforreason
    unsupportedForReason(reason: INAddMediaMediaItemUnsupportedReason):INAddMediaMediaItemResolutionResult;
    //
    alloc():INAddMediaMediaItemResolutionResult;
    //
    init():INAddMediaMediaItemResolutionResult;
  }
}

declare const INAddMediaMediaItemResolutionResult: cocoascript.INAddMediaMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media destination types.
   * https://developer.apple.com/documentation/sirikit/inmediadestinationresolutionresult
   */
  interface INMediaDestinationResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inmediadestinationresolutionresult/3074222-successwithresolvedmediadestinat
    successWithResolvedMediaDestination(resolvedMediaDestination: INMediaDestination):INMediaDestinationResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmediadestinationresolutionresult/3074220-confirmationrequiredwithmediades
    confirmationRequiredWithMediaDestinationToConfirm(mediaDestinationToConfirm: INMediaDestination):INMediaDestinationResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmediadestinationresolutionresult/3074221-disambiguationwithmediadestinati
    disambiguationWithMediaDestinationsToDisambiguate(mediaDestinationsToDisambiguate: INMediaDestination):INMediaDestinationResolutionResult;
    //
    alloc():INMediaDestinationResolutionResult;
    //
    init():INMediaDestinationResolutionResult;
  }
}

declare const INMediaDestinationResolutionResult: cocoascript.INMediaDestinationResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for media item types.
   * https://developer.apple.com/documentation/sirikit/inmediaitemresolutionresult
   */
  interface INMediaItemResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inmediaitemresolutionresult/3074233-successwithresolvedmediaitem
    successWithResolvedMediaItem(resolvedMediaItem: INMediaItem):INMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmediaitemresolutionresult/3235754-successeswithresolvedmediaitems
    successesWithResolvedMediaItems(resolvedMediaItems: INMediaItem):INMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmediaitemresolutionresult/3074231-confirmationrequiredwithmediaite
    confirmationRequiredWithMediaItemToConfirm(mediaItemToConfirm: INMediaItem):INMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmediaitemresolutionresult/3074232-disambiguationwithmediaitemstodi
    disambiguationWithMediaItemsToDisambiguate(mediaItemsToDisambiguate: INMediaItem):INMediaItemResolutionResult;
    //
    alloc():INMediaItemResolutionResult;
    //
    init():INMediaItemResolutionResult;
  }
}

declare const INMediaItemResolutionResult: cocoascript.INMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the user’s affinity for a media item.
   * https://developer.apple.com/documentation/sirikit/inmediaaffinitytyperesolutionresult
   */
  interface INMediaAffinityTypeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inmediaaffinitytyperesolutionresult/3074213-successwithresolvedmediaaffinity
    successWithResolvedMediaAffinityType(resolvedMediaAffinityType: INMediaAffinityType):INMediaAffinityTypeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmediaaffinitytyperesolutionresult/3074212-confirmationrequiredwithmediaaff
    confirmationRequiredWithMediaAffinityTypeToConfirm(mediaAffinityTypeToConfirm: INMediaAffinityType):INMediaAffinityTypeResolutionResult;
    //
    alloc():INMediaAffinityTypeResolutionResult;
    //
    init():INMediaAffinityTypeResolutionResult;
  }
}

declare const INMediaAffinityTypeResolutionResult: cocoascript.INMediaAffinityTypeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media item to play.
   * https://developer.apple.com/documentation/sirikit/inplaymediamediaitemresolutionresult
   */
  interface INPlayMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inplaymediamediaitemresolutionresult/3180133-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult):INPlayMediaMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplaymediamediaitemresolutionresult/3600222-successeswithresolvedmediaitems
    successesWithResolvedMediaItems(resolvedMediaItems: INMediaItem):INPlayMediaMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplaymediamediaitemresolutionresult/3180134-unsupportedforreason
    unsupportedForReason(reason: INPlayMediaMediaItemUnsupportedReason):INPlayMediaMediaItemResolutionResult;
    //
    alloc():INPlayMediaMediaItemResolutionResult;
    //
    init():INPlayMediaMediaItemResolutionResult;
  }
}

declare const INPlayMediaMediaItemResolutionResult: cocoascript.INPlayMediaMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result that determines the playback speed of a media item.
   * https://developer.apple.com/documentation/sirikit/inplaymediaplaybackspeedresolutionresult
   */
  interface INPlayMediaPlaybackSpeedResolutionResult extends INDoubleResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inplaymediaplaybackspeedresolutionresult/3180142-initwithdoubleresolutionresult
    initWithDoubleResolutionResult(doubleResolutionResult: INDoubleResolutionResult):INPlayMediaPlaybackSpeedResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplaymediaplaybackspeedresolutionresult/3180143-unsupportedforreason
    unsupportedForReason(reason: INPlayMediaPlaybackSpeedUnsupportedReason):INPlayMediaPlaybackSpeedResolutionResult;
    //
    alloc():INPlayMediaPlaybackSpeedResolutionResult;
    //
    init():INPlayMediaPlaybackSpeedResolutionResult;
  }
}

declare const INPlayMediaPlaybackSpeedResolutionResult: cocoascript.INPlayMediaPlaybackSpeedResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the playback repeat modes of a media item.
   * https://developer.apple.com/documentation/sirikit/inplaybackrepeatmoderesolutionresult
   */
  interface INPlaybackRepeatModeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inplaybackrepeatmoderesolutionresult/3074292-successwithresolvedplaybackrepea
    successWithResolvedPlaybackRepeatMode(resolvedPlaybackRepeatMode: INPlaybackRepeatMode):INPlaybackRepeatModeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplaybackrepeatmoderesolutionresult/3074291-confirmationrequiredwithplayback
    confirmationRequiredWithPlaybackRepeatModeToConfirm(playbackRepeatModeToConfirm: INPlaybackRepeatMode):INPlaybackRepeatModeResolutionResult;
    //
    alloc():INPlaybackRepeatModeResolutionResult;
    //
    init():INPlaybackRepeatModeResolutionResult;
  }
}

declare const INPlaybackRepeatModeResolutionResult: cocoascript.INPlaybackRepeatModeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the requested playback queue location.
   * https://developer.apple.com/documentation/sirikit/inplaybackqueuelocationresolutionresult
   */
  interface INPlaybackQueueLocationResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inplaybackqueuelocationresolutionresult/3074289-successwithresolvedplaybackqueue
    successWithResolvedPlaybackQueueLocation(resolvedPlaybackQueueLocation: INPlaybackQueueLocation):INPlaybackQueueLocationResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inplaybackqueuelocationresolutionresult/3074288-confirmationrequiredwithplayback
    confirmationRequiredWithPlaybackQueueLocationToConfirm(playbackQueueLocationToConfirm: INPlaybackQueueLocation):INPlaybackQueueLocationResolutionResult;
    //
    alloc():INPlaybackQueueLocationResolutionResult;
    //
    init():INPlaybackQueueLocationResolutionResult;
  }
}

declare const INPlaybackQueueLocationResolutionResult: cocoascript.INPlaybackQueueLocationResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the media item for which to search.
   * https://developer.apple.com/documentation/sirikit/insearchformediamediaitemresolutionresult
   */
  interface INSearchForMediaMediaItemResolutionResult extends INMediaItemResolutionResult {
    // https://developer.apple.com/documentation/sirikit/insearchformediamediaitemresolutionresult/3180156-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult):INSearchForMediaMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insearchformediamediaitemresolutionresult/3600223-successeswithresolvedmediaitems
    successesWithResolvedMediaItems(resolvedMediaItems: INMediaItem):INSearchForMediaMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/insearchformediamediaitemresolutionresult/3180157-unsupportedforreason
    unsupportedForReason(reason: INSearchForMediaMediaItemUnsupportedReason):INSearchForMediaMediaItemResolutionResult;
    //
    alloc():INSearchForMediaMediaItemResolutionResult;
    //
    init():INSearchForMediaMediaItemResolutionResult;
  }
}

declare const INSearchForMediaMediaItemResolutionResult: cocoascript.INSearchForMediaMediaItemResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for updating the user’s affinity for a media item.
   * https://developer.apple.com/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult
   */
  interface INUpdateMediaAffinityMediaItemResolutionResult extends INMediaItemResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult/3180165-initwithmediaitemresolutionresul
    initWithMediaItemResolutionResult(mediaItemResolutionResult: INMediaItemResolutionResult):INUpdateMediaAffinityMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult/3600224-successeswithresolvedmediaitems
    successesWithResolvedMediaItems(resolvedMediaItems: INMediaItem):INUpdateMediaAffinityMediaItemResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinitymediaitemresolutionresult/3180166-unsupportedforreason
    unsupportedForReason(reason: INUpdateMediaAffinityMediaItemUnsupportedReason):INUpdateMediaAffinityMediaItemResolutionResult;
    //
    alloc():INUpdateMediaAffinityMediaItemResolutionResult;
    //
    init():INUpdateMediaAffinityMediaItemResolutionResult;
  }
}

declare const INUpdateMediaAffinityMediaItemResolutionResult: cocoascript.INUpdateMediaAffinityMediaItemResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchformediaintentresponsecode
  type INSearchForMediaIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetcarpowerlevelstatusintentresponsecode
  type INGetCarPowerLevelStatusIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetrestaurantguestintentresponsecode
  type INGetRestaurantGuestIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchforaccountsintentresponsecode
  type INSearchForAccountsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetprofileincarintentresponsecode
  type INSetProfileInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/innotebookitemtype
  type INNotebookItemType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inlocationsearchtype
  type INLocationSearchType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/indatesearchtype
  type INDateSearchType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/intaskpriority
  type INTaskPriority = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/intemporaleventtriggertypeoptions
  type INTemporalEventTriggerTypeOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchfornotebookitemsintentresponsecode
  type INSearchForNotebookItemsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insorttype
  type INSortType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inlistrideoptionsintentresponsecode
  type INListRideOptionsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incancelworkoutintentresponsecode
  type INCancelWorkoutIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inlistcarsintentresponsecode
  type INListCarsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/increatetasklistintentresponsecode
  type INCreateTaskListIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insendridefeedbackintentresponsecode
  type INSendRideFeedbackIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insendmessageintentresponsecode
  type INSendMessageIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartphotoplaybackintentresponsecode
  type INStartPhotoPlaybackIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for the date information associated with an intent.
   * https://developer.apple.com/documentation/sirikit/indatecomponentsresolutionresult
   */
  interface INDateComponentsResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/indatecomponentsresolutionresult/2305429-successwithresolveddatecomponent
    successWithResolvedDateComponents(resolvedDateComponents: NSDateComponents):INDateComponentsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsresolutionresult/2305424-confirmationrequiredwithdatecomp
    confirmationRequiredWithDateComponentsToConfirm(dateComponentsToConfirm: NSDateComponents):INDateComponentsResolutionResult;
    // https://developer.apple.com/documentation/sirikit/indatecomponentsresolutionresult/2305431-disambiguationwithdatecomponents
    disambiguationWithDateComponentsToDisambiguate(dateComponentsToDisambiguate: NSDateComponents):INDateComponentsResolutionResult;
    //
    alloc():INDateComponentsResolutionResult;
    //
    init():INDateComponentsResolutionResult;
  }
}

declare const INDateComponentsResolutionResult: cocoascript.INDateComponentsResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inbookrestaurantreservationintentcode
  type INBookRestaurantReservationIntentCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insetseatsettingsincarintentresponsecode
  type INSetSeatSettingsInCarIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchformessagesintentresponsecode
  type INSearchForMessagesIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inpaybillintentresponsecode
  type INPayBillIntentResponseCode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/sirikit/intentsversionstring
declare const IntentsVersionString: string;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insettaskattributeintentresponsecode
  type INSetTaskAttributeIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/intransfermoneyintentresponsecode
  type INTransferMoneyIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaddtasksintentresponsecode
  type INAddTasksIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incallcapabilityoptions
  type INCallCapabilityOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchcallhistoryintentresponsecode
  type INSearchCallHistoryIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inuiaddvoiceshortcutbuttonstyle
  type INUIAddVoiceShortcutButtonStyle = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaddmediaintentresponsecode
  type INAddMediaIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inplaymediaintentresponsecode
  type INPlayMediaIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetavailablerestaurantreservationbookingsintentcode
  type INGetAvailableRestaurantReservationBookingsIntentCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmediaaffinitytype
  type INMediaAffinityType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinityintentresponsecode
  type INUpdateMediaAffinityIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetcarlockstatusintentresponsecode
  type INGetCarLockStatusIntentResponseCode = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipbrother
declare const INPersonRelationshipBrother: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipassistant
declare const INPersonRelationshipAssistant: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipchild
declare const INPersonRelationshipChild: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipfather
declare const INPersonRelationshipFather: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipfriend
declare const INPersonRelationshipFriend: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipmanager
declare const INPersonRelationshipManager: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipmother
declare const INPersonRelationshipMother: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipparent
declare const INPersonRelationshipParent: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshippartner
declare const INPersonRelationshipPartner: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipsister
declare const INPersonRelationshipSister: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipspouse
declare const INPersonRelationshipSpouse: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipdaughter
declare const INPersonRelationshipDaughter: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonrelationshipson
declare const INPersonRelationshipSon: cocoascript.INPersonRelationship;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelhome
declare const INPersonHandleLabelHome: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelhomefax
declare const INPersonHandleLabelHomeFax: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabeliphone
declare const INPersonHandleLabeliPhone: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelmain
declare const INPersonHandleLabelMain: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelmobile
declare const INPersonHandleLabelMobile: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelother
declare const INPersonHandleLabelOther: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelpager
declare const INPersonHandleLabelPager: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelwork
declare const INPersonHandleLabelWork: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelworkfax
declare const INPersonHandleLabelWorkFax: cocoascript.INPersonHandleLabel;
// https://developer.apple.com/documentation/sirikit/inpersonhandlelabelschool
declare const INPersonHandleLabelSchool: cocoascript.INPersonHandleLabel;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/indailyroutinesituation
  type INDailyRoutineSituation = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypeccs1
declare const INCarChargingConnectorTypeCCS1: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypeccs2
declare const INCarChargingConnectorTypeCCS2: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypechademo
declare const INCarChargingConnectorTypeCHAdeMO: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypegbtac
declare const INCarChargingConnectorTypeGBTAC: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypegbtdc
declare const INCarChargingConnectorTypeGBTDC: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypej1772
declare const INCarChargingConnectorTypeJ1772: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypemennekes
declare const INCarChargingConnectorTypeMennekes: cocoascript.INCarChargingConnectorType;
// https://developer.apple.com/documentation/sirikit/incarchargingconnectortypetesla
declare const INCarChargingConnectorTypeTesla: cocoascript.INCarChargingConnectorType;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/invocabularystringtype
  type INVocabularyStringType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/ingetreservationdetailsintentresponsecode
  type INGetReservationDetailsIntentResponseCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inmediausercontextsubscriptionstatus
  type INMediaUserContextSubscriptionStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaddtaskstargettasklistconfirmationreason
  type INAddTasksTargetTaskListConfirmationReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaddtaskstemporaleventtriggerunsupportedreason
  type INAddTasksTemporalEventTriggerUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insettaskattributetemporaleventtriggerunsupportedreason
  type INSetTaskAttributeTemporalEventTriggerUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insnoozetaskstaskunsupportedreason
  type INSnoozeTasksTaskUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/innotecontenttype
  type INNoteContentType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/incardefroster
  type INCarDefroster = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insendmessagerecipientunsupportedreason
  type INSendMessageRecipientUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrequestpaymentcurrencyamountunsupportedreason
  type INRequestPaymentCurrencyAmountUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inrequestpaymentpayerunsupportedreason
  type INRequestPaymentPayerUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insendpaymentcurrencyamountunsupportedreason
  type INSendPaymentCurrencyAmountUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insendpaymentpayeeunsupportedreason
  type INSendPaymentPayeeUnsupportedReason = cocoascript.NSInteger;
}
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifiercrosstraining
declare const INWorkoutNameIdentifierCrosstraining: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifiercycle
declare const INWorkoutNameIdentifierCycle: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierdance
declare const INWorkoutNameIdentifierDance: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierelliptical
declare const INWorkoutNameIdentifierElliptical: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierexercise
declare const INWorkoutNameIdentifierExercise: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierhighintensityintervaltraining
declare const INWorkoutNameIdentifierHighIntensityIntervalTraining: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierhike
declare const INWorkoutNameIdentifierHike: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierindoorcycle
declare const INWorkoutNameIdentifierIndoorcycle: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierindoorrun
declare const INWorkoutNameIdentifierIndoorrun: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierindoorwalk
declare const INWorkoutNameIdentifierIndoorwalk: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifiermove
declare const INWorkoutNameIdentifierMove: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierother
declare const INWorkoutNameIdentifierOther: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierrower
declare const INWorkoutNameIdentifierRower: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierrun
declare const INWorkoutNameIdentifierRun: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifiersit
declare const INWorkoutNameIdentifierSit: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierstairs
declare const INWorkoutNameIdentifierStairs: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierstand
declare const INWorkoutNameIdentifierStand: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifiersteps
declare const INWorkoutNameIdentifierSteps: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierswim
declare const INWorkoutNameIdentifierSwim: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifierwalk
declare const INWorkoutNameIdentifierWalk: cocoascript.INWorkoutNameIdentifier;
// https://developer.apple.com/documentation/sirikit/inworkoutnameidentifieryoga
declare const INWorkoutNameIdentifierYoga: cocoascript.INWorkoutNameIdentifier;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartcallcallcapabilityunsupportedreason
  type INStartCallCallCapabilityUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/instartcallcontactunsupportedreason
  type INStartCallContactUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A resolution result for a file associated with an intent.
   * https://developer.apple.com/documentation/sirikit/infileresolutionresult
   */
  interface INFileResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/infileresolutionresult/3152222-successwithresolvedfile
    successWithResolvedFile(resolvedFile: INFile):INFileResolutionResult;
    // https://developer.apple.com/documentation/sirikit/infileresolutionresult/3152220-confirmationrequiredwithfiletoco
    confirmationRequiredWithFileToConfirm(fileToConfirm: INFile):INFileResolutionResult;
    // https://developer.apple.com/documentation/sirikit/infileresolutionresult/3152221-disambiguationwithfilestodisambi
    disambiguationWithFilesToDisambiguate(filesToDisambiguate: INFile):INFileResolutionResult;
    //
    alloc():INFileResolutionResult;
    //
    init():INFileResolutionResult;
  }
}

declare const INFileResolutionResult: cocoascript.INFileResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a speed associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inspeedresolutionresult
   */
  interface INSpeedResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inspeedresolutionresult/3172631-successwithresolvedspeed
    successWithResolvedSpeed(resolvedSpeed: NSUnitSpeed):INSpeedResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inspeedresolutionresult/3172629-confirmationrequiredwithspeedtoc
    confirmationRequiredWithSpeedToConfirm(speedToConfirm: NSUnitSpeed):INSpeedResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inspeedresolutionresult/3172630-disambiguationwithspeedtodisambi
    disambiguationWithSpeedToDisambiguate(speedToDisambiguate: NSUnitSpeed):INSpeedResolutionResult;
    //
    alloc():INSpeedResolutionResult;
    //
    init():INSpeedResolutionResult;
  }
}

declare const INSpeedResolutionResult: cocoascript.INSpeedResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a volume associated with an intent.
   * https://developer.apple.com/documentation/sirikit/involumeresolutionresult
   */
  interface INVolumeResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/involumeresolutionresult/3172637-successwithresolvedvolume
    successWithResolvedVolume(resolvedVolume: NSUnitVolume):INVolumeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/involumeresolutionresult/3172635-confirmationrequiredwithvolumeto
    confirmationRequiredWithVolumeToConfirm(volumeToConfirm: NSUnitVolume):INVolumeResolutionResult;
    // https://developer.apple.com/documentation/sirikit/involumeresolutionresult/3172636-disambiguationwithvolumetodisamb
    disambiguationWithVolumeToDisambiguate(volumeToDisambiguate: NSUnitVolume):INVolumeResolutionResult;
    //
    alloc():INVolumeResolutionResult;
    //
    init():INVolumeResolutionResult;
  }
}

declare const INVolumeResolutionResult: cocoascript.INVolumeResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an energy parameter associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inenergyresolutionresult
   */
  interface INEnergyResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inenergyresolutionresult/3172595-successwithresolvedenergy
    successWithResolvedEnergy(resolvedEnergy: NSUnitEnergy):INEnergyResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inenergyresolutionresult/3172593-confirmationrequiredwithenergyto
    confirmationRequiredWithEnergyToConfirm(energyToConfirm: NSUnitEnergy):INEnergyResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inenergyresolutionresult/3172594-disambiguationwithenergytodisamb
    disambiguationWithEnergyToDisambiguate(energyToDisambiguate: NSUnitEnergy):INEnergyResolutionResult;
    //
    alloc():INEnergyResolutionResult;
    //
    init():INEnergyResolutionResult;
  }
}

declare const INEnergyResolutionResult: cocoascript.INEnergyResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a length associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inlengthresolutionresult
   */
  interface INLengthResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inlengthresolutionresult/3088757-successwithresolvedlength
    successWithResolvedLength(resolvedLength: NSUnitLength):INLengthResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inlengthresolutionresult/3088755-confirmationrequiredwithlengthto
    confirmationRequiredWithLengthToConfirm(lengthToConfirm: NSUnitLength):INLengthResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inlengthresolutionresult/3088756-disambiguationwithlengthstodisam
    disambiguationWithLengthsToDisambiguate(lengthsToDisambiguate: NSUnitLength):INLengthResolutionResult;
    //
    alloc():INLengthResolutionResult;
    //
    init():INLengthResolutionResult;
  }
}

declare const INLengthResolutionResult: cocoascript.INLengthResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a mass associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inmassresolutionresult
   */
  interface INMassResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inmassresolutionresult/3172621-successwithresolvedmass
    successWithResolvedMass(resolvedMass: NSUnitMass):INMassResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmassresolutionresult/3172619-confirmationrequiredwithmasstoco
    confirmationRequiredWithMassToConfirm(massToConfirm: NSUnitMass):INMassResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inmassresolutionresult/3172620-disambiguationwithmasstodisambig
    disambiguationWithMassToDisambiguate(massToDisambiguate: NSUnitMass):INMassResolutionResult;
    //
    alloc():INMassResolutionResult;
    //
    init():INMassResolutionResult;
  }
}

declare const INMassResolutionResult: cocoascript.INMassResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for a time interval associated with an intent.
   * https://developer.apple.com/documentation/sirikit/intimeintervalresolutionresult
   */
  interface INTimeIntervalResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/intimeintervalresolutionresult/3141892-successwithresolvedtimeinterval
    successWithResolvedTimeInterval(resolvedTimeInterval: NSTimeInterval):INTimeIntervalResolutionResult;
    // https://developer.apple.com/documentation/sirikit/intimeintervalresolutionresult/3141891-confirmationrequiredwithtimeinte
    confirmationRequiredWithTimeIntervalToConfirm(timeIntervalToConfirm: NSTimeInterval):INTimeIntervalResolutionResult;
    //
    alloc():INTimeIntervalResolutionResult;
    //
    init():INTimeIntervalResolutionResult;
  }
}

declare const INTimeIntervalResolutionResult: cocoascript.INTimeIntervalResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an enumeration associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inenumresolutionresult
   */
  interface INEnumResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inenumresolutionresult/3088753-successwithresolvedvalue
    successWithResolvedValue(resolvedValue: NSInteger):INEnumResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inenumresolutionresult/3088752-confirmationrequiredwithvaluetoc
    confirmationRequiredWithValueToConfirm(valueToConfirm: NSInteger):INEnumResolutionResult;
    //
    alloc():INEnumResolutionResult;
    //
    init():INEnumResolutionResult;
  }
}

declare const INEnumResolutionResult: cocoascript.INEnumResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for an Object associated with an intent.
   * https://developer.apple.com/documentation/sirikit/inobjectresolutionresult
   */
  interface INObjectResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inobjectresolutionresult/3088761-successwithresolvedobject
    successWithResolvedObject(resolvedObject: INObject):INObjectResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inobjectresolutionresult/3088759-confirmationrequiredwithobjectto
    confirmationRequiredWithObjectToConfirm(objectToConfirm: INObject):INObjectResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inobjectresolutionresult/3088760-disambiguationwithobjectstodisam
    disambiguationWithObjectsToDisambiguate(objectsToDisambiguate: INObject):INObjectResolutionResult;
    //
    alloc():INObjectResolutionResult;
    //
    init():INObjectResolutionResult;
  }
}

declare const INObjectResolutionResult: cocoascript.INObjectResolutionResult;
declare namespace cocoascript {
  /**
   * A resolution result for the types media destinations.
   * https://developer.apple.com/documentation/sirikit/inurlresolutionresult
   */
  interface INURLResolutionResult extends INIntentResolutionResult {
    // https://developer.apple.com/documentation/sirikit/inurlresolutionresult/3088765-successwithresolvedurl
    successWithResolvedURL(resolvedURL: NSURL):INURLResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inurlresolutionresult/3088763-confirmationrequiredwithurltocon
    confirmationRequiredWithURLToConfirm(urlToConfirm: NSURL):INURLResolutionResult;
    // https://developer.apple.com/documentation/sirikit/inurlresolutionresult/3088764-disambiguationwithurlstodisambig
    disambiguationWithURLsToDisambiguate(urlsToDisambiguate: NSURL):INURLResolutionResult;
    //
    alloc():INURLResolutionResult;
    //
    init():INURLResolutionResult;
  }
}

declare const INURLResolutionResult: cocoascript.INURLResolutionResult;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inupcomingmediapredictionmode
  type INUpcomingMediaPredictionMode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaddmediamediadestinationunsupportedreason
  type INAddMediaMediaDestinationUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inaddmediamediaitemunsupportedreason
  type INAddMediaMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inplaymediamediaitemunsupportedreason
  type INPlayMediaMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inplaymediaplaybackspeedunsupportedreason
  type INPlayMediaPlaybackSpeedUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insearchformediamediaitemunsupportedreason
  type INSearchForMediaMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inupdatemediaaffinitymediaitemunsupportedreason
  type INUpdateMediaAffinityMediaItemUnsupportedReason = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The preferences and authorization related to using SiriKit.
   * https://developer.apple.com/documentation/sirikit/inpreferences
   */
  interface INPreferences extends NSObject {
    // https://developer.apple.com/documentation/sirikit/inpreferences/1829429-requestsiriauthorization
    requestSiriAuthorization(handler: INSiriAuthorizationStatus):void;
    // https://developer.apple.com/documentation/sirikit/inpreferences/1829430-siriauthorizationstatus
    siriAuthorizationStatus():INSiriAuthorizationStatus;
    // https://developer.apple.com/documentation/sirikit/inpreferences/1638761-sirilanguagecode
    siriLanguageCode():NSString;
    //
    alloc():INPreferences;
    //
    init():INPreferences;
  }
}

declare const INPreferences: cocoascript.INPreferences;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/inintenterrorcode
  type INIntentErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/sirikit/insiriauthorizationstatus
  type INSiriAuthorizationStatus = cocoascript.NSInteger;
}
