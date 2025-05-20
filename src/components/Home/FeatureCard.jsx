import { Link } from "react-router-dom";

const FeatureCard = ({
  title,
  description,
  icon,
  backgroundColor,
  reverse,
  textPosition = "text-right",
  positionStyles = {},
  linkTo,
}) => {
  return (
    <Link
      to={linkTo}
      className={`rounded-lg py-2 cursor-pointer relative shadow-md flex items-center ${backgroundColor} ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <img
        src={icon}
        alt={`${title} Icon`}
        className="w-26 h-26"
        style={{ position: "relative", ...positionStyles }}
      />
      <div className={`w-full pr-5 pl-3 ${textPosition}`}>
        <h2 className="text-sm mb-2 font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
