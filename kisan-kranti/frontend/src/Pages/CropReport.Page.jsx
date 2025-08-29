import React, { useRef, useState, useEffect } from "react";
import { CropDataset } from "../Dataset/CropDataset";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Logo from "../Assets/Navbar/Logo.jpg";
import MedicineCalculator from "../Components/MedicineCalculator/MedicineCalculator";

const CropReportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const [plantPart, setPlantPart] = useState("Select Plant Part");
  const [cropCategory, setCropCategory] = useState("Select Crop Category");
  const [cropDisease, setCropDisease] = useState("Select Crop Disease");

  const [diseaseTitle, setDiseaseTitle] = useState("");
  const [diseaseDescription, setDiseaseDescription] = useState("");
  const [diseasePrecautions, setDiseasePrecautions] = useState([]);
  const [diseaseHomeRemedies, setDiseaseHomeRemedies] = useState([]);
  const [diseaseOrganicSolutions, setDiseaseOrganicSolutions] = useState([]);
  const [diseaseTreatments, setDiseaseTreatments] = useState([]);
  const [diseaseChemicals, setDiseaseChemicals] = useState({});
  const [cropUsage, setCropUsage] = useState([]);

  const handlePartChange = (e) => {
    setPlantPart(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCropCategory(e.target.value);
  };

  const handleDiseaseSetData = () => {
    // --------------------- Leaf ---------------------

    // apple
    if (cropDisease === "Apple Black Rot") {
      setDiseaseTitle(CropDataset.leaf.apple.appleBlackRot.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.apple.appleBlackRot.description);
      setDiseasePrecautions(CropDataset.leaf.apple.appleBlackRot.precautions);
      setDiseaseHomeRemedies(CropDataset.leaf.apple.appleBlackRot.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.leaf.apple.appleBlackRot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.apple.appleBlackRot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.apple.appleBlackRot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.apple.appleBlackRot.otherUsage);
    } else if (cropDisease === "Apple Cedar Rust") {
      setDiseaseTitle(CropDataset.leaf.apple.appleCedarRust.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.apple.appleCedarRust.description);
      setDiseasePrecautions(CropDataset.leaf.apple.appleCedarRust.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.apple.appleCedarRust.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.apple.appleCedarRust.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.apple.appleCedarRust.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.apple.appleCedarRust.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.apple.appleCedarRust.otherUsage);
    } else if (cropDisease === "Apple Scab") {
      setDiseaseTitle(CropDataset.leaf.apple.appleScab.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.apple.appleScab.description);
      setDiseasePrecautions(CropDataset.leaf.apple.appleScab.precautions);
      setDiseaseHomeRemedies(CropDataset.leaf.apple.appleScab.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.leaf.apple.appleScab.organicSolutions
      );
      setDiseaseTreatments(CropDataset.leaf.apple.appleScab.suggestedTreatment);
      setDiseaseChemicals(CropDataset.leaf.apple.appleScab.suggestedChemicals);
      setCropUsage(CropDataset.leaf.apple.appleScab.otherUsage);
    }

    // banana
    else if (cropDisease === "Banana Black Sigatoka") {
      setDiseaseTitle(CropDataset.leaf.banana.bananaBlackSigatoka.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.banana.bananaBlackSigatoka.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.banana.bananaBlackSigatoka.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.banana.bananaBlackSigatoka.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.banana.bananaBlackSigatoka.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.banana.bananaBlackSigatoka.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.banana.bananaBlackSigatoka.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.banana.bananaBlackSigatoka.otherUsage);
    } else if (cropDisease === "Banana Bract Mosaic Virus") {
      setDiseaseTitle(
        CropDataset.leaf.banana.bananaBractMosaicVirus.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.banana.bananaBractMosaicVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.banana.bananaBractMosaicVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.banana.bananaBractMosaicVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.banana.bananaBractMosaicVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.banana.bananaBractMosaicVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.banana.bananaBractMosaicVirus.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.banana.bananaBractMosaicVirus.otherUsage);
    } else if (cropDisease === "Banana Moko") {
      setDiseaseTitle(CropDataset.leaf.banana.bananaMoko.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.banana.bananaMoko.description);
      setDiseasePrecautions(CropDataset.leaf.banana.bananaMoko.precautions);
      setDiseaseHomeRemedies(CropDataset.leaf.banana.bananaMoko.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.leaf.banana.bananaMoko.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.banana.bananaMoko.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.banana.bananaMoko.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.banana.bananaMoko.otherUsage);
    } else if (cropDisease === "Banana Panama") {
      setDiseaseTitle(CropDataset.leaf.banana.bananaPanama.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.banana.bananaPanama.description);
      setDiseasePrecautions(CropDataset.leaf.banana.bananaPanama.precautions);
      setDiseaseHomeRemedies(CropDataset.leaf.banana.bananaPanama.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.leaf.banana.bananaPanama.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.banana.bananaPanama.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.banana.bananaPanama.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.banana.bananaPanama.otherUsage);
    } else if (cropDisease === "Banana Yellow Sigatoka") {
      setDiseaseTitle(
        CropDataset.leaf.banana.bananaYellowSigatoka.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.banana.bananaYellowSigatoka.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.banana.bananaYellowSigatoka.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.banana.bananaYellowSigatoka.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.banana.bananaYellowSigatoka.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.banana.bananaYellowSigatoka.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.banana.bananaYellowSigatoka.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.banana.bananaYellowSigatoka.otherUsage);
    }

    // cassava
    else if (cropDisease === "Cassava Bacterial Blight") {
      setDiseaseTitle(
        CropDataset.leaf.cassava.cassavaBacterialBlight.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.cassava.cassavaBacterialBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cassava.cassavaBacterialBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cassava.cassavaBacterialBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cassava.cassavaBacterialBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cassava.cassavaBacterialBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cassava.cassavaBacterialBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cassava.cassavaBacterialBlight.otherUsage);
    } else if (cropDisease === "Cassava Brown Spot") {
      setDiseaseTitle(CropDataset.leaf.cassava.cassavaBrownSpot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.cassava.cassavaBrownSpot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cassava.cassavaBrownSpot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cassava.cassavaBrownSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cassava.cassavaBrownSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cassava.cassavaBrownSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cassava.cassavaBrownSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cassava.cassavaBrownSpot.otherUsage);
    } else if (cropDisease === "Cassava Green Mite") {
      setDiseaseTitle(CropDataset.leaf.cassava.cassavaGreenMite.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.cassava.cassavaGreenMite.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cassava.cassavaGreenMite.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cassava.cassavaGreenMite.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cassava.cassavaGreenMite.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cassava.cassavaGreenMite.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cassava.cassavaGreenMite.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cassava.cassavaGreenMite.otherUsage);
    } else if (cropDisease === "Cassava Mosaic Virus") {
      setDiseaseTitle(CropDataset.leaf.cassava.cassavaMosaicVirus.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.cassava.cassavaMosaicVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cassava.cassavaMosaicVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cassava.cassavaMosaicVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cassava.cassavaMosaicVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cassava.cassavaMosaicVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cassava.cassavaMosaicVirus.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cassava.cassavaMosaicVirus.otherUsage);
    }

    // cherry
    else if (cropDisease === "Cherry Powdery Mildew") {
      setDiseaseTitle(CropDataset.leaf.cherry.cherryPowderyMildew.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.cherry.cherryPowderyMildew.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cherry.cherryPowderyMildew.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cherry.cherryPowderyMildew.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cherry.cherryPowderyMildew.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cherry.cherryPowderyMildew.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cherry.cherryPowderyMildew.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cherry.cherryPowderyMildew.otherUsage);
    }

    // Corn
    else if (cropDisease === "Corn Common Rust") {
      setDiseaseTitle(CropDataset.leaf.corn.cornCommonRust.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.corn.cornCommonRust.description);
      setDiseasePrecautions(CropDataset.leaf.corn.cornCommonRust.precautions);
      setDiseaseHomeRemedies(CropDataset.leaf.corn.cornCommonRust.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.leaf.corn.cornCommonRust.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.corn.cornCommonRust.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.corn.cornCommonRust.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.corn.cornCommonRust.otherUsage);
    } else if (cropDisease === "Corn Gray Leaf Spot") {
      setDiseaseTitle(CropDataset.leaf.corn.cornGrayLeafSpot.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.corn.cornGrayLeafSpot.description);
      setDiseasePrecautions(CropDataset.leaf.corn.cornGrayLeafSpot.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.corn.cornGrayLeafSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.corn.cornGrayLeafSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.corn.cornGrayLeafSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.corn.cornGrayLeafSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.corn.cornGrayLeafSpot.otherUsage);
    } else if (cropDisease === "Corn Northern Leaf Blight") {
      setDiseaseTitle(
        CropDataset.leaf.corn.cornNorthernLeafBlight.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.corn.cornNorthernLeafBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.corn.cornNorthernLeafBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.corn.cornNorthernLeafBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.corn.cornNorthernLeafBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.corn.cornNorthernLeafBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.corn.cornNorthernLeafBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.corn.cornNorthernLeafBlight.otherUsage);
    }

    // cucumber
    else if (cropDisease === "Cucumber Downey Mildew") {
      setDiseaseTitle(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cucumber.cucumberDowneyMildew.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cucumber.cucumberDowneyMildew.otherUsage);
    } else if (cropDisease === "Cucumber Powdery Mildew") {
      setDiseaseTitle(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.cucumber.cucumberPowderyMildew.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.cucumber.cucumberPowderyMildew.otherUsage);
    }

    // eggplant
    else if (cropDisease === "Eggplant Leaf Spot") {
      setDiseaseTitle(CropDataset.leaf.eggplant.eggplantLeafSpot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.eggplant.eggplantLeafSpot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.eggplant.eggplantLeafSpot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.eggplant.eggplantLeafSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.eggplant.eggplantLeafSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.eggplant.eggplantLeafSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.eggplant.eggplantLeafSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.eggplant.eggplantLeafSpot.otherUsage);
    } else if (cropDisease === "Eggplant Mosaic Virus") {
      setDiseaseTitle(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.eggplant.eggplantMosaicVirus.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.eggplant.eggplantMosaicVirus.otherUsage);
    } else if (cropDisease === "Eggplant Small Leaf") {
      setDiseaseTitle(CropDataset.leaf.eggplant.eggplantSmallLeaf.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.eggplant.eggplantSmallLeaf.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.eggplant.eggplantSmallLeaf.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.eggplant.eggplantSmallLeaf.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.eggplant.eggplantSmallLeaf.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.eggplant.eggplantSmallLeaf.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.eggplant.eggplantSmallLeaf.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.eggplant.eggplantSmallLeaf.otherUsage);
    } else if (cropDisease === "Eggplant White Mold") {
      setDiseaseTitle(CropDataset.leaf.eggplant.eggplantWhiteMold.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.eggplant.eggplantWhiteMold.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.eggplant.eggplantWhiteMold.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.eggplant.eggplantWhiteMold.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.eggplant.eggplantWhiteMold.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.eggplant.eggplantWhiteMold.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.eggplant.eggplantWhiteMold.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.eggplant.eggplantWhiteMold.otherUsage);
    } else if (cropDisease === "Eggplant Wilt") {
      setDiseaseTitle(CropDataset.leaf.eggplant.eggplantWilt.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.eggplant.eggplantWilt.description);
      setDiseasePrecautions(CropDataset.leaf.eggplant.eggplantWilt.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.eggplant.eggplantWilt.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.eggplant.eggplantWilt.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.eggplant.eggplantWilt.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.eggplant.eggplantWilt.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.eggplant.eggplantWilt.otherUsage);
    }

    // Grapes
    else if (cropDisease === "Grapes Black Measles") {
      setDiseaseTitle(
        CropDataset.leaf.grapes.cornNorthernLeafBlight.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.grapes.grapesBlackMeasles.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.grapes.grapesBlackMeasles.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.grapes.grapesBlackMeasles.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.grapes.grapesBlackMeasles.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.grapes.grapesBlackMeasles.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.grapes.grapesBlackMeasles.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.grapes.grapesBlackMeasles.otherUsage);
    } else if (cropDisease === "Grapes Black Rot") {
      setDiseaseTitle(CropDataset.leaf.grapes.grapesBlackRot.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.grapes.grapesBlackRot.description);
      setDiseasePrecautions(CropDataset.leaf.grapes.grapesBlackRot.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.grapes.grapesBlackRot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.grapes.grapesBlackRot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.grapes.grapesBlackRot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.grapes.grapesBlackRot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.grapes.grapesBlackRot.otherUsage);
    } else if (cropDisease === "Grapes Leaf Spot") {
      setDiseaseTitle(CropDataset.leaf.grapes.grapesLeafSpot.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.grapes.grapesLeafSpot.description);
      setDiseasePrecautions(CropDataset.leaf.grapes.grapesLeafSpot.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.grapes.grapesLeafSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.grapes.grapesLeafSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.grapes.grapesLeafSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.grapes.grapesLeafSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.grapes.grapesLeafSpot.otherUsage);
    }

    // moneyplant
    else if (cropDisease === "Moneyplant Bacterial Wilt") {
      setDiseaseTitle(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.suggestedChemicals
      );
      setCropUsage(
        CropDataset.leaf.moneyplant.moneyplantBacterialWilt.otherUsage
      );
    } else if (cropDisease === "Moneyplant Manganese Toxicity") {
      setDiseaseTitle(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity
          .suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity
          .suggestedChemicals
      );
      setCropUsage(
        CropDataset.leaf.moneyplant.moneyplantManganeseToxicity.otherUsage
      );
    }

    // Peach
    else if (cropDisease === "Peach Bacterial Spot") {
      setDiseaseTitle(CropDataset.leaf.peach.peachBacterialSpot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.peach.peachBacterialSpot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.peach.peachBacterialSpot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.peach.peachBacterialSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.peach.peachBacterialSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.peach.peachBacterialSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.peach.peachBacterialSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.peach.peachBacterialSpot.otherUsage);
    }

    // Pepper
    else if (cropDisease === "Pepper Bacterial Spot") {
      setDiseaseTitle(CropDataset.leaf.pepper.pepperBacterialSpot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.pepper.pepperBacterialSpot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.pepper.pepperBacterialSpot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.pepper.pepperBacterialSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.pepper.pepperBacterialSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.pepper.pepperBacterialSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.pepper.pepperBacterialSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.pepper.pepperBacterialSpot.otherUsage);
    }

    // Potato
    else if (cropDisease === "Potato Early Blight") {
      setDiseaseTitle(CropDataset.leaf.potato.potatoEarlyBlight.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.potato.potatoEarlyBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.potato.potatoEarlyBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.potato.potatoEarlyBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.potato.potatoEarlyBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.potato.potatoEarlyBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.potato.potatoEarlyBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.potato.potatoEarlyBlight.otherUsage);
    } else if (cropDisease === "Potato Late Blight") {
      setDiseaseTitle(CropDataset.leaf.potato.potatoLateBlight.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.potato.potatoLateBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.potato.potatoLateBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.potato.potatoLateBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.potato.potatoLateBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.potato.potatoLateBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.potato.potatoLateBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.corn.cornNorthernLeafBlight.otherUsage);
    }

    // Strawberry
    else if (cropDisease === "Strawberry Leaf Scorch") {
      setDiseaseTitle(
        CropDataset.leaf.strawberry.strawberryLeafScorch.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.strawberry.strawberryLeafScorch.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.strawberry.strawberryLeafScorch.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.strawberry.strawberryLeafScorch.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.strawberry.strawberryLeafScorch.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.strawberry.strawberryLeafScorch.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.strawberry.strawberryLeafScorch.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.corn.cornNorthernLeafBlight.otherUsage);
    }

    // Sugarcane
    else if (cropDisease === "Sugarcane Bacterial Blight") {
      setDiseaseTitle(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.suggestedChemicals
      );
      setCropUsage(
        CropDataset.leaf.sugarcane.sugarcaneBacterialBlight.otherUsage
      );
    } else if (cropDisease === "Sugarcane Mosaic Virus") {
      setDiseaseTitle(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.sugarcane.sugarcaneMosaicVirus.otherUsage);
    } else if (cropDisease === "Sugarcane Red Rot") {
      setDiseaseTitle(CropDataset.leaf.sugarcane.sugarcaneRedRot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.sugarcane.sugarcaneRedRot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.sugarcane.sugarcaneRedRot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.sugarcane.sugarcaneRedRot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.sugarcane.sugarcaneRedRot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.sugarcane.sugarcaneRedRot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.sugarcane.sugarcaneRedRot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.sugarcane.sugarcaneRedRot.otherUsage);
    } else if (cropDisease === "Sugarcane Rust") {
      setDiseaseTitle(CropDataset.leaf.sugarcane.sugarcaneRust.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.sugarcane.sugarcaneRust.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.sugarcane.sugarcaneRust.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.sugarcane.sugarcaneRust.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.sugarcane.sugarcaneRust.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.sugarcane.sugarcaneRust.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.sugarcane.sugarcaneRust.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.sugarcane.sugarcaneRust.otherUsage);
    } else if (cropDisease === "Sugarcane Yellow Rot") {
      setDiseaseTitle(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.sugarcane.sugarcaneYellowRot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.sugarcane.sugarcaneYellowRot.otherUsage);
    }

    // Tomato
    else if (cropDisease === "Tomato Bacterial Spot") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoBacterialSpot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoBacterialSpot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoBacterialSpot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoBacterialSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoBacterialSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoBacterialSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoBacterialSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoBacterialSpot.otherUsage);
    } else if (cropDisease === "Tomato Early Blight") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoEarlyBlight.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoEarlyBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoEarlyBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoEarlyBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoEarlyBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoEarlyBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoEarlyBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoEarlyBlight.otherUsage);
    } else if (cropDisease === "Tomato Late Blight") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoLateBlight.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoLateBlight.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoLateBlight.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoLateBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoLateBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoLateBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoLateBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoLateBlight.otherUsage);
    } else if (cropDisease === "Tomato Leaf Mold") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoLeafMold.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.tomato.tomatoLeafMold.description);
      setDiseasePrecautions(CropDataset.leaf.tomato.tomatoLeafMold.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoLeafMold.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoLeafMold.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoLeafMold.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoLeafMold.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoLeafMold.otherUsage);
    } else if (cropDisease === "Tomato Leaf Spot") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoLeafSpot.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.tomato.tomatoLeafSpot.description);
      setDiseasePrecautions(CropDataset.leaf.tomato.tomatoLeafSpot.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoLeafSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoLeafSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoLeafSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoLeafSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoLeafSpot.otherUsage);
    } else if (cropDisease === "Tomato Mosaic Virus") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoMosaicVirus.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoMosaicVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoMosaicVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoMosaicVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoMosaicVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoMosaicVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoMosaicVirus.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoMosaicVirus.otherUsage);
    } else if (cropDisease === "Tomato Spider Mite") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoSpiderMite.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoSpiderMite.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoSpiderMite.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoSpiderMite.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoSpiderMite.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoSpiderMite.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoSpiderMite.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoSpiderMite.otherUsage);
    } else if (cropDisease === "Tomato Target Spot") {
      setDiseaseTitle(CropDataset.leaf.tomato.tomatoTargetSpot.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoTargetSpot.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoTargetSpot.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoTargetSpot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoTargetSpot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoTargetSpot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoTargetSpot.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.tomato.tomatoTargetSpot.otherUsage);
    } else if (cropDisease === "Tomato Yellow Leaf Curl Virus") {
      setDiseaseTitle(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.suggestedChemicals
      );
      setCropUsage(
        CropDataset.leaf.tomato.tomatoYellowLeafCurlVirus.otherUsage
      );
    }

    // Watermelon
    else if (cropDisease === "Watermelon Downey Mildew") {
      setDiseaseTitle(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.suggestedChemicals
      );
      setCropUsage(
        CropDataset.leaf.watermelon.watermelonDowneyMildew.otherUsage
      );
    } else if (cropDisease === "Watermelon Mosaic Virus") {
      setDiseaseTitle(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.suggestedChemicals
      );
      setCropUsage(
        CropDataset.leaf.watermelon.watermelonMosaicVirus.otherUsage
      );
    }

    // Wheat
    else if (cropDisease === "Wheat Black Rust") {
      setDiseaseTitle(CropDataset.leaf.wheat.wheatBlackRust.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.wheat.wheatBlackRust.description);
      setDiseasePrecautions(CropDataset.leaf.wheat.wheatBlackRust.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.wheat.wheatBlackRust.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.wheat.wheatBlackRust.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.wheat.wheatBlackRust.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.wheat.wheatBlackRust.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.wheat.wheatBlackRust.otherUsage);
    } else if (cropDisease === "Wheat Brown Rust") {
      setDiseaseTitle(CropDataset.leaf.wheat.wheatBrownRust.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.wheat.wheatBrownRust.description);
      setDiseasePrecautions(CropDataset.leaf.wheat.wheatBrownRust.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.wheat.wheatBrownRust.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.wheat.wheatBrownRust.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.wheat.wheatBrownRust.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.wheat.wheatBrownRust.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.wheat.wheatBrownRust.otherUsage);
    } else if (cropDisease === "Wheat Leaf Blight") {
      setDiseaseTitle(CropDataset.leaf.wheat.wheatLeafBlight.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.wheat.wheatLeafBlight.description);
      setDiseasePrecautions(CropDataset.leaf.wheat.wheatLeafBlight.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.wheat.wheatLeafBlight.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.wheat.wheatLeafBlight.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.wheat.wheatLeafBlight.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.wheat.wheatLeafBlight.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.wheat.wheatLeafBlight.otherUsage);
    } else if (cropDisease === "Wheat Powdery Mildew") {
      setDiseaseTitle(CropDataset.leaf.wheat.wheatPowderyMildew.diseaseTitle);
      setDiseaseDescription(
        CropDataset.leaf.wheat.wheatPowderyMildew.description
      );
      setDiseasePrecautions(
        CropDataset.leaf.wheat.wheatPowderyMildew.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.leaf.wheat.wheatPowderyMildew.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.wheat.wheatPowderyMildew.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.wheat.wheatPowderyMildew.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.wheat.wheatPowderyMildew.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.wheat.wheatPowderyMildew.otherUsage);
    } else if (cropDisease === "Wheat Scab") {
      setDiseaseTitle(CropDataset.leaf.wheat.wheatScab.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.wheat.wheatScab.description);
      setDiseasePrecautions(CropDataset.leaf.wheat.wheatScab.precautions);
      setDiseaseHomeRemedies(CropDataset.leaf.wheat.wheatScab.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.leaf.wheat.wheatScab.organicSolutions
      );
      setDiseaseTreatments(CropDataset.leaf.wheat.wheatScab.suggestedTreatment);
      setDiseaseChemicals(CropDataset.leaf.wheat.wheatScab.suggestedChemicals);
      setCropUsage(CropDataset.leaf.wheat.wheatScab.otherUsage);
    } else if (cropDisease === "Wheat Yellow Rust") {
      setDiseaseTitle(CropDataset.leaf.wheat.wheatYellowRust.diseaseTitle);
      setDiseaseDescription(CropDataset.leaf.wheat.wheatYellowRust.description);
      setDiseasePrecautions(CropDataset.leaf.wheat.wheatYellowRust.precautions);
      setDiseaseHomeRemedies(
        CropDataset.leaf.wheat.wheatYellowRust.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.leaf.wheat.wheatYellowRust.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.leaf.wheat.wheatYellowRust.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.leaf.wheat.wheatYellowRust.suggestedChemicals
      );
      setCropUsage(CropDataset.leaf.wheat.wheatYellowRust.otherUsage);
    }

    // --------------------- Pest ---------------------

    // Banana Pest
    else if (cropDisease === "Banana Pest") {
      setDiseaseTitle(CropDataset.pest.banana.bananaPest.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.banana.bananaPest.description);
      setDiseasePrecautions(CropDataset.pest.banana.bananaPest.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.banana.bananaPest.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.banana.bananaPest.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.banana.bananaPest.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.banana.bananaPest.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.banana.bananaPest.otherUsage);
    }

    // Cashew Pest
    else if (cropDisease === "Cashew Anthracnose") {
      setDiseaseTitle(CropDataset.pest.cashew.cashewAnthracnose.diseaseTitle);
      setDiseaseDescription(
        CropDataset.pest.cashew.cashewAnthracnose.description
      );
      setDiseasePrecautions(
        CropDataset.pest.cashew.cashewAnthracnose.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.pest.cashew.cashewAnthracnose.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cashew.cashewAnthracnose.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cashew.cashewAnthracnose.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cashew.cashewAnthracnose.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cashew.cashewAnthracnose.otherUsage);
    } else if (cropDisease === "Cashew Leaf Miner") {
      setDiseaseTitle(CropDataset.pest.cashew.cashewLeafMiner.diseaseTitle);
      setDiseaseDescription(
        CropDataset.pest.cashew.cashewLeafMiner.description
      );
      setDiseasePrecautions(
        CropDataset.pest.cashew.cashewLeafMiner.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.pest.cashew.cashewLeafMiner.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cashew.cashewLeafMiner.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cashew.cashewLeafMiner.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cashew.cashewLeafMiner.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cashew.cashewLeafMiner.otherUsage);
    }

    // Corn Pest
    else if (cropDisease === "Corn Fall Armyworm") {
      setDiseaseTitle(CropDataset.pest.corn.cornFallArmyworm.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.corn.cornFallArmyworm.description);
      setDiseasePrecautions(CropDataset.pest.corn.cornFallArmyworm.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.corn.cornFallArmyworm.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.corn.cornFallArmyworm.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.corn.cornFallArmyworm.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.corn.cornFallArmyworm.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.corn.cornFallArmyworm.otherUsage);
    } else if (cropDisease === "Corn Grasshopper") {
      setDiseaseTitle(CropDataset.pest.corn.cornGrasshopper.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.corn.cornGrasshopper.description);
      setDiseasePrecautions(CropDataset.pest.corn.cornGrasshopper.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.corn.cornGrasshopper.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.corn.cornGrasshopper.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.corn.cornGrasshopper.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.corn.cornGrasshopper.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.corn.cornGrasshopper.otherUsage);
    } else if (cropDisease === "Corn Leaf Beetle") {
      setDiseaseTitle(CropDataset.pest.corn.cornLeafBeetle.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.corn.cornLeafBeetle.description);
      setDiseasePrecautions(CropDataset.pest.corn.cornLeafBeetle.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.corn.cornLeafBeetle.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.corn.cornLeafBeetle.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.corn.cornLeafBeetle.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.corn.cornLeafBeetle.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.corn.cornLeafBeetle.otherUsage);
    }

    // Cotton Pest
    else if (cropDisease === "Cotton American Bollworm") {
      setDiseaseTitle(
        CropDataset.pest.cotton.cottonAmericanBollworm.diseaseTitle
      );
      setDiseaseDescription(
        CropDataset.pest.cotton.cottonAmericanBollworm.description
      );
      setDiseasePrecautions(
        CropDataset.pest.cotton.cottonAmericanBollworm.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonAmericanBollworm.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonAmericanBollworm.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonAmericanBollworm.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonAmericanBollworm.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonAmericanBollworm.otherUsage);
    } else if (cropDisease === "Cotton Anthracnose") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonAnthracnose.diseaseTitle);
      setDiseaseDescription(
        CropDataset.pest.cotton.cottonAnthracnose.description
      );
      setDiseasePrecautions(
        CropDataset.pest.cotton.cottonAnthracnose.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonAnthracnose.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonAnthracnose.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonAnthracnose.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonAnthracnose.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonAnthracnose.otherUsage);
    } else if (cropDisease === "Cotton Aphid") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonAphid.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonAphid.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonAphid.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.cotton.cottonAphid.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonAphid.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonAphid.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonAphid.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonAphid.otherUsage);
    } else if (cropDisease === "Cotton Bollrot") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonBollrot.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonBollrot.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonBollrot.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonBollrot.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonBollrot.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonBollrot.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonBollrot.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonBollrot.otherUsage);
    } else if (cropDisease === "Cotton Bollworm") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonBollworm.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonBollworm.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonBollworm.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonBollworm.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonBollworm.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonBollworm.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonBollworm.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonBollworm.otherUsage);
    } else if (cropDisease === "Cotton Mealy Bug") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonMealyBug.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonMealyBug.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonMealyBug.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonMealyBug.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonMealyBug.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonMealyBug.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonMealyBug.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonMealyBug.otherUsage);
    } else if (cropDisease === "Cotton Pink Bollworm") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonPinkBollworm.diseaseTitle);
      setDiseaseDescription(
        CropDataset.pest.cotton.cottonPinkBollworm.description
      );
      setDiseasePrecautions(
        CropDataset.pest.cotton.cottonPinkBollworm.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonPinkBollworm.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonPinkBollworm.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonPinkBollworm.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonPinkBollworm.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonPinkBollworm.otherUsage);
    } else if (cropDisease === "Cotton Red Bug") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonRedBug.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonRedBug.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonRedBug.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.cotton.cottonRedBug.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonRedBug.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonRedBug.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonRedBug.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonRedBug.otherUsage);
    } else if (cropDisease === "Cotton Thrips") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonThrips.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonThrips.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonThrips.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.cotton.cottonThrips.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonThrips.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonThrips.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonThrips.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonThrips.otherUsage);
    } else if (cropDisease === "Cotton Whitefly") {
      setDiseaseTitle(CropDataset.pest.cotton.cottonWhitefly.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.cotton.cottonWhitefly.description);
      setDiseasePrecautions(CropDataset.pest.cotton.cottonWhitefly.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.cotton.cottonWhitefly.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.cotton.cottonWhitefly.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.cotton.cottonWhitefly.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.cotton.cottonWhitefly.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.cotton.cottonWhitefly.otherUsage);
    }

    // Eggplant Pest
    else if (cropDisease === "Eggplant Pest") {
      setDiseaseTitle(CropDataset.pest.eggplant.eggplantPest.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.eggplant.eggplantPest.description);
      setDiseasePrecautions(CropDataset.pest.eggplant.eggplantPest.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.eggplant.eggplantPest.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.eggplant.eggplantPest.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.eggplant.eggplantPest.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.eggplant.eggplantPest.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.eggplant.eggplantPest.otherUsage);
    }

    // Potato Pest
    else if (cropDisease === "Potato Nematode") {
      setDiseaseTitle(CropDataset.pest.potato.potatoNematode.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.potato.potatoNematode.description);
      setDiseasePrecautions(CropDataset.pest.potato.potatoNematode.precautions);
      setDiseaseHomeRemedies(
        CropDataset.pest.potato.potatoNematode.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.pest.potato.potatoNematode.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.potato.potatoNematode.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.potato.potatoNematode.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.potato.potatoNematode.otherUsage);
    } else if (cropDisease === "Potato Pest") {
      setDiseaseTitle(CropDataset.pest.potato.potatoPest.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.potato.potatoPest.description);
      setDiseasePrecautions(CropDataset.pest.potato.potatoPest.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.potato.potatoPest.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.potato.potatoPest.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.potato.potatoPest.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.potato.potatoPest.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.potato.potatoPest.otherUsage);
    }

    // Wheat Pest
    else if (cropDisease === "Wheat Aphid") {
      setDiseaseTitle(CropDataset.pest.wheat.wheatAphid.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.wheat.wheatAphid.description);
      setDiseasePrecautions(CropDataset.pest.wheat.wheatAphid.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.wheat.wheatAphid.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.wheat.wheatAphid.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.wheat.wheatAphid.suggestedTreatment
      );
      setDiseaseChemicals(CropDataset.pest.wheat.wheatAphid.suggestedChemicals);
      setCropUsage(CropDataset.pest.wheat.wheatAphid.otherUsage);
    } else if (cropDisease === "Wheat Mite") {
      setDiseaseTitle(CropDataset.pest.wheat.wheatMite.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.wheat.wheatMite.description);
      setDiseasePrecautions(CropDataset.pest.wheat.wheatMite.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.wheat.wheatMite.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.wheat.wheatMite.organicSolutions
      );
      setDiseaseTreatments(CropDataset.pest.wheat.wheatMite.suggestedTreatment);
      setDiseaseChemicals(CropDataset.pest.wheat.wheatMite.suggestedChemicals);
      setCropUsage(CropDataset.pest.wheat.wheatMite.otherUsage);
    } else if (cropDisease === "Wheat Stemfly") {
      setDiseaseTitle(CropDataset.pest.wheat.wheatStemfly.diseaseTitle);
      setDiseaseDescription(CropDataset.pest.wheat.wheatStemfly.description);
      setDiseasePrecautions(CropDataset.pest.wheat.wheatStemfly.precautions);
      setDiseaseHomeRemedies(CropDataset.pest.wheat.wheatStemfly.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.pest.wheat.wheatStemfly.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.pest.wheat.wheatStemfly.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.pest.wheat.wheatStemfly.suggestedChemicals
      );
      setCropUsage(CropDataset.pest.wheat.wheatStemfly.otherUsage);
    }

    // --------------------- Seed ---------------------

    // corn seed
    else if (cropDisease === "Corn Broken") {
      setDiseaseTitle(CropDataset.seed.corn.cornBroken.diseaseTitle);
      setDiseaseDescription(CropDataset.seed.corn.cornBroken.description);
      setDiseasePrecautions(CropDataset.seed.corn.cornBroken.precautions);
      setDiseaseHomeRemedies(CropDataset.seed.corn.cornBroken.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.seed.corn.cornBroken.organicSolutions
      );
      setDiseaseTreatments(CropDataset.seed.corn.cornBroken.suggestedTreatment);
      setDiseaseChemicals(CropDataset.seed.corn.cornBroken.suggestedChemicals);
      setCropUsage(CropDataset.seed.corn.cornBroken.otherUsage);
    } else if (cropDisease === "Corn Discolored") {
      setDiseaseTitle(CropDataset.seed.corn.cornDiscolored.diseaseTitle);
      setDiseaseDescription(CropDataset.seed.corn.cornDiscolored.description);
      setDiseasePrecautions(CropDataset.seed.corn.cornDiscolored.precautions);
      setDiseaseHomeRemedies(CropDataset.seed.corn.cornDiscolored.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.seed.corn.cornDiscolored.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.seed.corn.cornDiscolored.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.seed.corn.cornDiscolored.suggestedChemicals
      );
      setCropUsage(CropDataset.seed.corn.cornDiscolored.otherUsage);
    } else if (cropDisease === "Corn Silkcut") {
      setDiseaseTitle(CropDataset.seed.corn.cornSilkcut.diseaseTitle);
      setDiseaseDescription(CropDataset.seed.corn.cornSilkcut.description);
      setDiseasePrecautions(CropDataset.seed.corn.cornSilkcut.precautions);
      setDiseaseHomeRemedies(CropDataset.seed.corn.cornSilkcut.homeRemedies);
      setDiseaseOrganicSolutions(
        CropDataset.seed.corn.cornSilkcut.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.seed.corn.cornSilkcut.suggestedTreatment
      );
      setDiseaseChemicals(CropDataset.seed.corn.cornSilkcut.suggestedChemicals);
      setCropUsage(CropDataset.seed.corn.cornSilkcut.otherUsage);
    }

    // Soybean seed
    else if (cropDisease === "Soybean Broken") {
      setDiseaseTitle(CropDataset.seed.soybean.soybeanBroken.diseaseTitle);
      setDiseaseDescription(CropDataset.seed.soybean.soybeanBroken.description);
      setDiseasePrecautions(CropDataset.seed.soybean.soybeanBroken.precautions);
      setDiseaseHomeRemedies(
        CropDataset.seed.soybean.soybeanBroken.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.seed.soybean.soybeanBroken.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.seed.soybean.soybeanBroken.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.seed.soybean.soybeanBroken.suggestedChemicals
      );
      setCropUsage(CropDataset.seed.soybean.soybeanBroken.otherUsage);
    } else if (cropDisease === "Soybean Damaged Skin") {
      setDiseaseTitle(CropDataset.seed.soybean.soybeanDamagedSkin.diseaseTitle);
      setDiseaseDescription(
        CropDataset.seed.soybean.soybeanDamagedSkin.description
      );
      setDiseasePrecautions(
        CropDataset.seed.soybean.soybeanDamagedSkin.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.seed.soybean.soybeanDamagedSkin.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.seed.soybean.soybeanDamagedSkin.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.seed.soybean.soybeanDamagedSkin.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.seed.soybean.soybeanDamagedSkin.suggestedChemicals
      );
      setCropUsage(CropDataset.seed.soybean.soybeanDamagedSkin.otherUsage);
    } else if (cropDisease === "Soybean Immature") {
      setDiseaseTitle(CropDataset.seed.soybean.soybeanImmature.diseaseTitle);
      setDiseaseDescription(
        CropDataset.seed.soybean.soybeanImmature.description
      );
      setDiseasePrecautions(
        CropDataset.seed.soybean.soybeanImmature.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.seed.soybean.soybeanImmature.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.seed.soybean.soybeanImmature.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.seed.soybean.soybeanImmature.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.seed.soybean.soybeanImmature.suggestedChemicals
      );
      setCropUsage(CropDataset.seed.soybean.soybeanImmature.otherUsage);
    } else if (cropDisease === "Soybean Spotted") {
      setDiseaseTitle(CropDataset.seed.soybean.soybeanSpotted.diseaseTitle);
      setDiseaseDescription(
        CropDataset.seed.soybean.soybeanSpotted.description
      );
      setDiseasePrecautions(
        CropDataset.seed.soybean.soybeanSpotted.precautions
      );
      setDiseaseHomeRemedies(
        CropDataset.seed.soybean.soybeanSpotted.homeRemedies
      );
      setDiseaseOrganicSolutions(
        CropDataset.seed.soybean.soybeanSpotted.organicSolutions
      );
      setDiseaseTreatments(
        CropDataset.seed.soybean.soybeanSpotted.suggestedTreatment
      );
      setDiseaseChemicals(
        CropDataset.seed.soybean.soybeanSpotted.suggestedChemicals
      );
      setCropUsage(CropDataset.seed.soybean.soybeanSpotted.otherUsage);
    }

    // end
  };

  const handleDiseaseChange = () => {
    setCropDisease(document.getElementById("cropCategoryId").value);
    handleDiseaseSetData();
  };

  const handleGenerateButton = () => {
    handleDiseaseChange();
    if (cropDisease !== "Select Crop Disease") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const pdfRef = useRef();
  const downloadPDF = () => {
    document.getElementById("loader__div").style.display = "block";
    const element = pdfRef.current;

    html2canvas(element, { scrollX: 0, scrollY: -window.scrollY }).then(
      function (canvas) {
        const pdf = new jsPDF();

        // Get the page width and height
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        // Set padding for the content in the PDF (e.g., 10mm on all sides)
        const padding = 10; // Adjust this value as needed
        const imgWidth = pdfWidth - 2 * padding; // Image width considering padding
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        const imgData = canvas.toDataURL("image/png");

        let heightLeft = imgHeight;
        let position = padding;

        // Add image to PDF and handle overflow to multiple pages
        while (heightLeft > 0) {
          pdf.addImage(imgData, "PNG", padding, position, imgWidth, imgHeight);

          // Update the height left for the next page
          heightLeft -= pdfHeight - 2 * padding; // Subtract the space occupied by the current page
          position -= pdfHeight - 2 * padding; // Move down for the next page

          // If content overflows, add a new page
          if (heightLeft > 0) {
            pdf.addPage();
          }
        }

        // Save the PDF
        pdf.save("crop_report.pdf");
        document.getElementById("loader__div").style.display = "none";
      }
    );
  };

  return (
    <>
      <div className="min-h-[75vh] my-16">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-evenly gap-10 my-12">
          <div>
            <select
              onChange={handlePartChange}
              className="text-lg font-semibold py-2 px-3 cursor-pointer min-w-[218px]"
            >
              <option value="Select Plant Part">Select Plant Part</option>
              <option value="Leaf">Leaf</option>
              <option value="Pest">Pest</option>
              <option value="Seed">Seed</option>
            </select>
          </div>
          <div>
            <select
              onChange={handleCategoryChange}
              className={`text-lg font-semibold py-2 px-3 min-w-[218px] ${
                plantPart === "Select Plant Part"
                  ? "cursor-no-drop"
                  : "cursor-pointer"
              }`}
            >
              <option value="Select Crop Category">Select Crop Category</option>
              {plantPart === "Leaf" ? (
                <>
                  <option value="Apple">Apple</option>
                  <option value="Banana">Banana</option>
                  <option value="Cassava">Cassava</option>
                  <option value="Cherry">Cherry</option>
                  <option value="Corn">Corn</option>
                  <option value="Cucumber">Cucumber</option>
                  <option value="Eggplant">Eggplant</option>
                  <option value="Grapes">Grapes</option>
                  <option value="Moneyplant">Moneyplant</option>
                  <option value="Peach">Peach</option>
                  <option value="Pepper">Pepper</option>
                  <option value="Potato">Potato</option>
                  <option value="Strawberry">Strawberry</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Tomato">Tomato</option>
                  <option value="Watermelon">Watermelon</option>
                  <option value="Wheat">Wheat</option>
                </>
              ) : (
                ""
              )}

              {plantPart === "Pest" ? (
                <>
                  <option value="Banana">Banana</option>
                  <option value="Cashew">Cashew</option>
                  <option value="Corn">Corn</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Eggplant">Eggplant</option>
                  <option value="Potato">Potato</option>
                  <option value="Wheat">Wheat</option>
                </>
              ) : (
                ""
              )}

              {plantPart === "Seed" ? (
                <>
                  <option value="Corn">Corn</option>
                  <option value="Soybean">Soybean</option>
                </>
              ) : (
                ""
              )}
            </select>
          </div>
          <div>
            <select
              id="cropCategoryId"
              onChange={handleDiseaseChange}
              className={`text-lg font-semibold py-2 px-3 min-w-[218px] ${
                cropCategory === "Select Crop Category"
                  ? "cursor-no-drop"
                  : "cursor-pointer"
              }`}
            >
              <option value="Select Crop Disease">Select Crop Disease</option>
              {plantPart === "Leaf" ? (
                <>
                  {cropCategory === "Apple" ? (
                    <>
                      <option value="Apple Black Rot">Apple Black Rot</option>
                      <option value="Apple Cedar Rust">Apple Cedar Rust</option>
                      <option value="Apple Scab">Apple Scab</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Banana" ? (
                    <>
                      <option value="Banana Black Sigatoka">
                        Banana Black Sigatoka
                      </option>
                      <option value="Banana Bract Mosaic Virus">
                        Banana Bract Mosaic Virus
                      </option>
                      <option value="Banana Moko">Banana Moko</option>
                      <option value="Banana Panama">Banana Panama</option>
                      <option value="Banana Yellow Sigatoka">
                        Banana Yellow Sigatoka
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Cassava" ? (
                    <>
                      <option value="Cassava Bacterial Blight">
                        Cassava Bacterial Blight
                      </option>
                      <option value="Cassava Brown Spot">
                        Cassava Brown Spot
                      </option>
                      <option value="Cassava Green Mite">
                        Cassava Green Mite
                      </option>
                      <option value="Cassava Mosaic Virus">
                        Cassava Mosaic Virus
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Cherry" ? (
                    <>
                      <option value="Cherry Powdery Mildew">
                        Cherry Powdery Mildew
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Corn" ? (
                    <>
                      <option value="Corn Common Rust">Corn Common Rust</option>
                      <option value="Corn Gray Leaf Spot">
                        Corn Gray Leaf Spot
                      </option>
                      <option value="Corn Northern Leaf Blight">
                        Corn Northern Leaf Blight
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Cucumber" ? (
                    <>
                      <option value="Cucumber Downey Mildew">
                        Cucumber Downey Mildew
                      </option>
                      <option value="Cucumber Powdery Mildew">
                        Cucumber Powdery Mildew
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Eggplant" ? (
                    <>
                      <option value="Eggplant Leaf Spot">
                        Eggplant Leaf Spot
                      </option>
                      <option value="Eggplant Mosaic Virus">
                        Eggplant Mosaic Virus
                      </option>
                      <option value="Eggplant Small Leaf">
                        Eggplant Small Leaf
                      </option>
                      <option value="Eggplant White Mold">
                        Eggplant White Mold
                      </option>
                      <option value="Eggplant Wilt">Eggplant Wilt</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Grapes" ? (
                    <>
                      <option value="Grapes Black Measles">
                        Grapes Black Measles
                      </option>
                      <option value="Grapes Black Rot">Grapes Black Rot</option>
                      <option value="Grapes Leaf Spot">Grapes Leaf Spot</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Moneyplant" ? (
                    <>
                      <option value="Moneyplant Bacterial Wilt">
                        Moneyplant Bacterial Wilt
                      </option>
                      <option value="Moneyplant Manganese Toxicity">
                        Moneyplant Manganese Toxicity
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Peach" ? (
                    <>
                      <option value="Peach Bacterial Spot">
                        Peach Bacterial Spot
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Pepper" ? (
                    <>
                      <option value="Pepper Bacterial Spot">
                        Pepper Bacterial Spot
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Potato" ? (
                    <>
                      <option value="Potato Early Blight">
                        Potato Early Blight
                      </option>
                      <option value="Potato Late Blight">
                        Potato Late Blight
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Strawberry" ? (
                    <>
                      <option value="Strawberry Leaf Scorch">
                        Strawberry Leaf Scorch
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Sugarcane" ? (
                    <>
                      <option value="Sugarcane Bacterial Blight">
                        Sugarcane Bacterial Blight
                      </option>
                      <option value="Sugarcane Mosaic Virus">
                        Sugarcane Mosaic Virus
                      </option>
                      <option value="Sugarcane Red Rot">
                        Sugarcane Red Rot
                      </option>
                      <option value="Sugarcane Rust">Sugarcane Rust</option>
                      <option value="Sugarcane Yellow Rot">
                        Sugarcane Yellow Rot
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Tomato" ? (
                    <>
                      <option value="Tomato Bacterial Spot">
                        Tomato Bacterial Spot
                      </option>
                      <option value="Tomato Early Blight">
                        Tomato Early Blight
                      </option>
                      <option value="Tomato Late Blight">
                        Tomato Late Blight
                      </option>
                      <option value="Tomato Leaf Mold">Tomato Leaf Mold</option>
                      <option value="Tomato Leaf Spot">Tomato Leaf Spot</option>
                      <option value="Tomato Mosaic Virus">
                        Tomato Mosaic Virus
                      </option>
                      <option value="Tomato Spider Mite">
                        Tomato Spider Mite
                      </option>
                      <option value="Tomato Target Spot">
                        Tomato Target Spot
                      </option>
                      <option value="Tomato Leaf Curl Virus">
                        Tomato Yellow Leaf Curl Virus
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Watermelon" ? (
                    <>
                      <option value="Watermelon Downey Mildew">
                        Watermelon Downey Mildew
                      </option>
                      <option value="Watermelon Mosaic Virus">
                        Watermelon Mosaic Virus
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Wheat" ? (
                    <>
                      <option value="Wheat Black Rust">Wheat Black Rust</option>
                      <option value="Wheat Brown Rust">Wheat Brown Rust</option>
                      <option value="Wheat Leaf Blight">
                        Wheat Leaf Blight
                      </option>
                      <option value="Wheat Powdery Mildew">
                        Wheat Powdery Mildew
                      </option>
                      <option value="Wheat Scab">Wheat Scab</option>
                      <option value="Wheat Yellow Rust">
                        Wheat Yellow Rust
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}

              {plantPart === "Pest" ? (
                <>
                  {cropCategory === "Banana" ? (
                    <>
                      <option value="Banana Pest">Banana Pest</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Cashew" ? (
                    <>
                      <option value="Cashew Anthracnose">
                        Cashew Anthracnose
                      </option>
                      <option value="Cashew Leaf Miner">
                        Cashew Leaf Miner
                      </option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Corn" ? (
                    <>
                      <option value="Corn Fall Armyworm">
                        Corn Fall Armyworm
                      </option>
                      <option value="Corn Grasshopper">Corn Grasshopper</option>
                      <option value="Corn Leaf Beetle">Corn Leaf Beetle</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Cotton" ? (
                    <>
                      <option value="Cotton American Bollworm">
                        Cotton American Bollworm
                      </option>
                      <option value="Cotton Anthracnose">
                        Cotton Anthracnose
                      </option>
                      <option value="Cotton Aphid">Cotton Aphid</option>
                      <option value="Cotton Bollrot">Cotton Bollrot</option>
                      <option value="Cotton Bollworm">Cotton Bollworm</option>
                      <option value="Cotton Mealy Bug">Cotton Mealy Bug</option>
                      <option value="Cotton Pink Bollworm">
                        Cotton Pink Bollworm
                      </option>
                      <option value="Cotton Red Bug">Cotton Red Bug</option>
                      <option value="Cotton Thrips">Cotton Thrips</option>
                      <option value="Cotton Whitefly">Cotton Whitefly</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Eggplant" ? (
                    <>
                      <option value="Eggplant Pest">Eggplant Pest</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Potato" ? (
                    <>
                      <option value="Potato Nematode">Potato Nematode</option>
                      <option value="Potato Pest">Potato Pest</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Wheat" ? (
                    <>
                      <option value="Wheat Aphid">Wheat Aphid</option>
                      <option value="Wheat Mite">Wheat Mite</option>
                      <option value="Wheat Stemfly">Wheat Stemfly</option>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}

              {plantPart === "Seed" ? (
                <>
                  {cropCategory === "Corn" ? (
                    <>
                      <option value="Corn Broken">Corn Broken</option>
                      <option value="Corn Discolored">Corn Discolored</option>
                      <option value="Corn Silkcut">Corn Silkcut</option>
                    </>
                  ) : (
                    ""
                  )}
                  {cropCategory === "Soybean" ? (
                    <>
                      <option value="Soybean Broken">Soybean Broken</option>
                      <option value="Soybean Damaged Skin">
                        Soybean Damaged Skin
                      </option>
                      <option value="Soybean Immature">Soybean Immature</option>
                      <option value="Soybean Spotted">Soybean Spotted</option>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </select>
          </div>
          <div>
            <button
              onClick={handleGenerateButton}
              className={`px-4 py-2 text-white text-2xl font-bold rounded-lg bg-[#0F8922] ${
                cropDisease === "Select Crop Disease"
                  ? "cursor-no-drop"
                  : "cursor-pointer"
              }`}
            >
              Generate Report
            </button>
          </div>
        </div>
        <div
          id="report"
          ref={pdfRef}
          className={`flex flex-col gap-5 mx-4 px-4 md:mx-20 md:px-10 py-5 bg-green-200 ${
            isVisible ? "" : "hidden"
          }`}
        >
          <div className="w-full flex flex-row flex-wrap items-center justify-evenly gap-10">
            <div className="w-[100px]">
              <img src={Logo} alt="logo" className="w-full h-full" />
            </div>
            <h1 className="text-md md:text-2xl font-bold">
              Crop Disease Report by Kisan Kranti
            </h1>
          </div>
          <div className="my-4">
            <h3 className="text-xl font-bold my-1">{diseaseTitle}</h3>
            <p className="my-1 text-justify">{diseaseDescription}</p>
          </div>
          <div className="my-2">
            <h3 className="text-xl font-bold my-1">Precautions</h3>
            {diseasePrecautions.map((precaution) => {
              return (
                <>
                  <ul className="list-disc pl-8">
                    <li className="text-justify">{precaution}</li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="my-2">
            <h3 className="text-xl font-bold my-1">Natural Remedies</h3>
            {diseaseHomeRemedies.map((remedy) => {
              return (
                <>
                  <ul className="list-disc pl-8">
                    <li className="text-justify">{remedy}</li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="my-2">
            <h3 className="text-xl font-bold my-1">Organic Solutions</h3>
            {diseaseOrganicSolutions.map((organicSolution) => {
              return (
                <>
                  <ul className="list-disc pl-8">
                    <li className="text-justify">{organicSolution}</li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="my-2">
            <h3 className="text-xl font-bold my-1">Treatments</h3>
            {diseaseTreatments.map((treatment) => {
              return (
                <>
                  <ul className="list-disc pl-8">
                    <li className="text-justify">{treatment}</li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="my-2">
            <h3 className="text-xl font-bold my-1">Suggested Chemicals</h3>
            {Object.values(diseaseChemicals).map((chemical) => {
              return (
                <>
                  <ul className="list-disc pl-8">
                    <li className="my-2 text-justify">
                      {chemical.name} <br />
                      <ul className="list-disc pl-12">
                        <li className="text-justify">{chemical.price}</li>
                        <li className="text-justify">{chemical.amount}</li>
                        <li className="text-justify">{chemical.dosage}</li>
                      </ul>
                    </li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="my-2">
            <h3 className="text-xl font-bold my-1">
              Other Usage of Waste Crop:
            </h3>
            {cropUsage.map((usage) => {
              return (
                <>
                  <ul className="list-disc pl-8">
                    <li className="text-justify">{usage}</li>
                  </ul>
                </>
              );
            })}
          </div>
          <div className="flex flex-col items-center flex-wrap md:mx-20">
            <span className="text-center text-2xl font-semibold text-red-700 my-1">
              DISCLAIMER !!!!!
            </span>
            <p className="text-justify font-semibold text-red-700">
              Always consult with plant doctors or professionals for specific
              recommendations and practices tailored to your region. Also, price
              of items suggested here are average prices which may change over
              time.
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center gap-4 my-10 ${
            isVisible ? "" : "hidden"
          }`}
        >
          <button
            onClick={downloadPDF}
            className="px-4 py-2 bg-[#0F8922] hover:bg-[#13AE2B] hover:scale-[1.05] text-2xl font-bold text-white rounded-lg"
          >
            Download Report
          </button>
          <div
            id="loader__div"
            className="w-12 h-12 border-[4px] border-gray-300 border-t-[4px] border-t-blue-500 rounded-full animate-spin hidden"
          ></div>
        </div>
        <div className={`my-10 ${isVisible ? "" : "hidden"}`}>
          <h3 className="text-center font-bold text-lg my-5">
            You can buy the items suggested in our report from the websites
            below:
          </h3>
          <div className="flex flex-col md:flex-row flex-wrap items-center gap-8 mx-12 my-8">
            <a
              href="https://agribegri.com"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                Agriberi
              </button>
            </a>
            <a
              href="https://www.bighaat.com"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                BigHaat
              </button>
            </a>
            <a
              href="https://www.indiamart.com"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                IndiaMART
              </button>
            </a>
            <a
              href="https://www.amazon.in"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                Amazon
              </button>
            </a>
            <a
              href="https://www.amazon.in/b?ie=UTF8&node=21529176031"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                Amazon Kisan Store
              </button>
            </a>
            <a
              href="https://bulkagrochem.com"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                Bulkagrochem
              </button>
            </a>
            <a
              href="https://krishibazaar.in"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                Krishi Bazaar
              </button>
            </a>
            <a
              href="https://blinkit.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold"
            >
              <button className="bg-[#0077b5] hover:bg-[#0092DE] px-4 py-2 hover:scale-[1.05] rounded-lg min-w-[183px]">
                Blinkit
              </button>
            </a>
          </div>
        </div>
        <div className={`my-10 ${isVisible ? "" : "hidden"}`}>
          <MedicineCalculator />
        </div>
      </div>
    </>
  );
};

export default CropReportPage;
