import { useFormik } from 'formik';
import React from 'react'
import axios from 'axios';
import { env } from './Config';

function CreateUsers() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: ""
    },
    validate: (values)=>{
      let errors = {};
       
      if(values.name == "" ){
        errors.name = "*Please enter name"
      }
      if(values.name.length <= 3){
        errors.name = "*Please enter greter then 3"
      }
      if(values.position == ""){
        errors.position = "*Please enter position"
      }
      if(values.office == ""){
        errors.office = "*Please enter office name"
      }
      if(values.age == ""){
        errors.age = "*Please enter age"
      }
      if(values.age.length <= 1){
       errors.age ="Please enter the valied age"
      }
      if(values.startDate == ""){
        errors.startDate = "*Please enter startDate"
      }
      if(values.salary == ""){
        errors.salary = "*Please enter salary"
      }
      return errors
    },
    onSubmit: async (values) => {
    let user = await axios.post(`${env.api}/student`,values)
    alert("user created")
    }, 
  })
  return (
    <>  
      <div className='container'>
        <form onSubmit={formik.handleSubmit}>
          <div className='row'>
            <div className='col-lg-6'>
              <label>Name</label>
              <input className={`form-control ${formik.errors.name ? `input-errors` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" />
              <span style={{color:'red'}}>{formik.errors.name}</span>
            </div>
            <div className='col-lg-6'>
              <label>Father Name</label>
              <input className='form-control' type={"text"} value={formik.values.position} onChange={formik.handleChange} name="position" />
              <span style={{color:'red'}}>{formik.errors.position}</span>
            </div>
            <div className='col-lg-6'>
              <label>DOB</label>
              <input className='form-control' type={"text"} value={formik.values.office} onChange={formik.handleChange} name="office" />
              <span style={{color:'red'}}>{formik.errors.office}</span>
            </div>
            <div className='col-lg-6'>
              <label>Age</label>
              <input className='form-control' type={"text"} value={formik.values.age} onChange={formik.handleChange} name="age" />
              <span style={{color:'red'}}>{formik.errors.age}</span>
            </div>
            <div className='col-lg-6'>
              <label>Admission Date</label>
              <input className='form-control' type={"text"} value={formik.values.startDate} onChange={formik.handleChange} name="startDate" />
              <span style={{color:'red'}}>{formik.errors.startDate}</span>
            </div>
            <div className='col-lg-6'>
              <label>Contact</label>
              <input className='form-control' type={"text"} value={formik.values.salary} onChange={formik.handleChange} name="salary" />
              <span style={{color:'red'}}>{formik.errors.salary}</span>
            </div>
            <div className='col-lg-6'>
              <input className='btn btn-primary mt-4' type={"submit"} value="Submit" disabled={!formik.isValid} />
            </div>
          </div>
        </form>


      </div>
    </>
  )
}

export default CreateUsers;
