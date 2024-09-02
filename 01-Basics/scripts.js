const countries = [
  {
    id: 1,
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
  },
  {
    id: 2,
    name: "Aland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
  },
  {
    id: 3,
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
  },
  {
    id: 4,
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
  },
  {
    id: 5,
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
  },
  {
    id: 6,
    name: "Andorra",
    capital: "Andorra la Vella",
    languages: ["Catalan"],
    population: 78014,
    flag: "https://restcountries.eu/data/and.svg",
  },
  {
    id: 7,
    name: "Angola",
    capital: "Luanda",
    languages: ["Portuguese"],
    population: 25868000,
    flag: "https://restcountries.eu/data/ago.svg",
  },
  {
    id: 8,
    name: "Anguilla",
    capital: "The Valley",
    languages: ["English"],
    population: 13452,
    flag: "https://restcountries.eu/data/aia.svg",
  },
  {
    id: 9,
    name: "Antarctica",
    capital: "",
    languages: [],
    population: 1000,
    flag: "https://restcountries.eu/data/ata.svg",
  },
  {
    id: 10,
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    languages: ["English"],
    population: 86295,
    flag: "https://restcountries.eu/data/atg.svg",
  },
  {
    id: 11,
    name: "Argentina",
    capital: "Buenos Aires",
    languages: ["Spanish", "Guarani"],
    population: 43590400,
    flag: "https://restcountries.eu/data/arg.svg",
  },
  {
    id: 12,
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian", "Russian"],
    population: 2994400,
    flag: "https://restcountries.eu/data/arm.svg",
  },
  {
    id: 13,
    name: "Aruba",
    capital: "Oranjestad",
    languages: ["Dutch", "(a variant of English)"],
    population: 107394,
    flag: "https://restcountries.eu/data/abw.svg",
  },
  {
    id: 14,
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 24117360,
    flag: "https://restcountries.eu/data/aus.svg",
  },
  {
    id: 15,
    name: "Austria",
    capital: "Vienna",
    languages: ["German"],
    population: 8725931,
    flag: "https://restcountries.eu/data/aut.svg",
  },
  {
    id: 16,
    name: "Azerbaijan",
    capital: "Baku",
    languages: ["Azerbaijani"],
    population: 9730500,
    flag: "https://restcountries.eu/data/aze.svg",
  },
  {
    id: 17,
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 378040,
    flag: "https://restcountries.eu/data/bhs.svg",
  },
  {
    id: 18,
    name: "Bahrain",
    capital: "Manama",
    languages: ["Arabic"],
    population: 1347565,
    flag: "https://restcountries.eu/data/bhr.svg",
  },
  {
    id: 19,
    name: "Bangladesh",
    capital: "Dhaka",
    languages: ["Bengali"],
    population: 161006790,
    flag: "https://restcountries.eu/data/bgd.svg",
  },
  {
    id: 20,
    name: "Barbados",
    capital: "Bridgetown",
    languages: ["English"],
    population: 285000,
    flag: "https://restcountries.eu/data/brb.svg",
  },
  {
    id: 21,
    name: "Belarus",
    capital: "Minsk",
    languages: ["Belarusian"],
    population: 9498700,
    flag: "https://restcountries.eu/data/blr.svg",
  },
];

const tableHeaders = [
  "id",
  "name",
  "capital",
  "languages",
  "population",
  "flag",
];

const createTable = (countries) => {
  const container = document.getElementById("root");
  const table = document.createElement("table");

  // Tablo başlığı oluşturma
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  tableHeaders.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Tablo gövdesi oluşturma
  const tbody = document.createElement("tbody");
  countries.forEach((country) => {
    const tr = document.createElement("tr");
    tableHeaders.forEach((header) => {
      const td = document.createElement("td");
      const key = header.toLowerCase();
      if (key === "languages") {
        td.textContent = country[key].join(", ");
      } else if (key === "flag") {
        const img = document.createElement("img");
        img.src = country[key];
        img.alt = `${country.name} flag`;
        td.appendChild(img);
      } else {
        td.textContent = country[key];
      }
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  container.appendChild(table);
};

window.onload = () => createTable(countries);
