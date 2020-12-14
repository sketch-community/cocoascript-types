declare namespace cocoascript {
  /**
   * A class that defines the end of a recurrence rule.
   * doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend
   */
  interface EKRecurrenceEnd extends NSObject {
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415644-recurrenceendwithenddate
    recurrenceEndWithEndDate(endDate: NSDate):EKRecurrenceEnd;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415640-recurrenceendwithoccurrencecount
    recurrenceEndWithOccurrenceCount(occurrenceCount: NSUInteger):EKRecurrenceEnd;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415648-enddate
    endDate(): NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415642-occurrencecount
    occurrenceCount(): NSUInteger;
    setOccurrenceCount(): void;
    //
    alloc():EKRecurrenceEnd;
    //
    init():EKRecurrenceEnd;
  }
}

declare const EKRecurrenceEnd: cocoascript.EKRecurrenceEnd;
declare namespace cocoascript {
  /**
   * A class that represents the day of the week.
   * doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek
   */
  interface EKRecurrenceDayOfWeek extends NSObject {
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448589-dayofweek
    dayOfWeek(dayOfTheWeek: EKWeekday):EKRecurrenceDayOfWeek;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448591-dayofweek
    dayOfWeek_weekNumber(dayOfTheWeek: EKWeekday, weekNumber: NSInteger):EKRecurrenceDayOfWeek;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448581-initwithdayoftheweek
    initWithDayOfTheWeek_weekNumber(dayOfTheWeek: EKWeekday, weekNumber: NSInteger):EKRecurrenceDayOfWeek;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448579-dayoftheweek
    dayOfTheWeek(): EKWeekday;
    setDayOfTheWeek(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448577-weeknumber
    weekNumber(): NSInteger;
    setWeekNumber(): void;
    //
    alloc():EKRecurrenceDayOfWeek;
    //
    init():EKRecurrenceDayOfWeek;
  }
}

declare const EKRecurrenceDayOfWeek: cocoascript.EKRecurrenceDayOfWeek;
declare namespace cocoascript {
  /**
   * A class that describes the recurrence pattern for a recurring event.
   * doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule
   */
  interface EKRecurrenceRule extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507273-initrecurrencewithfrequency
    initRecurrenceWithFrequency_interval_end(type: EKRecurrenceFrequency, interval: NSInteger, end: EKRecurrenceEnd):EKRecurrenceRule;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507320-initrecurrencewithfrequency
    initRecurrenceWithFrequency_interval_daysOfTheWeek_daysOfTheMonth_monthsOfTheYear_weeksOfTheYear_daysOfTheYear_setPositions_end(type: EKRecurrenceFrequency, interval: NSInteger, days: EKRecurrenceDayOfWeek, monthDays: NSNumber, months: NSNumber, weeksOfTheYear: NSNumber, daysOfTheYear: NSNumber, setPositions: NSNumber, end: EKRecurrenceEnd):EKRecurrenceRule;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507340-calendaridentifier
    calendarIdentifier(): string | cocoascript.NSString;
    setCalendarIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507254-recurrenceend
    recurrenceEnd(): EKRecurrenceEnd;
    setRecurrenceEnd(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507297-frequency
    frequency(): EKRecurrenceFrequency;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507194-interval
    interval(): NSInteger;
    setInterval(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507060-firstdayoftheweek
    firstDayOfTheWeek(): NSInteger;
    setFirstDayOfTheWeek(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507538-daysoftheweek
    daysOfTheWeek(): EKRecurrenceDayOfWeek;
    setDaysOfTheWeek(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507410-daysofthemonth
    daysOfTheMonth(): NSNumber;
    setDaysOfTheMonth(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507439-daysoftheyear
    daysOfTheYear(): NSNumber;
    setDaysOfTheYear(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507400-weeksoftheyear
    weeksOfTheYear(): NSNumber;
    setWeeksOfTheYear(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507449-monthsoftheyear
    monthsOfTheYear(): NSNumber;
    setMonthsOfTheYear(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507378-setpositions
    setPositions(): NSNumber;
    setSetPositions(): void;
    //
    alloc():EKRecurrenceRule;
    //
    init():EKRecurrenceRule;
  }
}

declare const EKRecurrenceRule: cocoascript.EKRecurrenceRule;
declare namespace cocoascript {
  /**
   * A class that represents a participant in a calendar event.
   * doc://com.apple.documentation/documentation/eventkit/ekparticipant
   */
  interface EKParticipant extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507248-currentuser
    currentUser(): BOOL;
    setCurrentUser(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507480-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507494-participantrole
    participantRole(): EKParticipantRole;
    setParticipantRole(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507533-participantstatus
    participantStatus(): EKParticipantStatus;
    setParticipantStatus(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507364-participanttype
    participantType(): EKParticipantType;
    setParticipantType(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507435-url
    URL(): NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1615895-abrecordwithaddressbook
    ABRecordWithAddressBook(addressBook: ABAddressBookRef):ABRecordRef;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507504-abpersoninaddressbook
    ABPersonInAddressBook(addressBook: ABAddressBook):ABPerson;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507163-contactpredicate
    contactPredicate(): NSPredicate;
    setContactPredicate(): void;
    //
    alloc():EKParticipant;
    //
    init():EKParticipant;
  }
}

declare const EKParticipant: cocoascript.EKParticipant;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation
   */
  interface EKStructuredLocation extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507366-locationwithtitle
    locationWithTitle(title: string | cocoascript.NSString):EKStructuredLocation;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507493-locationwithmapitem
    locationWithMapItem(mapItem: MKMapItem):EKStructuredLocation;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507137-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507110-geolocation
    geoLocation(): CLLocation;
    setGeoLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507489-radius
    radius(): number;
    setRadius(): void;
    //
    alloc():EKStructuredLocation;
    //
    init():EKStructuredLocation;
  }
}

declare const EKStructuredLocation: cocoascript.EKStructuredLocation;
declare namespace cocoascript {
  /**
   * A class that represents an alarm.
   * doc://com.apple.documentation/documentation/eventkit/ekalarm
   */
  interface EKAlarm extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507130-alarmwithabsolutedate
    alarmWithAbsoluteDate(date: NSDate):EKAlarm;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507338-alarmwithrelativeoffset
    alarmWithRelativeOffset(offset: NSTimeInterval):EKAlarm;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507486-absolutedate
    absoluteDate(): NSDate;
    setAbsoluteDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507491-relativeoffset
    relativeOffset(): NSTimeInterval;
    setRelativeOffset(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507123-proximity
    proximity(): EKAlarmProximity;
    setProximity(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507331-structuredlocation
    structuredLocation(): EKStructuredLocation;
    setStructuredLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507242-type
    type(): EKAlarmType;
    setType(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507267-emailaddress
    emailAddress(): string | cocoascript.NSString;
    setEmailAddress(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507227-soundname
    soundName(): string | cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1589757-url
    url(): NSURL;
    setUrl(): void;
    //
    alloc():EKAlarm;
    //
    init():EKAlarm;
  }
}

declare const EKAlarm: cocoascript.EKAlarm;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekweekday
  type EKWeekday = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that represents an event added to a calendar.
   * doc://com.apple.documentation/documentation/eventkit/ekevent
   */
  interface EKEvent extends EKCalendarItem {
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507483-eventwitheventstore
    eventWithEventStore(eventStore: EKEventStore):EKEvent;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507335-comparestartdatewithevent
    compareStartDateWithEvent(other: EKEvent):NSComparisonResult;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507437-eventidentifier
    eventIdentifier(): string | cocoascript.NSString;
    setEventIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507313-availability
    availability(): EKEventAvailability;
    setAvailability(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507372-startdate
    startDate(): NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507121-enddate
    endDate(): NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507482-allday
    allDay(): BOOL;
    setAllDay(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507244-occurrencedate
    occurrenceDate(): NSDate;
    setOccurrenceDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507112-isdetached
    isDetached(): BOOL;
    setIsDetached(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507357-organizer
    organizer(): EKParticipant;
    setOrganizer(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507158-status
    status(): EKEventStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507349-birthdaycontactidentifier
    birthdayContactIdentifier(): string | cocoascript.NSString;
    setBirthdayContactIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507185-structuredlocation
    structuredLocation(): EKStructuredLocation;
    setStructuredLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1615845-birthdaypersonid
    birthdayPersonID(): NSInteger;
    setBirthdayPersonID(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507361-birthdaypersonuniqueid
    birthdayPersonUniqueID(): string | cocoascript.NSString;
    setBirthdayPersonUniqueID(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507089-refresh
    refresh():BOOL;
    //
    alloc():EKEvent;
    //
    init():EKEvent;
  }
}

declare const EKEvent: cocoascript.EKEvent;
declare namespace cocoascript {
  /**
   * An abstract superclass for all Event Kit classes that have instances that are persistent.
   * doc://com.apple.documentation/documentation/eventkit/ekobject
   */
  interface EKObject extends NSObject {
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507402-new
    new(): BOOL;
    setNew(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507333-haschanges
    hasChanges(): BOOL;
    setHasChanges(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1812546-isnew
    ():void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507327-refresh
    refresh():BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507405-reset
    reset():void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507462-rollback
    rollback():void;
    //
    alloc():EKObject;
    //
    init():EKObject;
  }
}

declare const EKObject: cocoascript.EKObject;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekspan
  type EKSpan = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekrecurrencefrequency
  type EKRecurrenceFrequency = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract superclass for calendar events and reminders.
   * doc://com.apple.documentation/documentation/eventkit/ekcalendaritem
   */
  interface EKCalendarItem extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507075-calendaritemidentifier
    calendarItemIdentifier(): string | cocoascript.NSString;
    setCalendarItemIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507283-calendaritemexternalidentifier
    calendarItemExternalIdentifier(): string | cocoascript.NSString;
    setCalendarItemExternalIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1623897-uuid
    UUID(): string | cocoascript.NSString;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507169-calendar
    calendar(): EKCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507305-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507269-location
    location(): string | cocoascript.NSString;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507213-creationdate
    creationDate(): NSDate;
    setCreationDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507374-lastmodifieddate
    lastModifiedDate(): NSDate;
    setLastModifiedDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507104-timezone
    timeZone(): NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507265-url
    URL(): NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507389-hasnotes
    hasNotes(): BOOL;
    setHasNotes(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507507-notes
    notes(): string | cocoascript.NSString;
    setNotes(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507073-hasattendees
    hasAttendees(): BOOL;
    setHasAttendees(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507140-attendees
    attendees(): EKParticipant;
    setAttendees(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507271-hasalarms
    hasAlarms(): BOOL;
    setHasAlarms(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507397-addalarm
    addAlarm(alarm: EKAlarm):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507133-removealarm
    removeAlarm(alarm: EKAlarm):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507211-alarms
    alarms(): EKAlarm;
    setAlarms(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507459-hasrecurrencerules
    hasRecurrenceRules(): BOOL;
    setHasRecurrenceRules(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507256-addrecurrencerule
    addRecurrenceRule(rule: EKRecurrenceRule):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507495-removerecurrencerule
    removeRecurrenceRule(rule: EKRecurrenceRule):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507135-recurrencerules
    recurrenceRules(): EKRecurrenceRule;
    setRecurrenceRules(): void;
    //
    alloc():EKCalendarItem;
    //
    init():EKCalendarItem;
  }
}

declare const EKCalendarItem: cocoascript.EKCalendarItem;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekparticipantrole
  type EKParticipantRole = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekparticipanttype
  type EKParticipantType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekparticipantstatus
  type EKParticipantStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekparticipantschedulestatus
  type EKParticipantScheduleStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that represents a calendar in Event Kit.
   * doc://com.apple.documentation/documentation/eventkit/ekcalendar
   */
  interface EKCalendar extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507516-calendarforentitytype
    calendarForEntityType_eventStore(entityType: EKEntityType, eventStore: EKEventStore):EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1620447-calendarwitheventstore
    calendarWithEventStore(eventStore: EKEventStore):EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507068-allowscontentmodifications
    allowsContentModifications(): BOOL;
    setAllowsContentModifications(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1615894-cgcolor
    CGColor(): CGColorRef;
    setCGColor(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507513-color
    color(): NSColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507084-immutable
    immutable(): BOOL;
    setImmutable(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507487-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507145-type
    type(): EKCalendarType;
    setType(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507202-allowedentitytypes
    allowedEntityTypes(): EKEntityMask;
    setAllowedEntityTypes(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507288-source
    source(): EKSource;
    setSource(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507471-subscribed
    subscribed(): BOOL;
    setSubscribed(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507171-supportedeventavailabilities
    supportedEventAvailabilities(): EKCalendarEventAvailabilityMask;
    setSupportedEventAvailabilities(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507380-calendaridentifier
    calendarIdentifier(): string | cocoascript.NSString;
    setCalendarIdentifier(): void;
    //
    alloc():EKCalendar;
    //
    init():EKCalendar;
  }
}

declare const EKCalendar: cocoascript.EKCalendar;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekalarmproximity
  type EKAlarmProximity = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekalarmtype
  type EKAlarmType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that represents a reminder added to a calendar.
   * doc://com.apple.documentation/documentation/eventkit/ekreminder
   */
  interface EKReminder extends EKCalendarItem {
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507429-reminderwitheventstore
    reminderWithEventStore(eventStore: EKEventStore):EKReminder;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507173-priority
    priority(): NSUInteger;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507558-startdatecomponents
    startDateComponents(): NSDateComponents;
    setStartDateComponents(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507383-duedatecomponents
    dueDateComponents(): NSDateComponents;
    setDueDateComponents(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507502-completed
    completed(): BOOL;
    setCompleted(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507286-completiondate
    completionDate(): NSDate;
    setCompletionDate(): void;
    //
    alloc():EKReminder;
    //
    init():EKReminder;
  }
}

declare const EKReminder: cocoascript.EKReminder;
declare namespace cocoascript {
  /**
   * An object that accesses the user’s calendar events and reminders and supports the scheduling of new events.
   * doc://com.apple.documentation/documentation/eventkit/ekeventstore
   */
  interface EKEventStore extends NSObject {
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507252-init
    init():EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507179-initwithsources
    initWithSources(sources: EKSource):EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507442-eventstoreidentifier
    eventStoreIdentifier(): string | cocoascript.NSString;
    setEventStoreIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1536382-initwithaccesstoentitytypes
    initWithAccessToEntityTypes(entityTypes: EKEntityMask):EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507547-requestaccesstoentitytype
    requestAccessToEntityType_completion(entityType: EKEntityType, completion: EKEventStoreRequestAccessCompletionHandler):void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507239-authorizationstatusforentitytype
    authorizationStatusForEntityType(entityType: EKEntityType):EKAuthorizationStatus;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507315-sources
    sources(): EKSource;
    setSources(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507419-delegatesources
    delegateSources(): EKSource;
    setDelegateSources(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507521-sourcewithidentifier
    sourceWithIdentifier(identifier: string | cocoascript.NSString):EKSource;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507424-commit
    commit(error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507345-reset
    reset():void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507421-refreshsourcesifnecessary
    refreshSourcesIfNecessary():void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507062-defaultcalendarfornewevents
    defaultCalendarForNewEvents(): EKCalendar;
    setDefaultCalendarForNewEvents(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507543-defaultcalendarfornewreminders
    defaultCalendarForNewReminders():EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507128-calendarsforentitytype
    calendarsForEntityType(entityType: EKEntityType):EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507484-calendarwithidentifier
    calendarWithIdentifier(identifier: string | cocoascript.NSString):EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507080-savecalendar
    saveCalendar_commit_error(calendar: EKCalendar, commit: BOOL, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507523-removecalendar
    removeCalendar_commit_error(calendar: EKCalendar, commit: BOOL, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1623680-calendars
    calendars(): EKCalendar;
    setCalendars(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507490-eventwithidentifier
    eventWithIdentifier(identifier: string | cocoascript.NSString):EKEvent;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507433-calendaritemwithidentifier
    calendarItemWithIdentifier(identifier: string | cocoascript.NSString):EKCalendarItem;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507281-calendaritemswithexternalidentif
    calendarItemsWithExternalIdentifier(externalIdentifier: string | cocoascript.NSString):EKCalendarItem;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1615882-removeevent
    removeEvent_span_error(event: EKEvent, span: EKSpan, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507469-removeevent
    removeEvent_span_commit_error(event: EKEvent, span: EKSpan, commit: BOOL, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507108-removereminder
    removeReminder_commit_error(reminder: EKReminder, commit: BOOL, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1615881-saveevent
    saveEvent_span_error(event: EKEvent, span: EKSpan, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507295-saveevent
    saveEvent_span_commit_error(event: EKEvent, span: EKSpan, commit: BOOL, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507181-savereminder
    saveReminder_commit_error(reminder: EKReminder, commit: BOOL, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507518-enumerateeventsmatchingpredicate
    enumerateEventsMatchingPredicate_usingBlock(predicate: NSPredicate, block: EKEventSearchCallback):void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507183-eventsmatchingpredicate
    eventsMatchingPredicate(predicate: NSPredicate):EKEvent;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507500-fetchremindersmatchingpredicate
    fetchRemindersMatchingPredicate_completion(predicate: NSPredicate, completion: EKReminder):EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507342-cancelfetchrequest
    cancelFetchRequest(fetchIdentifier: EKEventStore):void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507479-predicateforeventswithstartdate
    predicateForEventsWithStartDate_endDate_calendars(startDate: NSDate, endDate: NSDate, calendars: EKCalendar):NSPredicate;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507086-predicateforremindersincalendars
    predicateForRemindersInCalendars(calendars: EKCalendar):NSPredicate;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507447-predicateforcompletedreminderswi
    predicateForCompletedRemindersWithCompletionDateStarting_ending_calendars(startDate: NSDate, endDate: NSDate, calendars: EKCalendar):NSPredicate;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507143-predicateforincompleteremindersw
    predicateForIncompleteRemindersWithDueDateStarting_ending_calendars(startDate: NSDate, endDate: NSDate, calendars: EKCalendar):NSPredicate;
    //
    alloc():EKEventStore;
    //
    init():EKEventStore;
  }
}

declare const EKEventStore: cocoascript.EKEventStore;
declare namespace cocoascript {
  /**
   * An abstract superclass that represents the account a calendar belongs to.
   * doc://com.apple.documentation/documentation/eventkit/eksource
   */
  interface EKSource extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507275-sourceidentifier
    sourceIdentifier(): string | cocoascript.NSString;
    setSourceIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507300-sourcetype
    sourceType(): EKSourceType;
    setSourceType(): void;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507385-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507387-calendarsforentitytype
    calendarsForEntityType(entityType: EKEntityType):EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1624237-calendars
    calendars(): EKCalendar;
    setCalendars(): void;
    //
    alloc():EKSource;
    //
    init():EKSource;
  }
}

declare const EKSource: cocoascript.EKSource;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekerrorcode
  type EKErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekeventstatus
  type EKEventStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekeventavailability
  type EKEventAvailability = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekcalendartype
  type EKCalendarType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekcalendareventavailabilitymask
  type EKCalendarEventAvailabilityMask = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekreminderpriority
  type EKReminderPriority = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekentitytype
  type EKEntityType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekauthorizationstatus
  type EKAuthorizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekeventstorerequestaccesscompletionhandler
  type EKEventStoreRequestAccessCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekeventsearchcallback
  type EKEventSearchCallback = cocoascript.BOOL;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/eksourcetype
  type EKSourceType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/abaddressbookref
  type ABAddressBookRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/abrecordref
  type ABRecordRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/eventkit/ekentitymask
  type EKEntityMask = cocoascript.NSUInteger;
}
