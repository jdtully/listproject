import React from "react";
import { Formik } from "formik";

//import { useFormik } from "formik";
export class AddUserForm extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            username: "bob",
            userdate: "07141963",
            usernumber: "22",
            userphone: "555111212"
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <form>
              <div className="input-row">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter a name"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="input-row">
                <label htmlFor="userdate">Userdate : </label>
                <input
                  type="text"
                  name="userdate"
                  placeholder="Enter a date"
                  value={values.userdate}
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></input>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
