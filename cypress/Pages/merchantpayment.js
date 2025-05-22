import { faker } from "@faker-js/faker"
const randomTID = `3G${faker.string.numeric(6)}`

class merchantPay {
    organization = "//h4[normalize-space()='Organization']"
    sub_institute = "//h5[normalize-space()='sub-institution']"
    merchant = "//h5[normalize-space()='merchants']"
    manager = "//h5[normalize-space()='managers']"
    terminal = "//h5[contains(text(),'terminals')]"
    transaction_value = "//span[contains(@class,'text-uppercase text--grey')][normalize-space()='Transaction value']"
    commission_value = "//span[contains(@class,'text-uppercase text--grey')][normalize-space()='commission value']"
    transaction_status = "//h4[normalize-space()='Transaction Status']"
    chargeback_status = "//h4[normalize-space()='Chargeback Status']"
    transactionBtn = "//span[normalize-space()='Transactions']"
    totalTransaction = "//span[@class='text-uppercase text--grey'][normalize-space()='Total Transaction value']"
    totalVolume = "//span[contains(@class,'text-uppercase text--grey')][normalize-space()='Transaction volume']"
    chargeBack = "//span[contains(@class,'text-uppercase text--grey')][normalize-space()='chargeback value']"
    chargeVol = "//span[contains(@class,'text-uppercase text--grey')][normalize-space()='chargeback volume']"
    cardBtn = "//a[normalize-space()='Cards']"
    anyDateBtn = "//button[@id='dateFilterDropdown']"
    applyBtn = "//button[normalize-space()='Apply']"
    today = "//label[normalize-space()='Today']"
    thisWeek = "//label[normalize-space()='This Week']"
    thisMonth = "//label[normalize-space()='This Month']"
    lastMonth = "//label[normalize-space()='Last Month']"
    filterBtn = "button#filterDropdownButton"
    terminalIDfield = "#terminalId"
    saveFilter = "button[type='submit']"
    visa = "label[for='visa']"
    verve = "input[name='verve']"
    masterCard = "input[name='mastercard']"
    exportBtn = "//span[normalize-space()='Export CSV']"
    downloadModal = ".primary__header"
    downloadBtn = "//button[normalize-space()='Download']"
    alertModal = "//div[@role='alert']"
    searchField = "#searchQuery"
    disputeLink = "//a[normalize-space()='Dispute']"
    disputeCard = ".row.py-4"
    disputeTable = ".table__wrapper"
    transRefField = "#transactionRRN"
    chargeBackLink = "//a[normalize-space()='Chargeback']"
    chargeCard = ".row.py-4"
    chargeBackTable = ".table__head"
    TerminalModule = "//span[contains(text(),'Terminals')]"
    TerminalCard = ".row.py-4"
    TerminalTable = ".table__head"
    enterTermid = "#terminalId"
    termVerify = "tr[id='0']"
    merchantID = "#merchantId"
    filterTable = ".table__body"
    serialNumberField = "#serialNumber"
    activeRadio = "#Locked"
    inactiveRadio = "#Unlocked"
    addnewTerminalBtn = "button[class='btn btn--secondary']"
    tidField = "#terminalId"
    createTerminalBtn = "button[class='btn btn--secondary ms-3']"
    generateTID = "//label[contains(text(),'Generate TID')]"
    singleTerminal = "tr[id='1'] td:nth-child(2)"
    editTerminalBtn = "//button[normalize-space()='Edit Terminal']"





    //DASHBOARD
    organ() {
        cy.xpath(this.organization)
            .should('contain', 'Organization')
            .and('be.visible')
    }

    subInst() {
        cy.xpath(this.sub_institute)
            .should('contain', 'sub-institution')
            .and('be.visible')
    }

    merch() {
        cy.xpath(this.merchant)
            .should('contain', 'merchants')
            .and('be.visible')
    }

    mang() {
        cy.xpath(this.manager)
            .should('have.css', 'text-transform', 'uppercase')
            .and('be.visible')

    }

    term() {
        cy.xpath(this.terminal)
            .should('have.css', 'text-transform', 'uppercase')
            .and('be.visible')

    }


