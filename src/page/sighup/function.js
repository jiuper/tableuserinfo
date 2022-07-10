export const handleAction = (value, arr, nameTitle, setValue) => {
    setValue({ ...arr, [nameTitle]: value })
}

export const addNewUser = (arr, value, setUser, setNewUser) => {

    const newUser = {
        ...value,
        id: Date.now()
    }
    if (value.name === '' || value.surname === '' || value.age === '') {
        alert('Вы не заполили поля')
    } else {
        setUser([...arr, newUser])
        alert('Вы успешно зарегистрировались')
        setNewUser({ name: '', surname: '', age: '' })
    }
}