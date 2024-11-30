import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import * as Utils from "../utils/index";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");
      
      // Get all customers
      const customers = await Utils.getAllCustomers();
      
      if (!customers) {
        setError("Sunucu bağlantısında hata oluştu");
        return;
      }

      // Find the customer with matching username
      const customer = customers.find((c : any) => c.username === username);
      
      if (!customer) {
        setError("Kullanıcı bulunamadı");
        return;
      }

      // Check password
      if (customer.password !== password) {
        setError("Geçersiz şifre");
        return;
      }

      // Store the customer ID and role in AsyncStorage
      await AsyncStorage.setItem("customerId", customer.id.toString());
      await AsyncStorage.setItem("customerRole", customer.role);

      // Navigate based on role
      if (customer.role === "Admin") {
        router.push("/manager");
      } else {
        router.push("/customer");
      }
    } catch (err) {
      setError("Giriş yapılırken bir hata oluştu");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text h3 style={styles.title}>Giriş Yap</Text>
        <Input
          placeholder="Kullanıcı Adı"
          value={username}
          onChangeText={setUsername}
          containerStyle={styles.inputContainer}
          disabled={loading}
          autoCapitalize="none"
          leftIcon={{ type: 'ionicon', name: 'person-outline' }}
        />
        <Input
          placeholder="Şifre"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          containerStyle={styles.inputContainer}
          disabled={loading}
          leftIcon={{ type: 'ionicon', name: 'lock-closed-outline' }}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button
          title={loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          onPress={handleLogin}
          containerStyle={styles.buttonContainer}
          loading={loading}
          disabled={loading}
        />
        <Button
          title="Hesap Oluştur"
          onPress={navigateToRegister}
          type="outline"
          containerStyle={styles.buttonContainer}
          disabled={loading}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 8,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: 15,
  }
});

export default LoginScreen;