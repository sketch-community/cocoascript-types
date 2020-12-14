declare namespace cocoascript {
  /**
   * Methods you use to respond to user selections in a person picker.
   * doc://com.apple.documentation/documentation/addressbook/abpersonpickerdelegate
   */
  interface ABPersonPickerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abpersonpickerdelegate/1395368-personpicker
    personPicker_didChoosePerson_property_identifier(picker: ABPersonPicker, person: ABPerson, property: string | cocoascript.NSString, identifier: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpickerdelegate/1395366-personpickerdidclose
    personPickerDidClose(picker: ABPersonPicker):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for responding to a request to load images associated with a contact.
   * doc://com.apple.documentation/documentation/addressbook/abimageclient
   */
  interface ABImageClient extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abimageclient/1392505-consumeimagedata
    consumeImageData_forTag(data: NSData, tag: NSInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * An immutable representation of a property that might have multiple values.
   * doc://com.apple.documentation/documentation/addressbook/abmultivalue
   */
  interface ABMultiValue extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458525-primaryidentifier
    primaryIdentifier():string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458743-identifieratindex
    identifierAtIndex(index: NSUInteger):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458700-indexforidentifier
    indexForIdentifier(identifier: string | cocoascript.NSString):NSUInteger;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458668-labelatindex
    labelAtIndex(index: NSUInteger):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458515-valueatindex
    valueAtIndex(index: NSUInteger):ABMultiValue;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458427-valueforidentifier
    valueForIdentifier(identifier: string | cocoascript.NSString):ABMultiValue;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458693-labelforidentifier
    labelForIdentifier(identifier: string | cocoascript.NSString):ABMultiValue;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458752-count
    count():NSUInteger;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458267-propertytype
    propertyType():ABPropertyType;
    //
    alloc():ABMultiValue;
    //
    init():ABMultiValue;
  }
}

declare const ABMultiValue: cocoascript.ABMultiValue;
declare namespace cocoascript {
  /**
   * An object that encapsulates all information about a person in the Address Book database.
   * doc://com.apple.documentation/documentation/addressbook/abperson
   */
  interface ABPerson extends ABRecord {
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458438-addpropertiesandtypes
    addPropertiesAndTypes(properties: NSDictionary):NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458554-removeproperties
    removeProperties(properties: NSArray):NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458494-properties
    properties():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458682-typeofproperty
    typeOfProperty(property: string | cocoascript.NSString):ABPropertyType;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458372-linkedpeople
    linkedPeople():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458380-parentgroups
    parentGroups():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392511-cancelloadingimagedatafortag
    cancelLoadingImageDataForTag(tag: NSInteger):void;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392507-beginloadingimagedataforclient
    beginLoadingImageDataForClient(client: ABImageClient):NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392509-imagedata
    imageData():NSData;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392513-setimagedata
    setImageData(data: NSData):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458332-searchelementforproperty
    searchElementForProperty_label_key_value_comparison(property: string | cocoascript.NSString, label: string | cocoascript.NSString, key: string | cocoascript.NSString, value: ABPerson, comparison: ABSearchComparison):ABSearchElement;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458755-initwithvcardrepresentation
    initWithVCardRepresentation(vCardData: NSData):ABPerson;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458307-vcardrepresentation
    vCardRepresentation():NSData;
    //
    alloc():ABPerson;
    //
    init():ABPerson;
  }
}

declare const ABPerson: cocoascript.ABPerson;
declare namespace cocoascript {
  /**
   * A picker object that you display when you want the user to select contacts.
   * doc://com.apple.documentation/documentation/addressbook/abpersonpicker
   */
  interface ABPersonPicker extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589907-delegate
    delegate(): ABPersonPickerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589906-showrelativetorect
    showRelativeToRect_ofView_preferredEdge(positioningRect: NSRect, positioningView: NSView, preferredEdge: NSRectEdge):void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589905-close
    close():void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589904-properties
    properties(): NSArray;
    setProperties(): void;
    //
    alloc():ABPersonPicker;
    //
    init():ABPersonPicker;
  }
}

