import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobileapp/Pages/LoginPage.dart';

class ResetPasswordPage extends StatefulWidget {
  const ResetPasswordPage({super.key});
  static const String routeName = '/reset-password';

  @override
  State<ResetPasswordPage> createState() => _ResetPasswordPageState();
}

class _ResetPasswordPageState extends State<ResetPasswordPage> {
  final _formKey = GlobalKey<FormState>();
  late String email;
  String code = '', password = '', confirmPassword = '';
  bool _isLoading = false;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // receive the email passed from ForgotPasswordPage
    final args = ModalRoute.of(context)!.settings.arguments;
    email = args is String ? args : '';
  }

  Future<void> _resetPassword() async {
    if (!_formKey.currentState!.validate()) return;

    setState(() => _isLoading = true);
    final url = Uri.parse('http://mytshop.runasp.net/api/Account/SendCode');
    final payload = {
      'email': email,
      'code': code,
      'password': password,
      'ConfirmPassword': confirmPassword,
    };

    try {
      final res = await http.patch(
        url,
        headers: {'Content-Type': 'application/json'},
        body: json.encode(payload),
      );
      setState(() => _isLoading = false);

      if (res.statusCode == 200) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('تم تغيير كلمة المرور بنجاح')),
        );
        Navigator.pushReplacementNamed(context, LoginPage.routeName);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('فشل إعادة التعيين، تأكد من الكود وحاول مجددًا'),
          ),
        );
      }
    } catch (e) {
      setState(() => _isLoading = false);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('حصل خطأ رجاءً أعد المحاولة')),
      );
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'إعادة تعيين كلمة المرور',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.teal[700],
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Form(
          key: _formKey,
          child: ListView(
            children: [
              const SizedBox(height: 16),
              // Read-only email
              TextFormField(
                initialValue: email,
                decoration: InputDecoration(
                  labelText: 'البريد الإلكتروني',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                readOnly: true,
              ),
              const SizedBox(height: 16),

              // Code
              TextFormField(
                keyboardType: TextInputType.number,
                decoration: InputDecoration(
                  labelText: 'الكود المرسل',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onChanged: (v) => setState(() => code = v),
                validator: (v) {
                  if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                  return null;
                },
              ),
              const SizedBox(height: 16),

              // New Password
              TextFormField(
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'كلمة المرور الجديدة',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onChanged: (v) => setState(() => password = v),
                validator: (v) {
                  if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                  if (v.length < 6)
                    return 'يجب أن تكون كلمة المرور 6 أحرف على الأقل';
                  return null;
                },
              ),
              const SizedBox(height: 16),

              // Confirm Password
              TextFormField(
                obscureText: true,
                decoration: InputDecoration(
                  labelText: 'تأكيد كلمة المرور',
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onChanged: (v) => setState(() => confirmPassword = v),
                validator: (v) {
                  if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                  if (v != password) return 'كلمتا المرور غير متطابقتين';
                  return null;
                },
              ),
              const SizedBox(height: 32),

              // Submit button
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: _isLoading ? null : _resetPassword,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.teal[700],
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
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
                            'إعادة التعيين',
                            style: TextStyle(fontSize: 18, color: Colors.white),
                          ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}