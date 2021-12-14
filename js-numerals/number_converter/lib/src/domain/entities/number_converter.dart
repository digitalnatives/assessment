import 'package:number_converter/src/core/utils/constants.dart';

class NumberConverter implements INumberConverter {
  @override
  bool isInnerAndNeeded(int N) {
    // TODO: implement isInnerAndNeeded
    throw UnimplementedError();
  }

  @override
  bool isOuterAndNeeded(int N) {
    // TODO: implement isOuterAndNeeded
    throw UnimplementedError();
  }

  @override
  String threeDigit(int N) {
    int length = N.toString().length;
    if (length > 3) throw RangeError("");
    if (length == 3) {
      if (N % 100 != 0) {
        return '${_singles(N ~/ 100)} $kHundred and ${twoDigit(N % 100)}';
      } else {
        return '${_singles(N ~/ 100)} $kHundred';
      }
    } else {
      return twoDigit(N);
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
  String twoDigit(int N) {
    int length = N.toString().length;
    if (length > 2 || length == 0) throw RangeError("");
    if (length == 1) return _singles(N);

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
}

abstract class INumberConverter {
  String twoDigit(int N);
  String threeDigit(int N);
  bool isInnerAndNeeded(int N);
  bool isOuterAndNeeded(int N);
}
