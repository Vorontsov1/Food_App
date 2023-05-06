import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../../../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../../../assets/data/categoryData';
import popularData from '../../../assets/data/popularData';

const HomeScreen = () => {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryData,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 5 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.imageData} />
        <Text style={styles.textData}>{item.title}</Text>
        <TouchableOpacity>
          <View
            style={[
              styles.selectData,
              {
                backgroundColor: item.selected
                  ? colors.white
                  : colors.secondary,
              },
            ]}>
            <Feather
              name="chevron-right"
              size={15}
              color={item.selected ? colors.black : colors.white}
              style={styles.iconData}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
          <ScrollView
              contentInsetAdjustmentBehavior='automatic'
              showsVerticalScrollIndicator={false}
          >
        {/* header */}
        <SafeAreaView>
          <View style={styles.header}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/images/avatar.png')}
            />
            <Feather name="menu" size={30} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* titles */}

        <View style={styles.textCategories}>
          <Text style={styles.textFood}>Food</Text>
          <Text style={styles.textDelivery}>Delivery</Text>
        </View>

        {/* search */}

        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.textSearch}>Search</Text>
          </View>
        </View>

        {/* categories  */}

        <View style={styles.categoriesWrapper}>
          <Text style={styles.textTitle}>Categories</Text>
          <View style={styles.list}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* popular */}

        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map(item => (
            <View
              key={item.id}
              style={[
                styles.popularCardWrapper,
                {marginTop: item.id == 1 ? 10 : 20},
              ]}>
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <MaterialComunityIcons
                      name="crown"
                      size={19}
                      color={colors.primary}
                    />
                    <Text style={styles.popularTopText}>top of the weeek</Text>
                  </View>
                  <View style={styles.popularTitlesWrapper}>
                    <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight{item.weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Feather name="plus" size={15} color={colors.black} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <MaterialComunityIcons
                      name="star"
                      size={15}
                      color={colors.black}
                      style={styles.ratingIcon}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularCardRight}>
                <Image style={styles.popularCardImage} source={item.image} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 20,
  },
  list: {
    paddingTop: 15,
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  categoryData: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    marginRight: 20,
  },
  imageData: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  textData: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginTop: 10,
  },
  selectData: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    marginBottom: 20,
    borderRadius: 50,
  },
  iconData: {
    alignSelf: 'center',
  },
  popularWrapper: {
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 20,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    padding: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  rating: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
