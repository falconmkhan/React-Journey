import { useState } from "react";

const Forms = () => {

    const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
    },
    card: {
        padding: "30px",
        borderRadius: "12px",
        width: "380px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
        color: "#f1f1f1",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },
    textarea: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        resize: "none",
        height: "80px",
    },
    select: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
    },
    checkboxGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    button: {
        padding: "10px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#4d4d4d",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
    },
};

    // const [name, setName] = useState("")
    // const [textarea, setTextarea] = useState("")
    // const [select, setSelect] = useState("")
    // const [check, setCheck] = useState({}) // {} <= this is because checkbox have multiple values

    const [form, setForm] = useState({});

    const change = (e) => {
        // const target = e.target
        // setName(e.target.value)
        // setTextarea(e.target.value)
        // setSelect(e.target.value)

        // const value = target.type === 'checkbox' ? target.checked : target.value
        // const name = target.name
        // setCheck(values => ({...values, [name]: value}))

        // console.log(e.target.name)
        // console.log(e.target.value)

        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;


        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));

        console.log(name + "\t" + value);
    };

    function submit(e) {
        // console.log(name)
        // console.log(textarea)
        // console.log(select)
        // console.log(check.hello)
        // alert("Form Submited Values Are" + check)

        e.preventDefault();

        let wants = "";

        if (form.body) wants += `wants bodybuilding `;
        if (form.boxing) {
            if (form.body) wants += "but also ";
            wants += `wants boxing`;
        }

        alert(`Form Submitted

Name is: ${form.name}
Message is: ${form.textarea}
Goal is: ${form.goal}
${form.name}: ${wants}
Gender is: ${form.gender}
`);
    }

    return (
        <>
            <div style={styles.container}>
                <div style={styles.card}>
                    <h1 style={styles.title}>Forms In React</h1>

                    <form onSubmit={submit} style={styles.form}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={change}
                            style={styles.input}
                        />

                        <textarea
                            name="textarea"
                            placeholder="Enter your message"
                            value={form.textarea}
                            onChange={change}
                            style={styles.textarea}
                        />

                        <select
                            name="goal"
                            value={form.goal}
                            onChange={change}
                            style={styles.select}
                        >
                            <option value="">Select</option>
                            <option value="fat_to">Fat to Muscular</option>
                            <option value="skinny_to">Skinny to Muscular</option>
                        </select>

                        <div style={styles.checkboxGroup}>
                            <label>
                                Boxing:
                                {/* <input type="checkbox" onChange={change} name="hello" value={check.hello} /> */}
                                <input
                                    type="checkbox"
                                    name="boxing"
                                    checked={form.boxing}
                                    onChange={change}
                                />
                            </label>

                            <label>
                                Bodybuilding:
                                <input
                                    type="checkbox"
                                    name="body"
                                    checked={form.body}
                                    onChange={change}
                                />
                            </label>
                        </div>

                        <div>
                            Gender:
                            <label> Male<input type="radio" name="gender" value="male" onChange={change}  /> </label>
                            
                            <label>Female <input type="radio" name="gender" value="female" onChange={change}  /> </label>
                        </div>

                        <button type="submit" style={styles.button}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};


export default Forms;
