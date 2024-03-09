import './style.css';
import Image from 'next/image'
const Srodkowy = () => {
    return(
        <>
            <div className="s_wszystko">
            <div className="s_duzy">
                <div className=""> <Image
      src="/logo.png"
      width={350}
      height={75}
      alt="Picture of the author"
    /></div>
                <div className="s_input"><input placeholder='Co chcesz kupić?'></input><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="palevioletred" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg></div>
                <div className="koszyk"><p>twój koszyk</p></div>
            </div>
            
        </div>
        </>
    )
    
}
export default Srodkowy