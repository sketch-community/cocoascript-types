declare namespace cocoascript {
  /**
   * A class that defines the end of a recurrence rule.
   * doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend
   */
  interface EKRecurrenceEnd extends NSObject {
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415644-recurrenceendwithenddate
    recurrenceEndWithEndDate(endDate: cocoascript.NSDate):cocoascript.EKRecurrenceEnd;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415640-recurrenceendwithoccurrencecount
    recurrenceEndWithOccurrenceCount(occurrenceCount: cocoascript.NSUInteger):cocoascript.EKRecurrenceEnd;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415648-enddate
    endDate(): cocoascript.NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrenceend/1415642-occurrencecount
    occurrenceCount(): cocoascript.NSUInteger;
    setOccurrenceCount(): void;
    //
    alloc():cocoascript.EKRecurrenceEnd;
    //
    init():cocoascript.EKRecurrenceEnd;
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
    dayOfWeek(dayOfTheWeek: cocoascript.EKWeekday):cocoascript.EKRecurrenceDayOfWeek;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448591-dayofweek
    dayOfWeek_weekNumber(dayOfTheWeek: cocoascript.EKWeekday, weekNumber: cocoascript.NSInteger):cocoascript.EKRecurrenceDayOfWeek;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448581-initwithdayoftheweek
    initWithDayOfTheWeek_weekNumber(dayOfTheWeek: cocoascript.EKWeekday, weekNumber: cocoascript.NSInteger):cocoascript.EKRecurrenceDayOfWeek;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448579-dayoftheweek
    dayOfTheWeek(): cocoascript.EKWeekday;
    setDayOfTheWeek(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencedayofweek/1448577-weeknumber
    weekNumber(): cocoascript.NSInteger;
    setWeekNumber(): void;
    //
    alloc():cocoascript.EKRecurrenceDayOfWeek;
    //
    init():cocoascript.EKRecurrenceDayOfWeek;
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
    initRecurrenceWithFrequency_interval_end(type: cocoascript.EKRecurrenceFrequency, interval: cocoascript.NSInteger, end: cocoascript.EKRecurrenceEnd):cocoascript.EKRecurrenceRule;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507320-initrecurrencewithfrequency
    initRecurrenceWithFrequency_interval_daysOfTheWeek_daysOfTheMonth_monthsOfTheYear_weeksOfTheYear_daysOfTheYear_setPositions_end(type: cocoascript.EKRecurrenceFrequency, interval: cocoascript.NSInteger, days: cocoascript.EKRecurrenceDayOfWeek, monthDays: cocoascript.NSNumber, months: cocoascript.NSNumber, weeksOfTheYear: cocoascript.NSNumber, daysOfTheYear: cocoascript.NSNumber, setPositions: cocoascript.NSNumber, end: cocoascript.EKRecurrenceEnd):cocoascript.EKRecurrenceRule;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507340-calendaridentifier
    calendarIdentifier(): cocoascript.NSString;
    setCalendarIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507254-recurrenceend
    recurrenceEnd(): cocoascript.EKRecurrenceEnd;
    setRecurrenceEnd(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507297-frequency
    frequency(): cocoascript.EKRecurrenceFrequency;
    setFrequency(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507194-interval
    interval(): cocoascript.NSInteger;
    setInterval(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507060-firstdayoftheweek
    firstDayOfTheWeek(): cocoascript.NSInteger;
    setFirstDayOfTheWeek(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507538-daysoftheweek
    daysOfTheWeek(): cocoascript.EKRecurrenceDayOfWeek;
    setDaysOfTheWeek(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507410-daysofthemonth
    daysOfTheMonth(): cocoascript.NSNumber;
    setDaysOfTheMonth(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507439-daysoftheyear
    daysOfTheYear(): cocoascript.NSNumber;
    setDaysOfTheYear(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507400-weeksoftheyear
    weeksOfTheYear(): cocoascript.NSNumber;
    setWeeksOfTheYear(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507449-monthsoftheyear
    monthsOfTheYear(): cocoascript.NSNumber;
    setMonthsOfTheYear(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekrecurrencerule/1507378-setpositions
    setPositions(): cocoascript.NSNumber;
    setSetPositions(): void;
    //
    alloc():cocoascript.EKRecurrenceRule;
    //
    init():cocoascript.EKRecurrenceRule;
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
    currentUser(): cocoascript.BOOL;
    setCurrentUser(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507480-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507494-participantrole
    participantRole(): cocoascript.EKParticipantRole;
    setParticipantRole(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507533-participantstatus
    participantStatus(): cocoascript.EKParticipantStatus;
    setParticipantStatus(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507364-participanttype
    participantType(): cocoascript.EKParticipantType;
    setParticipantType(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507435-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1615895-abrecordwithaddressbook
    ABRecordWithAddressBook(addressBook: cocoascript.ABAddressBookRef):cocoascript.ABRecordRef;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507504-abpersoninaddressbook
    ABPersonInAddressBook(addressBook: cocoascript.ABAddressBook):cocoascript.ABPerson;
    // doc://com.apple.documentation/documentation/eventkit/ekparticipant/1507163-contactpredicate
    contactPredicate(): cocoascript.NSPredicate;
    setContactPredicate(): void;
    //
    alloc():cocoascript.EKParticipant;
    //
    init():cocoascript.EKParticipant;
  }
}

declare const EKParticipant: cocoascript.EKParticipant;
declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation
   */
  interface EKStructuredLocation extends EKObject {
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507366-locationwithtitle
    locationWithTitle(title: cocoascript.NSString):cocoascript.EKStructuredLocation;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507493-locationwithmapitem
    locationWithMapItem(mapItem: cocoascript.MKMapItem):cocoascript.EKStructuredLocation;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507137-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507110-geolocation
    geoLocation(): cocoascript.CLLocation;
    setGeoLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekstructuredlocation/1507489-radius
    radius(): number;
    setRadius(): void;
    //
    alloc():cocoascript.EKStructuredLocation;
    //
    init():cocoascript.EKStructuredLocation;
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
    alarmWithAbsoluteDate(date: cocoascript.NSDate):cocoascript.EKAlarm;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507338-alarmwithrelativeoffset
    alarmWithRelativeOffset(offset: cocoascript.NSTimeInterval):cocoascript.EKAlarm;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507486-absolutedate
    absoluteDate(): cocoascript.NSDate;
    setAbsoluteDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507491-relativeoffset
    relativeOffset(): cocoascript.NSTimeInterval;
    setRelativeOffset(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507123-proximity
    proximity(): cocoascript.EKAlarmProximity;
    setProximity(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507331-structuredlocation
    structuredLocation(): cocoascript.EKStructuredLocation;
    setStructuredLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507242-type
    type(): cocoascript.EKAlarmType;
    setType(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507267-emailaddress
    emailAddress(): cocoascript.NSString;
    setEmailAddress(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1507227-soundname
    soundName(): cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekalarm/1589757-url
    url(): cocoascript.NSURL;
    setUrl(): void;
    //
    alloc():cocoascript.EKAlarm;
    //
    init():cocoascript.EKAlarm;
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
    eventWithEventStore(eventStore: cocoascript.EKEventStore):cocoascript.EKEvent;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507335-comparestartdatewithevent
    compareStartDateWithEvent(other: cocoascript.EKEvent):cocoascript.NSComparisonResult;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507437-eventidentifier
    eventIdentifier(): cocoascript.NSString;
    setEventIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507313-availability
    availability(): cocoascript.EKEventAvailability;
    setAvailability(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507372-startdate
    startDate(): cocoascript.NSDate;
    setStartDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507121-enddate
    endDate(): cocoascript.NSDate;
    setEndDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507482-allday
    allDay(): cocoascript.BOOL;
    setAllDay(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507244-occurrencedate
    occurrenceDate(): cocoascript.NSDate;
    setOccurrenceDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507112-isdetached
    isDetached(): cocoascript.BOOL;
    setIsDetached(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507357-organizer
    organizer(): cocoascript.EKParticipant;
    setOrganizer(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507158-status
    status(): cocoascript.EKEventStatus;
    setStatus(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507349-birthdaycontactidentifier
    birthdayContactIdentifier(): cocoascript.NSString;
    setBirthdayContactIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507185-structuredlocation
    structuredLocation(): cocoascript.EKStructuredLocation;
    setStructuredLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1615845-birthdaypersonid
    birthdayPersonID(): cocoascript.NSInteger;
    setBirthdayPersonID(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507361-birthdaypersonuniqueid
    birthdayPersonUniqueID(): cocoascript.NSString;
    setBirthdayPersonUniqueID(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekevent/1507089-refresh
    refresh():cocoascript.BOOL;
    //
    alloc():cocoascript.EKEvent;
    //
    init():cocoascript.EKEvent;
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
    new(): cocoascript.BOOL;
    setNew(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507333-haschanges
    hasChanges(): cocoascript.BOOL;
    setHasChanges(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1812546-isnew
    ():void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507327-refresh
    refresh():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507405-reset
    reset():void;
    // doc://com.apple.documentation/documentation/eventkit/ekobject/1507462-rollback
    rollback():void;
    //
    alloc():cocoascript.EKObject;
    //
    init():cocoascript.EKObject;
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
    calendarItemIdentifier(): cocoascript.NSString;
    setCalendarItemIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507283-calendaritemexternalidentifier
    calendarItemExternalIdentifier(): cocoascript.NSString;
    setCalendarItemExternalIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1623897-uuid
    UUID(): cocoascript.NSString;
    setUUID(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507169-calendar
    calendar(): cocoascript.EKCalendar;
    setCalendar(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507305-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507269-location
    location(): cocoascript.NSString;
    setLocation(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507213-creationdate
    creationDate(): cocoascript.NSDate;
    setCreationDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507374-lastmodifieddate
    lastModifiedDate(): cocoascript.NSDate;
    setLastModifiedDate(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507104-timezone
    timeZone(): cocoascript.NSTimeZone;
    setTimeZone(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507265-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507389-hasnotes
    hasNotes(): cocoascript.BOOL;
    setHasNotes(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507507-notes
    notes(): cocoascript.NSString;
    setNotes(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507073-hasattendees
    hasAttendees(): cocoascript.BOOL;
    setHasAttendees(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507140-attendees
    attendees(): cocoascript.EKParticipant;
    setAttendees(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507271-hasalarms
    hasAlarms(): cocoascript.BOOL;
    setHasAlarms(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507397-addalarm
    addAlarm(alarm: cocoascript.EKAlarm):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507133-removealarm
    removeAlarm(alarm: cocoascript.EKAlarm):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507211-alarms
    alarms(): cocoascript.EKAlarm;
    setAlarms(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507459-hasrecurrencerules
    hasRecurrenceRules(): cocoascript.BOOL;
    setHasRecurrenceRules(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507256-addrecurrencerule
    addRecurrenceRule(rule: cocoascript.EKRecurrenceRule):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507495-removerecurrencerule
    removeRecurrenceRule(rule: cocoascript.EKRecurrenceRule):void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendaritem/1507135-recurrencerules
    recurrenceRules(): cocoascript.EKRecurrenceRule;
    setRecurrenceRules(): void;
    //
    alloc():cocoascript.EKCalendarItem;
    //
    init():cocoascript.EKCalendarItem;
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
    calendarForEntityType_eventStore(entityType: cocoascript.EKEntityType, eventStore: cocoascript.EKEventStore):cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1620447-calendarwitheventstore
    calendarWithEventStore(eventStore: cocoascript.EKEventStore):cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507068-allowscontentmodifications
    allowsContentModifications(): cocoascript.BOOL;
    setAllowsContentModifications(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1615894-cgcolor
    CGColor(): cocoascript.CGColorRef;
    setCGColor(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507513-color
    color(): cocoascript.NSColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507084-immutable
    immutable(): cocoascript.BOOL;
    setImmutable(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507487-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507145-type
    type(): cocoascript.EKCalendarType;
    setType(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507202-allowedentitytypes
    allowedEntityTypes(): cocoascript.EKEntityMask;
    setAllowedEntityTypes(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507288-source
    source(): cocoascript.EKSource;
    setSource(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507471-subscribed
    subscribed(): cocoascript.BOOL;
    setSubscribed(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507171-supportedeventavailabilities
    supportedEventAvailabilities(): cocoascript.EKCalendarEventAvailabilityMask;
    setSupportedEventAvailabilities(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekcalendar/1507380-calendaridentifier
    calendarIdentifier(): cocoascript.NSString;
    setCalendarIdentifier(): void;
    //
    alloc():cocoascript.EKCalendar;
    //
    init():cocoascript.EKCalendar;
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
    reminderWithEventStore(eventStore: cocoascript.EKEventStore):cocoascript.EKReminder;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507173-priority
    priority(): cocoascript.NSUInteger;
    setPriority(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507558-startdatecomponents
    startDateComponents(): cocoascript.NSDateComponents;
    setStartDateComponents(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507383-duedatecomponents
    dueDateComponents(): cocoascript.NSDateComponents;
    setDueDateComponents(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507502-completed
    completed(): cocoascript.BOOL;
    setCompleted(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekreminder/1507286-completiondate
    completionDate(): cocoascript.NSDate;
    setCompletionDate(): void;
    //
    alloc():cocoascript.EKReminder;
    //
    init():cocoascript.EKReminder;
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
    init():cocoascript.EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507179-initwithsources
    initWithSources(sources: cocoascript.EKSource):cocoascript.EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507442-eventstoreidentifier
    eventStoreIdentifier(): cocoascript.NSString;
    setEventStoreIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1536382-initwithaccesstoentitytypes
    initWithAccessToEntityTypes(entityTypes: cocoascript.EKEntityMask):cocoascript.EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507547-requestaccesstoentitytype
    requestAccessToEntityType_completion(entityType: cocoascript.EKEntityType, completion: cocoascript.EKEventStoreRequestAccessCompletionHandler):void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507239-authorizationstatusforentitytype
    authorizationStatusForEntityType(entityType: cocoascript.EKEntityType):cocoascript.EKAuthorizationStatus;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507315-sources
    sources(): cocoascript.EKSource;
    setSources(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507419-delegatesources
    delegateSources(): cocoascript.EKSource;
    setDelegateSources(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507521-sourcewithidentifier
    sourceWithIdentifier(identifier: cocoascript.NSString):cocoascript.EKSource;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507424-commit
    commit(error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507345-reset
    reset():void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507421-refreshsourcesifnecessary
    refreshSourcesIfNecessary():void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507062-defaultcalendarfornewevents
    defaultCalendarForNewEvents(): cocoascript.EKCalendar;
    setDefaultCalendarForNewEvents(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507543-defaultcalendarfornewreminders
    defaultCalendarForNewReminders():cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507128-calendarsforentitytype
    calendarsForEntityType(entityType: cocoascript.EKEntityType):cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507484-calendarwithidentifier
    calendarWithIdentifier(identifier: cocoascript.NSString):cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507080-savecalendar
    saveCalendar_commit_error(calendar: cocoascript.EKCalendar, commit: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507523-removecalendar
    removeCalendar_commit_error(calendar: cocoascript.EKCalendar, commit: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1623680-calendars
    calendars(): cocoascript.EKCalendar;
    setCalendars(): void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507490-eventwithidentifier
    eventWithIdentifier(identifier: cocoascript.NSString):cocoascript.EKEvent;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507433-calendaritemwithidentifier
    calendarItemWithIdentifier(identifier: cocoascript.NSString):cocoascript.EKCalendarItem;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507281-calendaritemswithexternalidentif
    calendarItemsWithExternalIdentifier(externalIdentifier: cocoascript.NSString):cocoascript.EKCalendarItem;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1615882-removeevent
    removeEvent_span_error(event: cocoascript.EKEvent, span: cocoascript.EKSpan, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507469-removeevent
    removeEvent_span_commit_error(event: cocoascript.EKEvent, span: cocoascript.EKSpan, commit: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507108-removereminder
    removeReminder_commit_error(reminder: cocoascript.EKReminder, commit: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1615881-saveevent
    saveEvent_span_error(event: cocoascript.EKEvent, span: cocoascript.EKSpan, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507295-saveevent
    saveEvent_span_commit_error(event: cocoascript.EKEvent, span: cocoascript.EKSpan, commit: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507181-savereminder
    saveReminder_commit_error(reminder: cocoascript.EKReminder, commit: cocoascript.BOOL, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507518-enumerateeventsmatchingpredicate
    enumerateEventsMatchingPredicate_usingBlock(predicate: cocoascript.NSPredicate, block: cocoascript.EKEventSearchCallback):void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507183-eventsmatchingpredicate
    eventsMatchingPredicate(predicate: cocoascript.NSPredicate):cocoascript.EKEvent;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507500-fetchremindersmatchingpredicate
    fetchRemindersMatchingPredicate_completion(predicate: cocoascript.NSPredicate, completion: cocoascript.EKReminder):cocoascript.EKEventStore;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507342-cancelfetchrequest
    cancelFetchRequest(fetchIdentifier: cocoascript.EKEventStore):void;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507479-predicateforeventswithstartdate
    predicateForEventsWithStartDate_endDate_calendars(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate, calendars: cocoascript.EKCalendar):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507086-predicateforremindersincalendars
    predicateForRemindersInCalendars(calendars: cocoascript.EKCalendar):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507447-predicateforcompletedreminderswi
    predicateForCompletedRemindersWithCompletionDateStarting_ending_calendars(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate, calendars: cocoascript.EKCalendar):cocoascript.NSPredicate;
    // doc://com.apple.documentation/documentation/eventkit/ekeventstore/1507143-predicateforincompleteremindersw
    predicateForIncompleteRemindersWithDueDateStarting_ending_calendars(startDate: cocoascript.NSDate, endDate: cocoascript.NSDate, calendars: cocoascript.EKCalendar):cocoascript.NSPredicate;
    //
    alloc():cocoascript.EKEventStore;
    //
    init():cocoascript.EKEventStore;
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
    sourceIdentifier(): cocoascript.NSString;
    setSourceIdentifier(): void;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507300-sourcetype
    sourceType(): cocoascript.EKSourceType;
    setSourceType(): void;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507385-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1507387-calendarsforentitytype
    calendarsForEntityType(entityType: cocoascript.EKEntityType):cocoascript.EKCalendar;
    // doc://com.apple.documentation/documentation/eventkit/eksource/1624237-calendars
    calendars(): cocoascript.EKCalendar;
    setCalendars(): void;
    //
    alloc():cocoascript.EKSource;
    //
    init():cocoascript.EKSource;
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
