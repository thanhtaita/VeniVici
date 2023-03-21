const Banlist = (details) => {
  return (
    <div className="banlist-container">
      <h3 className="banlist-title">Ban List</h3>
      <p className="banlist-direction">
        Select an attribute in your listing to ban it
      </p>
      <div className="banlist-details-container">
        {details && details.length > 0 ? (
          details.map((detail) => (
            <button className="banlist-detail-each">{detail}</button>
          ))
        ) : (
          <div>
            <h3>Can't load details</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banlist;
