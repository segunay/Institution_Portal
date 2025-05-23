Feature: MERCHANT PAYMENT




    Background: LOGIN
        Given I am on the home page
        Then I login successfully
        Then I am on the dashboard


    Scenario: Verify all the elements on the Dashboard are visible
        When I am on the Dashboard
        Then I check if the Organisation card is visible
        Then I check if the Organisation card contains sub-INSTITUTION count
        Then I check if the Organisation card contains MERCHANT count
        Then I check if the Organisation card contains Managers count
        Then I check if the Organisation card contains Terminals count


    Scenario: Verify the Transaction page is accessible and contains neccessary information
        When I click on Transaction
        Then I check if the Total Transaction Value is visible
        Then I check if the Transaction Volume is visible
        Then I check if the chargeback value is visible
        Then I check if the chargeback volume is visible


    Scenario: Verify user can filter by Date created on the Card module
        When I click on Transaction
        Then I click on Cards
        Then I click on Any Date Button
        Then I click filter by Today
        Then I click filter by This Week
        Then I click filter by This Month
        Then I click filter by Last Month


    Scenario: Verify user can filter by Terminal ID
        When I click on Transaction
        Then I click on Cards
        Then I click on filter Button
        Then I enter the Terminal ID
        Then I click Save Filter

    @skip
    Scenario: Verify I can filter by status (Successful and Failed)
        When I click on Transaction
        Then I click on Cards
        Then I click on filter Button
        Then I filter by successful Transaction
        Then I filter by failed Transaction


    Scenario: Verify I can filter by card status (Verve, Visa and MAstercard)
        When I click on Transaction
        Then I click on Cards
        Then I click on filter Button
        Then I filter by Visa
        Then I filter by Verve
        Then I filter by Mastercard


    Scenario: Verify user can Export CSV file
        When I click on Transaction
        Then I click on Cards
        Then I click on Export CSV Button
        Then I confirm the download Report
        Then I click on Download Button
        Then I confirm the document is downloaded successfully


    Scenario: Verify user can Search using RRN
        When I click on Transaction
        Then I click on Cards
        Then I click on the searchbox
        Then I enter the RRN
        Then I confirm it return the correct transaction with the RRN


    Scenario: Verify user can view a Transaction Information
        When I click on Transaction
        Then I click on Cards
        Then I click on a transaction
        Then I validate the transaction information details


    @skip
    Scenario: Verify user can navigate to the Dispute Page
        When I click on Transaction
        Then I click on Dispute
        Then I validate if the page display neccessary details


    Scenario: Verify user can filter Dispute by day created
        When I click on Transaction
        Then I click on Dispute
        Then I click on Any Date Button
        Then I click filter by Today
        Then I click filter by This Week
        Then I click filter by This Month
        Then I click filter by Last Month


    Scenario: Verify user can filter by Transaction Reference
        When I click on Transaction
        Then I click on Dispute
        Then I click on filter Button
        Then I filter by Transaction Reference Number


    Scenario: Verify user can filter by Dispute Status (Resolve, Pending and Closed)
        When I click on Transaction
        Then I click on Dispute
        Then I click on filter Button
        Then I filter by Resolved
        Then I filter by Pending
        Then I filter by Closed

    @skip
    Scenario: Verify user can filter by Amount Range
        When I click on Transaction
        Then I click on Dispute
        Then I click on filter Button
        Then I enter the Amount Range


    Scenario: Verify user can Export CSV
        When I click on Transaction
        Then I click on Dispute
        Then I click on Export CSV Button
        Then I confirm the download Report
        Then I click on Download Button
        Then I confirm the document is downloaded successfully

    @skip
    Scenario: Verify user can search for Dispute using Dispute ID
        When I click on Transaction
        Then I click on Dispute
        Then I click on the searchbox
        Then I enter the Dispute ID
        Then I confirm it return the correct transaction with the Dispute ID


    Scenario: Verify user can view a dispute information
        When I click on Transaction
        Then I click on Dispute
    # Then I click on a transaction
    # Then I validate the transaction information details

    @skip
    Scenario: Verify user can navigate to the chargeback page
        When I click on Transaction
        Then I click on chargeback
        Then I validate all neccessary details are displayed


    Scenario: Verify user can filter Chargeback by day created
        When I click on Transaction
        Then I click on chargeback
        Then I click on Any Date Button
        Then I click filter by Today
        Then I click filter by This Week
        Then I click filter by This Month
        Then I click filter by Last Month

    @skip
    Scenario: Verify user can filter by Subscription Status
        When I click on Transaction
        Then I click on chargeback
        Then I click on filter Button
        Then I filter by Successful Status
        Then I filter by Failed Status
        Then I filter by Pending Status


    Scenario: Verify user can Export Chargeback
        When I click on Transaction
        Then I click on chargeback
        Then I click on Export CSV Button
        Then I confirm the download Report
        Then I click on Download Button
        Then I confirm the document is downloaded successfully


    Scenario: Verify user can for ChargeBack using Dispute ID
        When I click on Transaction
        Then I click on chargeback
        Then I click on the searchbox
        Then I Enter the Dispute ID


    Scenario: Verify user can Navigate to the Terminal Module
        When I click on Terminals
        Then I validate all terminal modules displayed all neccessary details


    Scenario: Verify user can filter terminals by day created
        When I click on Terminals
        Then I click on Any Date Button
        Then I click filter by Today
        Then I click filter by This Week
        Then I click filter by This Month
        Then I click filter by Last Month


    Scenario: Verify user can filter by Terminal ID
        When I click on Terminals
        Then I click on filter Button
        Then I enter Terminal ID
        Then I click Save Filter
        Then I verify the system return accurate data


    Scenario: Verify user can filter by Merchant ID
        When I click on Terminals
        Then I click on filter Button
        Then I enter Merchant ID
        Then I click Save Filter
        Then I validate the system return data with the merchant ID


    Scenario: Verify user can filter by Serial Number
        When I click on Terminals
        Then I click on filter Button
        Then I enter Serial Number
        Then I click Save Filter
        Then I validate the system return data with the Serial Number


    Scenario: Verify user can filter by Active Terminal
        When I click on Terminals
        Then I click on filter Button
        Then I click on the Active Radio Button
        Then I click Save Filter
        Then I validate the system return list of Active Terminal


    Scenario: Verify user can filter by Inactive Terminal
        When I click on Terminals
        Then I click on filter Button
        Then I click on the Inactive Radio Button
        Then I click Save Filter
        Then I validate the system return list of Inactive Terminal


    Scenario: Verify user can Export CSV for Terminal
        When I click on Terminals
        Then I click on Export CSV Button
        Then I confirm the download Report
        Then I click on Download Button
        Then I confirm the document is downloaded successfully


    Scenario: Verify user can search for Terminal with TID
        When I click on Terminals
        Then I click on the searchbox
        Then I enter the TID
        Then I verify the system return accurate data


    Scenario: Verify user can search for Terminal with Merchant ID
        When I click on Terminals
        Then I click on the searchbox
        Then I Input the Merchant ID
        Then I validate the system return data with the merchant ID


    Scenario: Verify user can Add New Terminal with Manual TID input
        When I click on Terminals
        Then I click on Add New Terminal
        Then I select Terminal Merchant from the dropdown
        Then I enter Random Terminal ID
        Then I click on Create Terminal Button
        Then I validate the Terminal is added successfully


    Scenario: Verify user can Add New Terminal Autogenerated TID
        When I click on Terminals
        Then I click on Add New Terminal
        Then I click on Generate TID Radio button
        Then I select Terminal Merchant from the dropdown
        Then I click on Create Terminal Button
        Then I validate the Terminal is added successfully


    Scenario: Verify user can Edit Terminal
        When I click on Terminals
        Then I click on a single Terminal
        Then I click Edit Terminal Button
        Then I change the merchant from the merchant dropdown
        Then I click the Save Changes button
        Then I confirm the success message displayed

  
    Scenario: Verify user can Navigate to Finance Module
        When I click on Finance
        Then I validate finance module displayed all neccessary details

  
    Scenario: Verify user can Naviagate to the Commission Page
        When I click on Finance
        Then I click on the Commission Tab
        Then I validate the Commission page display all neccessary details

   
    Scenario: Verify user can Navigate to the Commission Report Page
        When I click on Finance
        Then I click on Commission Report Tab
        Then I validate the comission report page display all neccessary details


    Scenario: Verify user can Naviaget to the Settlement Page
        When I click on Finance
        Then I click on Settlement Tab
        Then I validate the settlement tab page display all neccessary details