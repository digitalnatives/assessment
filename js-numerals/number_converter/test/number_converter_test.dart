import 'package:flutter_test/flutter_test.dart';
import 'package:number_converter/src/core/utils/constants.dart';
import 'package:number_converter/src/domain/entities/number_converter.dart';

void main()
{
  group('Two digit converter', () {
    
    test('Convert 0', () {
      expect(NumberConverter().twoDigit(0), kZero);
    });

     test('Convert 100 (Throw Error)', () {
       try{
        NumberConverter().twoDigit(100);
         fail('Did not throw error');
       }
       catch (e)
       {
         completes;
       }

    });
     test('Convert -1 (Throw Error)', () {
       try{
        NumberConverter().twoDigit(-1);
         fail('Did not throw error');
       }
       catch (e)
       {
         completes;
       }
    });
    
    test('Convert 1', () {
      expect(NumberConverter().twoDigit(1), kOne);
    });

    test('Convert 2', () {
      expect(NumberConverter().twoDigit(2), kTwo);
    });

    test('Convert 3', () {
      expect(NumberConverter().twoDigit(3), kThree);
    });

    test('Convert 4', () {
      expect(NumberConverter().twoDigit(4), kFour);
    });

    test('Convert 5', () {
      expect(NumberConverter().twoDigit(5), kFive);
    });
    test('Convert 6', () {
      expect(NumberConverter().twoDigit(6), kSix);
    });
    test('Convert 7', () {
      expect(NumberConverter().twoDigit(7), kSeven);
    });
    test('Convert 8', () {
      expect(NumberConverter().twoDigit(8), kEight);
    });
    test('Convert 9', () {
      expect(NumberConverter().twoDigit(9), kNine);
    });
    test('Convert 10', () {
      expect(NumberConverter().twoDigit(10), kTen);
    });
    test('Convert 11', () {
      expect(NumberConverter().twoDigit(11), kEleven);
    });
    test('Convert 12', () {
      expect(NumberConverter().twoDigit(12), kTwelve);
    });
    test('Convert 13', () {
      expect(NumberConverter().twoDigit(13), kThirteen);
    });
    test('Convert 14', () {
      expect(NumberConverter().twoDigit(14), kFourteen);
    });
    test('Convert 15', () {
      expect(NumberConverter().twoDigit(15), kFifteen);
    });
    test('Convert 16', () {
      expect(NumberConverter().twoDigit(16), kSixteen);
    });
    test('Convert 17', () {
      expect(NumberConverter().twoDigit(17), kSeventeen);
    });
    test('Convert 18', () {
      expect(NumberConverter().twoDigit(18), kEighteen);
    });
    test('Convert 19', () {
      expect(NumberConverter().twoDigit(19), kNineteen);
    });
    test('Convert 20', () {
      expect(NumberConverter().twoDigit(20), kTwenty);
    });
     test('Convert 21', () {
      expect(NumberConverter().twoDigit(21), kTwenty+'-'+kOne);
    });
    test('Convert 32', () {
      expect(NumberConverter().twoDigit(32), kThirty+'-'+kTwo);
    });
    test('Convert 43', () {
      expect(NumberConverter().twoDigit(43), kFourty+'-'+kThree);
    });
    test('Convert 54', () {
      expect(NumberConverter().twoDigit(54), kFifty+'-'+kFour);
    });
    test('Convert 65', () {
      expect(NumberConverter().twoDigit(65), kSixty+'-'+kFive);
    });
    test('Convert 76', () {
      expect(NumberConverter().twoDigit(76), kSeventy+'-'+kSix);
    });
    test('Convert 87', () {
      expect(NumberConverter().twoDigit(87), kEighty+'-'+kSeven);
    });
    test('Convert 98', () {
      expect(NumberConverter().twoDigit(98), kNinety+'-'+kEight);
    });
     test('Convert 99', () {
      expect(NumberConverter().twoDigit(99), kNinety+'-'+kNine);
    });
   
   
  });
}