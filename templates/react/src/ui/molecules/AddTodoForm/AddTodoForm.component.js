import React, { useEffect, useState } from "react";
import NativeInput from "../../atoms/NativeInput/NativeInput.component";
import NativeButton from "../../atoms/NativeButton/NativeButton.component";

const AddTodoForm = ({ buttonInfo, onTodoAdd, onTodoUpdate, todoValue }) => {
  const [inputValue, setInputValue] = useState(todoValue || '');
  const { label, variant } = buttonInfo;

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => setInputValue(todoValue), [todoValue]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputValue.trim()) {
            return;
          }
          if(todoValue) {
            onTodoUpdate(inputValue);
          } else {
            onTodoAdd(inputValue);
          }
          setInputValue('');
        }}
      >
        <div className="grouped">
          <NativeInput className="" value={inputValue} onChange={handleChange} />
          <NativeButton className={`button ${variant}`} type="submit">
            {label}
          </NativeButton>
        </div>
      </form>
    </div>
  );
};

AddTodoForm.defaultProps = {
  buttonInfo: {
    label: 'Add',
    variant: 'primary'
  }
}

export default AddTodoForm;
