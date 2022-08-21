import React,{useState} from 'react';
import './App.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from './components/Input';
import UserComp from './components/UserComp';

function App() {

  const [Users, setUsers]= useState([]);

  const formik = useFormik({
    initialValues : {
      name : "",
      age : "",
      sex : "",
      mobile : "",
      idType : "",
      govtId : "",
      gdLabel : "",
      gdName : "",
      email : "",
      emrNumber : "",
      address : "",
      state : "",
      city : "",
      country : "",
      pincode : "",
      occupation : "",
      religion : "",
      mStatus : "",
      bGroup : "",
      nationality : "",
    },
    validationSchema : Yup.object({
      name : Yup.string().max(15,"Must be 15 or less").required("Required"),
      age : Yup.number().required("Required"),
      sex: Yup.string().required("Required"),
      govtId : Yup.string().required("Required"),
      address : Yup.string().required("Required"),
    }),
    onSubmit : (Val)=>{
      let newUser= {
        name : Val.name,
        age: Val.age,
        sex : Val.sex,
        mobile : Val.mobile,
        idType : Val.idType,
        govtId : Val.govtId,
        gdLabel : Val.gdLabel,
        gdName : Val.gdName,
        email : Val.email,
        emrNumber : Val.emrNumber,
        address : Val.address,
        state : Val.state,
        city : Val.city,
        country : Val.country,
        pincode : Val.pincode,
        occupation : Val.occupation,
        religion : Val.religion,
        mStatus : Val.mStatus,
        bGroup : Val.bGroup,
        nationality : Val.nationality,

      }
      setUsers([...Users,newUser]);
    }
  });


  return (
    <div className="App">
      <header>
        <h2>Register Yourself</h2>
      </header>
      <form className="form_container" onSubmit={formik.handleSubmit}>
        <h4>Personal Details</h4>
        <div className="personal_details">
        <Input type="text" id="name" label="Name" Formik={formik} Value={formik.values.name} />
        <Input type="text" id="age" label="Age" Formik={formik}  Value={formik.values.age} />
        <Input type="text" id="sex" label="Sex " Formik={formik}  Value={formik.values.sex} />
        <Input type="text" id="mobile" label="Mobile Number" Formik={formik} Value={formik.values.mobile}/>
        <Input type="text" id="idType" label="Id type" Formik={formik} Value={formik.values.idType} />
        <Input type="text" id="govtId" label="Govt. Issued Id" sp={true} Formik={formik} Value={formik.values.govtId} />
        </div>
        <h4>Contact Details</h4>
        <div className="contact_details">
          <Input type="text" id="gdLabel" label="Guardian Details" Formik={formik} Value={formik.values.gdLabel}/>
          <Input type="text" id="gdName" label="Guardian Name" sp={true} Formik={formik} Value={formik.values.gdName} />
          <Input type="text" id="email" label="Email" Formik={formik} Value={formik.values.email} />
          <Input type="text" id="emrNumber" label="Emergency Number" Formik={formik} Value={formik.values.emrNumber}/>
        </div>
        <h4>Address Details</h4>
        <div className="address_details">
          <Input type="text" id="address" label="Address" Formik={formik} Value={formik.values.address} />
          <Input type="text" id="state" label="State" Formik={formik} Value={formik.values.state} />
          <Input type="text" id="city" label="City" Formik={formik} Value={formik.values.city} />          
          <Input type="text" id="country" label="Country" Formik={formik} Value={formik.values.country} />
          <Input type="text" id="pincode" label="Pincode" Formik={formik} Value={formik.values.pincode} />
        </div>
        <h4>Other Details</h4>
        <div className="other_details">
          <Input type="text" id="occupation" label="Occupation" Formik={formik} Value={formik.values.occupation} />
          <Input type="text" id="religion" label="Religion" Formik={formik} Value={formik.values.religion} />
          <Input type="text" id="mStatus" label="Marital Status" Formik={formik} Value={formik.values.mStatus} />          
          <Input type="text" id="bGroup" label="Blood Group" Formik={formik} Value={formik.values.bGroup} />
          <Input type="text" id="nationality" label="Nationality" Formik={formik} Value={formik.values.nationality} />
        </div>
        <div className="submission">
          <button type='button' className='btn_red'>Cancel</button>
          <button type='submit' className='btn_green'>Submit</button>
        </div>
        {(formik.errors.name || formik.errors.age || formik.errors.sex) ?  <p className='required'>Cannot submit, Fill the required* fields first</p> : ""}
      </form>
      {Users.length !==0 && <h4>All Registered Users</h4>}
      <section className="all_users">
          {Users.length ===0 ? "" :
            Users.map((usr,i)=>{
              return(
                <UserComp key={i} user={usr} />
              )
            })
          }
      </section>
    </div>
  );
}

export default App;
