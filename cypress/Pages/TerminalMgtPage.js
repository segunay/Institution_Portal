import { faker } from "@faker-js/faker"
const serialNumber = `SN-${faker.string.alphanumeric(10).toUpperCase()}`;

class TerminalMgt {

    tmsBtn = "nav[class='main__sidebar'] li:nth-child(3)"
    tmsVerify = "//h4[normalize-space()='Terminal Management']"
    addnewDeviceBtn = "//button[normalize-space()='Add New Device']"
    newDeviceModal = "//h4[normalize-space()='Add Device']"
    serialNumberField = "//div[@class='col-md-6']//input[@id='serialNumber']"
    dropdowns = ".form-group-select__value-container"
    dropdownMenu = ".form-group-select__menu"
    dropdownSelector = ".form-group-select--is-multi__input-container"
    dropdownMenuSelector = '[role="listbox"]'
    addDeviceBtn = "//button[normalize-space()='Add Device']"
    alertModal = "//div[@role='alert']"
    terminalConfigBtn = "//span[normalize-space()='Terminal Configuration']"
    singleTerminal = "tr[id='5']"
    terminalInfo = "//h4[normalize-space()='terminal information']"
    bindDeviceBtn = "//button[normalize-space()='Bind Device to Terminal']"
    deviceDropdown = ".form-group-select__option"
    submitBind = "button[type='submit']"
    unbindBtn = "//button[normalize-space()='Unbind Terminal']"
    confirmUnbind = "//button[normalize-space()='Unbind Device']"
    remoteAsstBtn = "//span[normalize-space()='Remote Assistance']"
    searchField = "#searchQuery"
    searchItem = "//td[normalize-space()='2DS35465']"
    inactiveBtn = "//button[normalize-space()='Make Inactive']"
    confirmInactive = ".btn.btn--danger"
    activeBtn = "//button[normalize-space()='Make Active']"
    confirmActive = "//button[@class='btn btn--secondary me-2']"
    filterDropdown = "#filterDropdownButton"
    filterInactive = "#Unlocked"
    saveFilter = "button[type='submit']"
    filteredItem = "tr[id='1']"
    filterActive = "#Locked"
    editButton = "tr[id='0'] button:nth-child(2)"
    deleteBtn = "tr[id='0'] button[class='btn btn--faint-gray']"
    confirmDelete = "//button[normalize-space()='Delete Device']"
    editDeviceBtn = "//button[normalize-space()='Edit Device']"
    exportCSVbtn = "//span[normalize-space()='Export CSV']"
    downloadModal = ".primary__header"
    downloadBtn = "//button[normalize-space()='Download']"
    anyDateBtn = "#dateFilterDropdown"
    applyBtn = "//button[normalize-space()='Apply']"
    today = "//label[normalize-space()='Today']"
    thisWeek = "//label[normalize-space()='This Week']"
    thisMonth = "//label[normalize-space()='This Month']"
    lastMonth = "//label[normalize-space()='Last Month']"
    lockIcon = "tr[id='0'] button:nth-child(1)"
    lockDeviceBtn = "//button[normalize-space()='Lock Device']"
    unlockDeviceBtn = ".btn.btn--success"

    //DEVICE MANAGEMENT

    clickTmsBtn() {
        cy.get(this.tmsBtn).click()
        cy.xpath(this.tmsVerify)
            .should('contain', 'Terminal Management')
            .and('be.visible')
    }

    clickAddNewDevice() {
        cy.xpath(this.addnewDeviceBtn).click()
        cy.xpath(this.newDeviceModal)
            .should('contain', 'Add Device')
            .and('be.visible')
    }

    enterSerialNumber() {
        cy.xpath(this.serialNumberField)
            .clear()
            .type(serialNumber)
    }

    selectManufacturer() {
        cy.get(this.dropdowns).eq(1).click();
        cy.get(this.dropdownMenu, { timeout: 10000 }) // Increase timeout
            .contains('Horizon', { timeout: 10000 })  // Increase timeout for the "Horizon" option
            .click();
    }

    selectAttributeGroup() {
        cy.get(this.dropdowns).eq(0).click()
        cy.get(this.dropdownMenu, { timeout: 10000 }).then(($menu) => {
            const options = $menu.find('div');
            const randomIndex = Math.floor(Math.random() * options.length);
            cy.wrap(options[randomIndex]).click();
        });
    }

    selectDeviceModel() {
        cy.get(this.dropdowns).eq(2).click()
        cy.get(this.dropdownMenu, { timeout: 10000 }).then(($menu) => {
            const options = $menu.find('div');
            const randomIndex = Math.floor(Math.random() * options.length);
            cy.wrap(options[randomIndex]).click();
        });

    }

    selectAttributes() {
        function selectRandomDropdownOption(dropdownSelector, dropdownMenuSelector) {
            cy.get(dropdownSelector).click();
            cy.get(dropdownMenuSelector, { timeout: 10000 }).then(($menu) => {
                const options = $menu.find('div');
                const randomIndex = Math.floor(Math.random() * options.length);
                cy.wrap(options[randomIndex]).click();
            });
        }
        // Function usage to select 5 random attribute
        selectRandomDropdownOption(this.dropdownSelector, this.dropdownMenuSelector);
        selectRandomDropdownOption(this.dropdownSelector, this.dropdownMenuSelector);
        selectRandomDropdownOption(this.dropdownSelector, this.dropdownMenuSelector);
        selectRandomDropdownOption(this.dropdownSelector, this.dropdownMenuSelector);
        selectRandomDropdownOption(this.dropdownSelector, this.dropdownMenuSelector);
    }

