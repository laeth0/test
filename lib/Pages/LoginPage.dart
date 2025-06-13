import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobileapp/Pages/ForgotPasswordPage.dart';
import 'package:mobileapp/Pages/HomePage.dart';
import 'package:mobileapp/Pages/RegisterPage.dart';

class LoginPage extends StatefulWidget {
  LoginPage({super.key});
  static const String routeName = '/login';

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  String email = '';
  String password = '';
  bool _isLoading = false;

  Future<void> _signIn() async {
    if (email.isEmpty || password.isEmpty) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(const SnackBar(content: Text('يرجى ملء جميع الحقول')));
      return;
    }

    setState(() => _isLoading = true);

    final url = Uri.parse('http://mytshop.runasp.net/api/Account/Login');
    try {
      final res = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: json.encode({'email': email, 'password': password}),
      );
      setState(() => _isLoading = false);

      if (res.statusCode == 200) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(const SnackBar(content: Text('تم تسجيل الدخول بنجاح!')));
        Navigator.pushReplacementNamed(context, HomePage.routeName);
      } else {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('فشل تسجيل الدخول')));
      }
    } catch (e) {
      setState(() => _isLoading = false);
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('حصل خطأ: ')));
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'السلام عليكم\nقم بتسجيل الدخول',
                style: TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                  color: Colors.teal[700],
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 48),

              TextFormField(
                keyboardType: TextInputType.emailAddress,
                onChanged: (v) => setState(() => email = v),
                decoration: InputDecoration(
                  labelText: 'البريد الإلكتروني',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: BorderSide(color: Colors.teal[700]!),
                  ),
                  contentPadding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 14,
                  ),
                ),
              ),
              SizedBox(height: 16),

              TextFormField(
                obscureText: true,
                onChanged: (v) => setState(() => password = v),
                decoration: InputDecoration(
                  labelText: 'كلمة المرور',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                    borderSide: BorderSide(color: Colors.teal[700]!),
                  ),
                  contentPadding: const EdgeInsets.symmetric(
                    horizontal: 16,
                    vertical: 14,
                  ),
                ),
              ),
              SizedBox(height: 8),

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  TextButton(
                    style: TextButton.styleFrom(foregroundColor: Colors.teal),
                    onPressed: () {
                      Navigator.pushReplacementNamed(
                        context,
                        ForgotPasswordPage.routeName,
                      );
                    },
                    child: const Text('هل نسيت كلمة المرور؟'),
                  ),
                  TextButton(
                    style: TextButton.styleFrom(foregroundColor: Colors.teal),
                    onPressed: () {
                      Navigator.pushReplacementNamed(
                        context,
                        RegisterPage.routeName,
                      );
                    },
                    child: const Text('انشاء حساب'),
                  ),
                ],
              ),
              SizedBox(height: 24),

              ElevatedButton(
                style: ElevatedButton.styleFrom(
                  foregroundColor: Colors.teal,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onPressed: _isLoading ? null : _signIn,
                child:
                    _isLoading
                        ? const SizedBox(
                          height: 24,
                          width: 24,
                          child: CircularProgressIndicator(
                            strokeWidth: 2,
                            color: Colors.white,
                          ),
                        )
                        : const Text(
                          'تسجيل الدخول',
                          style: TextStyle(fontSize: 18),
                        ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}