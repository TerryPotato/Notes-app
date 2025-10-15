//rnfes
//npx expo start -c
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import NotesList from '../../components/NotesList'

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {id: 1, title: "Universidad", text: "- Examen de dinamica"},
  ])

  const [modalVisible, setModelVisible] = useState(false)
  // Estados separados para título y contenido
  const [newNoteTitle, setNewNoteTitle] = useState('')
  const [newNoteContent, setNewNoteContent] = useState('')

  const addNewNote = () => {
    // Validación: ambos campos deben tener texto
    if (newNoteTitle.trim() === '' || newNoteContent.trim() === '') return
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now().toString(),
        title: newNoteTitle,
        text: newNoteContent
      }
    ])
    setNewNoteTitle('')
    setNewNoteContent('')
    setModelVisible(false)
  }

  return (
    <View style={styles.container}>
      {/* Asegúrate que NotesList muestre el título y el contenido */}
      <NotesList notes={notes} />
      <TouchableOpacity style={styles.addbtn} onPress={() => setModelVisible(true)}>
        <Text style={styles.addbtnText}>Agregar</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={() => setModelVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar nueva nota</Text>
            {/* Título */}
            <TextInput
              style={styles.modalInputTitle}
              placeholder='Titulo de la nota'
              placeholderTextColor={'#aaa'}
              onChangeText={setNewNoteTitle}
              value={newNoteTitle}
            />
            {/* Contenido */}
            <TextInput
              style={styles.modalInputContent}
              placeholder='Contenido de la nota'
              placeholderTextColor={'#aaa'}
              onChangeText={setNewNoteContent}
              value={newNoteContent}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModelVisible(false)}
              >
                <Text style={styles.cancelBtnText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.agregarBtn}
                onPress={addNewNote}
              >
                <Text style={styles.agregarBtnText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f5e14f',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 28,
  },
  addbtn :{
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#10B981',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  addbtnText:{
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection : 'row',
    justifyContent: 'center'
  },
  modalOverlay : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 24, 25, 0.6)',
  },
  modalContent : {
    backgroundColor : '#faf9fe',
    padding : 20,
    borderRadius : 20,
    width : '80%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitle : {
    fontSize: 24,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  modalInputTitle : {
    fontSize : 18,
    fontStyle : 'italic', 
    borderColor : '#cccc',
    borderWidth : 2,
    borderRadius : 10,
    marginTop : 20,
    marginBottom : 20,
    backgroundColor : '#cccccc1e',
    padding: 10
  },
  modalInputContent : {
    fontSize : 18,
    fontStyle : 'italic', 
    borderColor : '#cccc',
    borderWidth : 2,
    borderRadius : 10,
    marginTop : 20,
    marginBottom : 20,
    backgroundColor : '#cccccc1e',
    padding: 10
  },
  cancelBtn: {
    backgroundColor : '#ff0000',
    padding: 10,
    borderRadius: 5,
    flex : 1,
    marginRight : 10,
    alignItems : 'center'
  },
  cancelBtnText : {
    fontSize : 16,
    color : '#ffff'
  },
  agregarBtn: {
    backgroundColor : '#37a5ffff',
    padding: 10,
    borderRadius: 5,
    flex : 1,
    alignItems : 'center'
  },
  agregarBtnText : {
    fontSize : 16,
    color : '#ffff'
  },
});