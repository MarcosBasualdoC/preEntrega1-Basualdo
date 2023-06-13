import img1 from '../img/imagenInicio.jpg'
import img2 from '../img/imagenInicio2.jpg'
import img3 from '../img/imagenInicio3.jpg'
import img4 from '../img/imagenInicio4.jpg'

const Inicio = () =>{
    return(
        <div className='inicioBox'>
            <div className='primerBox'>
                <img src={img1} alt='imagen de motherboards'/>
            </div>
            <div className='segundoBox'>
                <img src={img2} alt='imagen de discos'/>
                <img src={img3} alt='imagen de fuentes'/>
                <img src={img4} alt='imagen de procesadores'/>
            </div>
        </div>
    )
}

export default Inicio