export default function SortedItems(props) {

  return (
    <div className="main-div-sorted-items">
      
      <p>Shop our selection of hand chosen items sorted by collection</p>
      <div className="sorted-items-main-div">
        {props.products.map((ph,index) => {
          return (
            <li className="div-img-collection" key={index}>

              {ph.id === 575844974626 && (
                <div className="sorted-items-img-component">
                  <img className="collection-img" src={ph.images[0].src} />
                  <div className="sorted-items-heading-main-div">
                    <span className="h4 sorted-items-title">Dresses</span>
                    <span className="sorted-items-counts">7 ITEMS</span>
                  </div>
                </div>
              )}

              {ph.id === 573170876450 && (
                <div className="sorted-items-img-component">
                  <img className="collection-img" src={ph.images[0].src} />
                  <div className="sorted-items-heading-main-div">
                    <span className="h4 sorted-items-title">Rompers</span>
                    <span className="sorted-items-counts">8 ITEMS</span>
                  </div>
                </div>
              )}

              {ph.id === 575849234466 && (
                <div className="sorted-items-img-component">
                  <img className="collection-img" src={ph.images[0].src} />
                  <div className="sorted-items-heading-main-div">
                    <span className="h4 sorted-items-title">Tops</span>
                    <span className="sorted-items-counts">8 ITEMS</span>
                  </div>
                </div>
              )}

              {ph.id === 573103112226 && (
                <div className="sorted-items-img-component">
                  <img className="collection-img" src={ph.images[0].src} />
                  <div className="sorted-items-heading-main-div">
                    <span className="h4 sorted-items-title">New Arrivals</span>
                    <span className="sorted-items-counts">20 ITEMS</span>
                  </div>
                </div>
              )}
              
            </li>
          );
        })}
      </div>

    </div>
  );
}
