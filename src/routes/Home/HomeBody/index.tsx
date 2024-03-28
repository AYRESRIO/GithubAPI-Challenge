
import Button from "../../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <section  >
        <div className = "container mt30 mb30" >
          <h1 className = "home-title">Desafio Github API</h1>
          <h3 className = "home-caption">DevSuperior - Escola de programação</h3>
        </div>
        <div className = "container dflex">
          <Button text = "Começar" />
        </div>
        
       
      </section>
    </main>
  );
}
