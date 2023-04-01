import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import ListItem  from 'react-native'
// import React from 'react'
import { useState } from "react";
import { loginUser, resetPassword } from "../filebaseConfig";

// import { Icon } from 'react-native-vector-icons/icon'
import Ionicons from "@expo/vector-icons/Ionicons";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../assets/background-image.png")}
        style={{ height: Dimensions.get("window").height / 2.5 }}
      >
        <View style={styles.branView}>
          <Ionicons
            name="image"
            style={{ fontSize: 100, color: "#fff" }}
          ></Ionicons>
          <Text style={styles.branViewText}>My Story</Text>
        </View>
      </ImageBackground>
      {/* bottomView */}
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ fontSize: 34, color: "#de4d2d" }}>Xin Chào!</Text>
          <Text>
            Bạn có tài khoản chưa?{" "}
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={{ color: "#de4d2d", fontStyle: "italic" }}>
                Đăng ký{" "}
              </Text>
            </TouchableOpacity>
          </Text>
          {/* Mẫu đầu vào */}
          <View style={{ marginTop: 50 }}>
            <Text style={{ marginLeft: 17 }}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
            <Text style={{ marginLeft: 17 }}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            {/* <Ionicons name='eye' style={{color:'#F7A205', marginBottom: 200, paddingLeft: 260, fontSize: 20}}></Ionicons> */}
          </View>
          {/* Quên mật khẩu */}
          <View style={styles.fogotPass}>
            <View style={{ flex: 1, marginLeft: -20 }}>
              <TouchableOpacity onPress={() => resetPassword(email)}>
                <Text
                  style={{
                    color: "#de4d2d",
                    alignSelf: "flex-start",
                    fontStyle: "italic",
                  }}
                >
                  Quên mật khẩu
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Button Login */}
          <View
            style={{
              height: 100,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -20,
            }}
          >
            {/* button */}
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                loginUser(email, password);
              }}
            >
              <Text style={styles.textBtn}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            {/* <Text
              style={{
                textAlign: "center",
                fontStyle: "italic",
                color: "#de4d2d",
              }}
            >
              Đăng nhập với Google
            </Text> */}
            {/* FB login view */}
            {/* <View style={styles.fbLoginView}>
              <TouchableOpacity
                style={styles.shadowFbLogin}
                onPress={() => {
                  loginWithGoogle();
                }}
              >
                <Ionicons
                  name="logo-google"
                  style={{ fontSize: 50, color: "red" }}
                ></Ionicons>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  branView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  branViewText: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#fff",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  textInput: {
    borderWidth: 2,
    height: 40,
    margin: 12,
    borderRadius: 10,
    marginTop: 1,
    borderColor: "#de4d2d",
    paddingLeft: 10,
  },

  fogotPass: {
    height: 50,
    marginTop: -10,
    marginLeft: 220,
    flexDirection: "row",
  },
  loginBtn: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#de4d2d",
    color: "#F7A205",
    width: Dimensions.get("window").width / 2,
    borderRadius: 15,
    padding: 10,
    margin: 20,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    color: "white",
  },
  fbLoginView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  shadowFbLogin: {
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 22,
    shadowColor: "#000",
  },
});
