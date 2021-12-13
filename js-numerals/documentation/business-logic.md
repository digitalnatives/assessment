# User Stories
As a 'User' I'd like to be able to 'convert an integer into it's english text form'.


# User Interface structure
Title: 'Number Converter'

Input: TextBox (input is called N from this point)

Validattion:
- Only number characters (0-9)
- Length: 1 - 12 (max number: 999 999 999 999 - nine hundred and ninety-nine billion ....) (Platform maximum: 2 147 483 647 (int32) )
- Parsable as a Natural Number (0 and above)

Output: Text
Value: English text form or Error message
# Constants
Every unique character (number_rules.md) and it's text form has to be hard coded. Naming scheme: k+Textname (example: 12 - kTwelve)
# Conversion
Prerequisite: N is already validated, converted to a natural number (integer)

Output: String, Text form of the integer

three subfunction needed:
- 3 digit converter: convert a number between 0-999 to its text form
- is 'and' needed: is 'and' word needed
- what 1000s word needed 

## Calculate
Divite N into groups of three (named M). If cannot divide without remainder, then the left most (biggest) should be the short.

M can have 1-4, 1-3 digit integers.

For every M (biggest to smallest):
- Calculate the 3 digit conversion (subfunction)
- Calculate the unique 1000s word if needed (subfunction)
- Calculate if 'and' is needed (subfunction)

---
# Subfunctions

## Subfunction: 2 digit converter
Parameter: 1-2 digit integer

Output: English text form. Until 20 return hard coded value. After 20 tens + singular values combined together with '-'.

## Subfunction: 3 digit converter
Parameter: 1-3 digit integer

Output: English text form (Inside 'and's included)
Calculate:
- Hundreds
- Is inner And needed
- 2 digit converter

## Subfunction: Unique 1000s word 
Parameters: whole integer M index (1-4)

| Input | Output |
| - | - |
| 4  | 'Trillion' | 
| 3  | 'Million' | 
| 2  | 'Thousand' | 
| 1  | (None) | 


## Subfunction: Is outer 'and' Needed
Parameters: Smaller 1-3 digit integer (well be called on M index-1)
Output: Boolean
if (The 3 digit number is smaller than 100) return true
else return false

