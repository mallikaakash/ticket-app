#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void minTotalSum(int t, vector<pair<int, pair<int, vector<int>>>> &testCases) {
    for (int i = 0; i < t; ++i) {
        int n = testCases[i].first;
        int k = testCases[i].second.first;
        vector<int> &arr = testCases[i].second.second;
        
        long long totalSum = arr[0];
        for (int j = 1; j < n; ++j) {
            int diff = max(0, arr[j] - arr[j - 1]);
            if (diff <= k) {
                k -= diff;
                totalSum += arr[j];
            } else {
                totalSum += arr[j] - k;
                k = 0;
            }
        }
        cout << totalSum << endl;
    }
}

int main() {
    int t;
    cin >> t;

    vector<pair<int, pair<int, vector<int>>>> testCases(t);
    for (int i = 0; i < t; ++i) {
        int n, k;
        cin >> n >> k;
        vector<int> arr(n);
        for (int j = 0; j < n; ++j) {
            cin >> arr[j];
        }
        testCases[i] = make_pair(n, make_pair(k, arr));
    }

    minTotalSum(t, testCases);

    return 0;
}
