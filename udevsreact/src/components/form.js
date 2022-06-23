import React from "react";
import { useForm } from "react-hook-form";
import "./css/main.css";
import "./css/register.css";
import img1 from "./img/rectangle11610.png";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const options = [
  { value: "Android", label: "Android" },
  { value: "IOS", label: "IOS" },
  { value: "FrontEnd", label: "FrontEnd" },
  { value: "BackEnd", label: "BackEnd" },
];

const roles = [
  { value: "Admin", label: "Admin" },
  { value: "Teacher", label: "Teacher" },
  { value: "Parent", label: "Parent" },
  { value: "Student", label: "Student" },
];

const genders = [
  { value: "Men", label: "Men" },
  { value: "Women", label: "Women" },
];

function DesktopForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div>
      <div className="desktop-3">
        <div className="frame-56615">
          <div className="frame-56617">
            <div className="frame-56482">
              <div className="frame-56730">
                <div className="rectangle-11610">
                  <img src={img1} alt="img" />
                </div>
                <div className="text">Изменить фото</div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="frame-56727">
                <div className="firsname-filed">
                  <label className="lable-text" htmlFor="firstname-input">
                    Firstname
                  </label>
                  <div className="firstname-gap">
                    <input
                      type="text"
                      className="firstname-input"
                      placeholder="Enter firstname"
                      {...register("firstName", {
                        required: true,
                        minLength: {
                          value: 5,
                          message: "Name should be more then 5 letters",
                        },
                        maxLength: {
                          value: 20,
                          message: "It should be less then 20 words",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.firstName && (
                        <p>
                          {errors?.firstName?.message ||
                            "Tihs name is not available"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="surname-input">
                    Surname
                  </label>
                  <div className="surname-gap">
                    <input
                      type="text"
                      id="surname-input"
                      placeholder="Enter fullname"
                      {...register("SurName", {
                        required: true,
                        minLength: {
                          value: 5,
                          message: "Name should be more then 5 letters",
                        },
                        maxLength: {
                          value: 20,
                          message: "It should be less then 20 words",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.SurName && (
                        <p>
                          {errors?.SurName?.message ||
                            "Tihs Surname is not available"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="birthday-input">
                    Birthday
                  </label>
                  <div className="surname-gap">
                    <input
                      type="date"
                      id="birthday-input"
                      placeholder="Enter birthday"
                      {...register("Date", {
                        required: true,
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Date && (
                        <p>{errors?.Date?.message || "Date is required"}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="gender-input">
                    Gender
                  </label>
                  <div className="surname-gap">
                    <Select
                      options={genders}
                      placeholder={"Choose you gender"}
                      className="skill-input"
                      {...register("gender", {
                        required: true,
                      })}
                    />
                      
                    <div className="firstname-error">
                      {errors?.gender && (
                        <p>{errors?.gender?.message || "Gender is required"}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="contact-input">
                    Contact number
                  </label>
                  <div className="contact-gap">
                    <input
                      id="contact-input"
                      type="text"
                      placeholder="Enter phone number"
                      {...register("Contact", {
                        required: true,
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Contact && (
                        <p>
                          {errors?.Contact?.message ||
                            "Contact Number is required"}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="contact-plus">
                    <span className="plus">+</span>
                  </div>
                </div>

                <div className="surname-filed">
                  <label className="lable-text" htmlFor="email-input">
                    Email
                  </label>
                  <div className="surname-gap">
                    <input
                      type="email"
                      id="email-input"
                      placeholder="Enter email"
                      {...register("Email", {
                        required: true,
                        pattern: {
                          value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Email && (
                        <p>{errors?.Email?.message || "Email is required"}</p>
                      )}
                    </div>
                    {/* <div className="firstname-error">Tihs name is not available</div> */}
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="password-input">
                    Password
                  </label>
                  <div className="surname-gap">
                    <input
                      type="password"
                      id="password-input"
                      placeholder="Enter Password"
                      {...register("Password", {
                        required: true,

                        minLength: {
                          value: 8,
                          message: "Minimum required length is 8",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum required length is 20",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Password && (
                        <p>
                          {errors?.Password?.message || "Password is required"}
                        </p>
                      )}
                    </div>
                    {/* <div className="firstname-error">Tihs name is not available</div> */}
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="coonpassword-input">
                    Confirm Password
                  </label>
                  <div className="surname-gap">
                    <input
                      type="password"
                      id="conpassword-input"
                      placeholder="Enter Confirm Password"
                      {...register("ConfirmPassword", {
                        required: true,
                        minLength: {
                          value: 8,
                          message: "Minimum required length is 8",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum required length is 20",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.ConfirmPassword && (
                        <p>
                          {errors?.ConfirmPassword?.message ||
                            "Confirm Password is required"}
                        </p>
                      )}
                    </div>
                    {/* <div className="firstname-error">Tihs name is not available</div> */}
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text" htmlFor="passport-input">
                    Passport Series
                  </label>
                  <div className="surname-gap">
                    <input
                      type="texxt"
                      id="passport-input"
                      placeholder="Enter Passport Series"
                      {...register("Passport", {
                        required: true,

                        maxLength: {
                          value: 9,
                          message: "Maximum required length is 20",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Passport && (
                        <p>
                          {errors?.Passport?.message ||
                            "Passport series is required"}
                        </p>
                      )}
                    </div>
                    {/* <div className="firstname-error">Tihs name is not available</div> */}
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text">Skill set</label>
                  <div className="surname-gap">
                    <Select
                      className="skill-input"
                      // components={animatedComponents}
                      isMulti
                      isClearable={false}
                      options={options}
                      placeholder={"Choose you skills"}
                      {...register("Skill", {
                        required: true,
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Skill && (
                        <p>
                          {errors?.Skill?.message || "Skill sets is required"}
                        </p>
                      )}
                    </div>
                    {/* <div className="firstname-error">Tihs name is not available</div> */}
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text">Role</label>
                  <div className="surname-gap">
                    <Select
                      className="skill-input"
                      options={roles}
                      placeholder={"Choose you role"}
                      {...register("Role", {
                        required: true,
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Role && (
                        <p>{errors?.Role?.message || "Role is required"}</p>
                      )}
                    </div>
                    {/* <div className="firstname-error">Tihs name is not available</div> */}
                  </div>
                </div>
                <div className="surname-filed">
                  <label className="lable-text">Number of cars</label>
                  <div className="contact-gap">
                    <input
                      id="contact-input"
                      type="text"
                      placeholder="Enter number of cars"
                      {...register("Cars", {
                        required: true,
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.Role && (
                        <p>
                          {errors?.Role?.message ||
                            "Number of cars is required"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="contact-plus">
                    <span className="plus">+</span>
                  </div>
                </div>
                <div className="textarea-filed">
                  <label htmlFor="textarea-input" className="lable-text">
                    About info
                  </label>
                  <div className="textarea-gap">
                    <input
                      id="textarea-input"
                      type="textarea"
                      placeholder="Write about yourself"
                      {...register("TextArea", {
                        required: true,
                        maxLength: {
                          value: 40,
                          message: "it should be less than 40 words",
                        },
                      })}
                    />
                    <div className="firstname-error">
                      {errors?.TextArea && (
                        <p>
                          {errors?.TextArea?.message ||
                            "Messages are required"}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="button-filed">
                  <input className="reset" type="reset" />
                  <input className="save" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopForm;
