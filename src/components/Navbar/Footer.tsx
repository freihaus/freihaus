import Link from "next/link";

const Impressum = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center text-center text-xs">
      <h2 className="text-xl font-bold">Impressum</h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-3 justify-between">
        <div className="border p-5 rounded-xl m-2">
          <p>FreiHaus GmbH</p>
          <p>Nael Oesterle</p>
          <p>Rankstrasse 3</p>
          <p>8280 Kreuzlingen</p>
        </div>

        <div className="flex flex-col rounded-xl border m-2 justify-center">
          <Link href="/agb" className="hover:underline">
            AGB
          </Link>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
          <p>Email: info@freihaus.ch</p>
          <p>Tel: 079 761 22 37</p>
        </div>

        <div className="flex flex-col p-5 rounded-xl border m-2 justify-center">
          <Link href="/projekte" className="hover:underline">
            Projekte
          </Link>
          <Link href="/ueberuns" className="hover:underline">
            Über uns
          </Link>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
          <Link href="/galerie" className="hover:underline">
            Galerie
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Impressum;