declare const ABPersonPicker: cocoascript.ABPersonPicker;
declare namespace cocoascript {
  /**
   * A mutable representation of a property that might have multiple values.
   * doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue
   */
  interface ABMutableMultiValue extends ABMultiValue {
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458374-addvalue
    addValue_withLabel(value: ABMutableMultiValue, label: string | cocoascript.NSString):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458362-insertvalue
    insertValue_withLabel_atIndex(value: ABMutableMultiValue, label: string | cocoascript.NSString, index: NSUInteger):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458689-replacelabelatindex
    replaceLabelAtIndex_withLabel(index: NSUInteger, label: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458609-replacevalueatindex
    replaceValueAtIndex_withValue(index: NSUInteger, value: ABMutableMultiValue):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458405-removevalueandlabelatindex
    removeValueAndLabelAtIndex(index: NSUInteger):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458716-setprimaryidentifier
    setPrimaryIdentifier(identifier: string | cocoascript.NSString):BOOL;
    //
    alloc():ABMutableMultiValue;
    //
    init():ABMutableMultiValue;
  }
}

declare const ABMutableMultiValue: cocoascript.ABMutableMultiValue;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abmultivalueref
  type ABMultiValueRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  /**
   * The main object you use to access the Address Book database.
   * doc://com.apple.documentation/documentation/addressbook/abaddressbook
   */
  interface ABAddressBook extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458758-sharedaddressbook
    sharedAddressBook():ABAddressBook;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1529221-addressbook
    addressBook():ABAddressBook;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458440-groups
    groups():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458683-people
    people():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458663-me
    me():ABPerson;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458403-setme
    setMe(moi: ABPerson):void;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458571-recordforuniqueid
    recordForUniqueId(uniqueId: string | cocoascript.NSString):ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458280-recordclassfromuniqueid
    recordClassFromUniqueId(uniqueId: string | cocoascript.NSString):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458665-formattedaddressfromdictionary
    formattedAddressFromDictionary(address: NSDictionary):NSAttributedString;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458703-defaultcountrycode
    defaultCountryCode():string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458447-defaultnameordering
    defaultNameOrdering():NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458709-addrecord
    addRecord_error(record: ABRecord, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458749-addrecord
    addRecord(record: ABRecord):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458388-removerecord
    removeRecord_error(record: ABRecord, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458605-removerecord
    removeRecord(record: ABRecord):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458410-recordsmatchingsearchelement
    recordsMatchingSearchElement(search: ABSearchElement):NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458270-hasunsavedchanges
    hasUnsavedChanges():BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458432-save
    save():BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458623-saveandreturnerror
    saveAndReturnError(error: NSError):BOOL;
    //
    alloc():ABAddressBook;
    //
    init():ABAddressBook;
  }
}

declare const ABAddressBook: cocoascript.ABAddressBook;
// doc://com.apple.documentation/documentation/addressbook/kabdatabasechangednotification
declare const kABDatabaseChangedNotification: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/kabdatabasechangedexternallynotification
declare const kABDatabaseChangedExternallyNotification: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that represents a group of records in the Address Book database.
   * doc://com.apple.documentation/documentation/addressbook/abgroup
   */
  interface ABGroup extends ABRecord {
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427944-addpropertiesandtypes
    addPropertiesAndTypes(properties: NSDictionary):NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427954-removeproperties
    removeProperties(properties: NSArray):NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427958-properties
    properties():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427950-typeofproperty
    typeOfProperty(property: string | cocoascript.NSString):ABPropertyType;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427932-addmember
    addMember(person: ABPerson):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427940-removemember
    removeMember(person: ABPerson):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427934-members
    members():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427938-addsubgroup
    addSubgroup(group: ABGroup):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427960-removesubgroup
    removeSubgroup(group: ABGroup):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427956-parentgroups
    parentGroups():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427948-subgroups
    subgroups():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427942-distributionidentifierforpropert
    distributionIdentifierForProperty_person(property: string | cocoascript.NSString, person: ABPerson):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427936-setdistributionidentifier
    setDistributionIdentifier_forProperty_person(identifier: string | cocoascript.NSString, property: string | cocoascript.NSString, person: ABPerson):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427946-searchelementforproperty
    searchElementForProperty_label_key_value_comparison(property: string | cocoascript.NSString, label: string | cocoascript.NSString, key: string | cocoascript.NSString, value: ABGroup, comparison: ABSearchComparison):ABSearchElement;
    //
    alloc():ABGroup;
    //
    init():ABGroup;
  }
}

