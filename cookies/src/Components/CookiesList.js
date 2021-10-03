import Cookie from "./Cookie";

export default function CookiesList({ cookies }) {
  let cookiesArray = cookies.map((element) => <Cookie info={element} />);
  return <div className="cookie-list">{cookiesArray}</div>;
}
