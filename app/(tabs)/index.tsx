import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import services from "@/services";
import CardCompany from "@/components/company/Card";

const fetchCompanies = async () => {
  try {
    const { data } = await services.empresas.getAll();

    return data.companies;
  } catch (e) {
    console.error(e);
  }
};

export default function TabOneScreen() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const companies = await fetchCompanies();
      setCompanies(companies);
    }

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Empresas</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      {companies.map((company, index) => {
        return <CardCompany company={company} key={index}/>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
