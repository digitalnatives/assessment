import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'package:number_converter/src/domain/entities/view.dart';
import 'package:number_converter/src/presentation/blocs/number_converter_bloc.dart';
import 'package:number_converter/src/presentation/widgets/number_input_field.dart';

class NumberConverterScreen extends View<NumberConverterBloc> {
  const NumberConverterScreen({required NumberConverterBloc bloc, Key? key})
      : super(bloc: bloc, key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          decoration: BoxDecoration(
              gradient: LinearGradient(
            colors: [Colors.blue, Colors.blue.shade900],
          )),
          child: Center(
            child: Padding(
                padding: const EdgeInsets.all(100),
                child: Column(
                  children: [
                    const AutoSizeText(
                      'Number Converter',
                      style: TextStyle(
                        fontSize: 60.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                      maxLines: 1,
                    ),
                    const Expanded(
                      flex: 4,
                      child: Spacer(),
                    ),
                    SizedBox(
                      width: 400.0,
                      child: CustomNumberField(
                        stream: bloc.number,
                        onChange: bloc.changeNumber,
                        hintText: 'Your number',
                        labelText: 'Number',
                      ),
                    ),
                    const Expanded(
                      flex: 2,
                      child: Spacer(),
                    ),
                    const AutoSizeText(
                      'The result is:',
                      style: TextStyle(
                        fontSize: 45.0,
                        fontWeight: FontWeight.bold,
                        color: Colors.white,
                      ),
                      maxLines: 1,
                    ),
                    
                    StreamBuilder<String>(
                        stream: bloc.converterResult,
                        initialData: bloc.initResultText,
                        builder: (context, snapshot) {
                          if (snapshot.hasData) {
                            return AutoSizeText(
                              snapshot.data!,
                              style: const TextStyle(
                                fontSize: 60.0,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                              maxLines: 1,
                            );
                          } else {
                            return const AutoSizeText(
                              'Something went bad. Sorry for the inconvenience.',
                              style: TextStyle(
                                fontSize: 60.0,
                                fontWeight: FontWeight.bold,
                                color: Colors.white,
                              ),
                              maxLines: 1,
                            );
                          }
                        })
                  ],
                )),
          ),
        ),
      ),
    );
  }
}