    //TRANSACTION
    clickTransaction() {
        cy.xpath(this.transactionBtn).click()
    }
    checkTotalTransValue() {
        cy.xpath(this.totalTransaction)
            .should('have.css', 'text-transform', 'uppercase')
            .and('be.visible')

    }
    checkTransVol() {
        cy.xpath(this.totalVolume)
            .should('have.css', 'text-transform', 'uppercase')
            .and('be.visible')

    }
    checkChargeVal() {
        cy.xpath(this.chargeBack)
            .should('have.css', 'text-transform', 'uppercase')
            .and('be.visible')
    }
    checkchargeVol() {
        cy.xpath(this.chargeVol)
            .should('have.css', 'text-transform', 'uppercase')
            .and('be.visible')
    }

    //cards
    clickCard() {
        cy.xpath(this.cardBtn).click()
    }
    clickAnyDate() {
        cy.xpath(this.anyDateBtn).click()
    }
    filterToday() {
        cy.xpath(this.today).click()
    }
    filterWeek() {
        cy.xpath(this.thisWeek).click()
    }
    filterMonth() {
        cy.xpath(this.thisMonth).click()
    }
    filterLastMonth() {
        cy.xpath(this.lastMonth).click()
    }

    clickApply() {
        cy.xpath(this.applyBtn).click()
    }

    clickFilter() {
        cy.get(this.filterBtn).click()
    }
    enterTerminalID() {
        cy.get(this.terminalIDfield)
            .clear()
            .type('2BFS7351')
    }
    clickSave() {
        cy.get(this.saveFilter).click()
    }

    filterVisa() {
        cy.get(this.filterBtn).click();
        cy.get('.dropdown-menu').should('be.visible')
        cy.contains('label', 'Visa').click()
        cy.get("tr[id='0']")
            .should('be.visible')

    }
    filterVerve() {
        cy.get(this.verve).check()
        cy.get("tr[id='0']")
            .should('be.visible')
    }
    filterMastercard() {
        cy.get(this.masterCard).check()
        cy.get("tr[id='0']")
            .should('be.visible')
    }

    clickExport() {
        cy.xpath(this.exportBtn).click()
    }

    downloadmodal() {
        cy.get(this.downloadModal)
            .should('be.visible')
            .and('contain', 'Download Report')

    }
    downloadButton() {
        cy.xpath(this.downloadBtn).click()

    }
    downloadSuccess() {
        cy.xpath(this.alertModal)
            .should('contain', 'Download Successful!')
            .and('be.visible')
    }

    clicksearchBox() {
        cy.get(this.searchField).click()
    }
    enterRRN() {
        cy.get(this.searchField)
            .clear()
            .type('688045350047')
    }

    verifyRRN() {
        cy.get('.table__body')
            .should('contain', '688045350047')
            .and('be.visible')
    }

    transaction() {
        cy.get("tr[id='0']").click()
    }

    transInfo() {
        cy.get(".modal-content")
            .should('contain', 'Transaction Information')
            .and('contain', 'Transaction details')
            .and('contain', ' Transaction id')
            .and('contain', 'TERMINAL DETAILS')
            .and('contain', 'chArges disTributions')
            .and('contain', 'card INFORMATION')
            .and('contain', 'POS Device information')
            .and('contain', 'tRANSACTION TiMELINE')

    }

    clickDispute() {
        cy.xpath(this.disputeLink).click()
    }

    verifyPage() {
        cy.get(this.disputeCard)
            .should('contain', 'Pending Dispute Value')
            .should('contain', 'Resolved Dispute Value')
            .should('contain', 'Closed Dispute Value')
            .should('contain', 'Dispute Volume')

        cy.get(this.disputeTable)
            .should('contain', 'Merchant Name')
            .and('contain', 'dispute ID')
            .and('contain', 'type')
            .and('contain', 'amount')
            .and('contain', 'STATUS')
            .and('contain', 'Date Created')
    }

    enterTranRef() {
        cy.get(this.transRefField)
            .clear()
            .type('208086355465')
    }

    filterResolved() {
        cy.get(this.filterBtn).click();
        cy.get('.dropdown-menu').should('be.visible')
        cy.contains('label', 'Resolved').click()

    }
    filterPending() {
        cy.get(this.filterBtn).click();
        cy.get(this.filterBtn).click();
        cy.get('.dropdown-menu').should('be.visible')
        cy.contains('label', 'Pending').click()
    }

    filterClosed() {
        cy.get(this.filterBtn).click();
        cy.get(this.filterBtn).click();
        cy.get('.dropdown-menu').should('be.visible')
        cy.contains('label', 'Closed').click()
    }

