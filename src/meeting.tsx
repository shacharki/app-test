import React, {  useRef, useState } from 'react'
import Modal from '@mui/material/Modal';

import { Input, Button, } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components'
import { User, Meeting } from './type';
import { observer } from 'mobx-react-lite';
import dateFormat from "dateformat";
import AddIcon from '@mui/icons-material/Add';
//import meetingsStore from './store/meetingStore'



const AddMeeting = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [meetingUsersId, setMeetingUsersId] = useState("");


    const addEditMeeting = async (ev: any) => {
        ev.preventDefault();
        setIsLoading(true)

    }

    const handleChangeMeetinDate = (date: Date | null) => {
        if (date) {
            // meetingsStore.updateCurrentMeetingDate(date)
        }
    }

    const handleUpdateMeetingType = (value: Meeting | null) => {
        //  meetingsStore.updateMeetingType(value?.description)
    }

    const handleChangeMeetingUsers = (ev: React.ChangeEvent<HTMLInputElement>) => {
        //const Meeting = meetingsStore.getProjectById(ev.target.value)
        // if (Meeting) {
        // setMeetingUsersId(user.id)
        //  const meetingtUsersIds = Meeting.users?.map((user: User) => {
        //       return user.id
        //   }) || []
        //   meetingsStore.updateCurrentMeeting(meetingtUsersIds)
    }
}

const handleChangeHours = (ev: React.ChangeEvent<HTMLInputElement>) => {
    var timeParts = ev.target.value.split(":");
    const isStart = ev.target.name === "start" ? true : false
    //  meetingsStore.updateMeetingHours(Number(timeParts[0]) + Number(timeParts[1]) / 60, isStart)
}


const setUsers = (values: User[]) => {
    setMeetingUsersId(values)
}

const getFullName = (user: User) => `${user.firstName} ${user.lastName}`

const getMeetingType = (meeting: Meeting) => `${meeting.description}`

return (
    <div>
        <Tooltip title={"Add meeting"}>
            <AddIcon className="icon" style={{ paddingTop: '5px', fontSize: '3rem' }} color="warning" onClick={toggleModal} />
        </Tooltip>

        <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div onSubmit={addEditMeeting} className="modalAddTask" >

                <FormGroup className="formContainer">

                    <div className='bottomAddEdit'>

                        <LocalizationProvider dateAdapter={AdapterDateFns} >
                            <DatePicker
                                label="Date"
                                inputFormat="dd/MM/yyyy"
                                value={""}
                                onChange={(d: Date | null) => handleChangeMeetinDate(d)}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>


                        <TextField id="outlined-basic"
                            label="Start Time"
                            value={ }
                            InputProps={{
                                inputProps: {
                                    max: 24, min: 0
                                }
                            }}
                            type='time' onChange={handleChangeHours} name='start' />
                        <TextField id="outlined-basic"
                            label="End Time"
                            value={ }
                            InputProps={{
                                inputProps: {
                                    max: 24, min: 0
                                }
                            }}
                            type='time' onChange={handleChangeHours} name='end' />
                        <TextField
                            label="Recuring"
                            select
                            id="demo-simple-select-helper"
                            value=''}
                        name='entryType'
                        onChange={handleChangeRecuringType}
                            >
                        <MenuItem style={{ display: 'block', padding: 7 }} >NONE</MenuItem>
                        <MenuItem style={{ display: 'block', padding: 7 }} >DAILY</MenuItem>
                        <MenuItem style={{ display: 'block', padding: 7 }} >WEEKLY</MenuItem>
                        <MenuItem style={{ display: 'block', padding: 7 }} >MONTHLY</MenuItem>
                    </TextField>

            </div>


            <FormControl className="taskInput" >
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <StyledInput id="my-input" aria-describedby="my-helper-text" value={""} inputRef={subjectRef} onChange={handleUpdateMeetingType} name='subject' autoComplete="off" />
            </FormControl>
            <FormControl className="taskInput">
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <StyledInput id="my-input" aria-describedby="my-helper-text" value={""} onChange={handleChangeDescription} name='description' />
            </FormControl>
        </FormGroup>
    </div>
            </Modal >
        </div >
    )
}
export default observer(AddMeeting);

function setMeetingUsersId(values: User[]) {
    throw new Error('Function not implemented.');
}

