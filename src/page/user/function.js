export const handleRemove = (idProfile, user, setUser, setProfile) => {
    setProfile(user.filter(e => e.id === idProfile))
    setUser(user.filter(e => e.id !== idProfile))
}

export const handleProfile = (idProfile, setProfile, user) => {
    setProfile(user.find(e => e.id === idProfile))
}