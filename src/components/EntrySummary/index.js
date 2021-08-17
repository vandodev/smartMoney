import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = ({entriesGouped}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGouped={entriesGouped} />
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
