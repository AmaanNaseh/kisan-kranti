import React, { useEffect, useState } from "react";

import { AIArchitectureDataset } from "../Dataset/AIArchitectureDataset";

import appleIcon from "../Assets/AIModelPage/apple.png";
import bananaIcon from "../Assets/AIModelPage/banana.png";
import cassavaIcon from "../Assets/AIModelPage/cassava.png";
import cherryIcon from "../Assets/AIModelPage/cherry.png";
import cornIcon from "../Assets/AIModelPage/corn.png";
import cucumberIcon from "../Assets/AIModelPage/cucumber.png";
import eggplantIcon from "../Assets/AIModelPage/eggplant.png";
import grapesIcon from "../Assets/AIModelPage/grapes.png";
import moneyplantIcon from "../Assets/AIModelPage/moneyplant.png";
import peachIcon from "../Assets/AIModelPage/peach.png";
import pepperIcon from "../Assets/AIModelPage/pepper.png";
import potatoIcon from "../Assets/AIModelPage/potato.png";
import strawberryIcon from "../Assets/AIModelPage/strawberry.png";
import sugarcaneIcon from "../Assets/AIModelPage/sugarcane.png";
import tomatoIcon from "../Assets/AIModelPage/tomato.png";
import watermelonIcon from "../Assets/AIModelPage/watermelon.png";
import wheatIcon from "../Assets/AIModelPage/wheat.png";
import cashewIcon from "../Assets/AIModelPage/cashew.png";
import cottonIcon from "../Assets/AIModelPage/cotton.png";
import soybeanIcon from "../Assets/AIModelPage/soybean.png";

// Leaf

import appleDataset1 from "../Assets/AIModelPage/dataset/leaf/apple/apple_healthy.jpg";
import appleDataset2 from "../Assets/AIModelPage/dataset/leaf/apple/apple_black_rot.jpg";
import appleDataset3 from "../Assets/AIModelPage/dataset/leaf/apple/apple_cedar_rust.jpg";
import appleDataset4 from "../Assets/AIModelPage/dataset/leaf/apple/apple_scab.jpg";

import bananaDataset1 from "../Assets/AIModelPage/dataset/leaf/banana/banana_healthy.jpg";
import bananaDataset2 from "../Assets/AIModelPage/dataset/leaf/banana/banana_black_sigatoka.jpg";
import bananaDataset3 from "../Assets/AIModelPage/dataset/leaf/banana/banana_bract_mosaic_virus.jpg";
import bananaDataset4 from "../Assets/AIModelPage/dataset/leaf/banana/banana_moko.jpg";
import bananaDataset5 from "../Assets/AIModelPage/dataset/leaf/banana/banana_panama.jpg";
import bananaDataset6 from "../Assets/AIModelPage/dataset/leaf/banana/banana_yellow_sigatoka.jpg";

import cassavaDataset1 from "../Assets/AIModelPage/dataset/leaf/cassava/cassava_healthy.jpg";
import cassavaDataset2 from "../Assets/AIModelPage/dataset/leaf/cassava/cassava_bacterial_blight.jpg";
import cassavaDataset3 from "../Assets/AIModelPage/dataset/leaf/cassava/cassava_brown_spot.jpg";
import cassavaDataset4 from "../Assets/AIModelPage/dataset/leaf/cassava/cassava_green_mite.jpg";
import cassavaDataset5 from "../Assets/AIModelPage/dataset/leaf/cassava/cassava_mosaic_virus.jpg";

import cherryDataset1 from "../Assets/AIModelPage/dataset/leaf/cherry/cherry_healthy.jpg";
import cherryDataset2 from "../Assets/AIModelPage/dataset/leaf/cherry/cherry_powdery_mildew.jpg";

import cornDataset1 from "../Assets/AIModelPage/dataset/leaf/corn/corn_healthy.jpg";
import cornDataset2 from "../Assets/AIModelPage/dataset/leaf/corn/corn_common_rust.jpg";
import cornDataset3 from "../Assets/AIModelPage/dataset/leaf/corn/corn_gray_leaf_spot.jpg";
import cornDataset4 from "../Assets/AIModelPage/dataset/leaf/corn/corn_northern_leaf_blight.jpg";