    addDevice() {
        cy.xpath(this.addDeviceBtn).click()
    }

    deviceAdded() {
        cy.xpath(this.alertModal)
            .should('contain', 'Device Created Successfully')
            .and('be.visible')
    }


    editNewDevice() {
        cy.get(this.editButton).click()
    }

    confirmEditDevice() {
        cy.xpath(this.editDeviceBtn).click()

    }

    editSuccess() {
        cy.xpath(this.alertModal)
            .should('contain', 'Device Updated Successfully')
            .and('be.visible')
    }

    deleteIcon() {
        cy.get(this.deleteBtn).click()
    }

    deleteDevice() {
        cy.xpath(this.confirmDelete).click()
    }

    deleteSuccess() {
        cy.xpath(this.alertModal)
            .should('contain', 'Device Deleted Successfully')
            .and('be.visible')
    }

    clickExport() {
        cy.xpath(this.exportCSVbtn).click()
    }

    checkDownloadModal() {
        cy.get(this.downloadModal)
            .should('be.visible')
            .and('contain', 'Download Report')
    }

    clickDownload() {
        cy.xpath(this.downloadBtn).click()
    }

    checkDownloadSuccess() {
        cy.xpath(this.alertModal)
            .should('contain', 'Download Successful!')
            .and('be.visible')

    }

    clickAnyDate() {
        cy.get(this.anyDateBtn).click()
    }

    clickToday() {
        cy.xpath(this.today).click()
    }

    clickWeek() {
        cy.xpath(this.thisWeek).click()
    }

    clickMonth() {
        cy.xpath(this.thisMonth).click()
    }

    clickLastMonth() {
        cy.xpath(this.lastMonth).click()

    }

    clickCustomDate() {

    }

    clickApply() {
        cy.xpath(this.applyBtn).click()
        cy.wait(2000)
        cy.get("tr[id='0']")
            .should('be.visible')
            .and('contain', 'Horizon')
    }



    clickLockIcon() {
        cy.get(this.lockIcon).click()
    }

    clickLockDevice() {
        cy.xpath(this.lockDeviceBtn)
            .scrollIntoView()
            .click()
    }

    lockSuccess() {
        cy.xpath(this.alertModal)
            .should('contain', 'Device locked successfully')
            .and('be.visible')
    }

    clickUnlockicon() {
        cy.get(this.lockIcon).click()
    }

    clickUnlockDevice() {
        cy.get(this.unlockDeviceBtn).click()
    }

    unlockSuccess() {
        cy.xpath(this.alertModal)
            // .should('contain', 'Device locked successfully')
            .and('be.visible')
    }

    //TERMINAL CONFIGURATION

    clickTerminalConfig() {
        cy.xpath(this.terminalConfigBtn).click()
        cy.xpath("//h6[normalize-space()='Terminal Configuration']")
            .should('be.visible')
    }

    clickAtermonal() {
        cy.get(this.singleTerminal).click()
        cy.xpath(this.terminalInfo)
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                expect(text.toLowerCase()).to.include('terminal information');
            });
    }

    clickBind() {
        cy.xpath(this.bindDeviceBtn).click()
        // 1. Open the dropdown
        cy.get('.form-group-select__control').click();
        cy.get(this.dropdownMenu, { timeout: 10000 }) // adjust selector if needed
            .should('be.visible')
            .find(this.deviceDropdown) // each option in the dropdown
            .then(($options) => {
                const optionCount = $options.length;
                const randomIndex = Math.floor(Math.random() * optionCount);
                // 3. Click a random option
                cy.wrap($options[randomIndex]).click();

            });
        cy.get(this.submitBind).click()
        cy.xpath(this.alertModal).should('contain', 'Device Bound Successfully').and('be.visible')
    }

    clickUnbind() {
        cy.xpath(this.unbindBtn).click()
        cy.xpath(this.confirmUnbind).click()
        cy.xpath(this.alertModal).should('contain', 'Device Unbound Successfully').and('be.visible')

    }





    //REMOTE ASSISTANCE

    clickRemoteAssit() {
        cy.xpath(this.remoteAsstBtn).click()
    }

    searchTerminal() {
        cy.get(this.searchField).type('2DS35465')

    }

    clickSearch() {
        cy.xpath(this.searchItem).click()
    }

    clickInactive() {
        cy.xpath(this.inactiveBtn).click()
        cy.get(this.confirmInactive).click()
        cy.xpath(this.alertModal).should('contain', 'Operation Successful!').and('be.visible')
    }

    clickActive() {
        cy.xpath(this.activeBtn).click()
        cy.xpath(this.confirmActive).click()
        cy.xpath(this.alertModal).should('contain', 'Operation Successful!').and('be.visible')

    }

    filterByInactive() {
        cy.get(this.filterDropdown).click()
        cy.get(this.filterInactive).click()
        cy.get(this.saveFilter).click()
        cy.get('.text-center.pill--danger')
            .should('be.visible')
            .should('contain.text', 'Inactive')
    }

    clickaTerminal() {
        cy.get(this.filteredItem).click()
    }

    filterByActive() {
        cy.get(this.filterDropdown).click()
        cy.get(this.filterActive).click()
        cy.get(this.saveFilter).click()
        cy.get("tr[id='0'] div[class='sc-jEACwC bTEpyP']")
            .should('be.visible')
            .should('contain.text', 'Active')
    }





}
export default TerminalMgt