//rnfes
//npx expo start -c
import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import NotesList from '../../components/NotesList'
import AddNoteModal from '../../components/AddNoteModal'

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    {id: 1, title: "Universidad", text: "- Examen de dinamica"},
  ])

  const [modalVisible, setModalVisible] = useState(false)
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
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {/* NotesList muestra el título y el contenido */}
      <NotesList notes={notes} />
      <TouchableOpacity style={styles.addbtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.addbtnText}>Agregar</Text>
      </TouchableOpacity>
      {/*Aqui esta el modal */}
      <AddNoteModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      //newNote
      newNoteTitle={newNoteTitle}
      newNoteContent={newNoteContent}
      //setNewNote
      setNewNoteTitle={setNewNoteTitle}
      setNewNoteContent={setNewNoteContent}

      addNewNote={addNewNote}

      ></AddNoteModal>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
});