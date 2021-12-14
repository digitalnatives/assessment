import 'dart:math';

import 'package:number_converter/src/core/utils/constants.dart';

class NumberConverter implements INumberConverter {
  @override
  bool isOuterAndNeeded(int N) {
    return (N % 1000 < 100 && N % 1000 != 0);
  }

  @override
  String threeDigit(int N, {bool showZero = true}) {
    int length = N.toString().length;
    if (length > 3) throw RangeError("");
    if (length == 3) {
      if (N % 100 != 0) {
        return '${_singles(N ~/ 100)} $kHundred and ${twoDigit(N % 100)}';
      } else {
        return '${_singles(N ~/ 100)} $kHundred';
      }
    } else {
      return twoDigit(N, showZero: showZero);
    }
  }

  String _tens(int N) {
    if (N.toString().length != 2) throw RangeError("");
    switch (N ~/ 10) {
      case 1:
        return kTen;
      case 2:
        return kTwenty;
      case 3:
        return kThirty;
      case 4:
        return kFourty;
      case 5:
        return kFifty;
      case 6:
        return kSixty;
      case 7:
        return kSeventy;
      case 8:
        return kEighty;
      case 9:
        return kNinety;
      default:
        throw Exception();
    }
  }

  bool _isSpaceNeeded(int N, powerOfTen) {
    return N % (pow(10, powerOfTen)) != 0;
  }

  String _singles(int N, {bool showZero = true}) {
    if (N.toString().length != 1) throw RangeError("");
    switch (N) {
      case 0:
        {
          if (showZero) {
            return kZero;
          } else {
            return '';
          }
        }
      case 1:
        {
          return kOne;
        }
      case 2:
        {
          return kTwo;
        }
      case 3:
        {
          return kThree;
        }
      case 4:
        {
          return kFour;
        }
      case 5:
        {
          return kFive;
        }
      case 6:
        {
          return kSix;
        }
      case 7:
        {
          return kSeven;
        }
      case 8:
        {
          return kEight;
        }
      case 9:
        {
          return kNine;
        }
      default:
        {
          throw Exception();
        }
    }
  }

  @override
  String twoDigit(int N, {bool showZero = true}) {
    int length = N.toString().length;
    if (length > 2 || length == 0) throw RangeError("");
    if (length == 1) return _singles(N, showZero: showZero);

    switch (N) {
      case 10:
        {
          return kTen;
        }
      case 11:
        {
          return kEleven;
        }
      case 12:
        {
          return kTwelve;
        }
      case 13:
        {
          return kThirteen;
        }
      case 14:
        {
          return kFourteen;
        }
      case 15:
        {
          return kFifteen;
        }
      case 16:
        {
          return kSixteen;
        }
      case 17:
        {
          return kSeventeen;
        }
      case 18:
        {
          return kEighteen;
        }
      case 19:
        {
          return kNineteen;
        }
      default:
        {
          if (N % 10 != 0) {
            return '${_tens(N)}-${_singles(N % 10, showZero: false)}';
          } else {
            return _tens(N);
          }
        }
    }
  }

  @override
  String convert(int N) {
    int length = N.toString().length;
    if (length > 12 || length < 1) throw RangeError("");
    if (length < 4) return threeDigit(N);
    String result = '';
    int trillions = N ~/ pow(10, 12);
    int billions = (N - (trillions * pow(10, 12))) ~/ pow(10, 9);
    int millions =
        (N - (trillions * pow(10, 12) + billions * pow(10, 9))) ~/ pow(10, 6);
    int thousands = (N -
            (trillions * pow(10, 12) +
                billions * pow(10, 9) +
                millions * pow(10, 6))) ~/
        pow(10, 3);
    if (trillions > 0) {
      result += "${threeDigit(trillions)} $kTrillion";
      if (_isSpaceNeeded(N, 12)) {
      result += ' ';
    }
    }
    
    if (billions > 0) {
      result += "${threeDigit(billions)} $kBillion";
      if (_isSpaceNeeded(N, 9)) {
      result += ' ';
    }
    }
    
    if (millions > 0) {
      result += "${threeDigit(millions)} $kMillion";
      if (_isSpaceNeeded(N, 6)) {
      result += ' ';
    }
    }
    
    if (thousands > 0) {
      result += "${threeDigit(thousands)} $kThousand";
      if (_isSpaceNeeded(N, 3)) {
      result += ' ';
    }
    }
    
    if (isOuterAndNeeded(N)) {
      result += "and ";
    }

    result += threeDigit(N % 1000, showZero: false);
    return result;
  }
}

abstract class INumberConverter {
  String twoDigit(int N);
  String threeDigit(int N);
  String convert(int N);
  bool isOuterAndNeeded(int N);
}
