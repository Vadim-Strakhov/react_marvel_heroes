import img from "./error.gif";

const ErrorMessage = () => {
  return (
    //_ для обращения к папке publick
    //   <img src={process.env.PUBLIC_URL + "/error.gif"} />
    <img
      style={{
        display: "block",
        width: "250px",
        height: "250px",
        objectFit: "contain",
        margin: "0 auto",
      }}
      alt="img"
      src={img}
    />
  );
};
export default ErrorMessage;
