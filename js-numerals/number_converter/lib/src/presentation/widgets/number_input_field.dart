import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class CustomNumberField extends StatelessWidget {
  final IconData? icon;
  final String hintText, labelText;
  final Stream<String> stream;
  final Function(String) onChange;

  const CustomNumberField(
      {Key? key,
      this.icon,
      required this.hintText,
      required this.labelText,
      required this.stream,
      required this.onChange})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<Object>(
      stream: stream,
      builder: (context, AsyncSnapshot<Object> snapshot) {
        return Container(
          decoration: BoxDecoration(boxShadow: [
            BoxShadow(
                offset: const Offset(12, 26),
                blurRadius: 50,
                spreadRadius: 0,
                color: Colors.grey.withOpacity(.1)),
          ]),
          child: TextFormField(
          
            style: const TextStyle(color: Colors.white),
            onChanged: (String text) => onChange(text),
            cursorColor: Theme.of(context).primaryColor,
            decoration: InputDecoration(
              labelText: labelText,
              labelStyle: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, ),
              errorText: snapshot.hasError ? snapshot.error.toString() : null,
              errorStyle: const TextStyle(color: Colors.red, fontWeight: FontWeight.bold, fontSize: 18.0),
              icon: icon != null
                  ? Icon(
                      icon,
                      color: Theme.of(context).primaryColor,
                    )
                  : null,
              hintText: hintText,
              hintStyle: const TextStyle(color: Colors.white),
              border: InputBorder.none,
            ),
            keyboardType: TextInputType.number,
            inputFormatters: <TextInputFormatter>[
              FilteringTextInputFormatter.digitsOnly
            ],
          ),
        );
      },
    );
  }
}
