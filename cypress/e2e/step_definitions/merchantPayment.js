import merchantPay from "../../Pages/merchantpayment";
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const merPay = new merchantPay


// DASHBOARD
When('I am on the Dashboard', () => {
    merPay.organ()
})
Then('I check if the Organisation card is visible', () => {
    merPay.organ()
})
Then('I check if the Organisation card contains sub-INSTITUTION count', () => {
    merPay.subInst()
})
Then('I check if the Organisation card contains MERCHANT count', () => {
    merPay.merch()
})
Then('I check if the Organisation card contains Managers count', () => {
    merPay.mang()
})
Then('I check if the Organisation card contains Terminals count', () => {
    merPay.term()
})

//TRANSACTIONS
When('I click on Transaction', () => {
    merPay.clickTransaction()
})
Then('I check if the Total Transaction Value is visible', () => {
    merPay.checkTotalTransValue()
})
Then('I check if the Transaction Volume is visible', () => {
    merPay.checkTransVol()
})
Then('I check if the chargeback value is visible', () => {
    merPay.checkChargeVal()
})
Then('I check if the chargeback volume is visible', () => {
    merPay.checkchargeVol()
})

//cards
Then('I click on Cards', () => {
    merPay.clickCard()
})
Then('I click on Any Date Button', () => {
    merPay.clickAnyDate()
})
Then('I click filter by Today', () => {
    merPay.filterToday()
    merPay.clickApply()
})
Then('I click filter by This Week', () => {
    merPay.clickAnyDate()
    merPay.filterWeek()
    merPay.clickApply()
})
Then('I click filter by This Month', () => {
    merPay.clickAnyDate()
    merPay.filterMonth()
    merPay.clickApply()

})
Then('I click filter by Last Month', () => {
    merPay.clickAnyDate()
    merPay.filterLastMonth()
    merPay.clickApply()
})



Then('I click on filter Button', () => {
    merPay.clickFilter()
})
Then('I enter the Terminal ID', () => {
    merPay.enterTerminalID()
})
Then('I click Save Filter', () => {
    merPay.clickSave()
})

Then('I filter by Visa', () => {
    merPay.clickFilter()
    merPay.filterVisa()
    merPay.clickSave()
})
Then('I filter by Verve', () => {
    merPay.clickFilter()
    merPay.filterVerve()
    merPay.clickSave()
})
Then('I filter by Mastercard', () => {
    merPay.clickFilter()
    merPay.filterMastercard()
    merPay.clickSave()
})
Then('I click on Export CSV Button', () => {
    merPay.clickExport()
})
Then('I confirm the download Report', () => {
    merPay.downloadmodal()
})
Then('I Click on Download Button', () => {
    merPay.downloadButton()
})
Then('I confirm the document is downloaded successfully', () => {
    merPay.downloadSuccess()
})


Then('I click on the searchbox', () => {
    merPay.clicksearchBox()
})
Then('I enter the RRN', () => {
    merPay.enterRRN()
})
Then('I confirm it return the correct transaction with the RRN', () => {
    merPay.verifyRRN()
})

Then('I click on a transaction', () => {
    merPay.transaction()
})
Then('I validate the transaction information details', () => {
    merPay.transInfo()
})

Then('I click on Dispute', () => {
    merPay.clickDispute()
})
Then('I validate if the page display neccessary details', () => {
    merPay.verifyPage()
})

Then('I filter by Transaction Reference Number', () => {
    merPay.enterTranRef()
    merPay.clickSave()
})

Then('I filter by Resolved', () => {
    merPay.clickFilter()
    merPay.filterResolved()
    merPay.clickSave()
})
Then('I filter by Pending', () => {
    merPay.clickFilter()
    merPay.filterPending()
    merPay.clickSave()
})
Then('I filter by Closed', () => {
    merPay.clickFilter()
    merPay.filterClosed()
    merPay.clickSave()
})

Then('I enter the Dispute ID', () => {
    merPay.enterDisputeID()
})
Then('I confirm it return the correct transaction with the Dispute ID', () => {
    merPay.confirmDispute()
})

Then('I click on chargeback', () => {
    merPay.clickChargeback()
})
Then('I validate all neccessary details are displayed', () => {
    merPay.verifyChargeBack()
})

Then('I filter by Successful Status', () => {
    merPay.clicksuccess()
})
Then('I filter by Failed Status', () => {
    merPay.clickfailed()
})
Then('I filter by Pending Status', () => {
    merPay.clickpending()
})

Then('I Enter the Dispute ID', () => {
    merPay.inputDisputeID()
})





//TERMINALS

When('I click on Terminals', () => {
    merPay.clickTerminal()
})
Then('I validate all terminal modules displayed all neccessary details', () => {
    merPay.verifyTerminalPage()
})

Then('I enter Terminal ID', () => {
    merPay.enterTermID()
})

Then('I verify the system return accurate data', () => {
    merPay.verifyTerminalID()
})

Then('I enter Merchant ID', () => {
    merPay.enterMerchantID()
})

Then('I validate the system return data with the merchant ID', () => {
    merPay.verifyMerchantID()
})

Then('I enter Serial Number', () => {
    merPay.enterSerialNumber()
})
Then('I validate the system return data with the Serial Number', () => {
    merPay.VerifySerialNumber()
})

Then('I click on the Active Radio Button', () => {
    merPay.clickActive()
})
Then('I validate the system return list of Active Terminal', () => {
    merPay.verifyActive()
})
Then('I click on the Inactive Radio Button', () => {
    merPay.clickInactive()
})
Then('I validate the system return list of Inactive Terminal', () => {
    merPay.verifyInactive()
})
Then('I enter the TID', () => {
    merPay.searchTID()
})
Then('I Input the Merchant ID', () => {
    merPay.searchMerchantID()
})
Then('I click on Add New Terminal', () => {
    merPay.clickAddNewTerminal()
})
Then('I select Terminal Merchant from the dropdown', () => {
    merPay.selMerchantDropdown()
})
Then('I enter Random Terminal ID', () => {
    merPay.inputTID()
})
Then('I click on Create Terminal Button', () => {
    merPay.clickCreateTerminal()
})
Then('I validate the Terminal is added successfully', () => {
    merPay.terminalAddedSuccess()
})
Then('I click on Generate TID Radio button', () => {
    merPay.generateTIDRadio()
})

Then('I click on a single Terminal', () => {
    merPay.clickSingleTerminal()
})
Then('I click Edit Terminal Button', () => {
    merPay.clickEditTerminal()
})
Then('I change the merchant from the merchant dropdown', () => {
    merPay.changeMerchant()
})
Then('I click the Save Changes button', () => {
    merPay.clickSaveButton()
})
Then('I confirm the success message displayed', () => {
    merPay.changeSuccess()
})


//FINANCIALS

When('I click on Finance', () => {
    merPay.clickFinance()
})
Then('I validate finance module displayed all neccessary details', () => {
    merPay.verifyFinance()
})

Then('I click on the Commission Tab', () => {
    merPay.clickCommission()
})
Then('I validate the Commission page display all neccessary details', () => {
    merPay.verifyCommission()
})

Then('I click on Commission Report Tab', () => {
    merPay.clickCommissionReport()
})
Then('I validate the comission report page display all neccessary details', () => {
    merPay.verifyCommisionReport()
})

Then('I click on Settlement Tab', () => {
    merPay.clickSettlementTab()
})
Then('I validate the settlement tab page display all neccessary details', () => {
    merPay.verifySettlementPage()
})
