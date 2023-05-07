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
import Feather from 'react-native-vector-icons/Feather';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors/colors';

const Details = ({route, navigation}) => {
  const {item} = route.params;
    const renderIngredioentsItem = ({ item }) => { 
        return (
            <View style={[styles.ingredientsItemWrapper, {marginLeft: item.id === '1' ? 20 : 0}]}>
                <Image
                    source={item.image}
                    style={styles.ingredientsItemImage}
                />
            </View>
        )
    }

  return (
    <View style={styles.container}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="arrow-left" size={17} color={colors.dark} />
            </View>
          </TouchableOpacity>

          <View style={styles.headerRight}>
            <MaterialComunityIcons name="star" size={17} color={colors.white} />
          </View>
        </View>
      </SafeAreaView>

      {/* titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      {/* price */}
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>${item.price}</Text>
      </View>

      {/* pizza info */}
      <View style={styles.infoWrapper}>
        <View style={styles.infoLeftWrapper}>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Size</Text>
            <Text style={styles.infoItemText}>
              {item.sizeName} {item.sizeNumber}"
            </Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Crust</Text>
            <Text style={styles.infoItemText}>{item.crust}</Text>
          </View>
          <View style={styles.infoItemWrapper}>
            <Text style={styles.infoItemTitle}>Delivery in</Text>
            <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
          </View>
        </View>
        <View>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </View>
      {/* ingredients */}
      <View style={styles.ingredientsWrapper}>
              <Text style={styles.ingredientsTitle}>Ingredients</Text>
        <View style={styles.ingredientsListWrapper}>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngredioentsItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
          </View>
          

          {/* Button */}
          <TouchableOpacity onPress={() => alert('Yuor order has been placed')}>
              <View style={styles.orderWrapper}>
                  <Text style={styles.orderText}>Place an order</Text>
                  <Feather name="chevron-right" size={18} color={colors.black} />
              </View>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
      backgroundColor: colors.white,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderWidth: 2,
    borderColor: colors.textLight,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: colors.price,
  },
  infoWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    mixBlendMode: 20,
  },
  infoItemTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.textLight,
  },
  infoItemText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: 'contain',
    width: 220,
    height: 200,
    marginRight: -45,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
    ingredientsItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.10,
    shadowRadius: 10,

    elevation: 2,
  },
    ingredientsItemImage: {
        width: 90,
        height: 90,
      resizeMode: 'contain',
    },
    orderWrapper: {
        marginTop: 45,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        paddingVertical: 20,
    },
    orderText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
},
});

export default Details;
