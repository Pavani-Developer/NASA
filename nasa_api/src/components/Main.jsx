import logo from '../assets/logo.jpg'
export default function Main(props){
    const {data} = props
    return(
        <div className='imgContainer'>
        <img className = 'bgImage' src={data['hdurl']} alt=""/>

        </div>
    )
}