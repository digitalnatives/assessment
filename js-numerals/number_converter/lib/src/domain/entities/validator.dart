import 'package:number_converter/src/core/utils/constants.dart';

class Validator implements IValidator
{
  @override
  bool isNumber(String text) {
   return RegExp(kRxNumbers).hasMatch(text);
  }
  
}


abstract class IValidator
{
  bool isNumber(String text);
}