import { faker } from "@faker-js/faker"
const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const emailAddress = faker.internet.email()
const phoneNumber = `80${faker.string.numeric(8)}`;
const instituteName = faker.company.name()
const city = faker.location.city()
const address = faker.location.streetAddress()
const username = faker.internet.userName().toLowerCase().replace(/\s+/g, '');
const instagram = `https://instagram.com/${username}`;
const facebook = `https://facebook.com/${username}`;
const twitter = `https://twitter.com/${username}`;
const businessRegNumber = 'RN' + faker.string.numeric(7);
const taxIdNumber = faker.string.alpha({ count: 2, casing: 'upper' }) + faker.string.numeric(7);
const identityNumber = faker.string.numeric(10);
const randomSentence = faker.lorem.words({ min: 1, max: 5 });


class organ {
    organisationTab = "(//li[contains(@class,'sidebar__nav__item')])[2]"
    organisationPage = ".content"
    addNewInstituteBtn = "//button[normalize-space()='Add Sub-Institution']"
    firstNameField = "#adminFirstName"
    lastNameField = "#adminLastName"
    emailAddressField = "#adminEmail"
    phoneNumberField = "input[placeholder='E.g 08102003045']"
    saveAndcontinueBtn = "//button[normalize-space()='Save & Continue']"
    instituteNameField = "//div[contains(@class,'col-md-7 mb-4 mx-auto py-4')]//form//div//input[@id='name']"
    telephoneField = ".react-tel-input"
    buzEmailField = "#bizEmail"
    cityField = "#city"
    firstAddress = "#addressLine1"
    address2 = "#addressLine2"
    supportEmailField = "#supportEmail"
    disputeEmailField = "#disputeEmail"
    instagramField = "#instagramLink"
    facebookField = "#facebookLink"
    twitterField = "#twitterLink"
    businessRegField = "#businessRegNo"
    taxIdField = "#taxIdNo"
    businessRegUpload = "#business-registration"
    taxIdentityUpload = "#tax-identification"
    certificateUpload = "#certificate-of-incorporation"
    memomartUpload = "#memom-mart"
    proofAddressUpload = "#proof-of-address"
    bizFirstNameField = "#bizConFirstName"
    bizLastNameField = "#bizConLastName"
    isBusinessDirector = "//label[contains(text(),'Are you Part of the Business Directors?')]"
    bizEmailAddressField = "#bizConEmail"
    openCalendar = "input[placeholder='Choose date']"
    pickYear = ".react-datepicker__year-select"
    bizCityField = "#bizConCity"
    bizAddress1 = "#bizConAddressLine1"
    bizAdddress2 = "#bizConAddressLine2"
    uploadDirID = "#director-id"
    identityNoField = "#dirIdentityNo"
    sendInvite = "//button[normalize-space()='Send Invite']"
    institutionNameField = "#institutionName"
    instituteEmailField = "#email"
    sendInviteButton = "//button[@type='submit'][normalize-space()='Send Invite']"
    notificationAlert = "div[role='alert']"
    subInstituteIDField = "#subInstitutionId"
    subInstituteID = "e0b8ef3a8f444836a08094b23cb69106"
    saveFilter = "button[type='submit']"
    subInstituteTable = ".table__body"
    refreshBtn = "//button[normalize-space()='Refresh']"
    subInstituteNameField = "#name"
    kebabButton = "//tr[@id='58fc9398f407477ca9b917704db0a2d6']//div[contains(text(),',')]"
    userManagementBtn = "//div[@class='sc-fHjqPf bqrwpn']"
    addNewUser = "//button[normalize-space()='Add New User']"
    merchantTab = "//a[normalize-space()='Merchants']"
    addMerchantButton = "//button[normalize-space()='Add New Merchant']"
    merchantNameField = "(//input[contains(@placeholder,'Enter')])[1]"
    merchantEmailField = "(//input[contains(@placeholder,'Enter')])[2]"
    merchantAddress = "(//input[@placeholder='Enter'])[3]"
    merchantkebabButton = "//tr[@id='3']//td[1]"
    invalidDocumentCheckbox = "//label[contains(text(),'Invalid Documents')]"
    fradulentActCheckbox = "//label[contains(text(),'Fraudulent Activities')]"
    othersCheckBox = "//label[contains(text(),'Other? Please specify in notes')]"
    additionalNoteField = "textarea[placeholder='Write something here']"
    blacklistButton = "//button[normalize-space()='Blacklist Merchant']"
    applicationTab = "//a[normalize-space()='Applications']"
    application = "tr[id='0'] td:nth-child(1)"
    downloadpdfBtn = "//button[normalize-space()='Download as PDF']"


