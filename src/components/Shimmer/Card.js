


export default function Card() {
  return (
    <div className="top-restaurant-card top-res">
      {[1, 1, 1, 1].map((restaurant,index) => (
        <div className="card skeleton" key={index}>
          <div className="img-holder-skeleton">

          </div>

          <div className="res-content-skeleton">
            <h1 className="res-name-skeleton"></h1>
            <h3 className="est-time-skeleton"></h3>
            <p className="res-cuisine-skeleton"></p>
            <p className="res-location-skeleton"></p>
          </div>
        </div>
      ))}
    </div>
  )
}
