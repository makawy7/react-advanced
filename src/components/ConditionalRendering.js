import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

function ConditionalRendering() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  const getData = async () => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error("error");
        }
      })
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((e) => setIsError(true));
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log("rendering");

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3 style={{ color: "red" }}>Error occured while fetching data</h3>
      </div>
    );
  }

  return (
    <ul className="users">
      <li key={user.id}>
        <img src={user.avatar_url} alt={user.login} />
        <div>
          <h4>{user.login}</h4>
          <a href={user.html_url}>profile</a>
        </div>
      </li>
    </ul>
  );
}

export default ConditionalRendering;
