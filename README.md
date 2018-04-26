# free-bagels

Scenario Listener is within range
Given Lucy is 15 meters from Sean
When Sean shouts ‘Free Bagels!’
Then Lucy hears Sean's message

Scenario Person isn’t within range
Given Mario is more than 15 meters from Sean
When Sean shouts ‘Free Bagels!’
Then Mario doesn’t hear

