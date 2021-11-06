declare namespace cocoascript {
  /**
   * The methods you use to respond to events in an unknown person view controller.
   * https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontrollerdelegate
   */
  interface ABUnknownPersonViewControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontrollerdelegate/1621814-unknownpersonviewcontroller
    unknownPersonViewController_didResolveToPerson(unknownCardViewController: ABUnknownPersonViewController, person: ABRecordRef):void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontrollerdelegate/1621815-unknownpersonviewcontroller
    unknownPersonViewController_shouldPerformDefaultActionForPerson_property_identifier(personViewController: ABUnknownPersonViewController, person: ABRecordRef, property: ABPropertyID, identifier: ABMultiValueIdentifier):boolean;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontrollerdelegate
   */
  interface ABNewPersonViewControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontrollerdelegate/1624261-newpersonviewcontroller
    newPersonViewController_didCompleteWithNewPerson(newPersonView: ABNewPersonViewController, person: ABRecordRef):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate
   */
  interface ABPeoplePickerNavigationControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/1614405-peoplepickernavigationcontroller
    peoplePickerNavigationController_shouldContinueAfterSelectingPerson(peoplePicker: ABPeoplePickerNavigationController, person: ABRecordRef):boolean;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/1614408-peoplepickernavigationcontroller
    peoplePickerNavigationController_shouldContinueAfterSelectingPerson_property_identifier(peoplePicker: ABPeoplePickerNavigationController, person: ABRecordRef, property: ABPropertyID, identifier: ABMultiValueIdentifier):boolean;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/1614415-peoplepickernavigationcontroller
    peoplePickerNavigationControllerDidCancel(peoplePicker: ABPeoplePickerNavigationController):void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/1614403-peoplepickernavigationcontroller
    peoplePickerNavigationController_didSelectPerson(peoplePicker: ABPeoplePickerNavigationController, person: ABRecordRef):void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontrollerdelegate/1614402-peoplepickernavigationcontroller
    peoplePickerNavigationController_didSelectPerson_property_identifier(peoplePicker: ABPeoplePickerNavigationController, person: ABRecordRef, property: ABPropertyID, identifier: ABMultiValueIdentifier):void;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/addressbookui/abpersonviewcontrollerdelegate
   */
  interface ABPersonViewControllerDelegate extends NSObject {
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontrollerdelegate/1622200-personviewcontroller
    personViewController_shouldPerformDefaultActionForPerson_property_identifier(personViewController: ABPersonViewController, person: ABRecordRef, property: ABPropertyID, identifier: ABMultiValueIdentifier):boolean;
  }
}
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller
   */
  interface ABPersonViewController extends UIViewController {
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622199-personviewdelegate
    personViewDelegate(): ABPersonViewControllerDelegate;
    setPersonViewDelegate(value: ABPersonViewControllerDelegate): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622197-displayedperson
    displayedPerson(): ABRecordRef;
    setDisplayedPerson(value: ABRecordRef): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622204-displayedproperties
    displayedProperties(): NSNumber;
    setDisplayedProperties(value: NSNumber): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622207-shouldshowlinkedpeople
    shouldShowLinkedPeople(): boolean;
    setShouldShowLinkedPeople(value: boolean): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622196-addressbook
    addressBook(): ABAddressBookRef;
    setAddressBook(value: ABAddressBookRef): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622201-allowsactions
    allowsActions(): boolean;
    setAllowsActions(value: boolean): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622202-allowsediting
    allowsEditing(): boolean;
    setAllowsEditing(value: boolean): void;
    // https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/1622203-sethighlighteditemforproperty
    setHighlightedItemForProperty_withIdentifier(property: ABPropertyID, identifier: ABMultiValueIdentifier):void;
    //
    alloc():ABPersonViewController;
    //
    init():ABPersonViewController;
  }
}

