import 'package:flutter/material.dart';
import 'package:mobileapp/generated/l10n.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  static const String routeName = '/home';

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Text(S.of(context).title),
    );
  }
}