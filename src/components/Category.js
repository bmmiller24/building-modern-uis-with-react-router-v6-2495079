import { useParams, Outlet, NavLink } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {

  const { catId } = useParams();
  const category = getCategory(catId);

  const getClass = ( { isActive } ) => (isActive ? "session-active" : null);

  return (
    <>
      <h2>{category.name} Sessions</h2>
      
      <ul className="session-list">
        {category.sessions.map( session => (
          <li key={session.id} className="session">
            <NavLink className={getClass}
                  to={session.id}>
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
