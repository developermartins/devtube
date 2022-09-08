export const inputs = (value) => {
    return [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character.",
            required: true,
            pattern: "^[A-Za-z0-9]{3,16}$",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "It should be a valid email address.",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            errorMessage: 
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm password",
            label: "Confirm password",
            errorMessage: "Passwords don't match.",
            required: true,
            pattern: value,
        },
    ];
};
