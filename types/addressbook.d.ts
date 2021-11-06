declare namespace cocoascript {
  /**
   * Methods you use to respond to user selections in a person picker.
   * https://developer.apple.com/documentation/addressbook/abpersonpickerdelegate
   */
  interface ABPersonPickerDelegate extends NSObject {
    // https://developer.apple.com/documentation/addressbook/abpersonpickerdelegate/1395368-personpicker
    personPicker_didChoosePerson_property_identifier(picker: ABPersonPicker, person: ABPerson, property: string | cocoascript.NSString, identifier: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/addressbook/abpersonpickerdelegate/1395366-personpickerdidclose
    personPickerDidClose(picker: ABPersonPicker):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for responding to a request to load images associated with a contact.
   * https://developer.apple.com/documentation/addressbook/abimageclient
   */
  interface ABImageClient extends NSObject {
    // https://developer.apple.com/documentation/addressbook/abimageclient/1392505-consumeimagedata
    consumeImageData_forTag(data: NSData, tag: NSInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * An immutable representation of a property that might have multiple values.
   * https://developer.apple.com/documentation/addressbook/abmultivalue
   */
  interface ABMultiValue extends NSObject {
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458525-primaryidentifier
    primaryIdentifier():NSString;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458743-identifieratindex
    identifierAtIndex(index: NSUInteger):NSString;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458700-indexforidentifier
    indexForIdentifier(identifier: string | cocoascript.NSString):NSUInteger;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458668-labelatindex
    labelAtIndex(index: NSUInteger):NSString;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458515-valueatindex
    valueAtIndex(index: NSUInteger):ABMultiValue;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458427-valueforidentifier
    valueForIdentifier(identifier: string | cocoascript.NSString):ABMultiValue;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458693-labelforidentifier
    labelForIdentifier(identifier: string | cocoascript.NSString):ABMultiValue;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458752-count
    count():NSUInteger;
    // https://developer.apple.com/documentation/addressbook/abmultivalue/1458267-propertytype
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
   * https://developer.apple.com/documentation/addressbook/abperson
   */
  interface ABPerson extends ABRecord {
    // https://developer.apple.com/documentation/addressbook/abperson/1458438-addpropertiesandtypes
    addPropertiesAndTypes(properties: NSDictionary):NSInteger;
    // https://developer.apple.com/documentation/addressbook/abperson/1458554-removeproperties
    removeProperties(properties: NSArray):NSInteger;
    // https://developer.apple.com/documentation/addressbook/abperson/1458494-properties
    properties():NSArray;
    // https://developer.apple.com/documentation/addressbook/abperson/1458682-typeofproperty
    typeOfProperty(property: string | cocoascript.NSString):ABPropertyType;
    // https://developer.apple.com/documentation/addressbook/abperson/1458372-linkedpeople
    linkedPeople():NSArray;
    // https://developer.apple.com/documentation/addressbook/abperson/1458380-parentgroups
    parentGroups():NSArray;
    // https://developer.apple.com/documentation/addressbook/abperson/1392511-cancelloadingimagedatafortag
    cancelLoadingImageDataForTag(tag: NSInteger):void;
    // https://developer.apple.com/documentation/addressbook/abperson/1392507-beginloadingimagedataforclient
    beginLoadingImageDataForClient(client: ABImageClient):NSInteger;
    // https://developer.apple.com/documentation/addressbook/abperson/1392509-imagedata
    imageData():NSData;
    // https://developer.apple.com/documentation/addressbook/abperson/1392513-setimagedata
    setImageData(data: NSData):boolean;
    // https://developer.apple.com/documentation/addressbook/abperson/1458332-searchelementforproperty
    searchElementForProperty_label_key_value_comparison(property: string | cocoascript.NSString, label: string | cocoascript.NSString, key: string | cocoascript.NSString, value: ABPerson, comparison: ABSearchComparison):ABSearchElement;
    // https://developer.apple.com/documentation/addressbook/abperson/1458755-initwithvcardrepresentation
    initWithVCardRepresentation(vCardData: NSData):ABPerson;
    // https://developer.apple.com/documentation/addressbook/abperson/1458307-vcardrepresentation
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
   * https://developer.apple.com/documentation/addressbook/abpersonpicker
   */
  interface ABPersonPicker extends NSObject {
    // https://developer.apple.com/documentation/addressbook/abpersonpicker/1589907-delegate
    delegate(): ABPersonPickerDelegate;
    setDelegate(value: ABPersonPickerDelegate): void;
    // https://developer.apple.com/documentation/addressbook/abpersonpicker/1589906-showrelativetorect
    showRelativeToRect_ofView_preferredEdge(positioningRect: NSRect, positioningView: NSView, preferredEdge: NSRectEdge):void;
    // https://developer.apple.com/documentation/addressbook/abpersonpicker/1589905-close
    close():void;
    // https://developer.apple.com/documentation/addressbook/abpersonpicker/1589904-properties
    properties(): NSArray;
    setProperties(value: NSArray): void;
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
   * https://developer.apple.com/documentation/addressbook/abmutablemultivalue
   */
  interface ABMutableMultiValue extends ABMultiValue {
    // https://developer.apple.com/documentation/addressbook/abmutablemultivalue/1458374-addvalue
    addValue_withLabel(value: ABMutableMultiValue, label: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/addressbook/abmutablemultivalue/1458362-insertvalue
    insertValue_withLabel_atIndex(value: ABMutableMultiValue, label: string | cocoascript.NSString, index: NSUInteger):NSString;
    // https://developer.apple.com/documentation/addressbook/abmutablemultivalue/1458689-replacelabelatindex
    replaceLabelAtIndex_withLabel(index: NSUInteger, label: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/addressbook/abmutablemultivalue/1458609-replacevalueatindex
    replaceValueAtIndex_withValue(index: NSUInteger, value: ABMutableMultiValue):boolean;
    // https://developer.apple.com/documentation/addressbook/abmutablemultivalue/1458405-removevalueandlabelatindex
    removeValueAndLabelAtIndex(index: NSUInteger):boolean;
    // https://developer.apple.com/documentation/addressbook/abmutablemultivalue/1458716-setprimaryidentifier
    setPrimaryIdentifier(identifier: string | cocoascript.NSString):boolean;
    //
    alloc():ABMutableMultiValue;
    //
    init():ABMutableMultiValue;
  }
}

declare const ABMutableMultiValue: cocoascript.ABMutableMultiValue;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abmultivalueref
  type ABMultiValueRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  /**
   * The main object you use to access the Address Book database.
   * https://developer.apple.com/documentation/addressbook/abaddressbook
   */
  interface ABAddressBook extends NSObject {
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458758-sharedaddressbook
    sharedAddressBook():ABAddressBook;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1529221-addressbook
    addressBook():ABAddressBook;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458440-groups
    groups():NSArray;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458683-people
    people():NSArray;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458663-me
    me():ABPerson;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458403-setme
    setMe(moi: ABPerson):void;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458571-recordforuniqueid
    recordForUniqueId(uniqueId: string | cocoascript.NSString):ABRecord;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458280-recordclassfromuniqueid
    recordClassFromUniqueId(uniqueId: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458665-formattedaddressfromdictionary
    formattedAddressFromDictionary(address: NSDictionary):NSAttributedString;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458703-defaultcountrycode
    defaultCountryCode():NSString;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458447-defaultnameordering
    defaultNameOrdering():NSInteger;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458709-addrecord
    addRecord_error(record: ABRecord, error: NSError):boolean;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458749-addrecord
    addRecord(record: ABRecord):boolean;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458388-removerecord
    removeRecord_error(record: ABRecord, error: NSError):boolean;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458605-removerecord
    removeRecord(record: ABRecord):boolean;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458410-recordsmatchingsearchelement
    recordsMatchingSearchElement(search: ABSearchElement):NSArray;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458270-hasunsavedchanges
    hasUnsavedChanges():boolean;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458432-save
    save():boolean;
    // https://developer.apple.com/documentation/addressbook/abaddressbook/1458623-saveandreturnerror
    saveAndReturnError(error: NSError):boolean;
    //
    alloc():ABAddressBook;
    //
    init():ABAddressBook;
  }
}

declare const ABAddressBook: cocoascript.ABAddressBook;
// https://developer.apple.com/documentation/addressbook/kabdatabasechangednotification
declare const kABDatabaseChangedNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/addressbook/kabdatabasechangedexternallynotification
declare const kABDatabaseChangedExternallyNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that represents a group of records in the Address Book database.
   * https://developer.apple.com/documentation/addressbook/abgroup
   */
  interface ABGroup extends ABRecord {
    // https://developer.apple.com/documentation/addressbook/abgroup/1427944-addpropertiesandtypes
    addPropertiesAndTypes(properties: NSDictionary):NSInteger;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427954-removeproperties
    removeProperties(properties: NSArray):NSInteger;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427958-properties
    properties():NSArray;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427950-typeofproperty
    typeOfProperty(property: string | cocoascript.NSString):ABPropertyType;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427932-addmember
    addMember(person: ABPerson):boolean;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427940-removemember
    removeMember(person: ABPerson):boolean;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427934-members
    members():NSArray;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427938-addsubgroup
    addSubgroup(group: ABGroup):boolean;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427960-removesubgroup
    removeSubgroup(group: ABGroup):boolean;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427956-parentgroups
    parentGroups():NSArray;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427948-subgroups
    subgroups():NSArray;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427942-distributionidentifierforpropert
    distributionIdentifierForProperty_person(property: string | cocoascript.NSString, person: ABPerson):NSString;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427936-setdistributionidentifier
    setDistributionIdentifier_forProperty_person(identifier: string | cocoascript.NSString, property: string | cocoascript.NSString, person: ABPerson):boolean;
    // https://developer.apple.com/documentation/addressbook/abgroup/1427946-searchelementforproperty
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
   * https://developer.apple.com/documentation/addressbook/abrecord
   */
  interface ABRecord extends NSObject {
    // https://developer.apple.com/documentation/addressbook/abrecord/1400511-initwithaddressbook
    initWithAddressBook(addressBook: ABAddressBook):ABRecord;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400517-init
    init():ABRecord;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400513-removevalueforproperty
    removeValueForProperty(property: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400509-setvalue
    setValue_forProperty(value: ABRecord, property: string | cocoascript.NSString):boolean;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400521-setvalue
    setValue_forProperty_error(value: ABRecord, property: string | cocoascript.NSString, error: NSError):boolean;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400523-valueforproperty
    valueForProperty(property: string | cocoascript.NSString):ABRecord;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400519-isreadonly
    isReadOnly():boolean;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400505-displayname
    displayName(): string | cocoascript.NSString;
    setDisplayName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/addressbook/abrecord/1400515-uniqueid
    uniqueId(): string | cocoascript.NSString;
    setUniqueId(value: string | cocoascript.NSString): void;
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
   * https://developer.apple.com/documentation/addressbook/abpeoplepickerview
   */
  interface ABPeoplePickerView extends NSView {
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458513-addproperty
    addProperty(property: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458420-columntitleforproperty
    columnTitleForProperty(property: string | cocoascript.NSString):NSString;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458533-displayedproperty
    displayedProperty(): string | cocoascript.NSString;
    setDisplayedProperty(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458322-properties
    properties():NSArray;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458395-removeproperty
    removeProperty(property: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458674-setcolumntitle
    setColumnTitle_forProperty(title: string | cocoascript.NSString, property: string | cocoascript.NSString):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458445-valueselectionbehavior
    valueSelectionBehavior(): ABPeoplePickerSelectionBehavior;
    setValueSelectionBehavior(value: ABPeoplePickerSelectionBehavior): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458607-allowsgroupselection
    allowsGroupSelection(): boolean;
    setAllowsGroupSelection(value: boolean): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458724-allowsmultipleselection
    allowsMultipleSelection(): boolean;
    setAllowsMultipleSelection(value: boolean): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458712-deselectall
    deselectAll(sender: ABPeoplePickerView):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458627-deselectgroup
    deselectGroup(group: ABGroup):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458304-deselectidentifier
    deselectIdentifier_forPerson(identifier: string | cocoascript.NSString, person: ABPerson):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458358-deselectrecord
    deselectRecord(record: ABRecord):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458699-selectedgroups
    selectedGroups(): NSArray;
    setSelectedGroups(value: NSArray): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458726-selectedidentifiersforperson
    selectedIdentifiersForPerson(person: ABPerson):NSArray;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458543-selectedrecords
    selectedRecords(): NSArray;
    setSelectedRecords(value: NSArray): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458478-selectedvalues
    selectedValues():NSArray;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458291-selectgroup
    selectGroup_byExtendingSelection(group: ABGroup, extend: boolean):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458317-selectidentifier
    selectIdentifier_forPerson_byExtendingSelection(identifier: string | cocoascript.NSString, person: ABPerson, extend: boolean):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458370-selectrecord
    selectRecord_byExtendingSelection(record: ABRecord, extend: boolean):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458746-accessoryview
    accessoryView(): NSView;
    setAccessoryView(value: NSView): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458688-clearsearchfield
    clearSearchField(sender: ABPeoplePickerView):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458324-editinaddressbook
    editInAddressBook(sender: ABPeoplePickerView):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458286-groupdoubleaction
    groupDoubleAction(): SEL;
    setGroupDoubleAction(value: SEL): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458723-namedoubleaction
    nameDoubleAction(): SEL;
    setNameDoubleAction(value: SEL): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458762-selectinaddressbook
    selectInAddressBook(sender: ABPeoplePickerView):void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458731-target
    target(): id;
    setTarget(value: id): void;
    // https://developer.apple.com/documentation/addressbook/abpeoplepickerview/1458748-autosavename
    autosaveName(): string | cocoascript.NSString;
    setAutosaveName(value: string | cocoascript.NSString): void;
    //
    alloc():ABPeoplePickerView;
    //
    init():ABPeoplePickerView;
  }
}

declare const ABPeoplePickerView: cocoascript.ABPeoplePickerView;
// https://developer.apple.com/documentation/addressbook/abpeoplepickergroupselectiondidchangenotification
declare const ABPeoplePickerGroupSelectionDidChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/addressbook/abpeoplepickernameselectiondidchangenotification
declare const ABPeoplePickerNameSelectionDidChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/addressbook/abpeoplepickervalueselectiondidchangenotification
declare const ABPeoplePickerValueSelectionDidChangeNotification: cocoascript.NSString;
// https://developer.apple.com/documentation/addressbook/abpeoplepickerdisplayedpropertydidchangenotification
declare const ABPeoplePickerDisplayedPropertyDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that provides a view for displaying and editing contacts.
   * https://developer.apple.com/documentation/addressbook/abpersonview
   */
  interface ABPersonView extends NSView {
    // https://developer.apple.com/documentation/addressbook/abpersonview/1411312-editing
    editing(): boolean;
    setEditing(value: boolean): void;
    // https://developer.apple.com/documentation/addressbook/abpersonview/1411310-person
    person(): ABPerson;
    setPerson(value: ABPerson): void;
    // https://developer.apple.com/documentation/addressbook/abpersonview/1411308-shouldshowlinkedpeople
    shouldShowLinkedPeople(): boolean;
    setShouldShowLinkedPeople(value: boolean): void;
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
   * https://developer.apple.com/documentation/addressbook/absearchelement
   */
  interface ABSearchElement extends NSObject {
    // https://developer.apple.com/documentation/addressbook/absearchelement/1458423-searchelementforconjunction
    searchElementForConjunction_children(conjuction: ABSearchConjunction, children: NSArray):ABSearchElement;
    // https://developer.apple.com/documentation/addressbook/absearchelement/1458642-matchesrecord
    matchesRecord(record: ABRecord):boolean;
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
  // https://developer.apple.com/documentation/addressbook/abpropertyid
  type ABPropertyID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abmultivalueidentifier
  type ABMultiValueIdentifier = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abmutablemultivalueref
  type ABMutableMultiValueRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abpropertytype
  type ABPropertyType = number;
}
// https://developer.apple.com/documentation/addressbook/kabpersonaddresscountrycodekey
declare const kABPersonAddressCountryCodeKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonaddresscountrykey
declare const kABPersonAddressCountryKey: cocoascript.CFStringRef;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abpeoplepickerselectionbehavior
  type ABPeoplePickerSelectionBehavior = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/absearchconjunction
  type ABSearchConjunction = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/absearchcomparison
  type ABSearchComparison = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abaddressbookref
  type ABAddressBookRef = cocoascript.CFTypeRef;
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
  // https://developer.apple.com/documentation/addressbook/abpersonimageformat
  type ABPersonImageFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/absourcetype
  type ABSourceType = number;
}
// https://developer.apple.com/documentation/addressbook/abaddressbookerrordomain
declare const ABAddressBookErrorDomain: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonaddresscitykey
declare const kABPersonAddressCityKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonaddressproperty
declare const kABPersonAddressProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonaddressstatekey
declare const kABPersonAddressStateKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonaddressstreetkey
declare const kABPersonAddressStreetKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonaddresszipkey
declare const kABPersonAddressZIPKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdaycalendaridentifierkey
declare const kABPersonAlternateBirthdayCalendarIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdaydaykey
declare const kABPersonAlternateBirthdayDayKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdayerakey
declare const kABPersonAlternateBirthdayEraKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdayisleapmonthkey
declare const kABPersonAlternateBirthdayIsLeapMonthKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdaymonthkey
declare const kABPersonAlternateBirthdayMonthKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdayproperty
declare const kABPersonAlternateBirthdayProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonalternatebirthdayyearkey
declare const kABPersonAlternateBirthdayYearKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonanniversarylabel
declare const kABPersonAnniversaryLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonassistantlabel
declare const kABPersonAssistantLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonbirthdayproperty
declare const kABPersonBirthdayProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonbrotherlabel
declare const kABPersonBrotherLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonchildlabel
declare const kABPersonChildLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoncreationdateproperty
declare const kABPersonCreationDateProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersondateproperty
declare const kABPersonDateProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersondepartmentproperty
declare const kABPersonDepartmentProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonemailproperty
declare const kABPersonEmailProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonfatherlabel
declare const kABPersonFatherLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonfirstnamephoneticproperty
declare const kABPersonFirstNamePhoneticProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonfirstnameproperty
declare const kABPersonFirstNameProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonfriendlabel
declare const kABPersonFriendLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonhomepagelabel
declare const kABPersonHomePageLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageproperty
declare const kABPersonInstantMessageProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageserviceaim
declare const kABPersonInstantMessageServiceAIM: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageservicefacebook
declare const kABPersonInstantMessageServiceFacebook: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageservicegadugadu
declare const kABPersonInstantMessageServiceGaduGadu: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageservicegoogletalk
declare const kABPersonInstantMessageServiceGoogleTalk: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageserviceicq
declare const kABPersonInstantMessageServiceICQ: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageservicejabber
declare const kABPersonInstantMessageServiceJabber: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageservicekey
declare const kABPersonInstantMessageServiceKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageservicemsn
declare const kABPersonInstantMessageServiceMSN: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageserviceqq
declare const kABPersonInstantMessageServiceQQ: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageserviceskype
declare const kABPersonInstantMessageServiceSkype: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageserviceyahoo
declare const kABPersonInstantMessageServiceYahoo: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersoninstantmessageusernamekey
declare const kABPersonInstantMessageUsernameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonjobtitleproperty
declare const kABPersonJobTitleProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonkindorganization
declare const kABPersonKindOrganization: cocoascript.CFNumberRef;
// https://developer.apple.com/documentation/addressbook/kabpersonkindperson
declare const kABPersonKindPerson: cocoascript.CFNumberRef;
// https://developer.apple.com/documentation/addressbook/kabpersonkindproperty
declare const kABPersonKindProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonlastnamephoneticproperty
declare const kABPersonLastNamePhoneticProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonlastnameproperty
declare const kABPersonLastNameProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonmanagerlabel
declare const kABPersonManagerLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonmiddlenamephoneticproperty
declare const kABPersonMiddleNamePhoneticProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonmiddlenameproperty
declare const kABPersonMiddleNameProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonmodificationdateproperty
declare const kABPersonModificationDateProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonmotherlabel
declare const kABPersonMotherLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonnicknameproperty
declare const kABPersonNicknameProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonnoteproperty
declare const kABPersonNoteProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonorganizationproperty
declare const kABPersonOrganizationProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonparentlabel
declare const kABPersonParentLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonpartnerlabel
declare const kABPersonPartnerLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphonehomefaxlabel
declare const kABPersonPhoneHomeFAXLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphoneiphonelabel
declare const kABPersonPhoneIPhoneLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphonemainlabel
declare const kABPersonPhoneMainLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphonemobilelabel
declare const kABPersonPhoneMobileLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphoneotherfaxlabel
declare const kABPersonPhoneOtherFAXLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphonepagerlabel
declare const kABPersonPhonePagerLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonphoneproperty
declare const kABPersonPhoneProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonphoneworkfaxlabel
declare const kABPersonPhoneWorkFAXLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonprefixproperty
declare const kABPersonPrefixProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonrelatednamesproperty
declare const kABPersonRelatedNamesProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonsisterlabel
declare const kABPersonSisterLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileproperty
declare const kABPersonSocialProfileProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicefacebook
declare const kABPersonSocialProfileServiceFacebook: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileserviceflickr
declare const kABPersonSocialProfileServiceFlickr: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicegamecenter
declare const kABPersonSocialProfileServiceGameCenter: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicekey
declare const kABPersonSocialProfileServiceKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicelinkedin
declare const kABPersonSocialProfileServiceLinkedIn: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicemyspace
declare const kABPersonSocialProfileServiceMyspace: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicesinaweibo
declare const kABPersonSocialProfileServiceSinaWeibo: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileservicetwitter
declare const kABPersonSocialProfileServiceTwitter: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileurlkey
declare const kABPersonSocialProfileURLKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileuseridentifierkey
declare const kABPersonSocialProfileUserIdentifierKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsocialprofileusernamekey
declare const kABPersonSocialProfileUsernameKey: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonspouselabel
declare const kABPersonSpouseLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabpersonsuffixproperty
declare const kABPersonSuffixProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabpersonurlproperty
declare const kABPersonURLProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabsourcenameproperty
declare const kABSourceNameProperty: cocoascript.ABPropertyID;
// https://developer.apple.com/documentation/addressbook/kabsourcetypeproperty
declare const kABSourceTypeProperty: cocoascript.ABPropertyID;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abpickerattributes
  type ABPickerAttributes = cocoascript.OptionBits;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abauthorizationstatus
  type ABAuthorizationStatus = cocoascript.CFIndex;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abactiongetpropertycallback
  type ABActionGetPropertyCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abimageclientcallback
  type ABImageClientCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abactioncopytitlecallback
  type ABActionCopyTitleCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abactionenabledcallback
  type ABActionEnabledCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abactionselectedcallback
  type ABActionSelectedCallback = cocoascript.CFStringRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abrecordref
  type ABRecordRef = cocoascript.CFTypeRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abaddressbookrequestaccesscompletionhandler
  type ABAddressBookRequestAccessCompletionHandler = cocoascript.CFErrorRef;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abexternalchangecallback
  type ABExternalChangeCallback = void;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abpersoncompositenameformat
  type ABPersonCompositeNameFormat = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abpersonsortordering
  type ABPersonSortOrdering = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abrecordid
  type ABRecordID = number;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/addressbook/abrecordtype
  type ABRecordType = number;
}
// https://developer.apple.com/documentation/addressbook/kabgroupnameproperty
declare const kABGroupNameProperty: number;
// https://developer.apple.com/documentation/addressbook/kabworklabel
declare const kABWorkLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabhomelabel
declare const kABHomeLabel: cocoascript.CFStringRef;
// https://developer.apple.com/documentation/addressbook/kabotherlabel
declare const kABOtherLabel: cocoascript.CFStringRef;
