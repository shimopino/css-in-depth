import classes from './Markup.module.scss';

export const Listing_1_02 = () => {
  return (
    <header>
      <h1 className={classes.title} id={classes.page_title}>
        Wombat Coffee Roasters
      </h1>
      <nav>
        <ul className="nav" id="main_nav">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="/coffees">Coffees</a>
          </li>
          <li>
            <a href="/browsers">Browsers</a>
          </li>
          <li>
            <a href="/specials">Specials</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
