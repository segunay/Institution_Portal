Feature: ORGANISATION

    Background: LOGIN
        Given I am on the home page
        Then I login successfully
        Then I am on the dashboard


    Scenario: Verify user can navigate to the Organisation Page
        When I click on Organisation
        Then I check if the Page load properly


    Scenario: Verify user can Add new Institute
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on Add New Insititue Button
        Then I fill the Admin Contact Form Properly
        Then I click Save & Continue Button
        Then I Fill the Business Profile Information Properly
        Then I click Save & Continue Button
        Then I fill the Support contact form
        Then I click Save & Continue Button
        Then I fill the Business Document Form Properly
        Then I click Save & Continue Button
        Then I fill the Business Contact Information
        Then I click Save & Continue Button
        Then I fill the Directors Form Properly
        Then I click Preview
    #bug around preview, to come back later


    Scenario: Verify user can Send Invite Successfully
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on Send Invite
        Then I enter Institute Name
        Then I enter Institute Email
        Then I click on the Send Invite Button
        Then I confirm a success notification is displayed


    Scenario: Verify user can Export CSV
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on Export CSV Button
        Then I confirm the download Report
        Then I click on Download Button
        Then I confirm the document is downloaded successfully


    Scenario: Verify user can filter by Sub-Institute ID and Sub-Institute Name
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on filter Button
        Then I enter the Sub-institute ID
        Then I click on Save Filter
        Then I confirm the system return the appropriate sub-institute ID
        Then I click on filter Button
        Then I click on Refresh Button
        Then I click on filter Button
        Then I enter the Sub-institute Name
        Then I click on Save Filter
        Then I confirm the system return the appropriate sub-institute Name
    #line 62



    Scenario: Verify user can Add new user to a Sub-Institute
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Kebab Button of an Institute
        Then I click on User Managament
        Then I click on Add New User
        Then I enter user email address
        Then I select the user role
        Then I click on the SEND INVITE button
        Then I confirm a success notification is displayed




    #MERCHANT

    Scenario: Verify user can navigate to the Merchant Tab
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Merhcant Tab
        Then I check if the Merchant Page load Properly


    Scenario: Verify user can Add New Merchant Successfully
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Merhcant Tab
        Then I check if the Merchant Page load Properly
        When I click on the Add New Merchant Button
        Then I enter the new Merchant Name
        Then I enter the Merchant Email
        Then I enter the Merchant Contact Phone Number
        Then I select the Merchant State
        Then I select the Merchant Region
        Then I enter the Merchant address
        Then I click on Add Merchant Button



    Scenario: Verify user can send Invite to Merchant
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Merhcant Tab
        Then I check if the Merchant Page load Properly
        Then I click on Send Invite
        Then I input the Merchant Name
        Then I input the Merchant Email
        Then I click on the Send Invite Button
        Then I confirm a success notification is displayed



    Scenario: Verify user can Export Merchant CSV
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Merhcant Tab
        Then I check if the Merchant Page load Properly
        Then I click on Export CSV Button
        Then I confirm the download Report
        Then I click on Download Button
        Then I confirm the document is downloaded successfully


    Scenario: Verify user can filter by Merchant Name
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Merhcant Tab
        Then I check if the Merchant Page load Properly
        Then I click on filter Button
        Then I Input the Merchant Name
        Then I click on Save Filter
        Then I confirm if the table return the correct merchant name



    Scenario: Verify user can Blacklist a Merchant
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on the Merhcant Tab
        Then I check if the Merchant Page load Properly
        Then I click on a merchant kebab button
        Then I click on User Managament
        Then I click on Invalid Documents
        Then I click on Fradulent Activities
        Then I click on Other? Please specify in notes
        Then I Enter Additional Note
        Then  I click Blacklist Merchant







    #APPLICATION
   
    Scenario: Verify user can Navigate to the Application Tab
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on Application Tab
        Then I click on an institute
        Then I check if the Application Page load Properly


    Scenario: Verify user can download Application as PDF
        When I click on Organisation
        Then I check if the Page load properly
        Then I click on Application Tab
        Then I click on an institute
        Then I check if the Application Page load Properly
        Then I click on Download PDF button
