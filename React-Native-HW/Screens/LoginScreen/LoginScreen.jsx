import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

export default function LoginScreen() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () => {
      setIsShowKeyboard(true);
    });
    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  const handleShowPassword = () => {
    setHidePassword(!hidePassword);
  };

  const handleInputFocus = (textinput) => {
    setIsFocused({
      [textinput]: true,
    });
  };

  const registerSubmit = () => {
    console.log(state);
    setState({
      email: "",
      password: "",
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.form}>
        <Text style={styles.title}>Войти</Text>

        <TextInput
          style={
            isFocused.email
              ? {
                  ...styles.input,
                  borderColor: "#FF6C00",
                  backgroundColor: "transparent",
                }
              : styles.input
          }
          placeholder="Адрес электронной почты"
          cursorColor={"orange"}
          placeholderTextColor={"#BDBDBD"}
          marginBottom={16}
          value={state.email}
          onFocus={() => handleInputFocus("email")}
          onChangeText={(value) => {
            setState((prevState) => ({ ...prevState, email: value }));
          }}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={
              isFocused.password
                ? {
                    ...styles.input,
                    borderColor: "#FF6C00",
                    backgroundColor: "transparent",
                  }
                : styles.input
            }
            placeholder="Пароль"
            secureTextEntry={hidePassword}
            cursorColor={"orange"}
            placeholderTextColor={"#BDBDBD"}
            marginBottom={isShowKeyboard ? 0 : 32}
            value={state.password}
            onFocus={() => handleInputFocus("password")}
            onChangeText={(value) => {
              setState((prevState) => ({ ...prevState, password: value }));
            }}
          />
          <TouchableOpacity
            style={styles.showPasswordBtn}
            onPress={handleShowPassword}
          >
            <Text style={styles.showPasswordText}>
              {hidePassword ? "Показать" : "Скрыть"}
            </Text>
          </TouchableOpacity>
        </View>
        {!isShowKeyboard && (
          <>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onPress={registerSubmit}
            >
              <Text style={styles.buttonText}>Войти</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Нет аккаунта? Зарегистрироваться</Text>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    position: "relative",
    paddingTop: 32,
    paddingBottom: 45,
    paddingHorizontal: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
  },

  title: {
    fontFamily: "Roboto500",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 32,
  },
  input: {
    fontFamily: "Roboto400",
    fontSize: 15,
    lineHeight: 19,
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    position: "relative",
  },

  button: {
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  showPasswordBtn: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 16,
    top: 23,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto400",
    fontSize: 15,
    lineHeight: 19,
  },
  buttonText: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  text: {
    fontFamily: "Roboto400",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
