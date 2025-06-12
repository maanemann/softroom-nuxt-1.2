<!-- 
§ h1 : "Build UIs that don't suck" – #5, "Dropdowns, icons, and CSS subgrid"
§ h2 : video

§ https://www.youtube.com/watch?v=7d0qmca5kzc


§ h2 : kode (kilde til dette)

§ https://stackblitz.com/edit/vitejs-vite-my7i9wbd?file=src%2FApp.jsx


§ h2 : beskrivelse

Denne lektion handler om "subgrids" (primært). Tailwind-klassen `grid-cols-subgrid` sættes på de børn (`DropdownItem`), der skal ignoreres af grid containeren (`DropdownMenu`), så børnebørnene i stedet bliver grid items (`DropdownIcon` + `DropdownLabel`).

Her er defineret 2 kolonner, en til ikoner og en til labels. Kolonnen med ikonerne har bredden `auto`, som tilpasser sig efter indhold, så hvis der ingen ikoner er, vil auto være lig 0. Hvis bare èt, nogle eller alle punkter har ikon, tilpasser alle ikon-cellerne sig efter det breddeste ikon (da en kolonne ikke kan have mere end èn bredde, kan man sige), og derfor vil labels'ne, altså teksten, alle have ens venstrekant, da de jo befinder sig på 2. kolonne.

§ h3 : løsning:
'Indbygget' i beskrivelse...

§ h4 : l. ca. xx-xx, isoleret til essens
Find selv ud af det .. (*suk* lol)

§ h2 : hele koden fra course

§ NOTE! : koden er react, ikke vue, og består af flere komponenter, så dette er kun `Dropdown.jsx` komponentet og renderes self helt absolut forkert. Se resten af komponenterne i linket ovenfor (hvis det stadig er aktivt)
-->

<template>
  <div>
    export function Dropdown({ children }) {
      return <div className="flex flex-col items-center">{children}</div>;
    }

    export function DropdownButton({ children }) {
      return (
        <button class="rounded-lg bg-white px-3 py-1.5 text-sm/6 font-semibold shadow outline outline-zinc-950/5">
          {children}
        </button>
      );
    }

    export function DropdownMenu({ children }) {
      return (
        <div className="mt-1.5 grid w-40 grid-cols-[auto_1fr] rounded-xl bg-white p-1 shadow-lg outline outline-zinc-950/5">
          {children}
        </div>
      );
    }

    export function DropdownItem({ children, ...props }) {
      return (
        <a
          {...props}
          className="col-span-2 grid grid-cols-subgrid items-center rounded-lg px-3 py-1.5 text-sm/6 [--icon-color:var(--color-zinc-500)] hover:bg-blue-500 hover:text-white hover:[--icon-color:var(--color-white)]"
        >
          {children}
        </a>
      );
    }

    export function DropdownIcon({ children }) {
      return (
        <span className="mr-2 inline-flex size-4 shrink-0 text-(--icon-color)">
          {children}
        </span>
      );
    }

    export function DropdownLabel({ children }) {
      return <span className="col-start-2">{children}</span>;
    }
  </div>
</template>

