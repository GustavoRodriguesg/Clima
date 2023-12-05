import React, { useState} from 'react';
import { View, Text, TextInput, Button ,StyleSheet} from 'react-native';
import axios from 'axios';

const Home = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cityName, setCity] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const apiKey = 'SUA_CHAVE_DO_OPENWEATHERMAP';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

      const response = await axios.get(apiUrl);
      const tempInCelsius = response.data.main.temp - 273.15;
      setTemperature(tempInCelsius.toFixed(2));
    } catch (error) {
      console.error('Erro ao obter a temperatura:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Digite uma cidade:</Text>
      <TextInput
      style={styles.textInput}
        placeholder="Nome da cidade"
        onChangeText={text => setCity(text)}
        value={cityName}
      />
      <Button
        title="Enviar"
        onPress={fetchData}
      />
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <Text>A temperatura em {cityName} é: {temperature}°C</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput:{
    height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 ,width: '80%',padding:10

  },
  container:{
    marginTop:100,
    display:'flex',
    gap:19,
    width:'100%',
  
    justifyContent: 'center',
    alignItems: 'center',

},

});
export default Home;


