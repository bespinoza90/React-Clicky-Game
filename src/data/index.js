let characters = [

    {
        "id": 1,
        "name": "Butch",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/d/d2/Butch_-_Animal_Crossing_New_Leaf.png/revision/latest?cb=20130708032928"
    },
    {
        "id": 2,
        "name": "Bruce",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/45/Bruce_HD.png/revision/latest?cb=20180518161455"
    },
    {
        "id": 3,
        "name": "Poncho",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/Poncho_NewLeaf_Official.png/revision/latest?cb=20130721204234"
    },
    {
        "id": 4,
        "name": "Raddle",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/3/32/Raddle_HD.png/revision/latest?cb=20180518162935"
    },
    {
        "id": 5,
        "name": "Merengue",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0c/Merengue_NH.png/revision/latest?cb=20200321211014"
    },
    {
        "id": 6,
        "name": "Paula",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/0d/Rachel.png/revision/latest?cb=20130520235305"
    },
    {
        "id": 7,
        "name": "Annabelle",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/d/df/Anabelle_NewHorizons.png/revision/latest?cb=20200417190821"
    },
    {
        "id": 9,
        "name": "Kidd",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/c/c5/Kidd_HHD.png/revision/latest?cb=20161213013210"
    },
    {
        "id": 10,
        "name": "Blathers",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/b/b3/NH-character-Blathers.png/revision/latest?cb=20200229053519"
    },
    {
        "id": 11,
        "name": "Daisy-Mae",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/8/85/Daisy_Mae.png/revision/latest?cb=20200220213944"
    },
    {
        "id": 12,
        "name": "Gulliver",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/7/74/GulliverNL.png/revision/latest?cb=20130729111729"
    },

    {
        "id": 13,
        "name": "Isabelle",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/0/01/Newhorizonsisabelle.png/revision/latest?cb=20200224191140"
    },

    {
        "id": 14,
        "name": "KK Slider",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/2/2b/NH-character-K.K._Slider.png/revision/latest?cb=20200519012648"
    },

    {
        "id": 15,
        "name": "Redd",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/6/6b/ReddNL.png/revision/latest?cb=20200425083709"
    },

    {
        "id": 16,
        "name": "Tom Nook",
        "image": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ef/NH-character-Tom_Nook.png/revision/latest?cb=20191228193640"
    }


]

// Add Array Index as id Property to each element.
characters = characters.map((ch, idx ) => {
    ch["id"] = idx;
    return ch;
  });
  
  const navMessages = [
    {
      id: 0,
      msg: "Click an image to begin!"
    },
    {
      id: 1,
      msg: "Try Again!!"
    },
    {
      id: 2,
      msg: "Hit the Next One!!"
    },
    {
      id: 3,
      msg: "You Win!!  Click an image to restart!"
    },
  ]
  
  module.exports = { characters, navMessages }