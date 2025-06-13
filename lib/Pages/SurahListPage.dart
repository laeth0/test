// lib/Pages/SurahListPage.dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'SurahDetailPage.dart';

class SurahListPage extends StatefulWidget {
  const SurahListPage({super.key});
  static const String routeName = '/surah-list';

  @override
  State<SurahListPage> createState() => _SurahListPageState();
}

class _SurahListPageState extends State<SurahListPage> {
  Future<List<Surah>> _fetchSurahs() async {
    final uri = Uri.parse('https://api.alquran.cloud/v1/surah');
    final res = await http.get(uri);
    if (res.statusCode != 200) throw Exception('Failed to load surahs');
    final data = json.decode(res.body)['data'] as List;
    return data.map((j) => Surah.fromJson(j)).toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('سور القرآن', style: TextStyle(color: Colors.white)),
        backgroundColor: Colors.teal[700],
      ),
      body: FutureBuilder<List<Surah>>(
        future: _fetchSurahs(),
        builder: (context, snap) {
          if (snap.connectionState != ConnectionState.done) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snap.hasError) {
            return Center(child: Text('خطأ: ${snap.error}'));
          }
          final surahs = snap.data!;
          return ListView.builder(
            itemCount: surahs.length,
            itemBuilder: (ctx, i) {
              final s = surahs[i];
              return ListTile(
                title: Text(
                  '${s.number}. ${s.name}',
                  textAlign: TextAlign.right,
                  style: const TextStyle(fontSize: 18),
                ),
                subtitle: Text(
                  '${s.englishName} • ${s.numberOfAyahs} آيات',
                  textAlign: TextAlign.right,
                ),
                onTap: () {
                  Navigator.pushNamed(
                    context,
                    SurahDetailPage.routeName,
                    arguments: s,
                  );
                },
              );
            },
          );
        },
      ),
    );
  }
}

/// Model for surah metadata
class Surah {
  final int number;
  final String name;
  final String englishName;
  final int numberOfAyahs;

  Surah({
    required this.number,
    required this.name,
    required this.englishName,
    required this.numberOfAyahs,
  });

  factory Surah.fromJson(Map<String, dynamic> j) => Surah(
    number: j['number'],
    name: j['name'],
    englishName: j['englishName'],
    numberOfAyahs: j['numberOfAyahs'],
  );
}