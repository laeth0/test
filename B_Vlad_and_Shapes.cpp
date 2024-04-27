//* رَّبِّ ٱغۡفِرۡ لِی وَلِوَ ٰ⁠لِدَیَّ وَلِمَن دَخَلَ بَیۡتِیَ مُؤۡمِنࣰا وَلِلۡمُؤۡمِنِینَ وَٱلۡمُؤۡمِنَـٰتِۖ وَلَا تَزِدِ ٱلظَّـٰلِمِینَ إِلَّا تَبَارَۢا
#include <bits/stdc++.h>
using namespace std;
#define ll long long

void solve()
{
    ll n;
    cin >> n;
    vector<string> a(n);
    set<int> s;
    for (int i = 0; i < n; i++)
        cin >> a[i];
    for (int i = 0; i < n; i++)
    {
        int x = 0;
        for (size_t j = 0; j < n; j++)
        {
            if (a[i][j] == '1')
                x++;
        }
        if (x)
            s.insert(x);
    }
    if (s.size() == 1)
        cout << "SQUARE\n";
    else
        cout << "TRIANGLE\n";
}
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    ll t;
    cin >> t;
    while (t--)
        solve();
    return 0;
}
//* رَّبِّ ٱغۡفِرۡ لِی وَلِوَ ٰ⁠لِدَیَّ وَلِمَن دَخَلَ بَیۡتِیَ مُؤۡمِنࣰا وَلِلۡمُؤۡمِنِینَ وَٱلۡمُؤۡمِنَـٰتِۖ وَلَا تَزِدِ ٱلظَّـٰلِمِینَ إِلَّا تَبَارَۢا
