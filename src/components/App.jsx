import { Section } from "./Section/Section";

export const App = () => {
  return (
    <article class="wrapper" >
    <div
      style={{
        // backgroundImage: `linear-gradient(to right, #EAECC6, #2BC0E4)`,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title={'Please leave feedback'} />
     
    </div> </article>
  );
};
