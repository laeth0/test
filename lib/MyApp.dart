import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:mobileapp/Pages/ForgotPasswordPage.dart';
import 'package:mobileapp/Pages/ResetPasswordPage.dart';
import 'package:mobileapp/Pages/SurahDetailPage.dart';
import 'package:mobileapp/Pages/SurahListPage.dart';
import 'package:mobileapp/generated/l10n.dart';
import 'package:mobileapp/Pages/HomePage.dart';
import 'package:mobileapp/Pages/LoginPage.dart';
import 'package:mobileapp/Pages/RegisterPage.dart';
import 'package:mobileapp/Pages/AllQuranSurahsPage.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: Locale("ar"), // Locale("en") for English
      localizationsDelegates: [
        S.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      supportedLocales: S.delegate.supportedLocales,
      debugShowCheckedModeBanner: false,
      title: 'Jawed Ai',
      initialRoute: LoginPage.routeName,
      routes: {
        HomePage.routeName: (context) => HomePage(),
        LoginPage.routeName: (context) => LoginPage(),
        RegisterPage.routeName: (context) => RegisterPage(),
        ForgotPasswordPage.routeName: (context) => ForgotPasswordPage(),
        ResetPasswordPage.routeName: (_) => const ResetPasswordPage(),
        AllQuranSurahsPage.routeName: (context) => const AllQuranSurahsPage(),
        SurahListPage.routeName: (_) => const SurahListPage(),
        SurahDetailPage.routeName: (_) => const SurahDetailPage(),
      },
    );
  }
}