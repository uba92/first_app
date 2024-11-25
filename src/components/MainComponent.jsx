const MainComponent = (props) => {
    return (
        <section>
            <h3>sono un nuovo componente</h3>
            <p>Ciao {props.student}!</p>
            <p className={props.color}>da {props.country}</p>
        </section>
    )
}

export default MainComponent

//PROPS
//SONO I PARAMETRI CHE POSSO PASSARE AI COMPONENTI
//LI USO PER DINAMICIZZARE I COMPONENTI
//RENDERLI COMPATIBIILI CON DEI PARAMETRI
//CAMBIANDO AD ESEMPIIO IL CONTENUTO DEL COMPONENTE OGNI VOLTA CHE LO UTILIZZO
//SIMILIMENTE A QUANDO PASSO I PARAMETRI ALLA CHIAMATA DI UNA FUNZIONE ALLO STESSO MODO
// PASSO LE PROPS AL COMPONENTE QUANDO LO MONTO NEL FILE App.js
// props che ho passato come parametro alla funzione MainComponent
// è un oggetto che conterrà tutte le prop che sto passando a quel componente