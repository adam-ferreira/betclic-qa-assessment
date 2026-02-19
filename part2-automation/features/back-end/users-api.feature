@users @api
Feature: Users
    As a employee, I want to manage users through a third-party API

    @getUsers
    Scenario: get list of users
        When the employee gets data from usersApi
        Then data should be provided in the response

    @createUser
    Scenario: create a new user
        When the employee creates a new user
            | name       | gender | status |
            | Stan Smith | male   | active |
        Then the user should be created