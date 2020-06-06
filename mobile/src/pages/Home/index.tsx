import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PickerSelect from 'react-native-picker-select';
import axios from 'axios';

interface FormatPickerSelect {
   label: string;
   value: string;
}

interface IBGEUFResponse {
   sigla: string;
}

interface IBGECityResponse {
   nome: string;
}

const Home = () => {
   const navigation = useNavigation();

   const [ufs, setUfs] = useState<FormatPickerSelect[]>([]);
   const [cities, setCities] = useState<FormatPickerSelect[]>([]);
   const [selectedUf, setSelectedUf] = useState('0');
   const [selectedCity, setSelectedCity] = useState('0');

   useEffect(() => {
      axios
         .get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
         .then((response) => {
            const ufInitials = response.data.map((uf) => {
               return {
                  label: uf.sigla,
                  value: uf.sigla,
               };
            });

            setUfs(ufInitials);
         });
   }, []);

   useEffect(() => {
      if (selectedUf === '0') return;

      axios
         .get<IBGECityResponse[]>(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
         )
         .then((response) => {
            const cityNames = response.data.map((city) => {
               return {
                  label: city.nome,
                  value: city.nome,
               };
            });

            setCities(cityNames);
         });
   }, [selectedUf]);

   function handleNavigateToPoints() {
      navigation.navigate('Points', {
         selectedUf,
         selectedCity,
      });
   }

   return (
      <ImageBackground
         source={require('../../assets/home-background.png')}
         style={styles.container}
         imageStyle={{ width: 274, height: 368 }}
      >
         <View style={styles.main}>
            <Image source={require('../../assets/logo.png')}></Image>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>
               Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
            </Text>
         </View>

         <View style={styles.footer}>
            <View style={styles.inputContainer}>
               <PickerSelect
                  placeholder={{
                     label: 'Selecione um estado (UF)',
                     value: '0',
                  }}
                  style={pickerSelectStyles}
                  items={ufs}
                  onValueChange={(value) => {
                     setSelectedUf(String(value));
                  }}
               ></PickerSelect>
               <PickerSelect
                  placeholder={{
                     label: 'Selecione uma cidade',
                     value: '0',
                  }}
                  style={pickerSelectStyles}
                  items={cities}
                  onValueChange={(value) => setSelectedCity(String(value))}
               ></PickerSelect>
            </View>

            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
               <View style={styles.buttonIcon}>
                  <Icon name="arrow-right" color="#FFF" size={24}></Icon>
               </View>
               <Text style={styles.buttonText}>Entrar</Text>
            </RectButton>
         </View>
      </ImageBackground>
   );
};

const pickerSelectStyles = StyleSheet.create({
   viewContainer: {
      height: 50,
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
   },

   inputAndroid: {
      color: '#322153',
   },

   inputIOS: {
      color: '#322153',
   },
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 32,
   },

   main: {
      flex: 1,
      justifyContent: 'center',
   },

   title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
   },

   description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
   },

   footer: {},

   select: {},

   inputContainer: {
      paddingBottom: 10,
   },

   button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
   },

   buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
   },

   buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
   },
});

export default Home;
