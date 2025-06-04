import React, { useEffect, useRef, useState } from "react";

const HeaderComponent = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  useEffect(() => {
    const offcanvasEl = document.getElementById("offcanvasExample");

    if (!offcanvasEl) return;

    const onShow = () => setIsOffcanvasOpen(true);
    const onHide = () => setIsOffcanvasOpen(false);

    offcanvasEl.addEventListener("show.bs.offcanvas", onShow);
    offcanvasEl.addEventListener("hidden.bs.offcanvas", onHide);

    return () => {
      offcanvasEl.removeEventListener("show.bs.offcanvas", onShow);
      offcanvasEl.removeEventListener("hidden.bs.offcanvas", onHide);
    };
  }, []);

  const handleInnerButtonClick = () => {
    alert("Button inside offcanvas clicked!");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="me-3"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <i className="fa fa-bars"></i>
          </a>

          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Offcanvas content */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>This is some offcanvas content.</p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleInnerButtonClick}
          >
            Click me inside offcanvas
          </button>
        </div>
      </div>

      {/* Main page content */}
      {/* <main className={`main-content ${isOffcanvasOpen ? "disabled" : ""}`}>
        <div className="container mt-4">
          <h2>Welcome</h2>
          <p>This is your main content.</p>
        </div>
      </main> */}

      {/* Overlay to block interaction when offcanvas is open */}
      {/* {isOffcanvasOpen && <div className="page-overlay"></div>} */}

      <style>{`
        // .main-content.disabled {
        //   pointer-events: none;
        //   user-select: none;
        //   opacity: 0.5;
        // }

        .page-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.3);
          // z-index: 1040; /* Bootstrap offcanvas z-index is 1045, so this is below it */
        }
      `}</style>
    </>
  );
};

export default HeaderComponent;
