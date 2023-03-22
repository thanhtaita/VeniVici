const Discover = ({ objects }) => {
  return (
    <div className="discover-container">
      <h3 className="discover-title">Who have we seen so far?</h3>
      <div className="discover-objects-container">
        {objects && objects.length > 0 ? (
          objects.map((object) => (
            <li className="discover-object">
              <img
                src={object.img}
                alt="the image from query"
                width="10rem"
                className="discover-object-img"
              />
              <p className="discover-object-details">
                {object.name} dog weights {object.weight} lbs
              </p>
            </li>
          ))
        ) : (
          <div>
            <h3>No dog discovered yet</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
