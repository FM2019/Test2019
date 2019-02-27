@Regression
Feature: test-feature

  Background:
    Given User prints comment "User navigates to the Blog page"
    When User navigates to the "Blog" page with url "https://thinkmobiles.com/blog/"
    Then Page title is equal to "Blog"

  Scenario Outline: 1: Subscription to news
    When User waits 4000 seconds
    And User clicks "Email field" "#blog-subscribe-form > div.form-field"
    And User enters "Email" "#emailSub"
    And User clicks "Subscribe button" "#blog-subscribe-form > div.btn-group.center > button"
    Then "Bunner massage" "#bannerMessage" is displayed
    Examples:
      | email                |
      | testemail@gmail.com  |
      | testemail@@gmail.com |
      | tEstEmaiL@gmail.com  |

#  Scenario 1: View more articles
#    When user clicks on "Show more" button "a.btn.blue.show-more.categoryOption"
#    Then "More articles" will be shown "main.articles-archive.blogPage"

