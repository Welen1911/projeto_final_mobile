import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';
import services from '@/services';

const fetchCompanies = async () => {
  try {
    const {data} = await services.empresas.getAll();

    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

export default function TabOneScreen() {

  fetchCompanies();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empresas</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