import cucumberDataset1 from "../Assets/AIModelPage/dataset/leaf/cucumber/cucumber_healthy.jpg";
import cucumberDataset2 from "../Assets/AIModelPage/dataset/leaf/cucumber/cucumber_downey_mildew.jpg";
import cucumberDataset3 from "../Assets/AIModelPage/dataset/leaf/cucumber/cucumber_powdery_mildew.jpg";

import eggplantDataset1 from "../Assets/AIModelPage/dataset/leaf/eggplant/eggplant_healthy.jpg";
import eggplantDataset2 from "../Assets/AIModelPage/dataset/leaf/eggplant/eggplant_leaf_spot.jpg";
import eggplantDataset3 from "../Assets/AIModelPage/dataset/leaf/eggplant/eggplant_mosaic_virus.jpg";
import eggplantDataset4 from "../Assets/AIModelPage/dataset/leaf/eggplant/eggplant_small_leaf.jpg";
import eggplantDataset5 from "../Assets/AIModelPage/dataset/leaf/eggplant/eggplant_white_mold.jpg";
import eggplantDataset6 from "../Assets/AIModelPage/dataset/leaf/eggplant/eggplant_wilt.jpg";

import grapesDataset1 from "../Assets/AIModelPage/dataset/leaf/grapes/grapes_healthy.jpg";
import grapesDataset2 from "../Assets/AIModelPage/dataset/leaf/grapes/grapes_black_measles.jpg";
import grapesDataset3 from "../Assets/AIModelPage/dataset/leaf/grapes/grapes_black_rot.jpg";
import grapesDataset4 from "../Assets/AIModelPage/dataset/leaf/grapes/grapes_leaf_blight.jpg";

import moneyplantDataset1 from "../Assets/AIModelPage/dataset/leaf/moneyplant/moneyplant_healthy.jpg";
import moneyplantDataset2 from "../Assets/AIModelPage/dataset/leaf/moneyplant/moneyplant_bacterial_wilt.jpg";
import moneyplantDataset3 from "../Assets/AIModelPage/dataset/leaf/moneyplant/moneyplant_manganese_toxicity.jpg";

import peachDataset1 from "../Assets/AIModelPage/dataset/leaf/peach/peach_healthy.jpg";
import peachDataset2 from "../Assets/AIModelPage/dataset/leaf/peach/peach_bacterial_spot.jpg";

import pepperDataset1 from "../Assets/AIModelPage/dataset/leaf/pepper/pepper_healthy.jpg";
import pepperDataset2 from "../Assets/AIModelPage/dataset/leaf/pepper/pepper_bacterial_spot.jpg";

import potatoDataset1 from "../Assets/AIModelPage/dataset/leaf/potato/potato_healthy.jpg";
import potatoDataset2 from "../Assets/AIModelPage/dataset/leaf/potato/potato_early_blight.jpg";
import potatoDataset3 from "../Assets/AIModelPage/dataset/leaf/potato/potato_late_blight.jpg";

import strawberryDataset1 from "../Assets/AIModelPage/dataset/leaf/strawberry/strawberry_healthy.jpg";
import strawberryDataset2 from "../Assets/AIModelPage/dataset/leaf/strawberry/strawberry_leaf_scorch.jpg";

import tomatoDataset1 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_healthy.jpg";
import tomatoDataset2 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_bacterial_spot.jpg";
import tomatoDataset3 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_early_blight.jpg";
import tomatoDataset4 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_late_blight.jpg";
import tomatoDataset5 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_leaf_mold.jpg";
import tomatoDataset6 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_leaf_spot.jpg";
import tomatoDataset7 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_mosaic_virus.jpg";
import tomatoDataset8 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_spider_mite.jpg";
import tomatoDataset9 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_target_spot.jpg";
import tomatoDataset10 from "../Assets/AIModelPage/dataset/leaf/tomato/tomato_yellow_leaf_curl_virus.jpg";

import sugarcaneDataset1 from "../Assets/AIModelPage/dataset/leaf/sugarcane/sugarcane_healthy.jpg";
import sugarcaneDataset2 from "../Assets/AIModelPage/dataset/leaf/sugarcane/sugarcane_bacterial_blight.jpg";
import sugarcaneDataset3 from "../Assets/AIModelPage/dataset/leaf/sugarcane/sugarcane_mosaic_virus.jpg";
import sugarcaneDataset4 from "../Assets/AIModelPage/dataset/leaf/sugarcane/sugarcane_red_rot.jpg";
import sugarcaneDataset5 from "../Assets/AIModelPage/dataset/leaf/sugarcane/sugarcane_rust.jpg";
import sugarcaneDataset6 from "../Assets/AIModelPage/dataset/leaf/sugarcane/sugarcane_yellow_rot.jpg";

