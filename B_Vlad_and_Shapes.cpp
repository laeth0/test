#include <bits/stdc++.h>
using namespace std;
using namespace chrono;

signed main(void) {
    system("cls");
    auto start = high_resolution_clock::now();

    

    auto end = high_resolution_clock::now();
    cout << duration<double, milli>(end - start).count() << "ms" << '\n';
    return 0;
}