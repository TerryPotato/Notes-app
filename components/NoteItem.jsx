import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'

const NoteItem = ({note}) => {
  return (
        <View style={styles.item}>
            <Text style={styles.title}>{note.title}</Text>
            <Text style={styles.content}>{note.text}</Text>
        </View>
    )
}
export default NoteItem

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#FCD34D',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign : 'left'
    },
    content: {
      fontSize : 18,
      textAlign : 'justify'
    },
})