import watermelonDataset1 from "../Assets/AIModelPage/dataset/leaf/watermelon/watermelon_healthy.jpg";
import watermelonDataset2 from "../Assets/AIModelPage/dataset/leaf/watermelon/watermelon_downey_mildew.jpg";
import watermelonDataset3 from "../Assets/AIModelPage/dataset/leaf/watermelon/watermelon_mosaic_virus.jpg";

import wheatDataset1 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_healthy.jpg";
import wheatDataset2 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_black_rust.jpg";
import wheatDataset3 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_brown_rust.jpg";
import wheatDataset4 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_leaf_blight.jpg";
import wheatDataset5 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_powdery_mildew.jpg";
import wheatDataset6 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_scab.jpg";
import wheatDataset7 from "../Assets/AIModelPage/dataset/leaf/wheat/wheat_yellow_rust.jpg";

// Pest

import bananaPestDataset1 from "../Assets/AIModelPage/dataset/pest/banana/banana_healthy.jpg";
import bananaPestDataset2 from "../Assets/AIModelPage/dataset/pest/banana/banana_pest.jpg";

import cashewPestDataset1 from "../Assets/AIModelPage/dataset/pest/cashew/cashew_healthy.jpg";
import cashewPestDataset2 from "../Assets/AIModelPage/dataset/pest/cashew/cashew_anthracnose.jpg";
import cashewPestDataset3 from "../Assets/AIModelPage/dataset/pest/cashew/cashew_leaf_miner.jpg";

import cornPestDataset1 from "../Assets/AIModelPage/dataset/pest/corn/corn_healthy.jpg";
import cornPestDataset2 from "../Assets/AIModelPage/dataset/pest/corn/corn_fall_armyworm.jpg";
import cornPestDataset3 from "../Assets/AIModelPage/dataset/pest/corn/corn_grasshopper.jpg";
import cornPestDataset4 from "../Assets/AIModelPage/dataset/pest/corn/corn_leaf_beetle.jpg";

import cottonPestDataset1 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_healthy.jpg";
import cottonPestDataset2 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_american_bollworm.jpg";
import cottonPestDataset3 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_anthracnose.jpg";
import cottonPestDataset4 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_aphid.jpg";
import cottonPestDataset5 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_bollrot.jpg";
import cottonPestDataset6 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_bollworm.jpg";
import cottonPestDataset7 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_mealy_bug.jpg";
import cottonPestDataset8 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_pink_bollworm.jpg";
import cottonPestDataset9 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_red_bug.jpg";
import cottonPestDataset10 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_thrips.jpg";
import cottonPestDataset11 from "../Assets/AIModelPage/dataset/pest/cotton/cotton_whitefly.jpg";

import eggplantPestDataset1 from "../Assets/AIModelPage/dataset/pest/eggplant/eggplant_healthy.jpg";
import eggplantPestDataset2 from "../Assets/AIModelPage/dataset/pest/eggplant/eggplant_pest.jpg";

import potatoPestDataset1 from "../Assets/AIModelPage/dataset/pest/potato/potato_healthy.jpg";
import potatoPestDataset2 from "../Assets/AIModelPage/dataset/pest/potato/potato_nematode.jpg";
import potatoPestDataset3 from "../Assets/AIModelPage/dataset/pest/potato/potato_pest.jpg";

import wheatPestDataset1 from "../Assets/AIModelPage/dataset/pest/wheat/wheat_healthy.jpg";
import wheatPestDataset2 from "../Assets/AIModelPage/dataset/pest/wheat/wheat_aphid.jpg";
import wheatPestDataset3 from "../Assets/AIModelPage/dataset/pest/wheat/wheat_mite.jpg";
import wheatPestDataset4 from "../Assets/AIModelPage/dataset/pest/wheat/wheat_stemfly.jpg";

// Seed
import cornSeedDataset1 from "../Assets/AIModelPage/dataset/seed/corn/corn_healthy.jpg";
import cornSeedDataset2 from "../Assets/AIModelPage/dataset/seed/corn/corn_broken.jpg";
import cornSeedDataset3 from "../Assets/AIModelPage/dataset/seed/corn/corn_discolored.jpg";
import cornSeedDataset4 from "../Assets/AIModelPage/dataset/seed/corn/corn_silkcut.jpg";

