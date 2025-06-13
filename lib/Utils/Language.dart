import 'package:intl/intl.dart';

class Language {
  static bool isArabic() => Intl.getCurrentLocale() == 'ar';
}