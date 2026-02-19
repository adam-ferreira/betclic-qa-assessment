@footer @ui
Feature: Footer
  In order to provide some mandatory information to the user in the footer
  As a user
  I want to see footer mandatory elements and access to the pages and their content

  @linksAndPages
  Scenario: Links and pages content by ui
    Given a user coming to Betclic
    When the user goes to the link in footer
      | item               | linkName                           | expectedDescription                                                                                    |
      | responsibleGaming  | Jeu responsable                    | Le jeu est avant tout un divertissement.                                                               |
      | termsAndConditions | Conditions générales d’utilisation | Les présentes Conditions Générales d’Utilisation des Sites Betclic                                     |
      | privacyPolicy      | Respect de la vie privée           | La société Betclic Enterprises Limited                                                                 |
    Then the user should see text content in the page
