const Card = ({ image, title, category, paragraph, type }) => {
  return (
    <>
      <div>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        {type == "A" && (
          <>
            <h6>{category}</h6>
            <p>{paragraph}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
