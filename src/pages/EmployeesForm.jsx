import React, {useState} from 'react';
import Grid from '@mui/system/Unstable_Grid/Grid';
import InputFields from '../components/InputFields';
import RadioGroups from '../components/RadioGroups';
import SelectEl from '../components/SelectEl';
import {GetDepartments} from '../components/GetDepartments';
import CheckBox from '../components/CheckBox';


const genderItems = [
    {id:"male", title:"Male"},
    {id:"female", title:"Female"},
    {id:"other", title:"Other"},
]

const initialValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeesForm() {

    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }

  return (
    <form>
        <Grid container>
            <Grid item xs={6}>
                <InputFields 
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleChange}/>              
                <InputFields 
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}/>
            </Grid>
            <Grid item xs={6}>
                <RadioGroups 
                    name="gender"
                    lable="gender"
                    value={values.gender}
                    onChange={handleChange}
                    items={genderItems}/>
                <SelectEl 
                    name="departmentId"
                    lable="Department"
                    value={values.departmentId}
                    onChange={handleChange}
                    options={GetDepartments()}/>
                <CheckBox 
                    name="isParmanent"
                    label="Permanent Employee"
                    value={values.isPermanent}
                    onChange={handleChange}/>
            </Grid>
        </Grid>
    </form>
  )
}
