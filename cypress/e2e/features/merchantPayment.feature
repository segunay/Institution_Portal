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

