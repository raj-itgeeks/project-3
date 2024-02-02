import { Link } from "react-router-dom";

export default function CollectionNavigation(props) {
  return (
    <div
      className="collection-image-component"
      onMouseLeave={() => {
        props.showCollection(false);
      }}
    >
      {props.products.map((ph, index) => {
        return (
          <li className="div-img-collection" key={index}>
            {ph.id === 575844974626 && (
              <Link to="collections/Dress" className="img-component">
                <img className="collection-img" src={ph.images[0].src} />
                <p className="collection-title">Dresses</p>
              </Link>
            )}

            {ph.id === 573170876450 && (
              <Link to="collections/Romper" className="img-component">
                <img className="collection-img" src={ph.images[0].src} />
                <p>Rompers</p>
              </Link>
            )}

            {ph.id === 575849234466 && (
              <Link to="collections/Top" className="img-component">
                <img className="collection-img" src={ph.images[0].src} />
                <p>Tops</p>
              </Link>
            )}

            {ph.id === 573103112226 && (
              <Link to="collections/new-arrivals" className="img-component">
                <img className="collection-img" src={ph.images[0].src} />
                <p>New Arrivals</p>
              </Link>
            )}
          </li>
        );
      })}
    </div>
  );
}
