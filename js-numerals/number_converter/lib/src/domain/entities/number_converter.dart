class NumberConverter implements INumberConverter
{
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
    // TODO: implement threeDigit
    throw UnimplementedError();
  }

  @override
  String twoDigit(int N) {
    // TODO: implement twoDigit
    throw UnimplementedError();
  }
  
}

abstract class INumberConverter
{
String twoDigit(int N);
String threeDigit(int N);
bool isInnerAndNeeded(int N);
bool isOuterAndNeeded(int N);
}