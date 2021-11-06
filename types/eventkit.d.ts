declare namespace cocoascript {
  /**
   * An object that associates virtual conferencing details with an event object in a user’s calendar.
   * https://developer.apple.com/documentation/eventkit/ekvirtualconferenceprovider
   */
  interface EKVirtualConferenceProvider extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceprovider/3793731-fetchavailableroomtypeswithcompl
    fetchAvailableRoomTypesWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceprovider/3793732-fetchvirtualconferenceforidentif
    fetchVirtualConferenceForIdentifier_completionHandler(identifier: EKVirtualConferenceRoomTypeIdentifier, completionHandler: NSError):void;
    //
    alloc():EKVirtualConferenceProvider;
    //
    init():EKVirtualConferenceProvider;
  }
}

declare const EKVirtualConferenceProvider: cocoascript.EKVirtualConferenceProvider;
declare namespace cocoascript {
  /**
   * A class that defines the end of a recurrence rule.
   * https://developer.apple.com/documentation/eventkit/ekrecurrenceend
   */
  interface EKRecurrenceEnd extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekrecurrenceend/1415644-recurrenceendwithenddate
    recurrenceEndWithEndDate(endDate: NSDate):EKRecurrenceEnd;
    // https://developer.apple.com/documentation/eventkit/ekrecurrenceend/1415640-recurrenceendwithoccurrencecount
    recurrenceEndWithOccurrenceCount(occurrenceCount: NSUInteger):EKRecurrenceEnd;
    // https://developer.apple.com/documentation/eventkit/ekrecurrenceend/1415648-enddate
    endDate(): NSDate;
    setEndDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrenceend/1415642-occurrencecount
    occurrenceCount(): NSUInteger;
    setOccurrenceCount(value: NSUInteger): void;
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
   * https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek
   */
  interface EKRecurrenceDayOfWeek extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/1448589-dayofweek
    dayOfWeek(dayOfTheWeek: EKWeekday):EKRecurrenceDayOfWeek;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/1448591-dayofweek
    dayOfWeek_weekNumber(dayOfTheWeek: EKWeekday, weekNumber: NSInteger):EKRecurrenceDayOfWeek;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/1448581-initwithdayoftheweek
    initWithDayOfTheWeek_weekNumber(dayOfTheWeek: EKWeekday, weekNumber: NSInteger):EKRecurrenceDayOfWeek;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/1448579-dayoftheweek
    dayOfTheWeek(): EKWeekday;
    setDayOfTheWeek(value: EKWeekday): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/1448577-weeknumber
    weekNumber(): NSInteger;
    setWeekNumber(value: NSInteger): void;
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
   * https://developer.apple.com/documentation/eventkit/ekrecurrencerule
   */
  interface EKRecurrenceRule extends EKObject {
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507273-initrecurrencewithfrequency
    initRecurrenceWithFrequency_interval_end(type: EKRecurrenceFrequency, interval: NSInteger, end: EKRecurrenceEnd):EKRecurrenceRule;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507320-initrecurrencewithfrequency
    initRecurrenceWithFrequency_interval_daysOfTheWeek_daysOfTheMonth_monthsOfTheYear_weeksOfTheYear_daysOfTheYear_setPositions_end(type: EKRecurrenceFrequency, interval: NSInteger, days: EKRecurrenceDayOfWeek, monthDays: NSNumber, months: NSNumber, weeksOfTheYear: NSNumber, daysOfTheYear: NSNumber, setPositions: NSNumber, end: EKRecurrenceEnd):EKRecurrenceRule;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507340-calendaridentifier
    calendarIdentifier(): string | cocoascript.NSString;
    setCalendarIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507254-recurrenceend
    recurrenceEnd(): EKRecurrenceEnd;
    setRecurrenceEnd(value: EKRecurrenceEnd): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507297-frequency
    frequency(): EKRecurrenceFrequency;
    setFrequency(value: EKRecurrenceFrequency): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507194-interval
    interval(): NSInteger;
    setInterval(value: NSInteger): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507060-firstdayoftheweek
    firstDayOfTheWeek(): NSInteger;
    setFirstDayOfTheWeek(value: NSInteger): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507538-daysoftheweek
    daysOfTheWeek(): EKRecurrenceDayOfWeek;
    setDaysOfTheWeek(value: EKRecurrenceDayOfWeek): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507410-daysofthemonth
    daysOfTheMonth(): NSNumber;
    setDaysOfTheMonth(value: NSNumber): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507439-daysoftheyear
    daysOfTheYear(): NSNumber;
    setDaysOfTheYear(value: NSNumber): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507400-weeksoftheyear
    weeksOfTheYear(): NSNumber;
    setWeeksOfTheYear(value: NSNumber): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507449-monthsoftheyear
    monthsOfTheYear(): NSNumber;
    setMonthsOfTheYear(value: NSNumber): void;
    // https://developer.apple.com/documentation/eventkit/ekrecurrencerule/1507378-setpositions
    setPositions(): NSNumber;
    setSetPositions(value: NSNumber): void;
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
   * https://developer.apple.com/documentation/eventkit/ekparticipant
   */
  interface EKParticipant extends EKObject {
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507248-currentuser
    currentUser(): boolean;
    setCurrentUser(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507480-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507494-participantrole
    participantRole(): EKParticipantRole;
    setParticipantRole(value: EKParticipantRole): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507533-participantstatus
    participantStatus(): EKParticipantStatus;
    setParticipantStatus(value: EKParticipantStatus): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507364-participanttype
    participantType(): EKParticipantType;
    setParticipantType(value: EKParticipantType): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507435-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507163-contactpredicate
    contactPredicate(): NSPredicate;
    setContactPredicate(value: NSPredicate): void;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1615895-abrecordwithaddressbook
    ABRecordWithAddressBook(addressBook: ABAddressBookRef):ABRecordRef;
    // https://developer.apple.com/documentation/eventkit/ekparticipant/1507504-abpersoninaddressbook
    ABPersonInAddressBook(addressBook: ABAddressBook):ABPerson;
    //
    alloc():EKParticipant;
    //
    init():EKParticipant;
  }
}

declare const EKParticipant: cocoascript.EKParticipant;
declare namespace cocoascript {
  /**
   * https://developer.apple.com/documentation/eventkit/ekstructuredlocation
   */
  interface EKStructuredLocation extends EKObject {
    // https://developer.apple.com/documentation/eventkit/ekstructuredlocation/1507366-locationwithtitle
    locationWithTitle(title: string | cocoascript.NSString):EKStructuredLocation;
    // https://developer.apple.com/documentation/eventkit/ekstructuredlocation/1507493-locationwithmapitem
    locationWithMapItem(mapItem: MKMapItem):EKStructuredLocation;
    // https://developer.apple.com/documentation/eventkit/ekstructuredlocation/1507137-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekstructuredlocation/1507110-geolocation
    geoLocation(): CLLocation;
    setGeoLocation(value: CLLocation): void;
    // https://developer.apple.com/documentation/eventkit/ekstructuredlocation/1507489-radius
    radius(): number;
    setRadius(value: number): void;
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
   * https://developer.apple.com/documentation/eventkit/ekalarm
   */
  interface EKAlarm extends EKObject {
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507130-alarmwithabsolutedate
    alarmWithAbsoluteDate(date: NSDate):EKAlarm;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507338-alarmwithrelativeoffset
    alarmWithRelativeOffset(offset: NSTimeInterval):EKAlarm;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507486-absolutedate
    absoluteDate(): NSDate;
    setAbsoluteDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507491-relativeoffset
    relativeOffset(): NSTimeInterval;
    setRelativeOffset(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507123-proximity
    proximity(): EKAlarmProximity;
    setProximity(value: EKAlarmProximity): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507331-structuredlocation
    structuredLocation(): EKStructuredLocation;
    setStructuredLocation(value: EKStructuredLocation): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507242-type
    type(): EKAlarmType;
    setType(value: EKAlarmType): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507267-emailaddress
    emailAddress(): string | cocoascript.NSString;
    setEmailAddress(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1507227-soundname
    soundName(): string | cocoascript.NSString;
    setSoundName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekalarm/1589757-url
    url(): NSURL;
    setUrl(value: NSURL): void;
    //
    alloc():EKAlarm;
    //
    init():EKAlarm;
  }
}

declare const EKAlarm: cocoascript.EKAlarm;
declare namespace cocoascript {
  /**
   * Details about a room where virtual conferences take place.
   * https://developer.apple.com/documentation/eventkit/ekvirtualconferenceroomtypedescriptor
   */
  interface EKVirtualConferenceRoomTypeDescriptor extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/3793723-initwithtitle
    initWithTitle_identifier(title: string | cocoascript.NSString, identifier: EKVirtualConferenceRoomTypeIdentifier):EKVirtualConferenceRoomTypeDescriptor;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/3793724-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceroomtypedescriptor/3793722-identifier
    identifier(): EKVirtualConferenceRoomTypeIdentifier;
    setIdentifier(value: EKVirtualConferenceRoomTypeIdentifier): void;
    //
    alloc():EKVirtualConferenceRoomTypeDescriptor;
    //
    init():EKVirtualConferenceRoomTypeDescriptor;
  }
}

declare const EKVirtualConferenceRoomTypeDescriptor: cocoascript.EKVirtualConferenceRoomTypeDescriptor;
declare namespace cocoascript {
  /**
   * Details about how users join a virtual conference, including a title and URL.
   * https://developer.apple.com/documentation/eventkit/ekvirtualconferenceurldescriptor
   */
  interface EKVirtualConferenceURLDescriptor extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceurldescriptor/3793728-initwithtitle
    initWithTitle_URL(title: string | cocoascript.NSString, URL: NSURL):EKVirtualConferenceURLDescriptor;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceurldescriptor/3793729-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceurldescriptor/3793727-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    //
    alloc():EKVirtualConferenceURLDescriptor;
    //
    init():EKVirtualConferenceURLDescriptor;
  }
}

declare const EKVirtualConferenceURLDescriptor: cocoascript.EKVirtualConferenceURLDescriptor;
declare namespace cocoascript {
  /**
   * Details about a virtual conference that uses a custom room type.
   * https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor
   */
  interface EKVirtualConferenceDescriptor extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/3793719-initwithtitle
    initWithTitle_URLDescriptors_conferenceDetails(title: string | cocoascript.NSString, URLDescriptors: EKVirtualConferenceURLDescriptor, conferenceDetails: string | cocoascript.NSString):EKVirtualConferenceDescriptor;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/3793720-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/3793717-urldescriptors
    URLDescriptors(): EKVirtualConferenceURLDescriptor;
    setURLDescriptors(value: EKVirtualConferenceURLDescriptor): void;
    // https://developer.apple.com/documentation/eventkit/ekvirtualconferencedescriptor/3793718-conferencedetails
    conferenceDetails(): string | cocoascript.NSString;
    setConferenceDetails(value: string | cocoascript.NSString): void;
    //
    alloc():EKVirtualConferenceDescriptor;
    //
    init():EKVirtualConferenceDescriptor;
  }
}

declare const EKVirtualConferenceDescriptor: cocoascript.EKVirtualConferenceDescriptor;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekweekday
  type EKWeekday = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * A class that represents an event in a calendar.
   * https://developer.apple.com/documentation/eventkit/ekevent
   */
  interface EKEvent extends EKCalendarItem {
    // https://developer.apple.com/documentation/eventkit/ekevent/1507483-eventwitheventstore
    eventWithEventStore(eventStore: EKEventStore):EKEvent;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507335-comparestartdatewithevent
    compareStartDateWithEvent(other: EKEvent):NSComparisonResult;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507437-eventidentifier
    eventIdentifier(): string | cocoascript.NSString;
    setEventIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507313-availability
    availability(): EKEventAvailability;
    setAvailability(value: EKEventAvailability): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507372-startdate
    startDate(): NSDate;
    setStartDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507121-enddate
    endDate(): NSDate;
    setEndDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507482-allday
    allDay(): boolean;
    setAllDay(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507244-occurrencedate
    occurrenceDate(): NSDate;
    setOccurrenceDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507112-isdetached
    isDetached(): boolean;
    setIsDetached(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507357-organizer
    organizer(): EKParticipant;
    setOrganizer(value: EKParticipant): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507158-status
    status(): EKEventStatus;
    setStatus(value: EKEventStatus): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507349-birthdaycontactidentifier
    birthdayContactIdentifier(): string | cocoascript.NSString;
    setBirthdayContactIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507185-structuredlocation
    structuredLocation(): EKStructuredLocation;
    setStructuredLocation(value: EKStructuredLocation): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1615845-birthdaypersonid
    birthdayPersonID(): NSInteger;
    setBirthdayPersonID(value: NSInteger): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507361-birthdaypersonuniqueid
    birthdayPersonUniqueID(): string | cocoascript.NSString;
    setBirthdayPersonUniqueID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekevent/1507089-refresh
    refresh():boolean;
    //
    alloc():EKEvent;
    //
    init():EKEvent;
  }
}

declare const EKEvent: cocoascript.EKEvent;
declare namespace cocoascript {
  /**
   * An abstract superclass for all EventKit classes that have persistent instances.
   * https://developer.apple.com/documentation/eventkit/ekobject
   */
  interface EKObject extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekobject/1507333-haschanges
    hasChanges(): boolean;
    setHasChanges(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekobject/1507402-new
    new(): boolean;
    setNew(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekobject/1507327-refresh
    refresh():boolean;
    // https://developer.apple.com/documentation/eventkit/ekobject/1507405-reset
    reset():void;
    // https://developer.apple.com/documentation/eventkit/ekobject/1507462-rollback
    rollback():void;
    //
    alloc():EKObject;
    //
    init():EKObject;
  }
}

declare const EKObject: cocoascript.EKObject;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekspan
  type EKSpan = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekrecurrencefrequency
  type EKRecurrenceFrequency = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An abstract superclass for calendar events and reminders.
   * https://developer.apple.com/documentation/eventkit/ekcalendaritem
   */
  interface EKCalendarItem extends EKObject {
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507075-calendaritemidentifier
    calendarItemIdentifier(): string | cocoascript.NSString;
    setCalendarItemIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507283-calendaritemexternalidentifier
    calendarItemExternalIdentifier(): string | cocoascript.NSString;
    setCalendarItemExternalIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1623897-uuid
    UUID(): string | cocoascript.NSString;
    setUUID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507169-calendar
    calendar(): EKCalendar;
    setCalendar(value: EKCalendar): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507305-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507269-location
    location(): string | cocoascript.NSString;
    setLocation(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507213-creationdate
    creationDate(): NSDate;
    setCreationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507374-lastmodifieddate
    lastModifiedDate(): NSDate;
    setLastModifiedDate(value: NSDate): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507104-timezone
    timeZone(): NSTimeZone;
    setTimeZone(value: NSTimeZone): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507265-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507389-hasnotes
    hasNotes(): boolean;
    setHasNotes(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507507-notes
    notes(): string | cocoascript.NSString;
    setNotes(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507073-hasattendees
    hasAttendees(): boolean;
    setHasAttendees(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507140-attendees
    attendees(): EKParticipant;
    setAttendees(value: EKParticipant): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507271-hasalarms
    hasAlarms(): boolean;
    setHasAlarms(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507397-addalarm
    addAlarm(alarm: EKAlarm):void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507133-removealarm
    removeAlarm(alarm: EKAlarm):void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507211-alarms
    alarms(): EKAlarm;
    setAlarms(value: EKAlarm): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507459-hasrecurrencerules
    hasRecurrenceRules(): boolean;
    setHasRecurrenceRules(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507256-addrecurrencerule
    addRecurrenceRule(rule: EKRecurrenceRule):void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507495-removerecurrencerule
    removeRecurrenceRule(rule: EKRecurrenceRule):void;
    // https://developer.apple.com/documentation/eventkit/ekcalendaritem/1507135-recurrencerules
    recurrenceRules(): EKRecurrenceRule;
    setRecurrenceRules(value: EKRecurrenceRule): void;
    //
    alloc():EKCalendarItem;
    //
    init():EKCalendarItem;
  }
}

declare const EKCalendarItem: cocoascript.EKCalendarItem;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekparticipantrole
  type EKParticipantRole = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekparticipanttype
  type EKParticipantType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekparticipantstatus
  type EKParticipantStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekparticipantschedulestatus
  type EKParticipantScheduleStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/abaddressbookref
  type ABAddressBookRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/abrecordref
  type ABRecordRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  /**
   * A class that represents a calendar in EventKit.
   * https://developer.apple.com/documentation/eventkit/ekcalendar
   */
  interface EKCalendar extends EKObject {
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507516-calendarforentitytype
    calendarForEntityType_eventStore(entityType: EKEntityType, eventStore: EKEventStore):EKCalendar;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1620447-calendarwitheventstore
    calendarWithEventStore(eventStore: EKEventStore):EKCalendar;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507068-allowscontentmodifications
    allowsContentModifications(): boolean;
    setAllowsContentModifications(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1615894-cgcolor
    CGColor(): CGColorRef;
    setCGColor(value: CGColorRef): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507513-color
    color(): NSColor;
    setColor(value: NSColor): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507084-immutable
    immutable(): boolean;
    setImmutable(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507487-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507145-type
    type(): EKCalendarType;
    setType(value: EKCalendarType): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507202-allowedentitytypes
    allowedEntityTypes(): EKEntityMask;
    setAllowedEntityTypes(value: EKEntityMask): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507288-source
    source(): EKSource;
    setSource(value: EKSource): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507471-subscribed
    subscribed(): boolean;
    setSubscribed(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507171-supportedeventavailabilities
    supportedEventAvailabilities(): EKCalendarEventAvailabilityMask;
    setSupportedEventAvailabilities(value: EKCalendarEventAvailabilityMask): void;
    // https://developer.apple.com/documentation/eventkit/ekcalendar/1507380-calendaridentifier
    calendarIdentifier(): string | cocoascript.NSString;
    setCalendarIdentifier(value: string | cocoascript.NSString): void;
    //
    alloc():EKCalendar;
    //
    init():EKCalendar;
  }
}

declare const EKCalendar: cocoascript.EKCalendar;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekalarmproximity
  type EKAlarmProximity = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekalarmtype
  type EKAlarmType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An object that accesses the user’s calendar events and reminders and supports the scheduling of new events.
   * https://developer.apple.com/documentation/eventkit/ekeventstore
   */
  interface EKEventStore extends NSObject {
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507252-init
    init():EKEventStore;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507179-initwithsources
    initWithSources(sources: EKSource):EKEventStore;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507442-eventstoreidentifier
    eventStoreIdentifier(): string | cocoascript.NSString;
    setEventStoreIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1536382-initwithaccesstoentitytypes
    initWithAccessToEntityTypes(entityTypes: EKEntityMask):EKEventStore;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507547-requestaccesstoentitytype
    requestAccessToEntityType_completion(entityType: EKEntityType, completion: EKEventStoreRequestAccessCompletionHandler):void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507239-authorizationstatusforentitytype
    authorizationStatusForEntityType(entityType: EKEntityType):EKAuthorizationStatus;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507315-sources
    sources(): EKSource;
    setSources(value: EKSource): void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507419-delegatesources
    delegateSources(): EKSource;
    setDelegateSources(value: EKSource): void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507521-sourcewithidentifier
    sourceWithIdentifier(identifier: string | cocoascript.NSString):EKSource;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507424-commit
    commit(error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507345-reset
    reset():void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507421-refreshsourcesifnecessary
    refreshSourcesIfNecessary():void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507062-defaultcalendarfornewevents
    defaultCalendarForNewEvents(): EKCalendar;
    setDefaultCalendarForNewEvents(value: EKCalendar): void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507543-defaultcalendarfornewreminders
    defaultCalendarForNewReminders():EKCalendar;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507128-calendarsforentitytype
    calendarsForEntityType(entityType: EKEntityType):EKCalendar;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507484-calendarwithidentifier
    calendarWithIdentifier(identifier: string | cocoascript.NSString):EKCalendar;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507080-savecalendar
    saveCalendar_commit_error(calendar: EKCalendar, commit: boolean, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507523-removecalendar
    removeCalendar_commit_error(calendar: EKCalendar, commit: boolean, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1623680-calendars
    calendars(): EKCalendar;
    setCalendars(value: EKCalendar): void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507490-eventwithidentifier
    eventWithIdentifier(identifier: string | cocoascript.NSString):EKEvent;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507433-calendaritemwithidentifier
    calendarItemWithIdentifier(identifier: string | cocoascript.NSString):EKCalendarItem;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507281-calendaritemswithexternalidentif
    calendarItemsWithExternalIdentifier(externalIdentifier: string | cocoascript.NSString):EKCalendarItem;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1615882-removeevent
    removeEvent_span_error(event: EKEvent, span: EKSpan, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507469-removeevent
    removeEvent_span_commit_error(event: EKEvent, span: EKSpan, commit: boolean, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507108-removereminder
    removeReminder_commit_error(reminder: EKReminder, commit: boolean, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1615881-saveevent
    saveEvent_span_error(event: EKEvent, span: EKSpan, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507295-saveevent
    saveEvent_span_commit_error(event: EKEvent, span: EKSpan, commit: boolean, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507181-savereminder
    saveReminder_commit_error(reminder: EKReminder, commit: boolean, error: NSError):boolean;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507518-enumerateeventsmatchingpredicate
    enumerateEventsMatchingPredicate_usingBlock(predicate: NSPredicate, block: EKEventSearchCallback):void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507183-eventsmatchingpredicate
    eventsMatchingPredicate(predicate: NSPredicate):EKEvent;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507500-fetchremindersmatchingpredicate
    fetchRemindersMatchingPredicate_completion(predicate: NSPredicate, completion: EKReminder):EKEventStore;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507342-cancelfetchrequest
    cancelFetchRequest(fetchIdentifier: EKEventStore):void;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507479-predicateforeventswithstartdate
    predicateForEventsWithStartDate_endDate_calendars(startDate: NSDate, endDate: NSDate, calendars: EKCalendar):NSPredicate;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507086-predicateforremindersincalendars
    predicateForRemindersInCalendars(calendars: EKCalendar):NSPredicate;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507447-predicateforcompletedreminderswi
    predicateForCompletedRemindersWithCompletionDateStarting_ending_calendars(startDate: NSDate, endDate: NSDate, calendars: EKCalendar):NSPredicate;
    // https://developer.apple.com/documentation/eventkit/ekeventstore/1507143-predicateforincompleteremindersw
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
   * A class that represents a reminder in a calendar.
   * https://developer.apple.com/documentation/eventkit/ekreminder
   */
  interface EKReminder extends EKCalendarItem {
    // https://developer.apple.com/documentation/eventkit/ekreminder/1507429-reminderwitheventstore
    reminderWithEventStore(eventStore: EKEventStore):EKReminder;
    // https://developer.apple.com/documentation/eventkit/ekreminder/1507173-priority
    priority(): NSUInteger;
    setPriority(value: NSUInteger): void;
    // https://developer.apple.com/documentation/eventkit/ekreminder/1507558-startdatecomponents
    startDateComponents(): NSDateComponents;
    setStartDateComponents(value: NSDateComponents): void;
    // https://developer.apple.com/documentation/eventkit/ekreminder/1507383-duedatecomponents
    dueDateComponents(): NSDateComponents;
    setDueDateComponents(value: NSDateComponents): void;
    // https://developer.apple.com/documentation/eventkit/ekreminder/1507502-completed
    completed(): boolean;
    setCompleted(value: boolean): void;
    // https://developer.apple.com/documentation/eventkit/ekreminder/1507286-completiondate
    completionDate(): NSDate;
    setCompletionDate(value: NSDate): void;
    //
    alloc():EKReminder;
    //
    init():EKReminder;
  }
}

declare const EKReminder: cocoascript.EKReminder;
declare namespace cocoascript {
  /**
   * An abstract superclass that represents the account a calendar belongs to.
   * https://developer.apple.com/documentation/eventkit/eksource
   */
  interface EKSource extends EKObject {
    // https://developer.apple.com/documentation/eventkit/eksource/1507275-sourceidentifier
    sourceIdentifier(): string | cocoascript.NSString;
    setSourceIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/eksource/1507300-sourcetype
    sourceType(): EKSourceType;
    setSourceType(value: EKSourceType): void;
    // https://developer.apple.com/documentation/eventkit/eksource/1507385-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/eventkit/eksource/1507387-calendarsforentitytype
    calendarsForEntityType(entityType: EKEntityType):EKCalendar;
    // https://developer.apple.com/documentation/eventkit/eksource/1624237-calendars
    calendars(): EKCalendar;
    setCalendars(value: EKCalendar): void;
    //
    alloc():EKSource;
    //
    init():EKSource;
  }
}

declare const EKSource: cocoascript.EKSource;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekerrorcode
  type EKErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekvirtualconferenceroomtypeidentifier
  type EKVirtualConferenceRoomTypeIdentifier = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekeventstatus
  type EKEventStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekeventavailability
  type EKEventAvailability = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekcalendartype
  type EKCalendarType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekcalendareventavailabilitymask
  type EKCalendarEventAvailabilityMask = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekauthorizationstatus
  type EKAuthorizationStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekeventstorerequestaccesscompletionhandler
  type EKEventStoreRequestAccessCompletionHandler = cocoascript.NSError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekeventsearchcallback
  type EKEventSearchCallback = boolean;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekreminderpriority
  type EKReminderPriority = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/eksourcetype
  type EKSourceType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekentitytype
  type EKEntityType = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/eventkit/ekentitymask
  type EKEntityMask = cocoascript.NSUInteger;
}
