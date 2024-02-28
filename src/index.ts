// index.ts
type City = string;
type State = string;
type Country = {
    country: string;
    capital: City[];
    region: string;
    subregion: string;
    states: State[];
};

const countries: Country[] = [
  {
    "country": "Cyprus",
    "capital": [
      "Nicosia"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Eritrea",
    "capital": [
      "Asmara"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Liberia",
    "capital": [
      "Monrovia"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Bermuda",
    "capital": [
      "Hamilton"
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Vatican City",
    "capital": [
      "Vatican City"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Cook Islands",
    "capital": [
      "Avarua"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Somalia",
    "capital": [
      "Mogadishu"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Zambia",
    "capital": [
      "Lusaka"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Venezuela",
    "capital": [
      "Caracas"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Turkmenistan",
    "capital": [
      "Ashgabat"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Albania",
    "capital": [
      "Tirana"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Croatia",
    "capital": [
      "Zagreb"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "United Kingdom",
    "capital": [
      "London"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Sudan",
    "capital": [
      "Khartoum"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa",
      "Africa"
    ]
  },
  {
    "country": "Timor-Leste",
    "capital": [
      "Dili"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Republic of the Congo",
    "capital": [
      "Brazzaville"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa",
      "Africa"
    ]
  },
  {
    "country": "Azerbaijan",
    "capital": [
      "Baku"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Kenya",
    "capital": [
      "Nairobi"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "American Samoa",
    "capital": [
      "Pago Pago"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Ivory Coast",
    "capital": [
      "Yamoussoukro"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Senegal",
    "capital": [
      "Dakar"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Vietnam",
    "capital": [
      "Hanoi"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "El Salvador",
    "capital": [
      "San Salvador"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Afghanistan",
    "capital": [
      "Kabul"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Saint Martin",
    "capital": [
      "Marigot"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Latvia",
    "capital": [
      "Riga"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Guatemala",
    "capital": [
      "Guatemala City"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Kuwait",
    "capital": [
      "Kuwait City"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "São Tomé and Príncipe",
    "capital": [
      "São Tomé"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Kyrgyzstan",
    "capital": [
      "Bishkek"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Poland",
    "capital": [
      "Warsaw"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Guam",
    "capital": [
      "Hagåtña"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Ghana",
    "capital": [
      "Accra"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Lithuania",
    "capital": [
      "Vilnius"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Armenia",
    "capital": [
      "Yerevan"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Jersey",
    "capital": [
      "Saint Helier"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Grenada",
    "capital": [
      "St. George's"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Tajikistan",
    "capital": [
      "Dushanbe"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Ethiopia",
    "capital": [
      "Addis Ababa"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Western Sahara",
    "capital": [
      "El Aaiún"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Morocco",
    "capital": [
      "Rabat"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Puerto Rico",
    "capital": [
      "San Juan"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Christmas Island",
    "capital": [
      "Flying Fish Cove"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "New Zealand",
    "capital": [
      "Wellington"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Brunei",
    "capital": [
      "Bandar Seri Begawan"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "French Guiana",
    "capital": [
      "Cayenne"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Niue",
    "capital": [
      "Alofi"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Romania",
    "capital": [
      "Bucharest"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Svalbard and Jan Mayen",
    "capital": [
      "Longyearbyen"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Belarus",
    "capital": [
      "Minsk"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Panama",
    "capital": [
      "Panama City"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Cameroon",
    "capital": [
      "Yaoundé"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Czechia",
    "capital": [
      "Prague"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Saint Barthélemy",
    "capital": [
      "Gustavia"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Greece",
    "capital": [
      "Athens"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Mali",
    "capital": [
      "Bamako"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa",
      "Africa"
    ]
  },
  {
    "country": "Martinique",
    "capital": [
      "Fort-de-France"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "France",
    "capital": [
      "Paris"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Pakistan",
    "capital": [
      "Islamabad"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Peru",
    "capital": [
      "Lima"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Barbados",
    "capital": [
      "Bridgetown"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Greenland",
    "capital": [
      "Nuuk"
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Saint Pierre and Miquelon",
    "capital": [
      "Saint-Pierre"
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Chad",
    "capital": [
      "N'Djamena"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Hungary",
    "capital": [
      "Budapest"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Comoros",
    "capital": [
      "Moroni"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Bangladesh",
    "capital": [
      "Dhaka"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Tokelau",
    "capital": [
      "Fakaofo"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Fiji",
    "capital": [
      "Suva"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "China",
    "capital": [
      "Beijing"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia",
      "Asia",
      "Asia",
      "Asia"
    ]
  },
  {
    "country": "Colombia",
    "capital": [
      "Bogotá"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "British Virgin Islands",
    "capital": [
      "Road Town"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Algeria",
    "capital": [
      "Algiers"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Maldives",
    "capital": [
      "Malé"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Malaysia",
    "capital": [
      "Kuala Lumpur"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Cayman Islands",
    "capital": [
      "George Town"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Spain",
    "capital": [
      "Madrid"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Ireland",
    "capital": [
      "Dublin"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe",
      "Europe"
    ]
  },
  {
    "country": "Estonia",
    "capital": [
      "Tallinn"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Paraguay",
    "capital": [
      "Asunción"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Uruguay",
    "capital": [
      "Montevideo"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "South Africa",
    "capital": [
      "Pretoria",
      "Bloemfontein",
      "Cape Town"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Saint Lucia",
    "capital": [
      "Castries"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Vanuatu",
    "capital": [
      "Port Vila"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Finland",
    "capital": [
      "Helsinki"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Sweden",
    "capital": [
      "Stockholm"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "British Indian Ocean Territory",
    "capital": [
      "Diego Garcia"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Lebanon",
    "capital": [
      "Beirut"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "United States",
    "capital": [
      "Washington, D.C."
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas",
      "Americas",
      "Americas"
    ]
  },
  {
    "country": "Chile",
    "capital": [
      "Santiago"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Norfolk Island",
    "capital": [
      "Kingston"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Montserrat",
    "capital": [
      "Plymouth"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Australia",
    "capital": [
      "Canberra"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Belize",
    "capital": [
      "Belmopan"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Guyana",
    "capital": [
      "Georgetown"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Mongolia",
    "capital": [
      "Ulan Bator"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Tuvalu",
    "capital": [
      "Funafuti"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Dominican Republic",
    "capital": [
      "Santo Domingo"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Equatorial Guinea",
    "capital": [
      "Malabo"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Saint Kitts and Nevis",
    "capital": [
      "Basseterre"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Bolivia",
    "capital": [
      "Sucre"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Nepal",
    "capital": [
      "Kathmandu"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "French Southern and Antarctic Lands",
    "capital": [
      "Port-aux-Français"
    ],
    "region": "Antarctic",
    "subregion": "",
    "states": [
      "Antarctic"
    ]
  },
  {
    "country": "Taiwan",
    "capital": [
      "Taipei"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Benin",
    "capital": [
      "Porto-Novo"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Bulgaria",
    "capital": [
      "Sofia"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Moldova",
    "capital": [
      "Chișinău"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Isle of Man",
    "capital": [
      "Douglas"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Bhutan",
    "capital": [
      "Thimphu"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Cambodia",
    "capital": [
      "Phnom Penh"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Antigua and Barbuda",
    "capital": [
      "Saint John's"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Haiti",
    "capital": [
      "Port-au-Prince"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Cape Verde",
    "capital": [
      "Praia"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Georgia",
    "capital": [
      "Tbilisi"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia",
      "Antarctic"
    ]
  },
  {
    "country": "Burundi",
    "capital": [
      "Gitega"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Bahamas",
    "capital": [
      "Nassau"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Mauritius",
    "capital": [
      "Port Louis"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Libya",
    "capital": [
      "Tripoli"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Malawi",
    "capital": [
      "Lilongwe"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Mexico",
    "capital": [
      "Mexico City"
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Eswatini",
    "capital": [
      "Mbabane"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Papua New Guinea",
    "capital": [
      "Port Moresby"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Dominica",
    "capital": [
      "Roseau"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas",
      "Americas"
    ]
  },
  {
    "country": "Liechtenstein",
    "capital": [
      "Vaduz"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Russia",
    "capital": [
      "Moscow"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Israel",
    "capital": [
      "Jerusalem"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Singapore",
    "capital": [
      "Singapore"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Uganda",
    "capital": [
      "Kampala"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Slovakia",
    "capital": [
      "Bratislava"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Tonga",
    "capital": [
      "Nuku'alofa"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "United Arab Emirates",
    "capital": [
      "Abu Dhabi"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Mayotte",
    "capital": [
      "Mamoudzou"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Suriname",
    "capital": [
      "Paramaribo"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Uzbekistan",
    "capital": [
      "Tashkent"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Saudi Arabia",
    "capital": [
      "Riyadh"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Egypt",
    "capital": [
      "Cairo"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Italy",
    "capital": [
      "Rome"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Madagascar",
    "capital": [
      "Antananarivo"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "New Caledonia",
    "capital": [
      "Nouméa"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Canada",
    "capital": [
      "Ottawa"
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "United States Virgin Islands",
    "capital": [
      "Charlotte Amalie"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Marshall Islands",
    "capital": [
      "Majuro"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Mauritania",
    "capital": [
      "Nouakchott"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Gambia",
    "capital": [
      "Banjul"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Trinidad and Tobago",
    "capital": [
      "Port of Spain"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Seychelles",
    "capital": [
      "Victoria"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Japan",
    "capital": [
      "Tokyo"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Brazil",
    "capital": [
      "Brasília"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Syria",
    "capital": [
      "Damascus"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Saint Helena, Ascension and Tristan da Cunha",
    "capital": [
      "Jamestown"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Tanzania",
    "capital": [
      "Dodoma"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Andorra",
    "capital": [
      "Andorra la Vella"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Iran",
    "capital": [
      "Tehran"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia",
      "Oceania"
    ]
  },
  {
    "country": "Togo",
    "capital": [
      "Lomé"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Malta",
    "capital": [
      "Valletta"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "South Korea",
    "capital": [
      "Seoul"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Samoa",
    "capital": [
      "Apia"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania",
      "Oceania"
    ]
  },
  {
    "country": "Germany",
    "capital": [
      "Berlin"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Niger",
    "capital": [
      "Niamey"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa",
      "Africa"
    ]
  },
  {
    "country": "Bouvet Island",
    "capital": [],
    "region": "Antarctic",
    "subregion": "",
    "states": [
      "Antarctic"
    ]
  },
  {
    "country": "Jamaica",
    "capital": [
      "Kingston"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Nicaragua",
    "capital": [
      "Managua"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Guinea",
    "capital": [
      "Conakry"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa",
      "Oceania",
      "Africa",
      "Africa"
    ]
  },
  {
    "country": "Anguilla",
    "capital": [
      "The Valley"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Åland Islands",
    "capital": [
      "Mariehamn"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Belgium",
    "capital": [
      "Brussels"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Portugal",
    "capital": [
      "Lisbon"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Denmark",
    "capital": [
      "Copenhagen"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Philippines",
    "capital": [
      "Manila"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Wallis and Futuna",
    "capital": [
      "Mata-Utu"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Austria",
    "capital": [
      "Vienna"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Guinea-Bissau",
    "capital": [
      "Bissau"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Monaco",
    "capital": [
      "Monaco"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Namibia",
    "capital": [
      "Windhoek"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "United States Minor Outlying Islands",
    "capital": [
      "Washington DC"
    ],
    "region": "Americas",
    "subregion": "North America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Costa Rica",
    "capital": [
      "San José"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Bosnia and Herzegovina",
    "capital": [
      "Sarajevo"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Macau",
    "capital": [],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Mozambique",
    "capital": [
      "Maputo"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Réunion",
    "capital": [
      "Saint-Denis"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Montenegro",
    "capital": [
      "Podgorica"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "North Korea",
    "capital": [
      "Pyongyang"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Northern Mariana Islands",
    "capital": [
      "Saipan"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Ukraine",
    "capital": [
      "Kyiv"
    ],
    "region": "Europe",
    "subregion": "Eastern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Iraq",
    "capital": [
      "Baghdad"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "South Georgia",
    "capital": [
      "King Edward Point"
    ],
    "region": "Antarctic",
    "subregion": "",
    "states": [
      "Antarctic"
    ]
  },
  {
    "country": "Angola",
    "capital": [
      "Luanda"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Sierra Leone",
    "capital": [
      "Freetown"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Micronesia",
    "capital": [
      "Palikir"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Cuba",
    "capital": [
      "Havana"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Turks and Caicos Islands",
    "capital": [
      "Cockburn Town"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Serbia",
    "capital": [
      "Belgrade"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Ecuador",
    "capital": [
      "Quito"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Faroe Islands",
    "capital": [
      "Tórshavn"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Antarctica",
    "capital": [],
    "region": "Antarctic",
    "subregion": "",
    "states": [
      "Antarctic"
    ]
  },
  {
    "country": "Palestine",
    "capital": [
      "Ramallah",
      "Jerusalem"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Turkey",
    "capital": [
      "Ankara"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Kiribati",
    "capital": [
      "South Tarawa"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Kazakhstan",
    "capital": [
      "Nur-Sultan"
    ],
    "region": "Asia",
    "subregion": "Central Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Gibraltar",
    "capital": [
      "Gibraltar"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Iceland",
    "capital": [
      "Reykjavik"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Palau",
    "capital": [
      "Ngerulmud"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Qatar",
    "capital": [
      "Doha"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Switzerland",
    "capital": [
      "Bern"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "French Polynesia",
    "capital": [
      "Papeetē"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Pitcairn Islands",
    "capital": [
      "Adamstown"
    ],
    "region": "Oceania",
    "subregion": "Polynesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Jordan",
    "capital": [
      "Amman"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Myanmar",
    "capital": [
      "Naypyidaw"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Thailand",
    "capital": [
      "Bangkok"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Caribbean Netherlands",
    "capital": [
      "Kralendijk"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Aruba",
    "capital": [
      "Oranjestad"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Guadeloupe",
    "capital": [
      "Basse-Terre"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Nigeria",
    "capital": [
      "Abuja"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Bahrain",
    "capital": [
      "Manama"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Laos",
    "capital": [
      "Vientiane"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Cocos (Keeling) Islands",
    "capital": [
      "West Island"
    ],
    "region": "Oceania",
    "subregion": "Australia and New Zealand",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Djibouti",
    "capital": [
      "Djibouti"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Solomon Islands",
    "capital": [
      "Honiara"
    ],
    "region": "Oceania",
    "subregion": "Melanesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Heard Island and McDonald Islands",
    "capital": [],
    "region": "Antarctic",
    "subregion": "",
    "states": [
      "Antarctic"
    ]
  },
  {
    "country": "India",
    "capital": [
      "New Delhi"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Africa",
      "Asia"
    ]
  },
  {
    "country": "San Marino",
    "capital": [
      "City of San Marino"
    ],
    "region": "Europe",
    "subregion": "Southern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Luxembourg",
    "capital": [
      "Luxembourg"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Sint Maarten",
    "capital": [
      "Philipsburg"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Falkland Islands",
    "capital": [
      "Stanley"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Central African Republic",
    "capital": [
      "Bangui"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Botswana",
    "capital": [
      "Gaborone"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Curaçao",
    "capital": [
      "Willemstad"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Guernsey",
    "capital": [
      "St. Peter Port"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Norway",
    "capital": [
      "Oslo"
    ],
    "region": "Europe",
    "subregion": "Northern Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Gabon",
    "capital": [
      "Libreville"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Zimbabwe",
    "capital": [
      "Harare"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Lesotho",
    "capital": [
      "Maseru"
    ],
    "region": "Africa",
    "subregion": "Southern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Slovenia",
    "capital": [
      "Ljubljana"
    ],
    "region": "Europe",
    "subregion": "Central Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Argentina",
    "capital": [
      "Buenos Aires"
    ],
    "region": "Americas",
    "subregion": "South America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Burkina Faso",
    "capital": [
      "Ouagadougou"
    ],
    "region": "Africa",
    "subregion": "Western Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Yemen",
    "capital": [
      "Sana'a"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "DR Congo",
    "capital": [
      "Kinshasa"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Oman",
    "capital": [
      "Muscat"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "states": [
      "Europe",
      "Asia"
    ]
  },
  {
    "country": "Indonesia",
    "capital": [
      "Jakarta"
    ],
    "region": "Asia",
    "subregion": "South-Eastern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Nauru",
    "capital": [
      "Yaren"
    ],
    "region": "Oceania",
    "subregion": "Micronesia",
    "states": [
      "Oceania"
    ]
  },
  {
    "country": "Rwanda",
    "capital": [
      "Kigali"
    ],
    "region": "Africa",
    "subregion": "Eastern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "North Macedonia",
    "capital": [
      "Skopje"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Kosovo",
    "capital": [
      "Pristina"
    ],
    "region": "Europe",
    "subregion": "Southeast Europe",
    "states": [
      "Europe"
    ]
  },
  {
    "country": "Netherlands",
    "capital": [
      "Amsterdam"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "states": [
      "Europe",
      "Americas"
    ]
  },
  {
    "country": "Tunisia",
    "capital": [
      "Tunis"
    ],
    "region": "Africa",
    "subregion": "Northern Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "South Sudan",
    "capital": [
      "Juba"
    ],
    "region": "Africa",
    "subregion": "Middle Africa",
    "states": [
      "Africa"
    ]
  },
  {
    "country": "Honduras",
    "capital": [
      "Tegucigalpa"
    ],
    "region": "Americas",
    "subregion": "Central America",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "capital": [
      "Kingstown"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "states": [
      "Americas"
    ]
  },
  {
    "country": "Sri Lanka",
    "capital": [
      "Sri Jayawardenepura Kotte"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "states": [
      "Asia"
    ]
  },
  {
    "country": "Hong Kong",
    "capital": [
      "City of Victoria"
    ],
    "region": "Asia",
    "subregion": "Eastern Asia",
    "states": [
      "Asia"
    ]
  }
];

export function getCountries(): Country[] {
    return countries;
}

export function getStatesByCountry(countryName: string): State[] | undefined {
    const country = countries.find(c => c.country === countryName);
    return country ? country.states : undefined;
}

export function getCitiesByCountryAndState(countryName: string, stateName: string): City[] | undefined {
    const country = countries.find(c => c.country === countryName);
    return country && country.states.includes(stateName) ? country.capital : undefined;
}
