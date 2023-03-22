const Banlist = ({ details, setDetails }) => {
  const removeAttribute = (attribute) => {
    const newAttribute = details.filter((detail) => detail !== attribute);
    setDetails(newAttribute);
  };
  return (
    <div className="banlist-container">
      <h3 className="banlist-title">Ban List</h3>
      <p className="banlist-direction">
        Select an attribute in your listing to ban it
      </p>
      <div className="banlist-details-container">
        {details && details.length > 0 ? (
          details.map((detail) => (
            <button
              className="banlist-detail-each"
              onClick={(e) => removeAttribute(e.target.textContent)}
            >
              {detail}
            </button>
          ))
        ) : (
          <div>
            <h3>No attribute yet</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banlist;