    enterDisputeID() {
        cy.get(this.searchField)
            .clear()
            .type('DPe955bab9b46a4c789ab711bedf3430f6')
    }
    confirmDispute() {
        cy.get('.table__body')
            .should('contain', 'DPe955bab9b46a4c789ab711bedf3430f6')
            .and('be.visible')
    }

    clickChargeback() {
        cy.xpath(this.chargeBackLink).click()
    }
    verifyChargeBack() {
        cy.get(this.chargeCard)
            .should('contain', 'Pending Chargeback Value')
            .and('contain', 'Resolved Chargeback Value')
            .and('contain', 'Closed Chargeback Value')
            .and('contain', 'Chargeback Volume')

        cy.get(this.chargeBackTable)
            .should('contain', 'Merchant Name')
            .and('contain', 'dispute ID')
            .and('contain', 'amount')
            .and('contain', 'Charges')
            .and('contain', 'STATUS')
            .and('contain', 'Date')
    }

    clicksuccess() {

    }
    clickfailed() {

    }
    clickpending() {

    }

    inputDisputeID() {
        cy.get(this.searchField)
            .clear()
            .type('d83f9e2b4c1a4738bc2e5f9a1d7e8c3f')
    }




    //TERMINALS
    clickTerminal() {
        cy.xpath(this.TerminalModule).click()
    }
    verifyTerminalPage() {
        cy.get(this.TerminalCard)
            .should('contain', 'Terminals')
            .and('contain', 'Active Terminals')
            .and('contain', 'Inactive Terminals')

        cy.get(this.TerminalTable)
            .should('contain', 'TID')
            .and('contain', 'MERCHANT NAME')
            .and('contain', 'MERCHANT ID')
            .and('contain', 'SERIAL NUMBER')
            .and('contain', 'DATE CREATED')
            .and('contain', 'STATUS')
    }

    enterTermID() {
        cy.get(this.enterTermid)
            .type('2VFS8992')
    }

    verifyTerminalID() {
        cy.get(this.termVerify)
            .should('contain', '2VFS8992')
    }

    enterMerchantID() {
        cy.get(this.merchantID)
            .type('2BFS27774458711')
    }

    verifyMerchantID() {
        cy.get(this.filterTable, { timeout: 10000 })
            .should('contain', '2BFS27774458711')
    }

    enterSerialNumber() {
        cy.get(this.serialNumberField)
            .type('S532023441')
    }

    VerifySerialNumber() {
        cy.get(this.filterTable)
            .should('contain', 'S532023441')
    }

    clickActive() {
        cy.get(this.activeRadio).click()
    }

    verifyActive() {
        cy.get(this.filterTable)
            .should('contain', 'Active')
            .and('be.visible')
    }

    clickInactive() {
        cy.get(this.inactiveRadio).click()
    }
    verifyInactive() {
        cy.get(this.filterTable)
            .should('contain', 'Inactive')
            .and('be.visible')

    }
    searchTID() {
        cy.get(this.searchField)
            .clear()
            .type('2VFS8992')
    }
    searchMerchantID() {
        cy.get(this.searchField)
            .clear()
            .type('2BFS27774458711')
    }
    clickAddNewTerminal() {
        cy.get(this.addnewTerminalBtn)
            .should('contain', ' Add New Terminal')
            .and('be.visible')
            .click()
    }
    selMerchantDropdown() {
        cy.get('.form-group-select__control').click();
        cy.get('.form-group-select__option')
            .should('be.visible')
            .then($options => {
                const count = $options.length;
                const randomIndex = Math.floor(Math.random() * count);
                cy.wrap($options[randomIndex]).click();
            });

    }
    inputTID() {
        cy.get(this.tidField).type(randomTID)
    }
    clickCreateTerminal() {
        cy.get(this.createTerminalBtn).click()
    }
    terminalAddedSuccess() {
        cy.xpath(this.alertModal)
            .should('contain', 'Success')
            .and('be.visible')
    }
    generateTIDRadio() {
        cy.xpath(this.generateTID).click()
    }

    clickSingleTerminal() {
        cy.get(this.singleTerminal).click()
    }
    clickEditTerminal() {
        cy.xpath(this.editTerminalBtn).click()
    }
    changeMerchant() {
 

    }
    clickSaveButton() {

    }
    changeSuccess() {

    }
}
export default merchantPay