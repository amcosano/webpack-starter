import "../css/components.css";

export const helloWorld = (name) => {
  const h1 = document.createElement("h1");
  h1.innerText = `Hello ${name}`;

  document.body.append(h1);
};
