import React, { Component, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
  StatusBar
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

const App = () => {

  const [state, setState] = useState([
    {
      "kind": "books#volume",
      "id": "TFJfCc8Q9GUC",
      "etag": "AUF4KD2ryU4",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/TFJfCc8Q9GUC",
      "volumeInfo": {
        "title": "Hewan-hewan fantastis dan di mana mereka misa ditemukan",
        "authors": [
          "JK Rowling"
        ],
        "publisher": "Gramedia Pustaka Utama",
        "publishedDate": "2002",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "9796865637"
          },
          {
            "type": "ISBN_13",
            "identifier": "9789796865635"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "printType": "BOOK",
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "1.1.2.0.preview.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=TFJfCc8Q9GUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=TFJfCc8Q9GUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "id",
        "previewLink": "http://books.google.co.id/books?id=TFJfCc8Q9GUC&printsec=frontcover&dq=Harry+Potter&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.co.id/books?id=TFJfCc8Q9GUC&dq=Harry+Potter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Hewan_hewan_fantastis_dan_di_mana_mereka.html?hl=&id=TFJfCc8Q9GUC"
      },
      "saleInfo": {
        "country": "ID",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "ID",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=TFJfCc8Q9GUC&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      }
    },
  ])

  // Kategori Section
  const [KategoriBuku, setKategoriBuku] = useState([
    {
      judul: 'Romance',
      image: require('./src/dummy/romance.jpg'),
    },
    {
      judul: 'Komedi',
      image: require('./src/dummy/komedi.jpg'),
    },
    {
      judul: 'Sejarah',
      image: require('./src/dummy/sejarah.jpg'),
    },
    {
      judul: 'Seni dan Budaya',
      image: require('./src/dummy/seni.jpg'),
    },
    {
      judul: 'Politik',
      image: require('./src/dummy/politik.jpg'),
    },
  ]);

  // Rekomendasi Section
  const [RekBuku, setRekBuku] = useState([
    {
      judul: 'Sedang Tuhan Pun Cemburu',
      image: require('./src/dummy/emha.jpg'),
      author: 'Emha Ainun Najib',
    },
    {
      judul: 'Tuhan Maha Asyik',
      image: require('./src/dummy/tejo.jpg'),
      author: 'Sujiwo Tejo',
    },
    {
      judul: 'Politiku?',
      image: require('./src/dummy/politik.jpg'),
      author: 'Mamat Alkatiri',
    },
    {
      judul: 'Dilan',
      image: require('./src/dummy/dilan.jpg'),
      author: 'Pidi Baiq',
    },
    {
      judul: 'The book Of Almost',
      image: require('./src/dummy/almost.jpg'),
      author: 'Brian Krisna',
    },
  ]);


  const [daftarRekomendasi, setDaftarRekomendasi] = useState([
    {
      judul: '7 Buku Pemrograman terbaik',
      deskripsi: '7 buku pemrograman ini sangan recomended untuk dibaca',
      image: require('./src/images/book1.jpg'),
    },
    {
      judul: 'Kisah Misteri Tanah Jawa',
      deskripsi: 'Berbagi buku misteri yg sudah kami siapkan untuk kamu, yuk lihat!',
      image: require('./src/dummy/misteri.jpg'),
    },
    {
      judul: 'Tips Move on Generasi Milenial',
      deskripsi: 'Patah hati? yuk coba baca novel yang kami rekomendasikan',
      image: require('./src/dummy/galau.jpg'),
    },
  ]);

  const getBuku = () => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=%7Bkeyword')
      .then(Response => Response.json())
      .then(json => {
        setState(json.items)
        console.log(json)
      }
      )
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#212121" barStyle="light-content" />
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: '#3498db',
            borderBottomLeftRadius: 30,
            paddingBottom: 10,
            elevation: 5,
          }}>

          {/* SearchBar Section*/}

          <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder="Buku apa yang kamu cari?" style={{ borderWidth: 1, borderRadius: 25, borderColor: '#E8E8E8', height: 40, fontSize: 13, paddingLeft: 40, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <TouchableOpacity onPress={getBuku}>
                <Image source={require('./src/icon/search.png')} />
                <Text>{state[0].volumeInfo.title}</Text>
                <Image style={{ width: 100, height: 100 }} source={{ uri: state[0].volumeInfo.imageLinks.smallThumbnail }} />
                <Text>{state[0].volumeInfo.author}</Text>

              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginLeft: 20, marginTop: 20 }}>
            <FlatList
              data={daftarRekomendasi}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFFFFF',
                    marginTop: 10,
                    flexDirection: 'row',
                    marginRight: 20,
                    elevation: 3,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 5,
                  }}>
                  <View style={{ marginRight: 10, width: 200 }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: '#212121',
                      }}>
                      {item.judul}
                    </Text>
                    <Text style={{ fontSize: 14 }}>{item.deskripsi}</Text>
                  </View>
                  <View>
                    <Image
                      source={item.image}
                      style={{ width: 130, height: 150, borderRadius: 5 }}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        {/* Kategori Section */}
        <View style={{ marginLeft: 20, marginTop: 20 }}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold', color: '#212121' }}>
              Kategori
            </Text>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={KategoriBuku}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{ width: 130, height: 150, borderRadius: 5 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: 'bold' }}>{item.judul}</Text>
                <Text style={{ fontSize: 14 }}>{item.author}</Text>

              </TouchableOpacity>
            )}
          />

        </View>

        {/* Rekomendasi Section */}
        <View style={{ marginLeft: 20, marginTop: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold', color: '#212121' }}>Rekomendasi</Text>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              <Text>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={RekBuku}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 150,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                }}>
                <Image
                  source={item.image}
                  style={{ width: 130, height: 150, borderRadius: 5 }}
                  resizeMode="contain"
                />
                <Text style={{ fontWeight: 'bold' }}>{item.judul}</Text>
                <Text style={{ fontSize: 14 }}>{item.author}</Text>
              </TouchableOpacity>
            )}
          />

        </View>
      </ScrollView>

      {/* STATUSBAR SECTION */}
      <View style={{ backgroundColor: '#FFFFFF', height: 54, flexDirection: 'row' }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image style={{ width: 26, height: 26 }} source={require('./src/icon/home.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image style={{ width: 26, height: 26 }} source={require('./src/icon/order.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Cart</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image style={{ width: 26, height: 26 }} source={require('./src/icon/help.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Forum</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Image source={require('./src/icon/account.png')} />
            <Text style={{ color: '#545454', fontSize: 10, marginTop: 4 }}>Account</Text>
          </TouchableOpacity>
        </View>
      </View >
    </View>
  );
};

export default App;