import React from "react";

function ChaptersList() {
  const [states, setState] = useState([]);
  const [errors, setError] = useState();
  useEffect(
    () => {
      axios
        .get(`https://reqres.in/api/users?page=2`)
        .then((response) => {
          setState(response.data.data);
        })
        .then((err) => setError(err));
    },
    [states],
    [errors]
  );

  const error = () => {
    return (
      <div className=" error alert alert-danger " role="alert">
        Error: There is no data
      </div>
    );
  };

  return (
    <div className="subject">
      <div className="subject__container">
        {/* login container 2 */}
        <div className="subject__container1">
          <div className="chap__container">
            <div className="chap__title">{title}</div>
            <div className="chap__info">{info}</div>
            <div className="chap__info2">{info2}</div>
            <div className="chap__img">{img}</div>
          </div>
        </div>
        {/* login container 2 end */}
        <div className="login__container2">
          <p>All Right Reserved | STEPAPP 2021</p>
        </div>
      </div>
      {/* login container end  */}
    </div>
  );
}

export default ChaptersList;
