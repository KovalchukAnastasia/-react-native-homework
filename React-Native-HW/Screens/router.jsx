import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";

import LoginScreen from "./LoginScreen/LoginScreen";
import RegistrationScreen from "./RegistrationScreen/RegistrationScreen";
import PostsScreen from "./PostsScreen/PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";

const HomeTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <HomeTab.Navigator tabBarOptions={{ showLabel: false }}>
      <HomeTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <HomeTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="plus" size={size} color={color} />
          ),
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <HomeTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </HomeTab.Navigator>
  );
};
