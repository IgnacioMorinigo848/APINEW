import React from "react";
import { useState } from "react";
import "../Style/FormLog.css"
import { useNavigate } from "react-router-dom";

export function InsertEmail(){
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
  
    const validateForm = () => {
      let errors = {};
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
      if (!email || !regexEmail.test(email)) {
        errors.email = "Invalid email";
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      //USERS
      try {
        if (validateForm()){
          navigate(`/insertCode?email=${email}`);
        }
       
      } catch {
        alert("User not exist");
      }
  
    };
  
  
  
    return(
    <div className="principal-contenedor-form-email">
        <div className="contenedor-form">
            <h1 className="">Recover account</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                <input
                    type="text"
                    className="form-control"
                    id="staticEmail2"
                    placeholder="Type email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <p className={errors.email !== "" ? "error" :"mensajeError"} id="mensajeEmail">{errors.email}</p>
                </div>
                <button type="submit" className="btn btn-primary">
                Confirm
              </button>
            </form>
        </div>
    </div>
    );
}
