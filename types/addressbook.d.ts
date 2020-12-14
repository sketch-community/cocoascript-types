declare namespace cocoascript {
  /**
   * Methods you use to respond to user selections in a person picker.
   * doc://com.apple.documentation/documentation/addressbook/abpersonpickerdelegate
   */
  interface ABPersonPickerDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abpersonpickerdelegate/1395368-personpicker
    personPicker_didChoosePerson_property_identifier(picker: cocoascript.ABPersonPicker, person: cocoascript.ABPerson, property: cocoascript.NSString, identifier: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpickerdelegate/1395366-personpickerdidclose
    personPickerDidClose(picker: cocoascript.ABPersonPicker):void;
  }
}
declare namespace cocoascript {
  /**
   * Methods for responding to a request to load images associated with a contact.
   * doc://com.apple.documentation/documentation/addressbook/abimageclient
   */
  interface ABImageClient extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abimageclient/1392505-consumeimagedata
    consumeImageData_forTag(data: cocoascript.NSData, tag: cocoascript.NSInteger):void;
  }
}
declare namespace cocoascript {
  /**
   * An immutable representation of a property that might have multiple values.
   * doc://com.apple.documentation/documentation/addressbook/abmultivalue
   */
  interface ABMultiValue extends NSObject {
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458525-primaryidentifier
    primaryIdentifier():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458743-identifieratindex
    identifierAtIndex(index: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458700-indexforidentifier
    indexForIdentifier(identifier: cocoascript.NSString):cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458668-labelatindex
    labelAtIndex(index: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458515-valueatindex
    valueAtIndex(index: cocoascript.NSUInteger):cocoascript.ABMultiValue;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458427-valueforidentifier
    valueForIdentifier(identifier: cocoascript.NSString):cocoascript.ABMultiValue;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458693-labelforidentifier
    labelForIdentifier(identifier: cocoascript.NSString):cocoascript.ABMultiValue;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458752-count
    count():cocoascript.NSUInteger;
    // doc://com.apple.documentation/documentation/addressbook/abmultivalue/1458267-propertytype
    propertyType():cocoascript.ABPropertyType;
    //
    alloc():cocoascript.ABMultiValue;
    //
    init():cocoascript.ABMultiValue;
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
    addPropertiesAndTypes(properties: cocoascript.NSDictionary):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458554-removeproperties
    removeProperties(properties: cocoascript.NSArray):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458494-properties
    properties():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458682-typeofproperty
    typeOfProperty(property: cocoascript.NSString):cocoascript.ABPropertyType;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458372-linkedpeople
    linkedPeople():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458380-parentgroups
    parentGroups():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392511-cancelloadingimagedatafortag
    cancelLoadingImageDataForTag(tag: cocoascript.NSInteger):void;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392507-beginloadingimagedataforclient
    beginLoadingImageDataForClient(client: cocoascript.ABImageClient):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392509-imagedata
    imageData():cocoascript.NSData;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1392513-setimagedata
    setImageData(data: cocoascript.NSData):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458332-searchelementforproperty
    searchElementForProperty_label_key_value_comparison(property: cocoascript.NSString, label: cocoascript.NSString, key: cocoascript.NSString, value: cocoascript.ABPerson, comparison: cocoascript.ABSearchComparison):cocoascript.ABSearchElement;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458755-initwithvcardrepresentation
    initWithVCardRepresentation(vCardData: cocoascript.NSData):cocoascript.ABPerson;
    // doc://com.apple.documentation/documentation/addressbook/abperson/1458307-vcardrepresentation
    vCardRepresentation():cocoascript.NSData;
    //
    alloc():cocoascript.ABPerson;
    //
    init():cocoascript.ABPerson;
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
    delegate(): cocoascript.ABPersonPickerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589906-showrelativetorect
    showRelativeToRect_ofView_preferredEdge(positioningRect: cocoascript.NSRect, positioningView: cocoascript.NSView, preferredEdge: cocoascript.NSRectEdge):void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589905-close
    close():void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonpicker/1589904-properties
    properties(): cocoascript.NSArray;
    setProperties(): void;
    //
    alloc():cocoascript.ABPersonPicker;
    //
    init():cocoascript.ABPersonPicker;
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
    addValue_withLabel(value: cocoascript.ABMutableMultiValue, label: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458362-insertvalue
    insertValue_withLabel_atIndex(value: cocoascript.ABMutableMultiValue, label: cocoascript.NSString, index: cocoascript.NSUInteger):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458689-replacelabelatindex
    replaceLabelAtIndex_withLabel(index: cocoascript.NSUInteger, label: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458609-replacevalueatindex
    replaceValueAtIndex_withValue(index: cocoascript.NSUInteger, value: cocoascript.ABMutableMultiValue):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458405-removevalueandlabelatindex
    removeValueAndLabelAtIndex(index: cocoascript.NSUInteger):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abmutablemultivalue/1458716-setprimaryidentifier
    setPrimaryIdentifier(identifier: cocoascript.NSString):cocoascript.BOOL;
    //
    alloc():cocoascript.ABMutableMultiValue;
    //
    init():cocoascript.ABMutableMultiValue;
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
    sharedAddressBook():cocoascript.ABAddressBook;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1529221-addressbook
    addressBook():cocoascript.ABAddressBook;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458440-groups
    groups():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458683-people
    people():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458663-me
    me():cocoascript.ABPerson;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458403-setme
    setMe(moi: cocoascript.ABPerson):void;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458571-recordforuniqueid
    recordForUniqueId(uniqueId: cocoascript.NSString):cocoascript.ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458280-recordclassfromuniqueid
    recordClassFromUniqueId(uniqueId: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458665-formattedaddressfromdictionary
    formattedAddressFromDictionary(address: cocoascript.NSDictionary):cocoascript.NSAttributedString;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458703-defaultcountrycode
    defaultCountryCode():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458447-defaultnameordering
    defaultNameOrdering():cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458709-addrecord
    addRecord_error(record: cocoascript.ABRecord, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458749-addrecord
    addRecord(record: cocoascript.ABRecord):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458388-removerecord
    removeRecord_error(record: cocoascript.ABRecord, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458605-removerecord
    removeRecord(record: cocoascript.ABRecord):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458410-recordsmatchingsearchelement
    recordsMatchingSearchElement(search: cocoascript.ABSearchElement):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458270-hasunsavedchanges
    hasUnsavedChanges():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458432-save
    save():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abaddressbook/1458623-saveandreturnerror
    saveAndReturnError(error: cocoascript.NSError):cocoascript.BOOL;
    //
    alloc():cocoascript.ABAddressBook;
    //
    init():cocoascript.ABAddressBook;
  }
}

declare const ABAddressBook: cocoascript.ABAddressBook;
// doc://com.apple.documentation/documentation/addressbook/kabdatabasechangednotification
declare const kABDatabaseChangedNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/kabdatabasechangedexternallynotification
declare const kABDatabaseChangedExternallyNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that represents a group of records in the Address Book database.
   * doc://com.apple.documentation/documentation/addressbook/abgroup
   */
  interface ABGroup extends ABRecord {
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427944-addpropertiesandtypes
    addPropertiesAndTypes(properties: cocoascript.NSDictionary):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427954-removeproperties
    removeProperties(properties: cocoascript.NSArray):cocoascript.NSInteger;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427958-properties
    properties():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427950-typeofproperty
    typeOfProperty(property: cocoascript.NSString):cocoascript.ABPropertyType;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427932-addmember
    addMember(person: cocoascript.ABPerson):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427940-removemember
    removeMember(person: cocoascript.ABPerson):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427934-members
    members():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427938-addsubgroup
    addSubgroup(group: cocoascript.ABGroup):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427960-removesubgroup
    removeSubgroup(group: cocoascript.ABGroup):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427956-parentgroups
    parentGroups():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427948-subgroups
    subgroups():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427942-distributionidentifierforpropert
    distributionIdentifierForProperty_person(property: cocoascript.NSString, person: cocoascript.ABPerson):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427936-setdistributionidentifier
    setDistributionIdentifier_forProperty_person(identifier: cocoascript.NSString, property: cocoascript.NSString, person: cocoascript.ABPerson):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abgroup/1427946-searchelementforproperty
    searchElementForProperty_label_key_value_comparison(property: cocoascript.NSString, label: cocoascript.NSString, key: cocoascript.NSString, value: cocoascript.ABGroup, comparison: cocoascript.ABSearchComparison):cocoascript.ABSearchElement;
    //
    alloc():cocoascript.ABGroup;
    //
    init():cocoascript.ABGroup;
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
    initWithAddressBook(addressBook: cocoascript.ABAddressBook):cocoascript.ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400517-init
    init():cocoascript.ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400513-removevalueforproperty
    removeValueForProperty(property: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400509-setvalue
    setValue_forProperty(value: cocoascript.ABRecord, property: cocoascript.NSString):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400521-setvalue
    setValue_forProperty_error(value: cocoascript.ABRecord, property: cocoascript.NSString, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400523-valueforproperty
    valueForProperty(property: cocoascript.NSString):cocoascript.ABRecord;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400519-isreadonly
    isReadOnly():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400505-displayname
    displayName(): cocoascript.NSString;
    setDisplayName(): void;
    // doc://com.apple.documentation/documentation/addressbook/abrecord/1400515-uniqueid
    uniqueId(): cocoascript.NSString;
    setUniqueId(): void;
    //
    alloc():cocoascript.ABRecord;
    //
    init():cocoascript.ABRecord;
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
    addProperty(property: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458420-columntitleforproperty
    columnTitleForProperty(property: cocoascript.NSString):cocoascript.NSString;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458533-displayedproperty
    displayedProperty(): cocoascript.NSString;
    setDisplayedProperty(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458322-properties
    properties():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458395-removeproperty
    removeProperty(property: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458674-setcolumntitle
    setColumnTitle_forProperty(title: cocoascript.NSString, property: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458445-valueselectionbehavior
    valueSelectionBehavior(): cocoascript.ABPeoplePickerSelectionBehavior;
    setValueSelectionBehavior(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458607-allowsgroupselection
    allowsGroupSelection(): cocoascript.BOOL;
    setAllowsGroupSelection(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458724-allowsmultipleselection
    allowsMultipleSelection(): cocoascript.BOOL;
    setAllowsMultipleSelection(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458712-deselectall
    deselectAll(sender: cocoascript.ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458627-deselectgroup
    deselectGroup(group: cocoascript.ABGroup):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458304-deselectidentifier
    deselectIdentifier_forPerson(identifier: cocoascript.NSString, person: cocoascript.ABPerson):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458358-deselectrecord
    deselectRecord(record: cocoascript.ABRecord):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458699-selectedgroups
    selectedGroups(): cocoascript.NSArray;
    setSelectedGroups(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458726-selectedidentifiersforperson
    selectedIdentifiersForPerson(person: cocoascript.ABPerson):cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458543-selectedrecords
    selectedRecords(): cocoascript.NSArray;
    setSelectedRecords(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458478-selectedvalues
    selectedValues():cocoascript.NSArray;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458291-selectgroup
    selectGroup_byExtendingSelection(group: cocoascript.ABGroup, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458317-selectidentifier
    selectIdentifier_forPerson_byExtendingSelection(identifier: cocoascript.NSString, person: cocoascript.ABPerson, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458370-selectrecord
    selectRecord_byExtendingSelection(record: cocoascript.ABRecord, extend: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458746-accessoryview
    accessoryView(): cocoascript.NSView;
    setAccessoryView(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458688-clearsearchfield
    clearSearchField(sender: cocoascript.ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458324-editinaddressbook
    editInAddressBook(sender: cocoascript.ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458286-groupdoubleaction
    groupDoubleAction(): cocoascript.SEL;
    setGroupDoubleAction(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458723-namedoubleaction
    nameDoubleAction(): cocoascript.SEL;
    setNameDoubleAction(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458762-selectinaddressbook
    selectInAddressBook(sender: cocoascript.ABPeoplePickerView):void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458731-target
    target(): cocoascript.id;
    setTarget(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpeoplepickerview/1458748-autosavename
    autosaveName(): cocoascript.NSString;
    setAutosaveName(): void;
    //
    alloc():cocoascript.ABPeoplePickerView;
    //
    init():cocoascript.ABPeoplePickerView;
  }
}

declare const ABPeoplePickerView: cocoascript.ABPeoplePickerView;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickergroupselectiondidchangenotification
declare const ABPeoplePickerGroupSelectionDidChangeNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickernameselectiondidchangenotification
declare const ABPeoplePickerNameSelectionDidChangeNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickervalueselectiondidchangenotification
declare const ABPeoplePickerValueSelectionDidChangeNotification: cocoascript.NSString;
// doc://com.apple.documentation/documentation/addressbook/abpeoplepickerdisplayedpropertydidchangenotification
declare const ABPeoplePickerDisplayedPropertyDidChangeNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that provides a view for displaying and editing contacts.
   * doc://com.apple.documentation/documentation/addressbook/abpersonview
   */
  interface ABPersonView extends NSView {
    // doc://com.apple.documentation/documentation/addressbook/abpersonview/1411312-editing
    editing(): cocoascript.BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonview/1411310-person
    person(): cocoascript.ABPerson;
    setPerson(): void;
    // doc://com.apple.documentation/documentation/addressbook/abpersonview/1411308-shouldshowlinkedpeople
    shouldShowLinkedPeople(): cocoascript.BOOL;
    setShouldShowLinkedPeople(): void;
    //
    alloc():cocoascript.ABPersonView;
    //
    init():cocoascript.ABPersonView;
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
    searchElementForConjunction_children(conjuction: cocoascript.ABSearchConjunction, children: cocoascript.NSArray):cocoascript.ABSearchElement;
    // doc://com.apple.documentation/documentation/addressbook/absearchelement/1458642-matchesrecord
    matchesRecord(record: cocoascript.ABRecord):cocoascript.BOOL;
    //
    alloc():cocoascript.ABSearchElement;
    //
    init():cocoascript.ABSearchElement;
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
declare const ABAddressBookErrorDomain: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresscitykey
declare const kABPersonAddressCityKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresscountrycodekey
declare const kABPersonAddressCountryCodeKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresscountrykey
declare const kABPersonAddressCountryKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddressproperty
declare const kABPersonAddressProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddressstatekey
declare const kABPersonAddressStateKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddressstreetkey
declare const kABPersonAddressStreetKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonaddresszipkey
declare const kABPersonAddressZIPKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdaycalendaridentifierkey
declare const kABPersonAlternateBirthdayCalendarIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdaydaykey
declare const kABPersonAlternateBirthdayDayKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayerakey
declare const kABPersonAlternateBirthdayEraKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayisleapmonthkey
declare const kABPersonAlternateBirthdayIsLeapMonthKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdaymonthkey
declare const kABPersonAlternateBirthdayMonthKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayproperty
declare const kABPersonAlternateBirthdayProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonalternatebirthdayyearkey
declare const kABPersonAlternateBirthdayYearKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonanniversarylabel
declare const kABPersonAnniversaryLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonassistantlabel
declare const kABPersonAssistantLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonbirthdayproperty
declare const kABPersonBirthdayProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonbrotherlabel
declare const kABPersonBrotherLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonchildlabel
declare const kABPersonChildLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoncreationdateproperty
declare const kABPersonCreationDateProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersondateproperty
declare const kABPersonDateProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersondepartmentproperty
declare const kABPersonDepartmentProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonemailproperty
declare const kABPersonEmailProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfatherlabel
declare const kABPersonFatherLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfirstnamephoneticproperty
declare const kABPersonFirstNamePhoneticProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfirstnameproperty
declare const kABPersonFirstNameProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonfriendlabel
declare const kABPersonFriendLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonhomepagelabel
declare const kABPersonHomePageLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageproperty
declare const kABPersonInstantMessageProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceaim
declare const kABPersonInstantMessageServiceAIM: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicefacebook
declare const kABPersonInstantMessageServiceFacebook: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicegadugadu
declare const kABPersonInstantMessageServiceGaduGadu: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicegoogletalk
declare const kABPersonInstantMessageServiceGoogleTalk: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceicq
declare const kABPersonInstantMessageServiceICQ: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicejabber
declare const kABPersonInstantMessageServiceJabber: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicekey
declare const kABPersonInstantMessageServiceKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageservicemsn
declare const kABPersonInstantMessageServiceMSN: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceqq
declare const kABPersonInstantMessageServiceQQ: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceskype
declare const kABPersonInstantMessageServiceSkype: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageserviceyahoo
declare const kABPersonInstantMessageServiceYahoo: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersoninstantmessageusernamekey
declare const kABPersonInstantMessageUsernameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonjobtitleproperty
declare const kABPersonJobTitleProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonkindorganization
declare const kABPersonKindOrganization: cocoascript.CFNumberRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonkindperson
declare const kABPersonKindPerson: cocoascript.CFNumberRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonkindproperty
declare const kABPersonKindProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonlastnamephoneticproperty
declare const kABPersonLastNamePhoneticProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonlastnameproperty
declare const kABPersonLastNameProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmanagerlabel
declare const kABPersonManagerLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmiddlenamephoneticproperty
declare const kABPersonMiddleNamePhoneticProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmiddlenameproperty
declare const kABPersonMiddleNameProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmodificationdateproperty
declare const kABPersonModificationDateProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonmotherlabel
declare const kABPersonMotherLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonnicknameproperty
declare const kABPersonNicknameProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonnoteproperty
declare const kABPersonNoteProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonorganizationproperty
declare const kABPersonOrganizationProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonparentlabel
declare const kABPersonParentLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonpartnerlabel
declare const kABPersonPartnerLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonehomefaxlabel
declare const kABPersonPhoneHomeFAXLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneiphonelabel
declare const kABPersonPhoneIPhoneLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonemainlabel
declare const kABPersonPhoneMainLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonemobilelabel
declare const kABPersonPhoneMobileLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneotherfaxlabel
declare const kABPersonPhoneOtherFAXLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphonepagerlabel
declare const kABPersonPhonePagerLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneproperty
declare const kABPersonPhoneProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonphoneworkfaxlabel
declare const kABPersonPhoneWorkFAXLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonprefixproperty
declare const kABPersonPrefixProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonrelatednamesproperty
declare const kABPersonRelatedNamesProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsisterlabel
declare const kABPersonSisterLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileproperty
declare const kABPersonSocialProfileProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicefacebook
declare const kABPersonSocialProfileServiceFacebook: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileserviceflickr
declare const kABPersonSocialProfileServiceFlickr: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicegamecenter
declare const kABPersonSocialProfileServiceGameCenter: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicekey
declare const kABPersonSocialProfileServiceKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicelinkedin
declare const kABPersonSocialProfileServiceLinkedIn: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicemyspace
declare const kABPersonSocialProfileServiceMyspace: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicesinaweibo
declare const kABPersonSocialProfileServiceSinaWeibo: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileservicetwitter
declare const kABPersonSocialProfileServiceTwitter: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileurlkey
declare const kABPersonSocialProfileURLKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileuseridentifierkey
declare const kABPersonSocialProfileUserIdentifierKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsocialprofileusernamekey
declare const kABPersonSocialProfileUsernameKey: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonspouselabel
declare const kABPersonSpouseLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabpersonsuffixproperty
declare const kABPersonSuffixProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabpersonurlproperty
declare const kABPersonURLProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabsourcenameproperty
declare const kABSourceNameProperty: cocoascript.ABPropertyID;
// doc://com.apple.documentation/documentation/addressbook/kabsourcetypeproperty
declare const kABSourceTypeProperty: cocoascript.ABPropertyID;
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
declare const kABWorkLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabhomelabel
declare const kABHomeLabel: cocoascript.CFStringRef;
// doc://com.apple.documentation/documentation/addressbook/kabotherlabel
declare const kABOtherLabel: cocoascript.CFStringRef;
