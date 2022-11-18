import React from "react";
import axios from "axios";
export const Movies = () => {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://demo.tech2edge.co/samples/data-sg")
      .then((res) => setdata(res.data.characters));
    console.log("data", data);
  }, []);

  return (
    <div className="main">
      {data.map((e) => {
        return (
          <div className="main1" key={e.id}>
            {/* <img src={e.img} /> */}
            <img
              src={`https://demo.tech2edge.co/samples/${e.img}`}
              class="rounded mx-auto d-block"
              alt="..."
            />

            <div>
              <b>
                Name <span className="name">{e.name}</span>
              </b>
            </div>
            <div>
              <b>
                Age <span className="name">{e.age}</span>
              </b>
            </div>
            <div>
              <b>
                Profession <span className="name">{e.profession}</span>
              </b>
            </div>
          </div>
        );
      })}
    </div>
  );
};