declare const ABPersonViewController: cocoascript.ABPersonViewController;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller
   */
  interface ABUnknownPersonViewController extends UIViewController {
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621817-unknownpersonviewdelegate
    unknownPersonViewDelegate(): ABUnknownPersonViewControllerDelegate;
    setUnknownPersonViewDelegate(value: ABUnknownPersonViewControllerDelegate): void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621812-alternatename
    alternateName(): string | cocoascript.NSString;
    setAlternateName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621819-message
    message(): string | cocoascript.NSString;
    setMessage(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621813-displayedperson
    displayedPerson(): ABRecordRef;
    setDisplayedPerson(value: ABRecordRef): void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621810-addressbook
    addressBook(): ABAddressBookRef;
    setAddressBook(value: ABAddressBookRef): void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621811-allowsactions
    allowsActions(): boolean;
    setAllowsActions(value: boolean): void;
    // https://developer.apple.com/documentation/addressbookui/abunknownpersonviewcontroller/1621816-allowsaddingtoaddressbook
    allowsAddingToAddressBook(): boolean;
    setAllowsAddingToAddressBook(value: boolean): void;
    //
    alloc():ABUnknownPersonViewController;
    //
    init():ABUnknownPersonViewController;
  }
}

declare const ABUnknownPersonViewController: cocoascript.ABUnknownPersonViewController;
declare namespace cocoascript {
  /**
   * A view controller presenting an interface to create a contact.
   * https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller
   */
  interface ABNewPersonViewController extends UIViewController {
    // https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/1624265-newpersonviewdelegate
    newPersonViewDelegate(): ABNewPersonViewControllerDelegate;
    setNewPersonViewDelegate(value: ABNewPersonViewControllerDelegate): void;
    // https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/1624262-newpersonviewdelegate
    newPersonViewDelegate():ABNewPersonViewControllerDelegate;
    // https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/1624263-displayedperson
    displayedPerson(): ABRecordRef;
    setDisplayedPerson(value: ABRecordRef): void;
    // https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/1624264-addressbook
    addressBook(): ABAddressBookRef;
    setAddressBook(value: ABAddressBookRef): void;
    // https://developer.apple.com/documentation/addressbookui/abnewpersonviewcontroller/1624260-parentgroup
    parentGroup(): ABRecordRef;
    setParentGroup(value: ABRecordRef): void;
    //
    alloc():ABNewPersonViewController;
    //
    init():ABNewPersonViewController;
  }
}

declare const ABNewPersonViewController: cocoascript.ABNewPersonViewController;
declare namespace cocoascript {
  /**
   * The
   * https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller
   */
  interface ABPeoplePickerNavigationController extends UINavigationController {
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/1614428-peoplepickerdelegate
    peoplePickerDelegate(): ABPeoplePickerNavigationControllerDelegate;
    setPeoplePickerDelegate(value: ABPeoplePickerNavigationControllerDelegate): void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/1614398-displayedproperties
    displayedProperties(): NSNumber;
    setDisplayedProperties(value: NSNumber): void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/1614407-addressbook
    addressBook(): ABAddressBookRef;
    setAddressBook(value: ABAddressBookRef): void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/1614417-predicateforenablingperson
    predicateForEnablingPerson(): NSPredicate;
    setPredicateForEnablingPerson(value: NSPredicate): void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/1614400-predicateforselectionofperson
    predicateForSelectionOfPerson(): NSPredicate;
    setPredicateForSelectionOfPerson(value: NSPredicate): void;
    // https://developer.apple.com/documentation/addressbookui/abpeoplepickernavigationcontroller/1614422-predicateforselectionofproperty
    predicateForSelectionOfProperty(): NSPredicate;
    setPredicateForSelectionOfProperty(value: NSPredicate): void;
    //
    alloc():ABPeoplePickerNavigationController;
    //
    init():ABPeoplePickerNavigationController;
  }
}

declare const ABPeoplePickerNavigationController: cocoascript.ABPeoplePickerNavigationController;
