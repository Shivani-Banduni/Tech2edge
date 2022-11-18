import React from "react";
export const Navbar1 = () => {
  return (
      <div className="navbar1">
    <nav class="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img className="img-nav1"
          src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/30-512.png"
          alt="Logo"
          width="30"
          height="14"
          class="d-inline-block align-text-top"
        />
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}

              <img className="img-nav1"
                // style={{ width: "100px", marginLeft: "10px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkixBv7Fhc99ZImugHLLxtd3kjRouXQGFjhQ&usqp=CAU"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
            </li>
            {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}
            <li class="nav-item dropdown">
              {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV
          </a> */}

              <img className="img-nav1"
                // style={{ marginLeft: "10px" }}
                src="https://i.pinimg.com/474x/6d/6c/4e/6d6c4eb1cc43f668477aa6ce70bf79b1.jpg"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />

              <img className="img-nav1"
                // style={{ width: "100px", heigth: "50px", marginLeft: "10px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqqTIKweURYJOa04lt6EYVziiCs1Xrp5azOQ&usqp=CAU"
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />

              <img className="img-nav1"
                // style={{ width: "100px", heigth: "50px", marginLeft: "10px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LUqynZ0QDuMJDOAo0tdV1AArPBx7hdjxzg&usqp=CAU
              "
                alt="Logo"
                width="30"
                height="24"
                class="d-inline-block align-text-top"
              />
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
      </div>
  );
};
