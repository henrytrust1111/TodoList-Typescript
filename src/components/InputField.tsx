

const InputField = () => {
  return (
    <form className="input">
        {/* BEM (Block Element Modifier) */}
        <input type="input" placeholder="Enter a task" className="input__box" />
    </form>
  )
}

export default InputField