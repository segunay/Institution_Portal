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
    downloadBtn() {
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
        cy.get('td:nth-child(1)')
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

}
export default merchantPay