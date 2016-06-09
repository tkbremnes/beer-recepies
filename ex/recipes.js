export default {
    "id": "collection_id",
    "recipe_collection": [
        {
            name: "All other Pale Ales",
            source: "Mikkeller",
            id: 0,
            carbonation: {
                from: 2,
                to: 3
            },
            og: 1.058,
            bg: 1.046,
            fg: 1.012,
            ibu: 55,
            abv: 6,
            ebc: 19,
            volume: 20,
            boilVolume: 25,
            mashTemp: 65,
            fermentationTemp: {
                from: 19,
                to: 21
            },
            fermentables: [
                {
                    name: 'Maris Otter',
                    weight: 2800,
                    color: 5,
                    id: 20
                },
                {
                    name: 'Munich I',
                    weight: 800,
                    color: 22,
                    id: 21
                },
                {
                    name: 'Cara Amber',
                    weight: 475,
                    color: 70,
                    id: 22
                },
                {
                    name: 'Cara Pils',
                    weight: 325,
                    color: 4,
                    id: 23
                },
                {
                    name: 'Flaked Oats',
                    weight: 625,
                    color: 4,
                    id: 24
                },
            ],
            hops: [
                {
                    name: "Mosaic",
                    weight: 25,
                    time: 60,
                    aa: 11.7,
                    id: 20,
                    type: 'pellets'
                },
                {
                    name: "Chinook",
                    weight: 10,
                    time: 10,
                    aa: 12.8,
                    id: 21,
                    type: 'pellets'
                },
                {
                    name: "Liberty",
                    weight: 30,
                    time: 1,
                    aa: 4.1,
                    id: 22,
                    type: 'pellets'
                },
                {
                    name: "Nugget",
                    weight: 15,
                    time: 1,
                    aa: 15.3,
                    id: 23,
                    type: 'pellets'
                },
            ],
            yeasts:  [
                {
                    name: "Imperial Yeast A20 Citrus"
                }
            ],
        },




        {
            "name": "Some beer name",
            "id": 1,
            "carbonation": {
                from: 2,
                to: 2.5
            },
            ibu: 22,
            abv: 5,
            ebc: 20,
            og: 1.045,
            "fermentables": [
                {
                    "name": "Maris Otter",
                    "weight": 4500,
                    "color": 5,
                    "id": 1
                },
                {
                    "name": "CaraPils",
                    "weight": 200,
                    "color": 12,
                    "id": 2
                },
                {
                    "name": "Wheat",
                    "weight": 1500,
                    "color": 55,
                    "id": 3
                }
            ],
            "hops": [
                {
                    "name": "Hallertauer",
                    "weight": 132,
                    "time": 60,
                    "aa": 5,
                    "id": 1
                },
                {
                    "name": "Citra",
                    "weight": 32,
                    "time": 15,
                    "aa": 10,
                    "id": 2
                },
                {
                    "name": "Mandarina",
                    "weight": 22,
                    "time": 0,
                    "aa": 20,
                    "id": 3
                },
            ],
            "yeasts": [
                {
                    "name": "WLP 1000",
                    "id": 1
                }
            ]
        },
        {
            "name": "Irish Red Ale",
            "id": 2,
            "source": "http://byo.com/mead/item/1868-irish-red-ale-style-profile",
            "style": "Irish red ale",
            og: 1.045,
            ibu: 22,
            abv: 5,
            ebc: 20,
            "carbonation": {
                from: 2,
                to: 2.5
            },
            "fermentables": [
                {
                    weight: 4500,
                    name: "Maris Otter Pale Malt with a super long an weird name",
                    color: 5,
                    "id": 4
                },
                {
                    weight: 170,
                    name: "Great Western crystal malt",
                    color: 40,
                    "id": 5
                },
                {
                    weight: 170,
                    name: "Great Western crystal malt",
                    color: 120,
                    "id": 6
                },
                {
                    weight: 142,
                    name: "Roasted barley",
                    color: 300,
                    "id": 7
                }
            ],
            "hops": [
                {
                    name: "Kent Golding",
                    type: "Pellets",
                    weight: 30,
                    time: 60,
                    aa: 5,
                    "id": 4
                }
            ],
            "yeasts": [
                {
                    name: "White Labs WLP004 (Irish Ale)",
                    "id": 2
                }
            ]
        },





        {
            name: 'Mild Child',
            id: 400,
            origin: 'White Labs',
            style: 'English mild',
            og: 1.038,
            fg: 1.009,
            abv: 3.7,
            ibu: 13,
            srm: 16,
            mashTemp: 154, // F
            volume: 19,
            fermentation: {
                primary: {
                    length: 14,
                    temperature: [69,71] //F
                }
            }
            carbonation: {
                from: 2,
                to: 2.5
            },
            fermentables: [
                {
                    name: 'Briess Pale Ale Malt'
                    id: 4001,
                    weight: 3.5, // lbs
                    color: 0
                },
                {
                    name: 'Briess Ashburne Mild Malt'
                    id: 4002,
                    weight: 3.5, // lbs
                    color: 0
                },
                {
                    name: 'Briess Caramel Malt'
                    id: 4003,
                    weight: 0.5, // lbs
                    color: 80
                },
                {
                    name: 'Briess Black Malt'
                    id: 4004,
                    weight: 0.5, // oz
                    color: 0
                },
            ],
            hops: [
                {
                    name: "Fuggle",
                    type: "Pellets",
                    weight: 0.5, // oz
                    time: 60,
                    aa: 4.8,
                    "id": 4000
                },
                {
                    name: "Fuggle",
                    type: "Pellets",
                    weight: 0.5, // oz
                    time: 10,
                    aa: 4.8,
                    "id": 4001
                },
            ],
            yeasts: [
                {
                    name: 'WLP013 London Ale Yeast'
                }
            ]
        },
        {
            name: 'One Mighty Fine Barleywine',
            id: 501,
            origin: 'White Labs',
            style: 'Barleywine',
            og: 1.105,
            fg: 1.021,
            abv: 11.4,
            ibu: 90,
            srm: 15,
            volume: 19,
            mashTemp: 152, // F
            fermentation: {
                primary: {
                    length: 21,
                    temperature: [66,68] // fahrenheit
                },
                secondary: {
                    length: 14,
                    temperature: [66,68] // fahrenheit
                },
                priming: {
                    length: [21, 28],
                    yeast: '1/4 packets of WLP009'
                }
            }
            carbonation: {
                from: 2,
                to: 2.5
            },
            fermentables: [
                {
                    name: 'CWB Golden Light Dry Malt Extract'
                    id: 5001,
                    weight: 12, // lbs
                    color: 0,
                    type: 'DME'
                },
                {
                    name: 'Briess Aromatic Munich Malt'
                    id: 5002,
                    weight: 1, // lbs
                    color: 20
                },
                {
                    name: 'Briess Caramel Malt'
                    id: 5003,
                    weight: 1, // lbs
                    color: 40
                },
            ],
            hops: [
                {
                    name: "Amarillo",
                    type: "Pellets",
                    weight: 1, // oz
                    time: 60,
                    aa: 8.5,
                    "id": 5000
                },
                {
                    name: "Amarillo",
                    type: "Pellets",
                    weight: 3, // oz
                    time: 30,
                    aa: 8.5,
                    "id": 5000
                },
                {
                    name: "Amarillo",
                    type: "Pellets",
                    weight: 1, // oz
                    time: 10,
                    aa: 8.5,
                    "id": 5000
                },
            ],
            yeasts: [
                {
                    name: 'WLP002 English Ale Yeast',
                    amount: 3
                },
                {
                    name: 'WLP099 Super High Gravity Ale Yeast',
                    amount: 2
                },
            ]
        },
    ]
}
