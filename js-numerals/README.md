# JavaScript/Front-end Developer - Exercise 1

## Instructions

- Fork this project.
- Write tests.
- Don't use external libraries for the conversion.
- Commit the important milestones and not just the final result.

## Exercise description

Create an application that contains a web form, which has a numeric input field and a submit button.

When the user gives an arabic number, the system shows the english phrase of that number.

For example:
<pre>
7    == seven
42   == forty-two
2001 == two thousand and one
1999 == nineteen hundred and ninety-nine
17999 == seventeen thousand nine hundred and ninety-nine
</pre>

That's all.

## My solution description

- I kept everything extremely light-weight. Used no external libaries or frameworks for the conversion and testing as I was instructed ( I could use an actual testing framework if needed)
- Since the examples for numbers in thousands seem contradictory (2001 vs 1999), I decided to go with a sort of mix so 2001 would two thousand one
- The code doesn't check for non integers or max integers although it could be added. But the input field rejects an empty string
- Trailing 0s at the begining cause no issues due to how the conversion works
- An example of the conversion format for 123456789 = One hundred and twenty-three million and four hundred and fifty-six thousand seven hundred and eighty-nine
Everything is joined with an 'and' except thousands as mentioned before
- The input fields allowed characters (e,+,-) don't break the code (just returns an empty string which shows up for the user as "Enter a number"), but they aren't functional.

