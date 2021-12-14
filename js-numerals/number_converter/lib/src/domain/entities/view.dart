import 'package:flutter/material.dart';
import 'package:number_converter/src/domain/entities/bloc.dart';

abstract class View<B extends Bloc> extends StatelessWidget
{
  const View({required this.bloc, Key? key}) : super(key: key);
  final B bloc;

  ScaffoldFeatureController<SnackBar, SnackBarClosedReason> showSnackBarText(
      BuildContext context, String text) {
    return ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(text)));
  }
  ScaffoldFeatureController<SnackBar, SnackBarClosedReason> showSnackBarError(
      BuildContext context, dynamic error) {
    return ScaffoldMessenger.of(context)
        .showSnackBar(SnackBar(content: Text(error.message!)));
  }
}