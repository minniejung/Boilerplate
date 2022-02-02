import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import apiHandler from "../../api/apiHandler";

const FormSignUp = () => {
	const [values, handleChange] = useForm({ email: "", password: "" });
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		apiHandler
			.signup(values)
			.then(() => {
				navigate("/signin");
			})
			.catch((error) => {
				setError(error.response.data);
			});
	};
	return (
		<>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Signup</h2>
				<label htmlFor="email">Email</label>
				<input
					onChange={handleChange}
					value={values.email}
					type="email"
					id="email"
					name="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={handleChange}
					value={values.password}
					type="password"
					id="password"
					name="password"
				/>
				<button>Submit</button>
			</form>
		</>
	);
};

export default FormSignUp;