export default function WelcomeScreen() {
  return (
    <main className="main-wrapper">
      <div className="welcome">
        <div className="headline-container">
          <h3>Welcome to the</h3>
          <h2>Frontend Quiz!</h2>
        </div>
        <p>Pick a subject to get started.</p>
      </div>
      <ul className="categories">
        <li>
          <button className="category-button">
            <div className="category">
              <div className="icon icon-html">
                <img src="/assets/images/icon-html.svg"></img>
              </div>
              <h5>HTML</h5>
            </div>
          </button>
        </li>
        <li>
          <button className="category-button">
            <div className="category">
              <div className="icon icon-css">
                <img src="/assets/images/icon-css.svg"></img>
              </div>
              <h5>CSS</h5>
            </div>
          </button>
        </li>
        <li>
          <button className="category-button">
            <div className="category">
              <div className="icon icon-js">
                <img src="/assets/images/icon-js.svg"></img>
              </div>
              <h5>Javascript</h5>
            </div>
          </button>
        </li>
        <li>
          <button className="category-button">
            <div className="category">
              <div className="icon icon-accessibility">
                <img src="/assets/images/icon-accessibility.svg"></img>
              </div>
              <h5>Accessibility</h5>
            </div>
          </button>
        </li>
      </ul>
    </main>
  );
}
