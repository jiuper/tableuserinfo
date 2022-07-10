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
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
                <Input
                    nameTitle={'surname'}
                    value={newUser.surname}
                    user={newUser}
                    setValue={setNewUser}
                    handleAction={handleAction}
                />
                <Input
                    nameTitle={'age'}
                    value={newUser.age}
                    user={newUser}
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
