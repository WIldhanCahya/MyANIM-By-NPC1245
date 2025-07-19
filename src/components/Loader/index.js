const { ClipLoader } = require("react-spinners")

const Loader = () => {
    return (
        <ClipLoader color="#36d7b7" size={250} className="absolute top-[50%] start-[40%]"/>
    )
}

export default Loader