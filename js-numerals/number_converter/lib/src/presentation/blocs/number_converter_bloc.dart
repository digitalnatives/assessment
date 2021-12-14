import 'dart:async';

import 'package:number_converter/src/core/utils/constants.dart';
import 'package:number_converter/src/domain/entities/bloc.dart';
import 'package:number_converter/src/domain/entities/number_converter.dart';
import 'package:number_converter/src/domain/entities/validator.dart';
import 'package:rxdart/rxdart.dart';

class NumberConverterBloc extends Bloc
{
  final String initResultText = 'Please type in a number';
  final _number = BehaviorSubject<String>();
  Stream<String> get number => _number.stream.transform(StreamTransformer<String, String>.fromHandlers(
      handleData: (number, sink) {
        if(number.isEmpty)
        {
          sink.addError("");
          _changeConverterResult(initResultText);
        }
        else if (!Validator().isNumber(number)) {
          sink.addError(kNumberInvalidFormatMessage);
          _changeConverterResult('There is a problem with the number!');
        } else {
          if(number.length > kNumberMaxLength || number.length < kNumberMinLength)
          {
            sink.addError(kNumberInvalidLengthMessage);
            _changeConverterResult('There is a problem with the number!');
          }
          else
          {
            sink.add(number);
            _changeConverterResult(NumberConverter().convert(int.parse(number)));
          } 
        }
      }));
  Function(String) get changeNumber => _number.sink.add;

  final _converterResult = BehaviorSubject<String>();
  Stream<String> get converterResult => _converterResult.stream;
  Function(String) get _changeConverterResult => _converterResult.sink.add;




}