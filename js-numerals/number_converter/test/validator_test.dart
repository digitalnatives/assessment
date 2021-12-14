import 'package:flutter_test/flutter_test.dart';
import 'package:number_converter/src/domain/entities/validator.dart';

void main() {
  group('Number validator', () {
    test('Validate 0', () {
      expect(Validator().isNumber('0'), true);
    });
    test('Validate 999', () {
      expect(Validator().isNumber('999'), true);
    });
    test('Validate a', () {
      expect(Validator().isNumber('a'), false);
    });
    test('Validate 0a0', () {
      expect(Validator().isNumber('0a0'), false);
    });
    test('Validate 000a', () {
      expect(Validator().isNumber('000a'), false);
    });
    test('Validate a', () {
      expect(Validator().isNumber('a'), false);
    });

    
  });

}
