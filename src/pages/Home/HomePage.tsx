import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput placeholder="Search..." style={styles.searchBar} />

      {/* Main Banner */}
      <View style={styles.bannerCard}>
        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>What would you like to learn today?</Text>
          <TouchableOpacity style={styles.shopButton}>
            <Text style={styles.shopButtonText}>Shop now</Text>
          </TouchableOpacity>
        </View>
        <Image source={require('../../../assets/person.png')} style={styles.bannerImage} />
      </View>

     

      <Text style={styles.categoryTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        <CategoryCard icon={require('../../../assets/icons/loksewa.png')} label="Lok Sewa" />
        <CategoryCard icon={require('../../../assets/icons/language.png')} label="Language" />
        <CategoryCard icon={require('../../../assets/icons/designing.png')} label="Designing" />
        <CategoryCard icon={require('../../../assets/icons/development.png')} label="Development" />
      </View>

      {/* Top Rated Course Section */}
      <Text style={styles.topRatedTitle}>Top Rated Course</Text>
      <View style={styles.courseContainer}>
        <CourseCard />
        <CourseCard />
      </View>
       {/* Discount Banner */}
      <Text style={styles.topRatedTitle}>Offers</Text>
      <View style={styles.discountBanner}>
        <Image source={require('../../../assets/offer.png')} style={styles.discountImage} />
      </View>
      <Text style={styles.topRatedTitle}>Recommended course</Text>
      <View style={styles.courseContainer}>
        <CourseCard />
        <CourseCard />
      </View>
      
    </ScrollView>
  );
};

const CourseCard = () => {
  return (
    <View style={styles.courseCard}>
      <Image source={require('../../../assets/thumbnail.png')} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>Graphic Design</Text>
        <Text style={styles.courseAuthor}>with Dinesh Paudel</Text>
        <Text style={styles.courseUpdate}>update 5 day ago</Text>
        <View style={styles.courseRating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Text key={index}>⭐</Text>
          ))}
        </View>
        <Text style={styles.coursePrice}>Rs. 499 full course</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
      <Image source={require('../../../assets/icons/heart.png')} style={styles.heartIcon} />
    </View>
  );
};

const CategoryCard = ({ icon, label }: { icon: any; label: string }) => {
  return (
    <View style={styles.categoryCardContainer}>
      <View style={styles.categoryCard}>
        <Image source={icon} style={styles.categoryIcon} />
      </View>
      <Text style={styles.categoryLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#F7F7F7',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  bannerCard: {
    backgroundColor: '#433BFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    height: 200,
    width: 380,
  },
  textContainer: {
    flex: 1,
  },
  bannerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    fontFamily: 'poppins',
  },
  shopButton: {
    backgroundColor: '#FFC700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    height: 40,
    width: 110,
  },
  shopButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'poppins',
    fontSize: 15,
  },
  bannerImage: {
    width: 100,
    height: 200,
    borderRadius: 50,
  },
  discountBanner: {
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  discountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  discountImage: {
    width: 380,
    height: 200,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCardContainer: {
    alignItems: 'center',
    width: 80,
  },
  categoryCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    borderRadius: 10,
    backgroundColor: '#433BFF',
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 13,
    color: '#000000',
    textAlign: 'center',
  },
  topRatedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
  },
  courseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseCard: {
    width: 200,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  courseInfo: {
    marginTop: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  courseAuthor: {
    fontSize: 12,
    color: '#777',
  },
  courseUpdate: {
    fontSize: 10,
    color: '#aaa',
  },
  courseRating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  coursePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#FFC700',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
  },
});

export default HomePage;
