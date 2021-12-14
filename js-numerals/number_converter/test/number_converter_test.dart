import 'package:flutter_test/flutter_test.dart';
import 'package:number_converter/src/core/utils/constants.dart';
import 'package:number_converter/src/domain/entities/number_converter.dart';

void main() {
  group('Two digit converter', () {
    test('Convert 0', () {
      expect(NumberConverter().twoDigit(0), kZero);
    });

    test('Convert 100 (Throw Error)', () {
      try {
        NumberConverter().twoDigit(100);
        fail('Did not throw error');
      } catch (e) {
        completes;
      }
    });
    test('Convert -1 (Throw Error)', () {
      try {
        NumberConverter().twoDigit(-1);
        fail('Did not throw error');
      } catch (e) {
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
      expect(NumberConverter().twoDigit(21), kTwenty + '-' + kOne);
    });
    test('Convert 32', () {
      expect(NumberConverter().twoDigit(32), kThirty + '-' + kTwo);
    });
    test('Convert 43', () {
      expect(NumberConverter().twoDigit(43), kFourty + '-' + kThree);
    });
    test('Convert 54', () {
      expect(NumberConverter().twoDigit(54), kFifty + '-' + kFour);
    });
    test('Convert 65', () {
      expect(NumberConverter().twoDigit(65), kSixty + '-' + kFive);
    });
    test('Convert 76', () {
      expect(NumberConverter().twoDigit(76), kSeventy + '-' + kSix);
    });
    test('Convert 87', () {
      expect(NumberConverter().twoDigit(87), kEighty + '-' + kSeven);
    });
    test('Convert 98', () {
      expect(NumberConverter().twoDigit(98), kNinety + '-' + kEight);
    });
    test('Convert 99', () {
      expect(NumberConverter().twoDigit(99), kNinety + '-' + kNine);
    });
  });

  group('Three digit converter', () {
    test('Convert 0', () {
      expect(NumberConverter().threeDigit(0), kZero);
    });
    test('Convert -1 (Throw Error)', () {
      try {
        NumberConverter().threeDigit(-1);
        fail('Did not throw error');
      } catch (e) {
        completes;
      }
    });
    test('Convert 1000 (Throw Error)', () {
      try {
        NumberConverter().threeDigit(1000);
        fail('Did not throw error');
      } catch (e) {
        completes;
      }
    });

    test('Convert 65', () {
      expect(NumberConverter().threeDigit(65), kSixty + '-' + kFive);
    });
    test('Convert 99', () {
      expect(NumberConverter().threeDigit(99), kNinety + '-' + kNine);
    });
    test('Convert 100', () {
      expect(NumberConverter().threeDigit(100), kOne + ' ' + kHundred);
    });
    test('Convert 101', () {
      expect(NumberConverter().threeDigit(101),
          kOne + ' ' + kHundred + ' and ' + kOne);
    });
    test('Convert 109', () {
      expect(NumberConverter().threeDigit(109),
          kOne + ' ' + kHundred + ' and ' + kNine);
    });
    test('Convert 110', () {
      expect(NumberConverter().threeDigit(110),
          kOne + ' ' + kHundred + ' and ' + kTen);
    });
    test('Convert 176', () {
      expect(NumberConverter().threeDigit(176),
          kOne + ' ' + kHundred + ' and ' + kSeventy + '-' + kSix);
    });
    test('Convert 232', () {
      expect(NumberConverter().threeDigit(232),
          kTwo + ' ' + kHundred + ' and ' + kThirty + '-' + kTwo);
    });
    test('Convert 309', () {
      expect(NumberConverter().threeDigit(309),
          kThree + ' ' + kHundred + ' and ' + kNine);
    });
    test('Convert 443', () {
      expect(NumberConverter().threeDigit(443),
          kFour + ' ' + kHundred + ' and ' + kFourty + '-' + kThree);
    });
    test('Convert 512', () {
      expect(NumberConverter().threeDigit(512),
          kFive + ' ' + kHundred + ' and ' + kTwelve);
    });
    test('Convert 611', () {
      expect(NumberConverter().threeDigit(611),
          kSix + ' ' + kHundred + ' and ' + kEleven);
    });
    test('Convert 799', () {
      expect(NumberConverter().threeDigit(799),
          kSeven + ' ' + kHundred + ' and ' + kNinety + '-' + kNine);
    });
    test('Convert 800', () {
      expect(NumberConverter().threeDigit(800), kEight + ' ' + kHundred);
    });
    test('Convert 904', () {
      expect(NumberConverter().threeDigit(904),
          kNine + ' ' + kHundred + ' and ' + kFour);
    });
    test('Convert 999', () {
      expect(NumberConverter().threeDigit(999),
          kNine + ' ' + kHundred + ' and ' + kNinety + '-' + kNine);
    });
  });
  group('Total converter', () {
    test('Convert 0', () {
      expect(NumberConverter().convert(0), kZero);
    });

    test('Convert 1 111 111 111 111 (Throw Error)', () {
      try {
        NumberConverter().convert(1111111111111);
        fail('Did not throw error');
      } catch (e) {
        completes;
      }
    });
    test('Convert 1', () {
      expect(NumberConverter().convert(1), kOne);
    });

    test('Convert 342', () {
      expect(NumberConverter().convert(342),
          kThree + ' ' + kHundred + ' and ' + kFourty + '-' + kTwo);
    });

    test('Convert 999', () {
      expect(NumberConverter().convert(999),
          kNine + ' ' + kHundred + ' and ' + kNinety + '-' + kNine);
    });
    test('Convert 1000', () {
      expect(NumberConverter().convert(1000), kOne + ' ' + kThousand);
    });
    test('Convert 1001', () {
      expect(NumberConverter().convert(1001),
          kOne + ' ' + kThousand + ' and ' + kOne);
    });
    test('Convert 1099', () {
      expect(NumberConverter().convert(1099),
          kOne + ' ' + kThousand + ' and ' + kNinety + '-' + kNine);
    });
    test('Convert 1100', () {
      expect(NumberConverter().convert(1100),
          kOne + ' ' + kThousand + ' ' + kOne + ' ' + kHundred);
    });
    test('Convert 2493', () {
      expect(
          NumberConverter().convert(2493),
          kTwo +
              ' ' +
              kThousand +
              ' ' +
              kFour +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kThree);
    });

    test('Convert 10000', () {
      expect(NumberConverter().convert(10000), kTen + ' ' + kThousand);
    });

    test('Convert 10001', () {
      expect(NumberConverter().convert(10001),
          kTen + ' ' + kThousand + ' and ' + kOne);
    });

    test('Convert 99999', () {
      expect(
          NumberConverter().convert(99999),
          kNinety +
              '-' +
              kNine +
              ' ' +
              kThousand +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine);
    });

    test('Convert 1 000 000', () {
      expect(NumberConverter().convert(1000000), kOne + ' ' + kMillion);
    });

    test('Convert 1 000 001', () {
      expect(NumberConverter().convert(1000001),
          kOne + ' ' + kMillion + ' and ' + kOne);
    });

    test('Convert 1 000 099', () {
      expect(NumberConverter().convert(1000099),
          kOne + ' ' + kMillion + ' and ' + kNinety + '-' + kNine);
    });

    test('Convert 1 000 100', () {
      expect(NumberConverter().convert(1000100),
          kOne + ' ' + kMillion + ' ' + kOne + ' ' + kHundred);
    });

    test('Convert 999 999 999', () {
      expect(
          NumberConverter().convert(999999999),
          kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kMillion +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kThousand +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine);
    });

    test('Convert 1 000 000 000', () {
      expect(NumberConverter().convert(1000000000), kOne + ' ' + kBillion);
    });
    test('Convert 1 000 000 001', () {
      expect(NumberConverter().convert(1000000001),
          kOne + ' ' + kBillion + ' and ' + kOne);
    });
    test('Convert 1 000 000 099', () {
      expect(NumberConverter().convert(1000000099),
          kOne + ' ' + kBillion + ' and ' + kNinety + '-' + kNine);
    });
    test('Convert 1 000 000 100', () {
      expect(NumberConverter().convert(1000000100),
          kOne + ' ' + kBillion + ' ' + kOne + ' ' + kHundred);
    });

    test('Convert 999 999 999 999', () {
      expect(
          NumberConverter().convert(999999999999),
          kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kBillion +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kMillion +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kThousand +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine);
    });
    test('Convert 1 000 000 000 000', () {
      expect(
          NumberConverter().convert(1000000000000),
          kOne +
              ' ' +
              kTrillion);
    });
    test('Convert 1 000 000 000 001', () {
      expect(
          NumberConverter().convert(1000000000001),
          kOne +
              ' ' +
              kTrillion+ ' and '+kOne);
    });
    test('Convert 1 000 000 000 099', () {
      expect(
          NumberConverter().convert(1000000000099),
          kOne +
              ' ' +
              kTrillion + ' and '+ kNinety +
              '-' +
              kNine);
    });
    test('Convert 1 000 000 000 100', () {
      expect(
          NumberConverter().convert(1000000000100),
          kOne +
              ' ' +
              kTrillion +' '+kOne+' '+kHundred);
    });
    test('Convert 999 999 999 999 999', () {
      expect(
          NumberConverter().convert(999999999999999),
          kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kTrillion +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kBillion +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kMillion +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine +
              ' ' +
              kThousand +
              ' ' +
              kNine +
              ' ' +
              kHundred +
              ' and ' +
              kNinety +
              '-' +
              kNine);
    });

    test('Convert 7', () {
      expect(NumberConverter().convert(7), kSeven);
    });

    test('Convert 42', () {
      expect(NumberConverter().convert(42), kFourty + '-' + kTwo);
    });

    test('Convert 2001', () {
      expect(NumberConverter().convert(2001),
          kTwo + ' ' + kThousand + ' and ' + kOne);
    });

    test('Convert 1300420', () {
      expect(
          NumberConverter().convert(1300420),
          kOne +
              ' ' +
              kMillion +
              ' ' +
              kThree +
              ' ' +
              kHundred +
              ' ' +
              kThousand +
              ' ' +
              kFour +
              ' ' +
              kHundred +
              ' and ' +
              kTwenty);
    });
  });
}
