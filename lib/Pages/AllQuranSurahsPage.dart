import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class AllQuranSurahsPage extends StatefulWidget {
  const AllQuranSurahsPage({super.key});
  static const String routeName = '/allQuranSurahs';

  @override
  State<AllQuranSurahsPage> createState() => _AllQuranSurahsPageState();
}

class _AllQuranSurahsPageState extends State<AllQuranSurahsPage> {
  static const int totalPages = 604;
  final PageController _pageController = PageController();

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  Future<PageData> _fetchPage(int page) async {
    final uri = Uri.parse(
      'https://api.alquran.cloud/v1/page/$page/quran-uthmani',
    );

    final reponse = await http.get(uri);

    if (reponse.statusCode != 200) throw Exception('Failed to load page $page');
    final data = json.decode(reponse.body)['data'];
    final ayahs = (data['ayahs'] as List).map((a) => Ayah.fromJson(a)).toList();
    final pd = PageData(page: page, ayahs: ayahs);
    return pd;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'صفحات القرآن',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.teal[700],
      ),
      body: PageView.builder(
        controller: _pageController,
        itemCount: totalPages,
        itemBuilder: (context, index) {
          final pageNum = index + 1;
          return FutureBuilder<PageData>(
            future: _fetchPage(pageNum),
            builder: (context, snap) {
              if (snap.connectionState != ConnectionState.done) {
                return const Center(child: CircularProgressIndicator());
              }
              if (snap.hasError) {
                return Center(child: Text('خطأ في التحميل: ${snap.error}'));
              }
              final page = snap.data!;
              return SurahPage(page);
            },
          );
        },
      ),
    );
  }
}

class SurahPage extends StatelessWidget {
  final PageData page;
  const SurahPage(this.page);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 16),
      child: ListView.builder(
        itemCount: page.ayahs.length,
        itemBuilder: (ctx, i) {
          final ayah = page.ayahs[i];
          // Show surah name when it first appears on this page
          final showSurahHeader =
              i == 0 || page.ayahs[i - 1].surahNumber != ayah.surahNumber;
          return Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              if (showSurahHeader)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  child: Text(
                    ayah.surahNameArabic,
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              Text(
                '${ayah.text}  ﴿${ayah.numberInSurah}﴾',
                style: const TextStyle(fontSize: 24),
                textAlign: TextAlign.right,
              ),
              const SizedBox(height: 12),
            ],
          );
        },
      ),
    );
  }
}

/// Simple holder for page data
class PageData {
  final int page;
  final List<Ayah> ayahs;
  PageData({required this.page, required this.ayahs});
}

/// Model for each ayah
class Ayah {
  final int number;
  final String text;
  final int numberInSurah;
  final int surahNumber;
  final String surahNameArabic;

  Ayah({
    required this.number,
    required this.numberInSurah,
    required this.surahNumber,
    required this.text,
    required this.surahNameArabic,
  });

  factory Ayah.fromJson(Map<String, dynamic> j) {
    return Ayah(
      number: j['number'],
      text: j['text'],
      numberInSurah: j['numberInSurah'],
      surahNumber: j['surah']['number'],
      surahNameArabic: j['surah']['name'],
    );
  }
}