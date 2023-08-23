import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Pressable, StylesSheet, Text, View, TextInputProps } from 'react-native';

export default function App() {
  const [valorLitro, setValorLitro] = usestate ('5, 52')
  const [quantidadeAbastecimento, setquantidadeAtribuida] = usestate ('')
  const [kmRodado, setkmRodado] = usestate ('')
  
                   
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gasto de Combustível</Text>
      <View>
        <Text style={styles.title}>Valor do Litro</Text>

      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
