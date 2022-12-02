import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Axios from 'axios'

export default function FormDialog(props: any) {
  // buscamos dentro do cards em FormDialog como parâmetro
  const [editValues, setEditValues] = useState({
    // quando for editar inicia com os valores padrão
    id: props.id,
    name: props.name,
    cost: props.cost,
    category: props.category,
  })

  const handleEditGame = () => {
    Axios.put('http://localhost:3000/edit', {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      category: editValues.category,
    })

    // fecha a tela assim que salvar
    handleClose()

    document.location.reload()
  }

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3000/delete/${editValues.id}`)
    handleClose()

    document.location.reload()
  }

  const handleClickOpen = () => {
    props.setOpen(true)
  }

  const handleClose = () => {
    props.setOpen(false)
  }

  const handleChangeValues = (value: any) => {
    setEditValues((prevValues: any) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }))
  }

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Editar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome do Game"
          defaultValue={props.name}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="cost"
          label="Preço"
          defaultValue={props.cost}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          margin="dense"
          id="category"
          label="Categoria"
          defaultValue={props.category}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDeleteGame}>Excluir</Button>
        <Button onClick={handleEditGame}>Salvar</Button>
      </DialogActions>
    </Dialog>
  )
}
