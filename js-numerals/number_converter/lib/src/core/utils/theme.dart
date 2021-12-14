import 'package:flutter/material.dart';

ThemeData mainTheme = ThemeData(

  inputDecorationTheme: const InputDecorationTheme(
    errorStyle: TextStyle(
      color: Colors.red,
      fontSize: null,
      fontWeight: FontWeight.w400,
      fontStyle: FontStyle.normal,
    ),
    errorMaxLines: 1,
    isDense: false,
    contentPadding: EdgeInsets.only(top: 24, bottom: 16, left: 12, right: 12),
    isCollapsed: false,
    filled: false,
    fillColor: Color(0x00000000),

    focusedBorder: OutlineInputBorder(
        borderSide: BorderSide(
          color: Colors.white,
          width: 1,
          style: BorderStyle.solid,
        ),
        borderRadius: BorderRadius.all(Radius.circular(4.0)),
        gapPadding: 4),

    disabledBorder: InputBorder.none,
    enabledBorder:  InputBorder.none,

  ),
);
