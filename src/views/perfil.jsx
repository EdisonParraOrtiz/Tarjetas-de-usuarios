import { useEffect, useState } from "react";
import axios from "axios";
import "./../assets/profileCard.css";

const Perfiles = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const URL = "https://randomuser.me/api/";
    axios
      .get(URL)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err.message));
  });

  console.log(user);

  return (
    <div>
      <div class="card-container">
        <span class="pro">PRO</span>
        <img class="round" src={user?.picture.large} alt="user" />
        <h3>
          {user?.name.first} {user?.name.last}
        </h3>
        <h6>{user?.location.city}</h6>
        <p>
          User interface designer and <br /> front-end developer
        </p>
        <div class="buttons">
          <button class="primary">Message</button>
          <button class="primary ghost">Following</button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Perfiles;
