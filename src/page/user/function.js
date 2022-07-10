export const handleRemove = (idProfile, user, setUser) => {
    
    setUser(user.filter(e => e.id !== idProfile))
    
}
