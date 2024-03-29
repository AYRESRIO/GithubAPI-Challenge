import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function After() {
  return (
    <main>
      <section className="before-container mt30 mb30">
        <div>
          <Card title="Encontre um perfil Github" />
          <div className="adjust">
            <Link to="/">
              <Button text="Encontrar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
