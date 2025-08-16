import { useState } from "react";
import { type Task } from "./types";

type FormProps = {
    addTask: (task: Task) => void;
};

function Form({ addTask }: FormProps) {
    const [text, setText] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text) {
            alert("please enter a task");
            return;
        }
        addTask({
            id: new Date().getTime().toString(),
            description: text,
            isCompleted: false,
        });
        setText("");
    };
    return (
        <form className="form task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="text"
                className="form-input"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />
            <button className="btn" type="submit">
                Add Task
            </button>
        </form>
    );
}

export default Form;
