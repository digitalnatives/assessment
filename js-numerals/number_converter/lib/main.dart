import 'package:flutter/material.dart';
import 'package:number_converter/src/core/utils/constants.dart';
import 'package:number_converter/src/core/utils/theme.dart';
import 'package:number_converter/src/presentation/blocs/number_converter_bloc.dart';
import 'package:number_converter/src/presentation/views/number_converter_screen.dart';

Future<void> main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: kAppTitle,
      debugShowCheckedModeBanner: false,
      theme: mainTheme,

      routes:
      {
        '/': (context) => NumberConverterScreen(bloc: NumberConverterBloc(),),
      }
    );
  }
}

