import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function CarouselComponent() {

    return (
        <MDBCarousel showControls style={{ width: "100%", maxHeight: "14rem", minHeight: "14rem" }}>
            <MDBCarouselItem
                style={{ height: "100%" }}
                className='w-100 d-block'
                itemId={1}
                src='https://www.otempo.com.br/image/contentid/policy:1.1779645:1560971014/image-image-jpg.jpg'
                alt='...'
            />
            <MDBCarouselItem
                style={{ height: "100%" }}
                className='w-100 d-block'
                itemId={2}
                src='https://forbes.es/wp-content/uploads/2020/10/Madrid-Barca.jpg'
                alt='...'
            />
            <MDBCarouselItem
                style={{ height: "100%" }}
                className='w-100 d-block'
                itemId={3}
                src='https://365dicas.com/wp-content/uploads/2022/08/fresh-1.webp'
                alt='...'
            />
        </MDBCarousel>
    )
}
export default CarouselComponent