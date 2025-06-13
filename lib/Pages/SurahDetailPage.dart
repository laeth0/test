import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'SurahListPage.dart';

class SurahDetailPage extends StatefulWidget {
  const SurahDetailPage({super.key});
  static const String routeName = '/surah-detail';

  @override
  State<SurahDetailPage> createState() => _SurahDetailPageState();
}

class _SurahDetailPageState extends State<SurahDetailPage> {
  late Surah surah;
  late Future<List<Ayah>> _versesFuture;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    surah = ModalRoute.of(context)!.settings.arguments as Surah;
    _versesFuture = _fetchVerses(surah.number);
  }

  Future<List<Ayah>> _fetchVerses(int surahNumber) async {
    final uri = Uri.parse(
      'https://api.alquran.cloud/v1/surah/$surahNumber/quran-uthmani',
    );
    final res = await http.get(uri);
    if (res.statusCode != 200) throw Exception('Failed to load verses');
    final data = json.decode(res.body)['data']['ayahs'] as List;
    return data.map((j) => Ayah.fromJson(j)).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.arrow_back, color: Colors.white),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          '${surah.number}. ${surah.name}',
          style: TextStyle(color: Colors.white),
        ),
        backgroundColor: Colors.teal[700],
      ),
      body: FutureBuilder<List<Ayah>>(
        future: _versesFuture,
        builder: (ctx, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snap.hasError) {
            return Center(child: Text('خطأ: ${snap.error}'));
          }
          final verses = snap.data!;
          return ListView.builder(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 16),
            itemCount: verses.length,
            itemBuilder: (c, i) {
              final v = verses[i];
              return Padding(
                padding: const EdgeInsets.only(bottom: 16),
                child: Text(
                  '${v.text}  ﴿${v.numberInSurah}﴾',
                  style: const TextStyle(fontSize: 24),
                  textAlign: TextAlign.right,
                ),
              );
            },
          );
        },
      ),
    );
  }
}

/// Model for an ayah
class Ayah {
  final String text;
  final int numberInSurah;

  Ayah({required this.text, required this.numberInSurah});

  factory Ayah.fromJson(Map<String, dynamic> j) =>
      Ayah(text: j['text'], numberInSurah: j['numberInSurah']);
}