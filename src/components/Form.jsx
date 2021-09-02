import React, {useState} from "react";

const Form = () => {

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        conf_password: ""
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
        console.log("name: ", formState.firstName)
    }

    return (
        <div>
            <div>
                <form className="grid-container">
                    <label class="item1-1 box" htmlFor="firstName">
                        First Name:
                    </label>
                    <input
                        onChange={changeHandler}
                        class="item1-2 box"
                        type="text"
                        name="firstName"
                        id="firstName"
                    />

                    <label class="item2-1 box" htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                        onChange={changeHandler}
                        class="item2-2 box"
                        type="text"
                        name="lastName"
                        id="lastName"
                    />

                    <label class="item3-1 box" htmlFor="email">
                        Email:
                    </label>
                    <input
                        onChange={changeHandler}
                        class="item3-2 box"
                        type="email"
                        name="email"
                        id="email"
                    />

                    <label class="item4-1 box" htmlFor="password">
                        Password:
                    </label>
                    <input
                        onChange={changeHandler}
                        class="item4-2 box"
                        type="password"
                        name="password"
                        id="password"
                    />

                    <label class="item5-1 box" htmlFor="conf_password">
                        Confirm Password:
                    </label>
                    <input
                        onChange={changeHandler}
                        class="item5-2 box"
                        type="password"
                        name="conf_password"
                        id="conf_password"
                    />
                </form>
            </div>
            <div class="center">
                <p class="item6-1">First Name:</p>
                <p class="item6-2">{formState.firstName}</p>
                <p class="item7-1">Last Name:</p>
                <p class="item7-2">{formState.lastName}</p>
                <p class="item8-1">Email:</p>
                <p class="item8-2">{formState.email}</p>
                <p class="item9-1">Password:</p>
                <p class="item9-2">{formState.password}</p>
                <p class="item10-1">Confirm Password:</p>
                <p class="item10-2">{formState.conf_password}</p>
            </div>
        </div>
    );
};

export default Form;
