Feature: TERMINAL MANAGEMENT SYSTEM

    Background: LOGIN
        Given I am on the home page
        Then I login successfully
        Then I am on the dashboard
        Given I Click on Terminal Management

 
    Scenario: Verify user can add a new Device Successfully
    Then I Click Add A New Device
    Then I Enter Serial Number
    Then I Select a Manufacturer from the Manufacturer Dropdown
    Then I Select an Attribute Group from the Attribute Group Dropdown
    Then I Select a Device Model from the Device Model Dropdown
    Then I Select multiple Attributes from the Attribute Dropdown
    Then I Click on Add Device Button
    Then I Verify that the Device is Added Successfully

  
    Scenario: Verify user can Filter Device Added by Date
    When I click Any Date Button
    Then I filter by Today 
    Then I filter by This Week 
    Then I filter by This Month
    Then I filter by Last Month
    # Then I filter by Custom Date


    Scenario: Verify user can Lock and Unlock Device Successfully
    When I click on the Lock Icon
    Then I click on Lock Device
    Then I validate the Device is lock Successfully
    Then I click on the Unlock Icon
    Then I click on Unlock Device
    Then I validate the Device is unlocked successfully

    Scenario: Verify user can Edit Device Successfully
    When I click on the Edit Icon
    Then I edit the serial Number
    Then I change the Manufacturer
    Then I change the Attribute Group
    Then I change the Device Modal
    Then I Edit the Device Attribute
    Then I click on the Edit Device Button
    Then I check the Device is editted successfully


    Scenario: Verify user can Delete Device Successfully
    When I click on the Delete Icon
    Then I click on Delete Device on the confirmation Modal
    Then I confirm the Device is deleted successfully

    
    Scenario: Verify user can Export CSV
    When I click on Export CSV
    Then I verify the Download Report Modal
    Then I click on Download Button
    Then I verify the Document is downloaded successfully




#TERMINAL CONFIGURATION
    @only
    Scenario: Verify user can Bind/Unbind Terminal
    When I click on Terminal Configuration
    Then I click on a Terminal
    Then I bind the terminal
    Then I unbind the Terminal



#REMOTE ASSISTANCE
    Scenario: Verify user can search for a Terminal using Terminal ID
    When I navigate to Remote Assistance
    Then I search for a Terminal using the Terminal ID
    Then I click on the Terminal

    
    Scenario: Verify user can Filter Inactive Terminals and make it Active
    When I click on Remote Assistance
    Then I filter by Inactive terminal
    Then I click on a terminal
    Then I make it Active

    @only
    Scenario: Verify user can Filter Active Terminals and make it Inactive
    When I clicked on Remote Assistance
    Then I filter by Active Terminal
    Then I clicked on a Terminal
    Then I make it Inactive


