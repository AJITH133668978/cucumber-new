Feature: facebook
Background: common functions
Given launch the browser with url "https://www.facebook.com/"

When click create new account
Scenario: create facebook account

 When user enter the name one dim list
|Mahghvhvh|Sabari|
And user enter the surname one dim list
|Mcxdkk|
And user enter the mail id one dim list
|madasamysabari84@gmail.com|
And re-enter mail id one dim list
|madasamysabari84@gmail.com|
And user enter the password one dim list
|12336988|
Then select the DOB
Then select the gender
Then click Signup



Scenario Outline: create facebook account

When user enter the name "<name>"
And user enter the surname "<surname>"
And user enter the mail id "<mail>"
And re-enter mail id "<remail>"
And user enter the password "<password>"
Then select the DOB
Then select the gender
Then click Signup
Examples:
|name|surname|mail|remail|password|
|ddhcccb|jddlkkld|samysabari84@gmail.com|samysabari84@gmail.com|156565a5a|


