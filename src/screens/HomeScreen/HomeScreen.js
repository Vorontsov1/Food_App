import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import colors from '../../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../../../assets/data/categoryData';
import popularData from '../../../assets/data/popularData';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={require('../../../assets/images/avatar.png')}
          />
          <Feather name="menu" size={30} color={colors.textDark} />
        </View>
      </SafeAreaView>
      <View style={styles.textCategories}>
        <Text style={styles.textFood}>Food</Text>
        <Text style={styles.textDelivery}>Delivery</Text>
      </View>

      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />

        <View style={styles.search}>
          <Text style={styles.textSearch}>Search</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  avatar: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
  },
  textCategories: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textFood: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: colors.textDark,
  },
  textDelivery: {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: 32,
    color: colors.textDark,
    lineHeight: 39,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
      paddingHorizontal: 20,
    marginTop: 30,
  },
    search: {
        flex: 1,
        marginLeft: 10,
        borderBottomColor: colors.textLight,
        borderBottomWidth: 1,
        paddingBottom: 5,
  },
   
    textSearch: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginBottom: 5,
        color:  colors.textLight,
  },
});

export default HomeScreen;
