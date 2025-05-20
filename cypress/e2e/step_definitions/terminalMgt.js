import TerminalMgt from '../../Pages/TerminalMgtPage';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const Tms = new TerminalMgt


//DEVICE MANAGEMENT
Given('I Click on Terminal Management', () => {
    Tms.clickTmsBtn()
})


//ADD NEW DEVICE
Then('I Click Add A New Device', () => {
    Tms.clickAddNewDevice()
})
Then('I Enter Serial Number', () => {
    Tms.enterSerialNumber()
})
Then('I Select a Manufacturer from the Manufacturer Dropdown', () => {
    Tms.selectManufacturer()
})
Then('I Select an Attribute Group from the Attribute Group Dropdown', () => {
    Tms.selectAttributeGroup()
})
Then('I Select a Device Model from the Device Model Dropdown', () => {
    Tms.selectDeviceModel()
})
Then('I Select multiple Attributes from the Attribute Dropdown', () => {
    Tms.selectAttributes()
})
Then('I Click on Add Device Button', () => {
    Tms.addDevice()
})
Then('I Verify that the Device is Added Successfully', () => {
    Tms.deviceAdded()
})


// FILTER BY REGISTRATION DAY
When('I click Any Date Button', () => {
    Tms.clickAnyDate()
})
Then('I filter by Today', () => {
    Tms.clickToday()
    Tms.clickApply()
})
Then('I filter by This Week', () => {
    Tms.clickAnyDate()
    Tms.clickWeek()
    Tms.clickApply()
})
Then('I filter by This Month', () => {
    Tms.clickAnyDate()
    Tms.clickMonth()
    Tms.clickApply()
})
Then('I filter by Last Month', () => {
    Tms.clickAnyDate()
    Tms.clickLastMonth()
    Tms.clickApply()
})
Then('I filter by Custom Date', () => {
    Tms.clickAnyDate()
    Tms.clickCustomDate()
    Tms.clickApply()
})


//LOCK AND UNLOCK DEVICE
When('I click on the Lock Icon', () => {
    Tms.clickLockIcon()
})
Then('I click on Lock Device', () => {
    Tms.clickLockDevice()
})
Then('I validate the Device is lock Successfully', () => {
    Tms.lockSuccess()
})
Then('I click on the Unlock Icon', () => {
    Tms.clickUnlockicon()
})
Then('I click on Unlock Device', () => {
    Tms.clickUnlockDevice()
})
Then('I validate the Device is unlocked successfully', () => {
    Tms.unlockSuccess()
})



//EDIT DEVICE
When('I click on the Edit Icon', () => {
    Tms.editNewDevice()
})
Then('I edit the serial Number', () => {
    Tms.enterSerialNumber()
})
Then('I change the Manufacturer', () => {
    Tms.selectManufacturer()
})
Then('I change the Attribute Group', () => {
    Tms.selectAttributeGroup()
})
Then('I change the Device Modal', () => {
    Tms.selectDeviceModel()
})
Then('I Edit the Device Attribute', () => {
    Tms.selectAttributes()
})
Then('I click on the Edit Device Button', () => {
    Tms.confirmEditDevice()
})
Then('I check the Device is editted successfully', () => {
    Tms.editSuccess()
})


//DELETE DEVICE
When('I click on the Delete Icon', () => {
    Tms.deleteIcon()
})
Then('I click on Delete Device on the confirmation Modal', () => {
    Tms.deleteDevice()
})
Then('I confirm the Device is deleted successfully', () => {
    Tms.deleteSuccess()
})



//EXPORT CSV
When('I click on Export CSV', () => {
    Tms.clickExport()
})
Then('I verify the Download Report Modal', () => {
    Tms.checkDownloadModal()
})
Then('I click on Download Button', () => {
    Tms.clickDownload()
})
Then('I verify the Document is downloaded successfully', () => {
    Tms.checkDownloadSuccess()
})


//TERMINAL CONFIGURATION
When('I click on Terminal Configuration', () => {
    Tms.clickTerminalConfig()
})
Then('I click on a Terminal', () => {
    Tms.clickAtermonal()
})
Then('I bind the terminal', () => {
    Tms.clickBind()
})
Then('I unbind the Terminal', () => {
    Tms.clickUnbind()
})


//REMOTE ASSISTANCE
When('I navigate to Remote Assistance', () => {
    Tms.clickRemoteAssit()
})
Then('I search for a Terminal using the Terminal ID', () => {
    Tms.searchTerminal()
})
Then('I click on the Terminal', () => {
    Tms.clickSearch()
})
Then('I make the terminal Inactive', () => {
    Tms.clickInactive()
})
Then('I make the terminal Active', () => {
    Tms.clickActive()
})

When('I click on Remote Assistance', () => {
    Tms.clickRemoteAssit()
})
Then('I filter by Inactive terminal', () => {
    Tms.filterByInactive()
})
Then('I click on a terminal', () => {
    Tms.clickaTerminal()
})
Then('I make it Active', () => {
    Tms.clickActive()
})

When('I clicked on Remote Assistance', () => {
    Tms.clickRemoteAssit()
})
Then('I filter by Active Terminal', () => {
    Tms.filterByActive()
})
Then('I clicked on a Terminal', () => {
    Tms.clickaTerminal()
})
Then('I make it Inactive', () => {
    Tms.clickInactive()
})