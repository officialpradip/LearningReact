function Btn(){
    const clickHandler=()=> console.log(" Click Handler")
    return(
        <button onclick={clickHandler}>
        Click Me
        </button>

    )
}
export default Btn;