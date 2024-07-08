export default function Footer(props){

    const {showModal,handleDisplay,data} = props
    return(
        <footer>
        <div className="bagGradient"></div>
        <div>
            <h2>{data['title']}</h2>
            <h1>Nasa Pic of the Day</h1>
            <p>{data['date']}</p>
            <p>{data['copyright']}</p>
        </div>
        <button onClick={handleDisplay}>
        <i className="fa-solid fa-circle-info"></i>        </button>
        
        </footer>
    )
}