    clickOrganisation() {
        cy.xpath(this.organisationTab).click()
    }
    verifyPageLoad() {
        cy.get(this.organisationPage)
            .should('be.visible')
            .and('contain', 'Any Date')
            .and('contain', 'Filter')
            .and('contain', 'Export CSV')
            .and('contain', ' Send Invite')
            .and('contain', ' Add Sub-Institution')
            .and('contain', 'SUB-INSTITUTION')
            .and('contain', 'ID')
            .and('contain', 'phone number')
            .and('contain', 'Status')
            .and('contain', 'Date Created')
            .and('contain', 'Actions')
            .and('contain', 'Showing')
    }
    clickAddNewInstituteBtn() {
        cy.xpath(this.addNewInstituteBtn).click()
    }
    enterFirstName() {
        cy.get(this.firstNameField)
            .clear()
            .type(firstName)
    }
    enterLastName() {
        cy.get(this.lastNameField)
            .clear()
            .type(lastName)
    }
    enterEmailAddress() {
        cy.get(this.emailAddressField)
            .clear()
            .type(emailAddress)
    }
    enterPhoneNumber() {
        cy.get(this.phoneNumberField)
            .clear()
            .type(phoneNumber)
    }
    clickSaveandContinue() {
        cy.xpath(this.saveAndcontinueBtn).click()
    }
    enterInstitueName() {
        cy.xpath(this.instituteNameField)
            .clear()
            .type(instituteName)
    }
    selectBusinessSector() {
        cy.get('#sector')
            .should('exist')
            .focus()
            .type('{downarrow}');
        cy.get('.form-group-select__option')
            .should('have.length.greaterThan', 1)
            .then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click();
            });
    }
    selectBusinessSize() {
        cy.get('#bizSize').click({ force: true });
        cy.get('div.form-group-select__option')
            .should('have.length.greaterThan', 0)
            .then(($options) => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click();
            });
    }
    selectCountry() {
        cy.contains('div', 'Choose country').click({ force: true });
        cy.get('div.form-group-select__option')
            .should('have.length.greaterThan', 0)
            .then(($options) => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click();
            });
    }
    enterTelephone() {
        cy.get(this.telephoneField).type(phoneNumber)
    }
    enterBizEmail() {
        cy.get(this.buzEmailField).type(emailAddress)
    }
    selectState() {
        cy.contains('div', 'Choose state').click({ force: true });
        cy.get('div.form-group-select__option')
            .should('have.length.greaterThan', 0)
            .then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                cy.wrap($options[randomIndex]).click();
            });

    }
    enterCity() {
        cy.get(this.cityField).type(city)

    }
    enterAddress1() {
        cy.get(this.firstAddress).type(address)
    }
    enterAddress2() {
        cy.get(this.address2).type(address)
    }

    enterSupportEmail() {
        cy.get(this.supportEmailField).type(emailAddress)
    }
    enterDisputeEmail() {
        cy.get(this.disputeEmailField).type(emailAddress)
    }
    enterInstagram() {
        cy.get(this.instagramField).type(instagram)
    }
    enterFacebook() {
        cy.get(this.facebookField).type(facebook)
    }
    enterTwitter() {
        cy.get(this.twitterField).type(twitter)
    }

    enterBusinessRegNum() {
        cy.get(this.businessRegField).type(businessRegNumber)
    }
    uploadBusinessReg() {
        cy.get(this.businessRegUpload).attachFile('testUpload.pdf')
        cy.wait(2000)
    }
    enterTaxIDNum() {
        cy.get(this.taxIdField).type(taxIdNumber)
        cy.wait(2000)
    }
    uploadTaxID() {
        cy.get(this.taxIdentityUpload).attachFile('testerImage.png')
        cy.wait(2000)
    }
    uploadCertofIncorporation() {
        cy.get(this.certificateUpload).attachFile('testUpload.pdf')
        cy.wait(2000)
    }
    uploadMemomMart() {
        cy.get(this.memomartUpload).attachFile('testUpload.pdf')
        cy.wait(2000)
    }
    uploadProofAddress() {
        cy.get(this.proofAddressUpload).attachFile('testUpload.pdf')
        cy.wait(6000)
    }

    enterBizFirstName() {
        cy.get(this.bizFirstNameField).type(firstName)
    }
    enterBizLastName() {
        cy.get(this.bizLastNameField).type(lastName)
    }
    clickRadioButton() {
        cy.xpath(this.isBusinessDirector).click()
    }
    enterBizEmailAddress() {
        cy.get(this.bizEmailAddressField).type(emailAddress)
    }
    enterDOB() {
        cy.get(this.openCalendar).click()   //OPEN CALENDER
        const randomYear = Math.floor(Math.random() * (2005 - 1900 + 1)) + 1900;
        cy.get(this.pickYear).select(randomYear.toString()); //SELECT YEAR
        cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)') //SELECT DAY
            .then($days => {
                // Generate a random index within the number of available days
                const randomIndex = Math.floor(Math.random() * $days.length);

                // Click the randomly selected day
                cy.wrap($days[randomIndex]).click();
            });

    }
    enterBizCity() {
        cy.get(this.bizCityField).type(city)
    }
    enterBizAddress1() {
        cy.get(this.bizAddress1).type(address)
    }
    enterBizAddress2() {
        cy.get(this.bizAdddress2).type(address)
    }

    identityCardUpload() {
        cy.get(this.uploadDirID).attachFile('testerImage.png')
    }

    selectIdentityCard() {
        // Click to open the dropdown
        cy.get('#dirIdentityType').click({ force: true });

        // Type into the dropdown input
        cy.get('#dirIdentityType').type("Voters");

        // Select the option that appears
        cy.contains("div", "Voters card").click();

    }
    enterIdentityNo() {
        cy.get(this.identityNoField).type(identityNumber)
    }





    //SEND INVITE

    clickSendInvite() {
        cy.xpath(this.sendInvite).click()
    }
    enterInstitutionName() {
        cy.get(this.institutionNameField).type(instituteName)
    }
    enterInstitutionEmail() {
        cy.get(this.instituteEmailField).type(emailAddress)
    }
    clickSendInviteBtn() {
        cy.xpath(this.sendInviteButton).click()
    }
    checkInviteNotification() {
        cy.get(this.notificationAlert)
            .should('be.visible')
            .and('contain', 'Invite Sent Successfully')
    }
    enterSubInstituteID() {
        cy.get(this.subInstituteIDField).type(this.subInstituteID)
    }

    clickSaveFilter() {
        cy.get(this.saveFilter).click()
    }
    confirmSubInstituteID() {
        cy.get(this.subInstituteTable)
            .should('be.visible')
            .and('contain', this.subInstituteID)
    }
    clickRefreshBtn() {
        cy.xpath(this.refreshBtn).click()
    }
    enterSubInstituteName() {
        cy.get(this.subInstituteIDField).clear()
        cy.get(this.subInstituteNameField)
            .type('7up')
    }
    confirmSubInstituteName() {

    }





    //ADD NEW USER
    clickKebabBtn() {
        cy.xpath(this.kebabButton).click()
    }
    clickUserManagement() {
        cy.xpath(this.userManagementBtn).click()
    }
    clickAddNewUser() {
        cy.xpath(this.addNewUser).click()
    }
    enterUserEmail() {
        cy.get(this.instituteEmailField).type(emailAddress)
    }
    selectUserRole() {
        cy.get('#role').click({ force: true });
        cy.get('.form-group-select__menu-list div')
            .should('exist')
            .then($options => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                const randomOption = $options[randomIndex];
                cy.wrap(randomOption).click();
            });

    }
    clickSendInviteButton() {
        cy.xpath(this.sendInviteButton).click()
    }





    //MERCHANT
    clickMerchantTab() {
        cy.xpath(this.merchantTab).click()
    }
    confirmMerchantLoad() {
        cy.get(this.organisationPage)
            .should('be.visible')
            .and('contain', 'Merchant Name')
            .and('contain', 'Status')
            .and('contain', 'Date Created')
            .and('contain', 'Actions')
            .and('contain', 'Any Date')
            .and('contain', 'Filter')
            .and('contain', 'Export CSV')
            .and('contain', ' Send Invite')
            .and('contain', ' Add New Merchant')
            .and('contain', 'Showing')
    }
    clickAddMerchant() {
        cy.xpath(this.addMerchantButton).click()
    }
    enterMerchantName() {
        cy.xpath(this.merchantNameField)
            .clear()
            .type(firstName)
    }
    enterMerchantEmail() {
        cy.xpath(this.merchantEmailField)
            .clear()
            .type(emailAddress)
    }
    enterMerchantContact() {
        cy.get(this.telephoneField).type(phoneNumber)
    }
    enterMerchantState() {

    }
    selectMerchantRegion() {

    }
    enterMerchantAddress() {
        cy.xpath(this.merchantAddress).type(address)
    }
    clickAddMerchantBtn() {

    }

    enterMerchantName() {
        cy.get(this.institutionNameField).type(instituteName)
    }
    enterMerchantEmail() {
        cy.get(this.instituteEmailField).type(emailAddress)
    }

    inputMerchantName() {
        cy.get(this.subInstituteNameField)
            .clear()
            .type('Blue Ray')
    }

    confirmMerchantFilter() {
        cy.get(this.subInstituteTable)
            .should('be.visible')
            .and('contain', 'Blue Ray')
    }

    clickMerchantKebab() {
        cy.get('button.braille-dropdown-button').eq(4).click();
    }

    clickInvalidDocuments() {
        cy.xpath(this.invalidDocumentCheckbox).click({ force: true })
    }
    clickFradulentAct() {
        cy.xpath(this.fradulentActCheckbox).click({ force: true })
    }
    clickOthers() {
        cy.xpath(this.othersCheckBox).click({ force: true })
    }
    enterAdditonalNote() {
        cy.get(this.additionalNoteField)
            .clear({ force: true })
            .type(randomSentence, { force: true })
    }
    clickBlacklistMerchant() {
        cy.xpath(this.blacklistButton).click({ force: true })
    }

    clickApplicationTab() {
        cy.xpath(this.applicationTab).click()
    }
    clickAnInstitute() {
        cy.get(this.application).click()
    }
    checkApplicationPage() {
        cy.get(this.organisationPage)
            .should('be.visible')
            .and('contain', 'Organisation Profile Information')
            .and('contain', 'Contact Information')
            .and('contain', 'Business Support Contact')
            .and('contain', 'Business Documents')
            .and('contain', ' Download as PDF')
    }
    clickdownloadPDF(){
        cy.xpath(this.downloadpdfBtn).click()
    }
}
export default organ