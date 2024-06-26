import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function Before() {
  return (
    <main>
      <section className="before-container mt30 mb30">
        <div>
          <Card title="Encontre um perfil Github" />

          <div className="adjust">
            <Link to="/after">
              <Button text="Encontrar" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
