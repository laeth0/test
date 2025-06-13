import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobileapp/Pages/HomePage.dart';
import 'package:mobileapp/Pages/LoginPage.dart';

class RegisterPage extends StatefulWidget {
  RegisterPage({super.key});

  static const String routeName = '/register';

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final _formKey = GlobalKey<FormState>();

  // form values
  String firstName = '',
      lastName = '',
      username = '',
      email = '',
      password = '',
      confirmPassword = '';

  // per-field error messages from the server
  Map<String, String?> _fieldErrors = {};

  bool _isLoading = false;

  Future<void> _signUp() async {
    // clear old server errors
    _fieldErrors.clear();
    setState(() => _isLoading = true);

    final url = Uri.parse('http://mytshop.runasp.net/api/Account/register');
    final payload = {
      'firstName': firstName,
      'lastName': lastName,
      'userName': username,
      'email': email,
      'password': password,
      'confirmPassword': confirmPassword,
    };

    try {
      final response = await http.post(
        url,
        headers: {'Content-Type': 'application/json'},
        body: json.encode(payload),
      );

      setState(() => _isLoading = false);

      if (response.statusCode == 200 || response.statusCode == 201) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('تم إنشاء الحساب بنجاح!')));
        Navigator.pushReplacementNamed(context, HomePage.routeName);
        return;
      } else {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('هناك خطا')));
      }
    } catch (e) {
      setState(() => _isLoading = false);
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text('حصل خطا')));
      print(e);
    }
  }

  void _onSubmit() {
    _fieldErrors.clear();
    if (_formKey.currentState!.validate()) {
      _signUp();
    } else {
      setState(() {}); // show client-side errors
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          // to avoid overflow
          padding: EdgeInsets.all(20),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                SizedBox(height: 16),
                Text(
                  'السلام عليكم',
                  style: TextStyle(
                    fontSize: 28,
                    fontWeight: FontWeight.bold,
                    color: Colors.teal[700],
                  ),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 8),
                Text(
                  'يمكنك إنشاء وبدء مسيرتك في تعلم التجويد والاحكام بالشكل الصحيح',
                  style: TextStyle(fontSize: 16, color: Colors.grey),
                  textAlign: TextAlign.center,
                ),
                SizedBox(height: 48),

                // First Name
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'الاسم الأول',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.teal[700]!),
                    ),
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                  ),
                  onChanged: (val) => setState(() => firstName = val),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                    if (v.length < 3) return 'يجب أن يكون على الأقل 3 حروف';
                    return null;
                  },
                ),
                SizedBox(height: 16),

                // Last Name
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'الاسم الأخير',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.teal[700]!),
                    ),
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                  ),
                  onChanged: (val) => setState(() => lastName = val),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                    if (v.length < 4) return 'يجب أن يكون على الأقل 4 حروف';
                    return null;
                  },
                ),
                SizedBox(height: 16),

                // Username
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'اسم المستخدم',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.teal[700]!),
                    ),
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                  ),
                  onChanged: (val) => setState(() => username = val),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                    if (v.length < 6) return 'يجب أن يكون على الأقل 6 حروف';
                    return null;
                  },
                ),
                SizedBox(height: 16),

                // Email
                TextFormField(
                  keyboardType: TextInputType.emailAddress,
                  decoration: InputDecoration(
                    labelText: 'البريد الإلكتروني',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.teal[700]!),
                    ),
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                  ),
                  onChanged: (val) => setState(() => email = val),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                    if (!v.contains('@'))
                      return 'أدخل بريدًا إلكترونيًا صالحًا';
                    return null;
                  },
                ),
                SizedBox(height: 16),

                // Password
                TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'كلمة المرور',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.teal[700]!),
                    ),
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                  ),
                  onChanged: (val) => setState(() => password = val),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                    return null;
                  },
                ),
                SizedBox(height: 16),

                // Confirm Password
                TextFormField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'تأكيد كلمة المرور',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12),
                      borderSide: BorderSide(color: Colors.teal[700]!),
                    ),
                    contentPadding: EdgeInsets.symmetric(
                      horizontal: 16,
                      vertical: 14,
                    ),
                  ),
                  onChanged: (val) => setState(() => confirmPassword = val),
                  validator: (v) {
                    if (v == null || v.isEmpty) return 'هذا الحقل مطلوب';
                    if (v != password) return 'كلمتا المرور غير متطابقتين';
                    return null;
                  },
                ),
                SizedBox(height: 32),

                // Sign Up Button
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    padding: EdgeInsets.symmetric(vertical: 16),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  onPressed: _isLoading ? null : _onSubmit,
                  child:
                      _isLoading
                          ? SizedBox(
                            height: 24,
                            width: 24,
                            child: CircularProgressIndicator(
                              strokeWidth: 2,
                              color: Colors.white,
                            ),
                          )
                          : Text('إنشاء حساب', style: TextStyle(fontSize: 18)),
                ),
                SizedBox(height: 24),

                // Already have account?
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('هل انضممت إلينا من قبل ؟'),
                    TextButton(
                      onPressed: () {
                        Navigator.pushReplacementNamed(
                          context,
                          LoginPage.routeName,
                        );
                      },
                      child: Text(
                        'تسجيل الدخول',
                        style: TextStyle(fontSize: 16),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}