declare const ABGroup: cocoascript.ABGroup;
declare namespace cocoascript {
  /**
   * An abstract class that defines the common properties for all Address Book records.
   * doc://com.apple.documentation/documentation/addressbook/abrecord
   */
  interface ABRecord extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400511-initwithaddressbook
    initWithAddressBook(addressBook: ABAddressBook):ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400517-init
    init():ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400513-removevalueforproperty
    removeValueForProperty(property: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400509-setvalue
    setValue_forProperty(value: ABRecord, property: string | cocoascript.NSString):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400521-setvalue
    setValue_forProperty_error(value: ABRecord, property: string | cocoascript.NSString, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400523-valueforproperty
    valueForProperty(property: string | cocoascript.NSString):ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400519-isreadonly
    isReadOnly():BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400505-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400515-uniqueid
    uniqueId(): string | cocoascript.NSString;
    setUniqueId(): void;
    //
    alloc():ABRecord;
    //
    init():ABRecord;
  }
}

declare const ABRecord: cocoascript.ABRecord;
declare namespace cocoascript {
  /**
   * An object you use to customize the behavior of people-picker views in an app's user interface.
   * doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview
   */
  interface ABPeoplePickerView extends NSView {
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458513-addproperty
    addProperty(property: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458420-columntitleforproperty
    columnTitleForProperty(property: string | cocoascript.NSString):string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458533-displayedproperty
    displayedProperty(): string | cocoascript.NSString;
    setDisplayedProperty(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458322-properties
    properties():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458395-removeproperty
    removeProperty(property: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458674-setcolumntitle
    setColumnTitle_forProperty(title: string | cocoascript.NSString, property: string | cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458445-valueselectionbehavior
    valueSelectionBehavior(): ABPeoplePickerSelectionBehavior;
    setValueSelectionBehavior(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458607-allowsgroupselection
    allowsGroupSelection(): BOOL;
    setAllowsGroupSelection(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458724-allowsmultipleselection
    allowsMultipleSelection(): BOOL;
    setAllowsMultipleSelection(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458712-deselectall
    deselectAll(sender: ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458627-deselectgroup
    deselectGroup(group: ABGroup):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458304-deselectidentifier
    deselectIdentifier_forPerson(identifier: string | cocoascript.NSString, person: ABPerson):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458358-deselectrecord
    deselectRecord(record: ABRecord):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458699-selectedgroups
    selectedGroups(): NSArray;
    setSelectedGroups(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458726-selectedidentifiersforperson
    selectedIdentifiersForPerson(person: ABPerson):NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458543-selectedrecords
    selectedRecords(): NSArray;
    setSelectedRecords(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458478-selectedvalues
    selectedValues():NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458291-selectgroup
    selectGroup_byExtendingSelection(group: ABGroup, extend: BOOL):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458317-selectidentifier
    selectIdentifier_forPerson_byExtendingSelection(identifier: string | cocoascript.NSString, person: ABPerson, extend: BOOL):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458370-selectrecord
    selectRecord_byExtendingSelection(record: ABRecord, extend: BOOL):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458746-accessoryview
    accessoryView(): NSView;
    setAccessoryView(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458688-clearsearchfield
    clearSearchField(sender: ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458324-editinaddressbook
    editInAddressBook(sender: ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458286-groupdoubleaction
    groupDoubleAction(): SEL;
    setGroupDoubleAction(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458723-namedoubleaction
    nameDoubleAction(): SEL;
    setNameDoubleAction(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458762-selectinaddressbook
    selectInAddressBook(sender: ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458731-target
    target(): id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458748-autosavename
    autosaveName(): string | cocoascript.NSString;
    setAutosaveName(): void;
    //
    alloc():ABPeoplePickerView;
    //
    init():ABPeoplePickerView;
  }
}

declare const ABPeoplePickerView: cocoascript.ABPeoplePickerView;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickergroupselectiondidchangenotification
declare const ABPeoplePickerGroupSelectionDidChangeNotification: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickernameselectiondidchangenotification
declare const ABPeoplePickerNameSelectionDidChangeNotification: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickervalueselectiondidchangenotification
declare const ABPeoplePickerValueSelectionDidChangeNotification: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickerdisplayedpropertydidchangenotification
declare const ABPeoplePickerDisplayedPropertyDidChangeNotification: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that provides a view for displaying and editing contacts.
   * doc://com.apple.documentation/documentation/addressbook/abpersonview
   */
  interface ABPersonView extends NSView {
    // doc://com.apple.documentation/documentation/addressbook/abpersonview/1411312-editing
    editing(): BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonview/1411310-person
    person(): ABPerson;
    setPerson(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonview/1411308-shouldshowlinkedpeople
    shouldShowLinkedPeople(): BOOL;
    setShouldShowLinkedPeople(): void;
    //
    alloc():ABPersonView;
    //
    init():ABPersonView;
  }
}

declare const ABPersonView: cocoascript.ABPersonView;
declare namespace cocoascript {
  /**
   * An object you use to specify a search query for records in the Address Book database.
   * doc://com.apple.documentation/documentation/addressbook/absearchelement
   */
  interface ABSearchElement extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/absearchelement/1458423-searchelementforconjunction
    searchElementForConjunction_children(conjuction: ABSearchConjunction, children: NSArray):ABSearchElement;
    // doc://com.apple.documentation/documentation/addressbook/absearchelement/1458642-matchesrecord
    matchesRecord(record: ABRecord):BOOL;
    //
    alloc():ABSearchElement;
    //
    init():ABSearchElement;
  }
}

declare const ABSearchElement: cocoascript.ABSearchElement;
declare namespace cocoascript {
  interface ABSearchElementRef {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abrecordref
  type ABRecordRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abaddressbookref
  type ABAddressBookRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalueref
  type ABMutableMultiValueRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpropertytype
  type ABPropertyType = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerselectionbehavior
  type ABPeoplePickerSelectionBehavior = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/absearchconjunction
  type ABSearchConjunction = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/absearchcomparison
  type ABSearchComparison = cocoascript.CFIndex;
}
declare namespace cocoascript {
  interface ABPersonRef {
  }
}
declare namespace cocoascript {
  interface ABGroupRef {
  }
}
declare namespace cocoascript {
  interface ABPickerRef {
  }
}
declare namespace cocoascript {
  interface ABActionCallbacks {
  }
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpersonimageformat
  type ABPersonImageFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/absourcetype
  type ABSourceType = number;
}
// doc://com.apple.documentation/documentation/addressbook/abaddressbookerrordomain
declare const ABAddressBookErrorDomain: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresscitykey
declare const kABPersonAddressCityKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresscountrycodekey
declare const kABPersonAddressCountryCodeKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresscountrykey
declare const kABPersonAddressCountryKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddressproperty
declare const kABPersonAddressProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddressstatekey
declare const kABPersonAddressStateKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddressstreetkey
declare const kABPersonAddressStreetKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresszipkey
declare const kABPersonAddressZIPKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdaycalendaridentifierkey
declare const kABPersonAlternateBirthdayCalendarIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdaydaykey
declare const kABPersonAlternateBirthdayDayKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayerakey
declare const kABPersonAlternateBirthdayEraKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayisleapmonthkey
declare const kABPersonAlternateBirthdayIsLeapMonthKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdaymonthkey
declare const kABPersonAlternateBirthdayMonthKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayproperty
declare const kABPersonAlternateBirthdayProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayyearkey
declare const kABPersonAlternateBirthdayYearKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonanniversarylabel
declare const kABPersonAnniversaryLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonassistantlabel
declare const kABPersonAssistantLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonbirthdayproperty
declare const kABPersonBirthdayProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonbrotherlabel
declare const kABPersonBrotherLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonchildlabel
declare const kABPersonChildLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoncreationdateproperty
declare const kABPersonCreationDateProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersondateproperty
declare const kABPersonDateProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersondepartmentproperty
declare const kABPersonDepartmentProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonemailproperty
declare const kABPersonEmailProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfatherlabel
declare const kABPersonFatherLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfirstnamephoneticproperty
declare const kABPersonFirstNamePhoneticProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfirstnameproperty
declare const kABPersonFirstNameProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfriendlabel
declare const kABPersonFriendLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonhomepagelabel
declare const kABPersonHomePageLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageproperty
declare const kABPersonInstantMessageProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceaim
declare const kABPersonInstantMessageServiceAIM: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicefacebook
declare const kABPersonInstantMessageServiceFacebook: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicegadugadu
declare const kABPersonInstantMessageServiceGaduGadu: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicegoogletalk
declare const kABPersonInstantMessageServiceGoogleTalk: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceicq
declare const kABPersonInstantMessageServiceICQ: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicejabber
declare const kABPersonInstantMessageServiceJabber: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicekey
declare const kABPersonInstantMessageServiceKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicemsn
declare const kABPersonInstantMessageServiceMSN: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceqq
declare const kABPersonInstantMessageServiceQQ: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceskype
declare const kABPersonInstantMessageServiceSkype: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceyahoo
declare const kABPersonInstantMessageServiceYahoo: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageusernamekey
declare const kABPersonInstantMessageUsernameKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonjobtitleproperty
declare const kABPersonJobTitleProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonkindorganization
declare const kABPersonKindOrganization: CFNumberRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonkindperson
declare const kABPersonKindPerson: CFNumberRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonkindproperty
declare const kABPersonKindProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonlastnamephoneticproperty
declare const kABPersonLastNamePhoneticProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonlastnameproperty
declare const kABPersonLastNameProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmanagerlabel
declare const kABPersonManagerLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmiddlenamephoneticproperty
declare const kABPersonMiddleNamePhoneticProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmiddlenameproperty
declare const kABPersonMiddleNameProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmodificationdateproperty
declare const kABPersonModificationDateProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmotherlabel
declare const kABPersonMotherLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonnicknameproperty
declare const kABPersonNicknameProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonnoteproperty
declare const kABPersonNoteProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonorganizationproperty
declare const kABPersonOrganizationProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonparentlabel
declare const kABPersonParentLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonpartnerlabel
declare const kABPersonPartnerLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonehomefaxlabel
declare const kABPersonPhoneHomeFAXLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneiphonelabel
declare const kABPersonPhoneIPhoneLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonemainlabel
declare const kABPersonPhoneMainLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonemobilelabel
declare const kABPersonPhoneMobileLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneotherfaxlabel
declare const kABPersonPhoneOtherFAXLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonepagerlabel
declare const kABPersonPhonePagerLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneproperty
declare const kABPersonPhoneProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneworkfaxlabel
declare const kABPersonPhoneWorkFAXLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonprefixproperty
declare const kABPersonPrefixProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonrelatednamesproperty
declare const kABPersonRelatedNamesProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsisterlabel
declare const kABPersonSisterLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileproperty
declare const kABPersonSocialProfileProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicefacebook
declare const kABPersonSocialProfileServiceFacebook: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileserviceflickr
declare const kABPersonSocialProfileServiceFlickr: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicegamecenter
declare const kABPersonSocialProfileServiceGameCenter: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicekey
declare const kABPersonSocialProfileServiceKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicelinkedin
declare const kABPersonSocialProfileServiceLinkedIn: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicemyspace
declare const kABPersonSocialProfileServiceMyspace: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicesinaweibo
declare const kABPersonSocialProfileServiceSinaWeibo: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicetwitter
declare const kABPersonSocialProfileServiceTwitter: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileurlkey
declare const kABPersonSocialProfileURLKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileuseridentifierkey
declare const kABPersonSocialProfileUserIdentifierKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileusernamekey
declare const kABPersonSocialProfileUsernameKey: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonspouselabel
declare const kABPersonSpouseLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsuffixproperty
declare const kABPersonSuffixProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonurlproperty
declare const kABPersonURLProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabsourcenameproperty
declare const kABSourceNameProperty: ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabsourcetypeproperty
declare const kABSourceTypeProperty: ABPropertyID;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpickerattributes
  type ABPickerAttributes = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abauthorizationstatus
  type ABAuthorizationStatus = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abactiongetpropertycallback
  type ABActionGetPropertyCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abimageclientcallback
  type ABImageClientCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abactioncopytitlecallback
  type ABActionCopyTitleCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abactionenabledcallback
  type ABActionEnabledCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abactionselectedcallback
  type ABActionSelectedCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abaddressbookrequestaccesscompletionhandler
  type ABAddressBookRequestAccessCompletionHandler = cocoascript.CFErrorRef;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abexternalchangecallback
  type ABExternalChangeCallback = void;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abmultivalueidentifier
  type ABMultiValueIdentifier = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpersoncompositenameformat
  type ABPersonCompositeNameFormat = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpersonsortordering
  type ABPersonSortOrdering = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abpropertyid
  type ABPropertyID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abrecordid
  type ABRecordID = number;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/addressbook/abrecordtype
  type ABRecordType = number;
}
// doc://com.apple.documentation/documentation/addressbook/kabgroupnameproperty
declare const kABGroupNameProperty: number;
// doc://com.apple.documentation/documentation/addressbook/kabworklabel
declare const kABWorkLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabhomelabel
declare const kABHomeLabel: CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabotherlabel
declare const kABOtherLabel: CFStringRef;
