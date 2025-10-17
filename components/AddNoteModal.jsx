import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    Modal,
    TextInput,

} from 'react-native'
import React from 'react'

const AddNoteModal = ({
    modalVisible,
    setModalVisible,
    newNoteTitle,
    newNoteContent,
    setNewNoteTitle,
    setNewNoteContent,
    addNewNote
}) => {
  return (
    <Modal
            visible={modalVisible}
            animationType='slide'
            transparent
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Agregar nueva nota</Text>
                {/* Título */}
                <TextInput
                  style={styles.modalInputTitle}
                  placeholder='Titulo de la nota'
                  placeholderTextColor={'#aaa'}
                  fontStyle = 'italic'
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
                    onPress={() => setModalVisible(false)}
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
  )
}

export default AddNoteModal

const styles = StyleSheet.create({
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