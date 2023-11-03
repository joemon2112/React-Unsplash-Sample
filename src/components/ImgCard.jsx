import React from 'react';
import ImgModal from './ImgModal';

const ImgCard = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [spans, setSpans] = React.useState(0);
    const imgRef = React.useRef(null);

    const calculateSpans = () => {
        const height = imgRef.current.clientHeight;
        setSpans(Math.ceil(height / 10));
    };

    React.useEffect(() => {
        imgRef.current.addEventListener('load', calculateSpans);
    });

    const { description, urls } = props.image;

    return (
        <>
            <div style={{ gridRowEnd: `span ${spans}` }}>
                <img className="ImgCard" onClick={() => setModalShow(true)} ref={imgRef} alt={description} src={urls.regular} />
            </div>

            <ImgModal
                image={props.image}
                show={modalShow}
                onHide={() => setModalShow(false)}
                size={"lg"}
            />
        </>
    );
};

export default ImgCard;