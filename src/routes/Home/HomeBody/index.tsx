import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container mt30 mb30">
          <h1 className="home-title">Desafio Github API</h1>
          <h3 className="home-caption">DevSuperior - Escola de programação</h3>
        </div>

        <div className="container dflex">
          <Link to="/before">
            <Button text="Começar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
