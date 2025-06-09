import organ from "../../Pages/organization";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const org = new organ

// Sub-Institute
When('I click on Organisation', () => {
    org.clickOrganisation()
})
Then('I check if the Page load properly', () => {
    org.verifyPageLoad()
})
Then('I click on Add New Insititue Button', () => {
    org.clickAddNewInstituteBtn()
})
Then('I fill the Admin Contact Form Properly', () => {
    org.enterFirstName()
    org.enterLastName()
    org.enterEmailAddress()
    org.enterPhoneNumber()
})
Then('I click Save & Continue Button', () => {
    org.clickSaveandContinue()
})
Then('I Fill the Business Profile Information Properly', () => {
    org.enterInstitueName()
    org.selectBusinessSector()
    org.selectBusinessSize()
    org.selectCountry()
    org.enterTelephone()
    org.enterBizEmail()
    org.selectState()
    org.enterCity()
    org.enterAddress1()
    org.enterAddress2()
})
Then('I fill the Support contact form', () => {
    org.enterSupportEmail()
    org.enterTelephone()
    org.enterDisputeEmail()
    org.enterInstagram()
    org.enterFacebook()
    org.enterTwitter()
})

Then('I fill the Business Document Form Properly', () => {
    org.enterBusinessRegNum()
    org.uploadBusinessReg()
    org.enterTaxIDNum()
    org.uploadTaxID()
    org.uploadCertofIncorporation()
    org.uploadMemomMart()
    org.uploadProofAddress()
})

Then('I fill the Business Contact Information', () => {
    org.enterBizFirstName()
    org.enterBizLastName()
    org.clickRadioButton()
    org.enterBizEmailAddress()
    org.selectCountry()
    org.enterTelephone()
    org.enterDOB()
    org.selectState()
    org.enterBizCity()
    org.enterBizAddress1()
    org.enterBizAddress2()
})

Then('I fill the Directors Form Properly', () => {
    org.identityCardUpload()
    org.selectIdentityCard()
    org.enterIdentityNo()
})






//SEND INVITE

Then('I click on Send Invite', () => {
    org.clickSendInvite()
})
Then('I enter Institute Name', () => {
    org.enterInstitutionName()
})
Then('I enter Institute Email', () => {
    org.enterInstitutionEmail()
})
Then('I click on the Send Invite Button', () => {
    org.clickSendInviteBtn()
})
Then('I confirm a success notification is displayed', () => {
    org.checkInviteNotification()
})

Then('I enter the Sub-institute ID', () => {
    org.enterSubInstituteID()
})

Then('I click on Save Filter', () => {
    org.clickSaveFilter()
})

Then('I confirm the system return the appropriate sub-institute ID', () => {
    org.confirmSubInstituteID()
})

Then('I click on Refresh Button', () => {
    org.clickRefreshBtn()
})

Then('I enter the Sub-institute Name', () => {
    org.enterSubInstituteName()
})

Then('I confirm the system return the appropriate sub-institute Name', () => {
    org.confirmSubInstituteName()
})







//ADD NEW USER
Then('I click on the Kebab Button of an Institute', () => {
    org.clickKebabBtn()
})
Then('I click on User Managament', () => {
    org.clickUserManagement()
})
Then('I click on Add New User', () => {
    org.clickAddNewUser()
})
Then('I enter user email address', () => {
    org.enterUserEmail()
})
Then('I select the user role', () => {
    org.selectUserRole()
})
Then('I click on the SEND INVITE button', () => {
    org.clickSendInviteButton()
})




//MERCHANT
Then('I click on the Merhcant Tab', () => {
    org.clickMerchantTab()
})
Then('I check if the Merchant Page load Properly', () => {
    org.confirmMerchantLoad()
})
When('I click on the Add New Merchant Button', () => {
    org.clickAddMerchant()
})
Then('I enter the new Merchant Name', () => {
    org.enterMerchantName()
})
Then('I enter the Merchant Email', () => {
    org.enterMerchantEmail()
})
Then('I enter the Merchant Contact Phone Number', () => {
    org.enterMerchantContact()
})
Then('I select the Merchant State', () => {
    org.enterMerchantState()
})
Then('I select the Merchant Region', () => {
    org.selectMerchantRegion()
})
Then('I enter the Merchant address', () => {
    org.enterMerchantAddress()
})
Then('I click on Add Merchant Button', () => {
    org.clickAddMerchantBtn()
})



Then('I input the Merchant Name', () => {
    org.enterMerchantName()
})
Then('I input the Merchant Email', () => {
    org.enterMerchantEmail()
})


Then('I Input the Merchant Name', () => {
    org.inputMerchantName()
})
Then('I confirm if the table return the correct merchant name', () => {
    org.confirmMerchantFilter()
})

Then('I click on a merchant kebab button', () => {
    org.clickMerchantKebab()
})

Then('I click on Invalid Documents', () => {
    org.clickInvalidDocuments()
})
Then('I click on Fradulent Activities', () => {
    org.clickFradulentAct()
})
Then('I click on Other? Please specify in notes', () => {
    org.clickOthers()
})
Then('I Enter Additional Note', () => {
    org.enterAdditonalNote()
})
Then('I click Blacklist Merchant', () => {
    org.clickBlacklistMerchant()
})


Then('I click on Application Tab', () => {
    org.clickApplicationTab()
})
Then('I click on an institute', () => {
    org.clickAnInstitute()
})
Then('I check if the Application Page load Properly', () => {
    org.checkApplicationPage()
})
Then('I click on Download PDF button', () => {
    org.clickdownloadPDF()
})