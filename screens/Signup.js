import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Body,
  Label,
  Input,
  Item,
  TextInput,
  ListItem,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
// import ListItem  from 'react-native'
import React, { useState } from "react";
// import { Icon } from 'react-native-vector-icons/icon'
import Ionicons from "@expo/vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
import { useAuthContext } from "../context/authContext";

const Signup = ({ navigation }) => {
  const { register } = useAuthContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordComfirm, setPasswordComfirm] = useState("");

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
          <Text style={styles.branViewText}>Đăng Ký</Text>
          <Text style={{ fontStyle: "italic", color: "white" }}>
            Tạo một tài khoản mới
          </Text>
        </View>
      </ImageBackground>
      {/* bottomView */}
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          {/* Đăng Ký */}

          {/* Mẫu đầu vào */}
          <View style={{ marginTop: -30 }}>
            <Text style={{ marginLeft: 17 }}>Họ tên</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.textInput}
            />
            <Text style={{ marginLeft: 17 }}>Số điện thoại</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              style={styles.textInput}
            />
            <Text style={{ marginLeft: 17 }}>Email/Tài khoản</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              style={styles.textInput}
            />
            <Text style={{ marginLeft: 17 }}>Mật khẩu</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.textInput}
            />
            <Text style={{ marginLeft: 17 }}>Xác nhận mật khẩu</Text>
            <TextInput
              value={passwordComfirm}
              onChangeText={setPasswordComfirm}
              secureTextEntry
              style={styles.textInput}
            />

            {/* <Ionicons name='eye' style={{color:'#F7A205', marginBottom: 200, paddingLeft: 260, fontSize: 20}}></Ionicons> */}
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
            <TouchableOpacity
              onPress={() => {
                const data = {
                  name,
                  phone,
                  email,
                  password,
                  passwordComfirm,
                };
                register(data);
              }}
              style={styles.signBtn}
            >
              <Text style={styles.textBtn}>Đăng ký</Text>
            </TouchableOpacity>
            <Text style={{ marginTop: -10 }}>
              Bạn đã sẵn sàng chưa?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#de4d2d", fontStyle: "italic" }}>
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  branView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  branViewText: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: "#fff",
    bottom: 60,
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
  signBtn: {
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
});
