import React from 'react'
import { Input } from '../../component/input/Input'
import { ButtonAction } from '../../component/otherButtons/ButtonAction'
import { addNewUser, handleAction } from './function'
export const Form = ({ user, setUser, newUser, setNewUser }) => {
    return (
        <>
            <div className='form__items'>
                <Input
                    nameTitle={'name'}
                    value={newUser.name}
                    user={newUser}
                    nameUserTitle={'name'}
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
                <Input
                    nameTitle={'surname'}
                    value={newUser.surname}
                    user={newUser}
                    nameUserTitle={'surname'}
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
                <Input
                    nameTitle={'age'}
                    value={newUser.age}
                    user={newUser}
                    nameUserTitle={'age'}
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
                <Input
                    nameTitle={'nationality'}
                    value={newUser.nationality}
                    user={newUser}
                    nameUserTitle={'nationality'}
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
                <Input
                    nameTitle={'married'}
                    value={newUser.married}
                    user={newUser}
                    nameUserTitle={'married'}
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
            </div>
            <div className='form__button'>
                <ButtonAction
                    user={user}
                    newUser={newUser}
                    setUser={setUser}
                    setNewUser={setNewUser}
                    handleAction={addNewUser}
                >
                    Add User
                </ButtonAction>
            </div>
        </>
    )
}
