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
    merPay.downloadBtn()
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

//TERMINALS

//FINANCIALS
