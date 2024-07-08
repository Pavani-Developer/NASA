export default function SideBar(props){

    const {showModal,handleDisplay,data} = props
    return(
        <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContents">
        <h2>{data['title']}</h2>
        <div>
            <h3>Explanation:</h3>
            <p>{data['explanation']}</p>
        </div>
        <button onClick={handleDisplay}>
        <i className="fa-solid fa-right-to-bracket"></i>
        </button>
        </div>

        </div>
    )
}