import soybeanSeedDataset1 from "../Assets/AIModelPage/dataset/seed/soybean/soybean_healthy.jpg";
import soybeanSeedDataset2 from "../Assets/AIModelPage/dataset/seed/soybean/soybean_broken.jpg";
import soybeanSeedDataset3 from "../Assets/AIModelPage/dataset/seed/soybean/soybean_damaged_skin.jpg";
import soybeanSeedDataset4 from "../Assets/AIModelPage/dataset/seed/soybean/soybean_immature.jpg";
import soybeanSeedDataset5 from "../Assets/AIModelPage/dataset/seed/soybean/soybean_spotted.jpg";

// import { AIArchitectureDataset } from "../Dataset/AIArchitectureDataset";

const AIArchitecturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Leaf Dataset

  const appleLeafImages = [
    appleDataset1,
    appleDataset2,
    appleDataset3,
    appleDataset4,
  ];

  const bananaLeafImages = [
    bananaDataset1,
    bananaDataset2,
    bananaDataset3,
    bananaDataset4,
    bananaDataset5,
    bananaDataset6,
  ];

  const cassavaLeafImages = [
    cassavaDataset1,
    cassavaDataset2,
    cassavaDataset3,
    cassavaDataset4,
    cassavaDataset5,
  ];

  const cherryLeafImages = [cherryDataset1, cherryDataset2];

  const cornLeafImages = [
    cornDataset1,
    cornDataset2,
    cornDataset3,
    cornDataset4,
  ];

  const cucumberLeafImages = [
    cucumberDataset1,
    cucumberDataset2,
    cucumberDataset3,
  ];

  const eggplantLeafImages = [
    eggplantDataset1,
    eggplantDataset2,
    eggplantDataset3,
    eggplantDataset4,
    eggplantDataset5,
    eggplantDataset6,
  ];

  const grapesLeafImages = [
    grapesDataset1,
    grapesDataset2,
    grapesDataset3,
    grapesDataset4,
  ];

  const moneyplantLeafImages = [
    moneyplantDataset1,
    moneyplantDataset2,
    moneyplantDataset3,
  ];

  const peachLeafImages = [peachDataset1, peachDataset2];
  const pepperLeafImages = [pepperDataset1, pepperDataset2];
  const potatoLeafImages = [potatoDataset1, potatoDataset2, potatoDataset3];
  const strawberryLeafImages = [strawberryDataset1, strawberryDataset2];

  const sugarcaneLeafImages = [
    sugarcaneDataset1,
    sugarcaneDataset2,
    sugarcaneDataset3,
    sugarcaneDataset4,
    sugarcaneDataset5,
    sugarcaneDataset6,
  ];

  const tomatoLeafImages = [
    tomatoDataset1,
    tomatoDataset2,
    tomatoDataset3,
    tomatoDataset4,
    tomatoDataset5,
    tomatoDataset6,
    tomatoDataset7,
    tomatoDataset8,
    tomatoDataset9,
    tomatoDataset10,
  ];

  const watermelonLeafImages = [
    watermelonDataset1,
    watermelonDataset2,
    watermelonDataset3,
  ];

  const wheatLeafImages = [
    wheatDataset1,
    wheatDataset2,
    wheatDataset3,
    wheatDataset4,
    wheatDataset5,
    wheatDataset6,
    wheatDataset7,
  ];

  // Pest Dataset

  const bananaPestImages = [bananaPestDataset1, bananaPestDataset2];
  const cashewPestImages = [
    cashewPestDataset1,
    cashewPestDataset2,
    cashewPestDataset3,
  ];
  const cornPestImages = [
    cornPestDataset1,
    cornPestDataset2,
    cornPestDataset3,
    cornPestDataset4,
  ];
  const cottonPestImages = [
    cottonPestDataset1,
    cottonPestDataset2,
    cottonPestDataset3,
    cottonPestDataset4,
    cottonPestDataset5,
    cottonPestDataset6,
    cottonPestDataset7,
    cottonPestDataset8,
    cottonPestDataset9,
    cottonPestDataset10,
    cottonPestDataset11,
  ];

  const eggplantPestImages = [eggplantPestDataset1, eggplantPestDataset2];
  const potatoPestImages = [
    potatoPestDataset1,
    potatoPestDataset2,
    potatoPestDataset3,
  ];
  const wheatPestImages = [
    wheatPestDataset1,
    wheatPestDataset2,
    wheatPestDataset3,
    wheatPestDataset4,
  ];

  // Seed Dataset

  const cornSeedImages = [
    cornSeedDataset1,
    cornSeedDataset2,
    cornSeedDataset3,
    cornSeedDataset4,
  ];

  const soybeanSeedImages = [
    soybeanSeedDataset1,
    soybeanSeedDataset2,
    soybeanSeedDataset3,
    soybeanSeedDataset4,
    soybeanSeedDataset5,
  ];

  const [appleLeafIndex, setAppleLeafIndex] = useState(0);
  const [bananaLeafIndex, setBananaLeafIndex] = useState(0);
  const [cassavaLeafIndex, setCassavaLeafIndex] = useState(0);
  const [cherryLeafIndex, setCherryLeafIndex] = useState(0);
  const [cornLeafIndex, setCornLeafIndex] = useState(0);
  const [cucumberLeafIndex, setCucumberLeafIndex] = useState(0);
  const [eggplantLeafIndex, setEggplantLeafIndex] = useState(0);
  const [grapesLeafIndex, setGrapesLeafIndex] = useState(0);
  const [moneyplantLeafIndex, setMoneyplantLeafIndex] = useState(0);
  const [peachLeafIndex, setPeachLeafIndex] = useState(0);
  const [pepperLeafIndex, setPepperLeafIndex] = useState(0);
  const [potatoLeafIndex, setPotatoLeafIndex] = useState(0);
  const [strawberryLeafIndex, setStrawberryLeafIndex] = useState(0);
  const [sugarcaneLeafIndex, setSugarcaneLeafIndex] = useState(0);
  const [tomatoLeafIndex, setTomatoLeafIndex] = useState(0);
  const [watermelonLeafIndex, setWatermelonLeafIndex] = useState(0);
  const [wheatLeafIndex, setWheatLeafIndex] = useState(0);

  const [bananaPestIndex, setBananaPestIndex] = useState(0);
  const [cashewPestIndex, setCashewPestIndex] = useState(0);
  const [cornPestIndex, setCornPestIndex] = useState(0);
  const [cottonPestIndex, setCottonPestIndex] = useState(0);
  const [eggplantPestIndex, setEggplantPestIndex] = useState(0);
  const [potatoPestIndex, setPotatoPestIndex] = useState(0);
  const [wheatPestIndex, setWheatPestIndex] = useState(0);

  const [cornSeedIndex, setCornSeedIndex] = useState(0);
  const [soybeanSeedIndex, setSoybeanSeedIndex] = useState(0);

  useEffect(() => {
    const appleLeafImgChanger = setInterval(() => {
      setAppleLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === appleLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(appleLeafImgChanger);
    };
  }, [appleLeafImages.length]);

  useEffect(() => {
    const bananaLeafImgChanger = setInterval(() => {
      setBananaLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === bananaLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(bananaLeafImgChanger);
    };
  }, [bananaLeafImages.length]);

  useEffect(() => {
    const cassavaLeafImgChanger = setInterval(() => {
      setCassavaLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === cassavaLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cassavaLeafImgChanger);
    };
  }, [cassavaLeafImages.length]);

  useEffect(() => {
    const cherryLeafImgChanger = setInterval(() => {
      setCherryLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === cherryLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cherryLeafImgChanger);
    };
  }, [cherryLeafImages.length]);

  useEffect(() => {
    const cornLeafImgChanger = setInterval(() => {
      setCornLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === cornLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cornLeafImgChanger);
    };
  }, [cornLeafImages.length]);

  useEffect(() => {
    const cucumberLeafImgChanger = setInterval(() => {
      setCucumberLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === cucumberLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cucumberLeafImgChanger);
    };
  }, [cucumberLeafImages.length]);

  useEffect(() => {
    const eggplantLeafImgChanger = setInterval(() => {
      setEggplantLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === eggplantLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(eggplantLeafImgChanger);
    };
  }, [eggplantLeafImages.length]);

  useEffect(() => {
    const grapesLeafImgChanger = setInterval(() => {
      setGrapesLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === grapesLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(grapesLeafImgChanger);
    };
  }, [grapesLeafImages.length]);

  useEffect(() => {
    const moneyplantLeafImgChanger = setInterval(() => {
      setMoneyplantLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === moneyplantLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(moneyplantLeafImgChanger);
    };
  }, [moneyplantLeafImages.length]);

  useEffect(() => {
    const peachLeafImgChanger = setInterval(() => {
      setPeachLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === peachLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(peachLeafImgChanger);
    };
  }, [peachLeafImages.length]);

  useEffect(() => {
    const pepperLeafImgChanger = setInterval(() => {
      setPepperLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === pepperLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(pepperLeafImgChanger);
    };
  }, [pepperLeafImages.length]);

  useEffect(() => {
    const potatoLeafImgChanger = setInterval(() => {
      setPotatoLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === potatoLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(potatoLeafImgChanger);
    };
  }, [potatoLeafImages.length]);

  useEffect(() => {
    const strawberryLeafImgChanger = setInterval(() => {
      setStrawberryLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === strawberryLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(strawberryLeafImgChanger);
    };
  }, [strawberryLeafImages.length]);

  useEffect(() => {
    const sugarcaneLeafImgChanger = setInterval(() => {
      setSugarcaneLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === sugarcaneLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(sugarcaneLeafImgChanger);
    };
  }, [sugarcaneLeafImages.length]);

  useEffect(() => {
    const tomatoLeafImgChanger = setInterval(() => {
      setTomatoLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === tomatoLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(tomatoLeafImgChanger);
    };
  }, [tomatoLeafImages.length]);

  useEffect(() => {
    const watermelonLeafImgChanger = setInterval(() => {
      setWatermelonLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === watermelonLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(watermelonLeafImgChanger);
    };
  }, [watermelonLeafImages.length]);

  useEffect(() => {
    const wheatLeafImgChanger = setInterval(() => {
      setWheatLeafIndex((prevLeafIndex) => {
        return prevLeafIndex === wheatLeafImages.length - 1
          ? 0
          : prevLeafIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(wheatLeafImgChanger);
    };
  }, [wheatLeafImages.length]);

  // Pest
  useEffect(() => {
    const bananaPestImgChanger = setInterval(() => {
      setBananaPestIndex((prevPestIndex) => {
        return prevPestIndex === bananaPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(bananaPestImgChanger);
    };
  }, [bananaPestImages.length]);
  useEffect(() => {
    const cashewPestImgChanger = setInterval(() => {
      setCashewPestIndex((prevPestIndex) => {
        return prevPestIndex === cashewPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cashewPestImgChanger);
    };
  }, [cashewPestImages.length]);
  useEffect(() => {
    const cornPestImgChanger = setInterval(() => {
      setCornPestIndex((prevPestIndex) => {
        return prevPestIndex === cornPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cornPestImgChanger);
    };
  }, [cornPestImages.length]);
  useEffect(() => {
    const cottonPestImgChanger = setInterval(() => {
      setCottonPestIndex((prevPestIndex) => {
        return prevPestIndex === cottonPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cottonPestImgChanger);
    };
  }, [cottonPestImages.length]);
  useEffect(() => {
    const eggplantPestImgChanger = setInterval(() => {
      setEggplantPestIndex((prevPestIndex) => {
        return prevPestIndex === eggplantPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(eggplantPestImgChanger);
    };
  }, [eggplantPestImages.length]);
  useEffect(() => {
    const potatoPestImgChanger = setInterval(() => {
      setPotatoPestIndex((prevPestIndex) => {
        return prevPestIndex === potatoPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(potatoPestImgChanger);
    };
  }, [potatoPestImages.length]);

  useEffect(() => {
    const wheatPestImgChanger = setInterval(() => {
      setWheatPestIndex((prevPestIndex) => {
        return prevPestIndex === wheatPestImages.length - 1
          ? 0
          : prevPestIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(wheatPestImgChanger);
    };
  }, [wheatPestImages.length]);

  // Seed
  useEffect(() => {
    const cornSeedImgChanger = setInterval(() => {
      setCornSeedIndex((prevSeedIndex) => {
        return prevSeedIndex === cornSeedImages.length - 1
          ? 0
          : prevSeedIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(cornSeedImgChanger);
    };
  }, [cornSeedImages.length]);

  useEffect(() => {
    const soybeanSeedImgChanger = setInterval(() => {
      setSoybeanSeedIndex((prevSeedIndex) => {
        return prevSeedIndex === soybeanSeedImages.length - 1
          ? 0
          : prevSeedIndex + 1;
      });
    }, 1000);

    return () => {
      clearInterval(soybeanSeedImgChanger);
    };
  }, [soybeanSeedImages.length]);

  return (
    <>
      <div className="flex items-center justify-center my-10">
        <h1 className="bg-[#436F29] text-white px-4 py-2 rounded-lg font-bold text-2xl md:text-3xl lg:tex-5xl mt-4">
          Leaf
        </h1>
      </div>
      <div className="my-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,400px))] gap-10 p-4 md:px-20 md:py-10">
        {/* Apple */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={appleIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.apple.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.apple.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.apple.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.apple.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.apple.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.apple.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.apple.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.apple.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={appleLeafImages[appleLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Banana */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={bananaIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.banana.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.banana.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.banana.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.banana.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.banana.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.banana.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.banana.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.banana.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={bananaLeafImages[bananaLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Cassava */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cassavaIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.cassava.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.cassava.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.cassava.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.cassava.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.cassava.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.cassava.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.cassava.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.cassava.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cassavaLeafImages[cassavaLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Cherry */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cherryIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.cherry.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.cherry.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.cherry.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.cherry.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.cherry.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.cherry.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.cherry.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.cherry.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cherryLeafImages[cherryLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Corn */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cornIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.corn.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.corn.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.corn.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.corn.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.corn.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.corn.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.corn.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.corn.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cornLeafImages[cornLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Cucumber */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cucumberIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.cucumber.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.cucumber.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.cucumber.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.cucumber.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.cucumber.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.cucumber.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.cucumber.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.cucumber.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cucumberLeafImages[cucumberLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Eggplant */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={eggplantIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.eggplant.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.eggplant.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.eggplant.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.eggplant.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.eggplant.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.eggplant.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.eggplant.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.eggplant.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={eggplantLeafImages[eggplantLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Grapes */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={grapesIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.grapes.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.grapes.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.grapes.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.grapes.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.grapes.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.grapes.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.grapes.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.grapes.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={grapesLeafImages[grapesLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Moneyplant */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img
              src={moneyplantIcon}
              className="w-full h-full cover"
              alt="..."
            />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.moneyplant.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.moneyplant.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images:{" "}
              {AIArchitectureDataset.leaf.moneyplant.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.moneyplant.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.moneyplant.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.moneyplant.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.moneyplant.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.moneyplant.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={moneyplantLeafImages[moneyplantLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Peach */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={peachIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.peach.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.peach.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.peach.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.peach.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.peach.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.peach.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.peach.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.peach.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={peachLeafImages[peachLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Pepper */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={pepperIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.pepper.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.pepper.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.pepper.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.pepper.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.pepper.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.pepper.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.pepper.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.pepper.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={pepperLeafImages[pepperLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Potato */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={potatoIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.potato.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.potato.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.potato.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.potato.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.potato.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.potato.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.potato.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.potato.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={potatoLeafImages[potatoLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Strawberry */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img
              src={strawberryIcon}
              className="w-full h-full cover"
              alt="..."
            />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.strawberry.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.strawberry.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images:{" "}
              {AIArchitectureDataset.leaf.strawberry.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.strawberry.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.strawberry.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.strawberry.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.strawberry.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.strawberry.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={strawberryLeafImages[strawberryLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Sugarcane */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img
              src={sugarcaneIcon}
              className="w-full h-full cover"
              alt="..."
            />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.sugarcane.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.sugarcane.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images:{" "}
              {AIArchitectureDataset.leaf.sugarcane.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.sugarcane.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.sugarcane.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.sugarcane.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.sugarcane.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.sugarcane.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={sugarcaneLeafImages[sugarcaneLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Tomato */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={tomatoIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.tomato.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.tomato.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.tomato.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.tomato.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.tomato.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.tomato.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.tomato.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.tomato.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={tomatoLeafImages[tomatoLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Watermelon */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img
              src={watermelonIcon}
              className="w-full h-full cover"
              alt="..."
            />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.watermelon.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.leaf.watermelon.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images:{" "}
              {AIArchitectureDataset.leaf.watermelon.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.watermelon.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.watermelon.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.watermelon.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.watermelon.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.watermelon.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={watermelonLeafImages[watermelonLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Wheat */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={wheatIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.leaf.wheat.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.leaf.wheat.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.leaf.wheat.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.leaf.wheat.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.wheat.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.wheat.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.leaf.wheat.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.leaf.wheat.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={wheatLeafImages[wheatLeafIndex]} alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <h1 className="bg-[#436F29] text-white px-4 py-2 rounded-lg font-bold text-2xl md:text-3xl lg:tex-5xl mt-4">
          Pest
        </h1>
      </div>

      <div className="my-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,400px))] gap-10 p-4 md:px-20 md:py-10">
        {/* Banana */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={bananaIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.banana.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.pest.banana.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.banana.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.banana.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.banana.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.banana.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.banana.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.banana.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={bananaPestImages[bananaPestIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Cashew */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cashewIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.cashew.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.pest.cashew.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.cashew.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.cashew.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.cashew.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.cashew.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.cashew.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.cashew.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cashewPestImages[cashewPestIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Corn */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cornIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.corn.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.pest.corn.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.corn.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.corn.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.corn.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.corn.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.corn.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.corn.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cornPestImages[cornPestIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Cotton */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cottonIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.cotton.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.pest.cotton.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.cotton.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.cotton.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.cotton.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.cotton.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.cotton.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.cotton.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cottonPestImages[cottonPestIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Eggplant */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={eggplantIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.eggplant.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.pest.eggplant.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.eggplant.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.eggplant.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.eggplant.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.eggplant.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.eggplant.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.eggplant.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={eggplantPestImages[eggplantPestIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Potato */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={potatoIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.potato.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.pest.potato.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.potato.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.potato.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.potato.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.potato.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.potato.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.potato.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={potatoPestImages[potatoPestIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Wheat */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={wheatIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.pest.wheat.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.pest.wheat.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.pest.wheat.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.pest.wheat.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.wheat.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.wheat.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.pest.wheat.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.pest.wheat.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={wheatPestImages[wheatPestIndex]} alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <h1 className="bg-[#436F29] text-white px-4 py-2 rounded-lg font-bold text-2xl md:text-3xl lg:tex-5xl mt-4">
          Seed
        </h1>
      </div>

      <div className="my-10 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(250px,400px))] gap-10 p-4 md:px-20 md:py-10">
        {/* Corn */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={cornIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.seed.corn.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images: {AIArchitectureDataset.seed.corn.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.seed.corn.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.seed.corn.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.seed.corn.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.seed.corn.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.seed.corn.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.seed.corn.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={cornSeedImages[cornSeedIndex]} alt="..." />
            </div>
          </div>
        </div>
        {/* Soybean */}
        <div className="flex flex-col items-center gap-4 bg-[#88C273] min-w-[300px] max-w-[450px] px-5 py-8">
          <div className="w-[100px]">
            <img src={soybeanIcon} className="w-full h-full cover" alt="..." />
          </div>
          <h1 className="text-2xl font-bold text-center">
            {AIArchitectureDataset.seed.soybean.cropName}
          </h1>

          <div className="flex items-center justify-evenly flex-wrap gap-4">
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Training images:{" "}
              {AIArchitectureDataset.seed.soybean.trainImgCount}
            </h3>
            <h3 className="bg-[#FFBF61] text-white font-semibold px-2 py-1 rounded-lg">
              Testing images: {AIArchitectureDataset.seed.soybean.testImgCount}
            </h3>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Training classes:</h3>
            <ul className="list-none flex items-center flex-wrap gap-4">
              {AIArchitectureDataset.seed.soybean.trainingClasses.map(
                (trainingClass) => {
                  return (
                    <li className="bg-[#608BC1] text-white font-semibold px-2 py-1 rounded-lg">
                      {trainingClass}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Accuracy</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.seed.soybean.accuracy.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.seed.soybean.accuracy.test}
              </h4>
            </div>
          </div>
          <div>
            <h3 className="text-center text-lg font-bold">Loss</h3>
            <div className="flex items-center justify-evenly flex-wrap gap-4">
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Train: {AIArchitectureDataset.seed.soybean.loss.train}
              </h4>
              <h4 className="bg-[#436F29] text-white font-semibold px-2 py-1 rounded-lg">
                Test: {AIArchitectureDataset.seed.soybean.loss.test}
              </h4>
            </div>
          </div>
          <div>
            <h2 className="text-center font-bold text-xl">Dataset preview:</h2>
            <div>
              <img src={soybeanSeedImages[soybeanSeedIndex]} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIArchitecturePage;
