export const handleRemove = (idProfile, user, setUser,setError) => {

    setUser(user.filter(e => e.id !== idProfile))
    setError('Not found user data!')
}
